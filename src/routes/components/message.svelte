<script>
	import Button from '../../components/button/button.svelte';
	import Divider from '../../components/divider/divider.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Message from '../../components/message/message.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Spinner</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column" alignItems="flex-start">
		<Flex direction="column" gap="5">
			<Message
				size="extra-small"
				color="default"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />

			<Message
				size="small"
				showCloseButton={false}
				color="default"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />

			<Message
				showCloseButton={false}
				color="default"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!">
				<Flex class="p-4">
					<Button color="accent" type="stroked">details</Button>
				</Flex>
			</Message>

			<Message
				size="large"
				color="default"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />

			<Message
				color="primary"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />
			<Message
				color="accent"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />
			<Message
				color="danger"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />
			<Message
				color="info"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />

			<Message
				color="warning"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />

			<Message
				color="success"
				title="Message Title"
				message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, dolorem fugit error magnam, rem ratione officia impedit sapiente consequatur, officiis quisquam saepe. Sunt cumque neque perspiciatis maxime blanditiis. Dolore!" />
		</Flex>
	</Flex>
</Flex>
