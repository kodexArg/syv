---
name: crear-faccion
description: Crear facción completa con estructura canónica de 11 categorías, validación de relaciones y coherencia narrativa según complejidad (Simple/Compleja)
---

# Crear Facción

Crea nueva facción para el universo SyV garantizando **coherencia total** contra canon:
- **Estructura canónica de 11 categorías** (adaptada según complejidad)
- **Relaciones validadas** contra Matriz de Relaciones
- **Coherencia cronológica** (2020-2178)
- **Coherencia tecnológica** (Anatema Mecánico)
- **Metadatos YAML estándar**

---

## Información Requerida

Pregunta al usuario (8 campos):

### 1. Nombre oficial
- Ejemplo: "La Hermandad de los Navegantes", "Los Forjadores"

### 2. Tipo (elegir UNO)
- **Oficial**: Poder reconocido por el Estado/Iglesia
- **Proscrita**: Perseguida activamente por autoridades
- **Secreta**: Oculta, membresía restringida
- **Mítica**: Existencia no confirmada (leyenda urbana)

### 3. Alcance geográfico (elegir UNO)
- **Local**: Limitada a una ciudad/región (ej: solo Dársena)
- **Regional**: Varias ciudades de la Confederación
- **Nacional**: Toda la Confederación Argentina
- **Internacional**: Presencia en múltiples países

### 4. Complejidad estimada (elegir UNO)
- **Simple** (< 50 líneas): Grupos pequeños, células, facciones míticas
  - Narrativa fluida con subtítulos mínimos
  - Categorías: I, II, III, VII, X, XI (6 de 11)
