<script lang="ts">
	import { Linkedin, Github, Mail, Instagram } from '@lucide/svelte';

	let { url, icon }: { url: string; icon?: string } = $props();

	const iconMap = {
		linkedin: Linkedin,
		github: Github,
		instagram: Instagram,
		mail: Mail
	};

	const IconComponent = $derived(
		icon && iconMap[icon as keyof typeof iconMap] ? iconMap[icon as keyof typeof iconMap] : null
	);
</script>

<a href={url} class="badge badge-md gap-2 rounded-full">
	{#if IconComponent}
		<IconComponent size={16} />
	{/if}
</a>
