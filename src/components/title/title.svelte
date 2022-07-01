<script lang="ts">
	import type { BaseColor, Headings, TextAlign } from '../types';

	export let heading: Headings = '1';
	export let color: BaseColor = 'inherit';
	export let bold = false;
	export let italic = false;
	export let disabled = false;
	export let ref: HTMLElement = undefined;
	export let align: TextAlign = 'start';

	$: classes = [
		`qei-title`,
		`align-${align}`,
		`color-${color}`,
		bold && `bold`,
		italic && `italic`,
		disabled && `disabled`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	{#if heading === '1'}
		<h1><slot /></h1>
	{:else if heading === '2'}
		<h2><slot /></h2>
	{:else if heading === '3'}
		<h3><slot /></h3>
	{:else if heading === '4'}
		<h4><slot /></h4>
	{:else if heading === '5'}
		<h5><slot /></h5>
	{:else if heading === '6'}
		<h6><slot /></h6>
	{:else}
		<span><slot /></span>
	{/if}
</div>
