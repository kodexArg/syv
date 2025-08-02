import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro:content';
import { 
  DOCUMENTS_SCHEMA, 
  DOCUMENTS_SCHEMA_KEYS, 
  DEFAULT_ICON, 
  DEFAULT_BREADCRUMB_ICON, 
  PATH_PREFIX,
  FRONTMATTER_SCHEMA 
} from './constants';

export class DocumentSchema {
  private config: any;

  constructor(key: string) {
    this.config = DOCUMENTS_SCHEMA[key as keyof typeof DOCUMENTS_SCHEMA];
  }

  getName(): string {
    return this.config?.name || '';
  }

  getIcon(): string {
    return this.config?.icon || DEFAULT_ICON;
  }

  getBreadcrumbIcon(): string {
    return this.config?.breadcrumbIcon || DEFAULT_BREADCRUMB_ICON;
  }

  getPath(): string {
    return `${PATH_PREFIX}${this.config?.path}`;
  }

  static getCollectionKeys(): string[] {
    return DOCUMENTS_SCHEMA_KEYS;
  }

  static getAllCollections(): Record<string, { name: string; path: string; icon: string; breadcrumbIcon: string }> {
    return DOCUMENTS_SCHEMA;
  }
}

export class FrontmatterSchema {
  static getSchema() {
    const schemaObject: any = {};
    
    Object.entries(FRONTMATTER_SCHEMA).forEach(([key, type]) => {
      switch (type) {
        case 'string':
          schemaObject[key] = z.string();
          break;
        case 'string_optional':
          schemaObject[key] = z.string().optional();
          break;
        case 'array_optional':
          schemaObject[key] = z.array(z.string()).optional();
          break;
      }
    });
    
    return z.object(schemaObject).passthrough();
  }
}

export function getDocumentConfig(key: string): DocumentSchema {
  return new DocumentSchema(key);
}

/**
 * Define automáticamente todas las secciones del worldbuilding:
 * - 'trasfondo': Historia, cronología y contexto del universo
 * - 'atlas': Geografía, ciudades como Dársena y Córdoba, tecnologías
 * - 'personajes': Protagonistas, secundarios y figuras del mundo
 * - 'diegesis': Relatos, crónicas y cartas del universo narrativo
 * - 'aventuras': Escenarios y campañas
 * - 'media': Archivos multimedia como imágenes, videos y sonidos
 */
export const collections = Object.fromEntries(
  // Itera sobre cada sección del proyecto (trasfondo, personajes, atlas...)
  DocumentSchema.getCollectionKeys().map((collectionKey) => [
    // Clave de la colección (ej: 'personajes' para acceder a Damián, Paco el Puntero, etc.)
    collectionKey,
    
    // Configuración de Astro para cada sección del worldbuilding
    defineCollection({
      // Busca archivos markdown en carpetas numeradas del proyecto (1_trasfondo/, 3_personajes/, etc.)
      loader: glob({ 
        pattern: '**/*.md', // Encuentra recursivamente archivos como 'damian.md', 'tecnologia-prohibida.md'
        base: `./src/content/${getDocumentConfig(collectionKey).getPath().replace('../', '')}` // Ruta a carpetas como '../3_personajes/'
      }),
      
      // Valida metadatos específicos del proyecto: tags, facciones, personajes, fechas del 2178
      schema: FrontmatterSchema.getSchema(),
    }),
  ])
);