<script lang="ts">
	export let path: string = undefined;
	export let ratio = '1';
	export let ref: HTMLElement = undefined;
	export let altText = '';
	export let contain = true;
	export let width = 'auto';

	$: classes = [`qei-image`, contain && `contain`, ratio && `${ratio}`, $$restProps.class].filter(Boolean).join(' ');
	$: styles = [$$restProps.style].filter(Boolean).join(';');
</script>

<div bind:this={ref} {...$$restProps} class={classes} style={styles}>
	<img {width} src={path} alt={altText} style="aspect-ratio: {ratio};" />
</div>
