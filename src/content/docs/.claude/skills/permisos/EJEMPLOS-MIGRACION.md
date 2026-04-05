---

## Ejemplo 1: Cronología (Resumen)

**Archivo**: `1_trasfondo/cronologia/cronologia.md`
**Cambio principal**: Eventos históricos sobre las QIAs y el Anatema Mecánico marcados como secretos de facción
**Resultado**: 2 bloques PERMISOS añadidos (🔐☠️ SIA+Iglesia, 🔐 Teología)

---

## Ejemplo 2: Facción - SIA (Sagrada Inquisición Argentina)

### ANTES (Sin PERMISOS)

**Archivo**: `1_trasfondo/facciones/iglesia-de-darsena/inquisicion.md`

```markdown
---
titulo: Sagrada Inquisición Argentina (SIA)
carpeta: 1_trasfondo/facciones/iglesia-de-darsena
descripcion: Brazo armado de la Iglesia, cazadores de herejía tecnológica
tags: [sia, inquisicion, iglesia, poder, herejia-mecanica]
facciones:
  - "Iglesia de Dársena"
---

# Sagrada Inquisición Argentina (SIA)

Conocida como "Los Cirujanos del Alma", la SIA es el brazo armado de la Iglesia.
Fundada tras el Anatema Mecánico (2061), su misión es perseguir toda tecnología
digital prohibida y ejecutar herejía.

## Operaciones Encubiertas

La SIA ha logrado infiltrar estructuras militares clave, especialmente la Prefectura
Naval. Monseñor Miguel mantiene agentes en posiciones estratégicas para monitorear
movimientos que puedan amenazar la Iglesia. Estos agentes reportan regularmente a
comisiones secretas.

## Métodos de Ejecución

La SIA ejecuta a través de juicios secretos en sótanos. Víctimas desaparecen sin
registro. El Corpus Licitus se mantiene como justificación legal, pero nadie sabe
qué autoridades aprueban realmente cada ejecución.
```

### DESPUÉS (Con PERMISOS)

```markdown
---
titulo: Sagrada Inquisición Argentina (SIA)
carpeta: 1_trasfondo/facciones/iglesia-de-darsena
descripcion: Brazo armado de la Iglesia, cazadores de herejía tecnológica
tags: [sia, inquisicion, iglesia, poder, herejia-mecanica]
facciones:
  - "Iglesia de Dársena"
permission_scope:
  - level: "SECRETO_MORTAL"
    scope: ["Fuerzas Armadas"]
    section: "Infiltración en Prefectura Naval"
    content_preview: "La SIA ha infiltrado estructuras militares clave..."
    line_markers: [28, 38]
  - level: "SECRETO_MORTAL"
    scope: ["Iglesia"]
    section: "Verdad sobre autoridades de ejecución"
    content_preview: "Nadie sabe qué autoridades aprueban realmente cada ejecución..."
    line_markers: [48, 54]
---

# Sagrada Inquisición Argentina (SIA)

Conocida como "Los Cirujanos del Alma", la SIA es el brazo armado de la Iglesia.
Fundada tras el Anatema Mecánico (2061), su misión es perseguir toda tecnología
digital prohibida y ejecutar herejía.

## Operaciones Encubiertas

<!-- BEGIN:PERMISSION level="SECRETO_MORTAL" scope="Fuerzas Armadas" -->

**🔒 SECRETO MORTAL [Fuerzas Armadas]**

La SIA ha logrado infiltrar estructuras militares clave, especialmente la Prefectura
Naval. Monseñor Miguel mantiene agentes en posiciones estratégicas para monitorear
movimientos que puedan amenazar la Iglesia. Estos agentes reportan regularmente a
comisiones secretas.

<!-- END:PERMISSION -->

## Métodos de Ejecución

La SIA ejecuta a través de juicios secretos en sótanos. Víctimas desaparecen sin
registro. El Corpus Licitus se mantiene como justificación legal.

<!-- BEGIN:PERMISSION level="SECRETO_MORTAL" scope="Iglesia" -->

**🔒 SECRETO MORTAL [Iglesia]**

Pero nadie sabe qué autoridades aprueban realmente cada ejecución. Existe un círculo
secreto dentro de la SIA que decide los destinos sin registro.

<!-- END:PERMISSION -->
```

---

## Ejemplo 3: Personaje - Dr. Francisco de la Cruz

### ANTES (Sin PERMISOS)

**Archivo**: `3_personajes/principales/francisco-de-la-cruz.md`

