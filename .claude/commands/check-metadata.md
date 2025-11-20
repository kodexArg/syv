---
name: check-metadata
description: Validar metadatos YAML (frontmatter) de archivo markdown y sugerir correcciones
---

# Validar Metadatos

Revisa frontmatter YAML de archivo `.md` y sugiere correcciones.

## Input

- Archivo específico: `/check-metadata ruta/al/archivo.md`
- O archivo actual en edición (detectar automáticamente)

## Checks de Validación

### 1. CAMPOS OBLIGATORIOS
✅ **Deben existir**:
- `titulo`
- `carpeta`
- `descripcion`

❌ **Si faltan**: Generar valores apropiados

### 2. FORMATO YAML
- ✅ Espaciado correcto después de `:` (debe haber espacio)
- ✅ Sin tabulaciones (solo espacios)
- ✅ Arrays con guiones: `- item`
- ❌ Sintaxis incorrecta

### 3. IDIOMA
- ✅ Todos los campos en español y minúsculas
- ❌ Campos en inglés: `title`, `date`, `layout`, `author`

### 4. CAMPOS ESPECÍFICOS POR TIPO

**Personajes**:
- ✅ Campo `facciones` OBLIGATORIO (puede estar vacío: `facciones: []`)
- ✅ Si tiene secretos, debe tener `alerta-spoilers`

**Cronología**:
- ⚠️ Opcional pero recomendado: `fecha`, `region`

### 5. TAGS
- ✅ En formato kebab-case minúsculas
- ✅ Preferir tags existentes antes de crear nuevos
- ❌ Demasiado genéricos (`personaje`, `importante`, `historia`)
- ❌ Duplicados

### 6. RUTA CARPETA
- ✅ Relativa desde raíz proyecto
- ❌ Absoluta (con `C:\` o `/home/`)
- ❌ Con notación de punto (`./` o `../`)

## Proceso

1. **Leer archivo** y extraer frontmatter
2. **Ejecutar validaciones** (lista arriba)
3. **Generar reporte**:

```
📝 VALIDACIÓN DE METADATOS: [archivo]

✅ CORRECTOS:
- Campo 'titulo' presente y correcto
- Campo 'carpeta' es ruta relativa válida

❌ ERRORES:
- Campo 'title' (inglés) → Usar 'titulo'
- Campo 'facciones' faltante (es personaje)
- Ruta absoluta en 'carpeta'

⚠️ ADVERTENCIAS:
- Tag 'personaje' es demasiado genérico
- Tag 'Detective' con mayúscula → usar 'detective'

🔧 FRONTMATTER CORREGIDO:
[Mostrar versión corregida completa]
```

## Correcciones Automáticas

Si usuario confirma, aplicar correcciones:
1. Convertir campos en inglés → español
2. Agregar campos faltantes
3. Corregir formato (espacios, mayúsculas)
4. Normalizar tags
5. Agregar campo `facciones` si es personaje

## Ejemplo

Archivo con errores:
```yaml
---
title: Damián DiConte
folder: c:\syv\3_personajes\principales
description: Detective...
tags: [Damián, Detective]
---
```

Reporte:
- ❌ `title` → `titulo`
- ❌ `folder` → `carpeta`
- ❌ Ruta absoluta → `3_personajes/principales`
- ❌ `description` → `descripcion`
- ❌ Tags con mayúsculas → `damian-diconte`, `detective`
- ❌ Falta campo `facciones`

Corrección:
```yaml
---
titulo: Damián DiConte
carpeta: 3_personajes/principales
descripcion: Detective...
tags:
  - damian-diconte
  - detective
facciones: []
---
```
