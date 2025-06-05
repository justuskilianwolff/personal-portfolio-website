<script lang="ts">
	interface Props {
		url: string;
		text?: string;
	}

	let { url, text }: Props = $props();
</script>

<a href={url} class="flex items-center gap-2">
	{#if text}
		{text}
	{:else}
		{url}
	{/if}
</a>
