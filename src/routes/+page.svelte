<script lang="ts">
	import 'iconify-icon';
	import HeaderPhoto from '$lib/HeaderPhoto.svelte';
	import Section from '$lib/Section.svelte';
	import Card from '$lib/Card.svelte';
</script>

<Section backgroundColor="second">
	<div class="bg-second px-5 pt-10">
		<div class="flex flex-col gap-4 justify-between md:flex-row md:items-center md:gap-0">
			<div class="flex flex-col">
				<div class="flex flex-row">
					<HeaderPhoto />
					<div class="flex flex-col">
						<h1 class=" text-first pl-1">Justus</h1>
						<h1 class=" text-first pl-5 italic tracking-tight">Kilian</h1>
					</div>
				</div>
				<h1 class=" text-first pl-12 py-0 font-bold tracking-wide">Wolff</h1>
			</div>
			<p class="text-first px-4 max-w-80 md:text-right">
				Welcome to Max's corner, where Hamburg meets machine learning! As a student from this
				vibrant city, Max is passionate about unraveling the mysteries of AI. Join him on his
				journey through the world of algorithms and data analysis. Let's explore together the
				fascinating realm where Hamburg's charm intersects with cutting-edge technology. Let's get
				in touch :)
			</p>
		</div>
		<div class=" pt-10 pb-4 flex flex-row justify-center gap-10 items-center">
			<a href="mailto:moin@justuskilianwolff.io">moin@justuskilianwolff.io</a>
			<iconify-icon icon="mdi:github" />
			<iconify-icon icon="mdi:linkedin" />
			<iconify-icon icon="mdi:instagram" />
		</div>
	</div>
</Section>
<Section backgroundColor="first" class="bg-first pb-12">
	<div class="px-5 py-10">
		<h2 class="text-second">Projects</h2>
	</div>

	<div class="flex flex-wrap justify-evenly mx-4 gap-5">
		<Card title="MOPTA" description="desc" content="content" footer="footer" />
		<Card title="MOPTA" description="desc" content="content" footer="footer" />
		<Card title="MOPTA" description="desc" content="content" footer="footer" />
		<Card title="MOPTA" description="desc" content="content" footer="footer" />
	</div>
</Section>
