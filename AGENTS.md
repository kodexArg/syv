# AGENTS.md

Guía operativa anclada a este proyecto Astro. Provee instrucciones para desarrollo, estilo de contenido, accesibilidad y convenciones específicas.

## Visión general
- **Stack**: [Astro 5.6.1](https://astro.build/) + [Starlight 0.37.0](https://starlight.astro.build/)
- **Runtime**: [Bun 1.3.5](https://bun.sh/) (requerido para instalaciones y scripts)
- **Imagen**: [Sharp 0.34.2](https://sharp.pixelplumbing.com/) (procesamiento de imágenes optimizado)
- **Despliegue**: GitHub Pages (`site`: `https://kodexarg.github.io`, `base`: `/syv`)
- **Contenido**: Markdown/MDX bajo `src/content/docs` con autogeneración de sidebar por carpetas.

## Comandos de setup y ejecución
- Instalar dependencias: `bun install` (usa `bun.lock`)
- Servidor de desarrollo: `bun run dev`
- Compilar producción: `bun run build`
- Previsualizar build: `bun run preview`
- Verificación estática: `bun run astro check`

Notas:
- Astro abre en `http://localhost:4321/syv/`. 
- **Rutas**: Siempre deben incluir el `base` `/syv` (ej.: `/syv/1_trasfondo/cronologia/`).

## Arquitectura Astro
- **Configuración**: `astro.config.mjs`
  - `site: 'https://kodexarg.github.io'`
  - `base: '/syv'`
  - **Idioma**: `defaultLocale: 'root'` con `lang: 'es'`.
  - **Sidebar**: Autogenerado desde `src/content/docs/` para carpetas: `0_proyecto`, `1_trasfondo`, `2_atlas`, `3_personajes`, `4_diegesis`, `5_aventuras`, `6_media`.
- **Colecciones de contenido**: `src/content.config.ts`
  - Colección principal `docs` con `docsLoader()` para Starlight.
  - 7 colecciones especializadas (`0_proyecto` a `6_media`) con esquemas Zod para filtrado y validación avanzada.
- **Layout**: 
  - `src/pages/index.astro` es la raíz y usa `StarlightPage` para orquestar el layout base heredando accesibilidad y estilos.
  - No duplicar estructuras de layout; confiar en los componentes de Starlight.

## Metadatos en Markdown (Frontmatter)
- **Slug**: El slug es el nombre del archivo **sin extensión** `.md` (ej: `cronologia.md` -> slug: `cronologia`).
- **Campos Base**:
  - `title`: string.
  - `description`: string.
  - `folder`: string (Opcional; ruta lógica).
  - `tags`: array de slugs (Referencias a otros documentos o `indice.yaml`).
  - `region`: string (Opcional; específica de la Confederación).
  - `fecha`: string | number | date (Normalizado a `YYYY-MM-DD`).
- **Personajes (`3_personajes`)**:
  - `nombre`: string full.
  - `facciones`: array<string>.
  - `alerta-spoilers`: string (Notas sensibles para el lector).

## Índice canónico (SSOT)
- Fuente de verdad: `indice.yaml`.
- Organización: Define la jerarquía visible y el orden de navegación.
- **Validación**: Si un archivo existe físicamente pero no está en `indice.yaml`, se considera material de trabajo/draft no publicado.
- **Jerarquía**: Soporta anidamiento (ej: `ciudades -> darsena -> sub-secciones`).

## Estilo visual y tipografía
- **Ethos**: Estética militarista, colores mate, alto contraste.
- **Tipografías** (definidas en `src/styles/custom.css`):
  - **Títulos/Brand**: `Stardos Stencil` (Ethos militar).
  - **Headings (h1-h6)**: `Oswald` (Sans-serif condesada, mayúsculas).
  - **Cuerpo de texto**: `Merriweather` (Serif de alta legibilidad).
- **Layout de lectura**: 
  - En pantallas anchas (>90rem), el contenido se divide en **2 columnas** de estilo editorial.
  - Alineación: Justificado moderado para párrafos (`.sl-markdown-content p`).

## Accesibilidad
- **Semántica**: Uso obligatorio de `h1–h4` jerárquicos.
- **Landmarks**: `header`, `nav`, `main`, `aside`, `footer` provistos por Starlight.
- **Multimedia**: Siempre incluir `alt` descriptivo.
- **Idiomas**: Atributo `lang="es"` global.

## CI/CD
- **Workflow**: `.github/workflows/deploy.yml`
- **Permisos**: Requiere `contents: read`, `pages: write`, `id-token: write`.
- **Estructura**:
  - `jobs: build`: Instala (Bun), Compila (Astro), Sube artefacto.
  - `jobs: deploy`: Publica a GitHub Pages.
- **Triggers**: Push a `main` y `work`, además de `workflow_dispatch`.

## Tips para agentes
1. **Verificación**: Corre siempre `bun run astro check` antes de un commit si tocaste esquemas.
2. **Rutas Internas**: Usa `/syv/` al inicio de cada enlace interno.
3. **Imágenes**: Sharp está configurado; usa formatos estándar (PNG/JPG) en `src/assets`.
4. **Indice**: Si creas un archivo nuevo, **debes añadirlo** a `indice.yaml` para que sea visible.
5. **Frontmatter**: Asegúrate de que `alerta-spoilers` sea un string, no un objeto, para cumplir con el esquema actual de los archivos.

## Troubleshooting común
- **Error Zod**: "Invalid date" -> Asegúrate de que `fecha` esté en formato `YYYY-MM-DD` o string simple.
- **404 Portada**: Verifica que `base: '/syv'` esté configurado en `astro.config.mjs` y que el enlace tenga el prefijo.
- **Sidebar no aparece**: Comprueba que el archivo esté en la carpeta correcta y, si el sidebar no es `autogenerate`, añádelo manualmente.
- **Build fails (Sharp)**: Si hay errores de procesamiento de imagen, verifica que el archivo no esté corrupto y que el alias `@assets` sea correcto si se usa.

## Ejemplos de Frontmatter

### Documento de Personaje
```yaml
---
title: Damián DiConte
folder: 3_personajes/principales
description: Detective veterano de la Dirección Nacional de Seguridad.
tags:
  - damian-diconte
  - investigador
facciones:
  - "Dirección Nacional de Seguridad"
alerta-spoilers: "Su investigación sobre la conspiración en la Iglesia."
---
```

### Documento de Trasfondo
```yaml
---
title: El Anatema Mecánico
description: La prohibición religiosa de la tecnología digital.
tags:
  - religion
  - tecnologia
fecha: "2178-01-01"
---
```
