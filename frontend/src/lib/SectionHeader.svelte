<script lang="ts">
	let { heading, ...restProps } = $props();
</script>

<div class="px-5 py-10">
	<h2 {...restProps}>{heading}</h2>
</div>
