<script lang="ts">
	import type { Activity } from './types.js';
	import 'iconify-icon';

	// Create a new type that includes only the specified propertie

	let {
		title,
		subtitle,
		description,
		technologies,
		links,
		preview
	}: Activity & { preview: boolean } = $props();

	function getRandomNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let outerclass = $derived.by(() => {
		let default_class = 'card bg-second w-full';

		if (preview) {
			default_class += ' break-inside-avoid mb-4 hover:scale-[1.01]';

			return default_class;
		}
	});

	let style = $derived.by(() => {
		let default_style = '';

		if (preview) {
			let height = getRandomNumber(18, 22);
			default_style = `height: ${height}rem;`;

			return default_style;
		}
	});
</script>

<div class={outerclass} {style}>
	<div class="card-body text-left text-first flex overflow-hidden pb-6">
		<div class="card-title">
				<h4>{title}</h4>
			<h3 class="italic">{subtitle}</h3>
		</div>
		<div class="card-content grow overflow-hidden text-ellipsis">
			{description}
		</div>
		{#if preview}
			<div class="card-actions justify-end">
				<iconify-icon icon="majesticons:arrow-right"> </iconify-icon>
			</div>
		{/if}
	</div>
</div>
