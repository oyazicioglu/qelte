<script>
	import Divider from '../divider/divider.svelte';
	import Flex from '../flex/flex.svelte';
	import FlexItem from '../flex/flex-item.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import Link from '../link/link.svelte';
	import Text from '../span/span.svelte';
	import Title from '../title/title.svelte';
	import { NotificationStore } from './NotificationStore.js';

	export let hasShadow = true;
	export let rounded = false;
	export let ref = undefined;
	export let notification = undefined;

	let timer;
	const close = () => {
		clearTimeout(timer);
		NotificationStore.removeNotification(notification);
	};

	const startClock = () => {
		timer = setTimeout(close, notification.delay * 1000);
	};

	const colorType = notification.type ? notification.type : 'default';

	if (notification.delay && notification.delay !== 0) {
		startClock();
	}
	$: classes = [`qei-notification-item`, rounded && `rounded`, `color-${colorType}`, hasShadow && `elevation-3`, $$restProps.class]
		.filter(Boolean)
		.join(' ');
</script>

<div bind:this={ref} id={notification.uid} {...$$restProps} class={classes} style={$$restProps.style}>
	<Flex direction="row">
		<FlexItem>
			<div class="indicator" />
		</FlexItem>
		<FlexItem grow={1} class="p-6" style="max-width:100%; line-height:1.5;">
			<Flex direction="column" gap={2}>
				<Flex direction="row" alignItems="center">
					<Title heading="6" style="flex-grow:1;">{notification.title}</Title>
					<IconButton on:click={close} condense iconName="close" />
				</Flex>
				<Divider />
				<Text class="mt-6" color="inherit" size="small">{notification.message}</Text>

				{#if notification.link}
					<FlexItem alignSelf="end">
						<Link size="small" link={notification.link}>detay...</Link>
					</FlexItem>
				{/if}
			</Flex>
		</FlexItem>
	</Flex>
</div>
