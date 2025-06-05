<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		url: string;
		identifier: string;
		text?: string;
	}

	let { url, identifier, text }: Props = $props();

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

<a href={url} class="flex items-center gap-2">
	<Icon icon={iconIdentifier} class="h-6 w-6" />
	{#if text}
		{text}
	{/if}
</a>
