<script lang="ts">
	import { createUId } from '../utils/uid-creator.js';
	import PasswordInput from '../password-input/password-input.svelte';
	import type { IValidation, IValidationsResult } from '../form/validations/IValidation.js';

	export let password = '';
	export let passwordConfirm = '';
	export let isPasswordValid = false;
	export let isPasswordConfirmValid = false;
	export let validations: IValidation[] = [];
	export let fullWidth = true;
	export let preIcon = '';

	let confirmValidationResult: IValidationsResult;

	const confirmationError = { isValid: true, message: 'Şifre ile Şifre Tekrarı uyuşmuyor.' };
	const id = createUId();

	$: {
		if (!confirmValidationResult) {
			confirmValidationResult = { isValid: true, errors: [], name: 'Şifre Tekrarı' };
		}

		if (password !== passwordConfirm) {
			const foundError = confirmValidationResult.errors.find((e) => e.message === confirmationError.message);
			if (!foundError) {
				confirmValidationResult.isValid = false;
				confirmValidationResult.errors.push({ isValid: false, message: 'Şifre ile Şifre Tekrarı uyuşmuyor.' });
			}
		}
	}
</script>

<PasswordInput name="Şifre" bind:valid={isPasswordValid} bind:value={password} {fullWidth} {validations} {preIcon} label="Şifre" />

<PasswordInput
	bind:validationsResult={confirmValidationResult}
	name="Şifre Tekrarı"
	bind:valid={isPasswordConfirmValid}
	bind:value={passwordConfirm}
	{validations}
	{preIcon}
	{fullWidth}
	label="Şifre Tekrarı" />
