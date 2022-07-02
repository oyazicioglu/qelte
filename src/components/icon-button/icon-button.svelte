<script lang="ts">
    import Icon from '../icon/icon.svelte';
    import type { BaseColor, BaseSize, ButtonType, IconSize } from '../types.js';

    export let color: BaseColor = 'inherit';
    export let type: ButtonType = 'basic';
    export let size: BaseSize = 'default';
    export let circle = false;
    export let disabled = false;
    export let action: CallableFunction = undefined;
    export let waiting = false;
    export let ref: HTMLElement = undefined;
    export let condense = false;
    export let icon: any = undefined;

    $: classes = [
        `qei-icon-button`,
        !$$restProps.disabled && `btn-color-${color}`,
        `btn-size-${size}`,
        `btn-type-${type}`,
        disabled && `disabled`,
        condense && `condense`,
        circle && 'circle',
        $$restProps.class,
    ]
        .filter(Boolean)
        .join(' ');

    const onClick = () => {
        if (action && !disabled && !waiting) {
            action();
        }
    };
</script>

<button bind:this={ref} type="button" on:click={onClick} on:click {disabled} {...$$restProps} class={classes}>
    <div class="hover" />
    <Icon color={type == 'basic' ? color : 'inherit'} {disabled} {icon} {size} />
</button>
