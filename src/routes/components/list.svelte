<script lang="ts">
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import List from '../../components/list/list.svelte';
    import Span from '../../components/span/span.svelte';
    import Title from '../../components/title/title.svelte';
    import ListItem from '../../components/list/list-item.svelte';
    import Button from '../../components/button/button.svelte';
    import Link from '../../components/link/link.svelte';
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>List</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="row" alignItems="flex-start">
        <Flex alignItems={'flex-start'} direction="row" wrap="wrap" gap="5">
            <List paddingHorizontal={'4'} paddingVertical={'4'}>
                <ListItem hasHover>
                    <Span>Lorem ipsum</Span>
                </ListItem>
                <ListItem isDivider />
                <ListItem><Button justifyContent={'flex-start'} fullWidth color="primary" type={'flat'}>Button</Button></ListItem>
                <ListItem isDivider />
                <ListItem><Link href="#">Link</Link></ListItem>
            </List>
            <List paddingHorizontal={'4'} paddingVertical={'4'}>
                <ListItem><Link href="#">Link</Link></ListItem>
                <ListItem><Link href="#">Link</Link></ListItem>
                <ListItem><Link href="#">Link</Link></ListItem>
            </List>
            <List type={'flat'} rounded justifyContent={'flex-start'} alignItems={'flex-start'}>
                <ListItem noPadding
                    ><Button justifyContent={'flex-start'} fullWidth color="primary" type={'flat'}>Button 1</Button></ListItem>
                <ListItem noPadding
                    ><Button justifyContent={'flex-start'} fullWidth color="primary" type={'flat'}>Button 2</Button></ListItem>
                <ListItem noPadding
                    ><Button justifyContent={'flex-start'} fullWidth color="primary" type={'flat'}>Button 3</Button></ListItem>
            </List>
            <List type={'raised'} paddingHorizontal={'4'} paddingVertical={'4'}>
                <ListItem><Link href="#">Link</Link></ListItem>
                <ListItem><Link href="#">Link</Link></ListItem>
                <ListItem><Link href="#">Link</Link></ListItem>
            </List>
        </Flex>
    </Flex>
</Flex>
