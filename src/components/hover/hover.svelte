<script lang="ts">
    export let disabled = false;
    export let ref: HTMLDivElement = undefined;
    export let active = false;

    $: classes = [`qei-hover`, disabled && `disabled`, active && `active`, $$restProps.class].filter(Boolean).join(' ');

    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles} />
