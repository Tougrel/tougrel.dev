<script setup lang="ts">
defineProps<{
	title: string;
	description: string;
	link: string;
	tags: string[];
	textColor: string;
	backgroundColor: string;
}>();
</script>

<template>
	<StructuresFlex column class="gap-4 relative bg-background-900 rounded-lg p-8 overflow-hidden">
		<StructuresFlex column class="gap-1">
			<h1 class="text-2xl text-white-full font-bold">{{ title }}</h1>
			<StructuresFlex
				router
				external
				row
				items="center"
				:to="`https://${link}`"
				class="gap-1 text-gray-300 hover:text-gray-400 w-fit"
			>
				<Icon name="line-md:external-link" size=".8em" class="text-gray-500" />
				<span class="text-sm">{{ link }}</span>
			</StructuresFlex>
		</StructuresFlex>
		<p class="text-sm text-gray-400 max-h-[60px] overflow-y-auto">{{ description }}</p>
		<ProjectTags :tags="tags" :color="textColor" />
		<div class="absolute top-0 left-0 w-12 h-12 blur-3xl" :class="backgroundColor" />
	</StructuresFlex>
</template>
