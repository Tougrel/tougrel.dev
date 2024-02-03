import type { Config } from "tailwindcss";

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "#20232C",
					900: "#0F1015",
				},
				components: "#282C38",
				nav: "#0F0F16",
				brand: "#5946CE",
				white: {
					DEFAULT: "#CED5E4",
					full: "#FFFFFF",
				},
				projects: {
					galaxy: "#B24193",
					meteora: "#00A4B4",
					aura: "#FA1459",
					pagoexpress: "#3F61A2",
				},
				social: {
					twitter: "#1D9BF0",
					discord: "#5865F2",
					kofi: "#ff5f5f",
					telegram: "#31a4df",
				},
			},
			backgroundImage: {
				gradient:
					"linear-gradient(to right, theme('colors.violet.600'), theme('colors.sky.300'), theme('colors.red.400'), theme('colors.blue.600'), theme('colors.lime.500'), theme('colors.fuchsia.600'), theme('colors.orange.400'), theme('colors.teal.300'), theme('colors.emerald.500'), theme('colors.purple.600'))",
			},
			fontFamily: {
				main: ["Poppins", "Ubuntu", "sans-serif", "system-ui"],
			},
			animation: {
				footerLine: "animateGradientBackground 20s linear infinite",
			},
			keyframes: {
				animateGradientBackground: {
					"0%, 100%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
				},
			},
		},
	},
	safelist: [],
} satisfies Config;
