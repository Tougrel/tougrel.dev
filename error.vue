<template>
	<StructuresFlex :column="true" items="center" justify="center" class="gap-2 w-screen h-screen">
		<LazyIcon name="line-md:alert" size="8em" class="text-red-600" />
		<StructuresFlex :column="true" items="center" class="gap-1">
			<h1 class="text-4xl font-bold">Hold up!</h1>
			<p class="text-sm text-gray-300">
				You sure you are in the right place? Let's go back
				<NuxtLink to="/" class="text-violet-300 hover:text-violet-400 transition-colors font-bold underline">
					Home
				</NuxtLink>
			</p>
		</StructuresFlex>
	</StructuresFlex>
</template>
