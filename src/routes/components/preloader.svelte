<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Preloader from '../../components/preloader/preloader.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Spinner</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column" alignItems="flex-start">
		<Flex direction="row" gap="5">
			<div class="preloader-container">
				<Preloader showBackground />
			</div>
			<div class="preloader-container">
				<Preloader showBackground color="primary" />
			</div>
			<div class="preloader-container">
				<Preloader showBackground color="accent" />
			</div>
			<div class="preloader-container">
				<Preloader showBackground color="success" />
			</div>
			<div class="preloader-container">
				<Preloader showBackground color="info" />
			</div>
			<div class="preloader-container">
				<Preloader showBackground color="danger" />
			</div>
			<div class="preloader-container">
				<Preloader showBackground color="warning" />
			</div>
		</Flex>
	</Flex>
</Flex>

<style lang="scss">
	.preloader-container {
		position: relative;
		width: 200px;
		height: 200px;
	}
</style>
