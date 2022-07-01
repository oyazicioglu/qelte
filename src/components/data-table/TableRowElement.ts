import type { ITableCompositeElement } from './ITableCompositElement';
import { TableElement } from './TableElement';
import type { RowType, ValueTypes } from './types';

class TableRowElement extends TableElement implements ITableCompositeElement {
    constructor(_key: string | number, _value: ValueTypes) {
        super(_key, _value);
    }

    toJSON(): RowType[] {
        return this.items.map((item) => {
            return {
                key: item.key,
                value: item.value,
            };
        });
    }
}

export { TableRowElement };
