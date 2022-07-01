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
	static inscance: NotificationModel = undefined;

	private store = writable<INotificationItem[]>([]);

	static getInstance() {
		if (!this.inscance) {
			this.inscance = new this();
		}

		return this.inscance;
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

	getStore() {
		return this.store;
	}
}
