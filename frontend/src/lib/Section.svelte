<script lang="ts">
	interface Props { [key: string]: any }

	let { children, ...rest }: Props = $props();
</script>

<div {...rest}>
	<div class="max-w-5xl mx-auto pt-1 pb-8 px-4">
		{@render children?.()}
	</div>
</div>
