<script setup lang="ts">
interface Project {
	title: string;
	description: string;
	textColor: string;
	bgColor: string;
	link: string;
	tags: string[];
}

const projects = ref<Project[]>([
	{
		title: "Gateway",
		description: "All the projects I created and contributed in once place!",
		textColor: "text-yellow-500",
		bgColor: "bg-yellow-400",
		link: "sagris.me",
		tags: ["Website"],
	},
	{
		title: "Aura",
		description: "Aura is a feature-rich bot with lots of tools and a modern dashboard!",
		textColor: "text-projects-aura",
		bgColor: "bg-projects-aura",
		link: "bot.auragroup.dev",
		tags: ["Discord", "Bot"],
	},
	{
		title: "PagoExpress",
		description: "PagoExpress is an ice supplier company based in Chania, Crete",
		textColor: "text-projects-pagoexpress",
		bgColor: "bg-projects-pagoexpress",
		link: "pagoexpress.gr",
		tags: ["Website", "Ice"],
	},
	{
		title: "Pestoverse",
		description: "The official website for running, upcoming and archived events created by Yuniiho's community",
		textColor: "text-emerald-500",
		bgColor: "bg-emerald-400",
		link: "pestoverse.world",
		tags: ["Website", "Twitch", "Games"],
	},
	{
		title: "Butler",
		description:
			"Butler is a digital ecosystem that offers multiple solutions and new possibilities to mass catering stores",
		textColor: "text-sky-500",
		bgColor: "bg-sky-400",
		link: "butler.gr",
		tags: ["Website", "Business"],
	},
]);

useSeoMeta({
	title: "Projects",
});
</script>

<template>
	<StructuresGrid :columns="1" :md-columns="2" :txl-columns="3" class="gap-4 py-12">
		<ProjectItem
			v-for="project in projects"
			:title="project.title"
			:description="project.description"
			:text-color="project.textColor"
			:background-color="project.bgColor"
			:link="project.link"
			:tags="project.tags"
		/>
	</StructuresGrid>
</template>
