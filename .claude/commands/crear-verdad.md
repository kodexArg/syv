---
name: crear-verdad
description: Garantizar que una afirmación es verdadera en canon - busca contradicciones, ejecuta cambios automáticos moderados, valida coherencia post-cambios
---

# Crear Verdad Canónica

Garantiza que una afirmación de hecho sobre el universo SyV sea verdadera mediante validación exhaustiva y reparación automática del canon.

A diferencia de `/validar-canon` (que solo reporta problemas), `/crear-verdad` **EJECUTA CAMBIOS** para resolver contradicciones y garantizar que la afirmación sea coherente con TODO el canon.

---

## Inputs Soportados

**Uso único**:
```
/crear-verdad "Afirmación de hecho sobre universo SyV"
```

**Ejemplos válidos**:
```
/crear-verdad "No existen vehículos a combustión en Dársena"
/crear-verdad "Los tranvías de Córdoba son completamente eléctricos"
/crear-verdad "La Iglesia controla todo transporte terrestre en Dársena"
/crear-verdad "Damián llega a Dársena solo en transporte público"
```

---

## Proceso Completo (10 Fases)

### FASE 1: PARSEO DE ENTRADA

Analiza la afirmación para extraer componentes:

**Extrae:**
- **Sujeto**: ¿Qué se afirma? (vehículos, personas, tecnología, ubicaciones)
- **Contexto**: ¿Dónde/cuándo? (región, período temporal)
- **Tipo**: ¿NEGACIÓN ("no existen") o AFIRMACIÓN ("solo hay")?
- **Alcance**: ¿Específico (Dársena) o general (confederación)?
- **Naturaleza**: ¿TECNOLOGÍA, GEOGRAFÍA, PERSONA, EVENTO?

**Ejemplo**:
```
Entrada: "No existen vehículos a combustión en Dársena"

Parseo:
  Sujeto: vehículos a combustión
  Contexto: en Dársena (primaria) + revisar confederadas
  Tipo: NEGACIÓN (no existen)
  Alcance: ESPECÍFICO (región)
  Naturaleza: TECNOLOGÍA + TRANSPORTE
```

---

### FASE 2: VALIDACIÓN DE ALCANCE

Verifica si la afirmación es coherente con canon inamovible:

**Preguntas críticas**:
- ¿Contradice hitos inamovibles (2030, 2061, 2161)?
- ¿Es compatible con Anatema Mecánico?
- ¿Es posible en estado tecnológico 2178?
- ¿Requiere cambios en facciones/personajes existentes?

**Decisión**:
- ✓ **ACEPTABLE**: Proceder a FASE 3
- ✗ **RECHAZAR**: Informar por qué contradice canon inamovible
- ⚠️ **ADVERTENCIA**: Nota sobre complejidad, proceder con cuidado

---

### FASE 3: BÚSQUEDA MASIVA

Búsqueda exhaustiva en TODO el canon usando múltiples patrones Grep:

**Patrones por Tipo de Afirmación**:

#### Para Transporte/Combustibles:
```
Motor:       (motor|máquina).{0,20}(combustión|fósil|nafta|diésel)
Vehículo:    (auto|coche|camión|tranvía|autobús).{0,20}(combustión|fósil)
Energía:     (energía|combustible).{0,20}(fósil|hidrocarburo)
Narrativo:   (conducía|viajaba|transportaba).{0,30}(motor|vehículo).{0,30}(fósil)
```

#### Para Ciudades Confederadas:
```
Dársena:     (vehícul|auto|motor).{0,20}(dársena|microcentro|túberías)
Córdoba:     (vehícul|auto|motor).{0,20}(córdoba|república)
Mendoza:     (vehícul|auto|motor).{0,20}(mendoza|andina)
San Luis:    (vehícul|auto|motor).{0,20}(san.luis|puntano)
FSM:         (vehícul|auto|motor).{0,20}(fuerte.san.martín)
```

**Búsqueda paralela en**:
- `2_atlas/ciudades/` - Descripciones geográficas
- `3_personajes/` - Características y transporte de personajes
- `1_trasfondo/facciones/` - Métodos de transporte por facción
- `4_diegesis/` - Escenas narrativas
- `5_aventuras/` - Escenarios de aventura

