<script lang="ts">
	import type { BaseColor, ElevationLevel, FlexGap } from '../types';

	export let color: BaseColor = 'default';
	export let rounded = false;
	export let hideOverflow = false;
	export let elevation: ElevationLevel = '0';
	export let ref: HTMLElement = undefined;
	export let padding: FlexGap = '0';
	export let fullWidth = false;

	$: classes = [
		`qei-paper`,
		`elevation-${elevation}`,
		`p-${padding}`,
		`color-${color}`,
		fullWidth && `fullWidth`,
		rounded && `rounded`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [hideOverflow && `overflow:hidden`, $$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
