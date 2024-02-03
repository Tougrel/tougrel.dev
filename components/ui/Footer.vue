<script setup lang="ts">
import pkg from "../../package.json";

interface Page {
	name: string;
	href: string;
	hover: string;
	icon: PageIcon;
}

interface PageIcon {
	name: string;
	color: string;
}

interface Social {
	label: string;
	href: string;
	icon: string;
	color: string;
}

const pages = ref<Page[]>([
	{
		name: "Dashboard",
		href: "https://dashboard.tougrel.dev",
		hover: "hover:text-violet-400",
		icon: {
			name: "mdi:view-dashboard",
			color: "text-violet-500",
		},
	},
	{
		name: "Projects",
		href: "/projects",
		hover: "hover:text-lime-400",
		icon: {
			name: "mdi:format-list-bulleted-type",
			color: "text-lime-500",
		},
	},
	{
		name: "Gateway",
		href: "https://sagris.me",
		hover: "hover:text-yellow-400",
		icon: {
			name: "ic:outline-hub",
			color: "text-yellow-500",
		},
	},
	{
		name: "Aura",
		href: "https://bot.auragroup.dev",
		hover: "hover:text-projects-aura",
		icon: {
			name: "mdi:robot-excited-outline",
			color: "text-projects-aura",
		},
	},
	{
		name: "SkyCast",
		href: "https://skycast.gr",
		hover: "hover:text-sky-400",
		icon: {
			name: "mdi:weather-partly-snowy-rainy",
			color: "text-sky-500",
		},
	},
	{
		name: "MyUni",
		href: "https://uni.tougrel.dev",
		hover: "hover:text-pink-400",
		icon: {
			name: "mdi:account-school-outline",
			color: "text-pink-500",
		},
	},
]);
const socials = ref<Social[]>([
	{
		label: "Contact me via Email",
		href: "mailto:me@tougrel.dev",
		icon: "line-md:email-twotone",
		color: "hover:text-violet-500",
	},
	{
		label: "Follow me on Twitter",
		href: "https://twitter.com/Tougrel/",
		icon: "line-md:twitter",
		color: "hover:text-social-twitter",
	},
	{
		label: "Buy me a Ko-fi",
		href: "https://ko-fi.com/tougrel/",
		icon: "line-md:coffee-half-empty-twotone-loop",
		color: "hover:text-social-kofi",
	},
	{
		label: "Add me on telegram",
		href: "https://t.me/tougrel",
		icon: "line-md:telegram",
		color: "hover:text-social-telegram",
	},
	{
		label: "Join my Discord Server",
		href: "https://discord.gg/xRTtFkaEyA",
		icon: "line-md:discord",
		color: "hover:text-social-discord",
	},
	{
		label: "Follow me on GitHub",
		href: "https://github.com/Tougrel/",
		icon: "line-md:github-loop",
		color: "hover:text-gray-500",
	},
]);
</script>

<template>
	<StructuresFlex is="footer" column class="gap-6 p-8 max-w-screen-2xl mx-auto">
		<StructuresGrid :columns="2" :md-columns="3" :lg-columns="6" class="gap-4">
			<StructuresFlex
				v-for="page in pages"
				router
				row
				items="center"
				:to="page.href"
				:class="[page.hover]"
				class="lg:justify-center gap-2 md:gap-4 transition-colors cursor-pointer"
			>
				<StructuresFlex justify="center" items="center" class="bg-background-900 rounded-lg p-2">
					<Icon :name="page.icon.name" size="1.5em" :class="[page.icon.color]" />
				</StructuresFlex>
				<span class="md:text-lg font-bold">{{ page.name }}</span>
			</StructuresFlex>
		</StructuresGrid>

		<div class="p-0.5 w-full bg-[length:400%] bg-gradient animate-footerLine rounded-full" />

		<StructuresFlex row wrap justify="between" class="gap-4">
			<StructuresFlex column>
				<p class="text-gray-400 text-sm">
					Copyright &copy; 2022-{{ new Date().getUTCFullYear() }} Tougrel - MPL-2.0
				</p>
				<p class="text-gray-400 text-xs italic">v{{ pkg.version }} - #{{ pkg.build }}</p>
			</StructuresFlex>
			<StructuresFlex row class="gap-2">
				<StructuresFlex
					v-for="social in socials"
					is="a"
					justify="center"
					items="center"
					:href="social.href"
					:aria-label="social.label"
					role="link"
					:class="[social.color]"
					class="w-12 h-12 bg-background-900 rounded-lg cursor-pointer"
				>
					<Icon :name="social.icon" aria-label="Icon" size="1.5em" class="duration-200 transition-colors" />
				</StructuresFlex>
			</StructuresFlex>
		</StructuresFlex>
	</StructuresFlex>
</template>
