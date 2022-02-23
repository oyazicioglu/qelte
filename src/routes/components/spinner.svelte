<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Spinner from '../../components/spinner/spinner.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Spinner</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column" alignItems="flex-start">
		<Flex direction="row" gap="5">
			<Spinner color="default" />
			<Spinner color="primary" />
			<Spinner color="accent" />
		</Flex>
		<Flex direction="row" gap="5" alignItems="center">
			<Spinner size="extra-small" />
			<Spinner size="small" />
			<Spinner />
			<Spinner size="large" />
			<Spinner size="extra-large" />
		</Flex>
	</Flex>
</Flex>
