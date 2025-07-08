// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://kodexArg.github.io/syv',
  base: '/syv/',
  integrations: [mdx()],
  
  // Configuración simplificada de Markdown
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      'rehype-autolink-headings'
    ],
  },
  
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Mantener alias existentes para compatibilidad
        '@proyecto': path.resolve('../0_proyecto'),
        '@trasfondo': path.resolve('../1_trasfondo'),
        '@atlas': path.resolve('../2_atlas'),
        '@personajes': path.resolve('../3_personajes'),
        '@diegesis': path.resolve('../4_diegesis'),
        '@aventuras': path.resolve('../5_aventuras'),
        '@media': path.resolve('../6_media'),
        '@root': path.resolve('..'),
        '@': path.resolve('./src'),
      }
    }
  }
});
