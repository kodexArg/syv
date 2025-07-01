// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  
  // Configuración optimizada de Markdown siguiendo mejores prácticas
  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
    remarkPlugins: [],
    rehypePlugins: [
      // Añadir IDs automáticos a los headings para navegación
      rehypeSlug,
      // Enlaces automáticos a los headings para mejor UX
      [rehypeAutolinkHeadings, { 
        behavior: 'wrap',
        properties: {
          className: ['anchor-link'],
          ariaLabel: 'Link directo a esta sección'
        }
      }]
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
      }
    }
  }
});
