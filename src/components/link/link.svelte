<script lang="ts">
	import type { BaseColor } from '../types.js';
	export let color: BaseColor = 'inherit';
	export let bold = false;
	export let italic = false;
	export let disabled = false;
	export let href = '#';
	export let outbound = false;
	export let ref: HTMLElement = undefined;
	export let active = false;

	$: classes = [
		`qei-link`,
		bold && `bold`,
		italic && `italic`,
		active && `active`,
		disabled && `disabled`,
		`color-${color}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
</script>

<div bind:this={ref} on:click {...$$restProps} class={classes} style={$$restProps.style}>
	<a {href} target={outbound ? '_blank' : ''}>
		<slot />
	</a>
	<div class="underline" />
</div>
