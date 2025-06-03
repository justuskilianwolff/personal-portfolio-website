<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="mx-auto m-5 px-4 md:max-w-8/10 lg:max-w-7/10 2xl:max-w-6/10">
		{@render children()}
	</div>
</div>
