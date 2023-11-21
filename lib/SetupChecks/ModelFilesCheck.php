<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Anupam Kumar <kyteinsky@gmail.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\SetupChecks;

use OCA\SttWhisper\Service\DownloadModelsService;
use OCP\IL10N;
use OCP\SetupCheck\ISetupCheck;
use OCP\SetupCheck\SetupResult;

class ModelFilesCheck implements ISetupCheck {
	public function __construct(
		private IL10N $l10n,
	) {
	}

	public function getCategory(): string {
		return 'ai';
	}

	public function getName(): string {
		return 'Checking if models are downloaded for Whisper Speech-To-Text app';
	}

	public function run(): SetupResult {
		$modelPathFor = fn (string $model) => __DIR__ . '/../../models/' . $model;
		$modelPaths = array_map($modelPathFor, DownloadModelsService::AVAILABLE_MODELS);
		$modelsExist = array_map('file_exists', $modelPaths);

		if (in_array(true, $modelsExist, true)) {
			return SetupResult::success($this->l10n->t('Whisper Speech-To-Text models are downloaded'));
		}
		return SetupResult::error($this->l10n->t(
			'Whisper Speech-To-Text models are not downloaded, please run `occ stt_whisper:download-models [small%1$smedium%1$slarge]` to download them',
			['|', '|']
		));
	}
}
