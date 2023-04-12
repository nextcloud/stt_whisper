<!--
SPDX-FileCopyrightText: Marcel Klehr <mklehr@gmx.net>
SPDX-License-Identifier: CC0-1.0
-->

# Whisper Speech-To-Text
Speech-To-Text provider running OpenAI Whisper locally

The model runs completely on your machine. No private data leaves your servers.

## Install
 * Place this app in **nextcloud/apps/**

or 

 * Install from the Nextcloud appstore

## Building the app

The app can be built by using the provided Makefile by running:

    make

This requires the following things to be present:
* make
* which
* tar: for building the archive
* curl: used if phpunit and composer are not installed to fetch them from the web
* npm: for building and testing everything JS, only required if a package.json is placed inside the **js/** folder
