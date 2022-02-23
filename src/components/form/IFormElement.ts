import type { FormElementType } from '../types';
import type { FormValueType } from './Form';
import type { IValidation, IValidationResult } from './validations/IValidation';

export interface IFormElement {
	setValue(value: FormValueType): void;
	getValue(): FormValueType;
	isValid(): boolean;
	getRef(): HTMLElement;
	getType(): FormElementType;
	getValidations(): IValidation[];
	getName(): string;
	validationResult(): IValidationResult;
}
