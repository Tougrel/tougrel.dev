// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-10-14",

	nitro: {
		preset: process.env.NITRO_PRESET || "node",
	},

	modules: ["@nuxt/fonts", "@nuxt/devtools", "@nuxt/ui", "@nuxt/icon", "nuxt-delay-hydration"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler",
				},
			},
		},
	},

	runtimeConfig: {
		public: {},
	},

	fonts: {
		provider: "bunny",
		defaults: {
			weights: [400, 500, 600, 700, 800],
		},
		experimental: {
			processCSSVariables: true,
		},
	},

	icon: {
		clientBundle: {
			scan: true,
			sizeLimitKb: 256,
		},
	},

	delayHydration: {
		debug: process.env.NODE_ENV === "development",
		mode: "mount",
	},
});
