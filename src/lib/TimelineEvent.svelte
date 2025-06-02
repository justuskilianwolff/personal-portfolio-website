<script lang="ts">
	import type { TimelineEvent } from './types';

	let { event }: { event: TimelineEvent } = $props();
</script>

<div class="mb-4 rounded-md border p-4 shadow-sm">
	<h2 class="font-semibold">{event.title}</h2>
	{#if event.subtitle}
		<h3 class="text-gray-600">{event.subtitle}</h3>
	{/if}
	{#if event.organization}
		<p class="text-gray-700">{event.organization}</p>
	{/if}
	<p class="text-gray-500">{event.time}</p>
	<p class="mt-2">{event.description}</p>
	{#if event.technologies && event.technologies.length > 0}
		<ul class="mt-2 flex flex-wrap gap-2">
			{#each event.technologies as tech}
				<li class="rounded-full bg-gray-200 px-2 py-1 text-gray-800">{tech.name}</li>
			{/each}
		</ul>
	{/if}
	{#if event.links && event.links.length > 0}
		<ul class="mt-2">
			{#each event.links as link}
				<li><a href={link.url} class="text-blue-600 hover:underline">{link.name}</a></li>
			{/each}
		</ul>
	{/if}
</div>
