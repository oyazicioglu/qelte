import type { TableHeaderElement } from './TableHeaderElement';
import type { TableRowElement } from './TableRowElement';

export type ValueTypes = string | number | Array | Date | undefined | null;

export type HeaderType = {
    key: string | number;
    value: ValueTypes;
    sortable?: boolean;
    align?: 'left' | 'right' | 'center';
};

export type ColumnType = {
    key: string | number;
    value: ValueTypes;
};

export type RowType = {
    key: string | number;
    value: ValueTypes;
};

export type CellType = {
    key: string | number;
    value: ValueTypes;
};

export type ElementJSON = {
    [key: string | number, value: string];
};

export interface ITableData {
    rows: RowType[];
    headers: HeaderType[];
    columns?: ColumnType[];
}
