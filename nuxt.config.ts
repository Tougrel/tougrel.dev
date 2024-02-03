// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: process.env.NITRO_PRESET || "node",
	},

	modules: [
		"@nuxtjs/fontaine",
		"@nuxtjs/google-fonts",
		"@nuxt/devtools",
		"@nuxt/ui",
		"nuxt-cloudflare-analytics",
		"nuxt-icon",
	],

	runtimeConfig: {
		public: {},
	},

	googleFonts: {
		preload: true,
		inject: true,
		download: false,
		prefetch: true,
		preconnect: true,
		base64: true,
		families: {
			Poppins: {
				wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			},
			// "Noto+Emoji": {
			// 	wght: [300, 400, 500, 600, 700],
			// },
		},
	},

	ui: {
		icons: ["heroicons", "mdi"],
	},

	fontMetrics: {
		fonts: ["Poppins", "Ubuntu"],
	},

	cloudflareAnalytics: {
		token: process.env.CLOUDFLARE_ANALYTICS_TOKEN,
	},
});
