export function hideOnClickOutside(node: HTMLElement, callback: CallableFunction) {
	const onWindowClick = (e: MouseEvent) => {
		if (!node.contains(e.target as Node)) {
			callback();
		}
	};

	window.addEventListener('click', onWindowClick);

	return {
		destroy: () => {
			window.removeEventListener('click', onWindowClick);
		},
	};
}
