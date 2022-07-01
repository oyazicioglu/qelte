<script lang="ts">
    import Divider from '../components/divider/divider.svelte';
    import Flex from '../components/flex/flex.svelte';
    import Link from '../components/link/link.svelte';
    import Paper from '../components/paper/paper.svelte';
    import Theme from '../components/theme/theme.svelte';
    import Title from '../components/title/title.svelte';
    import { stores } from '@sapper/app';
    import Preloader from '../components/preloader/preloader.svelte';

    export let segment: string;
    segment = 'segment';

    const { preloading } = stores();
</script>

<Theme theme="dark" />
{#if $preloading}
    <Preloader size="large" fixed />
{:else}
    <main>
        <div class="container">
            <Paper padding="10" style="height:100%">
                <div class="component-list">
                    <ul>
                        <li class="mt-4">
                            <Flex direction="column">
                                <Title color="secondary" heading="6">Layout</Title>
                                <Divider />
                            </Flex>
                        </li>
                        <li><Link href="/components/layout">Comuns</Link></li>
                        <li />

                        <li class="mt-4">
                            <Flex direction="column">
                                <Title color="secondary" heading="6">Containers</Title>
                                <Divider />
                            </Flex>
                        </li>
                        <li><Link href="/components/paper">Paper</Link></li>
                        <li><Link href="/components/tab">Tab View</Link></li>
                        <li><Link href="/components/list">List</Link></li>
                        <li />
                        <li class="mt-4">
                            <Flex direction="column">
                                <Title color="secondary" heading="6">Form Elements</Title>
                                <Divider />
                            </Flex>
                        </li>
                        <li><Link href="/components/form">Form</Link></li>
                        <li><Link href="/components/inputs">Inputs</Link></li>
                        <li><Link href="/components/select">Select</Link></li>
                        <li><Link href="/components/checkbox">Checkbox</Link></li>
                        <li />

                        <li><Link href="/components/button">Button</Link></li>
                        <li><Link href="/components/icon">Icon</Link></li>
                        <li><Link href="/components/icon-button">Icon Button</Link></li>
                        <li><Link href="/components/span">Span</Link></li>
                        <li><Link href="/components/title">Title</Link></li>
                        <li><Link href="/components/combobox">Combo Box</Link></li>
                        <li><Link href="/components/link">Link</Link></li>
                        <li><Link href="/components/spinner">Spinner</Link></li>
                        <li><Link href="/components/preloader">Preloader</Link></li>
                        <li><Link href="/components/progressbar">Progress Bars</Link></li>
                        <li><Link href="/components/menu">Dropdown Menu</Link></li>
                        <li><Link href="/components/message">Message</Link></li>
                        <li><Link href="/components/notification">Notification</Link></li>
                    </ul>
                </div>
            </Paper>
            <div class="component-content"><slot /></div>
        </div>
    </main>
{/if}

<style lang="scss" global>
    @import '../styles.scss';

    .container {
        position: relative;
        display: grid;
        width: 100%;
        min-height: 100vh;
        grid-template-columns: auto 1fr;
        box-sizing: border-box;

        .component-content {
            padding: 20px;
        }
        .component-list {
            min-width: 200px;
        }

        .component-list ul {
            padding: 0;
            margin: 0;

            li {
                padding: 6px 0px;
                margin: 0;
                text-decoration: none;
                list-style-type: none;
            }
        }
    }
</style>
