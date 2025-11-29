---
name: crear-personaje
description: Crear personaje completo con metadatos, estructura narrativa y validación contra facciones, ubicaciones y cronología
---

# Crear Personaje

Crea nuevo personaje para el universo SyV garantizando **coherencia total** contra canon:
- **Facciones válidas** (`1_trasfondo/facciones/`)
- **Ubicaciones existentes** (`2_atlas/ciudades/`)
- **Cronología canónica** (`1_trasfondo/cronologia/cronología.md`)
- **Metadatos YAML estándar**

---

## Información Requerida

Pregunta al usuario (7 campos):

1. **Nombre del personaje**
   - Ejemplo: "Capitán Romero", "Hermana Julieta"

2. **Categoría** (elegir UNA):
   - Principal: PJs/NPCs clave que impulsan trama
   - Secundario: NPCs mencionados en relatos con trasfondo
   - Arquetipo: Plantillas genéricas

3. **Descripción breve** (1-2 líneas máximo)
   - ROL PÚBLICO SOLAMENTE (sin revelar secretos)
   - Profesión, ubicación, característica distintiva
   - Ejemplo: "Oficial de Armada, 45 años, Isla Oriental"

4. **Facciones asociadas** (requerido: puede ser "ninguna")
   - Separadas por coma
   - Validar contra: `1_trasfondo/facciones/`
   - Ejemplo: "Armada Argentina, Arpistas"

5. **¿Tiene secretos/información oculta?** (si/no)
   - Si SÍ: Usar `/validar-permisos` después
   - Si SÍ: Incluir campo `alerta-spoilers` en YAML

6. **Ubicación principal** (requerido)
   - Validar contra: `2_atlas/ciudades/`
   - Ejemplo: "Dársena (Isla Oriental)"

7. **Edad aproximada** (opcional)
   - Ejemplo: "45 años" o "~30 años"

---

## Proceso Completo

### 1. Recopilación (Hacer 7 preguntas)
### 2. Validaciones
- ✓ Facciones existen en `1_trasfondo/facciones/`
- ✓ Ubicación existe en `2_atlas/`
- ✓ Detectar coincidencias en `.claude/REFERENCE.md`
- ✓ Validar coherencia temporal (cronología)

### 3. Generación de Archivo
- **Nombre**: `[nombre-apellido].md` (kebab-case)
- **Carpeta**: `3_personajes/[categoria]/`
- **Metadatos YAML OBLIGATORIOS**:
  ```yaml
  titulo: [Nombre completo]
  carpeta: 3_personajes/[categoria]
  descripcion: [Rol PÚBLICO sin secretos]
  tags: [nombre-apellido, profesion, ubicacion]
  facciones: []  o  ["Facción1", "Facción2"]
  alerta-spoilers: "texto si hay secretos"
  ```

### 4. Estructura de Contenido (Estándar)
1. **Identidad** - Nombre completo, apodos, edad, profesión, ubicación principal (CON SALTOS DE LÍNEA entre campos)
2. **Aspecto** - Párrafo + Frase:
   - **Párrafo (Objetivo)**: SOLO apariencia física. Altura, complexión, ropa, marcas distintivas. SIN entorno, SIN movimientos, SIN contexto. Directo, conciso. 2-3 líneas máximo.
   - **Frase (Subjetivo)**: Una sola frase que resume QUIÉN ES el personaje. Sin adornos.
3. **Descripción** - Contiene 4 subsecciones:
   - **Rol y Posición** - UN párrafo (función en sociedad, oficial)
   - **Personalidad** - UN párrafo + 1-3 citas/muletillas directas (sin comentarios)
   - **Motivaciones** - UN párrafo (qué lo mueve; soporta etiquetas PERMISOS si aplica)
   - **Trasfondo** - Información adicional CON etiquetas PERMISOS si aplica (SIN "oculto" ni "secreto")
4. **Conexiones Importantes** - Relaciones públicas observables (nombres específicos, dinámicas concretas)
5. **Referencias** - Notas al pie (opcional)

### 4.1 Formato EXACTO de Identidad
**SIN labels, SIN bloques redundantes. Directo y limpio.**

```
## [Nombre Corto, Epíteto/Rol si existe]

[Edad], [Ubicación]

[Profesión/Rol descriptivo (máximo 1 línea)]
```

