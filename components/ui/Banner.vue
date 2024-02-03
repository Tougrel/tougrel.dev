<script setup lang="ts">
defineProps<{ title: string; description: string; to: string }>();
</script>

<template>
	<StructuresFlex
		router
		column
		wrap
		:to="to"
		class="bg-gradient-to-r p-8 rounded-lg relative overflow-hidden w-full transition-transform hover:scale-[1.025] 2xl:hover:scale-105 cursor-pointer"
	>
		<h2 v-html="title" class="text-2xl text-white-full font-bold z-10" />
		<p v-html="description" class="text-sm text-gray-100 max-w-[500px] z-10" />
		<slot />
	</StructuresFlex>
</template>
