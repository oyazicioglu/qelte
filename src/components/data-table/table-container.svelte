<script>
    import { createUId } from '../utils/uid-creator.js';
    export let ref = undefined;

    const id = createUId();
    const classes = [`qei-table-container`].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
    <slot />
</div>
