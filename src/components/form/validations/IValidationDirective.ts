import type { IValidation } from './IValidation';
import type { IValidationArgs } from './ValidationDirective';

export interface IValidationDirective {
	validation(node: Node, args: IValidationArgs);
	createValidationsFromProps(props: { [index: string]: any }, ...initialValidations: IValidation[]): IValidation[];
}
