<script lang="ts">
	import LogoLink from '$lib/LogoLink.svelte';
</script>

<div class="profile-header flex items-center">
	<div class="avatar mr-4">
		<div class="w-24 rounded-full">
			<img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
		</div>
	</div>
	<div>
		<h1>Justus Kilian Wolff</h1>
		<h2>Hamburg, Germany</h2>
    <div class="flex flex-wrap mt-2 gap-x-2  gap-y-1.5 max-w-100">
      <LogoLink
        text="LinkedIn"
        url="https://www.linkedin.com/in/justus-kilian-wolff/"
        icon="linkedin"
      />
      <LogoLink text="GitHub" url="https://github.com/justuskilianwolff" icon="github" />
      <LogoLink
        text="Instagram"
        url="https://www.instagram.com/justuskilianwolff/"
        icon="instagram"
      />
      <LogoLink text="Mail" url="mailto:hi@justuskilianwolff.com" icon="mail" />

      <!-- Placeholder for additional buttons -->
    </div>
	</div>
</div>

<p>
	Hey, I am Justus and welcome to my personal website. I am a software engineer and I love to build
	things. I am currently working at a startup in the field of AI and machine learning. In my free
	time, I enjoy hiking, reading, and playing video games. Feel free to reach out to me on LinkedIn
	or Twitter!
</p>

<div class="tabs tabs-border mt-4">
	<input type="radio" name="my_tabs" class="tab" aria-label="Curriculum Vitae" />
	<div class="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

	<input type="radio" name="my_tabs" class="tab" aria-label="Work" checked="checked" />
	<div class="tab-content p-10">Tab content 2</div>

	<input type="radio" name="my_tabs" class="tab" aria-label="Tab 3" />
	<div class="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>
