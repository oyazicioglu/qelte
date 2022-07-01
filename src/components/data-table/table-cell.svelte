<script>
	import { createUId } from '../utils/uid-creator.js';
	export let ref = undefined;

	/**
	 *@type {"left" | "center" | "right"}
	 */
	export let align = 'left';

	const id = createUId();
	const tdClasses = [`qei-table-cell`, align && `align-${align}`].filter(Boolean).join(' ');
</script>

<td {id} bind:this={ref} {...$$restProps} class={tdClasses} style={$$restProps.style}>
	<slot />
</td>
