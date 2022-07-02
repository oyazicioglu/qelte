<script>
	import { createUId } from '../utils/uid-creator.js';
	export let ref = undefined;

	const id = createUId();

	$: layoutClasses = [`qei-container`, $$restProps.class].filter(Boolean).join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {id} class={layoutClasses} style={styles}>
	<slot />
</div>
