<script lang="ts">
    import { createUId } from '../utils/uid-creator.js';
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
    import type { ITableData } from './types.js';
    import { DataTableElement } from './DataTableElement.js';

    export let data: ITableData = {
        headers: [
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
        ],
        rows: [
            { key: '1', value: '1' },
            { key: '2', value: '2' },
            { key: '3', value: '3' },
            { key: '4', value: '4' },
        ],
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

    let table = new DataTableElement();
    table.headersFromJSON(data.headers);
    table.rowsFromJSON(data.rows);

    table.rowsToJSON();

    const tableClasses = [`qei-data-table`, hasDivider && `has-divider`, useStrip && `use-strip`].filter(Boolean).join(' ');
</script>

<div {id} bind:this={ref} {...$$restProps} class={tableClasses} style={$$restProps.style}>
    <Container>
        <Row direction="column" gap="4" alignItems="stretch" style="position: relative; width: 100%; height:100%;">
            {#if waiting}
                <Preloader showBackground size="default" style="margin-bottom:0;" />
            {/if}

            <Column>
                <Row direction="row" alignItems="baseline">
                    {#if showSearch}
                        <Column extraSmall="12" large="6" grow={1}>
                            <SearchInput label="Search" />
                        </Column>
                    {/if}
                    {#if showFilters}
                        <Column extraSmall="12" large="6" grow={1}>
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
                                            <TableHeadCell sortable={header.sortable} align={header.align}>{header.value}</TableHeadCell>
                                        {/each}
                                    </TableHead>
                                </thead>
                            {/if}
                            {#if filteredData && filteredData.rows}
                                <tbody>
                                    {#each filteredData.rows as row, j}
                                        <TableRow {condense} {useStrip} {hasDivider} odd={j % 2 === 1}>
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
