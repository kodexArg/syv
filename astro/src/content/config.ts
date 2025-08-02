import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const documentSchema = z.object({
  title: z.string(),
  folder: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
  region: z.string().optional(),
  date: z.string().optional(),
  name: z.string().optional(),
  factions: z.array(z.string()).optional(),
  spoiler_alert: z.string().optional(),
}).passthrough();

export const COLLECTIONS_CONFIG = {
  proyecto: {
    name: 'Proyecto',
    path: '../0_proyecto',

    icon: 'folder',
    breadcrumbIcon: 'fas fa-folder'
  },
  trasfondo: {
    name: 'Trasfondo',
    path: '../1_trasfondo',

    icon: 'book',
    breadcrumbIcon: 'fas fa-book'
  },
  atlas: {
    name: 'Atlas',
    path: '../2_atlas',

    icon: 'map',
    breadcrumbIcon: 'fas fa-map'
  },
  personajes: {
    name: 'Personajes',
    path: '../3_personajes',

    icon: 'users',
    breadcrumbIcon: 'fas fa-users'
  },
  diegesis: {
    name: 'Diégesis',
    path: '../4_diegesis',

    icon: 'document',
    breadcrumbIcon: 'fas fa-file-alt'
  },
  aventuras: {
    name: 'Aventuras',
    path: '../5_aventuras',

    icon: 'lightning',
    breadcrumbIcon: 'fas fa-bolt'
  },
  media: {
    name: 'Media',
    path: '6_media',

    icon: 'photo',
    breadcrumbIcon: 'fas fa-image'
  }
} as const;

export type CollectionKey = keyof typeof COLLECTIONS_CONFIG;
export const COLLECTION_KEYS = Object.keys(COLLECTIONS_CONFIG) as CollectionKey[];
export const COLLECTION_CONFIGURATIONS = Object.values(COLLECTIONS_CONFIG);

class CollectionConfig {
  private config: typeof COLLECTIONS_CONFIG[CollectionKey];

  constructor(key: string) {
    this.config = COLLECTIONS_CONFIG[key as CollectionKey];
  }

  getName(): string {
    return this.config?.name || '';
  }

  getIcon(): string {
    return this.config?.icon || 'document';
  }

  getBreadcrumbIcon(): string {
    return this.config?.breadcrumbIcon || 'fas fa-folder';
  }

  getPath(): string {
    return `../${this.config?.path}`;
  }
}

export const getCollectionConfig = (key: string) => new CollectionConfig(key);

export const collections = Object.fromEntries(
  Object.entries(COLLECTIONS_CONFIG).map(([key, config]) => [
    key,
    defineCollection({
      loader: glob({
        pattern: '**/*.md',
        base: getCollectionConfig(key).getPath()
      }),
      schema: documentSchema,
    })
  ])
);