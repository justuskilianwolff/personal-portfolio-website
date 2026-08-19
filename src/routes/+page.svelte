<script lang="ts">
	import { resolve } from '$app/paths';
	import OfferTabs from '$lib/OfferTabs.svelte';
	import OptimizationContour from '$lib/OptimizationContour.svelte';
	import ProfilePortrait from '$lib/ProfilePortrait.svelte';

	const selectedWork = [
		{
			label: 'Decision systems',
			title: 'Making optimisation accessible',
			organisation: 'bools.io',
			description:
				'Building a platform that turns plain-language requirements into transparent mathematical models and solver-backed decisions.',
			href: 'https://bools.io',
			linkLabel: 'Visit bools.io'
		},
		{
			label: 'Production machine learning',
			title: 'AI tools for audit workflows',
			organisation: 'audit.neo',
			description:
				'Designed and deployed deep-learning fraud detection, an auditor-focused chatbot, and internal machine-learning and optimisation tools.',
			href: 'https://auditneo.com/en/',
			linkLabel: 'Visit audit.neo'
		},
		{
			label: 'Mathematical optimisation',
			title: 'Planning aircraft assignments',
			organisation: 'Lufthansa Systems',
			description:
				'Applied problem-specific graph algorithms and column generation to the aircraft tail-assignment problem.',
			href: resolve('/experience'),
			linkLabel: 'Read about the work'
		},
		{
			label: 'Published research',
			title: 'Locating EV chargers under uncertainty',
			organisation: 'University of Edinburgh',
			description:
				'Co-developed and implemented a stochastic facility-location model. The research was published in Computers & Operations Research.',
			href: 'https://www.sciencedirect.com/science/article/pii/S0305054825003181',
			linkLabel: 'View publication'
		}
	];

	const credentials = [
		'Founder of bools.io',
		'Former AI Engineer at audit.neo',
		'MSc Operational Research with Data Science',
		'Published optimisation research'
	];
</script>

<svelte:head>
	<title>Justus Wolff | Machine Learning & Optimisation</title>
	<meta
		name="description"
		content="Independent machine-learning and optimisation engineer building forecasting, planning, scheduling, and operational decision systems."
	/>
	<link rel="canonical" href="https://justuskilianwolff.com/" />
	<meta property="og:title" content="Prediction and decision systems for complex operations" />
	<meta
		property="og:description"
		content="Machine learning and optimisation for forecasting, planning, and operational decision-making."
	/>
	<meta property="og:url" content="https://justuskilianwolff.com/" />
	<meta name="twitter:title" content="Prediction and decision systems for complex operations" />
	<meta
		name="twitter:description"
		content="Machine learning and optimisation for forecasting, planning, and operational decision-making."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative min-h-svh overflow-hidden border-b border-white/8">
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<OptimizationContour
			fadeFromOptimum={true}
			peakOpacity={0.66}
			edgeOpacity={0.09}
			falloffRate={1.3}
			optimumPosition={{ x: 0.84, y: 0.25 }}
		/>
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,20,22,0.9)_0%,rgba(18,20,22,0.72)_28%,rgba(18,20,22,0.22)_62%,rgba(18,20,22,0.03)_100%)]"
		></div>
		<div
			class="from-background absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t to-transparent"
		></div>
	</div>

	<div
		class="relative z-10 mx-auto flex min-h-svh max-w-[90rem] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
	>
		<div class="max-w-full translate-y-[5vh]">
			<p class="eyebrow">Machine learning & optimisation</p>
			<h1
				class="mt-6 max-w-full font-mono text-[clamp(3rem,6vw,5.55rem)] leading-[0.94] font-semibold tracking-[-0.065em]"
			>
				Prediction and decision systems for complex operations.
			</h1>
			<p class="text-muted mt-8 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9">
				I use machine learning and optimisation to turn operational data, objectives, and
				constraints into models and systems that teams can use with confidence.
			</p>
			<div class="mt-9 flex flex-wrap gap-3">
				<a
					class="button-primary px-5 py-3"
					href="mailto:hi@justuskilianwolff.com?subject=Project%20enquiry"
				>
					Let's build something
				</a>
				<a class="button-secondary px-5 py-3" href="#profile">About me</a>
			</div>
		</div>
	</div>
</section>

