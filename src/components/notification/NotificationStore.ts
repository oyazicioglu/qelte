import { writable } from 'svelte/store';
import { createUId } from '../utils/uid-creator';

export class NotificationStore {
	static #notificationStore = writable([]);

	static addNotification = (notification) => {
		notification.uid = createUId();
		this.#notificationStore.update((current) => {
			return [...current, notification];
		});
	};

	static removeNotification = (notification) => {
		this.#notificationStore.update((current) => {
			return current.filter((n) => n.uid !== notification.uid);
		});
	};

	static setNotifications = (notifications) => {
		this.#notificationStore.set(notifications);
	};

	static getStore() {
		return this.notificationStore;
	}
}
