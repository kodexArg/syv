# Sistema de PERMISOS SyV - Especificación Técnica

## Descripción General

El **Sistema PERMISOS** es un mecanismo de **alertas de información sensible** para masters de JdR del universo Subordinación y Valor. Está diseñado para:

- ✅ **Máxima simplicidad**: Sintaxis minimalista en comentarios HTML
- ✅ **Legibilidad humana**: Íconos visuales claros (invisibles en render)
- ✅ **Parseabilidad**: Estructura exacta para backends futuros
- ✅ **Organización**: Secretos al final, ordenados por nivel

**NO es restrictivo**, sino una **herramienta educativa** que advierte al master sobre información que requiere cuidado narrativo.

---

## Niveles de Información

### Nivel 1: PÚBLICO
**Icono**: (sin comentario)
**Acceso**: Cualquier jugador
**Descripción**: Información accesible públicamente. Sin marcador.

---

### Nivel 2: SABER POPULAR
**Icono**: 📖
**Sintaxis**: `<!-- 📖 (Región) -->` ... `/📖`
**Acceso**: Población local del área
**Descripción**: Información conocida por habitantes de una región específica.

**Variantes de Scope**:
- `(Dársena)` - Región
- `(Túberías)` - Subregión
- `(Iglesia (Exorcistas))` - Facción con rama específica
- `(Dársena, Córdoba)` - Múltiples regiones

**Cuándo usarlo**:
- Leyendas locales
- Chismes regionales
- Prácticas culturales conocidas
- Lo que un nativo daría por sentado

---

### Nivel 3: SECRETO DISCIPLINARIO
**Icono**: 🔐
**Sintaxis**: `<!-- 🔐 (Disciplina/Facción) -->` ... `/🔐`
**Acceso**: Personas con estudio/especialización o que conocen otro secreto
**Descripción**: Información que requiere educación, oficio o conocimiento previo.

**Variantes de Scope**:
- `(Arquitectura)` - Disciplina académica
- `(Ingeniería)` - Oficio técnico
- `(Guardianes)` - Facción específica
- `(Arquitectura, Ingeniería)` - Múltiples disciplinas

**Cuándo usarlo**:
- Detalles técnicos de estructuras
- Información académica restringida
- Secretos de oficios/profesiones
- Conocimiento que se obtiene tras otro secreto

---

### Nivel 4: SECRETO MORTAL
**Icono**: 🔐☠️
**Sintaxis**: `<!-- 🔐☠️ (Facción/Ubicación) -->` ... `/🔐☠️`
**Acceso**: Solo master (información crítica)
**Descripción**: Información que contradiría los pilares éticos/políticos/religiosos si se revelara.

**Variantes de Scope**:
- `(SIA)` - Facción
- `(Iglesia)` - Institución
- `(Fuerzas Armadas)` - Poder estatal
- `(SIA, Iglesia)` - Múltiples afectados

**Cuándo usarlo**:
- Secretos que una facción perseguiría hasta la muerte
- Verdades que destruirían credibilidad política/religiosa
- Tecnología prohibida siendo usada
- Conspiración activa
- Infiltración/traición

---

## Sintaxis Exacta

### Regla 1: LOS SECRETOS VAN FUERA DEL PÁRRAFO

❌ **INCORRECTO**:
```markdown
El doctor dijo que <!-- 🔐 (Medicina) -->la enfermedad era incurable<!-- /🔐 -->.
```

✅ **CORRECTO**:
```markdown
El doctor dijo algo importante.

<!-- 🔐 (Medicina) -->
La enfermedad era incurable, según sus cálculos secretos.
<!-- /🔐 -->
```

Los secretos son **bloques separados**, NUNCA inline dentro de párrafos.

---

### Regla 2: PREFERIBLEMENTE AL FINAL Y ORDENADOS

✅ **PREFERIDO**:
```markdown
# Capítulo

Párrafo 1...
Párrafo 2...
Párrafo 3...

<!-- 📖 (Dársena) -->
Información de saber popular.
<!-- /📖 -->

<!-- 🔐 (Arquitectura) -->
Información técnica.
<!-- /🔐 -->

<!-- 🔐☠️ (SIA) -->
Información crítica.
<!-- /🔐☠️ -->
```

**Orden preferente**: PÚBLICO → SABER_POPULAR → SECRETO_DISCIPLINARIO → SECRETO_MORTAL

**Excepciones permitidas**:
- En historias/relatos (diegesis): Pueden ir intercalados según narrativa
- Muy puntuales: Excepciones se perdonan si son necesarias narrativamente

