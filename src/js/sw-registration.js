//service worker registration
import {
	registerSW
} from 'virtual:pwa-register'

const updateSW = registerSW({
	onNeedRefresh() {},
	onOfflineReady() {},
})