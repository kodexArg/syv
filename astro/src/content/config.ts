import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema común para todos los documentos markdown
const markdownSchema = z.object({
  titulo: z.string(),
  title: z.string().optional(),
  carpeta: z.string(),
  descripcion: z.string(),
  tags: z.array(z.string()).optional().default([]),
  region: z.string().optional(),
  fecha: z.date().optional(),
  nombre: z.string().optional(),
  facciones: z.array(z.string()).optional().default([]),
  'alerta-spoiler': z.string().optional(),
});

// Definir collections apuntando directamente a las carpetas numeradas
export const collections = {
  'proyecto': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../0_proyecto' 
    }),
    schema: markdownSchema,
  }),
  'trasfondo': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../1_trasfondo' 
    }),
    schema: markdownSchema,
  }),
  'atlas': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../2_atlas' 
    }),
    schema: markdownSchema,
  }),
  'personajes': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../3_personajes' 
    }),
    schema: markdownSchema,
  }),
  'diegesis': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../4_diegesis' 
    }),
    schema: markdownSchema,
  }),
  'aventuras': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../5_aventuras' 
    }),
    schema: markdownSchema,
  }),
  'media': defineCollection({
    loader: glob({ 
      pattern: '**/*.md', 
      base: '../6_media' 
    }),
    schema: markdownSchema,
  }),
}; 