export interface ISelectItem {
    id: string;
    active: boolean;
    value?: string;
    component?: any;
    text?: string;
    icon?: any;
}

export class SelectModel {
    private items: ISelectItem[];
    private activeItem: ISelectItem;

    constructor(items: ISelectItem[] = []) {
        this.items = items;
        this.setActiveItem(this.findActiveItem());
    }

    setItems(items: ISelectItem[]) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    getAciveItem() {
        return this.activeItem;
    }

    addItem(item: ISelectItem) {
        if (item.active) {
            this.activeItem = item;
        }

        this.items.push(item);
    }

    findActiveItem() {
        return this.items.find((i) => i.active);
    }

    setActiveItem(item: ISelectItem) {
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

    private getItemIndex(item: ISelectItem) {
        return this.items.indexOf(item);
    }
}
