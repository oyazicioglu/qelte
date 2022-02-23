import type { IValidation } from './IValidation';

export class MinLengthValidation implements IValidation {
	#minLength: number;
	constructor(minLength: number) {
		this.#minLength = minLength;
	}

	validate(value: string, name: string) {
		const isValid = !!value && value.length >= this.#minLength;

		return {
			isValid,
			message: `${name} must be at least ${this.#minLength} characters long.`,
		};
	}

	getLength() {
		return this.#minLength;
	}
}
