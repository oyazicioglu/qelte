<script>
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import Icon from '../../components/icon/icon.svelte';
    import Title from '../../components/title/title.svelte';
    import Add from 'carbon-icons-svelte/lib/Add.svelte';
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Icon</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="column">
        <Flex gap="5">
            <Icon iconName="bell"><Add size={20} /></Icon>
            <Icon color="inherit"><Add size={20} /></Icon>
            <Icon color="primary"><Add size={20} /></Icon>
            <Icon color="accent"><Add size={20} /></Icon>
            <Icon color="danger"><Add size={20} /></Icon>
            <Icon color="info"><Add size={20} /></Icon>
            <Icon color="success"><Add size={20} /></Icon>
            <Icon color="warning"><Add size={20} /></Icon>
        </Flex>

        <Flex gap="5" alignItems="baseline">
            <Icon size="extra-small"><Add size={16} /></Icon>
            <Icon size="small"><Add size={20} /></Icon>
            <Icon size="default"><Add size={24} /></Icon>
            <Icon size="large"><Add size={32} /></Icon>
            <Icon size="extra-large"><Add size={32} /></Icon>
        </Flex>
    </Flex>
</Flex>
