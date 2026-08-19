<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-white/10">
	<div
		class="text-muted mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 font-mono text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8"
	>
		<p>© {year} Justus Kilian Wolff</p>

		<nav aria-label="Footer navigation" class="flex flex-wrap items-center gap-x-5 gap-y-2">
			<a
				class="footer-link"
				href="https://github.com/justuskilianwolff"
				target="_blank"
				rel="noreferrer">GitHub</a
			>
			<a
				class="footer-link"
				href="https://www.linkedin.com/in/justus-kilian-wolff/"
				target="_blank"
				rel="noreferrer">LinkedIn</a
			>
			<a class="footer-link" href={resolve('/impressum')}>Impressum</a>
			<a class="footer-link" href="{resolve('/impressum')}#datenschutz">Datenschutz</a>
		</nav>
	</div>
</footer>
