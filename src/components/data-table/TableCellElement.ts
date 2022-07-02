import { TableElement } from './TableElement';
import type { CellType, ValueTypes } from './types';

class TableCellElement extends TableElement {
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