**En cronología**: Casi NUNCA usar - La cronología es factual, no debe tener secretos marcados.

---

### Sintaxis Completa

```markdown
<!-- 🔐☠️ (SIA, Iglesia) -->
El contenido del secreto va aquí.
Puede ocupar múltiples párrafos.
Múltiples líneas de texto.
<!-- /🔐☠️ -->
```

**Componentes**:
1. **Apertura**: `<!-- ICONO (SCOPE) -->`
   - ICONO: `📖` | `🔐` | `🔐☠️`
   - SCOPE: Nombre exacto en paréntesis `(Región)` o `(SIA (Rama))`
   - Espacio obligatorio: `<!-- ` y ` -->`

2. **Contenido**: Markdown válido, múltiples párrafos permitidos

3. **Cierre**: `<!-- /ICONO -->`
   - Formato: `<!-- /📖 -->`, `<!-- /🔐 -->`, `<!-- /🔐☠️ -->`
   - Comentario HTML completo con barra + icono

---

## Patrones de Regex para Parse

### Extraer bloques
```regex
<!-- ([📖🔐☠️]+) \(([^)]+)\) -->
(.*?)
<!-- /\1 -->
```

**Captura**:
- Grupo 1: Icono(s)
- Grupo 2: Scope
- Grupo 3: Contenido

### Detectar icono
```regex
([📖🔐☠️]+)
```

### Validar cierre
```regex
<!-- /([📖🔐☠️]+) -->
```

---

## Mapeo de Iconos a Niveles

| Icono | Nivel | Nivel Inglés | Uso |
|-------|-------|------------|-----|
| (ninguno) | PÚBLICO | PUBLIC | Sin marcador |
| 📖 | SABER_POPULAR | COMMON_KNOWLEDGE | Población local |
| 🔐 | SECRETO_DISCIPLINARIO | DISCIPLINARY_SECRET | Especialización |
| 🔐☠️ | SECRETO_MORTAL | DEADLY_SECRET | Crítica total |

---

## Validación: Reglas Obligatorias

### ✅ PERMITIDO

```markdown
Párrafo normal.

<!-- 🔐☠️ (SIA) -->
Información crítica para SIA.
<!-- /🔐☠️ -->

<!-- 📖 (Dársena) -->
Leyenda de Dársena.
<!-- /📖 -->
```

```markdown
<!-- 🔐 (Arquitectura, Ingeniería) -->
Detalles técnicos compartidos.
<!-- /🔐 -->
```

```markdown
<!-- 🔐☠️ (Iglesia (Exorcistas)) -->
Secreto de rama específica.
<!-- /🔐☠️ -->
```

### ❌ PROHIBIDO

**Error 1**: Secreto inline
```markdown
El doctor dijo <!-- 🔐 (Medicina) -->secretamente<!-- /🔐 --> que...
```

**Error 2**: Scope vacío
```markdown
<!-- 🔐 () -->
<!-- /🔐 -->
```

**Error 3**: Icono incorrecto
```markdown
<!-- 🔒 (SIA) -->  ← Usar 🔐☠️, no 🔒
<!-- /🔒 -->
```

**Error 4**: Cierre sin HTML
```markdown
<!-- 🔐 (SIA) -->
Contenido...
/🔐  ← Debe ser <!-- /🔐 -->, no /🔐
```

**Error 5**: Nidamiento
```markdown
<!-- 🔐☠️ (SIA) -->
Contenido...
  <!-- 🔐 (Arquitectura) -->
  ← PROHIBIDO nidamiento
  <!-- /🔐 -->
<!-- /🔐☠️ -->
```

---

## Ejemplos Prácticos

### Ejemplo 1: Historia con Secretos Intercalados

```markdown
# El Encuentro en Túberías

Damián bajó por los pasos de metal oxidado, su impermeable goteando sobre las
escaleras resbaladizas. Las sombras danzaban con luz anaranjada.

El contacto anónimo esperaba en la esquina.

<!-- 🔐☠️ (SIA) -->
El contacto era un agente infiltrado de la SIA, fingiendo desertor.
<!-- /🔐☠️ -->

Damián no lo sabía. No podía saberlo.

<!-- 📖 (Túberías) -->
En Túberías, las traiciones se pagan con la vida, rápida y sin registro.
<!-- /📖 -->
```

### Ejemplo 2: Cronología (casi sin secretos)

