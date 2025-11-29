---
name: validar-permisos
description: Validar estructura, coherencia y validez de PERMISOS en archivos - sintaxis exacta, scopes válidos, coherencia temporal y narrativa
---

# Validar Permisos

Valida que **TODOS los bloques PERMISOS** en un archivo estén:
- **Estructuralmente correctos** (sintaxis exacta según PERMISOS_SPEC.md)
- **Coherentes en scope** (facción/región/disciplina existe)
- **Válidos temporalmente** (información no anterior a evento)
- **Coherentes narrativamente** (personajes/ubicaciones existen)
- **Correctamente ubicados** (separados, NO inline)

---

## Inputs Soportados

1. **Archivo específico**:
   ```
   /validar-permisos ruta/al/archivo.md
   ```

2. **Archivo actual**:
   ```
   /validar-permisos
   ```
   (Valida archivo en edición)

---

## Proceso Completo

### 1. Extracción de Bloques PERMISOS
- Busca patrón: `<!-- [ICONO] (SCOPE) --> ... /[ICONO]`
- Extrae TODOS los bloques encontrados
- Enumera: BLOQUE 1, BLOQUE 2, etc.
- Registra línea de inicio

### 2. Validación 1: ESTRUCTURA EXACTA
Para CADA bloque:

**Patrón apertura**: `<!-- [ICONO] (SCOPE) -->`
- ✓ ICONO es: `📖`, `🔐`, o `🔐☠️`
- ✓ SCOPE entre paréntesis: `(SIA)`
- ✗ ICONO vacío o inválido
- ✗ SCOPE entre corchetes: `[SIA]` (ERROR)
- ✗ SCOPE sin paréntesis: `SIA` (ERROR)

**Contenido**: `[Texto sensible]`
- ✓ Puede ser múltiples párrafos
- ✗ Inline dentro párrafo: "texto <!-- 🔐 (SIA) -->contenido/🔐 más"
- ✓ Bloque separado (recomendado al final)

**Patrón cierre**: `/[ICONO]`
- ✓ Formato: `/🔐` (NO `<!-- /🔐 -->`)
- ✗ Cierre HTML: `<!-- 🔐 -->` (ERROR)
- ✓ ICONO coincide con apertura
- ✗ Desbalance: `/📖` cierra `<!-- 🔐` (ERROR)

### 3. Validación 2: BALANCE DE BLOQUES
- Contador apertura: N
- Contador cierre: N
- ✓ Si N_apertura == N_cierre: Balance OK
- ✗ Si N_apertura != N_cierre: Desbalance ERROR
- ✗ Sin nidamiento (bloque dentro bloque)

### 4. Validación 3: COHERENCIA DE SCOPE
Para CADA bloque:
- Extrae SCOPE de formato: `(SCOPE)`
- Valida que SCOPE existe:
  - Si región: ✓ Existe en `2_atlas/`
  - Si facción: ✓ Existe en `1_trasfondo/facciones/`
  - Si disciplina: ✓ Es académica válida
  - Si múltiple: ✓ Todos existen
  - ✗ Si scope no existe: ADVERTENCIA "Scope '[X]' no encontrado"

### 5. Validación 4: COHERENCIA TEMPORAL
- Si archivo tiene campo `fecha:` en YAML:
  - Información NO anterior a esa fecha
- Si menciona evento específico:
  - Información POSTERIOR a evento
- Facciones mencionadas:
  - Existían en época del documento
- ✗ ERROR si: Información anterior a evento

### 6. Validación 5: COHERENCIA NARRATIVA
- Personajes mencionados en bloque:
  - ✓ Existen en `3_personajes/`
- Ubicaciones mencionadas:
  - ✓ Existen en `2_atlas/`
- Facciones mencionadas:
  - ✓ Existen en `1_trasfondo/facciones/`
- Lógica coherente:
  - ✓ Información tiene sentido narrativo

### 7. Generación de Reporte Completo

```
═════════════════════════════════════════════════════════════
VALIDACIÓN DE PERMISOS
Archivo: [ruta del archivo]
═════════════════════════════════════════════════════════════

✅ ESTRUCTURA GENERAL
   Sintaxis: ✓ VÁLIDA / ✗ ERRORES
   Bloques: [N] encontrados
   Balance: ✓ Perfecto / ✗ Desbalance
   Nidamiento: ✓ Sin nidamiento / ✗ Detectado
   Cierres: ✓ Formato correcto / ✗ ERROR

✅ SCOPES DETECTADOS
   (SIA) - ✓ Existe
   (Región desconocida) - ✗ No encontrado

✅ COHERENCIA TEMPORAL
   Rango temporal: 2161-2178
   Facciones mencionadas existían: ✓
   Eventos posteriores: ✓ Coherente

✅ COHERENCIA NARRATIVA
   Personajes: [N] mencionados, todos ✓ existen
   Ubicaciones: [N] mencionadas, todas ✓ existen
   Lógica: ✓ Narrativamente coherente

📊 NIVELES DE SECRETOS
   📖 SABER_POPULAR: [N] bloques
   🔐 SECRETO_DISCIPLINARIO: [N] bloques
   🔐☠️ SECRETO MORTAL: [N] bloques

═════════════════════════════════════════════════════════════
RESULTADO: ✅ VÁLIDO / ⚠️ ADVERTENCIAS / ❌ INVÁLIDO
═════════════════════════════════════════════════════════════
```

