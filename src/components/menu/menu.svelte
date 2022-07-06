<script lang="ts">
    import { createUId } from '../utils/uid-creator.js';
    import { fade } from 'svelte/transition';
    import { hideOnClickOutside } from '../utils/hideOnClickOutside';
    import Icon from '../icon/icon.svelte';
    import IconButton from '../icon-button/icon-button.svelte';
    import Button from '../button/button.svelte';
    import type {
        BaseColor,
        BaseSize,
        ButtonType,
        FlexAlignItem,
        FlexDirection,
        FlexGap,
        FlexJustify,
        IconSize,
        MenuPosition,
    } from '../types.js';
    import type { IListItem, IListModel } from '../list/ListModel.js';
    import { onMount } from 'svelte';
    import Span from '../span/span.svelte';
    import Paper from '../paper/paper.svelte';
    import Flex from '../flex/flex.svelte';

    export let color: BaseColor = 'default';
    export let direction: FlexDirection = 'column';
    export let size: BaseSize = 'default';
    export let type: ButtonType = 'basic';
    export let alignItems: FlexAlignItem = 'stretch';
    export let justifyContent: FlexJustify = 'flex-start';
    export let rounded = false;
    export let disabled = false;
    export let position: MenuPosition = 'bottom-left';
    export let hasShadow = true;
    export let gap: FlexGap = '0';
    export let ref: HTMLElement = undefined;
    export let paddingVertical: FlexGap = '0';
    export let paddingHorizontal: FlexGap = '0';
    export let text: string = undefined;
    export let activeItem: IListItem = undefined;
    export let listModel: IListModel;
    export let circledIcon = false;
    export let useIconButton = true;
    export let icon: any = undefined;

    let showList = false;

    const id = createUId();

    const changeItem = (item: IListItem) => {
        listModel.activeItem = item;
        activeItem = listModel.activeItem;
    };

    onMount(async () => {
        activeItem = listModel.activeItem;
    });

    const toggleMenu = () => {
        showList = !showList;
    };

    $: containerPosition = showList ? setContainerPosition() : `style=top:0; left:0`;

    const setContainerPosition = () => {
        let style = 'min-width:max-content;';
        if (position === 'bottom-left') {
            style += `top:${ref.clientHeight + 2}px; left:0;`;
        }

        if (position === 'bottom-right') {
            style += ` top:${ref.clientHeight + 2}px; right:0;`;
        }

        if (position === 'top-right') {
            style += `bottom:${ref.clientHeight + 2}px; right:0;`;
        }

        if (position === 'top-left') {
            style += `bottom:${ref.clientHeight + 2}px; left:0;`;
        }

        return style;
    };

    $: classes = [`qei-menu`, !disabled && `color-${color}`, `size-${size}`, `type-${type}`, $$restProps.class].filter(Boolean).join(' ');
    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div
    use:hideOnClickOutside={() => {
        showList = false;
    }}
    {id}
    bind:this={ref}
    {...$$restProps}
    {disabled}
    class={classes}
    class:rounded
    style={styles}>
    {#if useIconButton}
        <IconButton circle={circledIcon} on:click={toggleMenu} {type} {color} {size} {disabled} {icon} />
    {/if}

    {#if !useIconButton}
        <Button on:click={toggleMenu} {type} {color} {size} {disabled} {rounded} gap="2">
            {#if icon}
                <Icon {type} color={icon && !text ? color : 'inherit'} {size} {disabled} {icon} />
            {/if}

            {#if text}
                <Span {size}>{text}</Span>
            {/if}
        </Button>
    {/if}

    {#if showList}
        <div transition:fade={{ duration: 200 }} class="qei-menu-container" style={containerPosition}>
            <Paper
                color={type === 'flat' || type === 'raised' ? color : 'default'}
                hideOverflow
                {rounded}
                elevation={hasShadow ? '3' : '0'}
                class="pl-{paddingHorizontal} pr-{paddingHorizontal} pt-{paddingVertical} pb-{paddingVertical}">
                <Flex wrap="nowrap" {gap} {justifyContent} {alignItems} {direction}>
                    {#each listModel.items as item}
                        {#if item.component}
                            <Paper padding="6">
                                <svelte:component this={item.component} />
                            </Paper>
                        {:else}
                            <Button
                                on:click={() => {
                                    changeItem(item);
                                    showList = false;
                                }}
                                gap="2"
                                type={type === 'raised' || type === 'stroked' ? 'flat' : type}
                                {color}
                                fullWidth
                                {justifyContent}
                                {size}
                                active={item === activeItem}>
                                {#if item.component}
                                    <svelte:component this={item.component} />
                                {:else}
                                    {#if item.icon}
                                        <Icon icon={item.icon} {size} />
                                    {/if}
                                    <Span {size}>{item.text ? item.text : item.value}</Span>
                                {/if}
                            </Button>
                        {/if}
                    {/each}
                </Flex>
            </Paper>
        </div>
    {/if}
</div>
