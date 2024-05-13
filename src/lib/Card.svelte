<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let title: string;
	export let description: string;
	export let content: string;
	export let footer: string;

	function getRandomNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let height = getRandomNumber(12, 24);
</script>

<Card.Root
	style={`height: ${height}rem`}
	class="bg-second border-fourth border-2 mb-4 break-inside-avoid-column hover:scale-[1.02]"
>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>{content}</p>
	</Card.Content>
	<Card.Footer>
		<p>{footer}</p>
	</Card.Footer>
</Card.Root>
