<script lang="ts">
	import 'iconify-icon';
	import Section from '$lib/Section.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import Masonry from '$lib/Masonry.svelte';
	import SectionHeader from '$lib/SectionHeader.svelte';

	import { project } from '$lib/example.ts';

	const items = Array(5).fill(null);
</script>

<Section class="bg-second pt-8">
	<div class="flex flex-col gap-4 justify-between md:flex-row md:items-center md:gap-0">
		<div class="flex flex-col">
			<div class="flex flex-row">
				<div class="flex flex-col">
					<h1 class=" text-first pl-1">Justus</h1>
					<h1 class=" text-first pl-5 italic tracking-tight">Kilian</h1>
				</div>
			</div>
			<h1 class=" text-first pl-12 py-0 font-bold tracking-wide">Wolff</h1>
		</div>
		<p class="text-first px-4 max-w-80 md:text-right">
			Welcome to Max's corner, where Hamburg meets machine learning! As a student from this vibrant
			city, Max is passionate about unraveling the mysteries of AI. Join him on his journey through
			the world of algorithms and data analysis. Let's explore together the fascinating realm where
			Hamburg's charm intersects with cutting-edge technology. Let's get in touch :)
		</p>
	</div>
	<div class=" pt-10 pb-4 flex flex-row justify-center gap-10 items-center">
		<a href="mailto:moin@justuskilianwolff.io">moin@justuskilianwolff.io</a>
		<iconify-icon icon="mdi:github"> </iconify-icon>
		<iconify-icon icon="mdi:linkedin"> </iconify-icon>
		<iconify-icon icon="mdi:instagram"> </iconify-icon>
	</div>
</Section>
<Section class="bg-first">
	<SectionHeader heading="Projects" class="text-second" />
	<Masonry>
		{#each items as _, i}
			<Dialog
				title={project.title}
				subtitle={project.subtitle}
				description={project.description}
				technologies={project.technologies}
				links={project.links}
			/>
		{/each}
	</Masonry>
</Section>
<Section class="bg-second">
	<SectionHeader heading="Work" class="text-first" />
	<Masonry>
		{#each items as _, i}
			<Dialog
				title={project.title}
				subtitle={project.subtitle}
				description={project.description}
				technologies={project.technologies}
				links={project.links}
			/>
		{/each}
	</Masonry>
</Section>
<Section class="bg-second"></Section>
