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

- El bloque de metadatos es obligatorio.
- Debe ir al inicio del archivo, delimitado por líneas `---`.
- Todos los campos deben estar en **español** y en **minúsculas**.
- Los siguientes campos van al inicio:
  - `titulo`: Título del documento. **Obligatorio**.
  - `carpeta`: Ruta relativa de la carpeta donde se ubica el archivo. **Obligatorio**.
  - `descripcion`: Breve descripción del contenido. **Obligatorio**.
  - `tags`: Etiquetas temáticas (array YAML). **Opcional pero recomendado**.
  - `region`, `fecha`, `alcance`: Solo si aplica.

## Ejemplos correctos

### Ejemplo de entrada de cronología con descripción
```yaml
---
titulo: Año 2031: El Año del Cráter
carpeta: 1_trasfondo/cronologia/2030-2039
descripcion: El año en que Argentina se convirtió en un mosaico de territorios en guerra, las primeras ciudades-estado independientes del mundo, una zona de exclusión donde antes estuvo la capital, napas contaminadas y mapas redibujados mensualmente.
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
---
```

## Buenas prácticas
- Mantén los campos alineados y sin tabulaciones.
- Antes de usar `tags`, revisa si ya existe una etiqueta que se pueda usar.
- No repitas información entre campos.
- La descripción debe ser breve y clara.
- No uses caracteres especiales en los nombres de campos.
- No dejes el bloque de metadatos vacío.
- Si agregas nuevos campos, documenta su uso en esta guía.
- **No uses nunca campos como `layout`, `title`, `date` ni ningún campo en inglés.**

---

**Actualiza esta guía si se agregan o modifican campos de metadatos en el proyecto.**
