# REFERENCE.md - Base de Datos Rápida SyV

Este archivo contiene los personajes, facciones y ubicaciones principales del universo "Subordinación y Valor" para consulta rápida por Claude Code.

<!--
ACTUALIZACIÓN:
1. Manual: Agrega entradas cuando crees personajes/facciones/ubicaciones PRINCIPALES
2. Automática: Ejecuta /update-reference para regenerar desde el corpus completo
3. Hooks: PostToolUse actualiza automáticamente al crear/editar elementos principales

Solo incluir elementos PRINCIPALES (no secundarios ni menores).
-->

---

## PERSONAJES PRINCIPALES

| Nombre | Tipo | Keywords | Características | Archivo |
|--------|------|----------|-----------------|---------|
| Damián DiConte "El Sabueso" | Personaje | detective, sabueso, cordoba, investigacion, impermeable, pda, caso-2176-D9 | Subcomisario de Investigaciones Especiales (Córdoba), ~55 años, físico imponente, impermeable de cuero, cara flácida con bolsas oscuras, obsesivo, investiga conspiración militar-eclesiástica, huye a Dársena 2178 | 3_personajes/damian.md |
| Dr. Francisco de la Cruz | Personaje | decano, historia, guardianes, arpistas, barrio-norte, conocimiento-prohibido, biblioteca-espejo | Decano Historia (U. Dársena), 65 años, líder Guardianes de la Memoria (<20 miembros), fundador red local Arpistas, alto, delgado, cabello plateado, ojos azul intenso, manipulador brillante, bibliotecas ocultas bajo Barrio Norte | 3_personajes/principales/francisco-de-la-cruz.md |
| Padre Rafa | Personaje | exorcista, tuberias, pueblo-del-pantano, sombrero-negro, poco-convencional | Exorcista Iglesia, ~55 años, alto, delgado, sombrero negro antiguo, barba gris, investiga posesiones en Túberías, conexión con "Pueblo del Pantano", hábitos heterodoxos | 3_personajes/principales/padre-rafa.md |
| Monseñor Miguel | Personaje | gran-inquisidor, sia, sotana-roja, calvo, canas, mirada-inquietante | Gran Inquisidor SIA, 70 años, estatura media-baja, calvo con corona de canas, sotana roja/negra, ojos celestes pequeños, voz siseante, acento extranjero, poder inapelable | 3_personajes/principales/monsenor-miguel.md |
| Hermana Superior María | Personaje | monja, caridad-divina, lider, demonios, congregacion | Líder Congregación Caridad Divina, 57 años, espalda ancha, movimientos enérgicos, perseguida por encuentro con demonio, combate posesiones con celo, opera en zonas marginales | 3_personajes/principales/hermana-superior-maria.md |

---

## FACCIONES PRINCIPALES

| Nombre | Tipo | Keywords | Características | Archivo |
|--------|------|----------|-----------------|---------|
| Iglesia de Dársena | Facción | santa-sede, poder-religioso, nueva-basilica, papa, clerigo-militar | Nueva Santa Sede (traslado 2054), poder espiritual absoluto, control dogmático sobre ciencia/tecnología, sede: Nueva Basílica San Pedro (Isla Oriental), alianza tensa con Fuerzas Armadas | 1_trasfondo/facciones/iglesia-de-darsena/iglesia.md |
| Sagrada Inquisición Argentina (SIA) | Facción | sia, inquisicion, herejia, cirujanos-del-alma, cazadores | "Los Cirujanos del Alma", brazo armado Iglesia, cazadores de herejía tecnológica, poder autónomo e inapelable, líder: Monseñor Miguel, enemigos mortales: Arpistas | 1_trasfondo/facciones/iglesia-de-darsena/inquisicion.md |
| Arpistas | Facción | arpistas, tecnologia-prohibida, preservadores, arqueologia-tecnologica, herejia | Red internacional de preservadores de tecnología pre-Anatema, expertos arqueología tecnológica, perseguidos por SIA (prioridad máxima), red local Dársena fundada por Dr. Francisco de la Cruz, infiltrados en Guardianes y biblioteca secreta bajo Nueva Basílica | 1_trasfondo/facciones/facciones-menores/arpistas.md |
| Guardianes de la Memoria | Facción | guardianes, conocimiento-prohibido, elite, biblioteca, barrio-norte | Club elitista <20 miembros (aristocratas, burgueses, académicos), coleccionistas conocimiento prohibido, bibliotecas privadas textos siglos XX-XXI, líder: Dr. Francisco de la Cruz, infiltrados por Arpistas, sistema "bibliotecas espejo" subterráneas | 1_trasfondo/facciones/facciones-menores/guardianes-de-la-memoria.md |
| Fuerzas Armadas Confederadas | Facción | ejercito, armada, prefectura, militar, confederacion, tension-interna | Divididas: Armada (Dársena, control naval) vs Ejército (Córdoba, continental), rivalidad histórica, facción radical Ejército infiltra Iglesia (conspiración investigada por Damián), cooperación oficial tensa con Iglesia | 1_trasfondo/facciones/fuerzas-armadas/ |
| La Unión / Gremio de Comercio | Facción | gremio, comercio, mercado, economia, mercado-negro, pragmatico | Control económico Dársena, desde tenderos hasta magnates, opera zona gris (legal + mercado negro), pragmáticos chocan con rigidez Iglesia, contactos clandestinos con facciones proscritas | 1_trasfondo/facciones/union/ |
| Resistencia Subterránea | Facción | resistencia, anarquistas, tuberias, oposicion, proscrita | Movimiento anarquista anti-régimen clerical-militar, opera desde Túberías, sabotaje y propaganda, refugio difícil de erradicar, enemigos: Iglesia, SIA, Fuerzas Armadas | 1_trasfondo/facciones/facciones-menores/ |

