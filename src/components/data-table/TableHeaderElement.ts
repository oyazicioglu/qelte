import type { IHasKey } from './IHasKey';
import type { IHasValue } from './IHasValue';
import { TableCompositeElement } from './TableCompositeElement';
import type { CellType } from './types';

type HeaderAlign = 'left' | 'center' | 'right';

class TableHeaderElement extends TableCompositeElement implements IHasKey, IHasValue {
    constructor(
        private _key: string | number,
        private _value: string,
        private _align: HeaderAlign = 'left',
        private _sortable: boolean = true,
        private _width: string = 'auto'
    ) {
        super();
    }
    get value(): string {
        return this._value;
    }
    set value(value: string) {
        this._value = value;
    }

    get key(): string | number {
        return this._key;
    }
    set key(key: string | number) {
        this._key = key;
    }

    get align(): HeaderAlign {
        return this._align;
    }

    set align(align: HeaderAlign) {
        this._align = align;
    }

    get sortable(): boolean {
        return this._sortable;
    }

    set sortable(sortable: boolean) {
        this._sortable = sortable;
    }

    get width(): string {
        return this._width;
    }

    set width(width: string) {
        this._width = width;
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
