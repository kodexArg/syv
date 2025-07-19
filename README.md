# Subordinación y Valor

"Subordinación y Valor" (SyV) es un proyecto de construcción de mundo colaborativo y un universo de ficción con un sitio web estático desarrollado en **TypeScript**.

## Sobre el universo

El mundo de SyV se sitúa en una Argentina futura, en el año 2178, reconstruida como una Confederación clérico-militar tras una serie de cataclismos conocidos como la "Gran Fractura" y la "Larga Noche". La sociedad se rige por una teología estricta y el "Anatema Mecánico", una prohibición total de la tecnología basada en inteligencia artificial o procesadores avanzados.

El poder se reparte entre la Iglesia, centrada en la Santa Sede de Dársena y su temida Santa Inquisición Argentina (SIA), y el brazo armado del estado, el Comando Unificado de las Fuerzas Armadas Confederadas (CUFAC).

Este sitio contiene el corpus de lore, personajes, historias y guías que conforman el universo de "Subordinación y Valor".

## Tecnologías

El proyecto está desarrollado **exclusivamente en TypeScript** utilizando tecnologías modernas:

- **[Astro 5.10.1](https://astro.build)**: Framework para sitios web estáticos
- **[Tailwind CSS 4.1.11](https://tailwindcss.com)**: Framework de CSS utility-first con @tailwindcss/vite
- **[MDX](https://mdxjs.com)**: Soporte para archivos markdown con componentes JSX
- **TypeScript**: Configuración estricta para tipado estático
- **Rehype plugins**: Para generación automática de slugs y enlaces de encabezados

### Desarrollo rápido

Para iniciar el servidor de desarrollo, utiliza el script incluido:

```bash
./run_dev.sh
```

Este script automáticamente navega al directorio `astro/` y ejecuta `npm run dev`.

### Comandos disponibles

Todos los comandos se ejecutan desde la carpeta `astro/`:

```bash
cd astro/
npm install          # Instala las dependencias
npm run dev          # Inicia el servidor de desarrollo en localhost:4321
npm run build        # Construye el sitio para producción en ./dist/
npm run preview      # Previsualiza la build localmente
```

## Arquitectura del proyecto

### Estructura de directorios

```
/
├── astro/                    # Aplicación web TypeScript
│   ├── src/
│   │   ├── components/       # Componentes UI reutilizables
│   │   │   ├── ui/          # Componentes base (Icon, etc.)
│   │   │   └── pages/       # Componentes de página específicos
│   │   ├── content/         # Configuración de colecciones
│   │   ├── layouts/         # Layouts base y especializados
│   │   │   ├── partials/    # Componentes de layout (Navbar, Sidebar, Footer)
│   │   │   ├── BaseLayout.astro     # Layout principal
│   │   │   └── MarkdownLayout.astro # Layout para contenido markdown
│   │   ├── pages/           # Rutas de la aplicación
│   │   │   ├── docs/        # Sistema de documentación dinámico
│   │   │   └── index.astro  # Página de inicio
│   │   └── styles/          # Estilos globales con tema personalizado
│   ├── public/              # Archivos estáticos
│   └── astro.config.mjs     # Configuración con aliases y plugins
├── 0_proyecto/              # Guías y documentación del proyecto
├── 1_trasfondo/             # Contenido histórico y contextual
├── 2_atlas/                 # Información geográfica
├── 3_personajes/            # Perfiles de personajes
├── 4_diegesis/              # Narrativas y historias
├── 5_aventuras/             # Aventuras y escenarios
├── 6_media/                 # Recursos multimedia
└── run_dev.sh               # Script de desarrollo rápido
```

### Sistema de colecciones

El proyecto utiliza un sistema avanzado de colecciones de Astro que organiza automáticamente el contenido:

- **Carga dinámica**: Utiliza `glob()` loader para cargar archivos markdown
- **Esquemas flexibles**: Validación de metadatos con Zod
- **Aliases configurados**: Acceso directo a carpetas de contenido (`@proyecto`, `@trasfondo`, etc.)
- **Rutas dinámicas**: Generación automática de páginas en `/docs/[collection]/[...slug]`

### Navegación inteligente

- **Sidebar dinámico**: Organización automática por carpetas y colecciones
- **Breadcrumbs**: Navegación contextual en la barra superior
- **Tabla de contenidos**: TOC automático para documentos markdown
- **Iconografía consistente**: Sistema de iconos SVG integrado

### Características avanzadas

- **Tipografía optimizada**: Fuentes Google Fonts (Crimson Text + Source Sans 3)
- **Tema personalizado**: Paleta de colores militares/oliva coherente con el universo
- **Metadatos enriquecidos**: Soporte completo para front matter YAML
- **SEO optimizado**: Meta tags, Open Graph y Twitter Cards
- **Responsive design**: Adaptado para todos los dispositivos

## Despliegue

### GitHub Pages automático

El repositorio incluye un workflow de GitHub Actions en `.github/workflows/deploy.yml` que:

1. Se ejecuta automáticamente en push a las ramas `work` o `main`
2. Construye el sitio desde el directorio `astro/` usando TypeScript
3. Despliega automáticamente en `https://kodexArg.github.io/syv/`

**Configuración requerida:**
- Asegurar que la opción **Pages** del repositorio esté configurada para usar *GitHub Actions*

### Build local

```bash
cd astro/
npm run build      # Genera ./dist/ con el sitio estático
npm run preview    # Previsualiza la build localmente
```

## Colaboración

Antes de contribuir al proyecto, consulta las guías en `0_proyecto/guias-para-colaboradores/`, comenzando por `manual-del-colaborador.md`. El proyecto mantiene estándares estrictos de formato y estructura para preservar la coherencia del universo de ficción.

