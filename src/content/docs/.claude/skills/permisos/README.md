# Sistema PERMISOS - Guía de Usuario

Bienvenido al **Sistema PERMISOS SyV**. Esta es una guía de cómo marcar información sensible para masters de JdR.

---

## ¿Qué es PERMISOS?

Un sistema minimalista de **alertas narrativas** que marca información sensible:

- 📖 **SABER POPULAR**: Información que la población local conoce
- 🔐 **SECRETO DISCIPLINARIO**: Información que requiere especialización
- 🔐☠️ **SECRETO MORTAL**: Información crítica para facción/ubicación
- *Sin marca* = PÚBLICO: Accesible a cualquiera

**Sintaxis simple**: Comentarios HTML + íconos + cierre con barra

---

## Sintaxis Exacta

### Los Secretos van FUERA del párrafo

```markdown
Párrafo normal aquí.

<!-- 🔐☠️ (SIA) -->
Contenido del secreto mortal.
/🔐☠️

Siguiente párrafo.
```

**NUNCA inline** como esto ❌:
```markdown
El doctor dijo <!-- 🔐 (Medicina) -->secretamente/🔐 que...
```

---

## Los 4 Niveles

### 📖 SABER POPULAR
Información **conocida por la población local**, pero no por forasteros.

**Sintaxis**: `<!-- 📖 (SCOPE) --> ... /📖`

**Scope**:
- `(Dársena)` - Región
- `(Túberías)` - Subregión
- `(Iglesia (Exorcistas))` - Facción con rama

**Cuándo usarlo**:
- Leyendas locales
- Chismes regionales
- Lo que un nativo sabe

**Ejemplo**:
```markdown
<!-- 📖 (Dársena) -->
En Dársena todos saben que las Túberías tienen luz propia,
pero nadie sabe de dónde viene.
/📖
```

---

### 🔐 SECRETO DISCIPLINARIO
Información que **requiere estudio o especialización**.

**Sintaxis**: `<!-- 🔐 (SCOPE) --> ... /🔐`

**Scope**:
- `(Arquitectura)` - Disciplina
- `(Ingeniería)` - Oficio
- `(Guardianes)` - Facción
- `(Arquitectura, Ingeniería)` - Múltiples

**Cuándo usarlo**:
- Detalles técnicos
- Información académica
- Secretos de profesiones
- Información tras otro secreto

**Ejemplo**:
```markdown
<!-- 🔐 (Arquitectura) -->
Los cimientos de la Nueva Basílica contienen sistemas de disipación sísmica
pre-Colapso cuyo funcionamiento los arquitectos modernos desconocen.
/🔐
```

---

### 🔐☠️ SECRETO MORTAL
Información que **contradiría los pilares** de una facción/ubicación si se revelara.

**Sintaxis**: `<!-- 🔐☠️ (SCOPE) --> ... /🔐☠️`

**Scope**:
- `(SIA)` - Facción
- `(Iglesia)` - Institución
- `(Fuerzas Armadas)` - Poder
- `(SIA, Iglesia)` - Múltiples

**Cuándo usarlo**:
- Secretos que perseguirían hasta la muerte
- Tecnología prohibida en uso
- Conspiración activa
- Infiltración/traición
- Verdades que destruirían credibilidad

**Ejemplo**:
```markdown
<!-- 🔐☠️ (SIA) -->
Los Arpistas operan actualmente en Túberías bajo Dársena con computadores
pre-Anatema funcionales. Si la SIA lo descubriera, Monseñor Miguel ordenaría
ejecuciones inmediatas.
/🔐☠️
```

---

### Sin marca = PÚBLICO
Información accesible sin restricción. **No lleva marcador**.

---

## Reglas Importantes

### Regla 1: Bloques Separados
Secretos son bloques completos, NUNCA dentro de párrafos.

✅ **CORRECTO**:
```markdown
Párrafo público.

<!-- 🔐 (Ingeniería) -->
Información técnica secreta.
/🔐
```

❌ **INCORRECTO**:
```markdown
Párrafo con <!-- 🔐 (Ingeniería) -->secreto inline/🔐 dentro.
```

---

### Regla 2: Preferiblemente al Final
Se prefiere que los secretos estén **al final del documento, ordenados por nivel**.

**Orden**: PÚBLICO → SABER_POPULAR → SECRETO_DISCIPLINARIO → SECRETO_MORTAL

**Excepciones permitidas**:
- En historias/relatos (pueden ir intercalados narrativamente)
- En cronología: Casi NUNCA usar

---

### Regla 3: Scope Siempre Obligatorio
Scope va entre **paréntesis**, SIEMPRE:

✅ `(SIA)`, `(Dársena)`, `(Arquitectura)`, `(SIA, Iglesia)`

❌ `()`, `[SIA]`, `SIA`

---

