---
name: validar-metadatos
description: Validar metadatos YAML (frontmatter) de archivo markdown - campos obligatorios, formato correcto, estándares del proyecto (inglés)

---

# Validar Metadatos

Valida que **TODOS los campos YAML frontmatter** de un archivo `.md` sean:
- **Completos** (obligatorios presentes)
- **Correctos** (formato YAML válido)
- **Coherentes** (campo `facciones` en personajes, etc.)
- **Estándares** (campos en inglés, valores en kebab-case)

---

## Inputs Soportados

1. **Archivo específico**:
   ```
   /validar-metadatos ruta/al/archivo.md
   ```

2. **Archivo actual**:
   ```
   /validar-metadatos
   ```
   (Valida archivo en edición)

---

## Proceso Completo

### 1. Extracción de Frontmatter
- Lee archivo
- Extrae bloque YAML (--- ... ---)
- Separa del contenido

### 2. Validación 1: CAMPOS OBLIGATORIOS
Para TODO archivo:
- ✓ `title:` ¿Presente?
- ✓ `folder:` ¿Presente?
- ✓ `description:` ¿Presente?

### 3. Validación 2: FORMATO YAML
- ✓ Espacios después de `:` (": " siempre)
- ✗ Tabulaciones (cambiar a espacios)
- ✓ Arrays con guiones `-`
- ✓ Sintaxis YAML correcta

### 4. Validación 3: IDIOMA Y CASO
- ✗ Campos en español (titulo → title, fecha → date)
- ✓ Campos en INGLÉS y minúsculas (title, folder, description)
- ✗ Mayúsculas en claves

### 5. Validación 4: CAMPOS ESPECÍFICOS POR TIPO

**PERSONAJES** (3_personajes/):
- ✓ `facciones:` OBLIGATORIO (array, puede estar vacío)
- Si tiene secretos: ✓ `alerta-spoilers:` OBLIGATORIO

**UBICACIONES** (2_atlas/):
- ✓ `region:` recomendado (ubicación geográfica)
- Formato: `region: "Dársena, Isla Oriental"`

**DIEGESIS** (4_diegesis/):
- ✓ Tipo incluido en tags
- Ejemplo: `tags: [relato, ubicacion, personaje]`

### 6. Validación 5: RUTA CARPETA
- ✓ Relativa desde raíz proyecto
- ✗ Absoluta (C:\Users\, /home/)
- ✗ Con notación punto (./, ../)
- Ejemplo correcto: `folder: 3_personajes/principales`

### 7. Validación 6: TAGS
- ✓ Formato array YAML: `tags: [tag1, tag2]`
- ✗ Mayúsculas (convertir minúsculas)
- ✗ Espacios (usar kebab-case)
- ✓ Preferir existentes del corpus
- ❌ Evitar genéricos: "personaje", "importante", "historia"
- Máximo 8-10 tags

### 8. Generación de Reporte

```
✅ CORRECTOS:
- Campo 'title' presente y correcto
- Campo 'folder' relativo válido
- Tags en kebab-case

❌ ERRORES:
- Campo 'titulo' (español) → Cambiar a 'title'
- Campo 'facciones' faltante (es personaje)
- Ruta absoluta en 'folder'

⚠️ ADVERTENCIAS:
- Tag 'personaje' es demasiado genérico
- 15 tags (máximo 10 recomendado)

🔧 FRONTMATTER CORREGIDO:
---
[YAML corregido completo]
---
```

---

## Campos Obligatorios por Tipo

### GLOBALES (TODO archivo)
```yaml
title: [Nombre/Título exacto]                    # OBLIGATORIO
folder: [ruta/relativa/desde/raiz]              # OBLIGATORIO
description: [Breve descripción 1-2 líneas]      # OBLIGATORIO
```

### PERSONAJES (3_personajes/)
```yaml
title: [Nombre completo]                        # OBLIGATORIO
folder: 3_personajes/[principales|secundarios|arquetipos]  # OBLIGATORIO
description: [Rol PÚBLICO sin secretos]         # OBLIGATORIO
tags: [nombre-apellido, profesion, ubicacion]   # RECOMENDADO
facciones: []  o  ["Facción1", "Facción2"]      # OBLIGATORIO
spoilers: "Descripción si secretos"             # OBLIGATORIO si hay secretos
```

### FACCIONES (1_trasfondo/facciones/)
```yaml
title: [Nombre facción]                        # OBLIGATORIO
folder: 1_trasfondo/facciones/[subcarpeta]    # OBLIGATORIO
description: [Breve descripción]                # OBLIGATORIO
tags: [faccion, tipo, ubicacion]               # RECOMENDADO
```

### UBICACIONES (2_atlas/)
```yaml
title: [Nombre ubicación]                      # OBLIGATORIO
folder: 2_atlas/ciudades/[ciudad]              # OBLIGATORIO
description: [Características]                  # OBLIGATORIO
tags: [ubicacion, ciudad, zona, tipo]          # RECOMENDADO
region: "Dársena, Isla Oriental"                # RECOMENDADO
```

### DIEGESIS (4_diegesis/)
```yaml
title: [Nombre narrativa]                      # OBLIGATORIO
folder: 4_diegesis/[relatos|cartas|cronicas|diarios]  # OBLIGATORIO
description: [Breve resumen]                   # OBLIGATORIO
tags: [tipo-contenido, ubicaciones, personajes] # RECOMENDADO
```

---

## Errores Comunes Detectados

```
1. Campos en español:
   ✗ titulo → ✓ title
   ✗ fecha → ✓ date
   ✗ carpeta → ✓ folder
   ✗ descripcion → ✓ description
   ✗ layout, author → NO USAR

2. Rutas absolutas:
   ✗ C:\Users\gcave\Dev\syv\3_personajes\
   ✓ 3_personajes/principales

3. Tabulaciones:
   ✗ [tab]title: Nombre
   ✓ title: Nombre (espacios)

4. Falta de espacios:
   ✗ title:Nombre
   ✓ title: Nombre

5. Campo facciones faltante:
   ✗ [en personaje sin campo]
   ✓ facciones: []

6. Tags con mayúsculas:
   ✗ tags: [Personaje, Detective]
   ✓ tags: [personaje, detective]

7. Tags genéricos:
   ✗ tags: [personaje, importante, historia]
   ✓ tags: [damian-diconte, detective, cordoba]
```

---

## Referencias de Validación

| Referencia | Ubicación | Uso |
|------------|-----------|-----|
| Especificación de campos | `.claude/skills/metadatos/SKILL.md` | Validar campos |
| Tags estándar | `.claude/skills/metadatos/SKILL.md` + corpus | Validar/sugerir tags |
| Guía de metadatos | `0_proyecto/guias-para-colaboradores/guia-de-metadatos.md` | Referencia |

---

## Output Esperado

```
✅ METADATOS VÁLIDOS: [archivo]

O

⚠️ PROBLEMAS DETECTADOS EN METADATOS

❌ ERRORES:
- [descripción de error]
- [referencia a campo incorrecto]

⚠️ ADVERTENCIAS:
- [mejora sugerida]

🔧 FRONTMATTER CORREGIDO:
---
[YAML corregido completo]
---
```

---

**Skills consultados**: metadatos (maestro), worldbuilding
