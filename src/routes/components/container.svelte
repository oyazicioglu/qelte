<script>
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import Container from '../../components/layout/container.svelte';
    import Title from '../../components/title/title.svelte';
</script>

<Flex fullHeight direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Container</Title>
        <Divider />
    </Flex>
    <Flex style="position:relative; flex-grow:1" gap="5" direction="column" alignItems="flex-start">
        <Container fullFit>Container</Container>
    </Flex>
</Flex>
