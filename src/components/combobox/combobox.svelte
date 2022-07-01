<script lang="ts">
	import { hideOnClickOutside } from '../utils/hideOnClickOutside';
	import Flex from '../flex/flex.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import TextInput from '../text-input/text-input.svelte';
	import type { BaseColor, BaseSize, ButtonType, FlexAlignItem, FlexDirection, FlexGap, FlexJustify } from '../types.js';
	import { onMount } from 'svelte';
	import Paper from '../paper/paper.svelte';
	import type { ComboModel, IComboItem } from './ComboModel';
	import Span from '../span/span.svelte';
	import Button from '../button/button.svelte';
	import Icon from '../icon/icon.svelte';
	import { createUId } from '../utils/uid-creator';
	import type { IValidation } from '../form/validations/IValidation';

	export let size: BaseSize = 'default';
	export let type: ButtonType = 'basic';
	export let color: BaseColor = 'default';
	export let rounded = false;
	export let ref: HTMLElement = undefined;
	export let gap: FlexGap = '0';
	export let label = '';
	export let disabled = false;
	export let validations: IValidation[] = [];
	export let hint = '';
	export let activeItem: IComboItem = undefined;
	export let justifyContent: FlexJustify = 'flex-start';
	export let alignItems: FlexAlignItem = 'stretch';
	export let paddingVertical: FlexGap = '0';
	export let paddingHorizontal: FlexGap = '0';
	export let hasShadow = true;
	export let comboModel: ComboModel;
	export let direction: FlexDirection = 'column';

	let showList = false;

	const id = createUId();

	const toggleShowList = () => {
		showList = !showList;
	};

	const changeItem = (item: IComboItem) => {
		comboModel.setActiveItem(item);
		activeItem = comboModel.getAciveItem();
	};

	onMount(async () => {
		activeItem = comboModel.getAciveItem();
	});

	$: classes = [`qei-combobox`, `size-${size}`, disabled && `disabled`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div
	use:hideOnClickOutside={() => {
		showList = false;
	}}
	{id}
	bind:this={ref}
	{...$$restProps}
	class={classes}
	class:has-selected={activeItem}
	style={styles}>
	<Flex {gap} direction="column">
		<TextInput
			{hint}
			{validations}
			fullWidth
			{disabled}
			{rounded}
			{size}
			value={activeItem ? activeItem.text : ''}
			on:focus={() => {
				showList = true;
			}}
			{label}>
			<IconButton on:click={toggleShowList} {disabled} {size} {color} iconName={showList ? 'angle-up' : 'angle-down'} />
		</TextInput>
	</Flex>
	{#if showList}
		<div
			on:click={() => {
				showList = false;
			}}
			class="list-container"
			class:showList
			style={`margin-top:4px`}>
			<Paper
				color={type === 'flat' || type === 'raised' ? color : 'default'}
				hideOverflow
				{rounded}
				elevation={hasShadow ? '3' : '0'}
				class="pl-{paddingHorizontal} pr-{paddingHorizontal} pt-{paddingVertical} pb-{paddingVertical}">
				<Flex wrap="nowrap" {gap} {justifyContent} {alignItems} {direction}>
					{#each comboModel.getItems() as item}
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
								<Span {size}>{item.text ? item.text : item.value}</Span>
							{/if}
						</Button>
					{/each}
				</Flex>
			</Paper>
		</div>
	{/if}
</div>
