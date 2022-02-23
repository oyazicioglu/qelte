<script lang="ts">
	import Divider from '../../components/divider/divider.svelte';
	import EmailInput from '../../components/email-input/email-input.svelte';
	import Flex from '../../components/flex/flex.svelte';
	import Form from '../../components/form/form.svelte';
	import { EmailValidation } from '../../components/form/validations/EmailValidation';
	import NumberInput from '../../components/number-input/number-input.svelte';
	import PasswordInput from '../../components/password-input/password-input.svelte';
	import SearchInput from '../../components/search-input/search-input.svelte';
	import TextInput from '../../components/text-input/text-input.svelte';
	import Title from '../../components/title/title.svelte';
</script>

<Flex direction="column" gap="10">
	<Flex direction="column" gap="4">
		<Title>Form Inputs</Title>
		<Divider />
	</Flex>
	<Flex gap="10" direction="column">
		<Flex direction="column" gap="3">
			<Title heading="6">Email Input</Title>
			<Flex direction="row" gap="5">
				<EmailInput style="width: 200px" minlength="5" maxlength="25" preIcon="at" placeholder="Email" name="email" />
				<EmailInput style="width: 200px" preIcon="at" label="Email" name="email" />
				<EmailInput style="width: 200px" hint="Enter your email adress" preIcon="at" label="Email" name="email" />
			</Flex>
		</Flex>

		<Flex direction="column" gap="3">
			<Title heading="6">Text Input</Title>
			<Flex direction="row" gap="5">
				<Form>
					<TextInput validations={[new EmailValidation()]} style="width: 200px" name="username-1" required />
					<TextInput style="width: 200px" name="username-2" label="Username" required />
					<TextInput
						name="username-3"
						style="width: 200px"
						hint="Enter your username"
						label="Username"
						preIcon="user"
						minlength="10"
						maxlength="30"
						required />
				</Form>
			</Flex>
		</Flex>

		<Flex direction="column" gap="3">
			<Title heading="6">Search Input</Title>
			<Flex direction="row" gap="5">
				<SearchInput style="width: 200px" name="Search" required />
				<SearchInput style="width: 200px" label="Search" preIcon="search" minlength="10" maxlength="30" required />
				<SearchInput
					style="width: 200px"
					hint="Search in site"
					label="Search"
					preIcon="search"
					minlength="10"
					maxlength="30"
					required />
			</Flex>
		</Flex>

		<Flex direction="column" gap="3">
			<Title heading="6">Password Input</Title>
			<Flex direction="row" gap="5">
				<PasswordInput style="width: 200px" name="Password" required />
				<PasswordInput style="width: 200px" name="Password" label="Password" required />
				<PasswordInput
					style="width: 200px"
					hint="Enter your password"
					name="Password"
					label="Password"
					minlength="10"
					maxlength="40"
					required />
			</Flex>
		</Flex>

		<Flex direction="column" gap="3">
			<Title heading="6">Number Input</Title>
			<Flex direction="row" gap="5">
				<NumberInput name="Amount" min="1" max="10" required />
				<NumberInput name="Amount" label="Amount" min="0" max="3" required />
				<NumberInput hint="Enter product amount" label="Amount" preIcon="lira-sign" min="10" max="12" required />
				<NumberInput disabled name="Amount" min="1" max="10" required />
			</Flex>
		</Flex>

		<Flex direction="column" gap="3">
			<Title heading="6">Sizes</Title>
			<Flex direction="row" gap="5" alignItems="flex-end">
				<TextInput label="Extra Small" size="extra-small" name="Username" />
				<TextInput label="Small" size="small" name="Username" />
				<TextInput label="Default" name="Username" />
				<TextInput label="Large" size="large" name="Username" />
				<TextInput label="Extra Large" size="extra-large" name="Username" />
			</Flex>
		</Flex>
	</Flex>
</Flex>
