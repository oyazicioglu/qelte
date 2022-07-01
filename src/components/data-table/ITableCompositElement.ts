import type { TableElement } from './TableElement';

export interface ITableCompositeElement {
    add(element: TableElement);
    remove(element: TableElement): boolean;
    list(): TableElement[];
}
