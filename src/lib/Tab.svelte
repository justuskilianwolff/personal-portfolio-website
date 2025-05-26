<script lang="ts">
	let {
		header,
		content,
		checked = false
	}: { header: string; content: string; checked?: boolean } = $props();
</script>

<input type="radio" name="my_tabs" class="tab" aria-label={header} {checked} />

<div class="tab-content p-10">
	{@html content}
</div>