**Compilación**:
- Índice: `{archivo: [(línea, contexto)]}`
- Total referencias encontradas: N
- Deduplicación de menciones idénticas

---

### FASE 4: CATEGORIZACIÓN

Para CADA referencia encontrada, clasificar:

```
┌─ IGNORAR
│  Criterio: Referencia es COMPATIBLE con afirmación
│  Acción: Registrar "sin cambios necesarios"
│  Ejemplo: "transporte colectivo" (genérico, asume eléctrico) → OK
│
├─ CAMBIAR
│  Criterio: Contradice pero reemplazo es trivial
│  Alcance: 1 palabra, frase, máximo 1-2 párrafos
│  Acción: Edit archivo con reemplazo manteniendo estilo
│  Ejemplo: "motor a nafta" → "motor eléctrico"
│
└─ REPLANTEAR
   Criterio: Contradice severamente, requiere reescritura
   Alcance: 3+ párrafos, lógica narrativa afectada
   Acción: Reescribir sección manteniendo personajes/emociones
   Ejemplo: Escena de 4 párrafos sobre usar vehículo fósil → reescribir
```

**Matriz de Decisión** (pseudocódigo):

```
FOR cada_referencia IN referencias_encontradas:

  contradice = verifica_si_contradice(referencia, afirmacion)

  IF NOT contradice:
    categorizar(referencia) = "IGNORAR"
  ELSE:
    severidad = evalua_severidad(referencia)

    IF severidad IN [TRIVIAL, COSMÉTICO]:
      categorizar(referencia) = "CAMBIAR"
      reemplazo = genera_reemplazo_equivalente()

    ELIF severidad == MODERADO:
      categorizar(referencia) = "CAMBIAR"
      reemplazo = reescribe_frase_o_parrafo()

    ELIF severidad == SEVERO:
      categorizar(referencia) = "REPLANTEAR"
      reemplazo = reescribe_seccion_completa(preserva_personajes=True)

    ELSE:
      categorizar(referencia) = "BLOQUEAR"
      razon = "Requiere decisión manual"
```

---

### FASE 5: EVALUACIÓN DE IMPACTO NARRATIVO

Para referencias CAMBIAR/REPLANTEAR, evaluar:

**Preguntas clave**:
1. ¿Este cambio es cosmético (nombre) o afecta trama?
   - Cosmético → CAMBIAR (bajo riesgo)
   - Afecta trama → REPLANTEAR (alto riesgo, requiere cuidado)

2. ¿Hay dependencias en cascada?
   - ¿Otros archivos lo mencionan?
   - ¿Afecta relación de dos personajes?
   - Compilar lista de archivos conexos

3. ¿Preserva el estilo narrativo original?
   - Tono: ¿Mantiene tono original?
   - Ritmo: ¿Fluye naturalmente?
   - Emoción: ¿Conserva la atmósfera?
   - Longitud: ¿Comparable en extensión?

**Severidad de Impacto**:
```
TRIVIAL (Palabra):
  Original: "auto de nafta"
  Cambio: "auto eléctrico"
  Impacto: MÍNIMO (una palabra)
  Riesgo: MUY BAJO

COSMÉTICO (Frase):
  Original: "motor a nafta que rugía"
  Cambio: "motor eléctrico que zumbaba"
  Impacto: BAJO (descriptor)
  Riesgo: BAJO

MODERADO (Párrafo):
  Original: [2-3 párrafos sobre transporte en vehículo]
  Cambio: [2-3 párrafos sobre transporte en tren público]
  Impacto: MEDIO (ambientación)
  Riesgo: MEDIO

SEVERO (Múltiples párrafos):
  Original: [Escena de 4+ párrafos, trama depende de auto privado]
  Cambio: [Reescritura conservando tensión pero con tren público]
  Impacto: ALTO (trama)
  Riesgo: ALTO (requiere cuidado máximo)
```

---

### FASE 6: SELECCIÓN DE PATRONES GREP

Compilar patrones específicos según afirmación:

