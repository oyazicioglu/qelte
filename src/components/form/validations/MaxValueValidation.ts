import type { IValidation } from './IValidation';

export class MaxValueValidation implements IValidation {
	#max: number;
	constructor(max: number) {
		this.#max = max;
	}

	validate(value: number, name: string) {
		const isValid = value !== undefined && value <= this.#max;
		return {
			isValid,
			message: `${name} must be less then ${this.#max}.`,
			correctedValue: this.#max.toString(),
		};
	}

	getValue() {
		return this.#max;
	}
}
