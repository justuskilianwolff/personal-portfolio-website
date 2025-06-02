<script lang="ts">
	import LogoLink from './LogoLink.svelte';
	import type { TimelineEvent } from './types';

	let { event }: { event: TimelineEvent } = $props();
</script>

<div class="mb-4 rounded-md border p-4 shadow-sm">
	<h2>{event.title}</h2>
	{#if event.subtitle}
		<h3>{event.subtitle}</h3>
	{/if}
	<p class="text-gray-500">{event.time}</p>
	<p class="mt-2">{event.description}</p>
	{#if event.technologies && event.technologies.length > 0}
		<h4 class="mt-4">Technologies</h4>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each event.technologies as tech}
				{#if tech.logo}
					<LogoLink text={tech.name} url={tech.logo.url} name={tech.logo.name} />
				{:else}
					<span class="badge badge-md rounded-full bg-gray-200 text-gray-800">{tech.name}</span>
				{/if}
			{/each}
		</div>
	{/if}
	{#if event.links && event.links.length > 0}
		<h4>Links</h4>
		<div class="mt-2 flex flex-wrap gap-2">
			{#each event.links as link}
				<LogoLink text={link.text} url={link.url} name={link.name} />
			{/each}
		</div>
	{/if}
</div>
