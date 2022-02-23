import { MaxLengthValidation } from './MaxLengthValidation';
import { MaxValueValidation } from './MaxValueValidation';
import { MinLengthValidation } from './MinLengthValidation';
import { MinValueValidation } from './MinValueValidation';
import { RequiredValidation } from './RequiredValidation';
import type { IFormElement } from '../IFormElement';
import type { IValidation, IValidationResult } from './IValidation';

export type IValidationArgs = {
	element: IFormElement;
	loaded: boolean;
};

export class ValidationDirective {
	createValidationsFromProps(props: { [index: string]: any }, ...initialValidations: IValidation[]): IValidation[] {
		const validations = initialValidations;

		if (props.required) {
			validations.push(new RequiredValidation());
		}

		if (props.minlength) {
			validations.push(new MinLengthValidation(props.minlength));
		}

		if (props.maxlength) {
			validations.push(new MaxLengthValidation(props.maxlength));
		}

		if (props.max) {
			validations.push(new MaxValueValidation(props.max));
		}

		if (props.min) {
			validations.push(new MinValueValidation(props.min));
		}

		return validations;
	}

	validation(node: Node, args: IValidationArgs) {
		if (!args.loaded) {
			return;
		}

		let result: IValidationResult = undefined;

		const validate = (element: IFormElement) => {
			result = element.validationResult();
			node.dispatchEvent(new CustomEvent('validate', { detail: { element: args.element, ...result } }));
		};

		validate(args.element);

		return {
			result,
			update(updateArgs: IValidationArgs) {
				args = updateArgs;
			},
			destroy() {},
		};
	}
}
