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
  private key: string;

  constructor(key: string) {
    this.key = key;
    this.config = DOCUMENTS_SCHEMA[key as keyof typeof DOCUMENTS_SCHEMA];
  }

  // Instance methods
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

  getKey(): string {
    return this.key;
  }

  generateStaticPaths(): { params: { collection: string } }[] {
    return [{ params: { collection: this.key } }];
  }

  async generateDynamicPaths(): Promise<{ params: { collection: string; slug: string } }[]> {
    const { getCollection } = await import('astro:content');
    try {
      const entries = await getCollection(this.key as any);
      return entries.map((entry: any) => ({
        params: {
          collection: this.key,
          slug: entry.id
        }
      }));
    } catch {
      return [];
    }
  }

  async getCollectionEntries(): Promise<any[]> {
    const { getCollection } = await import('astro:content');
    try {
      return await getCollection(this.key as any);
    } catch {
      return [];
    }
  }

  getEntryTitle(entry: any): string {
    return entry.data?.titulo || entry.id.split('/').pop() || 'Untitled';
  }

  getEntryUrl(entry: any): string {
    return `/docs/${entry.collection}/${entry.id}/`;
  }

  async getEntryFromParams(slug: string): Promise<any | null> {
    const entries = await this.getCollectionEntries();
    return entries.find(entry => entry.id === slug) || null;
  }

  // Static methods
  static getCollectionKeys(): string[] {
    return DOCUMENTS_SCHEMA_KEYS;
  }

  static getAllCollections(): Record<string, { name: string; path: string; icon: string; breadcrumbIcon: string }> {
    return DOCUMENTS_SCHEMA;
  }

  static generateAllStaticPaths(): { params: { collection: string } }[] {
    return DOCUMENTS_SCHEMA_KEYS.map(key => ({ params: { collection: key } }));
  }

  static async generateAllDynamicPaths(): Promise<{ params: { collection: string; slug: string }; props: { entry: any } }[]> {
    const paths: { params: { collection: string; slug: string }; props: { entry: any } }[] = [];
    
    for (const key of DOCUMENTS_SCHEMA_KEYS) {
      const schema = new DocumentSchema(key);
      const entries = await schema.getCollectionEntries();
      const collectionPaths = entries.map((entry: any) => ({
        params: { collection: key, slug: entry.id },
        props: { entry },
      }));
      paths.push(...collectionPaths);
    }
    
    return paths;
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
        base: `../${DOCUMENTS_SCHEMA[collectionKey as keyof typeof DOCUMENTS_SCHEMA]?.path}` // Ruta relativa desde astro/ a carpetas como '1_trasfondo/', '3_personajes/'
      }),
      
      // Valida metadatos específicos del proyecto: tags, facciones, personajes, fechas del 2178
      schema: FrontmatterSchema.getSchema(),
    }),
  ])
);