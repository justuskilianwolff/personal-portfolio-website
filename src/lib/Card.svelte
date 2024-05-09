<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let title: string;
	export let description: string;
	export let content: string;
	export let footer: string;

	function getRandomNumber(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let width = getRandomNumber(20, 25);
	let height = getRandomNumber(15, 18);
	console.log(width, height);
	//max-w-80 min-w-56
</script>

<Card.Root style={`width: ${width}rem; height: ${height}rem`} class="bg-second">
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
