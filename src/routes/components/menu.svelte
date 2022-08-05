<script lang="ts">
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import Menu from '../../components/menu/menu.svelte';
    import Title from '../../components/title/title.svelte';
    import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Dropdown Menu</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="column" alignItems="flex-start">
        <Flex direction="row" gap="5">
            <Menu text="Menu 1" icon={Notification} />
            <Menu text="Menu 1" type="flat" icon={Notification} />
            <Menu text="Menu 1" type="raised" icon={Notification} />
            <Menu text="Menu 1" type="stroked" icon={Notification} />
        </Flex>
        <Flex direction="row" gap="5">
            <Menu color="accent" text="Menu 1" icon={Notification} />
            <Menu color="accent" text="Menu 1" type="flat" icon={Notification} />
            <Menu color="accent" text="Menu 1" type="raised" icon={Notification} />
            <Menu color="accent" text="Menu 1" type="stroked" icon={Notification} />
        </Flex>
        <Flex direction="row" gap="5">
            <Menu circledIcon icon={Notification} />
            <Menu circledIcon type="flat" icon={Notification} />
            <Menu circledIcon type="raised" icon={Notification} />
            <Menu circledIcon type="stroked" icon={Notification} />

            <Menu color="primary" icon={Notification} />
            <Menu color="primary" type="flat" icon={Notification} />
            <Menu color="primary" type="raised" icon={Notification} />
            <Menu color="primary" type="stroked" icon={Notification} />
        </Flex>
        <Flex direction="row" gap="5">
            <Menu type="flat" text="Bottom-Left Align" position="bottom-left" icon={Notification} />
            <Menu type="flat" text="Bottom-Right Align" position="bottom-right" icon={Notification} />
            <Menu type="flat" text="Top-Left Align" position="top-left" icon={Notification} />
            <Menu type="flat" text="Top-Right Align" position="top-right" icon={Notification} />
        </Flex>
    </Flex>
</Flex>
