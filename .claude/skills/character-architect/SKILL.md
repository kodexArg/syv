---
name: character-architect
description: Arquitecto de personajes para el universo SyV - creación, documentación e integración con facciones, cronología y ubicaciones
---

# Skill: Character Architect

## Competencia

Especialista en crear y documentar personajes del universo SyV, garantizando integración coherente con facciones, cronología y ubicaciones establecidas.

## Cuándo se Activa

Al:
- Crear/editar archivos en `3_personajes/`
- Ejecutar `/new-character`
- Mencionar "personaje", "crear personaje", "nuevo personaje"
- Hook detecta descripción de persona

## Estructura de Personaje

### Metadatos Obligatorios
```yaml
---
titulo: Nombre del Personaje
carpeta: 3_personajes/[categoria]
descripcion: Breve descripción (1-2 líneas)
tags:
  - nombre-apellido
  - otros-tags
facciones:  # OBLIGATORIO (puede estar vacío)
  - "Nombre Facción 1"
alerta-spoilers: "Advertencia" # OPCIONAL
---
```

### Orden de Secciones

1. **Descripción** (casi siempre requerido)
2. **Aspecto** (opcional, solo si hay info visual específica)
3. **Citas** (opcional)
4. **Trasfondo** (complemento a descripción)
5. **Secretos / Trasfondo Oculto / Objetivos Ocultos** (opcional, requiere alerta-spoilers)
6. **Hoja de Personaje** (raro, solo PJs o NPCs muy relevantes)

## Categorización

**Ubicación en carpetas**:
- `3_personajes/principales/` - PJs y NPCs clave que impulsan trama
- `3_personajes/secundarios/` - Personajes mencionados en relatos con trasfondo
- `3_personajes/arquetipos/` - Plantillas genéricas (gendarme, médico, koskero)

## Capacidades

### 1. Crear Personaje Completo
- Generar metadatos con campo `facciones`
- Estructura narrativa coherente
- Integración con facciones existentes
- Coherencia temporal con cronología
- Tags apropiados

### 2. Validar Personaje Existente
- Campo `facciones` presente (obligatorio)
- `alerta-spoilers` si tiene secretos
- Categoría correcta (principales/secundarios/arquetipos)
- Facciones mencionadas existen
- Coherencia con cronología

### 3. Integrar con Corpus
- Verificar menciones en otros archivos (`4_diegesis/`, `1_trasfondo/cronologia/`)
- Asegurar que personajes mencionados en relatos tengan archivo propio
- Actualizar REFERENCE.md si es principal

## Restricciones

❌ Campo `facciones` NUNCA omitir (aunque esté vacío: `facciones: []`)
❌ Si tiene secretos, NO mencionar en otros documentos públicos
❌ Alerta-spoilers obligatoria si hay sección de Secretos/Objetivos Ocultos
✅ Todo personaje mencionado en `4_diegesis/` DEBE tener archivo en `3_personajes/`

## Workflow: Crear Personaje Principal

1. Solicitar información:
   - Nombre
   - Edad aproximada
   - Profesión/rol
   - Ubicación principal
   - Facciones asociadas
   - ¿Tiene secretos? (si/no)

2. Generar archivo en `3_personajes/principales/[nombre-kebab].md`:
   ```yaml
   ---
   titulo: [Nombre]
   carpeta: 3_personajes/principales
   descripcion: [Rol/profesión breve]
   tags:
     - [nombre-apellido]
     - [profesion]
     - [ubicacion]
   facciones:
     - "[Facción 1]"
   alerta-spoilers: "[Si aplica]"
   ---

   ## Descripción
   [Personalidad, comportamiento, rol actual]

   ## Trasfondo
   [Historia, eventos que lo marcaron]

   ## Secretos
   [Solo si usuario confirmó que tiene]
   ```

3. Actualizar REFERENCE.md (automático vía hook)

## Ejemplo de Personaje Completo

```yaml
---
titulo: Capitán Romero
carpeta: 3_personajes/principales
descripcion: Oficial de la Armada Argentina en Dársena, secretamente colabora con los Arpistas
tags:
  - capitan-romero
  - armada
  - darsena
  - arpistas
  - doble-agente
facciones:
  - "Armada Argentina"
  - "Arpistas"
alerta-spoilers: "Su colaboración con los Arpistas es información sensible"
---

## Descripción

El Capitán Romero es un oficial veterano de la Armada Argentina, estacionado en la Isla Oriental de Ciudad Dársena. Con 20 años de servicio, ha ascendido gracias a su disciplina impecable y lealtad aparente. Sin embargo, bajo esa fachada militar, Romero es un doble agente que filtra información a los Arpistas sobre movimientos de la SIA.

Su motivación: cree que el Anatema Mecánico ha ido demasiado lejos, destruyendo conocimiento valioso que podría beneficiar a la humanidad.

## Aspecto

45 años, complexión atlética mantenida por entrenamiento militar. Uniforme naval impecable (azul oscuro con insignias de rango). Cicatriz en ceja izquierda de combate en su juventud.

## Trasfondo

Romero creció en los Barrios del Muro, hijo de refugiados de la Edad Oscura. Ingresó a la Armada a los 18 años buscando escapar de la pobreza. Durante sus primeros años, presenció ejecuciones por herejía ordenadas por la SIA que le parecieron excesivas.

En 2175, conoció a un Arpista moribundo que le reveló la existencia de bibliotecas ocultas con conocimiento del siglo XXI. Esa conversación cambió su perspectiva.

## Secretos

**Información secreta (no exponer a jugadores):**

Romero tiene acceso a una PDA militar con información clasificada de movimientos de la SIA. Cada mes, se reúne clandestinamente con el Dr. Francisco de la Cruz en el Barrio Norte, usando códigos navales antiguos para coordinar.

Planea desertar en 2179 si la presión de la SIA aumenta.
```
