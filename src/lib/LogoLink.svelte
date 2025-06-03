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

<a href={url} class="flex items-center gap-2">
	<Icon icon={iconIdentifier} class="h-6 w-6" />
	{#if text}
		{text}
	{/if}
</a>
