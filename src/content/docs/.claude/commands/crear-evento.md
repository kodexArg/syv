---
name: crear-evento
description: Agregar evento histórico a cronología validando coherencia temporal, tecnología del Anatema Mecánico y facciones existentes
---

# Crear Evento

Agrega evento histórico a cronología canónica garantizando **coherencia temporal absoluta**:
- **NO contradice** `cronología.md` canónica
- **NO modifica HITOS inamovibles** (2030 Meteorito, 2061 Anatema, etc.)
- **Tecnología apropiada** para año (Anatema Mecánico post-2061)
- **Facciones existían** en ese período
- **Perspectiva 2178** OBLIGATORIA (Hermano Archivista)

---

## Información Requerida

Pregunta al usuario (7 campos):

1. **Fecha del evento** (YYYY-MM-DD o YYYY)
   - Rango válido ÚNICO: 2020-2178
   - Ejemplo: "2061-05-15" o "2161"

2. **Nombre del evento**
   - Breve, descriptivo
   - Ejemplo: "Promulgación del Anatema Mecánico"

3. **Período histórico** (elegir UNO de 7 eras):
   - Los Últimos Años (2020-2029)
   - Los Años del Caos (2029-2038)
   - La Gran Guerra Global (2039-2047)
   - El Fin de los Secretos y Dominio Algorítmico (2048-2061)
   - La Edad Oscura (2062-2160)
   - La Confederación Temprana (2161-2177)
   - Actualidad (2178)

4. **Descripción del evento** (3-5 líneas mínimo)
   - Qué pasó
   - Por qué fue importante
   - Consecuencias inmediatas
   - Perspectiva 2178 (documentador histórico)

5. **Personajes involucrados** (opcional pero recomendado)
   - Separados por coma
   - Validar existen en `3_personajes/`
   - Ejemplo: "Monseñor Miguel, Dr. Francisco de la Cruz"

6. **Facciones involucradas** (requerido)
   - Validar existen EN ESE PERÍODO
   - Ejemplo: "Iglesia de Dársena, Arpistas"

7. **¿Es un HITO?** (si/no)
   - HITO = Evento que cambió curso historia
   - SóLO para eventos de importancia MÁXIMA
   - Ejemplos: Meteorito (2030), Anatema (2061), Confederación (2161)

---

## Proceso Completo

### 1. Recopilación (Hacer 7 preguntas)

### 2. Validaciones CRÍTICAS
- ✓ Fecha en rango 2020-2178
- ✓ Período correcto para año
- ✓ NO contradice `cronología.md` canónica
- ✓ Facciones existían EN ESE PERÍODO
- ✓ Personajes existen en `3_personajes/`
- ✓ Tecnología apropiada para año:
  - Pre-2061: Digital ✓ permitida
  - Post-2061: Digital ✗ PROHIBIDA (Anatema vigente)
  - Excepciones: Arpistas/Criptógrafos clandestinos
- ✓ Si es HITO: NO contradice hitos inamovibles
- ✓ Perspectiva SIEMPRE desde 2178
- ✓ Fuentes SIEMPRE físicas (NO digitales post-2061)

### 3. Validación de HITOS (SI APLICA)
Si usuario marca como HITO, verificar:
```
NO puede contradecir estos HITOS INAMOVIBLES:
- 2029: Noche Global (apagón planetario)
- 27 dic 2030: Meteorito Buenos Aires
- 2035: Último contacto intercontinental, Nacimiento de las QIA
- 2039: El Estallido (guerra sino-norteamericana, inicio Gran Guerra Global)
- 2039-2047: Gran Guerra Global
- 7 abril 2048: El Fin de los Secretos (descifrado masivo QIA)
- 2048-2061: El Dominio Algorítmico (subordinación tecnológica)
- 2054: Traslado Santa Sede a Dársena
- 12 marzo 2061: El Gran Silencio (apagón coordinado global)
- 15 agosto 2061: Promulgación del Anatema Mecánico
- 2161: Confederación Argentina
```

### 4. Generación de Entrada en Cronología

**SI es evento MENOR**:
- Ubicación: `1_trasfondo/cronologia/cronologia.md`
- Bajo: `## Período / ### Año`
- Formato: `- **DD de mes: Nombre evento**`

**SI es evento MAYOR (HITO)**:
- Crear: `1_trasfondo/hitos/YYYY-nombre-evento.md`
- Contenido: Artículo completo con perspectiva 2178
- Referencia desde cronologia.md

#### ⚠️ OBLIGACIÓN: Verificar `index.md`

**ANTES** de crear archivo de HITO:

1. **Verificar si la carpeta destino tiene `index.md`**
   - Carpeta destino: `1_trasfondo/hitos/`
   - Si existe: continuar normalmente
   - Si NO existe: crear `index.md` primero con contenido narrativo apropiado

