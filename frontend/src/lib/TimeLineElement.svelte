<script lang="ts">
	let {
		eventTitleAtTop,
		eventTitle,
		month,
		year
	}: {
		eventTitleAtTop: boolean;
		eventTitle: string;
		month: string;
		year: string;
	} = $props();

	let monthYear: string = `${month}/${year}`;
	let upperValue = eventTitleAtTop ? eventTitle : monthYear;
	let lowerValue = eventTitleAtTop ? monthYear : eventTitle;
</script>

<li>
	<hr />
	<div class="timeline-start {eventTitleAtTop ? 'timeline-box' : ''}">{upperValue}</div>
	<div class="timeline-middle">.</div>
	<div class="timeline-end {!eventTitleAtTop ? 'timeline-box' : ''}">{lowerValue}</div>
	<hr />
</li>
