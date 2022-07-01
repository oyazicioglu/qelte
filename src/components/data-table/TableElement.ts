import type { IValueObject } from './IValueObject';
import type { ValueTypes } from './types';

class TableElement {
    private _items: TableElement[] = [];

    constructor(private _key: string | number, private _value: ValueTypes) {}

    get items() {
        return this._items;
    }

    set items(items: TableElement[]) {
        this._items = items;
    }

    set value(value: ValueTypes) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    get key() {
        return this._key;
    }

    set key(key: string | number) {
        this._key = key;
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
