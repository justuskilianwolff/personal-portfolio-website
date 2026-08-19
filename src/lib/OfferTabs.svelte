<script lang="ts">
	type TabId = 'predictions' | 'decisions';
	type Offer = {
		id: TabId;
		label: string;
		heading: string;
		description: string;
		examples: string[];
		outputs: string[];
	};

	const offers: Offer[] = [
		{
			id: 'predictions',
			label: 'Predictions',
			heading: 'Understand what is likely to happen.',
			description:
				'Machine learning identifies patterns in operational data and turns them into useful estimates, scenarios, and early warnings.',
			examples: [
				'How many orders will arrive next week?',
				'How are prices likely to change?',
				'Which transactions are most likely fraudulent?',
				'When is equipment likely to fail?'
			],
			outputs: ['Demand', 'Prices', 'Risk scores', 'Failure probabilities']
		},
		{
			id: 'decisions',
			label: 'Decisions',
			heading: 'Choose the best action within real-world constraints.',
			description:
				'Mathematical optimisation compares possible choices and finds the best feasible option for a defined goal. It accounts for real-world limits such as time, capacity, cost, and availability.',
			examples: [
				'How should shifts be scheduled to meet demand?',
				'Where should a new facility be located?',
				'How should limited resources be allocated?',
				'Which production plan best balances cost and capacity?'
			],
			outputs: ['Delivery routes', 'Staff schedules', 'Resource allocations', 'Facility locations']
		}
	];

	let active: TabId = $state('predictions');

	function activate(id: TabId) {
		active = id;
		requestAnimationFrame(() => document.getElementById(`offer-tab-${id}`)?.focus());
	}

	function onKeydown(event: KeyboardEvent) {
		const index = offers.findIndex((offer) => offer.id === active);
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			activate(offers[(index + 1) % offers.length].id);
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			activate(offers[(index - 1 + offers.length) % offers.length].id);
		} else if (event.key === 'Home') {
			event.preventDefault();
			activate(offers[0].id);
		} else if (event.key === 'End') {
			event.preventDefault();
			activate(offers[offers.length - 1].id);
		}
	}
</script>

<section
	class="surface-card overflow-hidden rounded-none shadow-2xl shadow-black/15"
	aria-label="Prediction and decision capabilities"
>
	<div class="border-b border-white/10 px-5 pt-3 sm:px-6">
		<div class="flex gap-5 sm:gap-7" role="tablist" aria-label="Capabilities">
			{#each offers as offer (offer.id)}
				<button
					id="offer-tab-{offer.id}"
					type="button"
					role="tab"
					class="relative min-h-11 border-b-2 px-1 pb-3 font-mono text-[0.68rem] font-medium tracking-wide transition sm:text-sm"
					class:border-accent={active === offer.id}
					class:text-white={active === offer.id}
					class:border-transparent={active !== offer.id}
					class:text-muted={active !== offer.id}
					aria-selected={active === offer.id}
					aria-controls="offer-panel-{offer.id}"
					tabindex={active === offer.id ? 0 : -1}
					onkeydown={onKeydown}
					onclick={() => activate(offer.id)}
				>
					{offer.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="grid p-5 sm:p-6">
		{#each offers as offer (offer.id)}
			<div
				id="offer-panel-{offer.id}"
				role="tabpanel"
				class="col-start-1 row-start-1"
				class:invisible={active !== offer.id}
				aria-labelledby="offer-tab-{offer.id}"
				aria-hidden={active !== offer.id}
				inert={active !== offer.id}
				tabindex="0"
			>
				<div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
					<div>
						<h3
							class="max-w-xl font-mono text-xl leading-tight font-medium tracking-tight sm:text-2xl"
						>
							{offer.heading}
						</h3>
						<p class="text-muted mt-4 max-w-xl leading-7">{offer.description}</p>
						<div class="mt-6 flex flex-wrap gap-2">
							{#each offer.outputs as output (output)}
								<span
									class="border border-white/12 px-2.5 py-1.5 font-mono text-[0.67rem] text-[hsl(218_11%_81%)]"
								>
									{output}
								</span>
							{/each}
						</div>
					</div>

					<div class="border-t border-white/12 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
						<p class="text-muted font-mono text-[0.68rem] tracking-wider uppercase">
							Example questions
						</p>
						<ul class="mt-4 grid gap-3 text-sm leading-6 text-[hsl(220_7%_84%)]">
							{#each offer.examples as example (example)}
								<li class="flex gap-3">
									<span aria-hidden="true" class="bg-accent mt-2 h-1.5 w-1.5 shrink-0"></span>
									<span>{example}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
