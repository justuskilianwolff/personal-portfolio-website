<script lang="ts">
	interface Props {
		url: string;
		text?: string;
	}

	let { url, text }: Props = $props();
</script>

<!-- Timeline links are external URLs stored in repository-owned data. -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	href={url}
	class="text-accent inline-flex items-center gap-1 text-sm font-medium underline decoration-transparent underline-offset-4 transition hover:decoration-current"
	target={url.startsWith('http') ? '_blank' : undefined}
	rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
>
	{text ?? url}
	<span aria-hidden="true">↗</span>
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
