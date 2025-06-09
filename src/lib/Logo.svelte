<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		identifier: string;
		hint?: string;
		url?: string;
	}

	let { identifier, hint, url }: Props = $props();

	const iconMap = {
		linkedin: 'mdi:linkedin',
		github: 'mdi:github',
		instagram: 'mdi:instagram',
		mail: 'material-symbols:mail-outline',
		svelte: 'lineicons:svelte',
		python: 'proicons:python',
		cplex: 'lineicons:ibm',
		r: 'file-icons:rstudio',
		latex: 'file-icons:latex'
	};
	const iconIdentifier =
		identifier && iconMap[identifier as keyof typeof iconMap]
			? iconMap[identifier as keyof typeof iconMap]
			: identifier;
</script>

{#snippet iconContent()}
	<Icon icon={iconIdentifier} class="h-6 w-6" />
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
