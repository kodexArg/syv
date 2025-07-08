# Subordinación y Valor

"Subordinación y Valor" (SyV) es un proyecto de construcción de mundo colaborativo y un universo de ficción.

## Sobre el universo

El mundo de SyV se sitúa en una Argentina futura, en el año 2178, reconstruida como una Confederación clérico-militar tras una serie de cataclismos conocidos como la "Gran Fractura" y la "Larga Noche". La sociedad se rige por una teología estricta y el "Anatema Mecánico", una prohibición total de la tecnología basada en inteligencia artificial o procesadores avanzados.

El poder se reparte entre la Iglesia, centrada en la Santa Sede de Dársena y su temida Santa Inquisición Argentina (SIA), y el brazo armado del estado, el Comando Unificado de las Fuerzas Armadas Confederadas (CUFAC).

Este sitio contiene el corpus de lore, personajes, historias y guías que conforman el universo de "Subordinación y Valor".

## Desarrollo

Este proyecto utiliza [Astro](https://astro.build) para generar el sitio web estático con [Tailwind CSS 4](https://tailwindcss.com) para los estilos.

### Comandos disponibles

Todos los comandos se ejecutan desde la carpeta `astro/`:

```bash
cd astro/
npm install          # Instala las dependencias
npm run dev          # Inicia el servidor de desarrollo en localhost:4321
npm run build        # Construye el sitio para producción en ./dist/
npm run preview      # Previsualiza la build localmente
```

### Tecnologías utilizadas

- **Astro 5**: Framework para sitios web estáticos
- **Tailwind CSS 4**: Framework de CSS utility-first
- **@tailwindcss/typography**: Plugin para mejorar la tipografía en contenido markdown
- **MDX**: Soporte para archivos markdown con componentes JSX
- **TypeScript**: Tipado estático para JavaScript

### Estructura del proyecto

- **Contenido**: Los archivos de contenido están en las carpetas numeradas del directorio raíz
- **Sitio web**: El código de Astro está en la carpeta `astro/`
- **Guías**: Las guías para colaboradores están en `0_proyecto/guias-para-colaboradores/`


### Despliegue en GitHub Pages

El repositorio incluye un _workflow_ de GitHub Actions en `.github/workflows/deploy.yml` que construye el sitio desde `astro/` y lo publica automaticamente en GitHub Pages.

1. Asegúrate de que la opción **Pages** del repositorio esté configurada para utilizar *GitHub Actions*.
2. Al hacer _push_ a las ramas `work` o `main` se generará la carpeta `dist/` y se desplegará en `https://kodexArg.github.io/syv/`.