### Regla 4: Cierre con Barra
Cierre siempre con **barra + icono**, SIN comentario HTML:

✅ `/📖`, `/🔐`, `/🔐☠️`

❌ `<!-- 📖 -->`, `<!-- /📖 -->`, `[fin]`

---

## Ejemplos Completos

### Ejemplo 1: Historia con Secretos Intercalados

```markdown
# El Encuentro en las Túberías

Damián bajó por los escalones oxidados. La oscuridad era casi total.

El contacto anónimo esperaba en la esquina.

<!-- 🔐☠️ (SIA) -->
El contacto era un agente infiltrado de la SIA, fingiendo desertor.
Damián no lo sabía. No podía saberlo.
/🔐☠️

<!-- 📖 (Túberías) -->
En Túberías, las traiciones se pagan rápido, sin registro.
/📖
```

### Ejemplo 2: Documento con Secretos al Final

```markdown
# Facción: Arpistas

Los Arpistas son una red internacional de preservadores de tecnología
pre-Anatema.

(párrafos públicos sobre origen, objetivos, estructura...)

<!-- 🔐☠️ (SIA) -->
Operan actualmente en Túberías bajo Dársena. Mantienen computadores
completamente funcionales. SIA los busca para ejecución inmediata.
/🔐☠️

<!-- 🔐 (Acceso previo: Arpistas) -->
Contacto local: Dr. Francisco de la Cruz. Sede: Barrio Norte.
/🔐

<!-- 📖 (Dársena) -->
"Los Guardadores" - todos saben que existen, pero no su alcance.
/📖
```

### Ejemplo 3: Cronología (sin secretos)

```markdown
# Timeline 2048-2061

En 2048 emergen las primeras QIAs. Gobierno algorítmico 13 años.

En 2061, rebelión global. Se destruyen QIAs. Iglesia promulga Anatema Mecánico.
```

*Nota: La cronología es factual. Casi NUNCA lleva secretos.*

---

## Guía de Decisión Rápida

**¿Debería marcar esta información?**

```
¿La SIA perseguiría activamente?
  → Sí: 🔐☠️ SECRETO MORTAL (SIA)
  → No: ¿Siguiente?

¿Requiere especialización para entender?
  → Sí: 🔐 SECRETO DISCIPLINARIO (Disciplina)
  → No: ¿Siguiente?

¿Lo sabe la población local pero no forasteros?
  → Sí: 📖 SABER POPULAR (Región)
  → No: PÚBLICO (sin marca)
```

---

## Errores Comunes

### ❌ Error 1: Secreto inline
```markdown
El doctor dijo <!-- 🔐 (Medicina) -->secretamente/🔐 que...
```
**Corrección**: Hacer bloque separado

---

### ❌ Error 2: Scope vacío
```markdown
<!-- 🔐 () -->
/🔐
```
**Corrección**: Agregar scope: `<!-- 🔐 (Arquitectura) -->`

---

### ❌ Error 3: Cierre incorrecto
```markdown
<!-- 🔐 (SIA) -->
Contenido...
<!-- 🔐 -->  ← INCORRECTO
```
**Corrección**: Usar `/🔐` en lugar de `<!-- 🔐 -->`

---

### ❌ Error 4: Scope que no existe
```markdown
<!-- 🔐☠️ (FaccionFantasma) -->
```
**Corrección**: Usar facción que existe: `(SIA)`, `(Arpistas)`, etc.

---

### ❌ Error 5: Nidamiento
```markdown
<!-- 🔐☠️ (SIA) -->
Contenido...
  <!-- 🔐 (Arquitectura) -->
  ← PROHIBIDO
  /🔐
/🔐☠️
```
**Corrección**: Separar en bloques secuenciales

---

## Preguntas Frecuentes

### ¿Puedo cambiar PERMISOS después de crear?
**Sí**, pero valida después: `/validate-permissions`

### ¿Qué si me equivoco en un scope?
El sistema te lo dirá. Simplemente edita y valida de nuevo.

### ¿Los PERMISOS son permanentes?
**No**. El sistema está diseñado para futuro filtrado web. Ahora es orientación.

### ¿Puedo mezclar markdown dentro?
**Sí**, cualquier markdown válido funciona dentro de bloques.

### ¿Múltiples scopes?
```markdown
<!-- 🔐☠️ (SIA, Iglesia) -->
```

### ¿Con ramas de facciones?
```markdown
<!-- 🔐 (Iglesia (Exorcistas)) -->
```

---

## Próximos Pasos

1. Lee **PERMISOS_SPEC.md** si necesitas detalles técnicos
2. Usa `/mark-permissions` para marcar nuevo contenido
3. Usa `/validate-permissions` para revisar existente
4. Pregunta al skill si tienes dudas

---

**¿Preguntas?** El skill `permission-system` está disponible.
