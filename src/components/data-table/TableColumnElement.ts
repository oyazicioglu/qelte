import type { IHasKey } from './IHasKey';
import type { ITableCompositeElement } from './ITableCompositElement';
import { TableCompositeElement } from './TableCompositeElement';
import { TableElement } from './TableElement';
import type { CellType, ValueTypes } from './types';

class TableColumnElement extends TableCompositeElement implements IHasKey {
    private _key: string | number;

    constructor() {
        super();
    }

    get key(): string | number {
        return this._key;
    }
    set key(key: string | number) {
        this._key = key;
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

export { TableColumnElement };
