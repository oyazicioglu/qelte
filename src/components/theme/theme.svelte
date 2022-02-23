<script lang="ts">
	import { onMount } from 'svelte';
	import { LocalStorage } from '../utils/localStorage';

	export let theme = 'light';

	onMount(() => {
		const localTheme = LocalStorage.get('theme');
		if (localTheme) {
			theme = localTheme;
		}
	});

	$: {
		if (typeof window !== 'undefined') {
			document.documentElement.setAttribute('theme', theme);
		}
	}
</script>
