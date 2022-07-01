import { BaseTableElement } from './BaseElement';
import type { CellType, ValueTypes } from './types';

class TableCell extends BaseTableElement {
    constructor(key: string | number, value: ValueTypes) {
        super(key, value);
    }

    toJSON(): CellType {
        return {
            key: this.key,
            value: this.value,
        };
    }
}

export { TableCell };
