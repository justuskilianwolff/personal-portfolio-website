<script lang="ts">
	let { heading, ...restProps } = $props();
</script>

<div class="py-10">
	<h2 {...restProps}>{heading}</h2>
</div>
