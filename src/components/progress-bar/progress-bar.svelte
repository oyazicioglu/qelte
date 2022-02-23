<script lang="ts">
	import FlexItem from '../flex/flex-item.svelte';
	import Flex from '../flex/flex.svelte';
	import Span from '../span/span.svelte';
	import type { BaseSize, TripleColor } from '../types';

	export let color: TripleColor = 'default';
	export let size: BaseSize = 'default';
	export let ref = undefined;
	export let value: number = 50;
	export let min: number = 0;
	export let max: number = 100;
	export let indeterminate = false;
	export let fullWidth = false;
	export let showValue = false;
	export let showPercentage = true;

	$: classes = [
		`qei-progress-bar`,
		fullWidth && `fullWidth`,
		`size-${size}`,
		indeterminate && `indeterminate`,
		`color-${color}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');

	$: ratio = (value / (max - min)) * 100;
</script>

<Flex direction="row" alignItems="baseline" gap="5">
	<FlexItem grow={1}>
		<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
			<div class="background" />
			<div class="indicator" style={indeterminate === false ? `width:${ratio}%` : 'width:100%'} />
		</div>
	</FlexItem>
	{#if !indeterminate && showValue}
		<Span {size} {color}>{value}</Span>
	{/if}
	{#if !indeterminate && showPercentage}
		<Span {size} {color}>%{ratio.toFixed()}</Span>
	{/if}
</Flex>
