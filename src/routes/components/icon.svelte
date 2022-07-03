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
            <Icon iconName="bell" icon={Add} size="default">/></Icon>
            <Icon color="inherit" icon={Add} size="default">/></Icon>
            <Icon color="primary" icon={Add} size="default">/></Icon>
            <Icon color="accent" icon={Add} size="default">/></Icon>
            <Icon color="danger" icon={Add} size="default">/></Icon>
            <Icon color="info" icon={Add} size="default">/></Icon>
            <Icon color="success" icon={Add} size="default">/></Icon>
            <Icon color="warning" icon={Add} size="default">/></Icon>
        </Flex>

        <Flex gap="5" alignItems="baseline">
            <Icon icon={Add} size="extra-small">/></Icon>
            <Icon icon={Add} size="small">/></Icon>
            <Icon icon={Add} size="default" />
            <Icon icon={Add} size="large" />
            <Icon icon={Add} size="extra-large" />
        </Flex>
    </Flex>
</Flex>
