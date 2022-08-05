<script lang="ts">
    import { createUId } from '../utils/uid-creator.js';
    import { fade } from 'svelte/transition';
    import { hideOnClickOutside } from '../utils/hideOnClickOutside';
    import Icon from '../icon/icon.svelte';
    import IconButton from '../icon-button/icon-button.svelte';
    import Button from '../button/button.svelte';
    import type { BaseColor, BaseSize, ButtonType, MenuPosition } from '../types.js';
    import Span from '../span/span.svelte';

    export let color: BaseColor = 'default';
    export let size: BaseSize = 'default';
    export let type: ButtonType = 'basic';
    export let rounded = false;
    export let disabled = false;
    export let position: MenuPosition = 'bottom-left';
    export let ref: HTMLElement = undefined;
    export let text: string = undefined;
    export let circledIcon = false;
    export let useIconButton = true;
    export let icon: any = undefined;

    let showList = false;

    const id = createUId();

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
            <slot />
        </div>
    {/if}
</div>
