import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema ultra simple para testing
const simpleSchema = z.object({
  titulo: z.string(),
  carpeta: z.string(),
  descripcion: z.string(),
}).passthrough();

// Solo una colección para testing
export const collections = {
  'proyecto': defineCollection({
    loader: glob({ 
      pattern: 'proyecto.md',
      base: '../0_proyecto' 
    }),
    schema: simpleSchema,
  }),
}; 