2. **Contenido mínimo del `index.md`**:
   ```markdown
   ---
   title: Hitos
   sidebar:
     order: 1
   ---

   [2 párrafos describiendo qué son los hitos cronológicos del universo SyV,
    siguiendo Canon de Estilo SyV: perspectiva 2178, terminología canónica,
    mencionar eventos clave sin listarlos todos]
   ```

3. **Ejemplo para `1_trasfondo/hitos/index.md`**:
   - Ver archivo existente como referencia
   - Describir momentos que quebraron la historia
   - Mencionar El Estallido, Fin de los Secretos, Gran Silencio, Anatema Mecánico

**Validación**: Si crea HITO, el comando NO debe completarse si la carpeta destino carece de `index.md` válido.

### 5. Redacción con Perspectiva 2178 (OBLIGATORIA)
```
CORRECTO (desde 2178):
"Los registros sugieren que..."
"Según testimonios preservados..."
"Cartas recuperadas de ese período muestran..."

INCORRECTO (RECHAZAR):
"La verdadera razón era..." [omnisciencia]
"Años después tendría consecuencias..." [conoce futuro]
"Comunicaciones digitales interceptadas..." [no hay internet post-2061]
"Datos de QIA..." [QIA destruida post-2061]
```

### 6. Post-Creación
- [Hook valida coherencia post-inserción]
- Verificación: NO hay anacronismos introducidos

---

## ⚠️ RESTRICCIONES CRÍTICAS

### 7 ERAS INAMOVIBLES (NO pueden cambiar):
```
1. 2020-2029: Los Últimos Años
2. 2029-2038: Los Años del Caos
3. 2039-2047: La Gran Guerra Global
4. 2048-2061: El Fin de los Secretos y Dominio Algorítmico
5. 2062-2160: La Edad Oscura
6. 2161-2177: La Confederación Temprana
7. 2178: Actualidad
```

### HITOS INAMOVIBLES (NO pueden contradecirse):
```
✗ NO puede modificar ni contradecir:
- 2029: Noche Global
- 27 dic 2030: Meteorito (850m radio)
- 2035: Último contacto intercontinental, Nacimiento de las QIA
- 2039: El Estallido (guerra sino-norteamericana, inicio Gran Guerra Global)
- 2039-2047: Gran Guerra Global
- 7 abril 2048: El Fin de los Secretos (descifrado masivo QIA)
- 2048-2061: El Dominio Algorítmico (subordinación tecnológica)
- 2054: Traslado Santa Sede a Dársena
- 12 marzo 2061: El Gran Silencio (apagón coordinado global)
- 15 agosto 2061: Promulgación del Anatema Mecánico
- 2161: Formación Confederación Argentina
```

### TECNOLOGÍA SEGÚN AÑO:
```
PRE-ANATEMA (2020-2061):
✓ Tecnología digital permitida
✓ IA, redes, internet funcionan
✓ QIA mencionar (2048-2061)
✓ Computadores, smartphones, drones

POST-ANATEMA (2061-2178):
✗ Tecnología digital PROHIBIDA
✗ IA prohibida (persecución SIA)
✗ Internet inexistente
✗ Computadores solo análogos mecánicos muy limitados
✓ EXCEPTO: Arpistas/Criptógrafos clandestinos
```

### PERSPECTIVA 2178 OBLIGATORIA:
```
Narrador: Hermano Archivista Pedro de los Santos (Archivo Eclesiástico)
Fuentes válidas: Documentos físicos, testimonios, artefactos
Limitación: NO información que solo existiría digitalmente
Tono: Archivístico, documentador, reconoce incertidumbres
```

---

## Validaciones Ejecutadas

1. **Cronología**: Verificar coherencia temporal, NO contradice eventos
2. **Período**: Verificar año cae en período correcto
3. **Tecnología**: Validar apropiada para año (Anatema post-2061)
4. **Facciones**: Verificar existían EN ESE PERÍODO
5. **Personajes**: Verificar existen en canon
6. **HITOS**: Si es hito, verificar NO contradice inamovibles
7. **Perspectiva**: Verificar DESDE 2178 (no omnisciencia)
8. **Fuentes**: Verificar físicas SOLO (no digitales post-2061)

---

## Referencias de Validación

| Archivo | Propósito |
|---------|----------|
| `1_trasfondo/cronologia/cronología.md` | Validar coherencia temporal |
| `.claude/skills/cronologia/SKILL.md` | 7 eras, hitos inamovibles |
| `1_trasfondo/facciones/` | Validar facciones existían |
| `3_personajes/` | Validar personajes |
| `1_trasfondo/codex/tecnologia-prohibida.md` | Validar tecnología |

---

## Output Esperado

```
✅ Evento agregado a cronología (2020-2178)
📅 Ubicación: 1_trasfondo/cronologia/cronologia.md
   [Período/Año/evento]
   O
   1_trasfondo/cronologia/eventos-mayores/YYYY-MM-DD-nombre.md [si mayor]
🔗 Conexiones: [personajes y facciones validadas]
```

---

**Skills consultados**: cronologia, personajes, facciones, metadatos, worldbuilding