**Patrón Completo para Transporte/Combustibles**:
```
(motor|máquina|mecanismo).{0,20}(combustión|fósil|nafta|diésel|gasolina)
(auto|coche|camión|tranvía|tren|autobús|bus).{0,20}(combustión|motor a explosión|fósil)
(energía|combustible|carburante).{0,20}(fósil|hidrocarburos|nafta|gasolina)
(conducía|viajaba|transportaba|se desplazaba|manejaba).{0,30}(motor|vehículo).{0,30}(fósil|combustión)
(pre.anatema|antes de 2061|antes del anatema).{0,50}(vehículos|motores).{0,20}(fósil|combustión)
```

**Patrón Completo para Ciudades Confederadas**:
```
(vehícul|auto|motor|transporte).{0,20}(dársena|darsena|microcentro|túberías|barrios)
(vehícul|auto|motor|transporte).{0,20}(córdoba|cordoba|república|autónoma)
(vehícul|auto|motor|transporte).{0,20}(mendoza|andina|región)
(vehícul|auto|motor|transporte).{0,20}(san.luis|san.luis|puntano)
(vehícul|auto|motor|transporte).{0,20}(fuerte.san.martín|fuerte.san.martin)
```

---

### FASE 7: BÚSQUEDA Y RECOPILACIÓN

Ejecutar búsquedas Grep en paralelo:

```bash
# Búsquedas paralelas
grep -r "PATRÓN_MOTOR" 2_atlas/ciudades/ > refs_ciudades.txt
grep -r "PATRÓN_VEHÍCULO" 3_personajes/ > refs_personajes.txt
grep -r "PATRÓN_NARRATIVO" 1_trasfondo/facciones/ > refs_facciones.txt
grep -r "PATRÓN_ENERGÍA" 4_diegesis/ > refs_diegesis.txt
grep -r "PATRÓN_ÉPOCA" 5_aventuras/ > refs_aventuras.txt
```

**Compilación de Índice**:
- Leer cada resultado con contexto ±5 líneas
- Crear estructura: `{archivo: [(línea, contexto, patrón_encontrado)]}`
- Desduplicar menciones idénticas
- Contar por archivo y categoría

**Estadísticas Iniciales**:
```
Total referencias encontradas: 23
Distribución por archivo:
  - 2_atlas/ciudades/darsena/: 7 referencias
  - 2_atlas/ciudades/cordoba.md: 4 referencias
  - 3_personajes/principales/: 5 referencias
  - 4_diegesis/relatos/: 2 referencias
  - 1_trasfondo/facciones/: 2 referencias

Distribución por categoría ESTIMADA:
  - IGNORAR: ~30% (7 referencias)
  - CAMBIAR: ~52% (12 referencias)
  - REPLANTEAR: ~18% (4 referencias)
```

---

### FASE 8: TOMA DE DECISIONES Y GENERACIÓN DE CAMBIOS

Para CADA referencia (en orden Tier 1 → Tier 4):

**Paso 8A: Análisis Detallado**
1. Leer archivo COMPLETO (contexto)
2. Entender sección donde aparece
3. Evaluar si REALMENTE contradice afirmación
4. Determinar categoría final

**Paso 8B: IGNORAR**
→ Registrar: "Compatible, sin cambios necesarios"

**Paso 8C: CAMBIAR**
1. Generar reemplazo preservando estilo
2. Validar reemplazo es gramaticalmente correcto
3. Validar no introduce nueva contradicción
4. Almacenar: `{archivo, línea, original, nuevo}`

**Paso 8D: REPLANTEAR**
1. Analizar párrafo/sección COMPLETA
2. Identificar qué preservar (nombres, personajes, emociones)
3. Reescribir párrafo manteniendo tono/estilo original
4. Validar nueva versión no contradice canon
5. Almacenar: `{archivo, línea_inicio, línea_fin, original, nuevo}`

**Ejemplos de Preservación de Estilo**:

