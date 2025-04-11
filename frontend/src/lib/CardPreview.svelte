<script lang="ts">
	import type { Activity } from './types.js';
	import 'iconify-icon';

	// Create a new type that includes only the specified propertie

	let { title, description }: { title: string; description: string } = $props();
</script>

<div class="card bg-second flex mb-4 hover:scale-[1.01]">
	<div class="card-body text-left text-first flex overflow-hidden pb-6">
		<div class="card-title">
			<h3>{title}</h3>
		</div>

		<div class="card-content grow overflow-hidden text-ellipsis whitespace-nowrap">
			{description}
		</div>
		<div class="card-actions justify-end">
			<iconify-icon icon="majesticons:arrow-right"> </iconify-icon>
		</div>
	</div>
</div>
