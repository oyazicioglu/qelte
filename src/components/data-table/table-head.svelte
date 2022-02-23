<script>
	import { createUId } from '../utils/uid-creator.js';
	export let ref = undefined;

	/**
	 *@type {"left" | "center" | "right"}
	 */
	export let align = 'left';

	export let condense = false;

	const id = createUId();
	const thClasses = [`qei-table-head hasDivider`, align && `align-${align}`, condense && `condense`].filter(Boolean).join(' ');
</script>

<tr {id} bind:this={ref} {...$$restProps} class={thClasses} style={$$restProps.style}>
	<slot />
</tr>
