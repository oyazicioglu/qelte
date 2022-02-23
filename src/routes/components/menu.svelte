<script lang="ts">
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import { ListModel, type IListItem } from '../../components/list/ListModel';
	import Menu from '../../components/menu/menu.svelte';
	import Span from '../../components/span/span.svelte';
	import Title from '../../components/title/title.svelte';
	import { createUId } from '../../components/utils/uid-creator.js';

	const listModel = new ListModel([
		{ active: false, id: createUId(), value: 'Item 1 Value', text: 'Item 1', iconName: 'user' },
		{ active: false, id: createUId(), text: 'Item 2', value: 'Item 2 Value', iconName: 'bell' },
		{ active: true, id: createUId(), text: 'Item 3', value: 'Item 3 Value', iconName: 'home' },
		{ active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', iconName: 'cog' },
	]);

	let activeItem: IListItem;
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Dropdown Menu</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column" alignItems="flex-start">
		<Flex direction="row" gap="5">
			<Menu bind:activeItem text="Menu 1" {listModel} menuIcon="user" />
			<Menu bind:activeItem text="Menu 1" type="flat" {listModel} menuIcon="bell" />
			<Menu bind:activeItem text="Menu 1" type="raised" {listModel} menuIcon="home" />
			<Menu bind:activeItem text="Menu 1" type="stroked" {listModel} menuIcon="cog" />
		</Flex>
		<Flex direction="row" gap="5">
			<Menu color="accent" bind:activeItem text="Menu 1" {listModel} menuIcon="user" />
			<Menu color="accent" bind:activeItem text="Menu 1" type="flat" {listModel} menuIcon="user" />
			<Menu color="accent" bind:activeItem text="Menu 1" type="raised" {listModel} menuIcon="user" />
			<Menu color="accent" bind:activeItem text="Menu 1" type="stroked" {listModel} menuIcon="user" />
		</Flex>
		<Flex direction="row" gap="5">
			<Menu circledIcon bind:activeItem {listModel} menuIcon="user" />
			<Menu circledIcon bind:activeItem type="flat" {listModel} menuIcon="user" />
			<Menu circledIcon bind:activeItem type="raised" {listModel} menuIcon="user" />
			<Menu circledIcon bind:activeItem type="stroked" {listModel} menuIcon="user" />

			<Menu color="primary" bind:activeItem {listModel} menuIcon="user" />
			<Menu color="primary" bind:activeItem type="flat" {listModel} menuIcon="user" />
			<Menu color="primary" bind:activeItem type="raised" {listModel} menuIcon="user" />
			<Menu color="primary" bind:activeItem type="stroked" {listModel} menuIcon="user" />
		</Flex>
		<Flex direction="row" gap="5">
			<Menu bind:activeItem type="flat" text="Bottom-Left Align" position="bottom-left" {listModel} menuIcon="user" />
			<Menu bind:activeItem type="flat" text="Bottom-Right Align" position="bottom-right" {listModel} menuIcon="user" />
			<Menu bind:activeItem type="flat" text="Top-Left Align" position="top-left" {listModel} menuIcon="user" />
			<Menu bind:activeItem type="flat" text="Top-Right Align" position="top-right" {listModel} menuIcon="user" />
		</Flex>
	</Flex>
	<Span>Selected: {activeItem && activeItem.value}</Span>
</Flex>
