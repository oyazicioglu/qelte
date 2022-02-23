<script lang="ts">
	import { hideOnClickOutside } from '../utils/hideOnClickOutside';
	import { fade } from 'svelte/transition';
	import Flex from '../flex/flex.svelte';
	import Button from '../button/button.svelte';
	import type { BaseColor, BaseSize, ButtonType, FlexAlignItem, FlexDirection, FlexGap, FlexJustify } from '../types.js';
	import Span from '../span/span.svelte';
	import Paper from '../paper/paper.svelte';
	import { getContext, onMount } from 'svelte';
	import type { ISelectItem, SelectModel } from './SelectModel';
	import Icon from '../icon/icon.svelte';
	import { formContext, type IFormContext } from '../form/form.svelte';
	import type { IValidation, IValidationResult } from '../form/validations/IValidation';
	import { FormElement } from '../form/FormElement';
	import type { IFormElement } from '../form/IFormElement';
	import { ValidationDirective } from '../form/validations/ValidationDirective';
	import FlexItem from '../flex/flex-item.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import { RequiredValidation } from '../form/validations/RequiredValidation';

	export let size: BaseSize = 'default';
	export let rounded = false;
	export let ref: HTMLElement = undefined;
	export let label: string = 'Select';
	export let disabled = false;
	export let activeItem: ISelectItem = undefined;
	export let type: ButtonType = 'basic';
	export let paddingVertical = 0;
	export let paddingHorizontal = 0;
	export let gap: FlexGap = '0';
	export let alignItems: FlexAlignItem = 'stretch';
	export let justifyContent: FlexJustify = 'flex-start';
	export let direction: FlexDirection = 'column';
	export let color: BaseColor = 'default';
	export let selectModel: SelectModel;
	export let validationsResult: IValidationResult = undefined;
	export let valid = false;
	export let name = 'select';
	export let validations: IValidation[] = [];

	let element: IFormElement;
	let showErrors = false;
	let containerRef: HTMLElement = undefined;
	let showList = false;
	let loaded = false;

	const validationDirective = new ValidationDirective();
	validations = validationDirective.createValidationsFromProps($$restProps, ...validations, new RequiredValidation());

	const context = getContext<IFormContext>(formContext);

	if (type === 'stroked') {
		type = 'basic';
	}

	if (label && !name) {
		name = label;
	}

	const toggleList = () => {
		if (disabled) {
			return;
		}

		showList = !showList;
	};

	const onValidate = (e: CustomEvent) => {
		validationsResult = e.detail;
		valid = validationsResult.isValid;
		showErrors = !valid;

		if (context) {
			context.checkFormValidation();
		}
	};

	const changeItem = (item: ISelectItem) => {
		selectModel.setActiveItem(item);
		activeItem = selectModel.getAciveItem();
		updateValue();
	};

	const updateValue = () => {
		if (!element) {
			return;
		}

		element.setValue(activeItem.value);
		valid = element.isValid();

		validationDirective.validation(ref, { element, loaded });
	};

	onMount(async () => {
		activeItem = selectModel.getAciveItem();
		element = new FormElement(ref, 'select', name, activeItem.value, validations);

		if (context) {
			context.registerElement(element);
		}

		loaded = true;
	});

	$: containerMargin = containerRef ? ((containerRef.clientHeight + ref.clientHeight) / 2) * -1 : '2';
	$: classes = [`qei-select`, `size-${size}`, disabled && `disabled`, rounded && `rounded`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div
	bind:this={ref}
	{...$$restProps}
	class={classes}
	style={styles}
	on:blur={updateValue}
	on:validate={onValidate}
	use:validationDirective.validation={{ element, loaded }}
	transition:fade={{ duration: 200 }}
	class:has-selected={activeItem}
	use:hideOnClickOutside={() => {
		showList = false;
	}}>
	{#if activeItem && label}
		<Span color="secondary">{label}</Span>
	{/if}
	<Button {size} gap="2" {disabled} type="basic" {justifyContent} fullWidth on:click={toggleList}
		>{#if activeItem && activeItem.iconName}
			<Icon iconName={activeItem.iconName} />
		{/if}
		<Span>{activeItem ? activeItem.text : label}</Span>
	</Button>
	{#if showList}
		<div
			on:click={() => {
				showList = false;
			}}
			bind:this={containerRef}
			class="list-container"
			class:showList
			style={`margin-top:${containerMargin}px`}>
			<Paper
				color={type === 'flat' || type === 'raised' ? color : 'default'}
				hideOverflow
				{rounded}
				elevation={type === 'raised' ? '3' : '0'}
				class="pl-{paddingHorizontal} pr-{paddingHorizontal} pt-{paddingVertical} pb-{paddingVertical}">
				<Flex wrap="nowrap" {gap} {justifyContent} {alignItems} {direction}>
					{#each selectModel.getItems() as item}
						<Button
							on:click={() => {
								changeItem(item);
							}}
							gap="2"
							type={type === 'raised' ? 'flat' : type}
							{color}
							fullWidth
							{justifyContent}
							{size}
							active={item === activeItem}>
							{#if item.component}
								<svelte:component this={item.component} />
							{:else}
								{#if item.iconName}
									<Icon iconName={item.iconName} />
								{/if}
								<Span {size}>{item.text}</Span>
							{/if}
						</Button>
					{/each}
				</Flex>
			</Paper>
		</div>
	{/if}
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
