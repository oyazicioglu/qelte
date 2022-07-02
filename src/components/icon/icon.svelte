<script lang="ts">
    import type { BaseColor } from '../types';

    export let color: BaseColor = 'inherit';
    export let disabled = false;
    export let ref: HTMLElement = undefined;

    $: classes = [`qei-icon`, `color-${color}`, disabled && `disabled`, $$restProps.class].filter(Boolean).join(' ');
    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}><slot /></div>
