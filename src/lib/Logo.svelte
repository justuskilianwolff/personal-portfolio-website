<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		identifier: string;
		hint?: string;
		url?: string;
	}

	let { identifier, hint, url }: Props = $props();
</script>

{#snippet iconContent()}
	<Icon icon={identifier} class="h-6 w-6" />
{/snippet}

{#snippet tooltipIcon()}
	<div class="tooltip" data-tip={hint}>
		{@render iconContent()}
	</div>
{/snippet}

{#snippet linkIcon()}
	<a href={url} target="_blank" rel="noopener noreferrer">
		{@render iconContent()}
	</a>
{/snippet}

{#snippet linkTooltipIcon()}
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
		class="inline-flex items-center justify-center align-middle"
	>
		{@render tooltipIcon()}
	</a>
{/snippet}

{#if url && hint}
	{@render linkTooltipIcon()}
{:else if url}
	{@render linkIcon()}
{:else if hint}
	{@render tooltipIcon()}
{:else}
	{@render iconContent()}
{/if}
