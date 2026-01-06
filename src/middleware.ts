import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();

	if (response.headers.get('content-type')?.includes('text/html')) {
		const html = await response.text();
		const injectedHtml = html.replace(
			'</head>',
			'<script src="/sidebar-animations.js"><\/script></head>'
		);
		return new Response(injectedHtml, response);
	}

	return response;
});
