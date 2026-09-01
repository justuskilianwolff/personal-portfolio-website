<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header class="bg-background sticky top-0 z-50 border-b border-white/10">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-8">
		<a
			href={resolve('/')}
			class="min-w-0 shrink font-mono text-xs font-medium tracking-tight text-white no-underline sm:text-sm"
			aria-label="Justus Kilian Wolff, home"
		>
			<span class="min-[380px]:hidden">JW</span>
			<span class="hidden min-[380px]:inline sm:hidden">Justus Wolff</span>
			<span class="hidden sm:inline">Justus Kilian Wolff</span>
		</a>

		<nav
			aria-label="Primary navigation"
			class="flex shrink-0 items-center gap-2 font-mono text-[0.68rem] sm:gap-6 sm:text-xs"
		>
			<a class="nav-link" href={resolve('/work')}>Work</a>
			<a class="nav-link" href={resolve('/academics')}>Academics</a>
			<a
				class="button-primary px-2.5 py-2 text-xs sm:px-4"
				href="mailto:hi@justuskilianwolff.com?subject=Project%20enquiry"
			>
				Contact
			</a>
		</nav>
	</div>
</header>
