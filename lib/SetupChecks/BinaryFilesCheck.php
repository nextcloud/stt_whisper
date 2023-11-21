<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Anupam Kumar <kyteinsky@gmail.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\SetupChecks;

use OCA\SttWhisper\Service\SpeechToTextService;
use OCP\IL10N;
use OCP\SetupCheck\ISetupCheck;
use OCP\SetupCheck\SetupResult;

class BinaryFilesCheck implements ISetupCheck {
	public function __construct(
		private IL10N $l10n,
		private SpeechToTextService $stt,
	) {
	}

	public function getCategory(): string {
		return 'ai';
	}

	public function getName(): string {
		return 'Checking if binary files are present for Whisper Speech-To-Text app';
	}

	public function run(): SetupResult {
		if ($this->isBinaryPresent($this->stt->getFfmpegBinary() . ' -version') === false) {
			return SetupResult::error($this->l10n->t('Could not execute the FFmpeg executable. You may need to set the path to a working executable manually in the "Whisper Speech-To-Text app" section of the admin settings.'));
		}

		if ($this->isBinaryPresent($this->stt->getWhisperBinary() . ' -h') === false) {
			return SetupResult::error($this->l10n->t('Could not execute the Whisper executable. You may need to compile Whisper yourself for it to run on this server\'s processor architecture.'));
		}

		if ($this->stt->isAVXSupported() === false) {
			return SetupResult::error($this->l10n->t('It seems that your server processor does not support AVX instructions. Without AVX instructions Whisper app currently does not work.'));
		}

		return SetupResult::success($this->l10n->t('Whisper Speech-To-Text app binary files are present'));
	}

	private function isBinaryPresent(string $command): bool {
		try {
			exec($command, $output, $returnCode);
		} catch (\Throwable $e) {
			return false;
		}
		return $returnCode === 0;
	}
}
