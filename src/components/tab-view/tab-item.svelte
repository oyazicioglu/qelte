<script lang="ts">
	import { createUId } from '../utils/uid-creator.js';
	import { getContext } from 'svelte';
	import { TabContext } from './tab-view.svelte';
	import type { ITabContext, ITabItem } from './tab-view.svelte';

	export let active = false;
	export let header = 'Tab Item';
	export let headerIcon: string = undefined;
	export let ref: HTMLElement = undefined;

	const { addTab, count, activeTabIndex } = getContext<ITabContext>(TabContext);
	const id = createUId();
	const index = count();
	let tabItem: ITabItem = { header, active, index, icon: headerIcon };

	addTab(tabItem);
</script>

<div {id} bind:this={ref} class="qei-tab-item">
	{#if $activeTabIndex === index}
		<slot />
	{/if}
</div>
