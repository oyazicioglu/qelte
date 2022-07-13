<script lang="ts">
    import type { BaseColor, BaseSize, TextAlign } from '../types';

    export let color: BaseColor = 'inherit';
    export let size: BaseSize = 'default';
    export let align: TextAlign = 'start';
    export let disabled = false;
    export let ref = undefined;
    export let bold = false;
    export let italic = false;
    export let noWrap = true;

    $: classes = [
        `qei-text`,
        `color-${color}`,
        disabled && `disabled`,
        bold && `bold`,
        italic && `italic`,
        `align-${align}`,
        `size-${size}`,
        noWrap && `no-wrap`,
        $$restProps.class,
    ]
        .filter(Boolean)
        .join(' ');

    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<span bind:this={ref} {...$$restProps} class={classes} style={styles}>
    <slot />
</span>
