<script>
    import { createUId } from '../utils/uid-creator.js';
    import { writable } from 'svelte/store';

    import Flex from '../flex/flex.svelte';
    import Text from '../span/span.svelte';
    import IconButton from '../icon-button/icon-button.svelte';
    import RadioButton from 'carbon-icons-svelte/lib/RadioButton.svelte';
    import RadioButtonChecked from 'carbon-icons-svelte/lib/RadioButtonChecked.svelte';

    /**
     * @type {'inherit' | 'primary' | 'accent' | 'warning' | 'info' | 'success' | 'danger'}
     */
    export let color = 'inherit';

    /**
     * @type {'default' | 'extra-small' | 'small' | 'large' | 'extra-large'}
     */
    export let size = 'default';

    /**
     * @type {'row' | 'row-reverse'|'column' | 'column-reverse'}
     */
    export let direction = 'row';
    export let ref = undefined;
    export let items = [];
    export let activeItem = undefined;

    const activeItemStore = writable(undefined);
    const id = createUId();

    $activeItemStore = activeItem ? activeItem : items.find((i) => i.active === true);

    activeItemStore.subscribe((item) => {
        activeItem = item;
    });

    $: classes = [`qei-radio`, `color-${color}`, `size-${size}`, $$restProps.class].filter(Boolean).join(' ');

    const changeItem = (item) => {
        if (item.disabled) {
            return;
        }

        $activeItemStore = item;
    };
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
    <Flex {direction} gap={direction === 'row' ? 6 : 0}>
        {#each items as item}
            <div class="radio-item">
                <Flex
                    on:click={() => {
                        changeItem(item);
                    }}
                    justifyContent="start"
                    alignItems="center">
                    <IconButton
                        iconName={$activeItemStore === item ? RadioButtonChecked : RadioButton}
                        {color}
                        disabled={item.disabled}
                        {size} />
                    <Text {color} disabled={item.disabled} {size}>{item.text}</Text>
                </Flex>
            </div>
        {/each}
    </Flex>
</div>
