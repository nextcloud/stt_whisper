<!--
SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
SPDX-License-Identifier: CC0-1.0
-->

# Whisper Speech-To-Text
Speech-To-Text provider for Nextcloud running OpenAI Whisper locally

The model runs completely on your machine. No private data leaves your servers.

## Requirements
 * Architecture: x86-64
 * OS: Linux

## Ethical AI Rating
### Rating: 🟡

Positive:
* the software for training and inference of this model is open source
* the trained model is freely available, and thus can be run on-premises

Negative:
* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.

Learn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).

## Install
 * Place this app in **nextcloud/apps/**

or 

 * Install from the Nextcloud appstore

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