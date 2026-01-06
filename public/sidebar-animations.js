document.addEventListener('click', (event) => {
	const summary = event.target instanceof HTMLElement ? event.target.closest('summary') : null;
	if (!summary) return;

	const details = summary.closest('details');
	if (!details || !details.closest('.sidebar-content')) return;

	const li = details.parentElement;
	const ul = li && li.parentElement;
	const isTopLevel = ul && ul.className.includes('top-level');

	requestAnimationFrame(() => {
		if (details.open && isTopLevel && ul) {
			Array.from(ul.children).forEach((child) => {
				if (child.tagName === 'LI') {
					const sibling = child.querySelector(':scope > details[open]');
					if (sibling && sibling !== details) {
						sibling.open = false;
					}
				}
			});
		}
	});
});
