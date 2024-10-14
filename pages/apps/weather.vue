<script setup lang="ts">
useSeoMeta({
	title: "WeatherApp",
});
</script>

<template>
	<StructuresFlex column items="center" class="gap-24 py-12">
		<StructuresFlex is="header" column items="center" class="text-center">
			<Icon name="line-md:light-dark-loop" size="6em" class="text-sky-400" />
			<h1 class="text-3xl font-bold">SkyCast Website</h1>
			<p class="text-sm text-gray-400 italic">
				A modern, interactive website built to display your station's weather data!
			</p>
		</StructuresFlex>

		<StructuresGrid :columns="1" :lg-columns="3" :xl-columns="4" class="gap-36">
			<StructuresFlex column items="center" class="relative p-2 gap-4">
				<div class="absolute inset-x-0 top-8 h-3 bg-blue-700 blur-2xl" />
				<StructuresFlex column items="center" class="gap-1">
					<Icon name="mdi:clock-fast" size="3em" class="text-white-full" />
					<h2 class="text-xl">Realtime Data</h2>
				</StructuresFlex>
				<p class="text-sm text-center text-gray-400 break-words">
					Data are being updated in real time via a websocket connection!
				</p>
			</StructuresFlex>

			<StructuresFlex column items="center" class="relative p-2 gap-4">
				<div class="absolute inset-x-0 top-8 h-3 bg-indigo-700 blur-2xl" />
				<StructuresFlex column items="center" class="gap-1">
					<Icon name="mdi:timer-check-outline" size="3em" class="text-white-full" />
					<h2 class="text-xl">99.9% Uptime</h2>
				</StructuresFlex>
				<p class="text-sm text-center text-gray-400 break-words">
					Websites will be always up and running except when there is a maintenance.
				</p>
			</StructuresFlex>

			<StructuresFlex column items="center" class="relative p-2 gap-4">
				<div class="absolute inset-x-0 top-8 h-3 bg-red-700 blur-2xl" />
				<StructuresFlex column items="center" class="gap-1">
					<Icon name="mdi:webhook" size="3em" class="text-white-full" />
					<h2 class="text-xl">Webhooks</h2>
				</StructuresFlex>
				<p class="text-sm text-center text-gray-400 break-words">
					Let your users connect their webhooks with the page to receive notifications on the weather in their
					favorite platform!
				</p>
			</StructuresFlex>

			<StructuresFlex column items="center" class="relative p-2 gap-4">
				<div class="absolute inset-x-0 top-8 h-3 bg-emerald-700 blur-2xl" />
				<StructuresFlex column items="center" class="gap-1">
					<Icon name="mdi:tune" size="3em" class="text-white-full" />
					<h2 class="text-xl">Customizable</h2>
				</StructuresFlex>
				<p class="text-sm text-center text-gray-400 break-words">
					Customize your website by changing it's icons, color palette and more!
				</p>
			</StructuresFlex>
		</StructuresGrid>

		<p class="text-lg text-red-300 font-medium">
			Skycast is currently under construction and you will be able to order it via another website soon!
		</p>
	</StructuresFlex>
</template>
