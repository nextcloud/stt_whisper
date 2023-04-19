<?php

// SPDX-FileCopyrightText: ownCloud, Inc.
// SPDX-License-Identifier: AGPL-3.0-only
namespace OCA\SttWhisper\Helper;

abstract class Archive {
	/**
	 * @param $source
	 */
	abstract public function __construct($source);
	/**
	 * add an empty folder to the archive
	 * @param string $path
	 * @return bool
	 */
	abstract public function addFolder($path);
	/**
	 * add a file to the archive
	 * @param string $path
	 * @param string $source either a local file or string data
	 * @return bool
	 */
	abstract public function addFile($path, $source = '');
	/**
	 * rename a file or folder in the archive
	 * @param string $source
	 * @param string $dest
	 * @return bool
	 */
	abstract public function rename($source, $dest);
	/**
	 * get the uncompressed size of a file in the archive
	 * @param string $path
	 * @return int
	 */
	abstract public function filesize($path);
	/**
	 * get the last modified time of a file in the archive
	 * @param string $path
	 * @return int
	 */
	abstract public function mtime($path);
	/**
	 * get the files in a folder
	 * @param string $path
	 * @return array
	 */
	abstract public function getFolder($path);
	/**
	 * get all files in the archive
	 * @return array
	 */
	abstract public function getFiles();
	/**
	 * get the content of a file
	 * @param string $path
	 * @return string
	 */
	abstract public function getFile($path);
	/**
	 * extract a single file from the archive
	 * @param string $path
	 * @param string $dest
	 * @return bool
	 */
	abstract public function extractFile($path, $dest);
	/**
	 * extract the archive
	 * @param string $dest
	 * @return bool
	 */
	abstract public function extract($dest);
	/**
	 * check if a file or folder exists in the archive
	 * @param string $path
	 * @return bool
	 */
	abstract public function fileExists($path);
	/**
	 * remove a file or folder from the archive
	 * @param string $path
	 * @return bool
	 */
	abstract public function remove($path);
	/**
	 * get a file handler
	 * @param string $path
	 * @param string $mode
	 * @return bool|resource
	 */
	abstract public function getStream($path, $mode);
	/**
	 * add a folder and all its content
	 *
	 * @param string $path
	 * @param string $source
	 */
	public function addRecursive($path, $source): void {
		$dh = opendir($source);
		if (is_resource($dh)) {
			$this->addFolder($path);
			while (($file = readdir($dh)) !== false) {
				if ($file === '.' || $file === '..') {
					continue;
				}
				if (is_dir($source.'/'.$file)) {
					$this->addRecursive($path.'/'.$file, $source.'/'.$file);
				} else {
					$this->addFile($path.'/'.$file, $source.'/'.$file);
				}
			}
		}
	}
}
