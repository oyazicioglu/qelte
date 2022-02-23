<script lang="ts">
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import List from '../../components/list/list.svelte';
	import { ListModel, type IListItem } from '../../components/list/ListModel';
	import Span from '../../components/span/span.svelte';
	import Title from '../../components/title/title.svelte';
	import { createUId } from '../../components/utils/uid-creator';

	let activeItem1: IListItem;
	const listModel = new ListModel([
		{ active: false, id: createUId(), text: 'Item 1', value: 'Item 1 Value', iconName: 'bell' },
		{ active: false, id: createUId(), text: 'Item 2', value: 'Item 2 Value', iconName: 'bell' },
		{ active: true, id: createUId(), text: 'Item 3', value: 'Item 3 Value', iconName: 'home' },
		{ active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', iconName: 'home' },
	]);
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>List</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="row" alignItems="flex-start">
		<Flex direction="row" wrap="wrap" gap="5">
			<List {listModel} bind:activeItem={activeItem1} />

			<List {listModel} bind:activeItem={activeItem1} rounded />

			<List {listModel} bind:activeItem={activeItem1} rounded />

			<List {listModel} bind:activeItem={activeItem1} rounded type="raised" />

			<List {listModel} bind:activeItem={activeItem1} rounded color="primary" />

			<List {listModel} bind:activeItem={activeItem1} rounded color="accent" />

			<List {listModel} bind:activeItem={activeItem1} rounded type="flat" color="accent" />

			<List {listModel} bind:activeItem={activeItem1} rounded type="flat" color="success" />
		</Flex>
	</Flex>
	<Span>Selected: {activeItem1 && activeItem1.value}</Span>
</Flex>
