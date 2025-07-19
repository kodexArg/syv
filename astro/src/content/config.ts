import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema ultra simple para testing
const simpleSchema = z.object({
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

// Solo una colección para testing
export const collections = {
  'proyecto': defineCollection({
    loader: glob({ 
      pattern: '**/*.md',
      base: '../0_proyecto' 
    }),
    schema: simpleSchema,
  }),
  'trasfondo': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../1_trasfondo'
    }),
    schema: simpleSchema,
  }),
  'atlas': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../2_atlas'
    }),
    schema: simpleSchema,
  }),
  'personajes': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../3_personajes'
    }),
    schema: simpleSchema,
  }),
  'diegesis': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../4_diegesis'
    }),
    schema: simpleSchema,
  }),
  'aventuras': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../5_aventuras'
    }),
    schema: simpleSchema,
  }),
  'media': defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../6_media'
    }),
    schema: simpleSchema,
  }),
};