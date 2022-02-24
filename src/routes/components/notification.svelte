<script>
	import Notification from '../../components/notification/notification.svelte';
	import { NotificationModel } from '../../components/notification/NotificationModel.js';
	import { createUId } from '../../components/utils/uid-creator.js';

	const notificationModel = NotificationModel.getInstance();

	notificationModel.addItem({
		duration: 5000,
		title: `Default `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});

	notificationModel.addItem({
		duration: 5000,
		type: 'accent',
		title: `Accent `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});

	notificationModel.addItem({
		duration: 5000,
		type: 'primary',
		title: `Primary `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});

	notificationModel.addItem({
		duration: 5000,
		type: 'warning',
		title: `Warning `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});

	notificationModel.addItem({
		duration: 5000,
		type: 'danger',
		title: `Danger `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});

	notificationModel.addItem({
		duration: 5000,
		type: 'success',
		title: `Success `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});

	notificationModel.addItem({
		duration: 5000,
		type: 'info',
		title: `Info `,
		message: `Message content ${createUId()}`,
		link: {
			href: `#`,
			text: `link`,
		},
	});
</script>

<Notification rounded />
