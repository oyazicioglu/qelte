<script lang="ts">
	import Preloader from '../preloader/preloader.svelte';
	import Flex from '../flex/flex.svelte';
	import type { BaseColor, BaseSize, ButtonType, FlexDirection, FlexGap, FlexJustify, TripleColor } from '../types';

	export let direction: FlexDirection = 'row';
	export let color: BaseColor = 'default';
	export let size: BaseSize = 'default';
	export let type: ButtonType = 'basic';
	export let justifyContent: FlexJustify = 'center';
	export let rounded = false;
	export let disabled = false;
	export let action: CallableFunction = undefined;
	export let waiting = false;
	export let ref: HTMLButtonElement = undefined;
	export let active = false;
	export let fullWidth = false;
	export let submitButton = false;
	export let gap: FlexGap = '0';
	export let noWrap = true;

	$: classes = [
		`qei-button`,
		noWrap && `no-wrap`,
		`color-${color}`,
		`size-${size}`,
		disabled && `disabled`,
		`type-${type}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');

	const onClick = () => {
		if (action && !disabled && !waiting) {
			action();
		}
	};
</script>

<button
	type={submitButton ? 'submit' : 'button'}
	bind:this={ref}
	on:click={onClick}
	on:click
	{...$$restProps}
	{disabled}
	class={classes}
	class:active
	class:rounded
	class:fullWidth
	style={styles}>
	<div class="hover" />
	{#if waiting && !disabled}
		<Preloader showBackground {color} {size} />
	{/if}
	<Flex wrap="nowrap" {direction} {gap} {justifyContent} alignItems="baseline">
		<slot />
	</Flex>
</button>
