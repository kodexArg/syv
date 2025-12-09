// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

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
			plugins: [
				starlightThemeObsidian(),
			],
			sidebar: [
				{ label: 'Proyecto', autogenerate: { directory: 'proyecto' } },
				{ label: 'Trasfondo', autogenerate: { directory: 'trasfondo' } },
				{ label: 'Atlas', autogenerate: { directory: 'atlas' } },
				{ label: 'Personajes', autogenerate: { directory: 'personajes' } },
				{ label: 'Diégesis', autogenerate: { directory: 'diegesis' } },
				{ label: 'Aventuras', autogenerate: { directory: 'aventuras' } },
				{ label: 'Media', autogenerate: { directory: 'media' } },
			],
		}),
	],
});
