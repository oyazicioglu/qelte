<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import TabItem from '../../components/tab-view/tab-item.svelte';
	import TabView from '../../components/tab-view/tab-view.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Tab View</Title>
		<Divider />
	</Flex>
	<Flex gap="20" direction="column">
		<TabView disabled size="extra-small">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>
		<TabView size="small">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>
		<TabView>
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>
		<TabView size="large">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>
		<TabView size="extra-large">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>

		<TabView stretchHeads color="primary">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>

		<TabView stretchHeads type="flat" color="primary">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>

		<TabView type="stroked" rounded color="primary">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>

		<TabView color="accent">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>

		<TabView justifyContent="center" color="accent">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>

		<TabView justifyContent="flex-end" color="accent">
			<TabItem>Content 1</TabItem>
			<TabItem>Content 2</TabItem>
			<TabItem active>Content 3</TabItem>
			<TabItem>Content 4</TabItem>
			<TabItem>Content 5</TabItem>
			<TabItem>Content 6</TabItem>
		</TabView>
	</Flex>
</Flex>
