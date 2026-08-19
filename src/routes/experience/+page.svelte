<script lang="ts">
	import TimelineEvent from '$lib/TimelineEvent.svelte';
	import { projects } from '$lib/data/projects';
	import { work } from '$lib/data/work';

	const professionalExperience = work.filter((event) => event.title !== 'Research Team Member');
	const research = [
		...projects.filter((event) => event.title === 'EV Charger Placement Optimization'),
		...work.filter((event) => event.title === 'Research Team Member')
	];
	const ventures = projects.filter((event) => event.title !== 'EV Charger Placement Optimization');
</script>

<svelte:head>
	<title>Experience | Justus Kilian Wolff</title>
	<meta
		name="description"
		content="Professional experience, operations research, publications, ventures, and independent projects by Justus Kilian Wolff."
	/>
	<link rel="canonical" href="https://justuskilianwolff.com/experience" />
	<meta property="og:title" content="Experience | Justus Kilian Wolff" />
	<meta
		property="og:description"
		content="Professional experience, operations research, publications, ventures, and independent projects."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://justuskilianwolff.com/experience" />
	<meta property="og:image" content="https://justuskilianwolff.com/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Justus Kilian Wolff — Optimisation and machine learning" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Experience | Justus Kilian Wolff" />
	<meta
		name="twitter:description"
		content="Professional experience, operations research, publications, ventures, and independent projects."
	/>
	<meta name="twitter:image" content="https://justuskilianwolff.com/og-image.png" />
</svelte:head>

<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
	<header class="max-w-3xl">
		<p class="eyebrow">Curriculum vitae</p>
		<h1 class="page-heading mt-5 font-mono">Experience</h1>
		<p class="text-muted mt-7 text-lg leading-8 sm:text-xl">
			Professional work, research, ventures, and selected independent projects across optimisation,
			machine learning, and software engineering.
		</p>
	</header>

	<section class="mt-20" aria-labelledby="professional-experience">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">01</p>
			<h2
				id="professional-experience"
				class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl"
			>
				Professional experience
			</h2>
		</div>
		<div class="grid gap-5">
			{#each professionalExperience as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>

	<section class="mt-20" aria-labelledby="research-publications">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">02</p>
			<h2
				id="research-publications"
				class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl"
			>
				Research and publications
			</h2>
		</div>
		<div class="grid gap-5">
			{#each research as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>

	<section class="mt-20" aria-labelledby="ventures-projects">
		<div class="mb-8 border-b border-white/12 pb-4">
			<p class="eyebrow">03</p>
			<h2
				id="ventures-projects"
				class="mt-2 font-mono text-2xl font-medium tracking-tight sm:text-3xl"
			>
				Ventures and independent projects
			</h2>
		</div>
		<div class="grid gap-5">
			{#each ventures as event (event.title + event.time)}
				<TimelineEvent {event} />
			{/each}
		</div>
	</section>
</div>
