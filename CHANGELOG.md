# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.8] - 2024-01-10

### Fixed

- eslint issues
- php lint issues
- add step in transcribe-test.yml to download the medium model
- set the model setting on model download
- improve path handling in transcribe command
- better logging
- drop separate musl bin in favour of a static binary

### Added

- add setup check to verify if the models are downloaded
- setup checks for binary files

## [1.0.7] - 2023-10-12

### Fixed

- Fixed Admin settings

## [1.0.6] - 2023-09-14

### Fixed

- Fixed 'threads' setting

## [1.0.5] - 2023-07-12

### Fixed
 - composer.json: Don't use classmap-authoritative
 - Update translations from Transifex
 - Add Ethical AI Rating

## [1.0.4] - 2023-05-31

### Fixed

 - fix(convertToWav): Cut out long pauses of silence using ffmpeg
 - fix(binary permissions): Add a migration step

## [1.0.3] - 2023-05-11

### Fixed

- Fixed build

## [1.0.2] - 2023-05-11

### Fixed

- Fixed build

## [1.0.1] - 2023-05-11

### Fixed
- DownloadModelsService: Download models from download.nc.com

## [1.0.0] - 2023-05-08
Initial version
