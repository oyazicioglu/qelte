export interface IComboItem {
	id: string;
	active: boolean;
	value?: string;
	component?: any;
	text?: string;
	iconName?: string;
}

export interface IComboModel {
	setItems(items: IComboItem[]): void;
	getItems(): IComboItem[];
	getAciveItem(): IComboItem;
	addItem(item: IComboItem): void;
	findActiveItem(): IComboItem;
	setActiveItem(item: IComboItem): void;
}

export class ComboModel implements IComboModel {
	private items: IComboItem[];
	private activeItem: IComboItem;

	constructor(items: IComboItem[] = []) {
		this.items = items;
		this.setActiveItem(this.findActiveItem());
	}

	setItems(items: IComboItem[]) {
		this.items = items;
	}

	getItems() {
		return this.items;
	}

	getAciveItem() {
		return this.activeItem;
	}

	addItem(item: IComboItem) {
		if (item.active) {
			this.activeItem = item;
		}

		this.items.push(item);
	}

	findActiveItem() {
		return this.items.find((i) => i.active);
	}

	setActiveItem(item: IComboItem) {
		const itemIndex = this.getItemIndex(item);
		if (itemIndex !== -1) {
			if (this.activeItem) {
				this.activeItem.active = false;
			}

			item.active = true;
			this.activeItem = item;
			this.items[itemIndex] = item;
		}
	}

	private getItemIndex(item: IComboItem) {
		return this.items.indexOf(item);
	}
}
