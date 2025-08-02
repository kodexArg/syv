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

export const COLECCIONES_CONFIG = {
  proyecto: {
    nombreCompleto: 'Proyecto',
    carpetaNumerada: '0_proyecto',
    rutaBase: '../0_proyecto',
    icono: 'folder',
    iconoBreadcrumb: 'fas fa-folder'
  },
  trasfondo: {
    nombreCompleto: 'Trasfondo',
    carpetaNumerada: '1_trasfondo',
    rutaBase: '../1_trasfondo',
    icono: 'book',
    iconoBreadcrumb: 'fas fa-book'
  },
  atlas: {
    nombreCompleto: 'Atlas',
    carpetaNumerada: '2_atlas',
    rutaBase: '../2_atlas',
    icono: 'map',
    iconoBreadcrumb: 'fas fa-map'
  },
  personajes: {
    nombreCompleto: 'Personajes',
    carpetaNumerada: '3_personajes',
    rutaBase: '../3_personajes',
    icono: 'users',
    iconoBreadcrumb: 'fas fa-users'
  },
  diegesis: {
    nombreCompleto: 'Diégesis',
    carpetaNumerada: '4_diegesis',
    rutaBase: '../4_diegesis',
    icono: 'document',
    iconoBreadcrumb: 'fas fa-file-alt'
  },
  aventuras: {
    nombreCompleto: 'Aventuras',
    carpetaNumerada: '5_aventuras',
    rutaBase: '../5_aventuras',
    icono: 'lightning',
    iconoBreadcrumb: 'fas fa-bolt'
  },
  media: {
    nombreCompleto: 'Media',
    carpetaNumerada: '6_media',
    rutaBase: '../6_media',
    icono: 'photo',
    iconoBreadcrumb: 'fas fa-image'
  }
} as const;

export type ClaveColeccion = keyof typeof COLECCIONES_CONFIG;
export const CLAVES_COLECCIONES = Object.keys(COLECCIONES_CONFIG) as ClaveColeccion[];
export const CONFIGURACIONES_COLECCIONES = Object.values(COLECCIONES_CONFIG);

export const obtenerConfigColeccion = (clave: string) => 
  COLECCIONES_CONFIG[clave as ClaveColeccion];

export const obtenerNombreCompleto = (clave: string): string => 
  obtenerConfigColeccion(clave)?.nombreCompleto || clave;

export const obtenerIcono = (clave: string): string => 
  obtenerConfigColeccion(clave)?.icono || 'document';

export const obtenerIconoBreadcrumb = (clave: string): string => 
  obtenerConfigColeccion(clave)?.iconoBreadcrumb || 'fas fa-folder';

export const collections = Object.fromEntries(
  Object.entries(COLECCIONES_CONFIG).map(([clave, config]) => [
    clave,
    defineCollection({
      loader: glob({
        pattern: '**/*.md',
        base: config.rutaBase
      }),
      schema: documentSchema,
    })
  ])
);