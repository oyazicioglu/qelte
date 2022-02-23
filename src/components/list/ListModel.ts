export interface IListItem {
	id: string;
	active: boolean;
	value?: string;
	component?: any;
	text?: string;
	iconName?: string;
}

export interface IListModel {
	setItems(items: IListItem[]): void;
	getItems(): IListItem[];
	getAciveItem(): IListItem;
	addItem(item: IListItem): void;
	findActiveItem(): IListItem;
	setActiveItem(item: IListItem): void;
}

export class ListModel implements IListModel {
	private items: IListItem[];
	private activeItem: IListItem;

	constructor(items: IListItem[] = []) {
		this.items = items;
		this.setActiveItem(this.findActiveItem());
	}

	setItems(items: IListItem[]) {
		this.items = items;
	}

	getItems() {
		return this.items;
	}

	getAciveItem() {
		return this.activeItem;
	}

	addItem(item: IListItem) {
		if (item.active) {
			this.activeItem = item;
		}

		this.items.push(item);
	}

	findActiveItem() {
		return this.items.find((i) => i.active);
	}

	setActiveItem(item: IListItem) {
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

	private getItemIndex(item: IListItem) {
		return this.items.indexOf(item);
	}
}
