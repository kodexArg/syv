import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

<<<<<<< HEAD
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
    'alerta-spoilers': z.string().optional(),
});

const proyectoCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/0_proyecto' }),
    schema: baseSchema,
});

const trasfondoCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/1_trasfondo' }),
    schema: baseSchema,
});

const atlasCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/2_atlas' }),
    schema: baseSchema,
});

const personajesCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/3_personajes' }),
    schema: personajeSchema,
});

const diegesisCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/4_diegesis' }),
    schema: baseSchema,
});

const aventurasCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/5_aventuras' }),
    schema: baseSchema,
});

const mediaCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/docs/6_media' }),
    schema: baseSchema,
});


=======
// Carga la colección 'docs' usada por Starlight, extendiendo el esquema
>>>>>>> 92585e9d79975c2a259ccb2c16573329754b856d
const docs = defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
        extend: z.object({
            // Campos globales opcionales
            folder: z.string().optional(),
            region: z.string().optional(),
            fecha: z.union([z.string(), z.number(), z.date()]).transform((val) => {
                if (val instanceof Date) {
                    return val.toISOString().split('T')[0];
                }
                return String(val);
            }).optional(),
            tags: z.array(z.string()).optional(), // Sobreescribe el tags por defecto si es necesario, pero docsSchema ya lo trae. Lo dejamos compatible.

            // Campos específicos de personajes (opcionales para que no fallen otros docs)
            nombre: z.string().optional(),
            facciones: z.array(z.string()).optional(),
            spoilers: z.array(z.string()).optional(),
        }),
    }),
});

export const collections = {
    docs,
};
