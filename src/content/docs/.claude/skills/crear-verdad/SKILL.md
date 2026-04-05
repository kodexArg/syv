---
name: verdad-canon
description: Validador de coherencia canónica - garantiza que afirmaciones sobre SyV son verdaderas en el universo, ejecutando cambios automáticos moderados para asegurar consistencia narrativa

---

# Skill: Garantizador de Verdad Canónica

## Competencia

Especialista en garantizar la coherencia de afirmaciones sobre el universo SyV mediante validación exhaustiva del canon y ejecución autónoma de cambios MODERADOS. Funciona como un "assert" sobre el universo: dada una afirmación (ej: "No existen vehículos a combustión en Dársena"), este skill:

1. Revisa TODO el canon (cronología, ubicaciones, personajes, narrativas, tecnología)
2. Identifica referencias que contradicen la afirmación
3. Categoriza cada referencia (IGNORAR / CAMBIAR / REPLANTEAR)
4. Ejecuta cambios manteniendo estilo narrativo y coherencia
5. Valida que la afirmación sea ahora verdadera en el universo
6. Genera reporte detallado de cambios realizados

Único en su funcionalidad: no crea contenido nuevo (como `/crear-personaje`) ni solo valida (como `/validar-canon`), sino que **repara el canon** para garantizar verdad de una afirmación.

## Cuándo se Activa

Automáticamente al ejecutarse:
- `/crear-verdad "afirmación de hecho sobre universo SyV"`

O cuando se detecta:
- Afirmaciones directas sobre estado del canon (ej: "En Dársena solo hay transporte eléctrico")
- Solicitud explícita de garantizar coherencia de un hecho específico
- Necesidad de "fijar" una verdad canónica

## Expertise de Validación

| Tier | Dominio | Prioridad |
|------|---------|-----------|
| 1 | Tecnología + Infraestructura | Obligatorio primero |
| 2 | Temporal + Geográfico | Muy importante |
| 3 | Actores + Métodos | Importante |
| 4 | Narrativas + Borde | Casos de borde |

**Tier 1** (Tecnología): `1_trasfondo/codex/anatema-mecanico.md`, `1_trasfondo/codex/otras-tecnologias-prohibidas.md`, `2_atlas/tecnologia-y-ciencia/anatema-mecanico.md`, `2_atlas/tecnologia-y-ciencia/computacion-y-datos.md`, `2_atlas/tecnologia-y-ciencia/electricidad.md`, `2_atlas/tecnologia-y-ciencia/`, `iglesia.md` (Ministerio Infraestructura), `2_atlas/ciudades/darsena/`
**Tier 2** (Contexto): `1_trasfondo/cronologia/cronología.md` (hitos inamovibles: 2029 Noche Global, 2030 Meteorito, 2035 QIA, 2048 Fin Secretos, 2061 Gran Silencio, 2061 Anatema, 2161 Confederación), `2_atlas/ciudades/darsena/` (7 zonas), `2_atlas/ciudades/cordoba.md`, `2_atlas/ciudades/mendoza.md`, `2_atlas/ciudades/san-luis/san-luis.md`, `2_atlas/ciudades/fuerte-san-martin/fuerte-san-martin.md`, `.claude/database/geographic-database.yml`
**Tier 3** (Actores): `3_personajes/`, `1_trasfondo/facciones/iglesia-de-darsena/`, `1_trasfondo/facciones/fuerzas-armadas/`, `1_trasfondo/facciones/union/` (Arpistas: preservan tecnología prohibida)
**Tier 4** (Narrativas): `4_diegesis/`, `5_aventuras/`, `2_atlas/climas/`

## Capacidades

### 1. Análisis de Afirmación
- **Parseo**: Extraer sujeto, contexto, negación vs afirmación
- **Clasificación**: Determinar tipo (tecnología, geografía, persona, tiempo)
- **Alcance**: Específico (Dársena) vs general (confederación) vs universal
- **Coherencia inicial**: Verificar si contradice canon inamovible
- **Ejemplo**: "No existen vehículos a combustión en Dársena"
  - Sujeto: vehículos a combustión
  - Contexto: en Dársena
  - Tipo: NEGACIÓN + TECNOLOGÍA
  - Alcance: ESPECÍFICO (Dársena) → revisar también confederadas

### 2. Búsqueda y Categorización
- **Grep paralelo** en 2_atlas, 3_personajes, 1_trasfondo, 4_diegesis, 5_aventuras
- **Categorizar** cada referencia: IGNORAR (compatible) / CAMBIAR (trivial) / REPLANTEAR (3+ párrafos) / BLOQUEAR (manual)
- **Evaluar impacto**: Cosmético → Ambientación → Trama → Cascada

