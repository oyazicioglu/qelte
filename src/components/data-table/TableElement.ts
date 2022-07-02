import { BaseTableElement } from './BaseTableElement';
import type { ITableCompositeElement } from './ITableCompositElement';
import type { TableCellElement } from './TableCellElement';
import type { ValueTypes } from './types';

class TableElement {
    private _items: TableElement[] = [];

    constructor(_key: string | number, _value: ValueTypes) {}

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
