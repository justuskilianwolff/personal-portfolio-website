<script lang="ts">
	import Link from './Link.svelte';
	import type { TimelineEvent } from './types';

	let { event }: { event: TimelineEvent } = $props();
</script>

<article class="surface-card border-l-accent/55 rounded-none border-l-2 p-5 sm:p-6">
	<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
		<div>
			<h3 class="font-mono text-lg leading-tight font-medium tracking-tight sm:text-xl">
				{event.title}
			</h3>
			{#if event.subtitle}
				<p class="text-muted mt-1 text-sm sm:text-base">{event.subtitle}</p>
			{/if}
		</div>
		<p class="text-muted shrink-0 font-mono text-[0.68rem] tracking-wide">{event.time}</p>
	</div>

	{#if event.description?.text || event.description?.bullets?.length}
		<div class="mt-5 max-w-3xl leading-7 text-[hsl(220_7%_84%)]">
			{#if event.description.text}
				<p>{event.description.text}</p>
			{/if}
			{#if event.description.bullets?.length}
				<ul class:mt-3={event.description.text} class="list-disc space-y-1.5 pl-5">
					{#each event.description.bullets as bullet (bullet)}
						<li>{bullet}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}

	{#if event.skills && event.skills.length > 0}
		<div class="mt-5 flex flex-wrap items-center gap-2 border-t border-white/8 pt-4">
			<span class="text-muted font-mono text-[0.68rem] font-medium tracking-wider uppercase"
				>Skills</span
			>
			{#each event.skills as tech, i (tech.identifier)}
				{#if i > 0}
					<span class="text-muted">·</span>
				{/if}
				<span class="font-mono text-xs tracking-wide text-[hsl(213_8%_79%)]">{tech.hint}</span>
			{/each}
		</div>
	{/if}

	{#if event.links && event.links.length > 0}
		<div class="mt-5 flex flex-wrap gap-x-5 gap-y-2">
			{#each event.links as link (link.url)}
				<Link url={link.url} text={link.text} />
			{/each}
		</div>
	{/if}
</article>
