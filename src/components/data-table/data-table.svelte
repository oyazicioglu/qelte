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
    import type { HeaderType, RowType } from './types.js';
    import { DataTableElement } from './DataTableElement.js';
    import { onMount } from 'svelte';
    import IconButton from '../icon-button/icon-button.svelte';
    import View from 'carbon-icons-svelte/lib/View.svelte';
    import Search from 'carbon-icons-svelte/lib/Search.svelte';
    import Filter from 'carbon-icons-svelte/lib/Filter.svelte';
    import Menu from '../menu/menu.svelte';
    import { ListModel } from '../list/ListModel.js';
    import Span from '../span/span.svelte';
    import TableContainer from './table-container.svelte';
    import Pagination from '../pagination/pagination.svelte';
    import FlexItem from '../flex/flex-item.svelte';
    import Grid from '../grid/grid.svelte';
    import Flex from '../flex/flex.svelte';
    import Divider from '../divider/divider.svelte';

    export let showSearch = true;
    export let showFilters = true;
    export let showPagination = true;
    export let showColumnSearch = true;
    export let showColumnVisibility = true;
    export let ref = undefined;
    export let hasDivider = true;
    export let useStrip = false;
    export let condense = false;
    export let headers: HeaderType[];
    export let rows: RowType[];
    export let list: ListModel = new ListModel([
        { text: 'Text1', value: 'Value 1', active: true, id: '1', icon: View, component: Divider },
        { text: 'Text2', value: 'Value 2', active: true, id: '2', icon: Search },
    ]);

    let waiting = true;
    let searchValue: string = undefined;

    const id = createUId();

    let table = new DataTableElement();
    table.headersFromJSON(headers);
    table.rowsFromJSON(rows);

    const tableClasses = [`qei-data-table`, hasDivider && `has-divider`, condense && `condense`, useStrip && `use-strip`]
        .filter(Boolean)
        .join(' ');

    const globalSearch = () => {
        console.log(searchValue);
    };

    onMount(async () => {
        waiting = false;
    });
</script>

<TableContainer>
    <div {id} bind:this={ref} {...$$restProps} class={tableClasses} style={$$restProps.style}>
        <Flex wrap="nowrap" direction="column" style="position:absolute; left:0; right:0; top:0; bottom:0;" gap="2">
            {#if waiting}
                <Preloader showBackground size="default" style="margin-bottom:0;" />
            {/if}

            <Row direction="row" gap={'1'} alignItems="stretch">
                {#if showSearch}
                    <Column grow={1}>
                        <SearchInput bind:value={searchValue} label="Search"
                            ><IconButton on:click={globalSearch} icon={Search} /></SearchInput>
                    </Column>
                {/if}
                {#if showFilters}
                    <Column grow={0}>
                        <Menu type="flat" rounded icon={Filter} listModel={list} useIconButton position="bottom-right" />
                    </Column>
                {/if}
            </Row>

            {#if table && table.rows && table.rows.length === 0}
                <Row wrap="nowrap" justifyContent="center" alignItems="center">
                    <Column>
                        <Title heading="6" color="secondary">No record found!</Title>
                    </Column>
                </Row>
            {:else}
                <FlexItem grow={1} style="overflow-x:auto; overflow-y:auto">
                    <table style="width:100%; height:100%">
                        {#if table.headers}
                            <thead>
                                <TableHead {condense}>
                                    {#each table.headers as header, i}
                                        <TableHeadCell sortable={header.sortable} align={header.align}>
                                            <Row gap="4" wrap="nowrap" alignItems="center" justifyContent="space-between">
                                                <Column grow={1}><Span>{header.value}</Span></Column>
                                                {#if showColumnVisibility}
                                                    <Column>
                                                        <IconButton
                                                            on:click={() => {
                                                                table.hideColumn(header);
                                                            }}
                                                            size="small"
                                                            icon={View} />
                                                    </Column>
                                                {/if}
                                                {#if showColumnSearch}
                                                    <Column>
                                                        <IconButton icon={Search} size="small" />
                                                    </Column>
                                                {/if}
                                            </Row>
                                        </TableHeadCell>
                                    {/each}
                                </TableHead>
                            </thead>
                        {/if}
                        {#if table.rows}
                            <tbody>
                                {#each table.rows as row, j}
                                    <TableRow {condense} {useStrip} {hasDivider} odd={j % 2 === 1}>
                                        {#each row.items as cell, k}
                                            <TableCell align={table.headers[k].align}>
                                                <Span>{cell.value}</Span>
                                            </TableCell>
                                        {/each}
                                    </TableRow>
                                {/each}
                            </tbody>
                        {/if}
                    </table>
                </FlexItem>
            {/if}
            {#if showPagination}
                <FlexItem>
                    <Pagination />
                </FlexItem>
            {/if}
        </Flex>
    </div>
</TableContainer>
