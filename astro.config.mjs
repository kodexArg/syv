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
				{ label: 'Proyecto', autogenerate: { directory: '0_proyecto' } },
				{ label: 'Trasfondo', autogenerate: { directory: '1_trasfondo' } },
				{ label: 'Atlas', autogenerate: { directory: '2_atlas' } },
				{ label: 'Personajes', autogenerate: { directory: '3_personajes' } },
				{ label: 'Diégesis', autogenerate: { directory: '4_diegesis' } },
				{ label: 'Aventuras', autogenerate: { directory: '5_aventuras' } },
				{ label: 'Media', autogenerate: { directory: '6_media' } },
			],
		}),
	],
});
