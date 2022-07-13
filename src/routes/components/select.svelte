<script lang="ts">
    import Divider from '../../components/divider/divider.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import { SelectModel, type ISelectItem } from '../../components/select/SelectModel';
    import Select from '../../components/select/select.svelte';
    import Title from '../../components/title/title.svelte';
    import { createUId } from '../../components/utils/uid-creator';
    import Span from '../../components/span/span.svelte';
    import Home from 'carbon-icons-svelte/lib/Home.svelte';

    const selectModel = new SelectModel([
        { active: false, id: createUId(), text: 'Item 1', value: 'Item 1 Value', icon: Home },
        { active: true, id: createUId(), text: 'Item 2', value: 'Item 2 Value', icon: Home },
        { active: false, id: createUId(), text: 'Item 3', value: 'Item 3 Value', icon: Home },
        { active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', icon: Home },
    ]);

    let activeItem: ISelectItem;
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Select</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="row" alignItems="flex-start">
        <Select {selectModel} bind:activeItem />
        <Select {selectModel} color="primary" bind:activeItem />
        <Select {selectModel} color="accent" bind:activeItem />
        <Select {selectModel} color="warning" bind:activeItem />
        <Select {selectModel} bind:activeItem disabled />
    </Flex>
    <Flex gap="10" direction="row" alignItems="center">
        <Select {selectModel} size="extra-small" bind:activeItem />
        <Select {selectModel} size="small" bind:activeItem />
        <Select {selectModel} bind:activeItem />
        <Select {selectModel} size="large" bind:activeItem />
        <Select {selectModel} size="extra-large" bind:activeItem />
    </Flex>
    <Span color="secondary">{activeItem?.value}</Span>
</Flex>
