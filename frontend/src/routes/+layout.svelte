<script>
	import '../app.css';
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="h-screen w-screen bg-first">
	{@render children?.()}
</div>
