import { BaseTableElement } from './BaseTableElement';
import type { ValueTypes } from './types';

class TableElement extends BaseTableElement {
    private _items: TableElement[] = [];

    constructor(_key: string | number, _value: ValueTypes) {
        super(_key, _value);
    }

    get items() {
        return this._items;
    }

    set items(items: TableElement[]) {
        this._items = items;
    }

    add(element: TableElement) {
        this._items.push(element);
    }

    remove(element: TableElement): boolean {
        const foundItem = this._items.find((item) => item === element);
        if (!foundItem) {
            return false;
        }

        const otherItems = this._items.filter((item) => item !== element);
        this.items = otherItems;
        return true;
    }

    list(): TableElement[] {
        return this._items;
    }
}

export { TableElement };