- **Compleja** (> 50 líneas): Instituciones grandes, organizaciones oficiales
  - Estructura con subtítulos claros (## y ###)
  - Categorías: TODAS las 11 (completas o parciales)

### 5. Propósito principal (1 frase)
- Ejemplo: "Preservar conocimiento prohibido del mundo pre-colapso"
- Ejemplo: "Proteger a comunidades indígenas en las Tuberías"

### 6. Ubicación base principal
- Validar contra: `2_atlas/ciudades/`
- Ejemplo: "Dársena (Barrio Norte)", "Córdoba (Zona Militar)", "Las Tuberías"

### 7. Tamaño aproximado (elegir UNO)
- **Decenas** (< 100 miembros): Grupos pequeños, élite
- **Cientos** (100-999): Organizaciones medianas
- **Miles** (1000+): Instituciones grandes
- **Indefinido**: Descentralizada, sin registro preciso

### 8. ¿Tiene información secreta para GM? (sí/no)
- Si **SÍ**: Incluir sección "Información secreta (no exponer a jugadores)"
- Ejemplos: pactos ocultos, infiltraciones, contradicciones

---

## Proceso Completo

### Fase 1: Recopilación Inicial
✅ Hacer las 8 preguntas obligatorias

### Fase 2: Desarrollo de Categorías

**Adaptar según complejidad declarada**:

#### Para Facciones SIMPLES (< 50 líneas):
Desarrollar narrativa fluida que integre:
- **I. Metadatos** (YAML frontmatter)
- **II. Identificación Básica** (nombre, tipo, alcance, estatus)
- **III. Contexto y Propósito** (introducción 1-3 párrafos, objetivos, filosofía)
- **VII. Relaciones Externas** (2-4 facciones clave con tipo de relación)
- **X. Información Privilegiada** (secretos GM si aplica)
- **XI. Referencias** (notas al pie)

**Estilo**: Fluido, subtítulos mínimos o sin ellos (como "Arpistas", "Guardianes")

#### Para Facciones COMPLEJAS (> 50 líneas):
Desarrollar estructura completa con subtítulos:
- **I. Metadatos** (YAML frontmatter)
- **II. Identificación Básica** (alias, terminología, nivel secretismo)
- **III. Contexto y Propósito** (introducción, objetivos declarados/ocultos)
- **IV. Organización y Estructura** (jerarquía, tamaño detallado, divisiones, reclutamiento)
- **V. Operaciones y Métodos** (modus operandi, tácticas, especializaciones, equipamiento)
- **VI. Recursos y Capacidades** (materiales, humanos, conocimiento, debilidades)
- **VII. Relaciones Externas** (institucionales, diplomáticas, secretas, reputación)
- **VIII. Presencia y Alcance** (territorial por ubicación, zonas de control)
- **IX. Elementos Temporales** (investigaciones 2178, operaciones activas, evolución)
- **X. Información Privilegiada** (doctrina, secretos, personalidad, significado narrativo)
- **XI. Personajes y Referencias** (personajes clave, referencias cruzadas)

**Estilo**: Subtítulos claros (## y ###), secciones bien definidas (como "Exorcistas", "Iglesia")

### Fase 3: Validación

#### 1. Coherencia Cronológica
- ✓ Origen compatible con cronología 2020-2178
- ✓ Eventos mencionados existen en `1_trasfondo/cronologia/cronología.md`

#### 2. Coherencia Geográfica
- ✓ Ubicaciones existen en `2_atlas/`
- ✓ Alcance geográfico realista (ej: grupo local no puede tener alcance internacional sin justificación)

#### 3. Coherencia de Relaciones (CRÍTICO)
Validar contra **Matriz de Relaciones**:

**❌ IMPOSIBLES** (Enemigos irreconciliables - NUNCA aliados):
- SIA ↔ Arpistas
- SIA ↔ Hackers/Criptógrafos
- Iglesia ↔ Resistencia Subterránea
- Iglesia ↔ Los Umbanda
- Fuerzas Armadas ↔ Resistencia Subterránea

**⚠️ TENSAS** (Cooperación oficial pero con conflicto):
- Iglesia ↔ Fuerzas Armadas
- Armada ↔ Ejército
- SIA ↔ Exorcistas

**🔒 SECRETAS** (Solo con justificación narrativa):
- Arpistas ↔ Guardianes de la Memoria
- Guardianes ↔ Sectores de Iglesia
- Sectores FF.AA. ↔ Sectores Iglesia
- Hackers ↔ DNS/SIA (reclutamiento forzoso)

#### 4. Coherencia Tecnológica
- ✓ Recursos tecnológicos respetan **Anatema Mecánico**
- ✓ Tecnología prohibida tiene justificación narrativa (ej: Arpistas neutralizan antes de archivar)
- ✓ Equipamiento coherente con tipo de facción (oficial vs proscrita)

#### 5. Coherencia Narrativa
- ✓ Propósito claro y diferenciado de otras facciones
- ✓ Métodos apropiados al tipo (oficial/proscrita/secreta)
- ✓ Motivaciones creíbles
- ✓ Relaciones justificadas narrativamente

### Fase 4: Formato Final

#### 1. Metadatos YAML (OBLIGATORIO)
```yaml
---
title: [Nombre Oficial Completo]
folder: 1_trasfondo/facciones/[subcarpeta]
description: [Resumen 1-2 líneas MÁXIMO - rol público sin secretos]
tags:
  - faccion
  - [tipo: oficial/proscrita/secreta/mitica]
  - [otros slugs relacionados a ubicaciones/temas]
facciones: [Array opcional de facciones relacionadas]
---
```

**CRÍTICO**:
- `description` NO debe revelar secretos GM
- `tags` deben usar **slugs** (nombre-archivo sin .md) de documentos relacionados
- Primer tag siempre es `faccion`

#### 2. Nombres en Negrita (OBLIGATORIO)
- Primera mención de CADA facción en **negrita**
- Ejemplo: Los **Arpistas** son perseguidos por la **Sagrada Inquisición Argentina (SIA)**

#### 3. Referencias al Pie (OBLIGATORIO si hay menciones)
```markdown
---

### Referencias

[^sia]: Sagrada Inquisición Argentina (SIA) / "Los Cirujanos del Alma"
[^iglesia]: La Iglesia de Dársena
[^arpistas]: Red internacional de preservadores de tecnología
```

#### 4. Información Secreta (OBLIGATORIO si aplica)
```markdown
**Información secreta (no exponer a jugadores):**

[Secretos internos, pactos ocultos, conspiraciones, contradicciones]
```

**Ubicación**: Antes de la sección "Referencias"

### Fase 5: Ubicación del Archivo

Determinar subcarpeta según tipo y complejidad:

**Oficiales mayores**:
- `iglesia-de-darsena/` - Iglesia y sus ramas (SIA, Exorcistas, Congregación)
- `fuerzas-armadas/` - Ejército, Armada, Fuerza Aérea, DNS
- `union/` - Gremio de Comercio y organizaciones económicas

**Proscritas/Secretas**:
- `facciones-menores/` - Todas las facciones no-oficiales

**Ramas de facciones mayores**:
- `[faccion-padre]/[nombre-rama].md`
- Ejemplo: `iglesia-de-darsena/exorcistas.md`

**Ruta final**: `1_trasfondo/facciones/[subcarpeta]/[nombre-kebab].md`

#### ⚠️ OBLIGACIÓN: Verificar `index.md`

**ANTES** de crear el archivo de la facción:

1. **Verificar si la carpeta destino tiene `index.md`**
   - Si existe: continuar normalmente
   - Si NO existe: crear `index.md` primero con contenido narrativo apropiado

2. **Contenido mínimo del `index.md`**:
   ```markdown
   ---
   title: [Nombre Carpeta]
   sidebar:
     order: 1
   ---

   [2 párrafos describiendo qué tipo de facciones contiene esta carpeta,
    siguiendo Canon de Estilo SyV: afirmaciones positivas, objetos con peso,
    sincretismo léxico moderado, terminología canónica]
   ```

3. **Ejemplo para `facciones-menores/index.md`**:
   - Ver archivo existente como referencia
   - Describir qué distingue a las facciones menores de las mayores
   - Mencionar ejemplos representativos sin listar todas

**Validación**: El comando NO debe completarse si la carpeta destino carece de `index.md` válido.

---

## Restricciones y Advertencias

### ✅ HACER

- Adaptar estructura según complejidad (Simple/Compleja)
- Validar relaciones contra Matriz (Imposibles/Tensas/Secretas)
- Incluir información secreta GM cuando sea relevante
- Usar referencias cruzadas con notas al pie
- Nombres de facciones en **negrita** primera mención
- Respetar Anatema Mecánico en recursos tecnológicos
- Propósito único y diferenciado de otras facciones

### ❌ EVITAR

- Crear alianzas imposibles (SIA + Arpistas, Iglesia + Resistencia)
- Facciones sin propósito claro o muy similar a existentes
- Relaciones sin justificación narrativa
- Tecnología prohibida sin explicación
- Información contradictoria con canon establecido
- Revelar secretos GM en campo `description` de metadatos
- Usar subtítulos rígidos en facciones simples (< 50 líneas)

---

## Validaciones Ejecutadas

1. **Metadatos**: Campos obligatorios, formato YAML, tags con slugs válidos
2. **Facciones relacionadas**: Verificar existen en `1_trasfondo/facciones/`
3. **Ubicaciones**: Verificar existe en `2_atlas/`
4. **Coherencia temporal**: Validar contra `1_trasfondo/cronologia/cronología.md`
5. **Coherencia de relaciones**: Validar contra Matriz (IMPOSIBLES detectadas = ERROR)
6. **Coherencia tecnológica**: Recursos respetan Anatema Mecánico
7. **Detección de duplicados**: Buscar facciones similares existentes

---

## Referencias de Validación

| Archivo | Propósito |
|---------|----------|
| `1_trasfondo/facciones/` | Validar facciones relacionadas, evitar duplicados |
| `2_atlas/ciudades/` | Validar ubicaciones base |
| `.claude/skills/facciones/SKILL.md` | Estructura canónica, Matriz de Relaciones |
| `0_proyecto/guias-para-colaboradores/PLANTILLA_FACCION.md` | Template de referencia |
| `1_trasfondo/cronologia/cronología.md` | Coherencia temporal |

---

## Output Esperado

```
✅ Facción creada: 1_trasfondo/facciones/[subcarpeta]/[nombre-kebab].md
📊 Complejidad: [Simple/Compleja]
📝 Categorías incluidas: [I, II, III, VII, X, XI] o [I-XI completas]
🔍 Validaciones: [N] aprobadas, [N] advertencias
🔐 Secretos GM: [Sí/No]
📚 Relaciones validadas: [N] facciones relacionadas
```

---

**Skills consultados**: facciones, metadatos, cronologia, ubicaciones, worldbuilding
