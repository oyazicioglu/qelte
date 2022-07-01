import type { IValueObject } from './IValueObject';
import { TableElement } from './TableElement';
import type { CellType, ValueTypes } from './types';

class TableCell {
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

    toJSON(): CellType {
        return {
            key: this.key,
            value: this.value,
        };
    }
}

export { TableCell };
