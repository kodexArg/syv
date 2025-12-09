import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Esquema base para todos los archivos markdown
// Todos los campos son opcionales para evitar errores de validación
const baseSchema = z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    folder: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    region: z.string().optional(),
    fecha: z.string().optional(),
});

// Esquema específico para personajes
const personajeSchema = baseSchema.extend({
    nombre: z.string().optional(),
    facciones: z.array(z.string()).optional(),
    spoilers: z.array(z.string()).optional(),
});

// Colección: 0_proyecto - Documentación del proyecto
const proyectoCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './0_proyecto' }),
    schema: baseSchema,
});

// Colección: 1_trasfondo - Lore, cronología, facciones
const trasfondoCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './1_trasfondo' }),
    schema: baseSchema,
});

// Colección: 2_atlas - Ubicaciones geográficas
const atlasCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './2_atlas' }),
    schema: baseSchema,
});

// Colección: 3_personajes - Personajes del mundo
const personajesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './3_personajes' }),
    schema: personajeSchema,
});

// Colección: 4_diegesis - Relatos, cartas, crónicas
const diegesisCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './4_diegesis' }),
    schema: baseSchema,
});

// Colección: 5_aventuras - Aventuras y campañas
const aventurasCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './5_aventuras' }),
    schema: baseSchema,
});

// Colección: 6_media - Recursos multimedia
const mediaCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './6_media' }),
    schema: baseSchema,
});

export const collections = {
    '0_proyecto': proyectoCollection,
    '1_trasfondo': trasfondoCollection,
    '2_atlas': atlasCollection,
    '3_personajes': personajesCollection,
    '4_diegesis': diegesisCollection,
    '5_aventuras': aventurasCollection,
    '6_media': mediaCollection,
};
