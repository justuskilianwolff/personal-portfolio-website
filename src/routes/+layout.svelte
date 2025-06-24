<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Justus Kilian Wolff</title>
</svelte:head>

<div class="m-5 mx-auto min-h-screen w-full max-w-4xl px-4 pt-16">
	{@render children()}
</div>
