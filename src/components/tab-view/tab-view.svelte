<script context="module" lang="ts">
	export const TabContext = {};

	export interface ITabContext {
		addTab(tab: ITabItem): void;
		count(): number;
		activeTabIndex: Writable<number>;
		size: BaseSize;
	}

	export interface ITabItem {
		icon: string;
		header: string;
		active: boolean;
		index: number;
	}
</script>

<script lang="ts">
	import { createUId } from '../utils/uid-creator.js';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import Divider from '../divider/divider.svelte';
	import Icon from '../icon/icon.svelte';
	import Flex from '../flex/flex.svelte';
	import FlexItem from '../flex/flex-item.svelte';
	import Button from '../button/button.svelte';
	import type { BaseColor, BaseSize, ButtonType, FlexJustify } from '../types.js';
	import Span from '../span/span.svelte';

	export let color: BaseColor = 'default';
	export let size: BaseSize = 'default';
	export let type: ButtonType = 'basic';
	export let justifyContent: FlexJustify = 'flex-start';

	export let rounded = false;
	export let disabled = false;
	export let stretchHeads = false;
	export let ref: HTMLElement = undefined;
	const tabs = writable<ITabItem[]>([]);
	const id = createUId();

	const activeTabIndex = writable<number>(undefined);

	const addTab = (tab: ITabItem) => {
		tabs.update((current) => {
			return [...current, tab];
		});
	};

	const count = () => {
		return $tabs.length;
	};

	$: classes = [
		`qei-tab`,
		`color-${color}`,
		rounded && `rounded`,
		disabled && `disabled`,
		`size-${size}`,
		`type-${type}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	setContext<ITabContext>(TabContext, { addTab, count, activeTabIndex, size });

	onMount(async () => {
		const activeTab = $tabs.find((i) => i.active === true);
		if (activeTab) {
			$activeTabIndex = activeTab.index;
		}
	});
</script>

<div {id} bind:this={ref} class={classes} {...$$restProps} style={$$restProps.style}>
	<Flex direction="column" alignItems="stretch" gap="4">
		<FlexItem class="headers">
			<Flex direction="row" {justifyContent} alignItems="stretch">
				{#each $tabs as tab (tab.index)}
					<FlexItem grow={stretchHeads ? 1 : 'auto'}>
						<Button
							fullWidth
							on:click={() => {
								$activeTabIndex = tab.index;
							}}
							active={$activeTabIndex === tab.index}
							type={$activeTabIndex === tab.index && color !== 'default' ? 'flat' : type}
							{color}
							{disabled}
							{size}>
							{#if tab.icon}
								<Icon {size} iconName={tab.icon} />
							{/if}
							<Span {size}>{tab.header}</Span>
						</Button>
					</FlexItem>
				{/each}
			</Flex>
			<Divider />
		</FlexItem>
		<FlexItem grow={1} class="tab-content">
			<slot />
		</FlexItem>
	</Flex>
</div>
