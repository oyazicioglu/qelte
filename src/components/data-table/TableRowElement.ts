import { createUId } from '../utils/uid-creator';
import type { IHasKey } from './IHasKey';
import { TableCompositeElement } from './TableCompositeElement';
import type { CellType } from './types';
class TableRowElement extends TableCompositeElement implements IHasKey {
    private _key: string | number = createUId();
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

export { TableRowElement };
