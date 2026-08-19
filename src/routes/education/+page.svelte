<script lang="ts">
	import TimelineEvent from '$lib/TimelineEvent.svelte';
	import { education } from '$lib/data/education';
</script>

<svelte:head>
	<title>Education | Justus Kilian Wolff</title>
	<meta
		name="description"
		content="Academic background in operational research, data science, industrial engineering, statistics, and machine learning."
	/>
	<link rel="canonical" href="https://justuskilianwolff.com/education" />
	<meta property="og:title" content="Education | Justus Kilian Wolff" />
	<meta
		property="og:description"
		content="Academic background in operational research, data science, industrial engineering, statistics, and machine learning."
	/>
	<meta property="og:url" content="https://justuskilianwolff.com/education" />
	<meta name="twitter:title" content="Education | Justus Kilian Wolff" />
	<meta
		name="twitter:description"
		content="Academic background in operational research, data science, industrial engineering, statistics, and machine learning."
	/>
</svelte:head>

<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
	<header class="max-w-3xl">
		<p class="eyebrow">Academic background</p>
		<h1 class="page-heading mt-5 font-mono">Education</h1>
		<p class="text-muted mt-7 text-lg leading-8 sm:text-xl">
			A mathematical foundation in operational research, statistics, and data science, with
			applications in logistics and complex systems.
		</p>
	</header>

	<section class="mt-16 grid gap-5" aria-labelledby="education-history">
		<h2 id="education-history" class="sr-only">Education history</h2>
		{#each education as event (event.title + event.time)}
			<TimelineEvent {event} />
		{/each}
	</section>
</div>
