<script lang="ts">
	import { base } from '$app/paths';
	import { education } from '$lib/data/education';
	import { projects } from '$lib/data/projects';
	import { work } from '$lib/data/work';
	import Logo from '$lib/Logo.svelte';
	import Tab from '$lib/Tab.svelte';
	import TabGroup from '$lib/TabGroup.svelte';
</script>

<div class="flex items-center">
	<div class="avatar mr-4">
		<div class="relative h-24 w-24 overflow-hidden rounded-full">
			<img src="{base}/profile_image.jpg" alt="Justus Kilian Wolff" />
		</div>
	</div>
	<div>
		<h1>Justus Kilian Wolff</h1>
		<h3>Hamburg, Germany</h3>
		<div class="my-4 flex max-w-100 flex-wrap gap-4">
			<Logo url="https://github.com/justuskilianwolff" identifier="mdi:github" hint="GitHub" />
			<Logo
				url="https://www.linkedin.com/in/justus-kilian-wolff/"
				identifier="mdi:linkedin"
				hint="LinkedIn"
			/>
			<Logo
				url="https://www.instagram.com/justuskilianwolff/"
				identifier="mdi:instagram"
				hint="Instagram"
			/>
			<Logo
				url="mailto:hi@justuskilianwolff.com"
				identifier="material-symbols:mail-outline"
				hint="Send me an e-mail :)"
			/>
		</div>
	</div>
</div>

<p class="mt-4">
	Hey, I'm Justus, 27 years old and from Hamburg. Currently building a product to make optimisation
	accessible to everyone. Background in operational research and deep learning, passionate about
	software and all things CS — always curious and exploring. Feel free to drop me a message :)
</p>

<TabGroup>
	<Tab header="Work Experience" events={work} checked={true}></Tab>
	<Tab header="Projects" events={projects}></Tab>
	<Tab header="Education" events={education}></Tab>
</TabGroup>
