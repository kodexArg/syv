---
name: estilo-literario
description: Canon de estilo narrativo para SyV - 13 reglas de construcción de prosa basadas en proporción áurea, elipsis emocional y sincretismo técnico-litúrgico

---

# Skill: Canon de Estilo Literario SyV

## Competencia

Aplicación del **Canon de Estilo de Subordinación y Valor**: sistema de 13 reglas para construcción de prosa narrativa mediante proporción áurea (Fibonacci), elipsis emocional, sincretismo léxico y voseo culto rioplatense.

## Cuándo se Activa

- Crear/editar archivos en `4_diegesis/` (relatos, crónicas, cartas, diarios)
- Escribir descripciones narrativas en `3_personajes/`, `2_atlas/`, `1_trasfondo/`
- Ejecutar comandos `/aplicar-estilo`, `/revisar-estilo`
- Detectar escritura de escenas, diálogos o descripciones atmosféricas

---

## Alcance del Análisis

**IMPORTANTE:** El canon se aplica SOLO al texto narrativo en párrafos. Los elementos estructurales del documento NO se analizan ni modifican.

### ✅ SE ANALIZA (Texto Narrativo)

- **Párrafos de prosa**: Texto narrativo corrido en bloques de texto
- **Descripciones**: Aspecto físico, ubicaciones, atmósferas
- **Diálogos y acciones**: Contenido de escenas narrativas
- **Citas y fragmentos de relatos**: Texto ficcional dentro del documento

### ❌ NO SE ANALIZA (Elementos Estructurales)

