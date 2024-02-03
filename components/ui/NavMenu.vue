<script setup lang="ts">
defineEmits(["close"]);
defineProps<{ isOpen?: boolean }>();

const items = ref([
	{
		name: "Gateway",
		by: "by Tougrel & ComradeTurtle",
		icon: "mdi:server-network",
		color: "text-green-950",
		bg: "bg-green-500 hover:scale-105",
		link: "https://sagris.me",
	},
	{
		name: "Aura",
		by: "by Tougrel",
		icon: "mdi:robot-excited-outline",
		color: "text-rose-950",
		bg: "bg-projects-aura hover:scale-105",
		link: "https://aura.tougrel.dev",
	},
	{
		name: "UOWM",
		by: "by Tougrel",
		icon: "mdi:school-outline",
		color: "text-pink-950",
		bg: "bg-pink-500 hover:scale-105",
		link: "https://uni.tougrel.dev",
	},
	{
		name: "Meteora Weather",
		by: "by ComradeTurtle",
		icon: "mdi:weather-partly-snowy-rainy",
		color: "text-blue-950",
		bg: "bg-blue-500 hover:scale-105",
		link: "https://meteora-weather.gr",
	},
]);
</script>

<template>
	<Teleport to="body">
		<div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-black/90 z-40" />
		<StructuresFlex
			class="fixed inset-x top-0 bg-background-900 w-full pt-28 pb-12 transition-transform duration-200 ease-out z-50"
			:class="{ 'translate-y-[0]': isOpen, '-translate-y-[100%] pointer-events-none': !isOpen }"
		>
			<StructuresFlex
				row
				wrap
				items="center"
				class="gap-4 w-full max-w-screen-2xl px-8 mx-auto transition-opacity duration-700 delay-200 opacity-0"
				:class="{ 'opacity-100': isOpen }"
			>
				<StructuresFlex
					v-for="item in items"
					is="a"
					column
					items="center"
					:href="item.link"
					:class="item.bg"
					class="w-full lg:w-fit min-w-[208px] transition-colors p-4 rounded-md"
				>
					<LazyIcon :name="item.icon" size="2em" :class="item.color" />
					<h3 class="text-lg text-black font-bold">{{ item.name }}</h3>
					<span class="text-xs text-gray-800 font-medium">{{ item.by }}</span>
				</StructuresFlex>
			</StructuresFlex>
		</StructuresFlex>
	</Teleport>
</template>
