<script lang="ts">
	import type { FlexAlignSelf } from '../types';

	export let order: string | number = 0;
	export let grow: string | number = 0;
	export let shrink: string | number = 1;
	export let basis = 'auto';
	export let alignSelf: FlexAlignSelf = 'auto';
	export let ref: HTMLElement = undefined;

	$: classes = [`qei-flex-item`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [
		`order:${order}`,
		`flex-grow:${grow}`,
		`flex-shrink: ${shrink}`,
		`flex-basis:${basis}`,
		`align-self:${alignSelf}`,
		$$restProps.style,
	].join(';');
</script>

<div bind:this={ref} class={classes} style={styles}>
	<slot />
</div>
