---
name: validate-permissions
description: Validar estructura y coherencia de PERMISOS en archivos markdown
---

# Validar PERMISOS

Valida que los PERMISOS en un archivo estén correctamente estructurados y sean coherentes.

## Información Requerida

1. **Archivo**: Ruta del documento a validar (relativa o actual)

## Validaciones Ejecutadas

### 1. Validación de Estructura
- ✅ Patrón `<!-- ICONO (SCOPE) -->` presente
- ✅ ICONO es: `📖`, `🔐`, o `🔐☠️`
- ✅ SCOPE en paréntesis: `(Región)`, `(SIA)`, etc.
- ✅ Cierre `/ICONO`: `/📖`, `/🔐`, `/🔐☠️`
- ✅ Bloques separados (NUNCA inline)
- ✅ Sin nidamiento
- ✅ Balance perfecto (cada apertura tiene cierre)

### 2. Validación de Scope
- ✅ Scope existe en canon
- ✅ Scope apropiado para nivel

### 3. Validación de Coherencia Temporal
- ✅ Información no anterior a su evento cronológico
- ✅ Facciones existían en la época

### 4. Validación de Coherencia Narrativa
- ✅ Personajes mencionados existen
- ✅ Ubicaciones mencionadas existen
- ✅ Lógica coherente

---

## Output Ejemplo

### Validación Exitosa
```
═══════════════════════════════════════════════════════════════
REPORTE DE VALIDACIÓN DE PERMISOS
Archivo: 1_trasfondo/facciones/arpistas.md
═══════════════════════════════════════════════════════════════

✅ ESTRUCTURA GENERAL
- Sintaxis: Válida
- Bloques: 2 (balance perfecto)
- Cierres: Formato correcto (/🔐☠️, /🔐)

✅ SCOPES
1. (SIA) - Existe ✓
2. (Acceso previo: Arpistas) - Válido ✓

✅ COHERENCIA TEMPORAL
- Rango: 2155-2178
- Eventos: Coherentes ✓

✅ COHERENCIA NARRATIVA
- Personajes: Francisco de la Cruz ✓
- Ubicaciones: Túberías, Barrio Norte ✓

═══════════════════════════════════════════════════════════════
RESULTADO: ✅ VÁLIDO

Total de secretos: 2
- 🔐☠️ SECRETO MORTAL: 1
- 🔐 SECRETO DISCIPLINARIO: 1

Listo para publicación.
═══════════════════════════════════════════════════════════════
```

### Con Errores
```
❌ ERROR ESTRUCTURAL (Línea 45)
Patrón: <!-- 🔐 (SIA) -->
Problema: Cierre es <!-- 🔐 --> en lugar de /🔐
Solución: Cambiar a /🔐

⚠️ SCOPE NO ENCONTRADO (Línea 67)
Scope: "FaccionFantasma"
Búsqueda: No existe

Sugerencias:
  1. ¿"Arpistas"? (80%)
  2. ¿"SIA"? (60%)

═══════════════════════════════════════════════════════════════
RESULTADO: ❌ INVÁLIDO - 1 error, 1 advertencia

Acción requerida: Corregir errores antes de publicar
═══════════════════════════════════════════════════════════════
```

---

## Uso

### Validar Archivo Actual
```bash
/validate-permissions
```

### Validar Archivo Específico
```bash
/validate-permissions 1_trasfondo/facciones/arpistas.md
```

### Formato JSON
```bash
/validate-permissions --format json
```

---

**Referencia**: PERMISOS_SPEC.md, /mark-permissions
