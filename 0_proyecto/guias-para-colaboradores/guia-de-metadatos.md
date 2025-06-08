---
titulo: Guía de Metadatos para archivos Markdown
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Instrucciones y ejemplos para el uso correcto de metadatos en los archivos .md del proyecto SyV.
tags:
- guia
- metadatos
- colaboracion
---


# Guía de Metadatos para archivos `.md` en SyV

Esta guía explica el formato **único y correcto** de metadatos (front matter YAML) que deben tener todos los archivos Markdown del proyecto "Subordinación y Valor".

- El bloque de metadatos es obligatorio.
- Debe ir al inicio del archivo, delimitado por líneas `---`.
- Todos los campos deben estar en **español** y en **minúsculas**.
- Los siguientes campos van al inicio:
  - `titulo`: Título del documento. **Obligatorio**.
  - `carpeta`: Ruta relativa de la carpeta donde se ubica el archivo. **Obligatorio**.
  - `descripcion`: Breve descripción del contenido. **Obligatorio**.
  - `tags`: Etiquetas temáticas (array YAML). **Opcional pero recomendado**.
- Los siguientes son campos opcionales:
  - `region`: Región geográfica separada por comas, por ejemplo "Sud América, Argentina, Ciudad Dársena".
  - `fecha`: Fecha de referencia, se usa en cronología y atlas. 
- Los personajes tienen los siguientes campos opcionales (mejor explicados en la [Guía de Personajes](./guia-de-personajes.md)):
  - `nombre`: Nombre del personaje.
  - `facciones`: Listado en array YAML.
  - `alerta-spoiler`: Indica frases a presentar con discreción.


## Buenas prácticas
- Mantén los campos alineados y sin tabulaciones.
- Antes de usar `tags`, revisa si ya existe una etiqueta que se pueda usar.
- No repitas información entre campos.
- La descripción debe ser breve y clara.
- No uses caracteres especiales en los nombres de campos.
- No dejes el bloque de metadatos vacío.
- Si agregas nuevos campos, documenta su uso en esta guía.
- **No uses nunca campos como `layout`, `title`, `date` ni ningún campo en inglés.**


## Ejemplos correctos

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

```yaml
---
titulo: Atlas
carpeta: 2_atlas
descripcion: Geografía, mapas y aspectos físicos del universo.
---
```


---

**Actualiza esta guía si se agregan o modifican campos de metadatos en el proyecto.**
