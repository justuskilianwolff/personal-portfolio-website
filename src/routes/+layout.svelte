<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="m-5 mx-auto px-4 md:max-w-8/10 lg:max-w-7/10 2xl:max-w-6/10">
		{@render children()}
	</div>
</div>
