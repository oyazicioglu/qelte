<script lang="ts">
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import { SelectModel, type ISelectItem } from '../../components/select/SelectModel';
	import Select from '../../components/select/select.svelte';
	import Title from '../../components/title/title.svelte';
	import { createUId } from '../../components/utils/uid-creator';
	import Span from '../../components/span/span.svelte';

	const selectModel = new SelectModel([
		{ active: false, id: createUId(), text: 'Item 1', value: 'Item 1 Value', iconName: 'bell' },
		{ active: false, id: createUId(), text: 'Item 2', value: 'Item 2 Value', iconName: 'bell' },
		{ active: true, id: createUId(), text: 'Item 3', value: 'Item 3 Value', iconName: 'home' },
		{ active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', iconName: 'home' },
	]);

	let activeItem1: ISelectItem;
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Select</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="row" alignItems="flex-start">
		<Select {selectModel} bind:activeItem={activeItem1} />
		<Select disabled {selectModel} bind:activeItem={activeItem1} />
	</Flex>
	<Span color="secondary">{activeItem1 ? activeItem1.value : ''}</Span>
</Flex>
