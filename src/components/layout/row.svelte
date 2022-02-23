<script lang="ts">
	import type { FlexAlignContent, FlexAlignItem, FlexDirection, FlexGap, FlexJustify, FlexWrap } from '../types';

	export let direction: FlexDirection = 'row';
	export let justifyContent: FlexJustify = 'flex-start';
	export let alignItems: FlexAlignItem = 'stretch';
	export let alignContent: FlexAlignContent = 'normal';
	export let wrap: FlexWrap = 'wrap';
	export let gap: FlexGap = '0';
	export let ref: HTMLElement = undefined;

	$: classes = ['qei-row', $$restProps.class].filter(Boolean).join(' ');

	$: styles = [
		`flex-direction:${direction}`,
		gap && `gap: ${gap}`,
		`justify-content: ${justifyContent}`,
		`align-content: ${alignContent}`,
		`align-items: ${alignItems}`,
		`flex-wrap: ${wrap}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div bind:this={ref} class={classes} style={styles}>
	<slot />
</div>
