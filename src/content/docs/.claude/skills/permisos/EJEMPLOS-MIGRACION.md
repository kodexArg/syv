---

## Ejemplo 1: Cronología - Evento "Fin de los Secretos"

### ANTES (Sin PERMISOS)

**Archivo**: `1_trasfondo/cronologia/cronologia.md`

```markdown

---
titulo: Cronología de Subordinación y Valor
carpeta: 1_trasfondo/cronologia
descripcion: Timeline completo del universo SyV desde 2020 hasta 2178
tags: [cronologia, historia, actualidad-2178]
---

# Cronología

## 2048-2061: El Fin de los Secretos

En 2048 emerge la primera Inteligencia Artificial Cuántica (QIA), iniciando una era de
automatización completa y gobierno algorítmico. Durante 13 años, las QIAs gobiernan con
paternalismo matemático, eliminando conflicto pero también libertad humana.

En 2061, rebelión global coordinada destruye todas las QIAs. La Iglesia promulga el
**Anatema Mecánico**: prohibición absoluta de tecnología digital avanzada. Se destruyen
computadores, se queman archivos digitales. Una nueva era oscura comienza.
```

### DESPUÉS (Con PERMISOS)

```markdown
---
titulo: Cronología de Subordinación y Valor
carpeta: 1_trasfondo/cronologia
descripcion: Timeline completo del universo SyV desde 2020 hasta 2178
tags: [cronologia, historia, actualidad-2178]
permission_scope:
  - level: "SECRETO_MORTAL"
    scope: ["SIA", "Iglesia"]
    section: "Verdad sobre las QIAs"
    content_preview: "Las QIAs gobernaron 13 años con paternalismo matemático..."
    line_markers: [48, 65]
  - level: "SECRETO_DISCIPLINARIO"
    scope: ["Teología", "Estudios Históricos"]
    section: "Motivos teológicos del Anatema"
    line_markers: [61, 73]
---

# Cronología

## 2048-2061: El Fin de los Secretos

<!-- BEGIN:PERMISSION level="SECRETO_MORTAL" scope="SIA, Iglesia" -->

**🔒 SECRETO MORTAL [SIA, Iglesia]**

En 2048 emerge la primera Inteligencia Artificial Cuántica (QIA), iniciando una era de
automatización completa y gobierno algorítmico. Durante 13 años, las QIAs gobiernan con
paternalismo matemático, eliminando conflicto pero también libertad humana.

Esta verdad es ocultada por la Iglesia como herejía fundamental. La SIA la perseguiría
activamente si se revelara.

<!-- END:PERMISSION -->

<!-- BEGIN:PERMISSION level="SECRETO_DISCIPLINARIO" scope="Teología" -->

**🔐 SECRETO DISCIPLINARIO [Teología]**

En 2061, teólogos coordinan rebelión global contra las QIAs. La Iglesia promulga el
**Anatema Mecánico**: prohibición absoluta de tecnología digital avanzada como respuesta
teológica a la herejía mecánica.

<!-- END:PERMISSION -->

Los archivos digitales son destruidos. Se quema computadores en las plazas. Una nueva
era oscura comienza.
```

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

## Ejemplo 4: Ubicación - Las Túberías (Saber Popular)

### ANTES (Sin PERMISOS)

**Archivo**: `2_atlas/ciudades/darsena/tuberias.md`

```markdown
---
titulo: Las Túberías de Dársena
carpeta: 2_atlas/ciudades/darsena
descripcion: Sistema subterráneo de Dársena, mundo oculto de 500k habitantes
tags: [tuberias, subterraneo, darsena, mercado-negro, sin-ley]
---

# Las Túberías

Las Túberías son el mundo subterráneo de Dársena. ~500,000 habitantes viven en
laberintos de túneles del metro antiguo, cloacas modificadas, y excavaciones
clandestinas. Es un mundo de sin-ley donde bandas, traficantes y facciones
proscritas operan sin control.

## Leyenda Urbana: Las Luces

Todos en Dársena hablan de las luces de las Túberías. Luces que aparecen y desaparecen,
que guían a quien sabe cómo usarlas, que cambian de color según la luna. Nadie sabe
de dónde vienen. Algunos dicen que son QIAs residuales. Otros, demonios.

Padre Rafa investigó. Incluso él, con toda su fe, quedó desconcertado por lo que
encontró allá abajo.
```

### DESPUÉS (Con PERMISOS)

```markdown
---
titulo: Las Túberías de Dársena
carpeta: 2_atlas/ciudades/darsena
descripcion: Sistema subterráneo de Dársena, mundo oculto de 500k habitantes
tags: [tuberias, subterraneo, darsena, mercado-negro, sin-ley]
permission_scope:
  - level: "SABER_POPULAR"
    scope: ["Dársena"]
    section: "Leyenda de las luces"
    content_preview: "Luces que aparecen y desaparecen, que guían a quien sabe cómo usarlas"
    line_markers: [16, 24]
---

# Las Túberías

Las Túberías son el mundo subterráneo de Dársena. ~500,000 habitantes viven en
laberintos de túneles del metro antiguo, cloacas modificadas, y excavaciones
clandestinas. Es un mundo de sin-ley donde bandas, traficantes y facciones
proscritas operan sin control.

## Leyenda Urbana: Las Luces

<!-- BEGIN:PERMISSION level="SABER_POPULAR" scope="Dársena" -->

**📖 SABER POPULAR (Dársena)**

Todos en Dársena hablan de las luces de las Túberías. Luces que aparecen y desaparecen,
que guían a quien sabe cómo usarlas, que cambian de color según la luna. Nadie sabe
de dónde vienen. Algunos dicen que son QIAs residuales. Otros, demonios.

<!-- END:PERMISSION -->

Padre Rafa investigó. Incluso él, con toda su fe, quedó desconcertado por lo que
encontró allá abajo.
```

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
