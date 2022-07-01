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
	import type { IFormElement } from '../form/IFormElement.js';
	import { ValidationDirective } from '../form/validations/ValidationDirective.js';
	import { FormElement } from '../form/FormElement.js';
	import type { IValidation, IValidationResult } from '../form/validations/IValidation.js';

	export let size: BaseSize = 'default';
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
	export let preIcon = undefined;
	export let postIcon = undefined;
	export let valid = false;
	export let isPasswordVisible = false;
	export let validationsResult: IValidationResult = undefined;

	let loaded = false;
	let showErrors = false;
	let input: HTMLInputElement = undefined;
	let labelLeftPosition = 0;
	let element: IFormElement;

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

	$: classes = [`qei-password-input`, disabled && `disabled`, hasBackground && `has-background`, `size-${size}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	if (label && !placeholder) {
		placeholder = label;
	}

	if (label && !name) {
		name = label;
	}

	const togglePasswordVisibility = () => {
		isPasswordVisible = !isPasswordVisible;
	};

	onMount(async () => {
		element = new FormElement(input, 'email', name, value, validations, loaded);

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
	{...$$restProps}
	class={classes}
	class:invalid={validationsResult && !validationsResult.isValid}
	class:rounded
	class:readonly
	class:fullWidth
	class:password-visible={isPasswordVisible}
	style={$$restProps.style}>
	<Flex class="input-container" direction="row" justifyContent="start" alignItems="center" style="height:100%">
		{#if preIcon}
			<Icon class="colorable-icons" style="margin-left:4px" iconName={preIcon} {size} color="secondary" />
		{/if}

		{#if isPasswordVisible}
			<input
				size="10"
				style="flex-grow: 1;"
				bind:this={input}
				use:validationDirective.validation={{ element, loaded }}
				{name}
				type="text"
				{disabled}
				bind:value
				on:validate={onValidate}
				on:input={updateValue}
				on:blur={updateValue}
				{placeholder} />
		{:else}
			<input
				size="10"
				style="flex-grow: 1;"
				bind:this={input}
				use:validationDirective.validation={{ element, loaded }}
				{name}
				type="password"
				{disabled}
				bind:value
				on:validate={onValidate}
				on:input={updateValue}
				on:blur={updateValue}
				{placeholder} />
		{/if}

		<div class="bottom-line" />

		{#if postIcon}
			<Icon style="margin-right:4px" iconName={postIcon} {size} color="secondary" />
		{/if}

		<IconButton
			class="colorable-icons"
			on:click={togglePasswordVisibility}
			{size}
			{disabled}
			color="default"
			iconName={isPasswordVisible ? 'eye-slash' : 'eye'} />

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
					<IconButton on:click={() => (showErrors = false)} iconName="close" size="small" />
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
