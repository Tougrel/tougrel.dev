// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-10-14",

	nitro: {
		preset: process.env.NITRO_PRESET || "node",
	},

	modules: ["@nuxt/fonts", "@nuxt/devtools", "@nuxt/ui", "@nuxt/icon"],

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
});
