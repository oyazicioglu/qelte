<script lang="ts">
	import { createUId } from '../utils/uid-creator.js';
	import Flex from '../flex/flex.svelte';
	import type { BaseSize, FlexDirection, FlexGap, FlexJustify } from '../types';
	import Message from '../message/message.svelte';
	import { NotificationModel, type INotificationItem } from './NotificationModel';
	import Link from '../link/link.svelte';

	export let hasShadow = true;
	export let rounded = false;
	export let ref = undefined;
	export let gap: FlexGap = '4';
	export let size: BaseSize = 'default';
	export let justifyContent: FlexJustify = 'flex-end';

	const id = createUId();

	const notificationModel = NotificationModel.getInstance();
	const store = notificationModel.getStore();

	const close = (item: INotificationItem) => {
		notificationModel.removeItem(item);
	};

	$: classes = [`qei-notification`, `size-${size}`, rounded && `rounded`, $$restProps.class].filter(Boolean).join(' ');

	$: notificationStyles = ['position:relative', 'height:100%', 'bottom:0', 'right:0', 'overflow-y:auto', 'width:auto']
		.filter(Boolean)
		.join(';');

	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<Flex style={notificationStyles} class="p-4">
		<Flex direction="column" {justifyContent} {gap}>
			{#each $store as item (item.uid)}
				<Message
					{size}
					padding="5"
					on:close={() => {
						close(item);
					}}
					fullWidth
					{rounded}
					{hasShadow}
					color={item.type}
					message={item.message}
					title={item.title}>
					{#if item.link}
						<Link {size} href={item.link.href}>{item.link.text}</Link>
					{/if}
				</Message>
			{/each}
		</Flex>
	</Flex>
</div>