```
CAMBIAR - Cosmético:
Original: "El autobús de gasolina rugía al subir la pendiente"
Reemplazo: "El autobús blindado zumbaba al subir la pendiente"
✓ Preserva: Onomatopeya (rugir→zumbar), sensación movimiento
✓ Estilo: Idéntico tono

REPLANTEAR - Narrativo:
Original (4 párrafos):
"Marcelo conducía su camioneta de nafta por las calles de Dársena.
El motor a nafta retumbaba contra el viento salado del río.
La máquina lo había traído en maratón desde Córdoba,
sediento de combustible como un marinero de ron."

Reemplazo (4 párrafos):
"Marcelo se movía en tren blindado por las vías de Dársena.
El motor eléctrico zumbaba contra el viento salado del río.
El trayecto lo llevaba en maratón desde Córdoba,
sediento de destino como un marinero de tierra firme."

✓ Preserva: Personaje (Marcelo), viaje urgente, origen (Córdoba)
✓ Emociones: Urgencia, cansancio, deseo de llegar
✓ Estilo: Ritmo, comparaciones ("como marinero"), tono poético
```

---

### FASE 9: EJECUCIÓN DE CAMBIOS

Secuencia ordenada de modificaciones:

```
1. Crear lista de cambios ordenada por Tier (1 primero)
2. Para CADA cambio:
   a) Leer archivo actual
   b) Localizar línea exacta (validar contenido no cambió)
   c) Aplicar reemplazo (Edit tool)
   d) Validar sintaxis markdown post-cambio
   e) Registrar en bitácora: [timestamp] [archivo] [tipo] [antes/después]
```

**Parada Segura**:
- Si Edit falla → DETENER, reportar error específico
- Si línea no coincide → DETENER, reportar desincronización
- Si cambio introduce ERROR sintaxis → DESHACER (rollback)
- Si cambio introduce nueva contradicción → DETENER

**Progreso en tiempo real**:
```
✅ 1/12 - 2_atlas/ciudades/darsena/microcentro.md
✅ 2/12 - 4_diegesis/relatos/walter.md
⚠️ 3/12 - 3_personajes/secundarios/ivan-torres.md (advertencia permisos)
❌ 4/12 - BLOQUEADO: línea no coincide en archivo X
[resto...]
```

---

### FASE 10: VALIDACIÓN POST-CAMBIOS Y REPORTE

**Validaciones en paralelo**:
1. `/validar-canon` (COMPLETO) → Detectar nuevas contradicciones
2. `/validar-metadatos` (archivos modificados) → YAML intacto
3. `/validar-permisos` (si hay <!-- 🔐 -->) → Coherencia secretos
4. Rescan de patrones iniciales → Verificar resolución

**Criterios de Aprobación**:
```
✅ VÁLIDO
  • Cero errores críticos introducidos
  • Afirmación es ahora verdadera en canon
  • Estado: LISTO PARA COMMIT

⚠️ ADVERTENCIAS
  • Cambios OK pero algunas notas
  • Una validación tiene advertencia
  • Requiere revisión manual de sección específica

❌ INVÁLIDO
  • Uno+ errores críticos introducidos
  • Cambios NO resolvieron contradicción
  • Rollback automático recomendado
```

---

## Formato del Reporte (8 Secciones)

