<script>
	import { createUId } from '../utils/uid-creator.js';
	import { createEventDispatcher, onMount } from 'svelte';
	import { DataTableUtil } from './data-table-utils';
	import Title from '../title/title.svelte';
	import TableHead from '../data-table/table-head.svelte';
	import TableCell from '../data-table/table-cell.svelte';
	import TableRow from '../data-table/table-row.svelte';
	import TableHeadCell from '../data-table/table-head-cell.svelte';
	import Container from '../layout/container.svelte';
	import Row from '../layout/row.svelte';
	import Column from '../layout/column.svelte';
	import Preloader from '../preloader/preloader.svelte';
	import SearchInput from '../search-input/search-input.svelte';

	export let data = {
		headers: undefined,
		rows: undefined,
	};

	export let showSearch = false;
	export let showFilters = false;
	export let ref = undefined;
	export let hasDivider = true;
	export let useStrip = false;
	export let condense = false;

	let waiting = true;
	let filteredData = data;

	const id = createUId();
	const dispatch = createEventDispatcher();
	const dataTableUtils = new DataTableUtil(data);

	const tableClasses = [`qei-data-table`, hasDivider && `has-divider`, useStrip && `use-strip`].filter(Boolean).join(' ');

	const limitRecord = (e) => {
		filteredData = dataTableUtils.limit(e.detail.limit, e.detail.pageNumber);
	};

	const filterGlobaly = (e) => {
		filteredData = dataTableUtils.filterGlobaly(e.detail.value);
	};

	const sort = (index) => {
		filteredData = filteredData;
	};

	const onRowSelected = (index, data) => {
		dispatch('rowSelect', { index, data });
	};

	$: {
		if (filteredData) {
			waiting = false;
		}
	}
</script>

<div {id} bind:this={ref} {...$$restProps} class={tableClasses} style={$$restProps.style}>
	<Container>
		<Row direction="column" gap="4px" alignItems="stretch" style="position: relative; width: 100%; height:100%;">
			{#if waiting}
				<Preloader showBackground size="default" style="margin-bottom:0;" />
			{/if}

			<Column>
				<Row direction="row" alignItems="baseline">
					{#if showSearch}
						<Column extraSmall={12} large={6} grow={1}>
							<SearchInput on:search={filterGlobaly} label="Search" />
						</Column>
					{/if}
					{#if showFilters}
						<Column extraSmall={12} large={6} grow={1}>
							<div>Filters</div>
						</Column>
					{/if}
				</Row>
			</Column>

			<Column grow={1}>
				{#if !filteredData || !filteredData.rows || filteredData.rows.length === 0}
					<Row justifyContent="center" alignItems="center">
						<Column>
							<Title heading="6" color="secondary">No record found!</Title>
						</Column>
					</Row>
				{:else}
					<div class="table-container">
						<table>
							{#if filteredData && filteredData.headers}
								<thead>
									<TableHead {condense}>
										{#each filteredData.headers as header, i}
											<TableHeadCell
												sortable={header.sortable}
												on:click={() => {
													if (header.sortable) {
														sort(i);
													}
												}}
												align={header.align}>{header.text}</TableHeadCell>
										{/each}
									</TableHead>
								</thead>
							{/if}
							{#if filteredData && filteredData.rows}
								<tbody>
									{#each filteredData.rows as row, j}
										<TableRow
											on:click={() => {
												onRowSelected(j, row);
											}}
											{condense}
											{useStrip}
											{hasDivider}
											odd={j % 2 === 1}>
											{#each Object.entries(row) as [key, value], k}
												<TableCell align={filteredData.headers[k].align}>{value}</TableCell>
											{/each}
										</TableRow>
									{/each}
								</tbody>
							{/if}
						</table>
					</div>
				{/if}
			</Column>
		</Row>
	</Container>
</div>
