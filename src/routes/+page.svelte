<script lang="ts">
	import { education } from '$lib/data/education';
	import { projects } from '$lib/data/projects';
	import { work } from '$lib/data/work';
	import Logo from '$lib/Logo.svelte';
	import Tab from '$lib/Tab.svelte';
	import TabGroup from '$lib/TabGroup.svelte';
</script>

<div class="profile-header flex items-center">
	<div class="avatar mr-4">
		<div class="relative h-24 w-24 overflow-hidden rounded-full">
			<img src="/profile_image.jpg" alt="Justus Kilian Wolff" />
		</div>
	</div>
	<div>
		<h1>Justus Kilian Wolff</h1>
		<h3>Hamburg, Germany</h3>
		<div class="my-4 flex max-w-100 flex-wrap gap-4">
			<Logo url="https://github.com/justuskilianwolff" identifier="github" hint="GitHub" />
			<Logo
				url="https://www.linkedin.com/in/justus-kilian-wolff/"
				identifier="linkedin"
				hint="LinkedIn"
			/>
			<Logo
				url="https://www.instagram.com/justuskilianwolff/"
				identifier="instagram"
				hint="Instagram"
			/>
			<Logo url="mailto:hi@justuskilianwolff.com" identifier="mail" hint="Send me an e-mail :)" />
		</div>
	</div>
</div>

<p class="mt-4">
	Hey, I am Justus, 26 years old and from Hamburg. I'm love working on deep learning and operational
	research challenges. Passionate about machine learning, optimisation, and all things computer
	science - always exploring and building :)
</p>

<TabGroup>
	<Tab header="Work Experience" events={work} checked={true}></Tab>
	<Tab header="Projects" events={projects}></Tab>
	<Tab header="Education" events={education}></Tab>
</TabGroup>
