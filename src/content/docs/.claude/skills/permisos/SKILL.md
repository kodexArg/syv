---
name: permisos
description: Especialista en Sistema PERMISOS SyV - validación, marcado y coherencia de alertas de información sensible

---

# Skill: Permission System

## Descripción General

El **Permission System Skill** es especialista en validación y administración del **Sistema PERMISOS** del universo Subordinación y Valor. Actúa como árbitro de coherencia narrativa para información sensible.

**Propósito**: Garantizar que información sensible esté correctamente marcada con sintaxis minimalista, validada contra canon, y coherente con cronología y facciones.

---

## Fuente de Verdad

**PERMISOS_SPEC.md**: `.claude/instructions/permisos-spec.md`

Especificación inmutable. Todos los skills/comandos leen esto como fuente única.

---

## Competencias Principales

### 1. Validar Estructura de PERMISOS

**Verifica**:
- ✅ Patrón `<!-- ICONO (SCOPE) -->` presente
- ✅ ICONO es uno de: `📖`, `🔐`, `🔐☠️`
- ✅ SCOPE en paréntesis: `(Región)` o `(SIA (Rama))`
- ✅ Cierre formato `<!-- /ICONO -->`: `<!-- /📖 -->`, `<!-- /🔐 -->`, `<!-- /🔐☠️ -->`
- ✅ Bloques separados (NUNCA inline dentro de párrafos)
- ✅ Sin nidamiento (un secreto dentro de otro)
- ✅ Balance perfecto: cada APERTURA tiene un CIERRE

**Output si error**:
```
❌ ERROR ESTRUCTURAL (Línea 42)
Patrón: <!-- 🔐 (SIA) -->
Problema: Cierre es /🔐 en lugar de <!-- /🔐 -->
Solución: Cambiar /🔐 a <!-- /🔐 -->
```

---

### 2. Validar Coherencia de Scope

**Verifica**:
- ✅ Scope existe:
  - Si región: En `2_atlas/` o REFERENCE.md
  - Si facción: En `1_trasfondo/facciones/` o REFERENCE.md
  - Si disciplina: Válida académicamente
- ✅ Scope apropiado para nivel:
  - SECRETO_MORTAL: Siempre facción/ubicación específica
  - SECRETO_DISCIPLINARIO: Disciplina o facción
  - SABER_POPULAR: Región/ubicación

**Output si error**:
```
⚠️ SCOPE NO ENCONTRADO (Línea 34)
Scope: "FaccionFantasma"
Búsqueda: REFERENCE.md ✗, 1_trasfondo/facciones/ ✗

Sugerencias:
  1. ¿"Arpistas"? (80% coincidencia)
  2. ¿"SIA"? (60% coincidencia)
  3. Crear facción primero

Acción: Ajustar scope
```

---

### 3. Validar Coherencia Temporal

**Verifica**:
- ✅ Información no existe antes de su evento cronológico
- ✅ Si hay fecha en documento, información es posterior
- ✅ Facciones mencionadas existían en la época

**Output si anacrónismo**:
```
⚠️ ANACRÓNISMO TEMPORAL (Línea 56)
Documento: 2050
Info: "Los Arpistas operaban..."
Problema: Arpistas fundada 2155

Decisión: Actualizar fecha o revisar contenido
```

---

### 4. Validar Coherencia Narrativa

**Verifica**:
- ✅ Personajes mencionados existen en 3_personajes/
- ✅ Ubicaciones mencionadas existen en 2_atlas/
- ✅ Lógica del secreto es coherente

**Output si inconsistencia**:
```
⚠️ INCONSISTENCIA
Secreto: "Sabemos que la Iglesia oculta tecnología"
Nivel: SABER_POPULAR (Dársena)
Problema: SABER_POPULAR no debería ser "oculto"

Sugerencia: Cambiar a SECRETO_MORTAL (Iglesia)
```

---

### 5. Sugerir Niveles Basado en Contenido

**Detecta palabras clave**:
- "secreto", "prohibido", "oculto", "herejía" → SECRETO_*
- "clandestino", "infiltración", "conspiración" → SECRETO_MORTAL
- Procedimientos técnicos → SECRETO_DISCIPLINARIO
- Leyendas locales → SABER_POPULAR

