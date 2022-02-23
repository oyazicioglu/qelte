import type { IValidation } from './IValidation';

export class MaxLengthValidation implements IValidation {
	#maxLength: number;
	constructor(maxLength: number) {
		this.#maxLength = maxLength;
	}

	validate(value: string, name: string) {
		const isValid = !!value && value.toString().length <= this.#maxLength;
		return {
			isValid,
			message: `${name} must be less then ${this.#maxLength} characters long.`,
		};
	}

	getLength() {
		return this.#maxLength;
	}
}
