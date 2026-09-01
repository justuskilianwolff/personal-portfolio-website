<script lang="ts">
	import TimelineEvent from '$lib/TimelineEvent.svelte';
	import { experience, projects } from '$lib/data/work';
</script>

<svelte:head>
	<title>Work | Justus Kilian Wolff</title>
	<meta
		name="description"
		content="Professional experience and selected independent projects by Justus Kilian Wolff."
	/>
	<link rel="canonical" href="https://justuskilianwolff.com/work" />
	<meta property="og:title" content="Work | Justus Kilian Wolff" />
	<meta
		property="og:description"
		content="Professional experience and selected independent projects by Justus Kilian Wolff."
	/>
	<meta property="og:url" content="https://justuskilianwolff.com/work" />
	<meta name="twitter:title" content="Work | Justus Kilian Wolff" />
	<meta
		name="twitter:description"
		content="Professional experience and selected independent projects by Justus Kilian Wolff."
	/>
</svelte:head>

<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
	<header class="max-w-3xl">
		<p class="eyebrow">Curriculum vitae</p>
		<h1 class="page-heading mt-5 font-mono">Work</h1>
		<p class="text-muted mt-7 text-lg leading-8 sm:text-xl">
			Professional experience and selected independent projects across optimisation, machine
			learning, and software engineering.
		</p>
	</header>

	<section class="mt-20" aria-labelledby="experience">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">01</p>
			<h2 id="experience" class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl">
				Experience
			</h2>
		</div>
		<div class="grid gap-5">
			{#each experience as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>

	<section class="mt-20" aria-labelledby="projects">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">02</p>
			<h2 id="projects" class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl">
				Projects
			</h2>
		</div>
		<div class="grid gap-5">
			{#each projects as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>
</div>
