import type { ITableCompositeElement } from './ITableCompositElement';
import { TableElement } from './TableElement';
import type { CellType, HeaderType, ValueTypes } from './types';

class TableHeaderElement extends TableElement implements ITableCompositeElement {
    constructor(_key: string | number, _value: ValueTypes) {
        super(_key, _value);
    }

    toJSON(): CellType[] {
        return this.items.map((item) => {
            return {
                key: item.key,
                value: item.value,
            };
        });
    }
}

export { TableHeaderElement };