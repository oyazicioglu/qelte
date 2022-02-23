import type { FormValueType } from '../Form';

export interface IValidation {
	validate(value: FormValueType, name: string): IValidationError;
}

export interface IValidationResult {
	isValid: boolean;
	errors: IValidationError[];
	correctedValue?: string;
}

export interface IValidationError {
	isValid: boolean;
	message: string;
}
