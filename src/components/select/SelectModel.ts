export interface ISelectItem {
    id: string;
    active: boolean;
    value?: string;
    component?: any;
    text?: string;
    icon?: any;
}

export class SelectModel {
    private _items: ISelectItem[];
    private _activeItem: ISelectItem;

    constructor(items: ISelectItem[] = []) {
        this.items = items;
        this.activeItem = this.findActiveItem();
    }

    set items(items: ISelectItem[]) {
        this._items = items;
        console.log(this._items);
    }

    get items() {
        return this._items;
    }

    get activeItem() {
        return this._activeItem;
    }

    addItem(item: ISelectItem) {
        if (item.active) {
            this.activeItem = item;
        }

        this._items.push(item);
    }

    findActiveItem() {
        return this.items.find((i) => i.active);
    }

    set activeItem(item: ISelectItem) {
        const itemIndex = this.getItemIndex(item);
        if (itemIndex !== -1) {
            if (this.activeItem) {
                this.activeItem.active = false;
            }

            item.active = true;
            this._activeItem = item;
            this.items[itemIndex] = item;
        }
    }

    private getItemIndex(item: ISelectItem) {
        return this.items.indexOf(item);
    }
}
