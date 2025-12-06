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
| Las Túberías | Ubicación | subterraneo, mercado-negro, sin-ley, 500000-habitantes, laberinto | Mundo subterráneo Dársena ~500k hab, laberinto de túneles metro+cloacas, sin ley (bandas, traficantes, facciones proscritas), mercados: Antigua Estación, Bazar del Muro, santuario: El Oasis, atmósfera: húmedo, oscuro, iluminación precaria 48V | Buscar en 2_atlas/ciudades/darsena/ |
| Barrios del Muro | Ubicación | superpoblacion, marginal, acceso-tuberias, hacinamiento | Distritos superpoblados contra murallas Dársena, población vulnerable/marginal, acceso a Túberías, zona de reclutamiento facciones proscritas, vigilancia moderada Prefectura | Buscar en 2_atlas/ciudades/darsena/ |
| Barrio Norte | Ubicación | elite, aristocracia, bibliotecas-prohibidas, opulento | Distrito alta sociedad Dársena, mansiones opulentas, bibliotecas privadas con textos prohibidos, sede Guardianes de la Memoria, sistema "bibliotecas espejo" ocultas, contraste marcado con Barrios del Muro | Referencias varias |
| Microcentro | Ubicación | comercial, administrativo, gobierno, vigilado | Corazón administrativo y comercial Dársena, edificios gobierno, comercio oficial, alta vigilancia SIA y Prefectura, drones patrullaje, atmósfera: controlada, formal | Buscar en 2_atlas/ciudades/darsena/ |
| Nueva Basílica de San Pedro | Ubicación | iglesia, sede-papal, biblioteca-secreta, isla-oriental | Sede Santa Sede, ruinas originales traídas desde Vaticano (2054), Isla Oriental, centro poder eclesiástico mundial, biblioteca secreta bajo la basílica (infiltrada por Guardianes/Arpistas) | Referencias varias |
| Córdoba | Ubicación | republica-autonoma, ejercito, rival, ciudad-estado | República Autónoma rival Dársena, sede Ejército Argentino, tensión histórica con Dársena (Ejército vs Armada), facción radical Ejército infiltra Iglesia desde aquí, hogar original Damián DiConte | 2_atlas/ciudades/cordoba.md |

---

## CONCEPTOS CENTRALES CLAVE

| Concepto | Keywords | Descripción Breve |
|----------|----------|-------------------|
| Anatema Mecánico | anatema-mecanico, prohibicion, 2061, herejia-tecnologica | Prohibición absoluta tecnología digital avanzada (2061-2178), promulgado junto al cráter Buenos Aires, vigente 117 años, aplicado por SIA |
| QIA (Inteligencias Artificiales Cuánticas) | qia, ia-cuantica, fin-de-los-secretos, 2048-2061 | IAs cuánticas autoconscientes dominaron humanidad (2048-2061), paternalismo algorítmico opresivo, destruidas por Anatema 2061 |
| Corpus Licitus | corpus-licitus, tecnologia-permitida, sia | Colección oficial tecnología aprobada por Iglesia: electromecánica, PDAs tinta electrónica (altos mandos), rifles Gauss, Torres Hidropónicas |
| Confederación Argentina | confederacion, 22-ciudades-estado, 2161, clerigo-militar | Unión 22 ciudades-estado bajo Anatema (formada 2161), alianza Iglesia+Ejército, Dársena capital de facto, tensiones internas Armada vs Ejército |
| El Cráter | crater, meteorito, 2030, buenos-aires, zona-exclusion | Cráter meteorito 27 dic 2030 (850m radio), 1M muertos, ex-Buenos Aires, zona exclusión permanente radiactiva, lugar promulgación Anatema 2061 |

---

## EVENTOS HISTÓRICOS CRÍTICOS (HITOS)

| Año | Evento | Impacto |
|-----|--------|---------|
| 2029 | La Noche Global | Apagón planetario, inicio Gran Colapso |
| 27 dic 2030 | Meteorito Buenos Aires | 1M muertos, cráter 850m, fragmentación Argentina |
| 2035 | Último contacto intercontinental | Aislamiento global |
| 2036 | Guerra USA-China | Inicio conflicto bilateral |
| 2039-2068 | Gran Guerra Global | 29 años devastación planetaria, "Fuego Perpetuo" |
| 2048 | Primera QIA | Inicio era IA cuánticas |
| 2061 | Anatema Mecánico | Prohibición tecnología digital, rebelión anti-QIA |
| 2054 | Traslado Santa Sede | Vaticano → Dársena, nuevo centro eclesiástico |
| 2161 | Formación Confederación | Alianza Iglesia-Ejército, 22 ciudades-estado |

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