---

## Sintaxis Exacta Requerida

### CORRECTO
```
<!-- 📖 (Dársena) -->
Contenido del secreto popular...
/📖
```

### INCORRECTO (Variantes que FALLAN)
```
<!-- 📖(Dársena) -->           ✗ Sin espacio antes paréntesis
<!-- 📖 [Dársena] -->          ✗ Corchetes en lugar paréntesis
<!-- 🔐 (SIA) -->              ✓ CORRECTO
/<!-- 📖 -->                   ✗ Cierre HTML (ERROR)
```

---

## Scopes Válidos

### REGIONES (Ubicaciones)
```
✓ (Dársena)
✓ (Córdoba)
✓ (Mendoza)
✓ (Túberías)
✓ (Barrio Norte)
✓ (Isla Oriental)
[Debe existir en 2_atlas/]
```

### FACCIONES
```
✓ (SIA)
✓ (Iglesia de Dársena)
✓ (Sagrada Inquisición)
✓ (Arpistas)
✓ (Guardianes de la Memoria)
[Debe existir en 1_trasfondo/facciones/]
```

### DISCIPLINAS
```
✓ (Arquitectura)
✓ (Ingeniería)
✓ (Teología)
✓ (Medicina)
[Debe ser válida académicamente]
```

### MÚLTIPLES
```
✓ (SIA, Iglesia)
✓ (Arquitectura, Ingeniería)
```

---

## Errores Detectados y Corregidos

```
ERROR 1: Cierre HTML
Detectado: /<!-- 🔐 -->
Corrección: /🔐

ERROR 2: Scope sin paréntesis
Detectado: <!-- 🔐 SIA -->
Corrección: <!-- 🔐 (SIA) -->

ERROR 3: Desbalance
Detectado: 5 aperturas, 4 cierres
Corrección: Agregar /ICONO faltante

ERROR 4: Nidamiento
Detectado: <!-- 🔐 --> ... <!-- 📖 --> ... /🔐 /📖
Corrección: Separar bloques

ERROR 5: Scope no existe
Detectado: <!-- 🔐 (FaccionFantasma) -->
Sugerencia: ¿"Arpistas"? ¿"SIA"?
```

---

## Ubicación en Documento

### RECOMENDADO (Bloque separado, fin)
```
## Descripción
[Contenido público]

## Secretos y Trasfondo Oculto

<!-- 📖 (Región) -->
Información pública...
/📖
```

### PERMITIDO (Intercalado)
```
[Texto]
<!-- 🔐 (Facción) -->
Información secreta...
/🔐
[Más texto]
```

### PROHIBIDO (Inline)
```
Texto con <!-- 🔐 (SIA) -->información secreta/🔐 interpolada
```

---

## Referencias de Validación

| Referencia | Ubicación | Uso |
|------------|-----------|-----|
| Especificación exacta | `.claude/instructions/permisos-spec.md` | **INMUTABLE** - fuente única verdad |
| Facciones válidas | `1_trasfondo/facciones/**` | Validar scopes |
| Regiones válidas | `2_atlas/ciudades/**` | Validar scopes |
| Personajes | `3_personajes/**` | Validar menciones |
| Cronología | `1_trasfondo/cronologia/cronologia.md` | Validar temporal |

---

## Output Esperado

```
═════════════════════════════════════════════════════════════
VALIDACIÓN DE PERMISOS: [archivo]
═════════════════════════════════════════════════════════════

✅ ESTRUCTURA: Válida
   Bloques: [N]
   Balance: Perfecto
   Sintaxis: Correcta

✅ SCOPES: [N] válidos

✅ COHERENCIA TEMPORAL: Coherente

✅ COHERENCIA NARRATIVA: Coherente

📊 NIVELES:
   📖 SABER_POPULAR: [N] bloques
   🔐 SECRETO_DISCIPLINARIO: [N] bloques
   🔐☠️ SECRETO MORTAL: [N] bloques

═════════════════════════════════════════════════════════════
RESULTADO: ✅ VÁLIDO - Apto para publicación
═════════════════════════════════════════════════════════════
```

---

**Skills consultados**: permisos (maestro), cronologia, facciones, ubicaciones, personajes, worldbuilding
**IMPORTANTE**: Especificación PERMISOS es INMUTABLE: `.claude/instructions/permisos-spec.md`
