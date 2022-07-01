<script lang="ts">
	import type { BaseColor, BaseSize } from '../types';

	export let color: BaseColor = 'inherit';
	export let size: BaseSize = 'default';
	export let disabled = false;
	export let iconName = 'circle';
	export let ref: HTMLElement = undefined;

	$: classes = [`la la-${iconName}`, `qei-icon`, `color-${color}`, disabled && `disabled`, `size-${size}`, $$restProps.class]
		.filter(Boolean)
		.join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<i bind:this={ref} {...$$restProps} class={classes} style={styles} />
