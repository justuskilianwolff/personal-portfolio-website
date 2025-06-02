<script lang="ts">
	import { Github, Instagram, Linkedin, Loader, Mail } from '@lucide/svelte';

	let { url, name: icon }: { url: string; name: string } = $props();

	const iconMap = {
		linkedin: Linkedin,
		github: Github,
		instagram: Instagram,
		mail: Mail
	};

	const IconComponent = icon in iconMap ? iconMap[icon as keyof typeof iconMap] : Loader;
</script>

<a href={url} class="badge badge-md gap-2 rounded-full">
	<IconComponent size={16} />
</a>