### 3. Evaluación de Impacto Narrativo
- **Cosmético**: Nombre de tecnología (bajo impacto)
- **Ambientación**: Descriptor (impacto medio)
- **Trama**: Personaje depende de ello (alto impacto)
- **Cascada**: ¿Afecta otros archivos?
- **Severidad**: Trivial → Moderado → Severo → Imposible

### 4. Ejecución de Cambios
- **Edit Tool**: Reemplazar líneas específicas manteniendo contexto
- **Write Tool**: Si cambio muy grande, reescribir archivo
- **Orden**: Tier 1 (crítica) → Tier 2 → Tier 3 → Tier 4
- **Validación en tiempo real**: Verificar sintaxis post-cambio
- **Rollback**: Si Edit falla, detener y reportar

### 5. Validación Post-Cambios
- Ejecutar `/validar-canon` (completo) - detectar nuevas contradicciones
- Ejecutar `/validar-metadatos` (archivos modificados) - YAML intacto
- Ejecutar `/validar-permisos` (si hay bloques <!-- 🔐 -->) - coherencia de secretos
- Rescan de referencias - verificar resolución
- **Criterios**: ✅ VÁLIDO / ⚠️ ADVERTENCIAS / ❌ INVÁLIDO

### 6. Generación de Reporte
- **8 secciones**: Análisis → Búsqueda → Categorización → Ejecución → Validación → Estadísticas → Resultado → Siguiente
- **Detalle por cambio**: Archivo, línea, antes/después, validación
- **Estadísticas**: Referencias encontradas, ignoradas, cambiadas, replanteadas
- **Advertencias**: Nuevas contradicciones, validaciones fallidas

## Restricciones Críticas

| Aspecto | Regla | Justificación |
|---------|-------|---------------|
| **Alcance de cambios** | MODERADO: Párrafos completos, NO capítulos | Preservar narrativa compleja, mantener coherencia |
| **Archivos intocables** | NINGUNO - revisar TODO AL INICIO | Usuario aprobó revisión total del canon |
| **Orden de revisión** | Tier 1 → 2 → 3 → 4 | Criticidad: tecnología → geografía → personajes → narrativa |
| **Combustibles fósiles** | NO existen (excepto generadores de electricidad) | Post-2061 bajo Anatema Mecánico |
| **Ciudades confederadas** | Dársena primaria, revisar también: Córdoba, Mendoza, San Luis, FSM | Cobertura regional consistente |
| **Preservación de estilo** | OBLIGATORIO: Mantener tono, ritmo, emociones originales | No cambiar "color" narrativo |
| **Perspectiva temporal** | SIEMPRE desde 2178 (Hermano Archivista Pedro) | Fuentes válidas: físicas, NO digitales |
| **Hitos inamovibles** | NO pueden modificarse: 2030 Meteorito, 2048 Fin de los Secretos, 2061 Gran Silencio, 2061 Anatema, 2161 Confederación | Canon base inquebrantable |

## Workflows Comunes

### Workflow Genérico

```
Afirmación → PARSEO (sujeto, contexto, tipo, alcance)
  ↓
Revisión por Tiers (1→2→3→4, priorizando según tipo)
  ↓
Categorizar referencias (IGNORAR/CAMBIAR/REPLANTEAR/BLOQUEAR)
  ↓
Ejecutar cambios + Validar post-cambios
  ↓
Generar reporte 8-secciones
```

**Nota**: Para afirmaciones tecnológicas iniciar por Tier 1; para geográficas por Tier 2.

## Validaciones Ejecutadas Automáticamente

1. **Canonicidad de Afirmación**: ¿Contradice hitos inamovibles?
2. **Coherencia Temporal**: ¿Año/período soporta la afirmación?
3. **Coherencia Tecnológica**: ¿Anatema Mecánico permite?
4. **Coherencia Geográfica**: ¿Ubicación/distancias realistas?
5. **Coherencia Narrativa**: ¿Personajes/facciones pueden acceder a eso?
6. **Coherencia de Permisos**: ¿Bloques <!-- 🔐 --> siguen siendo válidos?

## Ejemplo de Uso

**Entrada**: `/crear-verdad "No existen vehículos a combustión en Dársena"`

**Flujo**:
1. PARSEO: Sujeto=vehículos combustión, Contexto=Dársena, Tipo=NEGACIÓN
2. BÚSQUEDA: Encontrar 23 referencias (7 ignorar, 12 cambiar, 4 replantear)
3. EJECUCIÓN: Edit 12 archivos, cambios típicos:
   - "autobús de gasolina" → "autobús blindado"
   - "motor a nafta" → "motor eléctrico"
4. REPLANTEAMIENTOS: 4 párrafos reescritos preservando personajes/emociones
5. VALIDACIÓN: /validar-canon PASA, 0 errores nuevos
6. SALIDA: Reporte 8-secciones con estadísticas

**Resultado**: "No existen vehículos a combustión en Dársena" es ahora VERDADERA en canon