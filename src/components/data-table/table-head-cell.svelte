<script>
	import { createUId } from '../utils/uid-creator.js';
	export let ref = undefined;

	/**
	 *@type {"left" | "center" | "right"}
	 */
	export let align = 'left';
	export let sortable = false;

	const id = createUId();
	const thClasses = [`qei-table-head-cell`, sortable && `sortable`, align && `align-${align}`].filter(Boolean).join(' ');
</script>

<th {id} bind:this={ref} on:click {...$$restProps} class={thClasses} style={$$restProps.style}>
	<slot />
</th>
