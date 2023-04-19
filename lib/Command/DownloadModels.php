<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\Command;

use OCA\SttWhisper\Service\DownloadModelsService;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class DownloadModels extends Command {
	private DownloadModelsService $downloader;

	public const DEFAULT_MODELS = ['medium'];

	public function __construct(DownloadModelsService $downloader) {
		parent::__construct();
		$this->downloader = $downloader;
	}

	/**
	 * Configure the command
	 *
	 * @return void
	 */
	protected function configure() {
		$this->setName('stt-whisper:download-models')
			->setDescription('Download the necessary machine learning models');
		$this->addOption('force', 'f', InputOption::VALUE_NONE, 'Force download even if the model(s) are downloaded already');
		$this->addArgument('models', InputArgument::IS_ARRAY, 'The models to download (available: small, medium, large)', self::DEFAULT_MODELS);
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
			$models = array_intersect($input->getArgument('models'), DownloadModelsService::AVAILABLE_MODELS);
			foreach ($models as $model) {
				$output->writeln("Downloading model ".$model);
				if ($this->downloader->download($model, $input->getOption('force'))) {
					$output->writeln('Successful');
				} else {
					$output->writeln('Model is not available, skipping');
				}
			}
		} catch (\Exception $ex) {
			$output->writeln('<error>Failed to download models</error>');
			$output->writeln($ex->getMessage());
			return 1;
		}

		return 0;
	}
}