```markdown
---
titulo: Cronología
carpeta: 1_trasfondo/cronologia
---

# Timeline 2048-2061: El Fin de los Secretos

En 2048 emergen las primeras QIAs. Gobierno algoritmo 13 años.

En 2061, rebelión global. Se destruyen QIAs. Iglesia promulga Anatema Mecánico.
```

*Nota: Sin secretos marcados. Cronología es factual.*

### Ejemplo 3: Documento con Secretos al Final

```markdown
# Facción: Arpistas

Los Arpistas son una red internacional de preservadores de tecnología.

Origen, objetivos, estructura...

(muchos párrafos públicos)

<!-- 🔐☠️ (SIA) -->
Operan actualmente en Túberías bajo Dársena. Mantienen computadores
pre-Anatema funcionales. SIA los busca activamente para ejecución.
<!-- /🔐☠️ -->

<!-- 🔐 (Acceso previo: Arpistas) -->
Contacto local: Dr. Francisco de la Cruz. Sede: Barrio Norte.
<!-- /🔐 -->

<!-- 📖 (Dársena) -->
Todos saben que existen "los Guardadores", aunque no saben su verdadero alcance.
<!-- /📖 -->
```

---

## Reglas de Scope

### Scope Válidos

**Regiones/Ubicaciones**:
- `(Dársena)`, `(Córdoba)`, `(Mendoza)`, `(Túberías)`, `(Barrio Norte)`
- Deben existir en atlas o REFERENCE.md

**Facciones**:
- `(SIA)`, `(Iglesia)`, `(Arpistas)`, `(Guardianes)`, `(Fuerzas Armadas)`
- Pueden tener ramas: `(SIA (Hermanas de Batalla))`, `(Iglesia (Exorcistas))`

**Disciplinas**:
- `(Arquitectura)`, `(Ingeniería)`, `(Teología)`, `(Medicina)`, `(Historia)`

**Múltiples**:
- `(SIA, Iglesia)`, `(Arquitectura, Ingeniería)`, `(Dársena, Córdoba)`

### Scope Inválidos

❌ `(secreto importante)` - Usar facción/región real
❌ `(?)` - Scope incompleto
❌ `(SIA, SIA)` - Duplicados
❌ `(Facción Que No Existe)` - No verificable

---

## Coherencia Temporal

**Regla**: Información no puede existir antes de su evento en cronología.

❌ **INCORRECTO**:
```markdown
Documento fechado: 2050

<!-- 🔐☠️ (Arpistas) -->
Los Arpistas operaban secretamente...
/🔐☠️

(Pero Arpistas se fundaron en 2155)
```

✅ **CORRECTO**:
```markdown
Documento fechado: 2160

<!-- 🔐☠️ (Arpistas) -->
Los Arpistas operaban secretamente desde 2155...
/🔐☠️
```

---

## Usos por Tipo de Documento

| Tipo | Recomendación | Justificación |
|------|---------------|---------------|
| **Cronología** | Casi NUNCA | Factual, no secreta |
| **Facciones** | FRECUENTE | Operaciones clandestinas |
| **Personajes** | FRECUENTE | Secretos y alianzas |
| **Ubicaciones** | MODERADO | Leyendas y detalles |
| **Historias/Diegesis** | FLEXIBLE | Pueden ir intercalados |

---

## Migración desde Antiguo Sistema

Si había:
```markdown
<!-- BEGIN:PERMISSION level="SECRETO_MORTAL" scope="SIA" -->
**🔒 SECRETO MORTAL [SIA]**
Contenido...
<!-- END:PERMISSION -->
```

Convertir a:
```markdown
<!-- 🔐☠️ (SIA) -->
Contenido...
<!-- /🔐☠️ -->
```

**Cambios**:
- ✅ Eliminar comentarios BEGIN/END
- ✅ Eliminar badge visual
- ✅ Cambiar `[scope]` a `(scope)`
- ✅ Cambiar cierre a `<!-- /icono -->`
- ✅ Eliminar `permission_scope` de YAML

---

## Notas Finales

1. **Inmutabilidad**: Esta especificación define la interfaz. No cambia sin acuerdo explícito.
2. **Simplicidad**: La sintaxis es minimalista. No añadir complejidad.
3. **Coherencia**: Scope debe verificarse contra canon existente.
4. **Orden**: Preferentemente final, ordenados por nivel.
5. **Excepciones**: Solo en historias/diegesis, permisibles si narrativamente necesario.

---

**Versión**: 2.0 (Sintaxis Simplificada)
**Creada**: 2178
**Vigencia**: Permanente
**Cambios**: Solo con aprobación explícita
