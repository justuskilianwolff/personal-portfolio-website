<script lang="ts">
	import '../app.css';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';

	let { children } = $props();
</script>

<a
	href="#main-content"
	class="bg-accent text-accent-ink sr-only fixed top-3 left-3 z-[100] px-3 py-2 text-sm font-medium focus:not-sr-only"
>
	Skip to content
</a>

<SiteHeader />

<main id="main-content">
	{@render children()}
</main>

<SiteFooter />
