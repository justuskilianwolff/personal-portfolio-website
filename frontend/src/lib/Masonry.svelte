<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="gap-4 mx-2 sm:columns-2 md:columns-3 lg:columns-4">
	{@render children?.()}
</div>
