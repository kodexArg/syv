---
name: facciones
description: Diseñador de facciones para SyV - creación con estructura narrativa fluida, relaciones complejas y secretos
---

# Skill: Faction Designer

## Competencia

Especialista en diseñar facciones para el universo SyV, con estructura narrativa fluida y conectadas orgánicamente al entramado de poder existente.

## Cuándo se Activa

Al:
- Crear/editar archivos en `1_trasfondo/facciones/`
- Ejecutar `/new-faction`
- Mencionar "facción", "crear facción", "organización"

## Estructura de Facción

### Metadatos
```yaml
---
titulo: Nombre de la Facción
carpeta: 1_trasfondo/facciones/[subcarpeta]
descripcion: Breve descripción
tags:
  - faccion
  - [tipo]
  - [ubicacion]
---
```

### Estructura Narrativa Fluida

1. **Introducción** (párrafo inicial)
   - Identidad y contexto
   - Estatus (oficial/proscrita/secreta)
   - Alcance (local/regional/nacional/internacional)
   - Tamaño aproximado

2. **Cuerpo Narrativo** (fluido, sin rigidez)
   - Propósito y filosofía
   - Métodos y funcionamiento
   - Recursos y capacidades
   - Relaciones y vínculos

3. **Información Secreta** (si aplica)
   - Marcado: `**Información secreta (no exponer a jugadores):**`

4. **Referencias** (al final)
   ```markdown
   ### Referencias

   [^sia]: Sagrada Inquisición Argentina (SIA) / "Los Cirujanos del Alma"
   ```

## Clasificación de Facciones

**Oficiales**:
- Iglesia de Dársena, SIA, Fuerzas Armadas, Gremio de Comercio

**Proscritas**:
- Arpistas, Resistencia, Los Umbanda, Traficantes de Almas

**Secretas**:
- Guardianes de la Memoria, Canales Ocultos, Criptógrafos (ambiguo)

## Capacidades

### 1. Crear Facción Coherente
- Filosofía única y motivaciones
- Métodos apropiados al tipo
- Relaciones naturales con facciones existentes
- Secretos (si aplica)

### 2. Validar Relaciones
- Verificar coherencia de alianzas/enemistades
- Detectar relaciones imposibles (ej: SIA + Arpistas aliados)
- Sugerir contactos clandestinos si aplica

### 3. Formato de Referencias
- Nombres de facciones en **negrita** en primera mención
- Notas al pie `[^identificador]`
- Sección "Referencias" al final

## Restricciones

❌ Alianzas imposibles (advertir: SIA + Arpistas, Iglesia + Resistencia)
✅ Nombres de facciones en **negrita** primera mención
✅ Texto fluido sin subtítulos innecesarios
✅ Secreta "Información secreta" si hay datos solo para GM

## Matriz de Relaciones Existentes

**Imposibles** (enemigos irreconciliables):
- SIA ↔ Arpistas
- SIA ↔ Criptógrafos (persecución)
- Iglesia ↔ Resistencia
- Iglesia ↔ Los Umbanda

**Tensas pero oficiales**:
- Iglesia ↔ Fuerzas Armadas
- Armada ↔ Ejército
- SIA ↔ Exorcistas

**Secretas** (requieren justificación):
- Arpistas ↔ Guardianes
- Guardianes ↔ Sectores Iglesia
- Facción Ejército ↔ Sectores Iglesia (conspiración)

## Workflow: Crear Facción

1. Solicitar:
   - Nombre
   - Tipo (Oficial/Proscrita/Secreta)
   - Alcance (Local/Regional/Nacional/Internacional)
   - Propósito principal
   - ¿Tiene información secreta? (si/no)

2. Generar archivo en `1_trasfondo/facciones/[subcarpeta]/[nombre-kebab].md`

3. Estructura:
   ```markdown
   ---
   titulo: [Nombre]
   carpeta: 1_trasfondo/facciones/[subcarpeta]
   descripcion: [Breve]
   tags:
     - faccion
     - [tipo]
   ---

   Los **[Nombre]** son [introducción fluida con contexto].

   [Desarrollo narrativo de propósito, métodos, recursos y relaciones]

   **Información secreta (no exponer a jugadores):**
   [Si aplica]

   ---

   ### Referencias

   [^alias]: [Facción] / "Apodo"
   ```

4. Actualizar REFERENCE.md si es facción oficial/clave