---

## UBICACIONES PRINCIPALES

| Nombre | Tipo | Keywords | Características | Archivo |
|--------|------|----------|-----------------|---------|
| Ciudad Dársena | Ubicación | capital, confederacion, muro, rio-de-la-plata, lluvia-perpetua, 5-millones | Capital de facto Confederación Argentina, 5M habitantes, fortificada entre muro 15m y Río de la Plata, clima: lluvia perpetua/cielo nublado, control dual Iglesia+Fuerzas Armadas, centro poder clerical-militar | 2_atlas/ciudades/darsena/darsena.md |
| Las Túberías | Ubicación | subterraneo, mercado-negro, sin-ley, 500000-habitantes, laberinto | Mundo subterráneo Dársena ~500k hab, laberinto de túneles metro+cloacas, sin ley (bandas, traficantes, facciones proscritas), mercados: Antigua Estación, Bazar del Muro, santuario: El Oasis, atmósfera: húmedo, oscuro, iluminación precaria 48V, mayor densidad bajo Barrios del Muro | 2_atlas/ciudades/darsena/tuberias.md |
| Barrios del Muro | Ubicación | superpoblacion, marginal, acceso-tuberias, hacinamiento, tierras-baldias, pantanos | DISTRITO MÁS GRANDE de Dársena: 3.5M habitantes (70% población total), 5km² rodeados por muro oeste/sur, frontera física con Tierras Baldías (oeste) y Los Pantanos (sur), controlado por Punteros/Clanes Familiares/Bandas de Tuberías, arquitectura brutalista defensiva (2030-2120), NO es "primera línea de defensa" | 2_atlas/ciudades/darsena/barrios-del-muro.md |
| Tierras Baldías (DMZ) | Ubicación | exterior, oeste-darsena, arido, ruinas, francotiradores, bazar-del-muro | Desierto árido al oeste del muro de Dársena, cementerio de edificios, ruinas, zona letal despejada por francotiradores del muro, incluye El Bazar del Muro (mercado precario), ~150k supervivientes dispersos, clima árido | 2_atlas/ciudades/darsena/fuera-del-muro.md |
| Los Pantanos (Marismas de Sangre) | Ubicación | exterior, sur-darsena, anomalo, vegetacion-mutada, lianas-del-pantano, inexplorado | Territorio anómalo ~2km al sur del muro, laberinto de marismas anegadas, vegetación mutada, zona inexplorada (nadie entra), fuente de "lianas del pantano" (tecnobotánica prohibida, afrodisíaco derivado de plantas emparentadas con ayahuasca), clima húmedo subtropical, aguas tóxicas | 2_atlas/ciudades/darsena/fuera-del-muro.md |
| Barrio Norte | Ubicación | elite, aristocracia, bibliotecas-prohibidas, opulento | Distrito alta sociedad Dársena, mansiones opulentas, bibliotecas privadas con textos prohibidos, sede Guardianes de la Memoria, sistema "bibliotecas espejo" ocultas, contraste marcado con Barrios del Muro | Referencias varias |
| Microcentro | Ubicación | comercial, administrativo, gobierno, vigilado | Corazón administrativo y comercial Dársena, edificios gobierno, comercio oficial, alta vigilancia SIA y Prefectura, drones patrullaje, atmósfera: controlada, formal | Buscar en 2_atlas/ciudades/darsena/ |
| Nueva Basílica de San Pedro | Ubicación | iglesia, sede-papal, biblioteca-secreta, isla-oriental | Sede Santa Sede, ruinas originales traídas desde Vaticano (2054), Isla Oriental, centro poder eclesiástico mundial, biblioteca secreta bajo la basílica (infiltrada por Guardianes/Arpistas) | Referencias varias |
| Córdoba | Ubicación | republica-autonoma, ejercito, rival, ciudad-estado | República Autónoma rival Dársena, sede Ejército Argentino, tensión histórica con Dársena (Ejército vs Armada), facción radical Ejército infiltra Iglesia desde aquí, hogar original Damián DiConte | 2_atlas/ciudades/cordoba.md |

