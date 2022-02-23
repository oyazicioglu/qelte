import type { IValidation } from './IValidation';

export class RequiredValidation implements IValidation {
	constructor() {}

	validate(value: string, name: string) {
		const isValid = value !== undefined && value !== '' && value !== null;

		return {
			isValid,
			message: `${name} is required.`,
		};
	}
}
