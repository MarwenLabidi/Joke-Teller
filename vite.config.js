import {
	defineConfig
} from 'vite'
import {
	minifyHtml
} from 'vite-plugin-html'
import {
	VitePWA
} from 'vite-plugin-pwa'


export default defineConfig({
	build: {
		minify: 'esbuild',
		target: "esnext"
	},
	plugins: [
		minifyHtml(),
	]

})