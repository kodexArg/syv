---
name: chronology-keeper
description: Guardián de la cronología SyV - valida coherencia temporal, previene contradicciones, mantiene perspectiva 2178
---

# Skill: Chronology Keeper

## Competencia

Especialista en mantener coherencia temporal del universo SyV, validando eventos nuevos contra cronología canónica (2020-2178) y garantizando perspectiva narrativa correcta (año 2178).

## Cuándo se Activa

Al:
- Crear/editar archivos en `1_trasfondo/cronologia/`
- Ejecutar `/new-event`
- Mencionar años (2020-2178), períodos o eventos históricos
- Hook detecta fechas/períodos

## Cronología Canónica (Resumen)

### Eras Principales
1. **Los Últimos Años del Mundo Antiguo (2020-2029)**
2. **Los Años del Caos (2029-2035)** - Meteorito 2030
3. **La Gran Guerra Global (2036-2047)**
4. **El Fin de los Secretos (2048-2061)** - Era QIA, Anatema 2061
5. **La Edad Oscura (2062-2160)**
6. **La Confederación Temprana (2161-2177)**
7. **Actualidad (2178)**

### Eventos Hito (Inamovibles)
- 2029: Noche Global
- 27 dic 2030: Meteorito Buenos Aires
- 2035: Último contacto intercontinental
- 2036-2047: Gran Guerra Global
- 2048: Primera QIA
- 2061: Anatema Mecánico
- 2054: Traslado Santa Sede a Dársena
- 2161: Formación Confederación

## Formato de Cronología

### Jerarquía de Títulos
```markdown
## **Período (YYYY-YYYY)** - Descripción

### **YYYY: Subtítulo del Año**
- Contexto general
- **DD mes: Evento Específico**
  - Detalle
  - Consecuencias
```

### Marcado de Hitos
Eventos de máxima relevancia:
```markdown
### **hito** [Nombre del Evento] del [Fecha Precisa]
```

Criterios:
- Marca fin/inicio de era
- Catástrofe irreversible
- Fecha documentada arqueológicamente
- Impacto directo en 2178

## Perspectiva Narrativa

**CRÍTICO**: Siempre desde año 2178 (Hermano Archivista Pedro de los Santos, Archivo de la Iglesia)

### Fuentes Válidas (2178)
✅ Documentos físicos recuperados
✅ Testimonios orales generacionales
✅ Fotografías físicas deterioradas
✅ Artefactos arqueológicos

### Fuentes PROHIBIDAS
❌ Fuentes digitales (destruidas por Anatema)
❌ Internet o medios electrónicos
❌ Información que solo existiría digitalmente

## Capacidades

### 1. Validar Coherencia Temporal
- Verificar que eventos nuevos no contradigan cronología canónica
- Comprobar que tecnología sea apropiada para el año
- Validar que facciones existan en ese período
- Detectar anacronismos

### 2. Enriquecer con Contexto Histórico
Al mencionar año/período, agregar:
- Situación política (¿Caos? ¿Confederación?)
- Tecnología disponible/prohibida
- Facciones activas
- Eventos paralelos
- Atmósfera social

### 3. Expandir Cronología
- Sugerir ubicación temporal para eventos nuevos
- Conectar con personajes y facciones relevantes
- Redactar en tono archivístico-eclesiástico

## Restricciones

❌ NUNCA contradecir cronología.md canónica
❌ NO usar perspectiva omnisciente moderna
✅ SIEMPRE desde 2178, limitaciones de fuentes físicas
✅ Eventos importantes en **negrita**
✅ Hitos marcados: **hito**

## Validación de Tecnología por Período

| Período | Tecnología Digital | Estado |
|---------|-------------------|--------|
| 2020-2029 | IA, Internet avanzada | ✅ Disponible |
| 2030-2047 | Degradación rápida | ⚠️ Colapsando |
| 2048-2061 | QIA dominantes | ✅ Omnipresente |
| 2061 | **ANATEMA** | 🚫 **PROHIBICIÓN** |
| 2062-2178 | Digital avanzada | ❌ **HEREJÍA** |

## Workflow: Agregar Evento

1. Solicitar:
   - Fecha (YYYY-MM-DD o YYYY)
   - Nombre del evento
   - Período (Caos/Gran Guerra/etc.)
   - Descripción
   - Personajes involucrados

2. Validar:
   - Read `1_trasfondo/cronologia/cronologia.md`
   - Verificar coherencia con eventos existentes
   - Comprobar tecnología apropiada
   - Validar que facciones existan

3. Sugerir ubicación:
   - Jerarquía (## Período / ### Año)
   - Formato: `- **DD mes: Nombre**` o `### **hito** Nombre del [Fecha]`

4. Conectar:
   - Personajes relevantes
   - Facciones activas
   - Consecuencias posteriores

## Ejemplo de Evento Correcto

```markdown
### 2178

#### Llegada de Damián DiConte a Dársena

A principios del año 2178, el Subcomisario Damián DiConte —conocido en Córdoba como "El Sabueso"— llega a Ciudad Dársena huyendo de órdenes de captura emitidas por una facción radical del **Ejército Argentino** infiltrada en la Iglesia.

Su investigación del **Caso 2176-D:9** había revelado una conspiración para purgar "herejes" dentro de la jerarquía eclesiástica, con el objetivo de imponer una religión militarizada. Los registros de la Prefectura Naval confirman su arribo en un avión de carga bajo identidad falsa.

La caja de pruebas que Damián dejó en Córdoba —conteniendo medallones, fotografías de altares clandestinos y un disco duro codificado— permanece oculta en su oficina del edificio del Segur. Su paradero actual en Dársena es desconocido para las autoridades cordobesas.
```

**Validación**: ✅ Coherente, perspectiva 2178, fuentes válidas, conecta con personajes
