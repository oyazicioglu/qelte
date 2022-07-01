<script>
	import { createUId } from '../utils/uid-creator.js';
	export let ref = undefined;

	/**
	 *@type {"left" | "center" | "right"}
	 */
	export let align = 'left';

	export let odd = false;
	export let useStrip = false;
	export let hasDivider = false;
	export let condense = false;

	const id = createUId();
	const thClasses = [
		`qei-table-row`,
		align && `align-${align}`,
		condense && `condense`,
		odd && `odd-row`,
		hasDivider && `hasDivider`,
		useStrip && `stripped`,
	]
		.filter(Boolean)
		.join(' ');
</script>

<tr {id} bind:this={ref} on:click {...$$restProps} class={thClasses} style={$$restProps.style}>
	<slot />
</tr>
