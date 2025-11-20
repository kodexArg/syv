---
name: validate-canon
description: Validar coherencia narrativa contra cronología, facciones y personajes establecidos
---

# Validar Coherencia Narrativa

Revisa contenido contra cronología, facciones, personajes y tecnología del universo SyV.

## Input

- Archivo específico a validar (ruta)
- O texto/escena proporcionado por usuario

## Checks de Validación

### 1. CRONOLOGÍA
- ✅ Eventos no contradicen `1_trasfondo/cronologia/cronologia.md`
- ✅ Fechas coherentes con períodos establecidos
- ✅ Eventos hito respetados (Meteorito 2030, Anatema 2061, etc.)
- ❌ Anacronismos temporales

### 2. PERSONAJES
- ✅ Personajes mencionados existen en `3_personajes/`
- ✅ Características coherentes con archivos canónicos
- ✅ Facciones de personajes correctas
- ❌ Personajes inexistentes
- ❌ Contradicciones en trasfondo

### 3. FACCIONES
- ✅ Nombres y relaciones coherentes
- ✅ Alianzas/enemistades respetan matriz de relaciones
- ❌ Alianzas imposibles (SIA + Arpistas, Iglesia + Resistencia)
- ❌ Facciones que no existen en ese período

### 4. TECNOLOGÍA
- ✅ Respeta Anatema Mecánico (post-2061)
- ✅ Tecnología apropiada para el año
- ❌ IA digital en 2178 (salvo Arpistas clandestinos)
- ❌ Internet post-2061
- ❌ Dispositivos digitales sin justificación

### 5. PERSPECTIVA NARRATIVA
- ✅ Cronología narrada desde 2178
- ✅ Usa fuentes válidas (físicas, testimonios, artefactos)
- ❌ Fuentes digitales mencionadas post-2061
- ❌ Perspectiva omnisciente moderna

### 6. GEOGRAFÍA
- ✅ Ubicaciones coherentes con atlas
- ✅ Clima de Dársena (lluvia perpetua)
- ❌ Buenos Aires post-2030 (es Ciudad Dársena)
- ❌ Zonas que no existen

## Proceso

1. **Leer contenido** a validar
2. **Ejecutar checks** (lista arriba)
3. **Leer archivos relevantes** para verificar:
   - `1_trasfondo/cronologia/cronologia.md`
   - Archivos de personajes mencionados
   - Archivos de facciones mencionadas
   - `.claude/REFERENCE.md`

4. **Generar reporte**:

```
📋 REPORTE DE VALIDACIÓN

✅ CORRECTOS:
- [Elemento] está bien documentado y coherente
- [Elemento] respeta cronología establecida

⚠️ ADVERTENCIAS (mejoras sugeridas):
- [Elemento] podría enriquecerse con [sugerencia]
- [Elemento] funcionaría mejor si [sugerencia]

❌ ERRORES (deben corregirse):
- [Elemento] contradice [archivo canónico]
- [Tecnología] prohibida en [año] (Anatema Mecánico)
- [Facción] no existe en ese período
- [Personaje] no tiene archivo en 3_personajes/

🔧 SUGERENCIAS DE CORRECCIÓN:
[Correcciones específicas con ejemplos]
```

## Ejemplo de Uso

Usuario: `/validate-canon 4_diegesis/relatos/mi-nuevo-relato.md`

Claude:
1. Lee el relato
2. Identifica año mencionado (ej: 2178)
3. Extrae personajes, facciones, tecnología mencionada
4. Valida contra corpus
5. Genera reporte con errores/advertencias/sugerencias
