<script lang="ts">
	import type { ColumnSize, FlexAlignSelf } from '../types';

	export let order = 0;
	export let grow = 0;
	export let shrink = 1;
	export let basis = 'auto';
	export let alignSelf: FlexAlignSelf = 'auto';
	export let extraSmall: ColumnSize = undefined;
	export let small: ColumnSize = undefined;
	export let medium: ColumnSize = undefined;
	export let large: ColumnSize = undefined;
	export let extraLarge: ColumnSize = undefined;
	export let ref = undefined;

	$: classes = [
		`qei-column`,
		extraSmall && `xs-${extraSmall}`,
		small && `sm-${small}`,
		medium && `md-${medium}`,
		large && `lg-${large}`,
		extraLarge && `xl-${extraLarge}`,
		$$restProps.class,
	]
		.filter(Boolean)
		.join(' ');

	$: styles = [
		`order:${order}`,
		`flex-grow:${grow}`,
		`flex-shrink:${shrink}`,
		`flex-basis:${basis}`,
		`align-self:${alignSelf}`,
		$$restProps.style,
	]
		.filter(Boolean)
		.join(';');
</script>

<div bind:this={ref} class={classes} style={styles}>
	<slot />
</div>
