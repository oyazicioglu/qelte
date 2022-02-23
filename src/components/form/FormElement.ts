import type { FormElementType } from '../types';
import type { FormValueType } from './Form';
import type { IFormElement } from './IFormElement';
import type { IValidation, IValidationError, IValidationResult } from './validations/IValidation';

export class FormElement implements IFormElement {
	private ref: HTMLElement;
	private type: FormElementType;
	private name: string;
	private value: FormValueType;
	private validations: IValidation[];
	private valid: boolean;

	constructor(
		ref: HTMLInputElement | HTMLElement,
		type: FormElementType,
		name: string,
		value: FormValueType,
		validations: IValidation[]
	) {
		this.ref = ref;
		this.type = type;
		this.name = name;
		this.value = value;
		this.validations = validations;
		this.valid = false;
	}

	setValue(value: FormValueType) {
		this.value = value;
		this.valid = this.runValidations();
	}

	getValue() {
		return this.value;
	}

	isValid() {
		this.valid = this.runValidations();
		return this.valid;
	}

	getRef() {
		return this.ref;
	}

	getType() {
		return this.type;
	}

	getValidations() {
		return this.validations;
	}

	getName() {
		return this.name;
	}

	private runValidations() {
		return this.validations.every((validator) => {
			const result = validator.validate(this.value, this.name);
			return result.isValid;
		});
	}

	validationResult(): IValidationResult {
		this.runValidations();

		const validationErrors: IValidationError[] = [];
		this.validations.map((validator) => {
			const validatorResult = validator.validate(this.value, this.name);
			if (!validatorResult.isValid) {
				validationErrors.push(validatorResult);
			}
		});

		return {
			isValid: this.runValidations(),
			errors: validationErrors,
		};
	}
}
