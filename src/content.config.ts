import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Esquema base para todos los archivos markdown
// Todos los campos son opcionales para evitar errores de validación
const baseSchema = z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    folder: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.union([z.string(), z.number()]).transform(String)).optional(),
    region: z.string().optional(),
    fecha: z.union([z.string(), z.number(), z.date()]).transform((val) => {
        if (val instanceof Date) {
            return val.toISOString().split('T')[0];
        }
        return String(val);
    }).optional(),
});

const personajeSchema = baseSchema.extend({
    nombre: z.string().optional(),
    facciones: z.array(z.string()).optional(),
    spoilers: z.array(z.string()).optional(),
});

const proyectoCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './0_proyecto' }),
    schema: baseSchema,
});

const trasfondoCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './1_trasfondo' }),
    schema: baseSchema,
});

const atlasCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './2_atlas' }),
    schema: baseSchema,
});

const personajesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './3_personajes' }),
    schema: personajeSchema,
});

const diegesisCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './4_diegesis' }),
    schema: baseSchema,
});

const aventurasCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './5_aventuras' }),
    schema: baseSchema,
});

const mediaCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './6_media' }),
    schema: baseSchema,
});


const docs = defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
});

export const collections = {
    docs,
    '0_proyecto': proyectoCollection,
    '1_trasfondo': trasfondoCollection,
    '2_atlas': atlasCollection,
    '3_personajes': personajesCollection,
    '4_diegesis': diegesisCollection,
    '5_aventuras': aventurasCollection,
    '6_media': mediaCollection,
};