```
═════════════════════════════════════════════════════════════════
🔍 VALIDACIÓN: [AFIRMACIÓN EXACTA]
═════════════════════════════════════════════════════════════════

📋 ANÁLISIS DE AFIRMACIÓN:
- Tipo: [NEGACIÓN / AFIRMACIÓN]
- Sujeto: [qué]
- Contexto: [dónde/cuándo]
- Alcance: [específico/general]
- Coherencia canon: ✓ Compatible

═════════════════════════════════════════════════════════════════

📊 BÚSQUEDA CANÓNICA:
Referencias encontradas: N
├─ 2_atlas/ciudades/darsena/: X referencias
├─ 2_atlas/ciudades/cordoba.md: Y referencias
├─ 3_personajes/principales/: Z referencias
├─ 4_diegesis/relatos/: A referencias
└─ [más archivos]

═════════════════════════════════════════════════════════════════

🔄 CATEGORIZACIÓN:

✅ IGNORAR (7 referencias - compatibles):
1. archivo.md:línea - "texto" → Sin cambios necesarios
2. [más...]

✏️ CAMBIAR (12 referencias - triviales):
1. archivo.md:línea
   Antes: "texto original"
   Después: "texto reemplazo"
   Severidad: [TRIVIAL/COSMÉTICO/MODERADO]

2. [más...]

⚠️ REPLANTEAR (4 referencias - complejas):
1. archivo.md:línea_inicio-línea_fin
   PROBLEMA: [descripción]
   SOLUCIÓN: [reescritura breve]
   PRESERVA: [qué se mantiene]
   Impacto: [BAJO/MEDIO/ALTO]

═════════════════════════════════════════════════════════════════

⚙️ EJECUCIÓN DE CAMBIOS:

✅ Cambios Exitosos: 16/16
  ✅ 1/12 - archivo1.md
  ✅ 2/12 - archivo2.md
  [resto...]

❌ Cambios Fallidos: 0/16

═════════════════════════════════════════════════════════════════

✔️ VALIDACIÓN POST-CAMBIOS:

/validar-canon:
  ✅ CRONOLOGÍA: Sin anacronismos nuevos
  ✅ PERSONAJES: Caracterizaciones intactas
  ✅ FACCIONES: Métodos coherentes
  ✅ TECNOLOGÍA: Corpus Licitus respetado
  ✅ PERSPECTIVA: 2178 mantenida
  ✅ GEOGRAFÍA: Distancias realistas

/validar-metadatos: ✅ VÁLIDO

/validar-permisos: ⚠️ ADVERTENCIA
  [Si hay bloques <!-- 🔐 -->, validar coherencia]

═════════════════════════════════════════════════════════════════

📊 ESTADÍSTICAS:

Procesamiento:
  • Referencias encontradas: 23
  • Ignoradas: 7 (30%)
  • Cambiadas: 12 (52%)
  • Replanteadas: 4 (18%)

Impacto:
  • Archivos modificados: 12
  • Líneas modificadas: 38
  • Palabras reemplazadas: 47
  • Párrafos reescritos: 4

Coherencia:
  • Nuevas contradicciones: 0
  • Nuevos anacronismos: 0
  • Validaciones fallidas: 0
  • Advertencias: [N]

═════════════════════════════════════════════════════════════════

✅ RESULTADO FINAL:

La afirmación "[AFIRMACIÓN]" es AHORA VERDADERA en canon.

Estado: LISTA PARA COMMIT
Sugerencia: git commit -m "Garantizar coherencia: [AFIRMACIÓN RESUMIDA]"

═════════════════════════════════════════════════════════════════
```

---

## Restricciones Críticas

| Restricción | Descripción |
|-------------|-------------|
| **Alcance MODERADO** | Reescribir párrafos completos, NO capítulos enteros |
| **Sin intocables** | TODO debe revisarse AL INICIO, sin excepciones |
| **Estilo narrativo** | PRESERVAR siempre: tono, ritmo, emociones, descripciones |
| **Combustibles fósiles** | NO existen post-2061 (excepto generadores de electricidad) |
| **Ciudades confederadas** | Dársena primaria, revisar también: Córdoba, Mendoza, San Luis, FSM |
| **Anatomía Mecánico** | Respetar siempre: permitidos/prohibidos post-2061 |
| **Hitos inamovibles** | NO modificar: 2030 Meteorito, 2061 Anatema, 2161 Confederación |
| **Perspectiva 2178** | Fuentes válidas: SOLO físicas, NO digitales post-2061 |

---

## Validaciones Específicas

### Coherencia con Anatema Mecánico
```
POST-REEMPLAZO validar:
1. ¿Tecnología está en Corpus Licitus?
2. ¿Personaje/facción puede tener acceso?
3. ¿Año/período es compatible?
```

### Validación de Dependencias
```
Si cambio afecta REFERENCE.md:
  → Actualizar tabla pertinente

Si cambio afecta relaciones personaje:
  → Validar sigue siendo viable

Si cambio afecta trama de otro archivo:
  → Registrar como "requiere revisión secundaria"
```

---

## Siguiente Paso

Una vez completadas todas las validaciones:

```bash
git add [archivos modificados]
git commit -m "Garantizar coherencia: [AFIRMACIÓN EXACTA]"
```

---

**Skills consultados**: verdad-canon, worldbuilding, validar-canon, metadatos, permisos
