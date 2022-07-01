<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Title from '../../components/title/title.svelte';
	import IconButton from '../../components/icon-button/icon-button.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Icon Button</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex gap="4">
			<IconButton iconName="home" />
			<IconButton iconName="home" color="primary" />
			<IconButton iconName="home" color="accent" />
			<IconButton iconName="home" color="danger" />
			<IconButton iconName="home" color="info" />
			<IconButton iconName="home" color="success" />
			<IconButton iconName="home" color="warning" />
			<IconButton iconName="home" disabled />
		</Flex>
		<Flex gap="4">
			<IconButton iconName="home" type="flat" />
			<IconButton iconName="home" type="flat" color="primary" />
			<IconButton iconName="home" type="flat" color="accent" />
			<IconButton iconName="home" type="flat" color="danger" />
			<IconButton iconName="home" type="flat" color="info" />
			<IconButton iconName="home" type="flat" color="success" />
			<IconButton iconName="home" type="flat" color="warning" />
			<IconButton iconName="home" type="flat" disabled />
		</Flex>
		<Flex gap="4">
			<IconButton circle iconName="home" type="raised" />
			<IconButton circle iconName="home" type="raised" color="primary" />
			<IconButton circle iconName="home" type="raised" color="accent" />
			<IconButton circle iconName="home" type="raised" color="danger" />
			<IconButton circle iconName="home" type="raised" color="info" />
			<IconButton circle iconName="home" type="raised" color="success" />
			<IconButton circle iconName="home" type="raised" color="warning" />
			<IconButton circle iconName="home" type="raised" disabled />
		</Flex>
		<Flex gap="4">
			<IconButton iconName="home" type="stroked" />
			<IconButton iconName="home" type="stroked" color="primary" />
			<IconButton iconName="home" type="stroked" color="accent" />
			<IconButton iconName="home" type="stroked" color="danger" />
			<IconButton iconName="home" type="stroked" color="info" />
			<IconButton iconName="home" type="stroked" color="success" />
			<IconButton iconName="home" type="stroked" color="warning" />
			<IconButton iconName="home" type="stroked" disabled />
		</Flex>
		<Flex gap="4">
			<IconButton circle iconName="home" type="stroked" />
			<IconButton circle iconName="home" type="stroked" color="primary" />
			<IconButton circle iconName="home" type="stroked" color="accent" />
			<IconButton circle iconName="home" type="stroked" color="danger" />
			<IconButton circle iconName="home" type="stroked" color="info" />
			<IconButton circle iconName="home" type="stroked" color="success" />
			<IconButton circle iconName="home" type="stroked" color="warning" />
			<IconButton circle iconName="home" type="stroked" disabled />
		</Flex>

		<Flex gap="4" alignItems="baseline">
			<IconButton circle iconName="home" type="raised" size="extra-small" />
			<IconButton circle iconName="home" type="raised" size="small" />
			<IconButton circle iconName="home" type="raised" size="default" />
			<IconButton circle iconName="home" type="raised" size="large" />
			<IconButton circle iconName="home" type="raised" size="extra-large" />
		</Flex>
	</Flex>
</Flex>
