<script>
    import DataTable from '../../components/data-table/data-table.svelte';
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Data Table</Title>
        <Divider />
    </Flex>
    <Flex gap="5" direction="column" alignItems="flex-start">
        <DataTable />
    </Flex>
</Flex>
