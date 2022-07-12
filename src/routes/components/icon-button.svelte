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
            <IconButton color="inherit" icon={Notification} />
            <IconButton color="primary" icon={Notification} />
            <IconButton color="accent" icon={Notification} />
            <IconButton color="danger" icon={Notification} />
            <IconButton color="info" icon={Notification} />
            <IconButton color="success" icon={Notification} />
            <IconButton color="warning" icon={Notification} />
            <IconButton disabled icon={Notification} />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} type="flat" />
            <IconButton icon={Notification} type="flat" color="primary" />
            <IconButton icon={Notification} type="flat" color="accent" />
            <IconButton icon={Notification} type="flat" color="danger" />
            <IconButton icon={Notification} type="flat" color="info" />
            <IconButton icon={Notification} type="flat" color="success" />
            <IconButton icon={Notification} type="flat" color="warning" />
            <IconButton icon={Notification} type="flat" disabled />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} circle type="raised" />
            <IconButton icon={Notification} circle type="raised" color="primary" />
            <IconButton icon={Notification} circle type="raised" color="accent" />
            <IconButton icon={Notification} circle type="raised" color="danger" />
            <IconButton icon={Notification} circle type="raised" color="info" />
            <IconButton icon={Notification} circle type="raised" color="success" />
            <IconButton icon={Notification} circle type="raised" color="warning" />
            <IconButton icon={Notification} circle type="raised" disabled />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} type="stroked" />
            <IconButton icon={Notification} type="stroked" color="primary" />
            <IconButton icon={Notification} type="stroked" color="accent" />
            <IconButton icon={Notification} type="stroked" color="danger" />
            <IconButton icon={Notification} type="stroked" color="info" />
            <IconButton icon={Notification} type="stroked" color="success" />
            <IconButton icon={Notification} type="stroked" color="warning" />
            <IconButton icon={Notification} type="stroked" disabled />
        </Flex>
        <Flex gap="4">
            <IconButton icon={Notification} circle type="stroked" />
            <IconButton icon={Notification} circle type="stroked" color="primary" />
            <IconButton icon={Notification} circle type="stroked" color="accent" />
            <IconButton icon={Notification} circle type="stroked" color="danger" />
            <IconButton icon={Notification} circle type="stroked" color="info" />
            <IconButton icon={Notification} circle type="stroked" color="success" />
            <IconButton icon={Notification} circle type="stroked" color="warning" />
            <IconButton icon={Notification} circle type="stroked" disabled />
        </Flex>

        <Flex gap="4" alignItems="baseline">
            <IconButton circle type="raised" size="extra-small" icon={Notification} />
            <IconButton circle type="raised" size="small" icon={Notification} />
            <IconButton circle type="raised" size="default" icon={Notification} />
            <IconButton circle type="raised" size="large" icon={Notification} />
            <IconButton circle type="raised" size="extra-large" icon={Notification} />
        </Flex>
    </Flex>
</Flex>
