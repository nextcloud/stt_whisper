<!--
SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
SPDX-License-Identifier: CC0-1.0
-->

![](https://raw.githubusercontent.com/nextcloud/stt_whisper/main/screenshots/Logo.png)

# Whisper Speech-To-Text
Speech-To-Text provider for Nextcloud running OpenAI Whisper locally on CPU.

The model runs completely on your machine. No private data leaves your servers.

## Requirements
 * Architecture: x86-64 with AVX support
 * OS: Linux

## Model sizes

* Small: 500MB
* Medium: 1.5Gb
* Large: 3.1GB

## Ethical AI Rating
### Rating: 🟡

Positive:
* the software for training and inference of this model is open source
* the trained model is freely available, and thus can be run on-premises

Negative:
* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.

Learn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).

## Install

* Manual install
    * Place this app in **nextcloud/apps/**
* One click install
    * Install from the [Nextcloud Appstore](https://apps.nextcloud.com/apps/stt_whisper)

### Download models

After installing this app you will need to run

    occ stt_whisper:download-models [model-name]

where [model-name] is one of

* small
* medium (default)
* large

## Building the app

The app can be built by using the provided Makefile by running:

    make

This requires the following things to be present:
* make
* which
* tar: for building the archive
* curl: used if phpunit and composer are not installed to fetch them from the web
* npm: for building and testing everything JS, only required if a package.json is placed inside the **js/** folder
* gcc: for building whisper.cpp

## NOTE

A few things to keep in mind.

* Transcriptions need to be enabled in the Talk app if you need the calls to be transcribed with any Speech to Text provider (including this app). It can be set using this `occ` command:

```
occ config:app:set spreed call_recording_transcription --value yes
```

* This app tends to be heavy on CPU. If it starts to be an issue in your normal workflow, you can limit the number of threads used by Whisper in the "Whisper Speech-To-Text" section in the admin settings
* The generated transcriptions may vary in accuracy based on the spoken language.
* Per participant transcription in calls is currently not available but PRs are welcome!
