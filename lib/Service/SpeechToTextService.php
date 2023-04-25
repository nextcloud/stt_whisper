<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later
namespace OCA\SttWhisper\Service;

use OCP\ITempManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\Process\Exception\ProcessTimedOutException;
use Symfony\Component\Process\Exception\RuntimeException;
use Symfony\Component\Process\Process;

class SpeechToTextService {
	public function __construct(
		private LoggerInterface $logger,
		private ITempManager $tempManager,
		private SettingsService $settings,
	) {
	}

	public function getAvailableModels(): array {
		$directoryIterator = new \DirectoryIterator(__DIR__ . '/../../models/');

		$availableModels = [];
		foreach ($directoryIterator as $dir) {
			if ($dir->isDot()) {
				continue;
			}
			if (!$dir->isDir()) {
				continue;
			}
			$availableModels[] = $dir->getFilename();
		}
		return $availableModels;
	}

	/**
	 * @param string $path The path to the media file to transcribe
	 * @return string The transcript of the media file
	 */
	public function transcribe(string $path) : string {
		$model = json_decode($this->settings->getSetting('model'));
		if (!in_array($model, DownloadModelsService::AVAILABLE_MODELS, true)) {
			throw new \RuntimeException('Model not supported');
		}

		$modelPath = __DIR__ . '/../../models/'.$model;
		if (!file_exists($modelPath)) {
			throw new \RuntimeException('Model not downloaded');
		}

		$audioPath = $this->convertToWav($path);

		$threads = (int) $this->settings->getSetting('threads');

		$command = [
			$this->getWhisperBinary(),
			'-m', '../../models/'.$model,
			'-t', $threads,
			'--no-timestamps',
			$audioPath,
		];

		$this->logger->debug('Running ' . var_export($command, true));

		$proc = new Process($command, __DIR__);
		$proc->setTimeout(null);
		try {
			$exitCode = $proc->run();
			if ($exitCode !== 0) {
				$this->logger->warning($proc->getErrorOutput());
				throw new \RuntimeException('Whisper process failed');
			}
			$this->tempManager->clean();
			return $proc->getOutput();
		} catch (ProcessTimedOutException $e) {
			$this->tempManager->clean();
			$this->logger->warning($proc->getErrorOutput());
			throw new \RuntimeException('Whisper process timeout');
		} catch (RuntimeException $e) {
			$this->tempManager->clean();
			$this->logger->warning($proc->getErrorOutput());
			throw new \RuntimeException('Whisper process failed');
		}
	}

	/**
	 * @param string $inputPath The media file to convert to wav
	 * @return string The converted wav audio file path
	 */
	public function convertToWav(string $inputPath): string {
		$outputPath = $this->tempManager->getTemporaryFile('.wav');

		$threads = (int) $this->settings->getSetting('threads');

		$command = [
			$this->getFfmpegBinary(),
			'-i', $inputPath,
			'-ar', 16000,
			'-ac', 1,
			'-c:a', 'pcm_s16le',
			'-threads', $threads,
			'-y',
			$outputPath
		];

		$this->logger->debug('Running ' . var_export($command, true));

		$proc = new Process($command, __DIR__);
		$proc->setTimeout(null);
		try {
			$exitCode = $proc->run();
			if ($exitCode !== 0) {
				$this->logger->warning($proc->getErrorOutput());
				throw new \RuntimeException('Conversion process failed');
			}
			return $outputPath;
		} catch (ProcessTimedOutException $e) {
			$this->logger->warning($proc->getErrorOutput());
			throw new \RuntimeException('Conversion process timeout');
		} catch (RuntimeException $e) {
			$this->logger->warning($proc->getErrorOutput());
			throw new \RuntimeException('Conversion process failed: ' . $e->getMessage());
		}
	}

	public function getFfmpegBinary() : string {
		return $this->settings->getSetting('ffmpeg_binary') === '""' || !$this->settings->getSetting('ffmpeg_binary') ? __DIR__ . '/../../node_modules/ffmpeg-static/ffmpeg' : $this->settings->getSetting('ffmpeg_binary');
	}

	public function getWhisperBinary(): string {
		return __DIR__ . '/../../bin/main' . ($this->isMusl()? '-musl' : '');
	}

	public function isAVXSupported(): bool {
		try {
			$cpuinfo = file_get_contents('/proc/cpuinfo');
		} catch (\Throwable $e) {
			return false;
		}

		return $cpuinfo !== false && strpos($cpuinfo, 'avx') !== false;
	}

	public function isMusl(): ?bool {
		try {
			exec('ldd /bin/sh' . ' 2>&1', $output, $returnCode);
		} catch (\Throwable $e) {
		}

		if ($returnCode !== 0) {
			return null;
		}

		return str_contains(trim(implode("\n", $output)), 'musl');
	}
}
