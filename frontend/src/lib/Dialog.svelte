<script lang="ts">
	import type { Activity } from './types.js';
	import Card from './Card.svelte';
	import { Dialog, Label, Separator } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import 'iconify-icon';

	let { title, subtitle, description, technologies, links }: Activity = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger class="w-full">
		<Card {title} {subtitle} {description} technologies={[]} links={[]} preview={true} />
	</Dialog.Trigger>

	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class="card fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%]  bg-background shadow-popover outline-none sm:max-w-[490px] md:w-full"
		>
			<Card {title} {subtitle} {description} {technologies} {links} preview={false} />

			<Dialog.Close
				class="absolute right-5 top-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
			>
				<iconify-icon icon="basil:cross-solid"> </iconify-icon>
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
