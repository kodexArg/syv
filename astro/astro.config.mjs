import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://cesped.github.io/syv',
  base: '/syv',
  
  integrations: [
    mdx({
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    })
  ],
  
  markdown: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
  },
  
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': './src',
        '@root': '..',
        '@proyecto': '../0_proyecto',
        '@trasfondo': '../1_trasfondo',
        '@atlas': '../2_atlas',
        '@personajes': '../3_personajes',
        '@diegesis': '../4_diegesis',
        '@aventuras': '../5_aventuras',
        '@media': '../6_media'
      }
    }
  }
});
