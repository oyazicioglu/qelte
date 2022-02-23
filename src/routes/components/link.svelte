<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Link from '../../components/link/link.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Link</Title>
		<Divider />
	</Flex>
	<Flex gap="5" direction="column" alignItems="flex-start">
		<Link color="inherit">Inherit color</Link>
		<Link color="default">Default color</Link>
		<Link color="primary">Primary color</Link>
		<Link color="accent">Accent color</Link>
		<Link color="danger">Danger color</Link>
		<Link color="info">Info color</Link>
		<Link color="success">Success color</Link>
		<Link color="warning">Warning color</Link>
	</Flex>
</Flex>
