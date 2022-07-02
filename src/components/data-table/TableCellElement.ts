import { BaseTableElement } from './BaseTableElement';
import type { CellType, ValueTypes } from './types';

class TableCellElement extends BaseTableElement {
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

export { TableCellElement };
