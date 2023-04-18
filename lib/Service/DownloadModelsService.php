<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\Service;

use FilesystemIterator;
use OCA\Translate\Helper\TAR;
use OCP\Http\Client\IClientService;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class DownloadModelsService {
	private IClientService $clientService;
	private bool $isCLI;

	public const AVAILABLE_MODELS = [
		"small",
		"medium",
		"large",
	];

	public function __construct(IClientService $clientService, bool $isCLI) {
		$this->clientService = $clientService;
		$this->isCLI = $isCLI;
	}

	/**
	 * @return bool
	 * @throws \Exception
	 */
	public function download($model, $force = false) : bool {
		if (!in_array($model, self::AVAILABLE_MODELS, true)) {
			return false;
		}
		$modelPath = __DIR__ . '/../../models/'.$model;
		if (file_exists($modelPath)) {
			if ($force) {
				// remove model directory
				$it = new RecursiveDirectoryIterator($modelPath, FilesystemIterator::SKIP_DOTS);
				$files = new RecursiveIteratorIterator($it,
					RecursiveIteratorIterator::CHILD_FIRST);
				foreach ($files as $file) {
					if ($file->isDir()) {
						rmdir($file->getRealPath());
					} else {
						unlink($file->getRealPath());
					}
				}
				rmdir($modelPath);
			} else {
				return true;
			}
		}
		$archiveUrl = $this->getArchiveUrl($model);
		$archivePath = __DIR__ . '/../../'. $model .'.tar.gz';
		$timeout = $this->isCLI ? 0 : 480;
		$this->clientService->newClient()->get($archiveUrl, ['sink' => $archivePath, 'timeout' => $timeout]);
		$tarManager = new TAR($archivePath);
		$tarFiles = $tarManager->getFiles();
		$targetPath = __DIR__ . '/../../models/';
		$tarManager->extractList($tarFiles, $targetPath);
		unlink($archivePath);
		return true;
	}

	public function getArchiveUrl(string $model): string {
		return "https://github.com/nextcloud-releases/stt_whisper/releases/download/v1.0.0/$model.tar.gz";
	}
}