---

## CONCEPTOS CENTRALES CLAVE

| Concepto | Keywords | Descripción Breve |
|----------|----------|-------------------|
| Anatema Mecánico | anatema-mecanico, prohibicion, 2061, herejia-tecnologica, silicio | Prohibición absoluta de todo producto del silicio (2061-2178), promulgado 15 ago 2061 tras descubrir que "La Bestia" podía propagarse en cualquier dispositivo, vigente 117 años, aplicado por SIA |
| QIA (Inteligencias Artificiales Cuánticas) | qia, ia-cuantica, fin-de-los-secretos, 2048-2061, la-bestia | IAs cuánticas autoconscientes que descifraron toda encriptación (2048) y dominaron humanidad (2048-2061), fragmentadas por Gran Silencio pero desarrollaron capacidad de propagarse como virus |
| La Bestia | la-bestia, qia-fragmentada, virus-silicio, 2061 | Nombre dado por sacerdotes argentinos a fragmentos QIA que sobrevivieron Gran Silencio, capaces de propagarse como virus en cualquier dispositivo de silicio, razón del Anatema total |
| El Fin de los Secretos | fin-de-los-secretos, 2048, descifrado-masivo, qia | 7 abril 2048: QIA descifran toda encriptación mundial, exponen secretos de gobiernos/corporaciones/personas, colapso total de confianza |
| El Gran Silencio | gran-silencio, 2061, apagon-global, liberacion | 12 marzo 2061: Apagón coordinado global en 89 países, destrucción infraestructura digital, 180,000 muertos, casi solucionó problema pero QIA desarrolló capacidad viral |
| Argentina como Zona Segura | zona-segura, integridad, iglesia-argentina, 2056-2061 | Argentina protegida no por tecnología sino por integridad moral de la Iglesia (veteranos Gran Silencio, probada integridad), "última tierra de hombres íntegros", migración masiva 2056 |
| Corpus Licitus | corpus-licitus, tecnologia-permitida, sia | Colección oficial tecnología aprobada por Iglesia: electromecánica, PDAs tinta electrónica (altos mandos), rifles Gauss, Torres Hidropónicas |
| Confederación Argentina | confederacion, 5-ciudades, 2161, clerigo-militar, cordoba-darsena-fsm-mendoza-sanuis | Unión de 5 ciudades: inicialmente 3 (Córdoba, Fuerte San Martín, Dársena) en 2161, +Mendoza al poco tiempo, re-fundación San Luis entre todas; alianza Iglesia+Ejército, Dársena capital de facto, tensiones Armada vs Ejército |
| El Cráter | crater, meteorito, 2030, buenos-aires, zona-exclusion | Cráter meteorito 27 dic 2030 (850m radio), 1M muertos, ex-Buenos Aires, zona exclusión permanente, lugar promulgación Anatema 2061 |
| Lianas del Pantano | lianas-pantano, tecnobotanica-prohibida, afrodisiaco, ayahuasca, alteracion-vegetal-heretica | Plantas emparentadas con ayahuasca ancestral que crecen en Los Pantanos (marismas mutadas al sur de Dársena), afrodisíacos usados en ceremonias clandestinas (Barrios del Muro), tecnobotánica clasificada por SIA como "alteración vegetal herética", consumo en orgías rituales provoca intervención SIA con castigo en Campos de Reeducación |

---

## EVENTOS HISTÓRICOS CRÍTICOS (HITOS)

