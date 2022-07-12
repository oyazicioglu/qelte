import type { SvelteComponent } from 'svelte';

export interface IListItem {
    id: string;
    active: boolean;
    value?: string;
    component?: any;
    text?: string;
    icon?: any;
    closeOnClick?: boolean;
}

export interface IListModel {
    set items(items: IListItem[]);
    get items(): IListItem[];
    get activeItem(): IListItem;
    set activeItem(item: IListItem);
    addItem(item: IListItem): void;
    findActiveItem(): IListItem;
}

export class ListModel implements IListModel {
    private _items: IListItem[];
    private _activeItem: IListItem;

    constructor(items: IListItem[] = []) {
        this.items = items;
        this.activeItem = this.findActiveItem();
    }

    set items(items: IListItem[]) {
        this._items = items;
    }

    get items() {
        return this._items;
    }

    get activeItem() {
        return this._activeItem;
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

    set activeItem(item: IListItem) {
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

    private getItemIndex(item: IListItem) {
        return this.items.indexOf(item);
    }
}
