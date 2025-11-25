---
name: migrate-permissions
description: Migrar y aplicar PERMISOS a contenido existente del canon
---

# Migrar PERMISOS

Asiste en aplicar el Sistema PERMISOS a archivos ya existentes en el canon.

## Información Requerida

1. **Scope de migración**:
   - `--archivo [ruta]` - Un archivo
   - `--carpeta [ruta]` - Toda una carpeta
   - `--global` - TODO el canon

2. **Estrategia** (opcional):
   - `--interactive` (defecto) - Confirmar cada cambio
   - `--auto` - Acepta automáticamente

## Proceso

### 1. Análisis
Escanea archivos y detecta información sensible (palabras clave, patrones).

### 2. Proposición
Para cada candidato sugiere:
- Nivel + Scope
- Excerpt del texto
- Razón de protección
- Usuario: Aceptar/rechazar/ajustar

### 3. Validación
- ✓ Scope existe
- ✓ Coherencia temporal
- ✓ Coherencia narrativa

### 4. Diff
Muestra cambios **antes** de aplicar.

### 5. Confirmación
Usuario confirma o rechaza migración.

### 6. Aplicación
Inserta bloques PERMISOS.

### 7. Validación Post-Migración
Ejecuta `/validate-permissions` automáticamente.

---

## Ejemplos

### Migrar Un Archivo
```bash
/migrate-permissions --archivo 1_trasfondo/facciones/arpistas.md
```

### Migrar Carpeta
```bash
/migrate-permissions --carpeta 1_trasfondo/facciones
```

### Modo Automático
```bash
/migrate-permissions --global --auto
```

### Solo Reporte (sin aplicar)
```bash
/migrate-permissions --dry-run --formato json
```

---

## Output Ejemplo

```
Escaneando: 1_trasfondo/facciones/

Identificadas 47 secciones candidatas en 8 archivos...

┌─ Archivo: inquisicion.md
├─ CANDIDATO 1 (Línea 28-38)
│  Excerpt: "La SIA ha infiltrado la Prefectura Naval..."
│  Sugerencia: 🔐☠️ (Fuerzas Armadas)
│  ¿Aceptar? (S/n/ajustar): S
└─ CANDIDATO 2 (Línea 48-54)
   Excerpt: "Nadie sabe qué autoridades aprueban..."
   Sugerencia: 🔐☠️ (Iglesia)
   ¿Aceptar? (S/n/ajustar): S

(... más candidatos ...)

═══════════════════════════════════════════════════════════════
RESUMEN DE CAMBIOS

Archivos: 8
Secretos a insertar: 47
- 🔐☠️ SECRETO MORTAL: 23
- 🔐 SECRETO DISCIPLINARIO: 18
- 📖 SABER POPULAR: 6

¿Proceder? (S/n):
```

---

**Referencia**: PERMISOS_SPEC.md, /mark-permissions, /validate-permissions
