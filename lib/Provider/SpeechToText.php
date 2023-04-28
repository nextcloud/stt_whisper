<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later
namespace OCA\SttWhisper\Provider;

use OCA\SttWhisper\Service\SpeechToTextService;
use OCP\Files\File;
use OCP\Files\NotFoundException;
use OCP\IL10N;
use OCP\SpeechToText\ISpeechToTextProvider;
use Psr\Log\LoggerInterface;

class SpeechToText implements ISpeechToTextProvider {
	public function __construct(
		private SpeechToTextService $transcriber,
		private LoggerInterface $logger,
		private IL10N $l
	) {
	}

	public function getName(): string {
		return $this->l->t('Whisper Speech-To-Text');
	}

	public function transcribeFile(File $file): string {
		try {
			$filePath = $file->getStorage()->getLocalFile($file->getPath());
			return $this->transcriber->transcribe($filePath);
		} catch(\RuntimeException|NotFoundException $e) {
			$this->logger->warning('Transcription failed with: ' . $e->getMessage(), ['exception' => $e]);
			throw new \RuntimeException('Transcription failed with: ' . $e->getMessage());
		}
	}
}
