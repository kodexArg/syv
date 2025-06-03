---
titulo: Guía de Metadatos para archivos Markdown
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Instrucciones y ejemplos para el uso correcto de metadatos en los archivos .md del proyecto SyV.
posicion_sidebar: 0
tags:
- guia
- metadatos
- colaboracion
---

# Guía de Metadatos para archivos `.md` en SyV

Esta guía explica el formato **único y correcto** de metadatos (front matter YAML) que deben tener todos los archivos Markdown del proyecto "Subordinación y Valor".

## Formato obligatorio

- El bloque de metadatos debe ir al inicio del archivo, delimitado por líneas `---`.
- Todos los campos deben estar en **español** y en **minúsculas**.
- No se permiten campos en inglés ni campos de estilo blog (como `layout`, `title`, `date`).
- Usa solo los siguientes campos según corresponda:
  - `titulo`: Título del documento. **Obligatorio**.
  - `carpeta`: Ruta relativa de la carpeta donde se ubica el archivo. **Obligatorio**.
  - `descripcion`: Breve descripción del contenido. **Obligatorio**.
  - `posicion_sidebar`: Orden sugerido para menús o navegación. **Opcional**.
  - `tags`: Etiquetas temáticas (array YAML). **Opcional pero recomendado**.
  - `region`, `fecha`, `alcance`: Solo si aplica.

## Ejemplos correctos

### Ejemplo de entrada de cronología
```yaml
---
titulo: Año 2030: El año en que todo se fue al carajo (de una vez por todas y para siempre).
carpeta: 1_trasfondo/cronologia/2030-2039
descripcion: 
posicion_sidebar: 1
tags:
- cronologia
- 2030
- colapso
- global
region: Global, Argentina
---
```

### Ejemplo de entrada de cronología con descripción
```yaml
---
titulo: Año 2031: El Año del Cráter
carpeta: 1_trasfondo/cronologia/2030-2039
descripcion: El año en que Argentina se convirtió en un mosaico de territorios en guerra, las primeras ciudades-estado independientes del mundo, una zona de exclusión donde antes estuvo la capital, napas contaminadas y mapas redibujados mensualmente.
posicion_sidebar: 1
tags:
- cronologia
- 2031
- argentina
- fragmentacion
region: Argentina
---
```

### Ejemplo de archivo índice de carpeta
```yaml
---
titulo: Atlas
carpeta: 2_atlas
descripcion: Geografía, mapas y aspectos físicos del universo.
posicion_sidebar: 2
---
```

### Ejemplo de archivo índice de personajes
```yaml
---
titulo: Personajes
carpeta: 3_personajes
descripcion: Habitantes y grupos del mundo.
posicion_sidebar: 3
---
```

## Buenas prácticas
- Mantén los campos alineados y sin tabulaciones.
- Si un campo no aplica, puedes omitirlo.
- Usa arrays para `tags` y sepáralos por líneas.
- No repitas información entre campos.
- La descripción debe ser breve y clara.

## Advertencias
- No uses caracteres especiales en los nombres de campos.
- No dejes el bloque de metadatos vacío.
- Si agregas nuevos campos, documenta su uso en esta guía.
- **No uses nunca campos como `layout`, `title`, `date` ni ningún campo en inglés.**

---

**Actualiza esta guía si se agregan o modifican campos de metadatos en el proyecto.**
