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
            <IconButton color="primary"><Notification size={20} /></IconButton>
            <IconButton color="accent"><Notification size={20} /></IconButton>
            <IconButton color="danger"><Notification size={20} /></IconButton>
            <IconButton color="info"><Notification size={20} /></IconButton>
            <IconButton color="success"><Notification size={20} /></IconButton>
            <IconButton color="warning"><Notification size={20} /></IconButton>
            <IconButton disabled><Notification size={20} /></IconButton>
        </Flex>
        <Flex gap="4">
            <IconButton type="flat"><Notification size={20} /></IconButton>
            <IconButton type="flat" color="primary"><Notification size={20} /></IconButton>
            <IconButton type="flat" color="accent"><Notification size={20} /></IconButton>
            <IconButton type="flat" color="danger"><Notification size={20} /></IconButton>
            <IconButton type="flat" color="info"><Notification size={20} /></IconButton>
            <IconButton type="flat" color="success"><Notification size={20} /></IconButton>
            <IconButton type="flat" color="warning"><Notification size={20} /></IconButton>
            <IconButton type="flat" disabled><Notification size={20} /></IconButton>
        </Flex>
        <Flex gap="4">
            <IconButton circle type="raised"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" color="primary"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" color="accent"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" color="danger"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" color="info"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" color="success"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" color="warning"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" disabled><Notification size={20} /></IconButton>
        </Flex>
        <Flex gap="4">
            <IconButton type="stroked"><Notification size={20} /></IconButton>
            <IconButton type="stroked" color="primary"><Notification size={20} /></IconButton>
            <IconButton type="stroked" color="accent"><Notification size={20} /></IconButton>
            <IconButton type="stroked" color="danger"><Notification size={20} /></IconButton>
            <IconButton type="stroked" color="info"><Notification size={20} /></IconButton>
            <IconButton type="stroked" color="success"><Notification size={20} /></IconButton>
            <IconButton type="stroked" color="warning"><Notification size={20} /></IconButton>
            <IconButton type="stroked" disabled><Notification size={20} /></IconButton>
        </Flex>
        <Flex gap="4">
            <IconButton circle type="stroked"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" color="primary"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" color="accent"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" color="danger"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" color="info"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" color="success"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" color="warning"><Notification size={20} /></IconButton>
            <IconButton circle type="stroked" disabled><Notification size={20} /></IconButton>
        </Flex>

        <Flex gap="4" alignItems="baseline">
            <IconButton circle type="raised" size="small"><Notification size={16} /></IconButton>
            <IconButton circle type="raised" size="default"><Notification size={20} /></IconButton>
            <IconButton circle type="raised" size="large"><Notification size={24} /></IconButton>
            <IconButton circle type="raised" size="extra-large"><Notification size={32} /></IconButton>
        </Flex>
    </Flex>
</Flex>
