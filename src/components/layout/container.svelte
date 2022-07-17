<script lang="ts">
    export let fullFit = false;
    export let fullWidth = true;
    export let ref: HTMLDivElement = undefined;

    $: if (fullFit) fullWidth = false;

    $: classes = [`qei-container`, fullFit && `fullFit`, fullWidth && `fullWidth`, $$restProps.class].filter(Boolean).join(' ');

    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} class={classes} style={styles}>
    <slot />
</div>
