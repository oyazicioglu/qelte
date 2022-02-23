import type { IFormElement } from './IFormElement';
import { ValidationDirective } from './validations/ValidationDirective';

export type FormValueType = string | string[] | number | number[] | boolean;

export type FormDataObject = Record<string, FormValueType>;

export class Form {
	private elements: IFormElement[];
	private inputValidation = new ValidationDirective();
	private valid = false;

	constructor(elements: IFormElement[] = []) {
		this.elements = elements;
	}

	registerElement(element: IFormElement) {
		this.elements.push(element);
	}

	updateElement = (element: IFormElement) => {
		const foundElement = this.elements.find((e) => e.getRef() === element.getRef());
		const indexOf = this.elements.indexOf(foundElement);

		if (indexOf !== -1) {
			this.elements[indexOf] = element;
		}
	};

	hasInvalidInput() {
		const invalidInputs = this.elements.find((e) => e.isValid() === false);
		return !invalidInputs;
	}

	isValid() {
		this.checkFormValidation();
		return this.valid;
	}

	private checkFormValidation() {
		this.valid = this.elements.every((element) => {
			return element.isValid();
		});
	}

	validateAll = () => {
		this.elements.forEach((element) => {
			this.inputValidation.validation(element.getRef(), { element, loaded: true });
		});
	};

	getFormData() {
		let formData: FormDataObject = {};
		this.elements.forEach((element) => {
			formData[element.getName()] = element.getValue();
		});

		return formData;
	}
}
