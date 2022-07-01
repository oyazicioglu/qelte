<script lang="ts">
	import { createUId } from '../utils/uid-creator.js';
	import { formContext } from '../form/form.svelte';
	import type { IFormContext } from '../form/form.svelte';
	import { getContext, onMount } from 'svelte';
	import Flex from '../flex/flex.svelte';
	import type { BaseColor, BaseSize } from '../types.js';
	import Span from '../span/span.svelte';
	import Icon from '../icon/icon.svelte';
	import type { IValidation, IValidationResult } from '../form/validations/IValidation.js';
	import type { IFormElement } from '../form/IFormElement.js';
	import { ValidationDirective } from '../form/validations/ValidationDirective.js';
	import { FormElement } from '../form/FormElement.js';
	import { fade } from 'svelte/transition';
	import FlexItem from '../flex/flex-item.svelte';
	import IconButton from '../icon-button/icon-button.svelte';

	export let color: BaseColor = 'default';
	export let size: BaseSize = 'default';
	export let disabled = false;
	export let ref: HTMLElement = undefined;
	export let chekced = false;
	export let name: string = 'checkbox';
	export let validationsResult: IValidationResult = undefined;
	export let valid = false;
	export let validations: IValidation[] = [];
	export let text: string;

	let loaded = false;
	let showErrors = false;
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

	const toggleCheck = () => {
		if (disabled) {
			return;
		}

		chekced = !chekced;
		updateValue();
	};

	const updateValue = () => {
		if (!element) {
			return;
		}

		element.setValue(chekced);
		valid = element.isValid();

		validationDirective.validation(ref, { element, loaded });
	};

	onMount(async () => {
		element = new FormElement(ref, 'checkbox', name, chekced, validations);

		if (context) {
			context.registerElement(element);
		}

		loaded = true;
	});

	$: iconName = chekced ? 'check-circle' : 'circle';

	$: classes = [`qei-chekcbox`, !disabled && `color-${color}`, disabled && `disabled`, `size-${size}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');
</script>

<div
	{id}
	bind:this={ref}
	on:click={toggleCheck}
	on:input={updateValue}
	on:blur={updateValue}
	on:validate={onValidate}
	on:click
	{...$$restProps}
	class={classes}
	style={$$restProps.style}>
	<Flex direction="row" justifyContent="start" alignItems="baseline" gap="2">
		<Icon {iconName} {color} {disabled} {size} />
		{#if text}
			<Span {color} {disabled} {size}>{text}</Span>
		{/if}
	</Flex>

	{#if validationsResult && !validationsResult.isValid && validationsResult.errors.length > 0 && showErrors}
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
