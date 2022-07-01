import type { IDataTableElement } from './IDataTableElement';
import { TableColumnElement } from './TableColumnElement';
import type { TableElement } from './TableElement';
import { TableHeaderElement } from './TableHeaderElement';
import { TableRowElement } from './TableRowElement';
import type { CellType, ColumnType, HeaderType, RowType, ValueTypes } from './types';

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

    addHeader(header: TableHeaderElement) {
        this.headers.push(header);
    }

    addHeaderFromJSON(header: HeaderType) {
        const newHeader = new TableHeaderElement(header.key, header.value);
        this.addHeader(newHeader);
    }

    headersToJSON(): CellType[][] {
        return this.headers.map((header) => {
            return header.toJSON();
        });
    }

    headersFromJSON(headers: HeaderType[]) {
        headers.forEach((header) => {
            this.addHeaderFromJSON(header);
        });
    }

    removeHeader(header: HeaderType) {
        const foundHeader = this.headers.find((h) => h === header);
        if (!foundHeader) return false;

        const otherHeaders = this.headers.filter((h) => h !== header);
        this.columns = otherHeaders;
        return true;
    }

    get columns(): TableColumnElement[] {
        return this._columns;
    }

    set columns(columns: TableColumnElement[]) {
        this._columns = columns;
    }

    addColumn(column: TableColumnElement) {
        this.columns.push(column);
    }

    columnsToJSON(): Object[] {
        return this.columns.map((column) => {
            return column.toJSON();
        });
    }

    addColumnFromJSON(column: ColumnType) {
        const newColumn = new TableColumnElement(column.key, column.value);
    }

    columnsFromJSON(columns: ColumnType[]) {
        columns.forEach((column) => {
            this.addColumnFromJSON(column);
        });
    }

    removeColumn(column: TableColumnElement): boolean {
        const foundColumn = this.columns.find((c) => c === column);
        if (!foundColumn) return false;

        const columnIndex = this.columns.findIndex((c) => c === column);
        this.removeHeader(this.headers[columnIndex]);

        const otherColumns = this.columns.filter((c) => c !== column);
        this.columns = otherColumns;
        return true;
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

    addRowFromJSON(row: RowType) {
        const newRow = new TableRowElement(row.key, row.value);
        this.addRow(newRow);
    }

    rowsFromJSON(rows: RowType[]) {
        rows.map((row) => {
            this.addRowFromJSON(row);
        });
    }

    addRow(row: TableRowElement): void {
        this._rows.push(row);
    }

    removeRow(row: TableRowElement): boolean {
        const foundRow = this.rows.find((r) => r === row);
        if (!foundRow) return false;

        const otherRows = this.rows.filter((r) => r !== row);
        this.rows = otherRows;
        return true;
    }
}

export { DataTableElement };