<script lang="ts">
	import TimelineEvent from '$lib/TimelineEvent.svelte';
	import { education, research, teaching } from '$lib/data/academics';
</script>

<svelte:head>
	<title>Academics | Justus Kilian Wolff</title>
	<meta
		name="description"
		content="Academic background and research in operational research, data science, industrial engineering, statistics, and machine learning."
	/>
	<link rel="canonical" href="https://justuskilianwolff.com/academics" />
	<meta property="og:title" content="Academics | Justus Kilian Wolff" />
	<meta
		property="og:description"
		content="Academic background and research in operational research, data science, industrial engineering, statistics, and machine learning."
	/>
	<meta property="og:url" content="https://justuskilianwolff.com/academics" />
	<meta name="twitter:title" content="Academics | Justus Kilian Wolff" />
	<meta
		name="twitter:description"
		content="Academic background and research in operational research, data science, industrial engineering, statistics, and machine learning."
	/>
</svelte:head>

<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
	<header class="max-w-3xl">
		<p class="eyebrow">Academic background</p>
		<h1 class="page-heading mt-5 font-mono">Academics</h1>
		<p class="text-muted mt-7 text-lg leading-8 sm:text-xl">
			A mathematical foundation in operational research, statistics, and data science — spanning
			research in logistics and complex systems, and teaching in operational research.
		</p>
	</header>

	<section class="mt-20" aria-labelledby="education">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">01</p>
			<h2 id="education" class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl">
				Education
			</h2>
		</div>
		<div class="grid gap-5">
			{#each education as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>

	<section class="mt-20" aria-labelledby="research">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">02</p>
			<h2 id="research" class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl">
				Research
			</h2>
		</div>
		<div class="grid gap-5">
			{#each research as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>

	<section class="mt-20" aria-labelledby="teaching">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">03</p>
			<h2 id="teaching" class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl">
				Teaching
			</h2>
		</div>
		<div class="grid gap-5">
			{#each teaching as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>
</div>
