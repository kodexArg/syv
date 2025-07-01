---
titulo: Guía de Tags para archivos Markdown
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Sistema de etiquetado orientado a búsquedas eficientes y conexiones narrativas en el proyecto SyV.
tags:
- guia
- tags
- metadatos
- colaboracion
- busqueda
---

# Guía de Tags para archivos Markdown

Esta guía establece un sistema de tags orientado a **búsquedas eficientes** y **conexiones narrativas** en el proyecto "Subordinación y Valor".

## Filosofía del Sistema de Tags

Los tags deben responder a preguntas concretas que un usuario o colaborador haría:
- "¿Dónde aparece Damián?"
- "¿Qué archivos hablan del Anatema Mecánico?"
- "¿Qué historias suceden en las Tuberías?"
- "¿Qué documentos mencionan tecnología prohibida?"
- "¿Dónde se explica el Fin de los Secretos?"

## Categorías de Tags

### 1. Personajes

**Cada personaje del universo genera su propio tag**, usando su nombre en formato kebab-case.

**Ejemplos:**
- `damian-diconte` - El Sabueso
- `sor-sofia` - Monja investigadora
- `francisco-de-la-cruz` - Líder de Guardianes
- `caronte-balsero` - Figura misteriosa

#### Históricos
- `videla-iv` - Líder histórico
- `papa` - Autoridad eclesiástica suprema
- `monseñor-miguel` - Gran Inquisidor

### 2. Ubicaciones

#### Ciudades Principales
**Nota**: Combinar siempre con ubicaciones específicas cuando corresponda.
- `darsena` - Ciudad capital de facto
- `cordoba` - República Autónoma rival

#### Dentro de Ciudad Dársena
- `tuberias` - Sistema subterráneo
- `barrios-del-muro` - Zona popular
- `barrio-norte` - Distrito élite
- `microcentro` - Centro comercial
- `basilica-san-pedro` - Sede eclesiástica
- `universidad-catolica` - Centro académico
- `zona-militar` - Distrito de fuerzas armadas

#### Regiones y Territorios
- `cementerio-chacarita` - Necrópolis
- `crater` - Zona del meteorito (ex-Buenos Aires)
- `zona-exclusion` - Área radiactiva
- `pantano` - Tierras del sur de Dársena
- `tierras-baldias` - Oeste del muro
- `delta` - Región de ríos y canales
- `paramo` - Ex-Santa Fe, territorio hostil
- `ribera-occidental` - Zona marginal oeste
- `islas-del-tigre` - Archipiélago deltaico

#### Internacional
- `europa` - Continente fragmentado
- `africa` - Renacimiento bantú
- `asia` - Territorios en decadencia
- `norteamerica` - Tierras devastadas

### 3. Conceptos y Eventos Centrales
- `anatema-mecanico` - Prohibición tecnológica fundamental
- `corpus-licitus` - Conocimiento autorizado
- `mision-s-a-n-t-a` - Operación de las QIA
- `fin-de-los-secretos` - Era de dominación IA (2048-2061)
- `gran-guerra` - Conflicto mundial 2036-2047
- `meteorito` - Evento catalizador, 2030
- `gran-colapso` - Crisis sistémica 2029-2035

### 4. Facciones y Organizaciones
- `qia` - Inteligencias Artificiales Cuánticas
- `sia` - Sagrada Inquisición Argentina
- `iglesia` - Poder eclesiástico
- `arpistas` - Red internacional de preservadores
- `guardianes-de-la-memoria` - Club de coleccionistas
- `criptografos` - Hackers clandestinos
- `canales-ocultos` - Red de poder invisible
- `cazadores-de-pesadillas` - Guerreros guaraníes
- `shipibo-conibo` - Chamanes amazónicos
- `traficantes-de-almas` - Criminales del submundo
- `la-union` - Poder económico y gremial
- `fuerzas-armadas` - Militar confederado
- `resistencia` - Oposición clandestina

### 5. Periodos Históricos
- `anos-del-caos` - 2029-2035
- `gran-guerra` - 2036-2047
- `fin-de-los-secretos` - 2048-2061
- `edad-oscura` - 2062-2160
- `confederacion-temprana` - 2161-2177
- `actualidad-2178` - Presente narrativo

### 6. Tipos de Documento
- `cronologia` - Eventos históricos
- `relato` - Narrativa ficcional
- `carta` - Correspondencia
- `cronica` - Registro histórico
- `investigacion` - Casos y misterios
- `aventura` - Módulos jugables
- `mapa` - Información geográfica
- `tecnologia` - Descripción técnica
- `constitucion` - Marco legal
- `herejia` - Violación del Anatema

## Ejemplos Prácticos

### Historia en las Tuberías de Dársena:
```yaml
tags:
- darsena          # Ciudad
- tuberias         # Ubicación específica
- sor-sofia        # Personaje
- investigacion    # Tipo de contenido
```

### Documento sobre el Anatema Mecánico:
```yaml
tags:
- anatema-mecanico # Concepto central
- sia              # Facción ejecutora
- iglesia          # Autoridad
- herejia          # Tema relacionado
```

### Aventura en el Cráter:
```yaml
tags:
- crater           # Ubicación
- zona-exclusion   # Región
- meteorito        # Evento histórico
- aventura         # Tipo de contenido
```

## Reglas de Uso

### Ubicaciones: Siempre usar DOS tags
1. **Ciudad/Región general**: `darsena`, `cordoba`, etc.
2. **Lugar específico**: `tuberias`, `barrio-norte`, etc.

Ejemplo para los Barrios del Muro de Dársena:
```yaml
tags:
- darsena          # Ciudad
- barrios-del-muro # Ubicación específica
```

### ✅ Usar tags cuando:
- Un personaje **aparece o se menciona significativamente**
- Un lugar es **escenario de la acción**
- Un concepto es **explicado o es central al contenido**
- Una facción **actúa o es tema principal**
- Un periodo histórico **es el foco temporal**

### ❌ NO usar tags para:
- Carpetas del proyecto (`diegesis`, `atlas`, `trasfondo`)
- Información ya contenida en el título exacto
- Conceptos demasiado generales (`ciudad`, `persona`)
- Referencias mínimas o de paso

---

**Principio fundamental**: Cada tag debe responder a una búsqueda específica que alguien haría sobre el universo SyV. 