<script lang="ts">
	import TimeLineElement from './TimeLineElement.svelte';
</script>

<ul class="timeline">
	<TimeLineElement
		eventTitle="First Macintosh computer"
		eventTitleAtTop={false}
		month="01"
		year="1984"
	/>
	<TimeLineElement eventTitle="iMac" eventTitleAtTop={true} month="08" year="1998" />
	<TimeLineElement eventTitle="iPod" eventTitleAtTop={false} month="10" year="2001" />
	<TimeLineElement eventTitle="iPhone" eventTitleAtTop={true} month="06" year="2007" />
	<TimeLineElement eventTitle="Apple Watch" eventTitleAtTop={false} month="04" year="2015" />
</ul>
