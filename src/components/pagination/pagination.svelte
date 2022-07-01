<script>
	import { createUId } from '../utils/uid-creator.js';
	import { createEventDispatcher } from 'svelte';
	import Flex from '../flex/flex.svelte';
	import IconButton from '../icon-button/icon-button.svelte';
	import Paper from '../paper/paper.svelte';
	import Select from '../select/select.svelte';
	import Text from '../span/span.svelte';

	/**
	 * @type {'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'start' | 'end' | 'left' | 'right'}
	 */
	export let justifyContent = 'flex-start';

	export let limitOptions = [];
	export let totalRecord = 0;
	export let ref = undefined;

	const limitOptionsForSelect = limitOptions.map((l) => {
		return { active: l.active, text: l.text, disabled: false, value: l.value };
	});

	let selectedLimit = limitOptions.find((l) => l.active);

	if (!selectedLimit) {
		selectedLimit = { value: 0, text: '0', active: true };
	}

	let activePage = 0;
	let pageCount = 0;
	let previousArrowEnabled = true;
	let nextArrowEnabled = true;
	let dispatcher = createEventDispatcher();

	const id = createUId();

	const initialize = () => {
		setPageCount(selectedLimit.value);
		if (pageCount && pageCount !== 0) {
			activePage = 1;
		}
		refreshArrowsState();
		dispatchChange();
	};

	const nextPage = () => {
		if (activePage < pageCount) {
			activePage++;
		}

		dispatchChange();
		refreshArrowsState();
	};

	const previousPage = () => {
		if (activePage > 1) {
			activePage--;
		}

		dispatchChange();
		refreshArrowsState();
	};

	const refreshArrowsState = () => {
		previousArrowEnabled = activePage > 1;
		nextArrowEnabled = activePage < pageCount;
	};

	const handleLimitChange = (e) => {
		const newLimit = e.detail.activeItem;
		if (newLimit) {
			selectedLimit = newLimit;
			setPageCount(selectedLimit.value);
			dispatchChange();
		}
	};

	const setPageCount = (limitValue) => {
		if (limitValue === 0) {
			pageCount = 1;
		} else {
			pageCount = Math.ceil(totalRecord / limitValue);
		}
		checkPageNumber();
	};

	const checkPageNumber = () => {
		if (activePage > pageCount) {
			activePage = pageCount;
		}
		refreshArrowsState();
	};

	const dispatchChange = () => {
		dispatcher('change', { pageNumber: activePage, limit: selectedLimit.value });
	};

	initialize();
</script>

<div {id} bind:this={ref} class="qei-pagination fullWidth">
	<Paper color="default" class="p-6">
		<Flex direction="row" {justifyContent} alignItems="center" gap={4}>
			<Text color="secondary">items per page</Text>
			<Select on:change={handleLimitChange} bind:activeItem={selectedLimit} options={limitOptionsForSelect} />
			<div class="spacer" />
			<Text color="secondary">{activePage} / {pageCount}</Text>
			<div class="spacer" />
			<IconButton on:click={previousPage} disabled={!previousArrowEnabled} circle iconName="chevron_left" />
			<IconButton on:click={nextPage} disabled={!nextArrowEnabled} circle iconName="chevron_right" />
		</Flex>
	</Paper>
</div>
