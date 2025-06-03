<script lang="ts">
	import LogoLink from './LogoLink.svelte';
	import type { TimelineEvent } from './types';

	let { event }: { event: TimelineEvent } = $props();
</script>

<div class="mb-4 rounded-md border p-4 shadow-sm">
	<!-- title section -->
	<h2>{event.title}</h2>
	{#if event.subtitle}
		<h3>{event.subtitle}</h3>
	{/if}
	<p class="text-gray-500">{event.time}</p>

	<!-- description section -->
	<p class="mt-2">{event.description}</p>

	<!-- technologies -->
	<!-- Technolgies just render the logos -->
	{#if event.technologies && event.technologies.length > 0}
		<h4 class="my-4">Technologies</h4>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each event.technologies as tech}
				<LogoLink url={tech.url} identifier={tech.identifier} />
			{/each}
		</div>
	{/if}

	<!-- links section -->
	{#if event.links && event.links.length > 0}
		<h4 class="my-4">Links</h4>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each event.links as link}
				<LogoLink text={link.text} url={link.url} identifier={link.identifier} />
			{/each}
		</div>
	{/if}
</div>
