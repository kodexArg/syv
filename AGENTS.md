# AGENTS.md

Guía operativa anclada a este proyecto Astro. Provee instrucciones para desarrollo, estilo de contenido, accesibilidad y convenciones específicas.

## Visión general
- Stack: Astro 5 + Starlight
- Despliegue: GitHub Pages (`site`: `https://kodexarg.github.io`, `base`: `/syv`)
- Contenido: Markdown bajo `src/content/docs` con autogeneración de sidebar por carpetas.
- Página inicial: `src/pages/index.astro`
- Estilos base: `src/styles/custom.css`

## Comandos de setup y ejecución
- Instalar dependencias: `bun install`
- Servidor de desarrollo: `bun run dev`
- Compilar producción: `bun run build`
- Previsualizar build: `bun run preview`
- Verificación estática: `bun run astro check`

Notas:
- Uso recomendado de Bun por `bun.lock` y CI dedicado.
- Astro abre en `http://localhost:4321/`. Las rutas incluyen el `base` `/syv` (ej.: `/syv/1_trasfondo/cronologia/`).

## Arquitectura Astro
- Configuración: `astro.config.mjs`
  - `site: 'https://kodexarg.github.io'`
  - `base: '/syv'`
  - Integración: `@astrojs/starlight` con `customCss: ['./src/styles/custom.css']`
  - Sidebar autogenerado desde las carpetas: `0_proyecto`, `1_trasfondo`, `2_atlas`, `3_personajes`, `4_diegesis`, `5_aventuras`, `6_media` (astro.config.mjs:25–33).
- TypeScript: `tsconfig.json` extiende `astro/tsconfigs/strict`.
- Colecciones de contenido: `src/content.config.ts`
  - Define colecciones por carpeta y esquemas Zod opcionales para evitar fallos de validación.
  - `docsLoader()` para compatibilidad con Starlight.

## Metadatos en Markdown (frontmatter)
- Frontmatter recomendado para todos los `.md`:
  - `title`: string — Título de la página.
  - `description`: string — Descripción corta, para listados y SEO interno.
  - `slug`: string — Opcional; usar solo si se requiere un slug específico.
  - `folder`: string — Opcional; útil para clasificación interna.
  - `tags`: array — Puede contener strings o números; se normaliza a string (`src/content.config.ts:13`).
  - `region`: string — Opcional; región geográfica si aplica.
  - `fecha`: string | number | date — Se normaliza a `YYYY-MM-DD` (`src/content.config.ts:15–21`).
- Frontmatter adicional para `3_personajes`:
  - `nombre`: string — Nombre canónico del personaje.
  - `facciones`: array<string> — Lista de facciones asociadas.
  - `spoilers`: array<string> — Advertencias o notas sensibles.
- Todos los campos son opcionales a nivel de esquema; sin embargo, se espera `title` y `description` para buena experiencia de lectura y navegación.

## Índice canónico (SSOT)
- Archivo: `indice.yaml` — Fuente única de verdad sobre el contenido visible y su organización.
- Reglas:
  - Usa `indice.yaml` para comprender y presentar la estructura y el orden de los documentos sin inspeccionar cada Markdown.
  - El código puede y debe apoyarse en `indice.yaml` para navegación, listados y validaciones.
  - Si una entrada existe en `indice.yaml`, se considera seleccionada para exposición pública; ausencias indican que no debe mostrarse.
- Implementación sugerida:
  - Parsear `indice.yaml` en tiempo de build o en server-side.
  - A falta de librerías YAML en `package.json`, cuando se implemente funcionalidad basada en este índice, añade una dependencia estándar (`yaml` o `js-yaml`) y centraliza su uso en un módulo utilitario.

## Estructura obligatoria de presentación
- Siempre deben existir:
  - Un índice de presentación.
  - Siete secciones principales:
    - Proyecto
    - Trasfondo
    - Atlas
    - Personajes
    - Diégesis
    - Aventuras
    - Media
- Esta estructura está reflejada en el sidebar autogenerado (astro.config.mjs:25–33) y debe mantenerse estable.

## Estilo visual y tipografía
- Principios de diseño:
  - Estética militarista, colores apagados/mate, alto contraste legible.
  - Diseño centrado en lectura cómoda: tipografías claras, espaciado generoso, justificado moderado.
  - Accesibilidad como prioridad: contraste suficiente, estados de foco visibles, navegación por teclado, semántica correcta.
- Tipografías:
  - Título/sello “SUBORDINACIÓN Y VALOR”: `Stardos Stencil` (`src/styles/custom.css:1`, `.site-title` en `src/styles/custom.css:21–35`).
  - Encabezados: `Oswald` (`src/styles/custom.css:2`, `--sl-font-heading` en `src/styles/custom.css:18`).
  - Cuerpo: `Merriweather` (`src/styles/custom.css:3`, `--sl-font-system` en `src/styles/custom.css:17`).
- Paleta y variables:
  - Mantener variables CSS definidas y su ethos mate (ver `src/styles/custom.css:5–19`), evitando colores saturados.

## Accesibilidad HTML
- Idioma del sitio: `lang: 'es'` configurado en Starlight (`astro.config.mjs:16–20`).
- Semántica:
  - Usar `h1–h6` de manera jerárquica; evitar saltos arbitrarios.
  - Proveer `alt` en imágenes y `aria-label` en controles interactivos cuando aplique.
  - Navegación por teclado: asegurar focus visible y orden lógico de tabulación.
  - Enlaces: texto descriptivo, evitar “haz clic aquí”.
  - Contraste: seguir las variables CSS para asegurar legibilidad en ambos temas.
- Componentes Starlight:
  - Preferir `StarlightPage` y componentes de `@astrojs/starlight/components` para consistencia y semántica (ejemplo en `src/pages/index.astro:24–88`).

## Escritura y organización de contenido
- Añade Markdown bajo `src/content/docs/<carpeta>`; Starlight autogenera el sidebar por carpeta.
- Mantén enlaces internos con el `base` `/syv` (ej.: `/syv/1_trasfondo/cronologia/`).
- Usa `indice.yaml` para decidir qué documentos se muestran y su orden sin revisar cada archivo.
- Para personajes, utiliza los campos adicionales indicados y coherencia con facciones y regiones definidas.

## Verificación y calidad
- No hay suite de tests configurada.
- Ejecuta `bun run astro check` para:
  - Revisión de tipos (TypeScript estricto).
  - Validaciones de contenido e integraciones de Astro.
- Antes de abrir PR o subir cambios: `bun run astro check` y `bun run build`.

## CI/CD
- Workflow: `.github/workflows/deploy.yml`
  - Dispara en `push` a `work` y `main`.
  - Instala con `bun install --frozen-lockfile`.
  - Compila con `bun run build`.
  - Publica `dist` a GitHub Pages.

## Convenciones
- Mantén `.astro` y `.ts` compatibles con TypeScript estricto.
- Usa componentes de Starlight (`StarlightPage`, `Card`, etc.) para páginas y bloques.
- Centraliza estilos en `src/styles/custom.css` y conserva los principios de estética militar y accesibilidad.
- No hay ESLint/Prettier configurado: sigue las convenciones por defecto de Astro/TypeScript y la guía de estilo definida aquí.

## Tips para agentes
- Ante cambios de contenido/imports, corre `bun run astro check` y un `bun run build` rápido.
- Verifica siempre el `base` `/syv` en rutas y enlaces.
- Para navegación avanzada u orden, confía en `indice.yaml` como SSOT y evita duplicar estructura en varios lugares.
