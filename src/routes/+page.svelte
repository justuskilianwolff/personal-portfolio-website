<script lang="ts">
	import LogoLink from '$lib/LogoLink.svelte';
	import Tab from '$lib/Tab.svelte';
	import TabGroup from '$lib/TabGroup.svelte';
	import { educationHistory } from '$lib/data/education';
	import { projects } from '$lib/data/projects';
	import { workExperience } from '$lib/data/work';
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
		<h2>Hamburg, Germany</h2>
		<div class="mt-2 flex max-w-100 flex-wrap gap-x-2 gap-y-1.5">
			<LogoLink url="https://www.linkedin.com/in/justus-kilian-wolff/" icon="linkedin" />
			<LogoLink url="https://github.com/justuskilianwolff" icon="github" />
			<LogoLink url="https://www.instagram.com/justuskilianwolff/" icon="instagram" />
			<LogoLink url="mailto:hi@justuskilianwolff.com" icon="mail" />
		</div>
	</div>
</div>

<p class="mt-4">
	Hey, I am Justus and welcome to my personal website. I am a software engineer and I love to build
	things. I am currently working at a startup in the field of AI and machine learning. In my free
	time, I enjoy hiking, reading, and playing video games. Feel free to reach out to me on LinkedIn
	or Twitter!
</p>

<TabGroup>
	<Tab header="Work Experience" events={workExperience} checked={true}></Tab>
	<Tab header="Education" events={educationHistory}></Tab>
	<Tab header="Projects" events={projects}></Tab>
</TabGroup>
