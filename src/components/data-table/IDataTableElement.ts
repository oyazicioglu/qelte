import type { TableColumnElement } from './TableColumnElement';
import type { TableHeaderElement } from './TableHeaderElement';
import type { TableRowElement } from './TableRowElement';
import type { CellType, HeaderType } from './types';

export interface IDataTableElement {
    get rows(): TableRowElement[];
    set rows(rows: TableRowElement[]);
    addRow(row: TableRowElement): void;
    removeRow(row: TableRowElement): boolean;
    rowsToJSON(): Object[];
    rowsFromJSON(rows: Object[]): void;
    get columns(): TableColumnElement[];
    set columns(columns: TableColumnElement[]);
    columnsToJSON(): Object[];
    columnsFromJSON(columns: Object[]): void;
    get headers(): TableHeaderElement[];
    set headers(headers: TableHeaderElement[]);
    headersToJSON(): CellType[][];
    headersFromJSON(headers: HeaderType[]): void;
    addHeaderFromJSON(headers: HeaderType): void;
}
