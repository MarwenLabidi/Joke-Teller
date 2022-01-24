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
		VitePWA({
			includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
			manifest: {
				name: 'Joke-Teller',
				short_name: 'Joke-Teller',
				description: 'a robot that tells jokes',
				theme_color: '#00FF00',
				icons: [{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					}
				]
			},
			registerType: 'autoUpdate',
			workbox: {
				runtimeCaching: [{
						urlPattern: / https:\/\/fonts\.gstatic\.com\/s\/raleway\/v22\/1Ptug8zYS_SKggPNyC0ITw\.woff2/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					},

				]
			}
		})
	]

})