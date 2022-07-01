<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import ProgressBar from '../../components/progress-bar/progress-bar.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Spinner</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex direction="column" gap="5">
			<ProgressBar />
			<ProgressBar color="primary" min="1" max="20" value="7" />
			<ProgressBar color="accent" min="0" max="20" value="18" />
		</Flex>
		<Flex direction="column" gap="5">
			<ProgressBar size="extra-small" />
			<ProgressBar size="small" />
			<ProgressBar size="default" />
			<ProgressBar size="large" />
			<ProgressBar size="extra-large" />
		</Flex>
		<Flex direction="column" gap="5" justifyContent="flex-start">
			<ProgressBar indeterminate />
			<ProgressBar indeterminate color="primary" />
			<ProgressBar indeterminate color="accent" />
		</Flex>
	</Flex>
</Flex>
