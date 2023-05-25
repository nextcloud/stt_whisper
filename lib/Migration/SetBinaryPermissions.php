<?php
/*
 * Copyright (c) 2022 The Recognize contributors.
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\Migration;

use OCP\Http\Client\IClientService;
use OCP\IConfig;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;
use Psr\Log\LoggerInterface;

class SetBinaryPermissions implements IRepairStep {

	protected IConfig $config;
	private string $binaryDir;
	private string $ffmpegDir;

	public function __construct(IConfig $config, IClientService $clientService, LoggerInterface $logger) {
		$this->config = $config;
		$this->binaryDir = dirname(__DIR__, 2) . '/bin/';
		$this->ffmpegDir = dirname(__DIR__, 2) . '/node_modules/ffmpeg-static/';
		$this->clientService = $clientService;
		$this->logger = $logger;
	}

	public function getName(): string {
		return 'Set binary permissions';
	}

	public function run(IOutput $output): void {
		$this->setBinariesPermissions();
	}

	/**
	 * fix binaries permissions
	 */
	protected function setBinariesPermissions(): void {
		$iterator = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($this->binaryDir));
		foreach ($iterator as $item) {
			if (chmod(realpath($item->getPathname()), 0755) === false) {
				throw new \Exception('Error when setting '.$this->binaryDir.'* permissions');
			}
		}
		$iterator = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($this->ffmpegDir));
		foreach ($iterator as $item) {
			if (chmod(realpath($item->getPathname()), 0755) === false) {
				throw new \Exception('Error when setting '.$this->ffmpegDir.'* permissions');
			}
		}
	}
}
