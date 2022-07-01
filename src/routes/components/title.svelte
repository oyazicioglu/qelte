<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Title</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex gap="5">
			<Title heading="6">Default color</Title>
			<Title heading="6" color="inherit">Inherit color</Title>
			<Title heading="6" color="primary">Primary color</Title>
			<Title heading="6" color="accent">Accent color</Title>
			<Title heading="6" color="danger">Danger color</Title>
			<Title heading="6" color="info">Info color</Title>
			<Title heading="6" color="success">Success color</Title>
			<Title heading="6" color="warning">Warning color</Title>
		</Flex>

		<Flex gap="5" alignItems="baseline" direction="column-reverse">
			<Title heading="7">Heading Other (span)</Title>
			<Title heading="6">Heading 6</Title>
			<Title heading="5">Heading 5</Title>
			<Title heading="4">Heading 4</Title>
			<Title heading="3">Heading 3</Title>
			<Title heading="2">Heading 2</Title>
			<Title heading="1">Heading 1</Title>
		</Flex>

		<Flex gap="5" alignItems="baseline">
			<Title heading="6" italic>Italic</Title>
			<Title bold heading="6">Bold</Title>
		</Flex>
	</Flex>
</Flex>
