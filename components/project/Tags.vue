<script setup lang="ts">
defineProps<{ tags: string[]; color: string }>();
</script>

<template>
	<StructuresFlex row wrap items="center" class="gap-2">
		<div v-for="t in tags" class="relative bg-background px-3 py-0.5 rounded-full">
			<span class="text-xs" :class="color">{{ t }}</span>
		</div>
	</StructuresFlex>
</template>
