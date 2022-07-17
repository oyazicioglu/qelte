<script lang="ts">
    import { createUId } from '../utils/uid-creator.js';
    import { fade } from 'svelte/transition';
    import { formContext, type IFormContext } from '../form/form.svelte';
    import { getContext, onMount, SvelteComponent } from 'svelte';
    import Flex from '../flex/flex.svelte';
    import FlexItem from '../flex/flex-item.svelte';
    import IconButton from '../icon-button/icon-button.svelte';
    import Icon from '../icon/icon.svelte';
    import type { BaseColor, BaseSize, IconSize } from '../types.js';
    import type { IValidation, IValidationResult } from '../form/validations/IValidation.js';
    import type { IFormElement } from '../form/IFormElement.js';
    import { ValidationDirective } from '../form/validations/ValidationDirective.js';
    import { FormElement } from '../form/FormElement.js';
    import Close from 'carbon-icons-svelte/lib/Close.svelte';
    import Span from '../span/span.svelte';

    export let size: BaseSize = 'default';
    export let color: BaseColor = 'inherit';
    export let rounded = false;
    export let disabled = false;
    export let ref = undefined;
    export let fullWidth = false;
    export let placeholder = ' ';
    export let label: string = undefined;
    export let name: string = undefined;
    export let value: string = undefined;
    export let hint: string = undefined;
    export let readonly = false;
    export let validations: IValidation[] = [];
    export let hasBackground = true;
    export let preIcon: any = undefined;
    export let postIcon: any = undefined;
    export let valid = false;
    export let validationsResult: IValidationResult = undefined;

    let loaded = false;
    let showErrors = false;
    let input: HTMLInputElement = undefined;
    let labelLeftPosition = 0;
    let element: IFormElement;

    const validationDirective = new ValidationDirective();
    validations = validationDirective.createValidationsFromProps($$restProps, ...validations);

    const isRequired = $$restProps['required'];
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

    $: if (label) {
        placeholder = '';
    }

    $: classes = [
        `qei-text-input`,
        disabled && `disabled`,
        `color-${color}`,
        hasBackground && `has-background`,
        `size-${size}`,
        $$restProps.class,
    ]
        .filter(Boolean)
        .join(' ');

    if (label && !placeholder) {
        placeholder = label;
    }

    if (label && !name) {
        name = label;
    }

    onMount(async () => {
        element = new FormElement(input, 'text', name, value, validations);

        if (context) {
            context.registerElement(element);
        }

        loaded = true;
    });

    $: if (input) {
        labelLeftPosition = input.offsetLeft;
    }

    const updateValue = () => {
        if (!element) {
            return;
        }

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
    <Flex class="input-container" direction="row" style="height:100%" alignItems="center">
        {#if isRequired}
            <div class="required-dot" />
        {/if}
        {#if preIcon}
            <Icon style="margin-left:4px" icon={preIcon} {size} {color} />
        {/if}
        <input
            {...$$restProps}
            size="10"
            style="flex-grow: 1;"
            bind:this={input}
            use:validationDirective.validation={{ element, loaded }}
            {name}
            type="text"
            {disabled}
            bind:value
            on:input={updateValue}
            on:blur={updateValue}
            on:validate={onValidate}
            on:click
            on:focus
            {placeholder} />

        {#if postIcon}
            <Icon style="margin-right:4px" icon={postIcon} {size} {color} />
        {/if}

        {#if label}
            <Span style={`margin-left: ${labelLeftPosition}px;`} class="label">{label}</Span>
        {/if}

        {#if hint}
            <Span color="secondary" class="hint">{hint}</Span>
        {/if}
        <slot />
        <div class="bottom-line" />
    </Flex>

    {#if validationsResult && !validationsResult.isValid && validationsResult.errors.length > 0 && showErrors}
        <div transition:fade class="validation-container" style="position: absolute; right:0; top:{ref.clientHeight + 2}px">
            <Flex direction="column" justifyContent="flex-end">
                <FlexItem alignSelf="flex-end">
                    <IconButton circle on:click={() => (showErrors = false)} icon={Close} size="small" />
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
