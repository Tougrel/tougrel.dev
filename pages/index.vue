<script setup lang="ts">
interface Banner {
	title: string;
	description: string;
	to: string;
	class: string;
	icons: BannerIcons[];
}

interface BannerIcons {
	name: string;
	size: string;
	classes: string;
}

const banners = ref<Banner[]>([
	{
		title: "Personal Projects",
		description: "Check at what I'm currently working on and their current status!",
		to: "/projects",
		class: "from-violet-600 to-fuchsia-400",
		icons: [
			{
				name: "mdi:database",
				size: "8em",
				classes: "-right-8 -bottom-12 -rotate-[25deg]",
			},
			{
				name: "mdi:server",
				size: "8em",
				classes: "hidden lg:block left-0 -top-10 rotate-[25deg]",
			},
		],
	},
	{
		title: "SkyCast",
		description:
			"An elegant, modern, interactive and advanced website template built to display your station's weather data in real time!",
		to: "/apps/weather",
		class: "from-blue-800 to-indigo-400",
		icons: [
			{
				name: "line-md:sunny-outline-twotone-loop",
				size: "8em",
				classes: "-right-8 -bottom-12 -rotate-[25deg]",
			},
			{
				name: "line-md:moon-twotone-alt-loop",
				size: "6em",
				classes: "hidden lg:block left-0 -top-10 rotate-[25deg]",
			},
		],
	},
]);
const age = computed(() => {
	const date = new Date();
	const birthday = new Date("2002-05-28");

	if (birthday.setUTCFullYear(date.getUTCFullYear()) >= Date.now()) {
		return date.getUTCFullYear() - 2003;
	} else {
		return date.getUTCFullYear() - 2002;
	}
});

useSeoMeta({
	title: "Home",
});
</script>

<template>
	<StructuresFlex :header="true" :column="true" class="gap-2 py-12">
		<h1 class="text-4xl text-white font-bold">👋 Hello there!</h1>
		<p class="text-gray-400 text-sm md:text-base font-medium">
			I’m Lampros or Tougrel (<span class="text-violet-300 italic">
				<ClientOnly>{{ age }}</ClientOnly> years old</span
			>) and I’m from Greece. I love programming, gaming, anime and I’m a big fan of J. R. R Tolkien’s work. I'm a
			fullstack engineer but I spend a lot of time on frontend development! I’m currently working on some
			projects that you can find below.
		</p>
	</StructuresFlex>
	<StructuresFlex :row="true" :wrap="true" class="gap-4 py-12">
		<UiBanner
			v-for="banner in banners"
			:title="banner.title"
			:description="banner.description"
			:to="banner.to"
			:class="banner.class"
		>
			<Icon
				v-for="icon in banner.icons"
				:name="icon.name"
				:size="icon.size"
				:class="icon.classes"
				class="absolute mix-blend-multiply text-white"
			/>
		</UiBanner>
	</StructuresFlex>
</template>
