<script lang="ts">
    import { getContext, onMount } from 'svelte';
    import Divider from '../divider/divider.svelte';

    import Hover from '../hover/hover.svelte';
    import type { BaseSize } from '../types';
    import { createUId } from '../utils/uid-creator';
    import { type IListContext, listContext, type IListItem } from './list.svelte';

    export let disabled = false;
    export let active = false;
    export let size: BaseSize = 'default';
    export let ref: HTMLDivElement = undefined;
    export let hasHover = false;
    export let isDivider = false;
    export let noPadding = false;

    const item: IListItem = {
        active,
        id: createUId(),
        element: ref,
    };

    const { add, count, activeItem } = getContext<IListContext>(listContext);

    $: {
        item.active = $activeItem?.id === item.id;
    }

    if (isDivider) {
        hasHover = false;
    }

    add(item);

    $: classes = [
        `qei-list-item`,
        disabled && `disabled`,
        `size-${size}`,
        isDivider && `divider`,
        item.active && `active`,
        noPadding && `no-padding`,
        $$restProps.class,
    ]
        .filter(Boolean)
        .join(' ');

    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div
    id={item.id}
    bind:this={ref}
    {...$$restProps}
    class={classes}
    style={styles}
    on:click={() => {
        item.active = true;
        $activeItem = item;
    }}>
    {#if isDivider}
        <Divider direction="horizontal" />
    {/if}
    {#if hasHover}
        <Hover bind:active bind:disabled />
    {/if}
    <slot />
</div>
