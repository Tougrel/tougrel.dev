<script setup lang="ts">
const routes = [
	{
		name: "Home",
		icon: "line-md:home-md-twotone",
		to: "/",
	},
	{
		name: "Blog",
		icon: "line-md:edit-twotone",
		to: "/blog",
	},
];

const mobileMenu = useState("mobile-menu");
const appsMenu = ref(false);
</script>

<template>
	<StructuresFlex is="header" row items="center" justify="between" class="p-8 w-full max-w-screen-2xl mx-auto">
		<StructuresFlex
			is="button"
			row
			items="center"
			@click="appsMenu = !appsMenu"
			type="button"
			class="gap-1"
			:class="{ 'z-[60]': appsMenu }"
		>
			<img src="/logo.svg" width="128" height="64" alt="Tougrel" decoding="async" loading="lazy" />
			<Icon
				name="mdi:chevron-down"
				size="2em"
				:class="{ 'rotate-180': appsMenu }"
				class="transition-transform duration-300"
			/>
		</StructuresFlex>

		<Icon name="mdi:menu" size="2em" @click="mobileMenu = !mobileMenu" class="sm:!hidden" />
		<StructuresFlex is="nav" row items="center" class="hidden sm:flex gap-4">
			<StructuresFlex
				v-for="page in routes"
				router
				:to="page.to"
				row
				items="center"
				class="gap-2 hover:text-violet-300 transition-colors"
			>
				<Icon :name="page.icon" size="1.5em" class="text-primary-500" />
				<span class="text-lg">{{ page.name }}</span>
			</StructuresFlex>
		</StructuresFlex>
	</StructuresFlex>

	<UModal v-model="mobileMenu" @close="mobileMenu = false">
		<StructuresFlex column class="gap-2 p-6">
			<StructuresFlex
				v-for="page in routes"
				router
				:to="page.to"
				@click="mobileMenu = false"
				row
				items="center"
				class="gap-2 bg-primary-800 p-4 rounded-lg"
			>
				<Icon :name="page.icon" size="1.5em" />
				<span class="text-lg">{{ page.name }}</span>
			</StructuresFlex>
		</StructuresFlex>
	</UModal>
	<UiNavMenu @close="appsMenu = false" :is-open="appsMenu" />
</template>

<style scoped lang="scss">
.router-link-exact-active,
.router-link-exact-active,
.router-link-active {
	@apply text-violet-300 hover:text-violet-300/70;
}
</style>
