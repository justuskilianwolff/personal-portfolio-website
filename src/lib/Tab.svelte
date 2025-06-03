<script lang="ts">
	import TimelineEvent from '$lib/TimelineEvent.svelte';
	import type { TimelineEvent as TimelineEventType } from '$lib/types';

	let {
		header,
		events,
		checked = false
	}: { header: string; events: TimelineEventType[]; checked?: boolean } = $props();
</script>

<input type="radio" name="my_tabs" class="tab" aria-label={header} {checked} />

<div class="tab-content p-10">
	{#each events as event}
		<TimelineEvent {event} />
	{/each}
</div>
