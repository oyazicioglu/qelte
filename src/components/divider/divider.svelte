<script lang="ts">
	import type { BaseColor, DividerDirection } from '../types';

	export let direction: DividerDirection = 'horizontal';
	export let color: BaseColor = 'default';
	export let ref: HTMLElement = undefined;

	$: classes = [`qei-divider`, `color-${color}`, `direction-${direction}`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>&nbsp;</div>
