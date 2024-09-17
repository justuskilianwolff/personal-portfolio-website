<script lang="ts">
	interface CardProps {
		title: string;
		subtitle?: string;
		description: string;
		technologies?: number; //TODO: update with real types
		links?: number;
	}

	let { title, subtitle, description }: CardProps = $props();

	function getRandomNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let height = getRandomNumber(12, 24);
</script>

<div
	style={`height: ${height}rem`}
	class="card bg-second border-fourth border-2 mb-4 break-inside-avoid-column hover:scale-[1.02]"
>
	<div class="card-body">
		<div class="card-title">
			<p>{title}</p>
			{subtitle}
		</div>
		<div class="card-content">
			{description}
		</div>
	</div>
</div>
