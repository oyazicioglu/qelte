import type { TableElement } from './TableElement';

export interface ITableCompositeElement {
    add(element: TableElement): void;
    remove(element: TableElement): boolean;
    list(): TableElement[];
}
