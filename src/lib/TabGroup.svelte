<script lang="ts">
	let { children } = $props();
</script>

<div class="tabs tabs-border mt-4">
	{@render children()}
</div>
