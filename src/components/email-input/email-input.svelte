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
    import { EmailValidation } from '../form/validations/EmailValidation.js';
    import { FormElement } from '../form/FormElement.js';
    import { ValidationDirective } from '../form/validations/ValidationDirective.js';
    import type { IFormElement } from '../form/IFormElement.js';
    import type { IValidationResult } from '../form/validations/IValidation.js';
    import Close from 'carbon-icons-svelte/lib/Close.svelte';

    export let size: BaseSize = 'default';
    export let rounded = false;
    export let disabled = false;
    export let fullWidth = false;
    export let placeholder = ' ';
    export let label: string = undefined;
    export let useLabel = true;
    export let name = 'email-input';
    export let value: string = undefined;
    export let hint: string = undefined;
    export let readonly = false;
    export let hasBackground = true;
    export let preIcon: any = undefined;
    export let postIcon: any = undefined;
    export let valid = false;
    export let ref: HTMLElement = undefined;
    export let validations = [];
    export let validationsResult: IValidationResult = undefined;

    let loaded = false;
    let showErrors = false;
    let input: HTMLInputElement = undefined;
    let labelLeftPosition = 0;
    let element: IFormElement;

    const validationDirective = new ValidationDirective();
    validations = validationDirective.createValidationsFromProps($$restProps, ...validations, new EmailValidation());

    const context = getContext<IFormContext>(formContext);
    const id = createUId();
    const isRequired = $$restProps['required'];

    const onValidate = (e: CustomEvent) => {
        validationsResult = e.detail;
        valid = validationsResult.isValid;
        showErrors = !valid;

        if (context) {
            context.checkFormValidation();
        }
    };

    $: classes = [`qei-email-input`, disabled && `disabled`, hasBackground && `has-background`, `size-${size}`, $$restProps.class]
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
    <Flex class="input-container" direction="row" justifyContent="space-between" alignItems="center" style="height:100%;">
        {#if isRequired}
            <div class="required-dot" />
        {/if}
        {#if preIcon}
            <Icon style="margin-left:4px" icon={preIcon} {size} color="secondary" />
        {/if}
        <input
            {...$$restProps}
            size="10"
            style="flex-grow: 1;"
            bind:this={input}
            use:validationDirective.validation={{ element, loaded }}
            {name}
            type="email"
            {disabled}
            bind:value
            on:input={updateValue}
            on:blur={updateValue}
            on:validate={onValidate}
            {placeholder} />

        <div class="bottom-line" />

        {#if postIcon}
            <Icon style="margin-right:4px" icon={postIcon} {size} color="secondary" />
        {/if}

        {#if label && useLabel}
            <span style={`margin-left: ${labelLeftPosition}px;`} class="label">{label}</span>
        {/if}

        {#if hint && hint.length > 0}
            <span class="hint">{hint}</span>
        {/if}
    </Flex>

    {#if validationsResult && !validationsResult.isValid && showErrors}
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
