<script>
	import Checkbox from '../../components/checkbox/checkbox.svelte';
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Checkbox</Title>
		<Divider />
	</Flex>
	<Flex gap="5" direction="column" alignItems="flex-start">
		<Checkbox color="inherit" text="Inherit color" />
		<Checkbox chekced color="default" text="Default color" />
		<Checkbox chekced color="primary" text="Primary color" />
		<Checkbox color="accent" text="Accent color" />
		<Checkbox color="danger" text="Danger color" />
		<Checkbox color="info" text="Info color" />
		<Checkbox color="success" text="Success color" />
		<Checkbox color="warning" text="Warning color" />
	</Flex>
	<Flex direction="row" alignItems="baseline" gap="10">
		<Checkbox size="extra-small" color="default" text="Extra Small" />
		<Checkbox size="small" color="default" text="Small" />
		<Checkbox size="default" color="default" text="Default" />
		<Checkbox size="large" color="default" text="Large" />
		<Checkbox size="extra-large" color="default" text="Extra Large" />
	</Flex>
</Flex>
