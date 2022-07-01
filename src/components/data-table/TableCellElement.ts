import type { IValueObject } from './IValueObject';
import { TableElement } from './TableElement';
import type { ValueTypes } from './types';

class TableCell extends TableElement implements IValueObject {
    constructor(_key: string | number, _value: ValueTypes) {
        super(_key, _value);
    }

    toJSON(): Object {
        return {
            key: this.key,
            value: this.value,
        };
    }
}

export { TableCell };
