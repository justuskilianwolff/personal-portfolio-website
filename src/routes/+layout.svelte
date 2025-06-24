<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="m-5 mx-auto min-h-screen w-full max-w-4xl px-4 pt-16">
	{@render children()}
</div>
