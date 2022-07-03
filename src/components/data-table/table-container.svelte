<script>
    import Grid from '../grid/grid.svelte';

    import { createUId } from '../utils/uid-creator.js';
    export let ref = undefined;

    const id = createUId();
    const classes = [`qei-table-container`].filter(Boolean).join(' ');
</script>

<Grid style="width: 100%; height:100%">
    <div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
        <slot />
    </div>
</Grid>
