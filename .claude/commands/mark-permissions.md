---
name: mark-permissions
description: Asistir interactivamente en marcar PERMISOS en contenido narrativo
---

# Marcar PERMISOS

Asistente interactivo para insertar marcadores de información sensible en documentos markdown.

## Información Requerida

1. **Archivo**: Ruta del documento a marcar (relativa o actual)
2. **Secciones**: Qué párrafos/bloques requieren PERMISOS (opcional - puede sugerir automáticamente)

## Proceso

### 1. Lectura del Documento
- Leer archivo completo
- Identificar candidatos (contienen información sensible)
- Proponer nivel de PERMISO + scope

### 2. Validación Inicial
- ✓ Verifica que scope existe (facción/región/disciplina en canon)
- ✓ Verifica coherencia temporal
- ✓ Verifica coherencia narrativa

### 3. Propuesta Interactiva

Para cada candidato, muestra:
- **Excerpt**: Fragmento del texto (3-5 líneas)
- **Nivel sugerido**: 📖 | 🔐 | 🔐☠️
- **Scope sugerido**: `(SIA)`, `(Dársena)`, etc.
- **Razón**: Por qué merece este nivel
- **Acción**: Aceptar/rechazar/ajustar

**Ejemplo**:
```
┌─ CANDIDATO 1 (Línea 42-48)
├─ Excerpt: "Los Arpistas mantienen computadores pre-Anatema
│   completamente funcionales..."
├─ Nivel: 🔐☠️ SECRETO MORTAL
├─ Scope: (SIA)
├─ Razón: Tecnología prohibida + perseguida activamente
└─ ¿Aceptar? (S/n/ajustar):
```

### 4. Inserción

Una vez confirmado, inserta:

```markdown
<!-- ICONO (SCOPE) -->
Contenido...
/ICONO
```

**Reglas**:
- ✓ Bloque separado, NUNCA inline
- ✓ Scope en paréntesis: `(SIA)` no `[SIA]`
- ✓ Cierre con barra: `/🔐` no `<!-- 🔐 -->`
- ✓ Se prefiere al final, pero en historias puede ir intercalado

### 5. Validación Final

Ejecuta `/validate-permissions` automáticamente después de insertar.

---

## Niveles y Scopes Válidos

### Niveles
- `📖` (SABER_POPULAR) - Población local
- `🔐` (SECRETO_DISCIPLINARIO) - Requiere especialización
- `🔐☠️` (SECRETO_MORTAL) - Información crítica

### Scopes Válidos

**Regiones**: `(Dársena)`, `(Córdoba)`, `(Túberías)`, `(Barrio Norte)`, etc.

**Facciones**: `(SIA)`, `(Iglesia)`, `(Arpistas)`, `(Guardianes)`, etc.
- Con ramas: `(SIA (Hermanas de Batalla))`, `(Iglesia (Exorcistas))`

**Disciplinas**: `(Arquitectura)`, `(Ingeniería)`, `(Teología)`, etc.

**Múltiples**: `(SIA, Iglesia)`, `(Arquitectura, Ingeniería)`

---

## Validaciones Automáticas

Durante el marcado:

- ✓ **Scope existe**: Si menciona facción/región → Debe existir en canon
- ✓ **Coherencia temporal**: Información no anterior a su evento
- ✓ **Coherencia narrativa**: Personajes y ubicaciones mencionados existen
- ✓ **Sintaxis exacta**: Contra PERMISOS_SPEC.md

**Si hay error**:
```
⚠️ ADVERTENCIA
- Problema: Scope "FaccionFantasma" no existe
- Sugerencias:
  1. ¿"Arpistas"? (80% coincidencia)
  2. ¿"SIA"? (60% coincidencia)
- Acción: Confirmar o ajustar scope
```

---

## Ejemplos

### Uso Básico
```bash
/mark-permissions
```
Marca el archivo actual interactivamente.

### Marcar Archivo Específico
```bash
/mark-permissions 1_trasfondo/facciones/arpistas.md
```

### Marcar Solo Sección
```bash
/mark-permissions --line-range 42-67
```
Solo líneas 42-67.

### Modo Automático
```bash
/mark-permissions --auto-accept
```
Acepta todas las sugerencias automáticamente (cuidado).

---

## Flujo Completo: Ejemplo

**Usuario**: `/mark-permissions 1_trasfondo/facciones/arpistas.md`

**Sistema**:
```
Analizando: 1_trasfondo/facciones/arpistas.md

Identificadas 2 secciones candidatas:

┌─ CANDIDATO 1 (Línea 34-42)
├─ Excerpt: "Los Arpistas operan actualmente en Túberías
│   con computadores pre-Anatema funcionales"
├─ Nivel: 🔐☠️ SECRETO MORTAL
├─ Scope: (SIA)
├─ Razón: Tecnología prohibida + perseguida por SIA
├─ Validación: ✓ SIA existe ✓ Coherente temporalmente
└─ ¿Aceptar? (S/n/ajustar): S

┌─ CANDIDATO 2 (Línea 68-75)
├─ Excerpt: "Contacto local: Dr. Francisco de la Cruz"
├─ Nivel: 🔐 SECRETO DISCIPLINARIO
├─ Scope: (Acceso previo: Arpistas)
├─ Razón: Información requiere conocimiento previo
├─ Validación: ✓ Válido
└─ ¿Aceptar? (S/n/ajustar): S
```

**Sistema completa**:
```
Insertando PERMISOS...

✓ Bloque 1 insertado (Línea 34)
  <!-- 🔐☠️ (SIA) -->
  Los Arpistas operan actualmente...
  /🔐☠️

✓ Bloque 2 insertado (Línea 72)
  <!-- 🔐 (Acceso previo: Arpistas) -->
  Contacto local: Dr. Francisco de la Cruz
  /🔐

Validando...
═════════════════════════════════════════════
✅ VALIDACIÓN EXITOSA

Bloques: 2
- SECRETO_MORTAL: 1
- SECRETO_DISCIPLINARIO: 1
Sintaxis: ✓ Correcta
Scopes: ✓ Válidos

Archivo listo para usar.
═════════════════════════════════════════════
```

---

**Referencia**: PERMISOS_SPEC.md, README.md, /validate-permissions
