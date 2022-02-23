<script>
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';

	import Column from '../../components/layout/column.svelte';
	import Row from '../../components/layout/row.svelte';
	import Paper from '../../components/paper/paper.svelte';
	import Span from '../../components/span/span.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Coumns</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Row>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper color="accent" padding="10">
					<Span>Column 1</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper padding="10">
					<Span>Column 2</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper color="accent" padding="10">
					<Span>Column 3</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper padding="10">
					<Span>Column 4</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper color="accent" padding="10">
					<Span>Column 5</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper padding="10">
					<Span>Column 6</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper color="accent" padding="10">
					<Span>Column 7</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper padding="10">
					<Span>Column 8</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper color="accent" padding="10">
					<Span>Column 9</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper padding="10">
					<Span>Column 10</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper color="accent" padding="10">
					<Span>Column 11</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="4" large="2" extraLarge="1">
				<Paper padding="10">
					<Span>Column 12</Span>
				</Paper>
			</Column>
		</Row>

		<Row>
			<Column extraSmall="12" small="12" medium="6" large="2" extraLarge="3">
				<Paper color="accent" padding="10">
					<Span>Column 1</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="2" large="3" extraLarge="3">
				<Paper padding="10">
					<Span>Column 2</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="2" large="5" extraLarge="3">
				<Paper color="accent" padding="10">
					<Span>Column 3</Span>
				</Paper>
			</Column>
			<Column extraSmall="12" small="12" medium="2" large="2" extraLarge="3">
				<Paper padding="10">
					<Span>Column 4</Span>
				</Paper>
			</Column>
		</Row>
	</Flex>
</Flex>
