// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



// https://astro.build/config
export default defineConfig({
	site: 'https://kodexarg.github.io',
	base: '/syv',
	integrations: [
		starlight({
			title: 'Subordinación y Valor',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			social: [
				{
					label: 'GitHub',
					href: 'https://github.com/kodexarg/syv',
					icon: 'github',
				},
			],
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				useStarlightDarkModeSwitch: false,
			},
			sidebar: [
				{ label: 'Proyecto', collapsed: true, autogenerate: { directory: '0_proyecto' } },
				{ label: 'Trasfondo', collapsed: true, autogenerate: { directory: '1_trasfondo' } },
				{ label: 'Atlas', collapsed: true, autogenerate: { directory: '2_atlas' } },
				{ label: 'Personajes', collapsed: true, autogenerate: { directory: '3_personajes' } },
				{ label: 'Diégesis', collapsed: true, autogenerate: { directory: '4_diegesis' } },
				{ label: 'Aventuras', collapsed: true, autogenerate: { directory: '5_aventuras' } },
				{ label: 'Media', collapsed: true, autogenerate: { directory: '6_media' } },
			],
			components: {
				PageTitle: './src/components/PageTitle.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
		}),
	],
});
