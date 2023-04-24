import Vue from 'vue'
import Tooltip from '@nextcloud/vue/dist/Directives/Tooltip.js'
import App from './components/ViewAdmin.vue'
import AppGlobal from './mixins/AppGlobal.js'

Vue.mixin(AppGlobal)
Vue.directive('tooltip', Tooltip)

global.Recognize = new Vue({
	el: '#stt_whisper',
	render: h => h(App),
})
