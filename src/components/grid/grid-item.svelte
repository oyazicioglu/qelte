<script lang="ts">
	import type { GridJustifyItems } from '../types';

	export let justifySelf: GridJustifyItems = 'stretch';
	export let alignSelf: GridJustifyItems = 'stretch';
	export let ref: HTMLElement = undefined;

	$: classes = [`qei-grid-item`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [justifySelf && `justify-self:${justifySelf}`, alignSelf && `align-self:${alignSelf}`, $$restProps.style]
		.filter(Boolean)
		.join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
