<script lang="ts">
	import type { BaseColor, BaseSize } from '../types';
	export let color: BaseColor = 'default';
	export let size: BaseSize = 'default';
	export let ref: HTMLElement = undefined;

	$: classes = [`qei-spinner`, `size-${size}`, `color-${color}`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<div class="loader" />
</div>
