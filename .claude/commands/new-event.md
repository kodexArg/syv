---
name: new-event
description: Agregar evento histórico a cronología validando coherencia temporal
---

# Agregar Evento Histórico

Valida y agrega evento a cronología sin contradicciones con canon establecido.

## Información Requerida

1. **Fecha del evento**: YYYY-MM-DD o YYYY
2. **Nombre del evento**
3. **Período**: Caos / Gran Guerra / Fin Secretos / Edad Oscura / Confederación / Actualidad
4. **Descripción** (3-5 líneas)
5. **Personajes involucrados** (separados por coma)
6. **¿Es un hito?** (si/no - evento que cambió curso de historia)

## Proceso

1. **VALIDAR coherencia**:
   - Read `1_trasfondo/cronologia/cronologia.md`
   - Verificar que evento NO contradiga cronología existente
   - Comprobar que tecnología sea apropiada para el año
   - Validar que facciones mencionadas existan en ese período

2. **Ubicar temporalmente**:
   - Determinar jerarquía: ## Período / ### Año
   - Si es hito: Formato `### **hito** [Nombre] del [Fecha]`
   - Si es evento normal: `- **DD mes: Nombre del Evento**`

3. **Conectar con corpus**:
   - Verificar que personajes involucrados tengan archivos en `3_personajes/`
   - Mencionar facciones activas relevantes
   - Agregar consecuencias posteriores conocidas (perspectiva 2178)

4. **Redactar**:
   - Perspectiva 2178 (Hermano Archivista)
   - Fuentes válidas: documentos físicos, testimonios, artefactos
   - Tono archivístico-eclesiástico
   - Reconocer incertidumbres: "Los registros sugieren...", "Según testimonios..."

5. **Decidir ubicación**:
   - Si es evento menor: Agregar a `1_trasfondo/cronologia/cronologia.md` en sección apropiada
   - Si es evento mayor: Crear archivo `YYYY-MM-DD-nombre-evento.md`

## Validaciones Tecnológicas

- Pre-2061: Tecnología digital ✅ disponible
- Post-2061: Tecnología digital ❌ herejía (Anatema vigente)
- QIA: Solo 2048-2061
- Confederación: Solo 2161+

## Ejemplo

Usuario:
- Fecha: 15 de marzo de 2178
- Nombre: Descubrimiento de biblioteca Arpista en Barrio Norte
- Período: Actualidad
- Descripción: SIA descubre biblioteca oculta, arresta a 5 miembros
- Personajes: Monseñor Miguel, Dr. Francisco de la Cruz
- Hito: No

Output: Agregar evento en sección 2178 de cronología, conectar con personajes, redactar con perspectiva 2178.
