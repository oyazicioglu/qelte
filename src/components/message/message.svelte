<script lang="ts">
	import type { BaseColor, BaseSize, FlexGap, FlexJustify, TextAlign } from '../types.js';
	import Paper from '../paper/paper.svelte';
	import Flex from '../flex/flex.svelte';
	import FlexItem from '../flex/flex-item.svelte';
	import Title from '../title/title.svelte';
	import Span from '../span/span.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import { createEventDispatcher } from 'svelte';
	import Divider from '../divider/divider.svelte';

	export let color: BaseColor = 'inherit';
	export let bold = false;
	export let size: BaseSize = 'default';
	export let italic = false;
	export let disabled = false;
	export let ref: HTMLElement = undefined;
	export let showCloseButton = true;
	export let hasShadow = false;
	export let padding: FlexGap = '5';
	export let message: string = undefined;
	export let title: string = undefined;
	export let justifyContent: FlexJustify = 'flex-start';
	export let showMessage = true;
	export let textAlign: TextAlign = 'start';
	export let fullWidth = true;
	export let gap: FlexGap = '4';
	export let rounded = false;

	const dispatcher = createEventDispatcher();

	const closeMessage = () => {
		showMessage = false;
		dispatcher('close');
	};

	$: classes = [
		`qei-message`,
		bold && `bold`,
		italic && `italic`,
		disabled && `disabled`,
		`size-${size}`,
		`color-${color}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');
</script>

{#if showMessage}
	<div bind:this={ref} on:click {...$$restProps} class={classes} style={$$restProps.style}>
		<Paper {rounded} {fullWidth} {color} {padding} elevation={hasShadow ? '3' : '0'}>
			<Flex direction="column" fullWidth {justifyContent} {gap}>
				<Flex direction="column" gap="1">
					<Flex direction="row" class="header" alignItems="center" gap="5">
						<FlexItem grow={1}>
							<Title bold align={textAlign} heading="6">{title ? title : '...'}</Title>
						</FlexItem>

						{#if showCloseButton}
							<FlexItem alignSelf="flex-end">
								<IconButton circle {size} iconName="times" on:click={closeMessage} />
							</FlexItem>
						{/if}
					</Flex>
					<Divider />
				</Flex>
				{#if message}
					<Span {size} align={textAlign} noWrap={false} {bold} {italic}>{message}</Span>
				{/if}
				<slot />
			</Flex>
		</Paper>
	</div>
{/if}
