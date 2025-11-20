---
name: new-faction
description: Crear facción completa con estructura narrativa fluida y relaciones sugeridas
---

# Crear Nueva Facción

Genera archivo de facción con estructura narrativa fluida y relaciones con facciones existentes.

## Información Requerida

1. **Nombre de la facción**
2. **Tipo**: Oficial / Proscrita / Secreta
3. **Alcance**: Local / Regional / Nacional / Internacional
4. **Propósito principal** (1-2 líneas)
5. **¿Tiene información secreta?** (si/no)
6. **Ubicación base** (ej: Dársena, Córdoba, Túberías)

## Proceso

1. Recopilar información
2. Determinar subcarpeta:
   - Oficial → `1_trasfondo/facciones/[iglesia-de-darsena|fuerzas-armadas|union]/`
   - Proscrita/Secreta → `1_trasfondo/facciones/facciones-menores/`
3. Generar archivo: `[nombre-kebab].md`
4. Estructura narrativa:

```yaml
---
titulo: [Nombre]
carpeta: 1_trasfondo/facciones/[subcarpeta]
descripcion: [Breve]
tags:
  - faccion
  - [tipo: oficial/proscrita/secreta]
  - [ubicacion]
---

Los **[Nombre]** [introducción fluida: identidad, contexto, estatus, alcance].

[Desarrollo narrativo de propósito, métodos, recursos y relaciones]

**Información secreta (no exponer a jugadores):**
[Si aplica]

---

### Referencias

[^alias]: [Nombre] / "Apodo"
```

5. Sugerir relaciones con facciones existentes:
   - **Aliados**:
   - **Enemigos**:
   - **Neutrales**:
   - **Contactos clandestinos**:

6. Si es oficial/clave: Hook actualizará REFERENCE.md

## Validaciones

- ✅ Nombres de facciones en **negrita** primera mención
- ✅ Estructura fluida sin subtítulos innecesarios
- ✅ Relaciones coherentes (no alianzas imposibles)
- ✅ Sección "Información secreta" si aplica
- ❌ Advertir si propone alianza imposible (SIA + Arpistas, etc.)
