<script lang="ts">
	import type { Activity } from './types.js';
	import Card from './Card.svelte';
	import { Dialog, Label, Separator } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import 'iconify-icon';
	import CardPreview from './CardPreview.svelte';

	let { title, subtitle, description, technologies, links }: Activity = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<CardPreview {title} {description} />
	</Dialog.Trigger>
	<Dialog.Portal>
		<!-- background overlay -->
		<Dialog.Overlay class="fixed inset-0 z-0 bg-black/80" />
		<Dialog.Content
			class="z-50 max-w-4xl w-full fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4"
		>
			<div class="card bg-second flex mb-4">
				<div class="card-title"></div>
				<h3 class="mb-2">{title}</h3>
				<h4 class="text-sm text-gray-500">{subtitle}</h4>

				<div class="grow overflow-hidden text-ellipsis whitespace-nowrap">
					{description}
				</div>
				<div class="card-actions justify-end">
					<iconify-icon icon="majesticons:arrow-right"> </iconify-icon>
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