```markdown
---
titulo: Dr. Francisco de la Cruz
carpeta: 3_personajes/principales
descripcion: Decano de Historia, líder de Guardianes de la Memoria y fundador de Arpistas locales
tags: [francisco-de-la-cruz, decano, guardianes, arpistas, barrio-norte]
facciones:
  - "Guardianes de la Memoria"
  - "Arpistas"
---

# Dr. Francisco de la Cruz

## Biografía

Francisco de la Cruz, 65 años, Decano de Historia en la Universidad Católica de Dársena.
Físico distinguido: alto, delgado, cabello plateado. Ojos azul intenso que analizan cada
detalle. Manipulador brillante que mueve piezas en la sombra.

Publicamente respetado, privately es arquitecto de una conspiración continental.

## El Secreto: Fundador de Arpistas

En secreto, Francisco fundó la célula local de Arpistas en 2155. Durante 20+ años ha
preservado tecnología pre-Anatema en bóvedas bajo el Barrio Norte. Computadores
completos, archivos digitales, libros prohibidos de la era QIA.

Bajo la Nueva Basílica, mantiene "bibliotecas espejo" - réplicas de la colección
vaticana, escondidas en sótanos. Miembros de Guardianes son en realidad Arpistas
infiltrados, proporcionando fondos y acceso a colecciones privadas.

Si la SIA descubriera esto, Francisco sería ejecutado en 24 horas.
```

### DESPUÉS (Con PERMISOS)

```markdown
---
titulo: Dr. Francisco de la Cruz
carpeta: 3_personajes/principales
descripcion: Decano de Historia, líder de Guardianes de la Memoria
tags: [francisco-de-la-cruz, decano, guardianes, barrio-norte]
facciones:
  - "Guardianes de la Memoria"
  - "Arpistas"
permission_scope:
  - level: "SECRETO_MORTAL"
    scope: ["SIA"]
    section: "Actividades como Arpista"
    content_preview: "Francisco fundó la célula local de Arpistas, preservando tecnología pre-Anatema"
    line_markers: [25, 42]
  - level: "SECRETO_DISCIPLINARIO"
    scope: ["Acceso previo: Arpistas"]
    section: "Ubicación de bibliotecas espejo"
    content_preview: "Bajo la Nueva Basílica, mantiene réplicas de colecciones vaticanas"
    line_markers: [43, 50]
---

# Dr. Francisco de la Cruz

## Biografía

Francisco de la Cruz, 65 años, Decano de Historia en la Universidad Católica de Dársena.
Físico distinguido: alto, delgado, cabello plateado. Ojos azul intenso que analizan cada
detalle. Manipulador brillante que mueve piezas en la sombra.

Publicamente respetado, privately es arquitecto de una conspiración continental.

## El Secreto: Liderazgo de Guardianes

Como líder de los Guardianes de la Memoria, Francisco coordina coleccionistas de
conocimiento prohibido en todo Dársena.

<!-- BEGIN:PERMISSION level="SECRETO_MORTAL" scope="SIA" -->

**🔒 SECRETO MORTAL [SIA]**

En secreto, Francisco fundó la célula local de Arpistas en 2155. Durante 20+ años ha
preservado tecnología pre-Anatema en bóvedas bajo el Barrio Norte. Computadores
completos, archivos digitales, libros prohibidos de la era QIA.

Si la SIA descubriera esto, Francisco sería ejecutado en 24 horas.

<!-- END:PERMISSION -->

<!-- BEGIN:PERMISSION level="SECRETO_DISCIPLINARIO" scope="Acceso previo: Arpistas" -->

**🔐 SECRETO DISCIPLINARIO [Acceso previo: Arpistas]**

Bajo la Nueva Basílica, mantiene "bibliotecas espejo" - réplicas de la colección
vaticana, escondidas en sótanos. Miembros de Guardianes son en realidad Arpistas
infiltrados, proporcionando fondos y acceso a colecciones privadas.

<!-- END:PERMISSION -->
```

---

## Ejemplo 4: Ubicación (Resumen)

**Archivo**: `2_atlas/ciudades/darsena/tuberias.md`
**Cambio principal**: Leyenda urbana de las luces de las Túberías marcada como saber popular regional
**Resultado**: 1 bloque PERMISOS añadido (📖 Dársena)

---

## Resumen de Cambios Típicos

| Tipo | Ubicación | Nivel Común | Reason |
|------|-----------|-----------|---------|
| Cronología | 1_trasfondo/cronologia | SECRETO_MORTAL, SECRETO_DISCIPLINARIO | Información histórica sensible |
| Facciones | 1_trasfondo/facciones | SECRETO_MORTAL | Operaciones clandestinas |
| Personajes | 3_personajes | SECRETO_MORTAL, SECRETO_DISCIPLINARIO | Secretos y alianzas ocultas |
| Ubicaciones | 2_atlas | SABER_POPULAR, SECRETO_DISCIPLINARIO | Leyendas y detalles técnicos |
| Relatos | 4_diegesis | Variable | Según contenido del relato |

---

## Estadísticas Esperadas de Migración

Basado en análisis estimado del canon existente:

- **Documentos totales**: ~80-100
- **Candidatos a PERMISOS**: ~45-55 (50-60% del canon)
- **SECRETO_MORTAL**: ~25-30 (50-55% de candidatos)
- **SECRETO_DISCIPLINARIO**: ~15-20 (30-35% de candidatos)
- **SABER_POPULAR**: ~5-8 (10-15% de candidatos)
- **Tiempo estimado**: 2-3 horas (interactive mode)
- **Validaciones**: 100% exitosas después de migración

---

**Referencia**: PERMISOS_SPEC.md, /migrate-permissions, /validate-permissions
