<!--
  - Copyright (c) 2023. The stt_whisper contributors.
  -
  - This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
  -->

<template>
	<div id="stt_whisper">
		<figure v-if="loading" class="icon-loading loading" />
		<figure v-if="!loading && success" class="icon-checkmark success" />
		<NcSettingsSection :title="t('stt_whisper', 'Status')">
			<NcNoteCard v-if="modelsDownloaded && Object.values(modelsDownloaded).some(Boolean)" show-alert type="success">
				{{ t('stt_whisper', 'Machine learning models have been downloaded successfully.') }}
			</NcNoteCard>
			<NcNoteCard v-else-if="modelsDownloaded && !Object.values(modelsDownloaded).some(Boolean)" type="error">
				{{ t('stt_whisper', 'The machine learning models still need to be downloaded (see below).') }}
			</NcNoteCard>
			<NcNoteCard v-if="ffmpeg === false" type="error">
				{{ t('stt_whisper', 'Could not execute the ffmpeg executable. You may need to set the path to a working executable manually. (See below.)') }}
			</NcNoteCard>
			<NcNoteCard v-if="whisper === false" type="error">
				{{ t('stt_whisper', 'Could not execute the whisper executable. You may need to compile whisper yourself for it to run on this server\'s processor architecture.') }}
			</NcNoteCard>
			<NcNoteCard v-if="avx === false" type="error">
				{{ t('stt_whisper', 'It seems that your server processor does not support AVX instructions. Without AVX instructions this app currently does not work.') }}
			</NcNoteCard>
			<NcNoteCard v-if="cron !== undefined && cron !== 'cron'" type="error">
				{{ t('stt_whisper', 'Background Jobs are not executed via cron. This app requires background jobs to be executed via cron.') }}
			</NcNoteCard>
			<template v-if="ffmpeg && whisper && cron === 'cron'">
					<NcNoteCard show-alert type="success">
						{{ t('stt_whisper', 'The app was installed successfully and will transcribe files in background processes on request.') }}
					</NcNoteCard>
				<NcNoteCard v-if="countJobs">
					{{ t('recognize', 'Scheduled transcription Jobs: {scheduled}', { scheduled: countJobs.scheduled }) }}, {{ countJobs.running? t('recognize', 'Transcription job currently running') : t('recognize', 'No transcription job currently running') }}
				</NcNoteCard>
			</template>
		</NcSettingsSection>
		<NcSettingsSection :title="t('stt_whisper', 'Whisper')">
			<p>{{ t('stt_whisper', 'Select the machine learning model to be used for Speech-To-Text transcription. The larger the model the more resources like RAM, CPU and time are needed. However, the smaller the model, the less accurate the results will be. To use a model you need to download it using the following command:') }} <code>occ stt_whisper:download-models [small|medium|large]</code></p>
			<p>
				<NcCheckboxRadioSwitch :checked.sync="settings['model']" value="small" type="radio" @update:checked="onChange" :disabled="!modelsDownloaded['small']">
					{{ t('stt_whisper', 'Small model (~1GB RAM, ~1x recording time, ~10-20% word error rate)') }}
				</NcCheckboxRadioSwitch>
				<NcCheckboxRadioSwitch :checked.sync="settings['model']" value="medium" type="radio" @update:checked="onChange" :disabled="!modelsDownloaded['medium']">
					{{ t('stt_whisper', 'Medium model (~2GB RAM, ~3x recording time, ~7-15% word error rate)') }}
				</NcCheckboxRadioSwitch>
				<NcCheckboxRadioSwitch :checked.sync="settings['model']" value="large" type="radio" @update:checked="onChange" :disabled="!modelsDownloaded['large']">
					{{ t('stt_whisper', 'Large model (~3.5GB RAM, ~5x recording time, ~4-12% word error rate)') }}
				</NcCheckboxRadioSwitch>
			</p>
			<p>&nbsp;</p>
			<p>
				<NcTextField
					:value.sync="settings['threads']"
					:label-visible="true"
					:label="t('stt_whisper', 'The number of threads to use (for both transcoding media files to audio as well as the transcription process)')"
					@update:value="onChange" />
			</p>
		</NcSettingsSection>
		<NcSettingsSection :title="t('stt_whisper', 'Ffmpeg')">
			<p v-if="ffmpeg === undefined">
				<span class="icon-loading-small" />&nbsp;&nbsp;&nbsp;&nbsp;{{ t('stt_whisper', 'Checking Ffmpeg') }}
			</p>
			<NcNoteCard v-else-if="ffmpeg === false">
				{{ t('stt_whisper', 'Could not execute the shipped ffmpeg executable. You may need to set the path to a working binary manually.') }}
			</NcNoteCard>
			<NcNoteCard v-else type="success">
				{{ t('stt_whisper', 'Ffmpeg executable was installed successfully and works.') }}
			</NcNoteCard>
			<p>
				{{ t('stt_whisper', 'If the shipped ffmpeg executable doesn\'t work on your system for some reason you can set the path to a custom ffmpeg executable. Leave this empty to use the shipped executable.') }}
			</p>
			<p>
				<input v-model="settings['ffmpeg_binary']" type="text" @change="onChange">
			</p>
		</NcSettingsSection>
	</div>