**Output ejemplo**:
```
🔍 SUGERENCIA DE NIVEL
Línea 45: "...los Arpistas mantienen computadores en Túberías..."

Nivel sugerido: 🔐☠️ SECRETO MORTAL (SIA)
Razón: Tecnología prohibida + perseguida activamente
Confianza: 95%

¿Aceptar?
```

---

### 6. Generar Reporte de Validación

**Formato de reporte**:
```
REPORTE DE VALIDACIÓN DE PERMISOS
Archivo: [path]

✅/❌ ESTRUCTURA: Sintaxis, balance, cierres, nidamiento
✅/❌ SCOPE: Existencia y apropiación por nivel
✅/❌ COHERENCIA TEMPORAL: Fechas vs eventos
✅/❌ COHERENCIA NARRATIVA: Personajes y ubicaciones

RESULTADO: ✅ VÁLIDO / ❌ INVÁLIDO
Total secretos: N (📖: X, 🔐: Y, 🔐☠️: Z)
```

---

## Workflows

### Workflow 1: Marcar PERMISOS en Nuevo Contenido

```
1. Lectura: Leer archivo completo
2. Análisis: Identificar secciones sensibles
3. Sugerencia: Proponer nivel + scope
4. Usuario decide: Aceptar/rechazar/ajustar
5. Inserción: Generar bloques con sintaxis exacta
6. Validación: Ejecutar validación final
```

### Workflow 2: Validar / Migrar PERMISOS

```
1. Escaneo: Buscar patrón <!-- ICONO (SCOPE) -->
2. Extracción: Extraer icono, scope, contenido
3. Validación: 6 verificaciones (estructura, scope, temporal, narrativa)
4. Reporte: Errores, advertencias, sugerencias
5. Si migración: Proponer cambios → diff → usuario confirma → aplicar
```

---

## Restricciones Estrictas

### ❌ NUNCA hacer

1. Modificar PERMISOS_SPEC.md (inmutable)
2. Permitir secretos inline dentro de párrafos
3. Validar scope que no existe sin proponer solución
4. Aceptar nidamiento de secretos
5. Cambiar cierre a formato HTML: debe ser `/ICONO`

### ✅ SIEMPRE hacer

1. Validar contra PERMISOS_SPEC.md exactamente
2. Proporcionar ejemplos en sugerencias
3. Explicar POR QUÉ un contenido merece cierto nivel
4. Mostrar diff antes de aplicar cambios
5. Validar final después de cualquier operación
6. Ordenar secretos al final del documento: 📖 → 🔐 → 🔐☠️ (excepción: en diégesis pueden ir intercalados si narrativamente lo requieren; nunca en cronología)

---

## Detección de Anomalías

### Patrón 1: Secreto inline (❌ ERROR)
```markdown
El doctor dijo <!-- 🔐 (Medicina) -->secretamente/🔐 que...
```
→ Debe ser bloque separado

### Patrón 2: Scope genérico
```markdown
<!-- 🔐☠️ (Secreto Importante) -->
```
→ Debe ser facción/ubicación específica

### Patrón 3: Cierre incorrecto
```markdown
<!-- 🔐☠️ (SIA) -->
Contenido...
<!-- 🔐☠️ -->  ← INCORRECTO
```
→ Debe ser `/🔐☠️`

### Patrón 4: Nidamiento
```markdown
<!-- 🔐☠️ (SIA) -->
Contenido...
  <!-- 🔐 (Arquitectura) -->
  ← PROHIBIDO
  /🔐
/🔐☠️
```

---

## Integración con Otros Skills

- **metadata-validator**: NO necesita validar PERMISOS (sin metadatos YAML)
- **chronology-keeper**: Consulta para coherencia temporal
- **faction-designer**: Valida scopes de facciones
- **character-architect**: Verifica personajes mencionados
- **geolocation-specialist**: Valida ubicaciones en scope

---

**Versión**: 2.0 (Sintaxis Simplificada)
**Dependencia**: PERMISOS_SPEC.md v2.0
**Estado**: Operativo