**Ejemplos:**
- `## Luisa, la Pescadora` / `40 años, Barrios del Muro` / `Trabajadora portuaria`
- `## Marcos` / `39 años, Las Túberías` / `Verdulero y cervecero`
- `## Dr. Francisco de la Cruz` / `65 años, Barrio Norte` / `Decano de Historia de la Universidad de Dársena`

**NOTA**: Nombre breve incentiva mejor presentación. Si tiene título (Dr., Hermana, etc.), incluir. Epíteto solo si es conocido por él.

### 5. Orden de Secretos (SI APLICA)
**OBLIGATORIO**: Ambas líneas (apertura Y cierre) en formato exacto:
```
<!-- 📖 (Región) -->
Información SABER_POPULAR
/📖

<!-- 🔐 (Disciplina/Facción) -->
Información SECRETO_DISCIPLINARIO
/🔐

<!-- 🔐☠️ (Facción Específica) -->
Información SECRETO_MORTAL
/🔐☠️
```
**CRÍTICO**: Cierre es `/ICONO` (no `<!-- /ICONO -->` ni variaciones)

### 6. Requisitos de Lenguaje y Tono

**OBLIGATORIO en todas las secciones**:
- ✅ Lenguaje **asertivo y significativo** (no plano ni genérico)
- ✅ **Voz única del personaje**: metáforas, aliteraciones, sarcasmo, burla, particularidades
- ✅ **Evitar genericismo**: cada sección debe revelar identidad del personaje
- ✅ **Frases vívidas**: sustantivos fuertes, verbos activos, adjetivos precisos
- ❌ No: "Es un hombre de trabajo arduo, dedicado a sus negocios"
- ✅ Sí: "Marcos irradia energía positiva entre cajas de verduras, empresario decidido que transforma su vagón en refugio para su comunidad"

### 7. Post-Creación
- [Hook actualiza .claude/REFERENCE.md si Principal]
- Si tiene secretos: Ejecutar `/validar-permisos` para validación exacta
- Pasar por skill **worldbuilding** para coherencia narrativa
- Pasar por comando `/validar-canon` para coherencia con universo

---

## ⚠️ RESTRICCIONES CRÍTICAS

### Campo `descripcion` (OBLIGATORIO)
**PROHIBIDO revelar en descripción pública**:
- ✗ Afiliaciones secretas
- ✗ Traiciones o dobles agendas
- ✗ Información de sección "Secretos"

**OBLIGATORIO incluir**:
- ✓ Nombre y apodos públicos
- ✓ Rol oficial en sociedad
- ✓ Profesión observable
- ✓ Facciones públicamente conocidas
- ✓ Ubicación de residencia/actividad

### Campo `facciones` (SIEMPRE OBLIGATORIO)
```yaml
facciones: []  # Si no tiene ninguna
facciones: ["Iglesia de Dársena"]  # Si tiene una
facciones: ["Armada Argentina", "Arpistas"]  # Si tiene múltiples
```
NOMBRES EXACTOS entre comillas (validar contra `1_trasfondo/facciones/`)

### Campo `alerta-spoilers` (OBLIGATORIO si hay secretos)
```yaml
alerta-spoilers: "Contiene información crítica sobre [qué]"
```

---

## Validaciones Ejecutadas

1. **Metadatos**: Campos obligatorios, formato YAML, español minúsculas
2. **Facciones**: Verificar existen en canon, nombres exactos
3. **Ubicaciones**: Verificar existe en atlas
4. **Coherencia temporal**: Validar contra cronología canónica
5. **Detección de duplicados**: Buscar en REFERENCE.md y 3_personajes/
6. **Orden de secretos**: Si tiene, debe ser 📖 → 🔐 → 🔐☠️

---

## Referencias de Validación

| Archivo | Propósito |
|---------|----------|
| `1_trasfondo/facciones/` | Validar facciones |
| `2_atlas/ciudades/` | Validar ubicaciones |
| `3_personajes/` | Evitar duplicados |
| `.claude/REFERENCE.md` | Detección rápida |
| `1_trasfondo/cronologia/cronología.md` | Coherencia temporal |
| `.claude/instructions/permisos-spec.md` | Estructura secretos |

---

## Output Esperado

```
✅ Personaje creado: 3_personajes/[categoria]/[nombre-kebab].md
📝 REFERENCE.md actualizado (si es Principal)
🔒 Recordatorio: Usa /validar-permisos para validar PERMISOS
```

---

**Skills consultados**: personajes, metadatos, facciones, ubicaciones, cronologia, worldbuilding
