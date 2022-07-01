import type { TableColumnElement } from './TableColumnElement';
import type { TableHeaderElement } from './TableHeaderElement';
import type { TableRowElement } from './TableRowElement';

export interface IDataTableElement {
    addRow(row: TableRowElement): void;
    removeRow(row: TableRowElement): boolean;
    get rows(): TableRowElement[];
    set rows(rows: TableRowElement[]);
    rowsToJSON(): Object[];
    rowsFromJSON(rows: Object[]): void;
    get columns(): TableColumnElement[];
    set columns(columns: TableColumnElement[]);
    columnsToJSON(): Object[];
    columnsFromJSON(columns: Object[]): void;
    get headers(): TableHeaderElement[];
    set headers(headers: TableHeaderElement[]);
    headersToJSON(): Object[];
    headersFromJSON(headers: Object[]): void;
}
