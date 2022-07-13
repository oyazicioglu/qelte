<script lang="ts">
    import Flex from '../flex/flex.svelte';

    import type { BaseColor, BaseSize, FlexDirection } from '../types';

    export let size: BaseSize = 'default';
    export let color: BaseColor = 'inherit';
    export let disabled: boolean = false;
    export let rounded: boolean = false;
    export let ref: HTMLElement = undefined;
    export let direction: FlexDirection = 'row';

    $: classes = [`qei-select`, `size-${size}`, `color-${color}`, disabled && `disabled`, rounded && `rounded`, $$restProps.class]
        .filter(Boolean)
        .join(' ');
    $: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<Flex {ref} {...$$restProps} {direction} class={classes} style={styles}>
    <slot />
</Flex>
