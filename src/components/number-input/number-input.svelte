<script lang="ts">
    import { createUId } from '../utils/uid-creator.js';
    import { fade } from 'svelte/transition';
    import { formContext, type IFormContext } from '../form/form.svelte';
    import { getContext, onMount } from 'svelte';
    import Flex from '../flex/flex.svelte';
    import FlexItem from '../flex/flex-item.svelte';
    import IconButton from '../icon-button/icon-button.svelte';
    import Icon from '../icon/icon.svelte';
    import type { BaseSize } from '../types.js';
    import type { IValidation, IValidationResult } from '../form/validations/IValidation.js';
    import { ValidationDirective } from '../form/validations/ValidationDirective.js';
    import { FormElement } from '../form/FormElement.js';
    import type { IFormElement } from '../form/IFormElement.js';
    import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
    import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte';
    import CloseSvelte from 'carbon-icons-svelte/lib/Close.svelte';

    export let size: BaseSize = 'default';
    export let rounded = false;
    export let disabled = false;
    export let ref = undefined;
    export let fullWidth = false;
    export let placeholder = ' ';
    export let label: string = undefined;
    export let name: string = undefined;
    export let value: number = 0;
    export let hint: string = undefined;
    export let readonly = false;
    export let validations: IValidation[] = [];
    export let hasBackground = true;
    export let preIcon: any = undefined;
    export let postIcon: any = undefined;
    export let valid = false;
    export let validationsResult: IValidationResult = undefined;

    let min = 0;
    let max = 100;
    let showErrors = false;
    let loaded = false;
    let labelLeftPosition = 0;
    let input: HTMLInputElement = undefined;
    let element: IFormElement;
    let minDisabled = false;
    let maxDisabled = false;

    const validationDirective = new ValidationDirective();
    validations = validationDirective.createValidationsFromProps($$restProps, ...validations);

    const context = getContext<IFormContext>(formContext);
    const id = createUId();

    const onValidate = (e: CustomEvent) => {
        validationsResult = e.detail;
        valid = validationsResult.isValid;
        showErrors = !valid;

        if (context) {
            context.checkFormValidation();
        }
    };

    const increseValue = () => {
        if (value < max) {
            value++;
        }
        updateValue();
    };

    const decreseValue = () => {
        if (value > min) {
            value--;
        }
        updateValue();
    };

    $: if (label) {
        placeholder = '';
    }

    $: classes = [`qei-number-input`, disabled && `disabled`, hasBackground && `has-background`, `size-${size}`, $$restProps.class]
        .filter(Boolean)
        .join(' ');

    if (label && !placeholder) {
        placeholder = label;
    }

    if (label && !name) {
        name = label;
    }

    onMount(async () => {
        element = new FormElement(input, 'email', name, value, validations);

        if (context) {
            context.registerElement(element);
        }

        if ($$restProps.min) {
            min = parseInt($$restProps.min);
        }

        if ($$restProps.max) {
            max = parseInt($$restProps.max);
        }

        if (value < min) {
            value = min;
        }

        if (value > max) {
            value = max;
        }
        refreshButtonsState();

        loaded = true;
    });

    $: if (input) {
        labelLeftPosition = input.offsetLeft;
    }

    const refreshButtonsState = () => {
        minDisabled = value <= min;
        maxDisabled = value >= max;
    };

    const updateValue = () => {
        if (!element) {
            return;
        }

        refreshButtonsState();

        element.setValue(value);
        valid = element.isValid();

        validationDirective.validation(input, { element, loaded });
    };
</script>

<div
    {id}
    bind:this={ref}
    class={classes}
    class:invalid={validationsResult && !validationsResult.isValid}
    class:rounded
    class:readonly
    class:fullWidth
    style={$$restProps.style}>
    <Flex class="input-container" direction="row" justifyContent="space-between" alignItems="center" style="height:100%">
        {#if preIcon}
            <Icon class="colorable-icons" style="margin-left:4px" icon={preIcon} {size} color="secondary" />
        {/if}

        <input
            style="flex-grow: 1;"
            size="10"
            {...$$restProps}
            bind:this={input}
            use:validationDirective.validation={{ element, loaded }}
            {name}
            type="number"
            {disabled}
            bind:value
            on:input={updateValue}
            on:blur={updateValue}
            on:validate={onValidate}
            {placeholder} />
        <div class="bottom-line" />

        {#if postIcon}
            <Icon class="colorable-icons" style="margin-right:4px" icon={postIcon} {size} color="secondary" />
        {/if}

        <Flex direction="row" justifyContent="end" alignItems="center" gap="0">
            <IconButton
                disabled={disabled || minDisabled}
                color="default"
                on:click={decreseValue}
                class="colorable-icons"
                {size}
                icon={ChevronDown} />
            <IconButton
                disabled={disabled || maxDisabled}
                color="default"
                on:click={increseValue}
                class="colorable-icons"
                {size}
                icon={ChevronUp} />
        </Flex>

        {#if label}
            <span style={`margin-left: ${labelLeftPosition}px;`} class="label">{label}</span>
        {/if}

        {#if hint}
            <span class="hint">{hint}</span>
        {/if}
        <slot />
        <div class="bottom-line" />
    </Flex>

    {#if validationsResult && !validationsResult.isValid && showErrors}
        <div transition:fade class="validation-container" style="position: absolute; right:0; top:{ref.clientHeight + 2}px">
            <Flex direction="column" justifyContent="flex-end">
                <FlexItem alignSelf="flex-end">
                    <IconButton on:click={() => (showErrors = false)} icon={CloseSvelte} size="small" />
                </FlexItem>
                <div class="validation-errors">
                    <ul>
                        {#each validationsResult.errors as error}
                            <li class="validation-error">{error.message}</li>
                        {/each}
                    </ul>
                </div>
            </Flex>
        </div>
    {/if}
</div>
