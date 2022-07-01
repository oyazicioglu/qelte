import type { IDataTableElement } from './IDataTableElement';
import type { TableColumnElement } from './TableColumnElement';
import type { TableHeaderElement } from './TableHeaderElement';
import type { TableRowElement } from './TableRowElement';

class DataTableElement implements IDataTableElement {
    constructor(
        private _rows: TableRowElement[] = [],
        private _headers: TableHeaderElement[] = [],
        private _columns: TableColumnElement[] = []
    ) {
        this.rows = _rows;
        this.headers = _headers;
        this.columns = _columns;
    }

    get headers(): TableHeaderElement[] {
        return this._headers;
    }

    set headers(headers: TableHeaderElement[]) {
        this._headers = headers;
    }

    headersToJSON(): Object[] {
        throw new Error('Method not implemented.');
    }

    headersFromJSON(headers: Object[]) {
        throw new Error('Method not implemented.');
    }

    get columns(): TableColumnElement[] {
        return this._columns;
    }
    set columns(columns: TableColumnElement[]) {
        this._columns = columns;
    }

    columnsToJSON(): Object[] {
        return this.columns.map((column) => {
            return column.toJSON();
        });
    }

    columnsFromJSON(columns: Object[]) {
        throw new Error('Method not implemented.');
    }

    get rows(): TableRowElement[] {
        return this._rows;
    }

    set rows(rows: TableRowElement[]) {
        this._rows = rows;
    }

    rowsToJSON(): Object[] {
        return this.rows.map((row) => {
            return row.toJSON();
        });
    }

    rowsFromJSON(rows: Object[]) {
        throw new Error('Method not implemented.');
    }

    addRow(row: TableRowElement): void {
        this._rows.push(row);
    }

    removeRow(row: TableRowElement): boolean {
        throw new Error('Method not implemented.');
    }
}

export { DataTableElement };
