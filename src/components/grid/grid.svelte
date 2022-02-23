<script lang="ts">
	import type { FlexGap, GridAlignItems, GridAutoFlow, GridContentAlign, GridJustifyItems } from '../types';

	export let justifyContent: GridContentAlign = 'stretch';
	export let alignContent: GridContentAlign = 'stretch';
	export let justifyItems: GridJustifyItems = 'start';
	export let alignItems: GridAlignItems = 'start';
	export let autoFlow: GridAutoFlow = 'row';
	export let ref: HTMLElement = undefined;
	export let templateColumns: string = undefined;
	export let templateRows: string = undefined;
	export let inline = false;
	export let gap: FlexGap = '0';
	export let absolute = false;

	$: autoFlow = templateColumns || templateRows ? undefined : autoFlow;

	$: classes = [`qei-grid`, inline && `inline`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [
		autoFlow && `grid-auto-flow:${autoFlow}`,
		absolute && `position:absolute`,
		templateColumns && `grid-template-columns:${templateColumns}`,
		templateRows && `grid-template-rows:${templateRows}`,
		gap && `gap:${gap}`,
		`justify-content:${justifyContent}`,
		`justify-items:${justifyItems}`,
		`align-items:${alignItems}`,
		`align-content:${alignContent}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<slot />
</div>
