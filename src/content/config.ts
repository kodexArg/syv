import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro:content';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				folder: z.string().optional(),
				tags: z.array(z.string()).optional(),
				'alerta-spoilers': z.boolean().optional(),
				'area-influencia': z.string().optional(),
				carpeta: z.string().optional(),
				descripcion: z.string().optional(),
				faccion: z.string().optional(),
				'faccion-asociada': z.string().optional(),
				facciones: z.array(z.string()).optional(),
				fecha: z.string().optional(),
				'fechas-clave': z.array(z.string()).optional(),
				nombre: z.string().optional(),
				'personajes-historicos': z.array(z.string()).optional(),
				region: z.string().optional(),
				spoilers: z.boolean().optional(),
				'tipo-credo': z.string().optional(),
				titulo: z.string().optional(),
			}).passthrough(),
		}),
	}),
};
