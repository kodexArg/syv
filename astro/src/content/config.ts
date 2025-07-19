import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const documentSchema = z.object({
  titulo: z.string(),
  carpeta: z.string(),
  descripcion: z.string(),
  tags: z.array(z.string()).optional(),
  region: z.string().optional(),
  fecha: z.string().optional(),
  nombre: z.string().optional(),
  facciones: z.array(z.string()).optional(),
  alerta_spoiler: z.string().optional(),
}).passthrough();

export const collections = {
  'proyecto': defineCollection({
    loader: glob({ 
      pattern: '**/*.md',
      base: '../0_proyecto' 
    }),
    schema: documentSchema,
  }),
  'trasfondo': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../1_trasfondo'
    }),
    schema: documentSchema,
  }),
  'atlas': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../2_atlas'
    }),
    schema: documentSchema,
  }),
  'personajes': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../3_personajes'
    }),
    schema: documentSchema,
  }),
  'diegesis': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../4_diegesis'
    }),
    schema: documentSchema,
  }),
  'aventuras': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../5_aventuras'
    }),
    schema: documentSchema,
  }),
  'media': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../6_media'
    }),
    schema: documentSchema,
  }),
};