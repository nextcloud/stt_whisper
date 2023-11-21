<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\SttWhisper\AppInfo;

use OCA\SttWhisper\Provider\SpeechToText;
use OCA\SttWhisper\SetupChecks\BinaryFilesCheck;
use OCA\SttWhisper\SetupChecks\ModelFilesCheck;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IRegistrationContext;

class Application extends App implements IBootstrap {
	public const APP_ID = 'stt_whisper';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerSpeechToTextProvider(SpeechToText::class);
		$context->registerSetupCheck(ModelFilesCheck::class);
		$context->registerSetupCheck(BinaryFilesCheck::class);
	}

	public function boot(IBootContext $context): void {
		// TODO: Implement boot() method.
	}
}
