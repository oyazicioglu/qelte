import { writable } from 'svelte/store';
import type { BaseColor } from '../types';
import { createUId } from '../utils/uid-creator';

export interface INotificationItem {
    title?: string;
    message?: string;
    uid?: string;
    link?: INotificationLink;
    type: BaseColor;
}

export interface INotificationLink {
    text: string;
    href: string;
}

export class NotificationModel {
    static _inscance: NotificationModel = undefined;
    private _store = writable<INotificationItem[]>([]);

    static get instance() {
        if (!this._inscance) {
            this._inscance = new this();
        }

        return this._inscance;
    }

    set items(items: INotificationItem[]) {
        this.store.set(items);
    }

    addItem(item: INotificationItem) {
        item.uid = createUId();
        if (!item.type) {
            item.type = 'default';
        }
        this.store.update((current) => {
            return [...current, item];
        });
    }

    removeItem(item: INotificationItem) {
        this.store.update((current) => {
            return current.filter((i) => i.uid !== item.uid);
        });
    }

    get store() {
        return this._store;
    }
}
