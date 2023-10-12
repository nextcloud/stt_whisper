<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\Controller;

use OCA\SttWhisper\Service\SettingsService;
use OCA\SttWhisper\Service\SpeechToTextService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\JSONResponse;
use OCP\BackgroundJob\IJobList;
use OCP\IConfig;
use OCP\IRequest;

class AdminController extends Controller {
	public function __construct(
		string $appName,
		IRequest $request,
		private IJobList $jobList,
		private IConfig $config,
		private SpeechToTextService $stt,
		private SettingsService $settingsService,
	) {
		parent::__construct($appName, $request);
	}


	public function countJobs(): JSONResponse {
		return new JSONResponse([
			'scheduled' => count(iterator_to_array($this->jobList->getJobsIterator(\OC\SpeechToText\TranscriptionJob::class, 0, 0))),
			'running' => $this->jobList->hasReservedJob(\OC\SpeechToText\TranscriptionJob::class) ? 1 : 0,
		]);
	}

	public function avx(): JSONResponse {
		return new JSONResponse(['avx' => $this->stt->isAVXSupported()]);
	}

	public function platform(): JSONResponse {
		try {
			exec('lscpu --json' . ' 2>&1', $output, $returnCode);
		} catch (\Throwable $e) {
			return new JSONResponse(['platform' => null]);
		}

		if ($returnCode !== 0) {
			return new JSONResponse(['platform' => null]);
		}

		$lscpu = \json_decode(trim(implode("\n", $output)), true);
		return new JSONResponse(['platform' => $lscpu['lscpu'][0]['data']]);
	}

	public function musl(): JSONResponse {
		return new JSONResponse(['musl' => $this->stt->isMusl()]);
	}

	public function ffmpeg(): JSONResponse {
		try {
			exec($this->stt->getFfmpegBinary() . ' -version' . ' 2>&1', $output, $returnCode);
		} catch (\Throwable $e) {
			return new JSONResponse(['ffmpeg' => false]);
		}

		return new JSONResponse(['ffmpeg' => $returnCode === 0]);
	}

	public function whisper(): JSONResponse {
		try {
			exec($this->stt->getWhisperBinary() . ' -h' . ' 2>&1', $output, $returnCode);
		} catch (\Throwable $e) {
			return new JSONResponse(['whisper' => false]);
		}

		return new JSONResponse(['whisper' => $returnCode === 0]);
	}

	public function cron(): JSONResponse {
		$cron = $this->config->getAppValue('core', 'backgroundjobs_mode', '');
		return new JSONResponse(['cron' => $cron]);
	}

	public function setSetting(string $setting, $value): JSONResponse {
		try {
			$this->settingsService->setSetting($setting, (string) $value);
			return new JSONResponse([], Http::STATUS_OK);
		} catch (\Exception $e) {
			return new JSONResponse([], Http::STATUS_BAD_REQUEST);
		}
	}

	public function getSetting(string $setting):JSONResponse {
		return new JSONResponse(['value' => $this->settingsService->getSetting($setting)]);
	}
}
