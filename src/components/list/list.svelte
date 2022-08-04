<script lang="ts" context="module">
    export const listContext = {};

    export interface IListContext {
        add(item: IListItem): void;
        count(): number;
        size: BaseSize;
        activeItem: Writable<IListItem>;
    }

    export interface IListItem {
        element: HTMLElement;
        active: boolean;
        id: string;
    }
</script>

<script lang="ts">
    import { onMount, setContext } from 'svelte';
    import type { BaseColor, BaseSize, ButtonType, FlexAlignItem, FlexDirection, FlexGap, FlexJustify } from '../types.js';
    import Paper from '../paper/paper.svelte';
    import Flex from '../flex/flex.svelte';
    import { writable } from 'svelte/store';
    import type { Writable } from 'svelte/store';

    export let color: BaseColor = 'default';
    export let direction: FlexDirection = 'column';
    export let size: BaseSize = 'default';
    export let type: ButtonType = 'basic';
    export let alignItems: FlexAlignItem = 'stretch';
    export let justifyContent: FlexJustify = 'flex-start';
    export let rounded = false;
    export let disabled = false;
    export let gap: FlexGap = '0';
    export let ref: HTMLElement = undefined;
    export let paddingVertical: FlexGap = '0';
    export let paddingHorizontal: FlexGap = '0';
    export let hideOverflow = true;
    export let items: IListItem[] = [];

    const activeItem = writable<IListItem>(undefined);

    if (type === 'stroked') {
        type = 'basic';
    }

    const add = (item: IListItem) => {
        if (!item) return;
        items.push(item);
        if (item.active) {
            setActiveItem(item);
        }
    };

    const setActiveItem = (item: IListItem) => {
        $activeItem = item;
    };

    const count = () => {
        return items.length | 0;
    };

    setContext<IListContext>(listContext, { add, count, activeItem, size });

    onMount(async () => {
        setActiveItem(items.find((i) => i.active === true));
    });

    $: classes = [`qei-list`, !disabled && `color-${color}`, `type-${type}`, `size-${size}`, rounded && `rounded`, $$restProps.class]
        .filter(Boolean)
        .join(' ');

    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
    <Paper
        color={type === 'flat' || type === 'raised' ? color : 'default'}
        {hideOverflow}
        {rounded}
        elevation={type === 'raised' ? '3' : '0'}
        class="pl-{paddingHorizontal} pr-{paddingHorizontal} pt-{paddingVertical} pb-{paddingVertical}">
        <Flex wrap="nowrap" {gap} {justifyContent} {alignItems} {direction}>
            <slot />
        </Flex>
    </Paper>
</div>
