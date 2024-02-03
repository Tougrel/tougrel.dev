<script setup lang="ts">
useSeoMeta({
	title: "Tougrel",
	titleTemplate: "%s - Tougrel",
	description: "Personal blog and portfolio",

	author: 'Sagris "Tougrel" Lampros',
	publisher: "Tougrel",

	themeColor: "#5946CE",
	msapplicationTileColor: "#333743",

	ogTitle: "Tougrel",
	ogDescription: "Personal blog and portfolio",
	ogType: "website",
	ogUrl: "https://tougrel.dev",

	twitterTitle: "Tougrel",
	twitterDescription: "Personal blog and portfolio",
	twitterCard: "summary",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/vnd.microsoft.icon",
			href: "/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/img/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/img/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "194x194",
			href: "/img/favicon-194x194.png",
		},
	],
});
</script>

<template>
	<NuxtLoadingIndicator />
	<UiNav />
	<main class="px-8 max-w-screen-2xl mx-auto">
		<NuxtPage />
	</main>
	<UiFooter />
</template>

<style>
html,
body {
	@apply bg-background text-white font-main relative min-w-0;
}
</style>