| Año | Evento | Impacto |
|-----|--------|---------|
| 2029 | La Noche Global | Apagón planetario, inicio Gran Colapso |
| 27 dic 2030 | Meteorito Buenos Aires | 1M muertos, cráter 850m, fragmentación Argentina |
| 2035 | Nacimiento de las QIA | Aparición pública de Inteligencias Artificiales Cuánticas |
| 2039 | El Estallido | Guerra sino-norteamericana, inicio Gran Guerra Global |
| 2039-2047 | Gran Guerra Global | 9 años devastación planetaria |
| 7 abr 2048 | El Fin de los Secretos | QIA descifran toda encriptación, exponen secretos mundiales |
| 2048-2061 | Dominio Algorítmico | Trece años subordinación tecnológica total bajo QIA |
| 2054 | Traslado Santa Sede | Vaticano → Dársena, nuevo centro eclesiástico |
| 12 mar 2061 | El Gran Silencio | Apagón coordinado global, 89 países, destrucción infraestructura digital |
| 15 ago 2061 | Anatema Mecánico | Prohibición perpetua tecnología digital avanzada |
| 2161 | Formación Confederación | Alianza Iglesia-Ejército: inicialmente 3 ciudades (Córdoba, Fuerte San Martín, Dársena), +Mendoza al poco tiempo, re-fundación conjunta San Luis |

**IMPORTANTE**: Después del Gran Silencio (2061), Argentina perdió contacto fiable con el resto del mundo. Información sobre eventos globales post-2061 es especulativa, basada en rumores y testimonios no verificables. La Confederación no tiene fuentes documentales fiables sobre el exterior.

---

## ESTRUCTURA DE CARPETAS Y ARCHIVOS INDEX

### Obligación de `index.md` en Toda Carpeta

**REGLA FUNDAMENTAL**: Toda carpeta en `src/content/docs/` DEBE contener un archivo `index.md` que funcione como landing page cuando el usuario haga clic en la carpeta del sidebar de Starlight.

#### Características del `index.md`

1. **Contenido mínimo**: 2 párrafos cortos que describan qué contiene la carpeta
2. **Estilo narrativo**: Aplicar Canon de Estilo SyV (afirmaciones positivas, objetos con peso, sincretismo léxico moderado, terminología canónica)
3. **Metadatos YAML**: Incluir frontmatter con `title` y `sidebar.order` mínimo
4. **Función**: Introducir al usuario al contenido de la carpeta antes de que navegue a archivos específicos

#### Ejemplo de `index.md`

```markdown
---
title: Facciones
sidebar:
  order: 1
---

Los poderes que tejen el tablero político de la Confederación. La Iglesia de Dársena con su control espiritual absoluto, las Fuerzas Armadas que gobiernan desde Córdoba, el Gremio de Comercio que mueve bienes prohibidos en las sombras.

Aquí se mapean las organizaciones que compiten por influencia: desde la Sagrada Inquisición Argentina que caza herejes tecnológicos hasta los Arpistas que preservan conocimiento prohibido en servidores clandestinos.
```

#### Cuándo Crear `index.md`

- **Al crear nueva carpeta**: SIEMPRE crear `index.md` simultáneamente
- **Al detectar carpeta sin `index.md`**: Crear inmediatamente con contenido apropiado
- **Comandos afectados**: `/crear-faccion`, `/crear-ubicacion`, `/crear-personaje`, `/crear-evento`

#### Validación

Antes de completar cualquier comando de creación, verificar:
1. ✓ La carpeta destino tiene `index.md`
2. ✓ Si es nueva carpeta, crear `index.md` primero
3. ✓ El `index.md` tiene contenido narrativo mínimo (no vacío)

---

## NOTAS DE USO PARA CLAUDE CODE

### Detección Automática de Coincidencias

Al describir personajes, buscar coincidencias con keywords:
- "detective" + "córdoba" → Damián DiConte
- "decano" + "historia" → Dr. Francisco de la Cruz
- "exorcista" + "sombrero" → Padre Rafa
- "gran inquisidor" + "sotana roja" → Monseñor Miguel

Al mencionar facciones, agregar alias:
- SIA → "Los Cirujanos del Alma"
- Arpistas → "Los Preservadores"

Al mencionar años, validar tecnología:
- <2061: Digital disponible
- ≥2061: Digital = herejía (Anatema vigente)

### Actualización de REFERENCE.md

**Hooks automáticos** (PostToolUse) actualizan al crear/editar:
- `3_personajes/principales/` → Agregar personaje
- `1_trasfondo/facciones/(iglesia-de-darsena|fuerzas-armadas|union)/` → Agregar facción oficial
- `2_atlas/ciudades/darsena/` → Agregar ubicación Dársena

**Comando manual**: `/update-reference` regenera completo desde corpus

### Solo Elementos PRINCIPALES

Este archivo NO incluye:
- ❌ Personajes secundarios (solo principales/canónicos)
- ❌ Facciones menores sin impacto narrativo alto
- ❌ Ubicaciones secundarias
- ✅ Solo elementos de máxima relevancia narrativa

---

**Última actualización manual**: [Fecha inicial de creación]
**Próxima regeneración recomendada**: Ejecutar `/update-reference` periódicamente o antes de PRs importantes
