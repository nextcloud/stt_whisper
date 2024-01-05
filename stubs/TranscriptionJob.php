<?php

declare(strict_types=1);

namespace OC\SpeechToText;

class TranscriptionJob extends \OCP\BackgroundJob\QueuedJob {
	public function __construct(\OCP\AppFramework\Utility\ITimeFactory $timeFactory, \OCP\SpeechToText\ISpeechToTextManager $speechToTextManager, \OCP\EventDispatcher\IEventDispatcher $eventDispatcher, \OCP\Files\IRootFolder $rootFolder, \Psr\Log\LoggerInterface $logger) {}
	protected function run($argument) {}
}

