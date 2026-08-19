<script lang="ts">
	import '../app.css';
	import SiteFooter from '$lib/SiteFooter.svelte';
	import SiteHeader from '$lib/SiteHeader.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://justuskilianwolff.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Justus Kilian Wolff — Machine learning and optimisation" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://justuskilianwolff.com/og-image.png" />
</svelte:head>

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
