<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later
namespace OCA\SttWhisper\Settings;

use OCA\SttWhisper\AppInfo\Application;
use OCA\SttWhisper\Service\DownloadModelsService;
use OCA\SttWhisper\Service\SettingsService;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\Settings\ISettings;

class AdminSettings implements ISettings {
	private IInitialState $initialState;
	private SettingsService $settingsService;

	public function __construct(IInitialState $initialState, SettingsService $settingsService) {
		$this->initialState = $initialState;
		$this->settingsService = $settingsService;
	}

	/**
	 * @return TemplateResponse
	 */
	public function getForm(): TemplateResponse {
		$settings = $this->settingsService->getAll();
		$this->initialState->provideInitialState('settings', $settings);

		$modelsPath = __DIR__ . '/../../models';
        $modelsDownloaded = array_combine(DownloadModelsService::AVAILABLE_MODELS,
            array_map(function($model) use($modelsPath) {
                return file_exists($modelsPath . '/' . $model);
            }, DownloadModelsService::AVAILABLE_MODELS)
        );
		$this->initialState->provideInitialState('modelsDownloaded', $modelsDownloaded);

		return new TemplateResponse(Application::APP_ID, 'admin');
	}

	/**
	 * @return string the section ID, e.g. 'sharing'
	 */
	public function getSection(): string {
		return 'stt_whisper';
	}

	/**
	 * @return int whether the form should be rather on the top or bottom of the admin section. The forms are arranged in ascending order of the priority values. It is required to return a value between 0 and 100.
	 */
	public function getPriority(): int {
		return 50;
	}
}
