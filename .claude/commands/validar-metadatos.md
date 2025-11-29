---
name: validar-metadatos
description: Validar metadatos YAML (frontmatter) de archivo markdown - campos obligatorios, formato correcto, estándares españoles
---

# Validar Metadatos

Valida que **TODOS los campos YAML frontmatter** de un archivo `.md` sean:
- **Completos** (obligatorios presentes)
- **Correctos** (formato YAML válido)
- **Coherentes** (campo `facciones` en personajes, etc.)
- **Estándares** (español, minúsculas, kebab-case)

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
- ✓ `titulo:` ¿Presente?
- ✓ `carpeta:` ¿Presente?
- ✓ `descripcion:` ¿Presente?

### 3. Validación 2: FORMATO YAML
- ✓ Espacios después de `:` (": " siempre)
- ✗ Tabulaciones (cambiar a espacios)
- ✓ Arrays con guiones `-`
- ✓ Sintaxis YAML correcta

### 4. Validación 3: IDIOMA Y CASO
- ✗ Campos en inglés (title → titulo, date → fecha)
- ✓ TODO en español y minúsculas
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
- Ejemplo correcto: `carpeta: 3_personajes/principales`

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
- Campo 'titulo' presente y correcto
- Campo 'carpeta' relativo válido
- Tags en kebab-case

❌ ERRORES:
- Campo 'title' (inglés) → Cambiar a 'titulo'
- Campo 'facciones' faltante (es personaje)
- Ruta absoluta en 'carpeta'

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
titulo: [Nombre/Título exacto]                    # OBLIGATORIO
carpeta: [ruta/relativa/desde/raiz]              # OBLIGATORIO
descripcion: [Breve descripción 1-2 líneas]      # OBLIGATORIO
```

### PERSONAJES (3_personajes/)
```yaml
titulo: [Nombre completo]                        # OBLIGATORIO
carpeta: 3_personajes/[principals|secundarios|arquetipos]  # OBLIGATORIO
descripcion: [Rol PÚBLICO sin secretos]         # OBLIGATORIO
tags: [nombre-apellido, profesion, ubicacion]   # RECOMENDADO
facciones: []  o  ["Facción1", "Facción2"]      # OBLIGATORIO
alerta-spoilers: "Descripción si secretos"      # OBLIGATORIO si hay secretos
```

### FACCIONES (1_trasfondo/facciones/)
```yaml
titulo: [Nombre facción]                        # OBLIGATORIO
carpeta: 1_trasfondo/facciones/[subcarpeta]    # OBLIGATORIO
descripcion: [Breve descripción]                # OBLIGATORIO
tags: [faccion, tipo, ubicacion]               # RECOMENDADO
```

### UBICACIONES (2_atlas/)
```yaml
titulo: [Nombre ubicación]                      # OBLIGATORIO
carpeta: 2_atlas/ciudades/[ciudad]              # OBLIGATORIO
descripcion: [Características]                  # OBLIGATORIO
tags: [ubicacion, ciudad, zona, tipo]          # RECOMENDADO
region: "Dársena, Isla Oriental"                # RECOMENDADO
```

### DIEGESIS (4_diegesis/)
```yaml
titulo: [Nombre narrativa]                      # OBLIGATORIO
carpeta: 4_diegesis/[relatos|cartas|cronicas|diarios]  # OBLIGATORIO
descripcion: [Breve resumen]                   # OBLIGATORIO
tags: [tipo-contenido, ubicaciones, personajes] # RECOMENDADO
```

---

## Errores Comunes Detectados

```
1. Campos en inglés:
   ✗ title → ✓ titulo
   ✗ date → ✓ fecha
   ✗ folder → ✓ carpeta
   ✗ description → ✓ descripcion
   ✗ layout, author → NO USAR

2. Rutas absolutas:
   ✗ C:\Users\gcave\Dev\syv\3_personajes\
   ✓ 3_personajes/principales

3. Tabulaciones:
   ✗ [tab]titulo: Nombre
   ✓ titulo: Nombre (espacios)

4. Falta de espacios:
   ✗ titulo:Nombre
   ✓ titulo: Nombre

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
