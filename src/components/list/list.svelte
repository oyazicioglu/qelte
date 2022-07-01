<script lang="ts">
	import { onMount } from 'svelte';
	import type { BaseColor, BaseSize, ButtonType, FlexAlignItem, FlexDirection, FlexGap, FlexJustify } from '../types.js';
	import type { IListItem, IListModel } from './ListModel.js';
	import Paper from '../paper/paper.svelte';
	import Flex from '../flex/flex.svelte';
	import Button from '../button/button.svelte';
	import Icon from '../icon/icon.svelte';
	import Span from '../span/span.svelte';

	export let color: BaseColor = 'default';
	export let direction: FlexDirection = 'column';
	export let size: BaseSize = 'default';
	export let type: ButtonType = 'basic';
	export let alignItems: FlexAlignItem = 'stretch';
	export let justifyContent: FlexJustify = 'flex-start';
	export let rounded = false;
	export let disabled = false;
	export let gap: FlexGap = '0';
	export let ref: HTMLElement = undefined;
	export let paddingVertical: FlexGap = '0';
	export let paddingHorizontal: FlexGap = '0';
	export let hideOverflow = true;
	export let activeItem: IListItem = undefined;
	export let listModel: IListModel;

	if (type === 'stroked') {
		type = 'basic';
	}

	const changeItem = (item: IListItem) => {
		listModel.setActiveItem(item);
		activeItem = listModel.getAciveItem();
	};

	onMount(async () => {
		activeItem = listModel.getAciveItem();
	});

	$: classes = [`qei-list`, !disabled && `color-${color}`, `type-${type}`, `size-${size}`, rounded && `rounded`, $$restProps.class]
		.filter(Boolean)
		.join(' ');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<Paper
		color={type === 'flat' || type === 'raised' ? color : 'default'}
		{hideOverflow}
		{rounded}
		elevation={type === 'raised' ? '3' : '0'}
		class="pl-{paddingHorizontal} pr-{paddingHorizontal} pt-{paddingVertical} pb-{paddingVertical}">
		<Flex wrap="nowrap" {gap} {justifyContent} {alignItems} {direction}>
			{#each listModel.getItems() as item}
				<Button
					on:click={() => {
						changeItem(item);
					}}
					gap="2"
					type={type === 'raised' ? 'flat' : type}
					{color}
					fullWidth
					{justifyContent}
					active={item === activeItem}>
					{#if item.component}
						<svelte:component this={item.component} />
					{:else}
						{#if item.iconName}
							<Icon iconName={item.iconName} />
						{/if}
						<Span>{item.text ? item.text : item.value}</Span>
					{/if}
				</Button>
			{/each}
		</Flex>
	</Paper>
</div>