<!-- Profile -->
<section id="profile" class="scroll-mt-24 border-b border-white/8 py-24 sm:py-32">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
			<div>
				<p class="eyebrow">01 / Profile</p>
				<div class="border-border mt-7 max-w-72 border bg-[hsl(214_13%_10%)] p-2">
					<ProfilePortrait />
				</div>
				<p class="text-muted mt-3 font-mono text-[0.65rem] leading-5 tracking-wide">
					JUSTUS KILIAN WOLFF<br />HAMBURG / GERMANY
				</p>
			</div>

			<div class="lg:pt-9">
				<h2 class="section-heading">Built around the problem, not the method.</h2>
				<div class="text-muted mt-7 max-w-3xl space-y-5 text-lg leading-8">
					<p>
						I build machine-learning systems, mathematical optimisation models, and the software
						that makes them useful in practice. The right approach depends on the problem:
						uncertainty, constraints, trade-offs, or some combination of them.
					</p>
					<p>
						Today I am building bools.io, a platform for transparent mathematical optimisation.
						Previously, I developed production machine-learning and optimisation systems at
						audit.neo. My master’s thesis at Lufthansa Systems focused on aviation planning, and my
						academic research includes optimisation under uncertainty.
					</p>
				</div>

				<ol class="border-border mt-10 grid border-t sm:grid-cols-2">
					{#each credentials as credential, index (credential)}
						<li
							class="border-border flex gap-3 border-b py-4 text-xs leading-5 text-[hsl(213_8%_79%)] sm:pr-5 sm:odd:border-r sm:even:pl-5"
						>
							<span class="text-accent font-mono">
								{String(index + 1).padStart(2, '0')}
							</span>
							<span>{credential}</span>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</section>

<!-- Offer -->
<section id="offer" class="scroll-mt-24 border-b border-white/8 py-24 sm:py-32">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="max-w-4xl">
			<p class="eyebrow">02 / Capabilities</p>
			<h2 class="section-heading mt-5">
				Some problems are uncertain. Others are constrained. Many are both.
			</h2>
			<p class="text-muted mt-6 max-w-3xl text-lg leading-8">
				Machine learning turns operational data into estimates, signals, and scenarios. Optimisation
				turns objectives and constraints into plans and recommendations. The right approach depends
				on the problem.
			</p>
		</div>

		<div class="mt-14">
			<OfferTabs />
		</div>
	</div>
</section>

<!-- Selected work -->
<section class="border-b border-white/8 py-24 sm:py-32">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div>
			<p class="eyebrow">03 / Selected work</p>
			<h2 class="section-heading mt-5">Built across products, industry, and research.</h2>
		</div>

		<div class="border-border mt-14 border-t">
			{#each selectedWork as item, index (item.title)}
				<article
					class="group border-border grid gap-4 border-b py-7 transition-colors hover:bg-white/[0.018] sm:px-3 lg:grid-cols-[3rem_18rem_minmax(0,1fr)_10rem] lg:items-start lg:gap-7"
				>
					<p class="text-accent font-mono text-xs">
						{String(index + 1).padStart(2, '0')}
					</p>
					<div>
						<p class="text-muted font-mono text-[0.65rem] tracking-wider uppercase">
							{item.label}
						</p>
						<h3 class="mt-3 max-w-md font-mono text-xl leading-tight font-medium tracking-tight">
							{item.title}
						</h3>
						<p class="text-muted mt-2 text-xs">{item.organisation}</p>
					</div>
					<p class="text-muted max-w-xl text-sm leading-7">{item.description}</p>
					<!-- Entries contain resolved internal URLs and trusted external URLs. -->
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						class="text-text group-hover:decoration-accent font-mono text-xs whitespace-nowrap underline decoration-white/20 underline-offset-4 transition"
						href={item.href}
						target={item.href.startsWith('http') ? '_blank' : undefined}
						rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
					>
						{item.linkLabel}<span aria-hidden="true"> ↗</span>
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</article>
			{/each}
		</div>

		<a class="button-secondary mt-10 inline-block px-4 py-2.5" href={resolve('/experience')}>
			View full experience
		</a>
	</div>
</section>

<!-- Contact -->
<section id="contact" class="py-24 sm:py-36">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div class="grid py-10 sm:py-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
			<div>
				<p class="eyebrow">04 / Contact</p>
				<p class="text-muted mt-5 font-mono text-xs leading-6">
					AVAILABLE FOR SELECTED<br />OPTIMISATION + ML PROJECTS
				</p>
			</div>
			<div class="mt-10 lg:mt-0">
				<h2 class="section-heading">Have a prediction or decision system worth building?</h2>
				<p class="text-muted mt-6 max-w-2xl text-lg leading-8">
					Tell me what you are trying to forecast, plan, or improve. You do not need to know whether
					machine learning or optimisation is the right approach, because we'll figure it out
					together :)
				</p>
				<a
					class="border-accent text-text hover:text-accent-strong mt-9 inline-flex border-b pb-2 font-mono text-lg transition-colors sm:text-2xl"
					href="mailto:hi@justuskilianwolff.com?subject=Project%20enquiry"
				>
					hi@justuskilianwolff.com <span class="ml-3" aria-hidden="true">↗</span>
				</a>
			</div>
		</div>
	</div>
</section>
