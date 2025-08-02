export const FRONTMATTER_SCHEMA = {
  titulo: 'string',
  carpeta: 'string',
  descripcion: 'string',
  tags: 'array_optional',
  region: 'string_optional',
  fecha: 'string_optional',
  nombre: 'string_optional',
  facciones: 'array_optional',
  'alerta-spoiler': 'string_optional'
} as const;

export const DOCUMENTS_SCHEMA = {
  proyecto: {
    name: 'Proyecto',
    path: '0_proyecto',
    icon: 'folder',
    breadcrumbIcon: 'fas fa-folder'
  },
  trasfondo: {
    name: 'Trasfondo',
    path: '1_trasfondo',
    icon: 'book',
    breadcrumbIcon: 'fas fa-book'
  },
  atlas: {
    name: 'Atlas',
    path: '2_atlas',
    icon: 'map',
    breadcrumbIcon: 'fas fa-map'
  },
  personajes: {
    name: 'Personajes',
    path: '3_personajes',
    icon: 'users',
    breadcrumbIcon: 'fas fa-users'
  },
  diegesis: {
    name: 'Diégesis',
    path: '4_diegesis',
    icon: 'document',
    breadcrumbIcon: 'fas fa-file-alt'
  },
  aventuras: {
    name: 'Aventuras',
    path: '5_aventuras',
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

export const DOCUMENTS_SCHEMA_KEYS = Object.keys(DOCUMENTS_SCHEMA);

export const DEFAULT_ICON = 'document';
export const DEFAULT_BREADCRUMB_ICON = 'fas fa-folder';
export const PATH_PREFIX = '../';

