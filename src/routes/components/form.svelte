<script lang="ts">
    import Button from '../../components/button/button.svelte';
    import Checkbox from '../../components/checkbox/checkbox.svelte';
    import Divider from '../../components/divider/divider.svelte';
    import EmailInput from '../../components/email-input/email-input.svelte';
    import Flex from '../../components/flex/flex.svelte';
    import type { FormDataObject } from '../../components/form/Form';
    import Form from '../../components/form/form.svelte';
    import Select from '../../components/select/select.svelte';
    import { SelectModel } from '../../components/select/SelectModel.js';
    import Span from '../../components/span/span.svelte';
    import TextInput from '../../components/text-input/text-input.svelte';
    import Title from '../../components/title/title.svelte';
    import { createUId } from '../../components/utils/uid-creator.js';
    import Home from 'carbon-icons-svelte/lib/Home.svelte';

    let formData: FormDataObject[];
    let valid: boolean;

    const selectModel = new SelectModel([
        { active: false, id: createUId(), text: 'Item 1', value: 'Item 1 Value', icon: { Home } },
        { active: false, id: createUId(), text: 'Item 2', value: 'Item 2 Value', icon: { Home } },
        { active: true, id: createUId(), text: 'Item 3', value: 'Item 3 Value', icon: { Home } },
        { active: false, id: createUId(), text: 'Item 4', value: 'Item 4 Value', icon: { Home } },
    ]);
</script>

<Flex direction="column" gap="10">
    <Flex direction="column" gap="4">
        <Title>Form</Title>
        <Divider />
    </Flex>
    <Flex gap="10" direction="column" alignItems="flex-start">
        <Form bind:valid bind:formData style="width:400px">
            <TextInput required minlength="5" name="username" label="Username" />
            <EmailInput required label="Email" name="email" />
            <Select name="item-select" {selectModel} />
            <Checkbox name="select-me" text="Select me" />
            <Button disabled={!valid} submitButton type="flat" color="primary">Submit</Button>
        </Form>
        <Flex direction="column">
            <Title heading="5">Form Data</Title>
            <Divider class="mb-5" />
            {#if formData}
                {#each Object.entries(formData) as [key, value]}
                    <Flex direction="row" gap="2">
                        <Span color="primary">
                            {key} :
                        </Span>
                        <Span>{value}</Span>
                    </Flex>
                {/each}
            {/if}
        </Flex>
    </Flex>
</Flex>
