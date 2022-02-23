<script>
	import { NotificationStore } from './NotificationStore';
	import { createUId } from '../utils/uid-creator.js';
	import NotificationItem from '../notification/notification-item.svelte';
	import Flex from '../flex/flex.svelte';

	export let hasShadow = true;
	export let rounded = false;
	export let ref = undefined;

	const id = createUId();
	const store = NotificationStore.getStore();
	$: classes = [`qei-notification`, hasShadow && `has-shadow`, rounded && `rounded`, $$restProps.class].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={classes} style={$$restProps.style}>
	<div class="notifications" style="position:relative; bottom:0; right:0; width:auto; height:100%; overflow-y: auto;">
		<Flex direction="column" gap={10} class="p-4">
			{#each $store as notification (notification.uid)}
				<NotificationItem {notification} {rounded} {hasShadow} />
			{/each}
		</Flex>
	</div>
</div>
