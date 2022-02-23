<script lang="ts">
	import Combobox from '../../components/combobox/combobox.svelte';
	import { ComboModel, type IComboItem } from '../../components/combobox/ComboModel.js';
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Span from '../../components/span/span.svelte';
	import Title from '../../components/title/title.svelte';
	import { createUId } from '../../components/utils/uid-creator.js';

	const comboModel = new ComboModel([
		{ active: false, id: createUId(), text: 'Item 1', value: 'Item 1 Value', iconName: 'bell' },
		{ active: false, id: createUId(), text: 'Item 2', value: 'Item 2 Value', iconName: 'bell' },
		{ active: true, id: createUId(), text: 'Item 3', value: 'Item 3 Value', iconName: 'home' },
		{ active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', iconName: 'home' },
	]);

	let activeItem: IComboItem;
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Combobox</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column" alignItems="flex-start">
		<Flex direction="row" gap="5">
			<Combobox bind:activeItem {comboModel} label="Combobox" />
			<Combobox bind:activeItem {comboModel} color="primary" label="Combobox" />
			<Combobox bind:activeItem {comboModel} disabled label="Combobox" />
		</Flex>
	</Flex>
	<Span>Selected: {activeItem && activeItem.value}</Span>
</Flex>
