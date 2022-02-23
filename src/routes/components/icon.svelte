<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Icon from '../../components/icon/icon.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Icon</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex gap="5">
			<Icon iconName="bell" />
			<Icon iconName="bell" color="inherit" />
			<Icon iconName="bell" color="primary" />
			<Icon iconName="bell" color="accent" />
			<Icon iconName="bell" color="danger" />
			<Icon iconName="bell" color="info" />
			<Icon iconName="bell" color="success" />
			<Icon iconName="bell" color="warning" />
		</Flex>

		<Flex gap="5" alignItems="baseline">
			<Icon iconName="bell" size="extra-small" />
			<Icon iconName="bell" size="small" />
			<Icon iconName="bell" size="default" />
			<Icon iconName="bell" size="large" />
			<Icon iconName="bell" size="extra-large" />
		</Flex>
	</Flex>
</Flex>
