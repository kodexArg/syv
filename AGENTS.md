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
- Layout principal:
  - Página clave: `src/pages/index.astro` usa `StarlightPage` para orquestar el layout base (src/pages/index.astro:24).
  - El layout provee estructura semántica consistente. Actúa como ancla de accesibilidad de lectura y estilo.

## Metadatos en Markdown (frontmatter)
- Frontmatter recomendado para todos los `.md`:
  - `title`: string.
  - `description`: string.
  - `slug`: string — Opcional; usar solo si se requiere un slug específico. El slug es también el nombre del archivo.
  - `folder`: string — Opcional;
  - `tags`: array de slugs — Referencias a otros documentos del sitio en forma de tags (que son sus slugs).Deben corresponder con entradas en `indice.yaml`, o nombres de archivo sin extensión.
  - `region`: string — Opcional; específica de la Confederación Argentina.
  - `fecha`: string | number | date — Se normaliza a `YYYY-MM-DD` (`src/content.config.ts:15–21`).
- Frontmatter adicional para `3_personajes`:
  - `nombre`: string — Nombre del personaje.
  - `facciones`: array<string> — Lista de facciones asociadas.
  - `spoilers`: array<string> — Advertencias o notas sensibles.
- Se espera `title` y `description` para buena experiencia de lectura y navegación.

## Índice canónico (SSOT)
- Reglas:
  - Usa `indice.yaml` como única fuente de verdad sobre el contenido visible y su organización. 
  - El código puede y debe apoyarse en `indice.yaml` para navegación, listados y validaciones.
  - Si una entrada existe en `indice.yaml`, se considera seleccionada para exposición pública; ausencias indican que no debe mostrarse.

## Estructura de la documentación
- Presenta un índice y siete secciones principales:
    - Proyecto
    - Trasfondo
    - Atlas
    - Personajes
    - Diégesis
    - Aventuras
    - Media
- Esta estructura está reflejada en el sidebar autogenerado (astro.config.mjs:25–33) y debe mantenerse estable.
- Conocer esta información es esencial para las decisiones de diseño gráfico y de la UI/UX

## Estilo visual y tipografía
- Principios de diseño:
  - Estética militarista, colores apagados/mate, alto contraste legible.
  - Diseño centrado en lectura cómoda, tipografías claras, justificado moderado.
  - Accesibilidad: contraste suficiente, semántica correcta.
- Tipografías:
  - Título/sello “SUBORDINACIÓN Y VALOR”: `Stardos Stencil` (`src/styles/custom.css:1`, `.site-title` en `src/styles/custom.css:21–35`).
  - El resto de la tipografía queda abierto al diseño, respetando accesibilidad, estética militar y colores mate.
- Paleta y variables:
  - Mantener variables CSS definidas y su ethos mate (ver `src/styles/custom.css`), evitando colores saturados.

## Accesibilidad HTML
- Idioma del sitio: `lang: 'es'` configurado en Starlight (`astro.config.mjs`).
- Semántica:
  - Usar `h1–h4` de manera jerárquica; evitar saltos arbitrarios.
  - Proveer `alt` en imágenes y `aria-label` en controles interactivos cuando aplique.
  - Contraste: seguir las variables CSS para asegurar legibilidad en ambos temas.
- Componentes Starlight:
  - Preferir `StarlightPage` y componentes de `@astrojs/starlight/components` para consistencia y semántica (ejemplo en `src/pages/index.astro`).
- Página crítica de layouts:
  - Ubicación y uso: `src/pages/index.astro` invoca `StarlightPage` para el layout base (src/pages/index.astro:24).
  - Qué necesitamos: landmarks semánticos (`header`, `nav`, `main`, `aside`, `footer`), “saltar al contenido”, foco visible y orden de tabulación correcto; roles ARIA cuando corresponda.
  - Libertad de diseño: se deja abierta la implementación futura; la prioridad es cumplir requisitos de accesibilidad y mantener el estilo militar y colores mate definidos en variables.

## Escritura y organización de contenido
- Markdowns de Subordinación y Valor en `src/content/docs/<carpeta>`; Starlight autogenera el sidebar por carpeta.
- Mantén enlaces internos con el `base` `/syv` (ej.: `/syv/1_trasfondo/cronologia/`).
- Usa `indice.yaml` para decidir qué documentos se muestran y su orden sin revisar cada archivo.
- Para personajes, utiliza los campos adicionales indicados y coherencia con facciones y regiones definidas.

## CI/CD
- Workflow: `.github/workflows/deploy.yml`
  - Dispara en `push` a `work` y `main`.
  - Instala con `bun install --frozen-lockfile`.
  - Compila con `bun run build`.
  - Publica `dist` a GitHub Pages.

## Convenciones
- Usa componentes de Starlight (`StarlightPage`, `Card`, etc.) para páginas y bloques.
- Centraliza estilos en `src/styles/custom.css` y conserva los principios de estética militar y accesibilidad.

## Tips para agentes
- Ante cambios de contenido/imports, corre `bun run astro check` y un `bun run build` rápido.
- Verifica siempre el `base` `/syv` en rutas y enlaces.
- Para navegación avanzada u orden, confía en `indice.yaml` como SSOT y evita duplicar estructura en varios lugares.
