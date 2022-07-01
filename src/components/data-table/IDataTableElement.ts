import type { TableColumnElement } from './TableColumnElement';
import type { TableHeaderElement } from './TableHeaderElement';
import type { TableRowElement } from './TableRowElement';
import type { ElementJSON, HeaderType } from './types';

export interface IDataTableElement {
    get rows(): TableRowElement[];
    set rows(rows: TableRowElement[]);
    addRow(row: TableRowElement): void;
    removeRow(row: TableRowElement): boolean;
    rowsToJSON(): ElementJSON;
    rowsFromJSON(rows: Object[]): void;
    get columns(): TableColumnElement[];
    set columns(columns: TableColumnElement[]);
    columnsToJSON(): ElementJSON;
    columnsFromJSON(columns: Object[]): void;
    get headers(): TableHeaderElement[];
    set headers(headers: TableHeaderElement[]);
    headersToJSON(): ElementJSON;
    headersFromJSON(headers: HeaderType[]): void;
    addHeaderFromJSON(headers: HeaderType): void;
}
