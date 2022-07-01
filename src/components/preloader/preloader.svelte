<script lang="ts">
	import Flex from '../flex/flex.svelte';
	import Spinner from '../spinner/spinner.svelte';
	import type { BaseColor, BaseSize } from '../types';

	export let color: BaseColor = 'default';
	export let size: BaseSize = 'default';
	export let fixed = false;
	export let ref: HTMLElement = undefined;
	export let showBackground = true;

	$: classes = [
		`qei-preloader`,
		fixed && `position-fixed`,
		`size-${size}`,
		`color-${color}`,
		showBackground && `show-background`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style, `height:100%`].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<Flex justifyContent="center" alignItems="center" style={styles}>
		<Spinner {size} {color} />
	</Flex>
</div>
