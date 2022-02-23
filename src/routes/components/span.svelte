<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Span from '../../components/span/span.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Span (text)</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex gap="5">
			<Span>Default color</Span>
			<Span color="inherit">Inherit color</Span>
			<Span color="primary">Primary color</Span>
			<Span color="accent">Accent color</Span>
			<Span color="danger">Danger color</Span>
			<Span color="info">Info color</Span>
			<Span color="success">Success color</Span>
			<Span color="warning">Warning color</Span>
		</Flex>

		<Flex gap="5" alignItems="baseline">
			<Span size="extra-small">Extra Small</Span>
			<Span size="small">Small</Span>
			<Span size="default">Default</Span>
			<Span size="large">Large</Span>
			<Span size="extra-large">Extra Large</Span>
		</Flex>

		<Flex gap="5" alignItems="baseline">
			<Span bold>Bold</Span>
			<Span italic>Italic</Span>
		</Flex>
	</Flex>
</Flex>
