<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Paper from '../../components/paper/paper.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Paper</Title>
		<Divider />
	</Flex>
	<Flex gap="5" direction="column" alignItems="flex-start">
		<Paper padding="10">Paper Content</Paper>
		<Paper fullWidth padding="10">Paper Content</Paper>
		<Paper fullWidth padding="10" elevation="3">Paper Content</Paper>
		<Paper fullWidth padding="10" rounded elevation="3">Paper Content</Paper>
		<Paper fullWidth padding="10">Paper Content</Paper>
		<Paper fullWidth padding="10" color="primary">Paper Content</Paper>
		<Paper fullWidth padding="10" color="accent">Paper Content</Paper>
		<Paper fullWidth padding="10" color="success">Paper Content</Paper>
	</Flex>
</Flex>
