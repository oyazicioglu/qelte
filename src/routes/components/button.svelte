<script>
	import Button from '../../components/button/button.svelte';
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Icon from '../../components/icon/icon.svelte';
	import Span from '../../components/span/span.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Button</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex gap="4">
			<Button>Default</Button>
			<Button color="primary">Primary</Button>
			<Button color="accent">Accent</Button>
			<Button color="danger">Danger</Button>
			<Button color="info">Info</Button>
			<Button color="success">Success</Button>
			<Button color="warning">Warning</Button>
			<Button disabled>Disabled</Button>
		</Flex>
		<Flex gap="4">
			<Button type="flat">Default</Button>
			<Button type="flat" color="primary">Primary</Button>
			<Button type="flat" color="accent">Accent</Button>
			<Button type="flat" color="danger">Danger</Button>
			<Button type="flat" color="info">Info</Button>
			<Button type="flat" color="success">Success</Button>
			<Button type="flat" color="warning">Warning</Button>
			<Button type="flat" disabled>Disabled</Button>
		</Flex>
		<Flex gap="4">
			<Button rounded type="flat">Default</Button>
			<Button rounded type="flat" color="primary">Primary</Button>
			<Button rounded type="flat" color="accent">Accent</Button>
			<Button rounded type="flat" color="danger">Danger</Button>
			<Button rounded type="flat" color="info">Info</Button>
			<Button rounded type="flat" color="success">Success</Button>
			<Button rounded type="flat" color="warning">Warning</Button>
			<Button rounded type="flat" disabled>Disabled</Button>
		</Flex>
		<Flex gap="4">
			<Button type="raised">Default</Button>
			<Button type="raised" color="primary">Primary</Button>
			<Button type="raised" color="accent">Accent</Button>
			<Button type="raised" color="danger">Danger</Button>
			<Button type="raised" color="info">Info</Button>
			<Button type="raised" color="success">Success</Button>
			<Button type="raised" color="warning">Warning</Button>
			<Button type="raised" disabled>Disabled</Button>
		</Flex>
		<Flex gap="4">
			<Button type="stroked">Default</Button>
			<Button type="stroked" color="primary">Primary</Button>
			<Button type="stroked" color="accent">Accent</Button>
			<Button type="stroked" color="danger">Danger</Button>
			<Button type="stroked" color="info">Info</Button>
			<Button type="stroked" color="success">Success</Button>
			<Button type="stroked" color="warning">Warning</Button>
			<Button type="stroked" disabled>Disabled</Button>
		</Flex>

		<Flex gap="4" alignItems="baseline">
			<Button type="flat" size="extra-small">Extra Small</Button>
			<Button type="flat" size="small">Small</Button>
			<Button type="flat" size="default">Default</Button>
			<Button type="flat" size="large">Large</Button>
			<Button type="flat" size="extra-large">Extra Large</Button>
		</Flex>

		<Flex gap="4" alignItems="baseline">
			<Button gap="2" type="flat" size="extra-small"
				><Icon size="extra-small" iconName="bell" /><Span size="extra-small">Extra Small</Span></Button>
			<Button gap="2" type="flat" size="small"><Icon size="small" iconName="bell" /><Span size="small">Small</Span></Button>
			<Button gap="2" type="flat" size="default"><Icon size="default" iconName="bell" /><Span size="default">Default</Span></Button>
			<Button gap="2" type="flat" size="large"><Icon size="large" iconName="bell" /><Span size="large">Large</Span></Button>
			<Button gap="2" type="flat" size="extra-large"
				><Icon size="extra-large" iconName="bell" /><Span size="extra-large">Extra Large</Span></Button>
		</Flex>

		<Flex gap="4">
			<Button waiting>Default</Button>
			<Button waiting color="primary">Primary</Button>
			<Button waiting color="accent">Accent</Button>
			<Button waiting color="danger">Danger</Button>
			<Button waiting color="info">Info</Button>
			<Button waiting color="success">Success</Button>
			<Button waiting color="warning">Warning</Button>
			<Button waiting disabled>Disabled</Button>
		</Flex>
	</Flex>
</Flex>
