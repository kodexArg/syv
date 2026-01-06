import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();

	if (response.headers.get('content-type')?.includes('text/html')) {
		const html = await response.text();
		const injectedHtml = html.replace(
			'</head>',
			`<script>
				let isNavigating = false;

				document.addEventListener('click', (e) => {
					const link = e.target?.closest('a');
					if (link && link.href && !isNavigating) {
						const url = new URL(link.href);
						const currentUrl = new URL(window.location.href);
						if (url.pathname !== currentUrl.pathname && !link.hasAttribute('data-astro-reload')) {
							isNavigating = true;
							e.preventDefault();

							const main = document.querySelector('main');
							if (main) {
								main.style.transition = 'opacity 0.5s ease-out';
								main.style.opacity = '0';

								// Cargar la página nueva en paralelo mientras hace fade out
								fetch(link.href)
									.then(response => response.text())
									.then(html => {
										const parser = new DOMParser();
										const newDoc = parser.parseFromString(html, 'text/html');
										const newMain = newDoc.querySelector('main');

										if (newMain && main) {
											// Reemplazar el main casi inmediatamente (sin esperar el fade out)
											setTimeout(() => {
												main.parentNode.replaceChild(newMain, main);

												// Hacer fade in mientras el anterior hace fade out
												newMain.style.opacity = '0';
												newMain.style.transition = 'opacity 0.5s ease-in';
												setTimeout(() => {
													newMain.style.opacity = '1';
												}, 20);

												// Actualizar la URL
												window.history.pushState({}, '', link.href);
												isNavigating = false;
											}, 50);
										}
									})
									.catch(() => {
										// Si falla el fetch, navega normalmente
										window.location.href = link.href;
									});
							}
						}
					}
				});

				window.addEventListener('load', () => {
					const main = document.querySelector('main');
					if (main) {
						main.style.opacity = '0';
						main.style.transition = 'opacity 0.5s ease-in';
						setTimeout(() => {
							main.style.opacity = '1';
						}, 50);
					}
				});
			</script>
			<script src="/syv/sidebar-animations.js"><\/script></head>`
		);
		return new Response(injectedHtml, response);
	}

	return response;
});
