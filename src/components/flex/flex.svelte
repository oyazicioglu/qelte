<script lang="ts">
	import type { FlexAlignContent, FlexAlignItem, FlexDirection, FlexGap, FlexJustify, FlexWrap } from '../types';

	export let direction: FlexDirection = 'row';
	export let justifyContent: FlexJustify = 'flex-start';
	export let alignItems: FlexAlignItem = 'stretch';
	export let alignContent: FlexAlignContent = 'normal';
	export let wrap: FlexWrap = 'wrap';
	export let gap: FlexGap = undefined;
	export let ref = undefined;
	export let fullWidth = false;

	$: classes = [
		`qei-flex`,
		`flex-direction-${direction}`,
		fullWidth && `fullWidth`,
		gap && `has-gap`,
		`flex-gap-${gap}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [
		`flex-wrap:${wrap}`,
		`justify-content:${justifyContent}`,
		`align-items:${alignItems}`,
		`align-content:${alignContent}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div bind:this={ref} {...$$restProps} on:click class={classes} style={styles}>
	<slot />
</div>
