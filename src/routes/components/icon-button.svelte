<script>
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import Title from '../../components/title/title.svelte';
    import IconButton from '../../components/icon-button/icon-button.svelte';
    import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Icon Button</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="column">
        <Flex gap="4">
            <IconButton />
            <IconButton color="primary" icon={Notification} iconSize={20} />
            <IconButton color="accent" icon={Notification} iconSize={20} />
            <IconButton color="danger" icon={Notification} iconSize={20} />
            <IconButton color="info" icon={Notification} iconSize={20} />
            <IconButton color="success" icon={Notification} iconSize={20} />
            <IconButton color="warning" icon={Notification} iconSize={20} />
            <IconButton disabled icon={Notification} iconSize={20} />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} iconSize={20} type="flat" />
            <IconButton icon={Notification} iconSize={20} type="flat" color="primary" />
            <IconButton icon={Notification} iconSize={20} type="flat" color="accent" />
            <IconButton icon={Notification} iconSize={20} type="flat" color="danger" />
            <IconButton icon={Notification} iconSize={20} type="flat" color="info" />
            <IconButton icon={Notification} iconSize={20} type="flat" color="success" />
            <IconButton icon={Notification} iconSize={20} type="flat" color="warning" />
            <IconButton icon={Notification} iconSize={20} type="flat" disabled />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} iconSize={20} circle type="raised" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" color="primary" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" color="accent" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" color="danger" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" color="info" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" color="success" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" color="warning" />
            <IconButton icon={Notification} iconSize={20} circle type="raised" disabled />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} iconSize={20} type="stroked" />
            <IconButton icon={Notification} iconSize={20} type="stroked" color="primary" />
            <IconButton icon={Notification} iconSize={20} type="stroked" color="accent" />
            <IconButton icon={Notification} iconSize={20} type="stroked" color="danger" />
            <IconButton icon={Notification} iconSize={20} type="stroked" color="info" />
            <IconButton icon={Notification} iconSize={20} type="stroked" color="success" />
            <IconButton icon={Notification} iconSize={20} type="stroked" color="warning" />
            <IconButton icon={Notification} iconSize={20} type="stroked" disabled />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} iconSize={20} circle type="stroked" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" color="primary" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" color="accent" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" color="danger" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" color="info" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" color="success" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" color="warning" />
            <IconButton icon={Notification} iconSize={20} circle type="stroked" disabled />
        </Flex>

        <Flex gap="4" alignItems="baseline">
            <IconButton circle type="raised" size="small" icon={Notification} iconSize={16} />
            <IconButton circle type="raised" size="default" icon={Notification} iconSize={20} />
            <IconButton circle type="raised" size="large" icon={Notification} iconSize={24} />
            <IconButton circle type="raised" size="extra-large" icon={Notification} iconSize={32} />
        </Flex>
    </Flex>
</Flex>
