import type { IValidation } from './IValidation';

export class MinValueValidation implements IValidation {
	#min: number;
	constructor(min: number) {
		this.#min = min;
	}

	validate(value: number, name: string) {
		const isValid = value !== undefined && value >= this.#min;
		return {
			isValid,
			message: `${name} must be higher then ${this.#min}.`,
			correctedValue: this.#min.toString(),
		};
	}

	getValue() {
		return this.#min;
	}
}
