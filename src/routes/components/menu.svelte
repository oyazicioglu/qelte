<script lang="ts">
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import { ListModel, type IListItem } from '../../components/list/ListModel';
    import Menu from '../../components/menu/menu.svelte';
    import Span from '../../components/span/span.svelte';
    import Title from '../../components/title/title.svelte';
    import { createUId } from '../../components/utils/uid-creator.js';
    import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
    import Home from 'carbon-icons-svelte/lib/Home.svelte';

    const listModel = new ListModel([
        { active: false, id: createUId(), value: 'Item 1 Value', text: 'Item 1', icon: Home },
        { active: false, id: createUId(), text: 'Item 2', value: 'Item 2 Value', icon: Home },
        { active: true, id: createUId(), text: 'Item 3', value: 'Item 3 Value', icon: Home },
        { active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', icon: Home },
    ]);

    let activeItem: IListItem;
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Dropdown Menu</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="column" alignItems="flex-start">
        <Flex direction="row" gap="5">
            <Menu bind:activeItem text="Menu 1" {listModel} icon={Notification} />
            <Menu bind:activeItem text="Menu 1" type="flat" {listModel} icon={Notification} />
            <Menu bind:activeItem text="Menu 1" type="raised" {listModel} icon={Notification} />
            <Menu bind:activeItem text="Menu 1" type="stroked" {listModel} icon={Notification} />
        </Flex>
        <Flex direction="row" gap="5">
            <Menu color="accent" bind:activeItem text="Menu 1" {listModel} icon={Notification} />
            <Menu color="accent" bind:activeItem text="Menu 1" type="flat" {listModel} icon={Notification} />
            <Menu color="accent" bind:activeItem text="Menu 1" type="raised" {listModel} icon={Notification} />
            <Menu color="accent" bind:activeItem text="Menu 1" type="stroked" {listModel} icon={Notification} />
        </Flex>
        <Flex direction="row" gap="5">
            <Menu circledIcon bind:activeItem {listModel} icon={Notification} />
            <Menu circledIcon bind:activeItem type="flat" {listModel} icon={Notification} />
            <Menu circledIcon bind:activeItem type="raised" {listModel} icon={Notification} />
            <Menu circledIcon bind:activeItem type="stroked" {listModel} icon={Notification} />

            <Menu color="primary" bind:activeItem {listModel} icon={Notification} />
            <Menu color="primary" bind:activeItem type="flat" {listModel} icon={Notification} />
            <Menu color="primary" bind:activeItem type="raised" {listModel} icon={Notification} />
            <Menu color="primary" bind:activeItem type="stroked" {listModel} icon={Notification} />
        </Flex>
        <Flex direction="row" gap="5">
            <Menu bind:activeItem type="flat" text="Bottom-Left Align" position="bottom-left" {listModel} icon={Notification} />
            <Menu bind:activeItem type="flat" text="Bottom-Right Align" position="bottom-right" {listModel} icon={Notification} />
            <Menu bind:activeItem type="flat" text="Top-Left Align" position="top-left" {listModel} icon={Notification} />
            <Menu bind:activeItem type="flat" text="Top-Right Align" position="top-right" {listModel} icon={Notification} />
        </Flex>
    </Flex>
    <Span>Selected: {activeItem && activeItem.value}</Span>
</Flex>
