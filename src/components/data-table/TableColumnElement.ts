import type { ITableCompositeElement } from './ITableCompositElement';
import { TableElement } from './TableElement';
import type { ValueTypes } from './types';

class TableColumnElement extends TableElement implements ITableCompositeElement {
    constructor(_key: string | number, _value: ValueTypes) {
        super(_key, _value);
    }
}

export { TableColumnElement };
