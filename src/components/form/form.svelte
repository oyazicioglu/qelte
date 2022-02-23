<script context="module" lang="ts">
	import { slide } from 'svelte/transition';
	import { createUId } from '../utils/uid-creator.js';

	export const formContext = { id: createUId() };
	export interface IFormContext {
		registerElement(element: IFormElement): void;
		checkFormValidation(): void;
	}
</script>

<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { Form, type FormDataObject } from './Form.js';
	import type { IFormElement } from './IFormElement.js';
	import Flex from '../flex/flex.svelte';
	import type { FlexAlignItem, FlexDirection, FlexGap, FlexJustify } from '../types.js';

	export let disabled = false;
	export let ref = undefined;
	export let formError = undefined;
	export let valid = false;
	export let formData: FormDataObject[] = undefined;
	export let direction: FlexDirection = 'column';
	export let justifyContent: FlexJustify = 'flex-start';
	export let alignItems: FlexAlignItem = 'stretch';
	export let gap: FlexGap = '6';

	const id = createUId();
	const form = new Form();

	const registerElement = (element: IFormElement) => {
		form.registerElement(element);
	};

	const checkFormValidation = () => {
		valid = form.isValid();
		refreshFormData();
	};

	onMount(async () => {
		refreshFormData();
	});

	const refreshFormData = () => {
		formData = form.getFormData();
	};

	setContext<IFormContext>(formContext, { registerElement, checkFormValidation });

	$: classes = [`qei-form`, disabled && `disabled`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} class={classes} style={$$restProps.style}>
	<form on:submit on:submit|preventDefault={form.validateAll}>
		<Flex {direction} {gap} {justifyContent} {alignItems}>
			<slot />
		</Flex>
	</form>
	{#if formError}
		<div transition:slide class="validation-container mt-10 p-6">
			<p class="validation-error">{`${formError.errorNo} : ${formError.message}`}</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.qei-form {
		width: 100%;
		position: relative;
	}
	.validation-container {
		font-size: 0.85em;
		position: relative;
		z-index: 2;
		border-left: 2px solid rgb(190, 48, 79);
	}

	.validation-error {
		white-space: nowrap;
		color: rgb(218, 39, 77);
	}
</style>