</template>

<script>
import { NcNoteCard, NcSettingsSection, NcCheckboxRadioSwitch, NcTextField } from '@nextcloud/vue'
import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
import { loadState } from '@nextcloud/initial-state'

const SETTINGS = [
		'ffmpeg_binary',
		'model',
		'threads',
]

export default {
	name: 'ViewAdmin',
	components: { NcSettingsSection, NcNoteCard, NcCheckboxRadioSwitch, NcTextField },

	data() {
		return {
			loading: false,
			success: false,
			error: '',
			countJobs: null,
			settings: SETTINGS.reduce((obj, key) => ({ ...obj, [key]: '' }), {}),
			timeout: null,
			avx: undefined,
			platform: undefined,
			musl: undefined,
			ffmpeg: undefined,
			model: undefined,
			threads: undefined,
			cron: undefined,
			whisper: undefined,
			modelsDownloaded: null,
		}
	},

	watch: {
		error(error) {
			if (!error) return
			OC.Notification.showTemporary(error)
		},
	},
	async created() {
		this.modelsDownloaded = loadState('stt_whisper', 'modelsDownloaded')
		this.getCountJobs()
		this.getAVX()
		this.getPlatform()
		this.getMusl()
		this.getCronStatus()
		this.getWhisperStatus()
		this.getFfmpegStatus()

		setInterval(async () => {
			this.getCountJobs()
		}, 5 * 60 * 1000)

		try {
			const settings = loadState('stt_whisper', 'settings')
			for (const setting of SETTINGS) {
				this.settings[setting] = JSON.parse(settings[setting])
			}
		} catch (e) {
			this.error = this.t('stt_whisper', 'Failed to load settings')
			throw e
		}
	},

	methods: {
		async getCountJobs() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/countJobs'))
			this.countJobs = resp.data
		},
		async getAVX() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/avx'))
			const { avx } = resp.data
			this.avx = avx
		},
		async getPlatform() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/platform'))
			const { platform } = resp.data
			this.platform = platform
		},
		async getMusl() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/musl'))
			const { musl } = resp.data
			this.musl = musl
		},
		async getCronStatus() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/cron'))
			const { cron } = resp.data
			this.cron = cron
		},
		async getWhisperStatus() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/whisper'))
			const { whisper } = resp.data
			this.whisper = whisper
		},
		async getFfmpegStatus() {
			const resp = await axios.get(generateUrl('/apps/stt_whisper/admin/ffmpeg'))
			const { ffmpeg } = resp.data
			this.ffmpeg = ffmpeg
		},
		onChange() {
			if (this.timeout) {
				clearTimeout(this.timeout)
			}
			setTimeout(() => {
				this.submit()
			}, 1000)
		},

		async submit() {
			this.loading = true
			for (const setting in this.settings) {
				await this.setValue(setting, this.settings[setting])
			}
			this.loading = false
			this.success = true
			setTimeout(() => {
				this.success = false
			}, 3000)
		},

		async setValue(setting, value) {
			try {
				value = JSON.stringify(value)
				await axios.put(generateUrl(`/apps/stt_whisper/admin/settings/${setting}`), {
					value,
				})
			} catch (e) {
				this.error = this.t('stt_whisper', 'Failed to save settings')
				throw e
			}
		},

		async getValue(setting) {
			try {
				const res = await axios.get(generateUrl(`/apps/stt_whisper/admin/settings/${setting}`))
				if (res.status !== 200) {
					this.error = this.t('stt_whisper', 'Failed to load settings')
					console.error('Failed request', res)
					return
				}
				return res.data.value
			} catch (e) {
				this.error = this.t('stt_whisper', 'Failed to load settings')
				throw e
			}
		},
	},
}
</script>
<style>
figure[class^='icon-'] {
	display: inline-block;
}

#stt_whisper {
	position: relative;
}

#stt_whisper .loading,
#stt_whisper .success {
	position: fixed;
	top: 70px;
	right: 20px;
}

#stt_whisper label {
	margin-top: 10px;
	display: flex;
}

#stt_whisper label > * {
	padding: 8px 0;
	padding-left: 6px;
}

#stt_whisper input[type=text], #stt_whisper input[type=password] {
	width: 50%;
	min-width: 300px;
	display: block;
}

#stt_whisper a:link, #stt_whisper a:visited, #stt_whisper a:hover {
	text-decoration: underline;
}
</style>
