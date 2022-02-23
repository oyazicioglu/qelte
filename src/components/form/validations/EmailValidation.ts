import type { IValidation } from './IValidation';

export class EmailValidation implements IValidation {
	validate(value: string, name: string) {
		const isValid =
			!!value &&
			!!value.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);

		return {
			isValid: isValid,
			message: isValid ? undefined : `${name} is not a valid email address.`,
		};
	}
}
