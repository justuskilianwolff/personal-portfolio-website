<script lang="ts">
	import LogoLink from '$lib/LogoLink.svelte';
	import Tab from '$lib/Tab.svelte';
	import TabGroup from '$lib/TabGroup.svelte';
	import { education } from '$lib/data/education';
	import { projects } from '$lib/data/projects';
	import { work } from '$lib/data/work';
</script>

<div class="profile-header flex items-center">
	<div class="avatar mr-4">
		<div class="w-24 rounded-full">
			<img
				src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
				alt="Justus Kilian Wolff"
			/>
		</div>
	</div>
	<div>
		<h1>Justus Kilian Wolff</h1>
		<h3>Hamburg, Germany</h3>
		<div class="my-4 flex max-w-100 flex-wrap gap-4">
			<LogoLink url="https://github.com/justuskilianwolff" identifier="github" />
			<LogoLink url="https://www.linkedin.com/in/justus-kilian-wolff/" identifier="linkedin" />
			<LogoLink url="https://www.instagram.com/justuskilianwolff/" identifier="instagram" />
			<LogoLink url="mailto:hi@justuskilianwolff.com" identifier="mail" />
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
