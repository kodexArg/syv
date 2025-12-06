---
name: validar-canon
description: Validar coherencia narrativa completa contra cronología, personajes, facciones, tecnología, geografía y perspectiva del canon
---

# Validar Contra Canon

Valida coherencia narrativa **COMPLETA** de cualquier archivo/contenido contra TODOS los aspectos del canon SyV:
- **Cronología** (no contradice eventos, respeta hitos)
- **Personajes** (existen, características coherentes)
- **Facciones** (relaciones coherentes, NO alianzas imposibles)
- **Tecnología** (Anatema Mecánico post-2061)
- **Geografía** (ubicaciones, distancias realistas)
- **Perspectiva narrativa** (año 2178, fuentes válidas)

---

## Inputs Soportados

1. **Archivo específico**:
   ```
   /validar-canon ruta/al/archivo.md
   ```

2. **Texto/escena directa**:
   ```
   /validar-canon
   [Usuario proporciona contenido a validar]
   ```

---

## Proceso Completo

### 1. Lectura y Extracción
- Lee archivo o texto proporcionado
- Identifica elementos clave:
  - Años/períodos mencionados
  - Personajes nombrados
  - Facciones referenciadas
  - Ubicaciones geográficas
  - Tecnología descrita
  - Eventos históricos

### 2. Ejecución de 6 Checks Paralelos

#### CHECK 1: CRONOLOGÍA
- ✓ Eventos NO contradicen `1_trasfondo/cronologia/cronología.md`
- ✓ Fechas dentro rango 2020-2178
- ✓ Hitos respetados (NO contradicción)
- ✓ Facciones existían en período
- ✗ ERRORES: Anacronismos, eventos falsos, hitos modificados

#### CHECK 2: PERSONAJES
- ✓ Existen en `3_personajes/`
- ✓ Características coherentes con canon
- ✓ Facciones correctas
- ✗ ERRORES: No existen, características incorrectas

#### CHECK 3: FACCIONES
- ✓ Nombres exactos (negrita primera mención)
- ✓ Relaciones coherentes (matriz respetada)
- ✓ Alianzas posibles (NO imposibles)
- ✗ ERRORES: Alianzas imposibles (SIA + Arpistas), relaciones falsas

#### CHECK 4: TECNOLOGÍA
- ✓ Pre-2061: Digital permitida
- ✓ Post-2061: Digital prohibida (excepto Arpistas)
- ✓ Corpus Licitus respetado
- ✓ Anatema Mecánico vigente (2061+)
- ✗ ERRORES: IA post-2061, internet 2178, computadores avanzados

#### CHECK 5: PERSPECTIVA NARRATIVA
- ✓ Desde año 2178 (Hermano Archivista)
- ✓ Fuentes válidas (físicas, testimonios)
- ✓ NO información omnisciente
- ✓ NO fuentes digitales post-2061
- ✗ ERRORES: Omnisciencia, fuentes digitales, anacrónismo temporal

#### CHECK 6: GEOGRAFÍA
- ✓ Ubicaciones existen en atlas
- ✓ Distancias realistas (geographic-database.yml)
- ✓ Viajes respetan velocidades
- ✓ Clima coherente (Dársena = lluvia)
- ✗ ERRORES: Ubicaciones falsas, distancias imposibles, clima incorrecto

### 3. Generación de Reporte Completo

```
═════════════════════════════════════════════════════════════
📋 REPORTE DE VALIDACIÓN CONTRA CANON
Archivo: [ruta o "contenido proporcionado"]
═════════════════════════════════════════════════════════════

✅ ELEMENTOS CORRECTOS:
- [Elemento] está bien documentado
- [Elemento] respeta cronología
- [Elemento] personaje tiene archivo válido

⚠️ ADVERTENCIAS (mejoras recomendadas):
- [Elemento] podría enriquecerse con [qué]
- [Elemento] está en borde de incoherencia

❌ ERRORES CRÍTICOS (obligatorio corregir):
- [Elemento] contradice [archivo canónico]
- [Elemento] tecnología prohibida en [año]
- [Elemento] facción no existe en período
- [Elemento] personaje no existe
- [Elemento] distancia imposible
- [Elemento] alianza imposible entre [facciones]

🔧 SUGERENCIAS DE CORRECCIÓN:
- [Cambio específico con ejemplo]
- [Referencia a archivo canónico]
- [Alternativa válida]

═════════════════════════════════════════════════════════════
RESULTADO FINAL: ✅ VÁLIDO / ⚠️ CON ADVERTENCIAS / ❌ INVÁLIDO
═════════════════════════════════════════════════════════════
```

---

## Criterios de Aprobación

### ✅ VÁLIDO
- Cero errores críticos
- Máximo 2-3 advertencias menores
- Apto para publicación

### ⚠️ CON ADVERTENCIAS
- Sin errores críticos
- Múltiples advertencias que debería revisar
- Sugerencias para mejorar coherencia

### ❌ INVÁLIDO
- Uno o más errores críticos
- NO publicable hasta corrección
- Requiere revisión obligatoria

---

## Validaciones Críticas

### CRONOLOGÍA
- Evento NO contradice cronologia.md
- Fechas en rango 2020-2178
- Hitos inamovibles respetados
- Tecnología apropiada para año
- Facciones existían en época

### PERSONAJES
- Existen en `3_personajes/`
- Características coherentes
- Facciones correctas
- Ubicaciones coherentes

### FACCIONES
- Nombres exactos mencionados
- Relaciones coherentes con matriz
- Alianzas posibles (NO imposibles: SIA↔Arpistas)
- Métodos coherentes con filosofía
- Control territorial válido

### TECNOLOGÍA
```
PRE-2061 (2020-2061):
✓ Digital permitida

POST-2061 (2061-2178):
✗ Digital prohibida
✗ IA destruida/prohibida
✗ Internet inexistente
✓ EXCEPTO: Arpistas clandestinos
```

### PERSPECTIVA 2178
- Narrador: Documentador histórico
- Fuentes: SOLO físicas (no digitales post-2061)
- Conocimiento: NO omnisciente
- Incertidumbre: Reconoce "se cree que...", "sugieren..."

### GEOGRAFÍA
- Ubicaciones existen
- Distancias realistas (geographic-database.yml)
- Viajes respetan velocidades
- Clima coherente
- Control territorial válido

---

## Referencias de Validación (LECTURA MASIVA)

| Archivo | Propósito |
|---------|----------|
| `1_trasfondo/cronologia/cronología.md` | Validar eventos |
| `3_personajes/**` | Validar personajes |
| `1_trasfondo/facciones/**` | Validar facciones |
| `2_atlas/**` | Validar ubicaciones |
| `.claude/database/geographic-database.yml` | Validar geografía |
| `.claude/REFERENCE.md` | Validación rápida |
| `.claude/skills/worldbuilding/SKILL.md` | Criterios coherencia |

---

## Output Esperado

```
✅ VÁLIDO
   [Análisis detallado positivo]

O

⚠️ CON ADVERTENCIAS
   [Problemas menores con sugerencias]

O

❌ INVÁLIDO
   [Errores críticos que deben corregirse]
```

---

**Skills consultados**: worldbuilding (maestro), cronologia, facciones, personajes, ubicaciones, metadatos
