<script lang="ts">
	import OptimizationContour from './OptimizationContour.svelte';
	import ProfilePortrait from './ProfilePortrait.svelte';
</script>

<div data-og-card class="bg-background text-text relative h-[630px] w-[1200px] overflow-hidden">
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<OptimizationContour
			hideDot={true}
			fadeFromOptimum={true}
			peakOpacity={0.66}
			edgeOpacity={0.09}
			falloffRate={1.3}
			optimumPosition={{ x: 0.84, y: 0.25 }}
		/>
		<div
			class="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,20,22,0.96)_0%,rgba(18,20,22,0.91)_38%,rgba(18,20,22,0.54)_68%,rgba(18,20,22,0.18)_100%)]"
		></div>
	</div>

	<div class="relative z-10 flex h-full flex-col px-[72px] pt-[68px] pb-[58px]">
		<p class="text-accent font-mono text-[16px] font-medium tracking-[0.09em] uppercase">
			Machine learning & optimisation
		</p>

		<h1
			class="mt-[54px] max-w-[690px] font-mono text-[50px] leading-[0.96] font-semibold tracking-[-0.065em]"
		>
			Prediction and decision<br />systems for complex<br />operations.
		</h1>

		<div class="border-border mt-auto flex items-end justify-between border-t pt-[24px]">
			<div>
				<p class="font-mono text-[20px] font-medium tracking-tight">Justus Kilian Wolff</p>
				<p class="text-muted mt-[11px] text-[15px]">hi@justuskilianwolff.com</p>
			</div>

			<div class="absolute right-[72px] bottom-[54px]">
				<div class="border-accent/70 w-[320px] border-2 bg-[hsl(214_13%_10%)] p-2">
					<ProfilePortrait loading="eager" />
				</div>
				<p class="text-muted mt-[11px] font-mono text-[15px] tracking-wide">HAMBURG / GERMANY</p>
			</div>
		</div>
	</div>
</div>
