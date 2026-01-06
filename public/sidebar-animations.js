document.addEventListener('click', (event) => {
	const summary = event.target instanceof HTMLElement ? event.target.closest('summary') : null;
	if (!summary) return;

	const details = summary.closest('details');
	if (!details || !details.closest('.sidebar-content')) return;

	requestAnimationFrame(() => {
		if (details.open) {
			document.querySelectorAll('.sidebar-content details[open]').forEach((el) => {
				if (el !== details) {
					el.open = false;
				}
			});
		}
	});
});
