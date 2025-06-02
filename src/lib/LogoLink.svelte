<script lang="ts">
	import { Github, Instagram, Linkedin, Loader, Mail } from '@lucide/svelte';

	let { url, name: icon, text }: { url: string; name: string; text?: string } = $props();

	const iconMap = {
		linkedin: Linkedin,
		github: Github,
		instagram: Instagram,
		mail: Mail
	};

	const IconComponent = $derived(
		icon && iconMap[icon as keyof typeof iconMap] ? iconMap[icon as keyof typeof iconMap] : Loader
	);
</script>

<a href={url} class="badge badge-md gap-2 border-inherit">
	<IconComponent size={16} />
	{#if text}
		{text}
	{/if}
</a>
