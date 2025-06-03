<script lang="ts">
	import Icon from '@iconify/svelte';

	let { url, identifier, text }: { url: string; identifier: string; text?: string } = $props();

	const iconMap = {
		linkedin: 'mdi:linkedin',
		github: 'mdi:github',
		instagram: 'mdi:instagram',
		mail: 'material-symbols:mail-outline',
		svelte: 'lineicons:svelte'
	};
	const iconIdentifier =
		identifier && iconMap[identifier as keyof typeof iconMap]
			? iconMap[identifier as keyof typeof iconMap]
			: identifier;
</script>

<a href={url} class="badge badge-neutral badge-outline badge-md gap-2 border-inherit">
	<Icon icon={iconIdentifier} class="text-inherit" />
	{#if text}
		{text}
	{/if}
</a>
