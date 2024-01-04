<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\Command;

use OCA\SttWhisper\Service\SpeechToTextService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class Transcribe extends Command {
	public function __construct(
		private SpeechToTextService $stt
	) {
		parent::__construct();
	}

	/**
	 * Configure the command
	 *
	 * @return void
	 */
	protected function configure() {
		$this
			->setName('stt_whisper:transcribe')
			->setDescription('Transcribe a media file')
			->addArgument('path', InputArgument::REQUIRED, 'The path to the media file to transcribe')
		;
	}

	/**
	 * Execute the command
	 *
	 * @param InputInterface  $input
	 * @param OutputInterface $output
	 *
	 * @return int
	 */
	protected function execute(InputInterface $input, OutputInterface $output): int {
		try {
			$path = $input->getArgument('path');
			if (!str_starts_with($path, '/')) {
				$path = getcwd() . '/' . $path;
			}
			$output->writeln($this->stt->transcribe($path));
			return 0;
		} catch(\RuntimeException $e) {
			$output->writeln($e->getMessage());
			return 1;
		}
	}
}