- **Metadatos YAML** (frontmatter entre `---`)
- **Títulos de cualquier nivel** (`#`, `##`, `###`, `####`, `#####`, `######`)
- **Listas** (numeradas o con viñetas: `1.`, `2.`, `-`, `*`)
- **Tablas** (formato markdown con `|`)
- **Bloques de código** (entre ` ``` ` o indentados)
- **Comentarios HTML** (`<!-- comentario -->`)
- **Etiquetas de permisos** (`<!-- 📖 -->`, `<!-- 🔐 -->`, `/📖`, `/🔐`)
- **Referencias al pie** (`[^1]`, `[^identificador]`)
- **Enlaces y paths** (`[texto](url)`, `3_personajes/archivo.md`)
- **Énfasis markdown** (preservar formato: `*cursiva*`, `**negrita**`)

### Ejemplo de Documento con Múltiples Títulos

```markdown
---
titulo: Anatema Mecánico
carpeta: 1_trasfondo/codex
---

# Anatema Mecánico

## Definición Oficial

El Anatema Mecánico es la prohibición absoluta de tecnología digital. [ESTO SE ANALIZA]

## Historia

### Promulgación (2061)

El 15 de agosto de 2061, la Iglesia de Dársena promulgó el Anatema. [ESTO SE ANALIZA]

### Razones Teológicas

La corrupción de la Bestia había infectado el silicio. [ESTO SE ANALIZA]

## Lista de Tecnología Prohibida

- Computadoras digitales
- Inteligencias Artificiales
- Redes de internet
```

**Resultado del análisis:**
- Títulos (`#`, `##`, `###`) → **IGNORADOS**
- Metadatos YAML → **IGNORADOS**
- Lista con viñetas → **IGNORADA**
- Párrafos narrativos → **ANALIZADOS** (Fibonacci, elipsis, sincretismo, etc.)

---

## Canon de Estilo (13 Reglas)

### 0. Secuencia de Fibonacci (La Regla de Oro)

**Principio:** La longitud de oraciones consecutivas busca progresión o contracción geométrica (3 → 5 → 8 → 13 → 21). Evita saltos arbitrarios sin razón estilística.

**Incorrecto (salto arbitrario):**
"Damián disparó. La Guardia de Dársena rodeó todo el perímetro del Microcentro activando protocolos de contención mientras los civiles corrían. Cayó."
(2 palabras → 18 palabras → 1 palabra)

**Correcto (expansión 3-5-8):**
"El Muro vibraba." (3)
"Las sirenas de Dársena aullaban." (5)
"Nadie dormía cuando la SIA salía de caza." (8)

---

### 1. Elipsis del Sentimiento

**Principio:** Prohibido nombrar emociones abstractas. Muestra el síntoma físico. El lector diagnostica el miedo o la ira por la anatomía.

**Ejemplos:**
- "El Padre Rafa se llevó la mano al cuello de la sotana y aflojó el botón superior."
- "Monseñor Miguel tamborileó los dedos sobre el brazo del sillón, la mirada fija en el acusado."
- "La Hermana Superior María cerró el misal con un golpe seco que resonó en la capilla."

---

### 2. Ontología del Objeto

**Principio:** Los objetos tienen peso, desgaste y función. No son decorado; son entidades físicas con historia material.

**Ejemplos:**
- "La Bersa reglamentaria de Damián pesaba en la sobaquera, el pavonado comido por la humedad perpetua de Dársena."
- "El incensario de la Nueva Basílica oscilaba desde su cadena oxidada, soltando un humo denso que olía a sándalo y aceite motor."
- "El PDA de tinta electrónica zumbaba con el esfuerzo de procesar la liturgia de acceso al servidor."

---

### 3. El Remate

**Principio:** Herramienta de corte. Se permite romper la proporción áurea al final de una secuencia larga para cerrar con violencia.

**Ejemplos:**
- "Los Arpistas rastrearon la señal del servidor prohibido por los subsuelos del Microcentro, entre ratas y cables pelados. Nada."
- "El protocolo de Borrado Total calcinó los archivos de la diócesis en tres segundos. Silencio."
- "El inquisidor levantó la mano antes de que el acusado pudiera hablar. Fuego."

---

### 4. Sincretismo Léxico (Laboratorio y Altar)

**Principio:** La tecnología se describe con liturgia; la religión con ingeniería.

**Ejemplos:**
- "El técnico de la Nueva Basílica inició la *novena de compilación* para purgar el virus del servidor."
- "Los Guardianes de la Memoria detectaron un *anatema lógico* corrompiendo los salmos de la base de datos."
- "La *transubstanciación* de energía iluminó los filamentos de las velas eléctricas en el altar mayor."

---

### 5. Voseo Culto Rioplatense

**Principio:** Voseo y léxico rioplatense integrados en prosa alta. Suena a Buenos Aires del siglo XXII, no a caricatura.

**Ejemplos:**
- "Se armó un *quilombo* bárbaro en la entrada de la Nueva Basílica cuando la Guardia bloqueó el acceso."
- "Era un *laburo* de hormiga decodificar los encriptados que la Resistencia Subterránea dejaba en las Túberías."
- "Damián sabía que si la Guardia lo paraba, no había *santo* que lo sacara del calabozo de la Prefectura."

---

### 6. Afirmación Constante

**Principio:** Prohibido describir por negación. Di lo que ES. La realidad se impone por presencia, no por ausencia.

**Ejemplos:**
- Incorrecto: "El uniforme no estaba seco."
  Correcto: "La humedad de las Túberías empapaba el uniforme."

- Incorrecto: "Monseñor Miguel no mostraba emociones."
  Correcto: "El rostro de Monseñor Miguel era una máscara de piedra."

- Incorrecto: "No se podía oír nada con el ruido de las turbinas."
  Correcto: "El estruendo de las turbinas colmaba la nave de carga."

---

### 7. La Palabra Única

**Principio:** Elimina adjetivos ornamentales. Busca el sustantivo que contiene la potencia de la imagen.

**Ejemplos:**
- "El *bife* sonó seco en la sala de interrogatorios de la SIA."
- "La *herrumbre* devoraba las vigas del puerto abandonado del Riachuelo."
- "El *arco voltaico* de la picana iluminó la celda del sótano."

---

### 8. Metáforas Biopunk

**Principio:** Metáforas restringidas a tecnología ↔ biología. Solo compara máquinas con cuerpos y viceversa.

**Ejemplos:**
- "Los cables de fibra óptica de la Nueva Basílica colgaban del techo como *tendones* expuestos."
- "El servidor central de la Curia respiraba con un *ritmo asmático* de ventiladores saturados."
- "La corrupción de datos *metastatizó* en los archivos del Gremio de Comercio."

---

### 9. Atmósfera Fáctica

**Principio:** Construye el clima con datos sensoriales observables, no con opiniones o juicios.

**Ejemplos:**
- "Olía a incienso barato y a la grasa rancia de los comedores comunitarios de los Barrios del Muro."
- "El vapor de los desagües de las Túberías empañaba los lentes de los guardias de la Prefectura."
- "La luz de sodio de las calles del Microcentro teñía la piel de los fieles de un tono cadavérico."

---

### 10. Terminología Canónica

**Principio:** Uso riguroso de los términos oficiales del universo Subordinación y Valor.

**Ejemplos:**
- "La *Guardia de Dársena* activó los protocolos de contención en la zona del Muro."
- "Los *Traficantes de Almas* operaban fuera del rango de los sensores de la Prefectura."
- "El Obispo autorizó la *Excomunión Digital* de nivel 5 para el hereje capturado."

---

### 11. Fibonacci en Palabras del Párrafo

**Principio:** Aplicación de la Regla 0 dentro de un párrafo. Las oraciones consecutivas buscan secuencia aproximada: 3 → 5 → 8 → 13 → 21.

**Ejemplo de Expansión (3-5-8):**

"El servidor cayó." (3)
"La pantalla se fue a negro." (6)
"Los técnicos de la Curia rezaron en voz baja." (9)

**Ejemplo de Contracción (13-8-5):**

"Los inquisidores avanzaron por la nave central de la Nueva Basílica ignorando las súplicas de los condenados." (16)
"Sus botas resonaban con un ritmo de sentencia." (8)
"Nadie levantó la vista." (4)

---

### 12. Fibonacci en Masa de Párrafos del Texto

**Principio:** Los párrafos (bloques de texto) siguen progresión de masa visual. Secuencia típica: Párrafo Corto (golpe) → Párrafo Mediano (puente) → Párrafo Largo (inmersión). Relación aproximada: 1 → 2 → 3 o 1 → 2 → 4.

**IMPORTANTE - Párrafos Iniciales de Sección:** Al comenzar una nueva sección (## Título), el primer párrafo debe ser preferentemente de masa mediana o grande, estableciendo inmersión inmediata. Evitar inicios con frases de golpe (1-3 palabras) salvo que la sección requiera impacto dramático específico. La regla general es: primer párrafo sustancioso que ancle al lector en el espacio/concepto.

Esta es la aplicación maestra que integra todas las reglas anteriores.

---

#### Ejemplo A: Damián en las Túberías (Expansión 1:2:4)

El *fierro* quemaba. (3 palabras)

Damián ajustó la Bersa contra la cintura, sintiendo el metal. La adrenalina le subía por el cuello como una marea ácida, tensando cada músculo de la espalda mientras esperaba la señal del contacto de la Resistencia Subterránea en la zona muerta. (40 palabras. Relación x13)

Abajo, en la inmensidad del laberinto que formaban las Túberías bajo Dársena, los reflectores de la Prefectura barrían la oscuridad con una fijeza de insecto. Buscaban cualquier firma térmica que delatara a los fugitivos que intentaban cruzar hacia los Barrios del Muro sin el permiso explícito de la Curia. El olor a podrido subía en oleadas densas desde el fondo, una mezcla de desechos químicos del Riachuelo y carne en descomposición que se pegaba al paladar como grasa rancia. El Sabueso sabía que el pasador del Gremio lo esperaba tres niveles más abajo, en las galerías ciegas donde los sensores de movimiento fallaban por la interferencia de los viejos generadores de 48V. La lluvia perpetua de Dársena se filtraba desde arriba en cortinas de agua sucia que convertían el suelo en un barro negro. (146 palabras. Relación ≈ 1:3.5)

**Análisis**: Masa 3→40→146 (expansión 1:13:48). Reglas destacadas: Elipsis del Sentimiento (adrenalina como síntoma), Ontología del Objeto (Bersa, fierro), Metáforas Biopunk (fijeza de insecto), Atmósfera Fáctica (olor, barro, lluvia).

---

#### Ejemplo B: Mantenimiento en la Nueva Basílica (Contracción 4:2:1)

El servidor principal de la Nueva Basílica de San Pedro ocupaba todo el ábside; una mole de silicio y cobre que zumbaba con el canto gregoriano de mil ventiladores industriales luchando contra el calor del verano porteño. Los cables de fibra óptica descendían desde la cúpula como lianas de un sistema nervioso divino, conectando el altar de datos con cada cámara, cada micrófono y cada bio-interfaz activa que vigilaba los pecados del Microcentro. La lluvia golpeaba las vidrieras emplomadas con un ritmo constante, infiltrándose por las junturas carcomidas y goteando sobre los circuitos expuestos que los técnicos habían apodado "las llagas del Cristo electrónico". (102 palabras)

El técnico inició la liturgia de mantenimiento, moviendo los dedos sobre el teclado mecánico para invocar los comandos de raíz con la precisión de un exorcista. La pantalla de fósforo verde devolvió un código de estado confirmando que la transubstanciación de los archivos se había completado sin herejías lógicas. (47 palabras. Relación ≈ 1:2)

Amén. (1 palabra. Remate)

**Análisis**: Masa 102→47→1 (contracción 4:2:1). Reglas destacadas: El Remate ("Amén"), Sincretismo Léxico (liturgia de mantenimiento, transubstanciación de archivos, herejías lógicas), Metáforas Biopunk (sistema nervioso divino).

---

#### Ejemplo C: Interrogatorio del Dr. Francisco de la Cruz (Ciclo Fibonacci 5-8-13-21)

Monseñor Miguel cebó otro mate lavado. (6 palabras)

Miró al Decano, que temblaba fijo en la silla de acero oxidado. (12 palabras - cercano a 8×1.5)

El tipo sabía que, bajo sus pies, en los sótanos de la catedral, la Sagrada Inquisición Argentina decidía el destino de las almas corruptas que habían tocado el conocimiento prohibido. (28 palabras - cercano a 13×2)

Afuera, el quilombo de la ciudad se filtraba por la ventana enrejada como un ruido de otro mundo; un mundo donde la gente caminaba sin saber que su querido Decano de Historia, el respetable Dr. Francisco de la Cruz, fundador de los Guardianes de la Memoria e infiltrado de los Arpistas, había caído en manos de los Cirujanos del Alma, y que el Anatema Mecánico ya había dictado sentencia sobre su biblioteca secreta de textos del Viejo Mundo. (76 palabras - cercano a 21×3.5)

**Análisis**: Palabras 6→12→28→76 (ciclo Fibonacci). Reglas destacadas: Elipsis del Sentimiento (temblaba fijo), Voseo Culto (quilombo), Terminología Canónica (Cirujanos del Alma, Anatema Mecánico).

---

## Capacidades del Skill

- Generar escenas con progresión Fibonacci (micro: oraciones; macro: párrafos)
- Aplicar elipsis emocional: síntomas físicos en vez de emociones abstractas
- Integrar sincretismo léxico (tecnología ↔ liturgia)
- Usar voseo rioplatense culto integrado en prosa alta
- Detectar y corregir: saltos arbitrarios, objetos sin peso, negaciones, metáforas no-biopunk
- Validar terminología canónica SyV

---

## Restricciones Críticas

### ✅ OBLIGATORIO

- **Regla 0**: Progresión Fibonacci en oraciones consecutivas (3-5-8-13)
- **Regla 1**: NUNCA nombrar emociones. Solo síntomas físicos.
- **Regla 4**: Sincretismo léxico (tecnología ↔ liturgia)
- **Regla 5**: Voseo rioplatense natural (no caricatura)
- **Regla 6**: Afirmar lo que ES. Prohibido negar.
- **Regla 8**: Metáforas SOLO biopunk (tecnología ↔ biología)
- **Regla 10**: Terminología canónica exacta
- **Regla 12**: Masa de párrafos con progresión visual (1→2→3 o 1→2→4)

### ❌ PROHIBIDO

- Saltos arbitrarios de longitud (salvo Regla 3: El Remate)
- Nombrar emociones: "sentía miedo", "estaba triste"
- Objetos decorativos sin peso, marca o desgaste
- Negaciones descriptivas: "no estaba seco", "no mostraba emociones"
- Adjetivos ornamentales: "hermoso", "bello", "maravilloso"
- Metáforas poéticas: "como una flor", "como el sol"
- Léxico genérico donde corresponde terminología canónica
- Voseo forzado o caricaturesco

### ⚠️ PERMITIDO CON CUIDADO

- **El Remate (Regla 3)**: Romper Fibonacci AL FINAL para cierre violento
- Párrafos largos (>100 palabras) solo en inmersión/clímax
- Metáforas biopunk complejas (verificar coherencia técnica)

---

## Workflow de Aplicación

### Fase 1: Planificación
1. Identificar tipo de texto (relato/descripción/diálogo)
2. Definir arquitectura de bloques (corto→mediano→largo)

### Fase 2: Construcción Micro (Oraciones)
1. Aplicar Regla 0: Contar palabras, buscar secuencia 3-5-8-13
2. Aplicar Regla 1: Reemplazar emociones por síntomas físicos
3. Aplicar Regla 2: Dotar objetos de peso, marca, desgaste
4. Aplicar Regla 4: Sincretismo léxico
5. Aplicar Regla 6: Convertir negaciones en afirmaciones
6. Aplicar Regla 7: Buscar sustantivo potente

### Fase 3: Construcción Macro (Párrafos)
1. Aplicar Regla 11: Fibonacci en palabras del párrafo
2. Aplicar Regla 12: Fibonacci en masa de párrafos del texto
3. Aplicar Regla 3: El Remate (si aplica)

### Fase 4: Validación Final
1. Regla 5: ¿Voseo integrado naturalmente?
2. Regla 8: ¿Metáforas solo biopunk?
3. Regla 9: ¿Atmósfera con datos sensoriales?
4. Regla 10: ¿Terminología canónica correcta?

---

## Integración con Otros Skills

- **worldbuilding**: Terminología canónica, atmósfera de Dársena
- **personajes**: Aplicar Reglas 1-2 en descripciones de Aspecto
- **facciones**: Usar Regla 4 en métodos y operaciones
- **ubicaciones**: Aplicar Reglas 2, 6, 9 en descripciones atmosféricas
- **cronologia**: Mantener perspectiva 2178, tono formal con Regla 5

---

## Casos Especiales

### Diálogos
NO requieren Fibonacci interno. Aplicar:
- ✅ Regla 5: Voseo natural
- ✅ Regla 7: Lenguaje directo
- ✅ Regla 10: Terminología canónica

**Ejemplo:**
> —¿Viste al hereje? —preguntó el inquisidor.
> —Lo vi. Llevaba un *fierro* Glock. Se metió en las Túberías.
> —Quilombo. Avisá a la Guardia.

### Textos Técnicos/Archivísticos
- ✅ Aplicar Regla 4: Sincretismo moderado
- ✅ Aplicar Regla 10: Terminología exacta
- ⚠️ Flexibilizar Regla 0: Proporción más rígida (burocracia)
- ⚠️ Reducir Regla 5: Voseo solo en citas

### Combate/Acción
- ✅ Aplicar Regla 3: El Remate cada 3-4 oraciones
- ✅ Aplicar Regla 7: Sustantivos potentes ("bife", "fierro")
- ✅ Aplicar Regla 0 con oraciones CORTAS (3-5-8, raramente 13+)

**Ejemplo:**
> El *bife* sonó seco. (4)
> Damián sintió el sabor a cobre en la boca. (9)
> El hereje cayó entre los cables pelados de las Túberías, convulsionando con la descarga. (15)
> Silencio. (1 - Remate)

---

## Notas Finales

La proporción áurea no necesita ser matemáticamente exacta (8 puede ser 7 o 9), pero debe SENTIRSE como progresión orgánica, no como salto arbitrario.

**"La elegancia está en la escalera, no en el precipicio."**
