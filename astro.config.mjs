// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://kodexarg.github.io',
	base: '/syv',
	integrations: [
		starlight({
			title: 'Sal y Viento',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			sidebar: [],
		}),
	],
});
