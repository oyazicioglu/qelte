<script lang="ts">
    import type { BaseColor, BaseSize, IconSize } from '../types';

    export let color: BaseColor = 'inherit';
    export let disabled = false;
    export let ref: HTMLElement = undefined;
    export let icon: any = undefined;
    export let size: BaseSize = 'default';

    $: iconSize =
        size === 'extra-small'
            ? 12
            : size === 'small'
            ? 16
            : size === 'default'
            ? 20
            : size === 'large'
            ? 24
            : size === 'extra-large'
            ? 32
            : 16;

    $: classes = [`qei-icon`, `color-${color}`, disabled && `disabled`, size && `size-${size}`, $$restProps.class]
        .filter(Boolean)
        .join(' ');
    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
    {#if icon}
        <svelte:component this={icon} size={iconSize} />
    {/if}
</div>
