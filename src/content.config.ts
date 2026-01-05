import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Carga la colección 'docs' usada por Starlight, extendiendo el esquema
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
