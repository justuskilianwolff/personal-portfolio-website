<script lang="ts">
	import { asset } from '$app/paths';

	let { loading = 'lazy' }: { loading?: 'eager' | 'lazy' } = $props();
</script>

<picture class="block">
	<source srcset={asset('/profile_image.webp')} type="image/webp" />
	<img
		src={asset('/profile_image.jpg')}
		alt="Justus Kilian Wolff"
		class="aspect-[4/5] w-full object-cover object-[45%_50%] saturate-[0.72]"
		width="576"
		height="720"
		{loading}
		decoding="async"
	/>
</picture>
