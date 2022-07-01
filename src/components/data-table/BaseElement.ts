import type { CellType, ValueTypes } from './types';

class BaseTableElement {
    constructor(private _key: string | number, private _value: ValueTypes) {}

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
}

export { BaseTableElement };
