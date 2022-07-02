import type { IHasKey } from './IHasKey';
import type { IHasValue } from './IHasValue';
import type { ValueTypes } from './types';

class TableElement implements IHasKey, IHasValue {
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

export { TableElement };
