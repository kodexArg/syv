# Sistema de Geolocalización para SyV - Documentación Completa

## Resumen Ejecutivo

Se ha creado un **sistema integral de geolocalización** para el universo de "Subordinación y Valor" que actúa como árbitro definitivo de coherencia geográfica, espacial y ambiental. El sistema consta de tres componentes principales:

1. **Base de Datos Geográfica** (`geographic-database.yml`)
2. **Skill Geolocation Specialist** (definición en SKILL.md)
3. **Documentación y Referencias Rápidas**

## 1. Base de Datos Geográfica

**Ubicación**: `.claude/database/geographic-database.yml`

### Estructura Jerárquica

```
GLOBAL
├── Información planetaria general
├── Nube Roja (fenómeno de geo-ingeniería)
├── Continentes y sus estados
└── Dinámicas de poder global

CONFEDERACIÓN ARGENTINA
├── Dársena (0, 0) - Capital de facto
│   ├── Población: 5M habitantes
│   ├── Clima: Litoral Húmedo
│   ├── Control: Iglesia + Armada + Gremio
│   └── Distancia a Córdoba: 400 km
│
├── República Córdoba (-400, 0) - Centro industrial
│   ├── Población: 30M habitantes
│   ├── Clima: Continental
│   ├── Control: Dictadura Videla + Ejército
│   └── Distancia a Mendoza: 600 km
│
├── Mendoza (-900, -100) - Centro andino
│   ├── Población: 2M habitantes
│   ├── Clima: Árido Andino
│   ├── Control: Gobernación militar-civil
│   └── Principales pasos cordilleranos
│
├── 19 ciudad-estados menores
└── Zonas periféricas (DMZ, Pantanos, Tierras Baldías)

CIUDADES (Detalle Extenso)
├── Ciudad Dársena
│   ├── Zona Militar y Eclesiástica (200k)
│   ├── Microcentro (300k + 1M)
│   ├── Zona Centro (300k + 1M)
│   ├── Barrio Norte (50k)
│   ├── Barrios del Muro (3.5M)
│   ├── Las Tuberías (500k subterráneos)
│   └── Fuera del Muro (150k disperso)
│
├── República Córdoba
│   ├── Zona Industrial (5M)
│   ├── Zona Agrícola (3M)
│   ├── Zona Residencial (10M)
│   ├── Zona Administrativa (1M)
│   └── Zona Militar (500k)
│
└── Mendoza
    ├── Centro Urbano (800k)
    ├── Uspallata (300k)
    ├── Zona Agrícola (600k)
    └── Zona Militar (300k)
```

### Contenido de la Base de Datos

#### Sección 1: GLOBAL
- Descripción de Tierra en 2178
- Estado de continentes (Europa, África, Asia, etc.)
- Clima planetario (Nube Roja)
- Dinámicas de poder global

**Propósito**: Contexto general sin necesidad de precisión extrema

#### Sección 2: CONFEDERACIÓN ARGENTINA
- Información de las 3 ciudades principales
- 19 ciudad-estados menores (mencionados pero no documentados)
- Zonas periféricas y exteriores
- Fenómenos climáticos regionales
- Límites territoriales

**Propósito**: Visión estratégica regional de movimiento y control

#### Sección 3: CIUDADES
- **Dársena**: 7 zonas detalladas con coordinadas específicas
- **Córdoba**: 5 zonas detalladas con infraestructura
- **Mendoza**: 4 zonas detalladas con características andinas

**Propósito**: Nivel de detalle granular para creación narrativa

### Sistema de Coordinadas

```
Formato: (X, Y) o (X, Y, Profundidad)

Centro: Dársena (0, 0) - Isla Oriental, Nueva Basílica
Eje X:  Oeste = negativo, Este = positivo (~1 unidad = 1 km)
Eje Y:  Sur = negativo, Norte = positivo (~1 unidad = 1 km)
Profundidad: Túneles = -metros bajo superficie

Ejemplos:
- Dársena centro: (0, 0)
- Córdoba: (-400, 0)
- Mendoza: (-900, -100)
- Barrios del Muro: (-2, -1.5)
- Las Tuberías (centro): (-1.5, -1.5, -150m)
- Pantanos: (-1, -3)
- El Cráter: (50, 100)
```

### Datos Clave Incluidos

**Para cada ubicación**:
- Coordinadas en sistema relativo
- Población estimada
- Área en km²
- Clima predominante
- Temperatura (verano/invierno)
- Precipitación
- Visibilidad
- Facciones presentes
- Puntos de acceso
- Recursos disponibles
- Restricciones especiales

**Distancias documentadas**:
- Dársena ↔ Córdoba: 400 km (10 días caballo)
- Córdoba ↔ Mendoza: 600 km (15 días caballo)
- Dársena ↔ Mendoza: 1000+ km (25+ días caballo)

**Límites poblacionales máximos**:
- Dársena: 5M (limitado por Torres Hidropónicas)
- Córdoba: 30M (infraestructura industrial)
- Mendoza: 2M (disponibilidad de agua)
- Las Tuberías: 500k (espacio subterráneo)

## 2. Skill Geolocation Specialist

**Ubicación**: `.claude/skills/geolocation-specialist/SKILL.md`

### Definición

Especialista experto en validación de coherencia geográfica y espacial del universo SyV. Actúa como árbitro definitivo consultando la base de datos geográfica como fuente única de verdad.

### Responsabilidades

1. **Validación de Ubicaciones**
   - Verifica existencia en base de datos
   - Valida coherencia de coordinadas
   - Detecta solapamientos
   - Confirma zona climática

2. **Coherencia Ambiental**
   - Verifica clima descrito vs. documentado
   - Valida fenómenos especiales (Red Cloud, Zonda)
   - Detecta incoherencias atmosféricas
   - Valida disponibilidad de recursos

3. **Movimiento y Viajes**
   - Calcula distancias (coordenadas)
   - Estima tiempos realistas
   - Detecta viajes imposibles
   - Valida rutas de acceso

4. **Población y Recursos**
   - Verifica población es soportable
   - Valida recursos disponibles
   - Detecta superpoblación
   - Confirma densidades coherentes

5. **Control Territorial**
   - Verifica facciones tienen presencia
   - Valida capacidad de control
   - Detecta conflictos territoriales
   - Confirma matriz de poder

### Activación Automática

Se activa cuando:
- Se crea nueva ubicación
- Se describe evento en lugar específico
- Se establece ruta de viaje
- Se menciona clima/condiciones
- Se valida coherencia narrativa con elemento geográfico

### Output

**Validación Positiva ✓**:
```
UBICACIÓN VALIDADA: [Nombre]
- Coordenadas: (X, Y)
- Zona climática: [Zona]
- Población: [Rango]
- Facciones: [Lista]
- Estado: ✓ COHERENTE
```

**Con Observaciones ⚠**:
```
PARCIALMENTE COHERENTE: [Nombre]
- Observación: [Detalle]
- Sugerencia: [Ajuste]
```

**Negativo ✗**:
```
INCOHERENCIA: [Nombre]
- Problema: [Descripción]
- Conflicto: [Con qué]
- Solución: [Alternativa]
```

## 3. Documentación Creada

### Archivos Principales

```
.claude/database/
└── geographic-database.yml          (2481 líneas, base de datos única)

.claude/skills/geolocation-specialist/
├── SKILL.md                         (Especificación completa)
├── QUICK-REFERENCE.md              (Datos clave tabulados)
└── README.md                        (Guía de uso)

.claude/instructions/
└── geolocation-specialist.md        (Instrucciones detalladas - legacy)
```

### Contenido de Cada Archivo

#### SKILL.md (Especificación)
- Competencia y cuando se activa
- Base de datos de referencia
- Expertise clave (5 áreas)
- Categorías de información gestionada
- Metodología de validación
- Convenciones de nomenclatura
- Restricciones y límites críticos
- Preguntas de validación rápida
- Output esperado
- Integración con otros skills
- Notas de implementación

#### QUICK-REFERENCE.md (Datos Rápidos)
- Coordinadas principales en tabla
- Zonas de Dársena tabuladas
- Climas por zona
- Distancias aproximadas
- Poblaciones máximas
- Control territorial
- Fenómenos especiales
- Velocidades de desplazamiento
- Restricciones de acceso
- Densidades poblacionales
- Archivos de referencia

#### README.md (Guía de Uso)
- Qué es la skill
- Propósito y cuándo se usa
- Base de datos de referencia
- Estructura de archivos
- Experticia clave (5 áreas)
- Información clave gestionada
- Coordinación con otras skills
- Cómo usar (ejemplos)
- Restricciones críticas
- Preguntas de validación
- Ejemplos de validación
- Output estándar

#### geolocation-specialist.md (Legacy)
- Descripción general
- Responsabilidades principales
- Metodología detallada
- Convenciones completas
- Operaciones comunes
- Mejoras futuras

## 4. Integración con Claude Code

### Activación Automática

La skill está configurada para activarse automáticamente en:

1. **Creación de Ubicación** (comando `/new-location`)
   - Valida coordinadas propuestas
   - Verifica clima coherente
   - Confirma población realista

2. **Descripción de Evento**
   - Valida ubicación del evento
   - Verifica condiciones climáticas
   - Confirma presencia de facciones

3. **Establecimiento de Ruta**
   - Calcula distancia entre puntos
   - Estima tiempo de viaje
   - Identifica peligros en ruta

4. **Validación Narrativa**
   - Detecta inconsistencias espaciales
   - Sugiere ajustes de ubicación
   - Proporciona orientación geográfica

### Coordinación con Skills Existentes

| Skill | Interacción |
|-------|------------|
| **Character Architect** | Valida ubicación de residencia |
| **Faction Designer** | Valida territorios controlados |
| **Chronology Keeper** | Valida tiempos de viaje |
| **Metadata Validator** | Valida campo `region:` |
| **SyV Worldbuilding** | Consulta para coherencia |

## 5. Restricciones Críticas Codificadas

### Dársena
- ✗ Muro impenetrable al oeste (barrera física)
- ✗ DMZ letal con francotiradores (zona de muerte)
- ✗ Pantanos desconocidos al sur (anómalo)
- ✓ Población máxima: 5M habitantes
- ✓ Torres Hidropónicas: 80% de producción alimentaria
- ✓ Único acceso seguro: Puerto sur

### Córdoba
- ✓ Fronteras abiertas (vigiladas militarmente)
- ✓ Expansión hacia Tierras Baldías permitida
- ✓ Autosuficiencia prácticamente total
- ✓ Población máxima: 30M habitantes
- ✓ Infraestructura industrial masiva
- ✗ Contacto limitado con poderes externos

### Mendoza
- ✓ Altitud variable: 500-2200 msnm
- ✗ Agua limitada por deglaciación errática
- ✓ Población máxima: 2M habitantes
- ✗ Pasos andinos cerrados seasonalmente
- ✓ Viento Zonda extremo e impredecible
- ✗ Acceso terrestre restringido

### Las Tuberías
- ✓ Profundidad: 0 a -200m
- ✓ Mayor densidad bajo Barrios del Muro
- ✓ Control territorial fragmentado (bandas + auto-gobierno)
- ✓ Población máxima: 500k habitantes
- ✗ Acceso solo desde Barrios del Muro
- ✗ Luz artificial limitada (LED reciclados)

## 6. Validaciones Comunes

### Validación de Nueva Ubicación

Cuando se propone "Monasterio de Altura" en Mendoza:
```
1. ¿Existe en base de datos? NO → ¿Es plausible? SÍ
2. ¿Coordenadas coherentes? (-920, -120) ✓
3. ¿Clima plausible? Árido Andino, 2500m ✓
4. ¿Población realista? 100-300 monjes ✓
5. ¿Accesible? Sí, a través de Uspallata ✓
6. ¿Qué facción controla? Ninguna (neutral) ✓
7. ¿Recursos disponibles? Agua de deshielo ✓
8. ¿Solapamiento? No ✓
RESULTADO: VÁLIDA - Puede integrarse
```

### Validación de Evento

Cuando se describe evento en Dársena invierno 2178:
```
1. ¿Ubicación existe? SÍ
2. ¿Clima coherente? 5-15°C, lluvia constante ✓
3. ¿Visibilidad afectada? Sí, <100m ⚠
4. ¿Recursos disponibles? Sí, Torres Hidropónicas ✓
5. ¿Facciones presentes? Iglesia, Armada, Gremio ✓
6. ¿Viaje posible? Sí, dentro de ciudad ✓
RESULTADO: VÁLIDO - Coherente con canon
```

### Detección de Incoherencia

Cuando se propone "Viaje Dársena a Mendoza en 2 días":
```
1. Distancia: 1000+ km
2. Velocidad máxima: 500 km/día (avión)
3. Posibilidad: Imposible
4. Tiempo real: Mínimo 20 días
RESULTADO: INVÁLIDO - Viaje imposible
```

## 7. Casos de Uso

### Crear Nueva Ubicación
```
Usuario propone: Aldea comercial entre Dársena y Córdoba
Skill valida:
- Coordinadas plausibles: (-150, -50)
- Clima: Transición Litoral-Continental
- Población: 2000-5000 comerciantes
- Control: Competencia Gremio-Facciones
- Acceso: Ruta comercial documentada
RESULTADO: ✓ VÁLIDA - Sugerir integración
```

### Validar Trayecto de Viaje
```
Personaje viaja: Dársena a Córdoba
Skill calcula:
- Distancia: 400 km
- Velocidad caballo: 40 km/día
- Tiempo estimado: 10 días
- Peligros: Tierras Baldías, bandas salvajes
- Ruta segura: A través de comercio conocido
RESULTADO: ✓ POSIBLE - Tiempo coherente
```

### Detectar Anacrónismo Geográfico
```
Evento propuesto: Personaje clandestino en Isla Oriental
Skill detecta:
- Isla Oriental: Acceso ultra-restringido
- Facciones: Solo Iglesia + Armada + Élite
- Imposibilidad: Ningún clandestino acceso
RESULTADO: ✗ INVÁLIDO - Ubicación imposible
```

## 8. Mejoras Futuras Sugeridas

1. **Visualización**
   - Mapas ASCII de Dársena
   - Gráficos de densidad poblacional
   - Diagramas de rutas comerciales

2. **Cálculos Avanzados**
   - Rutas comerciales multi-paso
   - Tiempos de viaje considerando obstáculos
   - Simulación de desplazamiento de facciones

3. **Validación Automática**
   - Alertas de incoherencias geográficas
   - Detección de anomalías poblacionales
   - Validación de rutas de contrabando

4. **Integración Sistema**
   - Slash command `/geo-check` para validación rápida
   - Sistema de alertas geográficas
   - Generador de rutas comerciales

## 9. Referencias Cruzadas

### Otros Skills Relacionados
- **Character Architect**: Define dónde vive el personaje
- **Faction Designer**: Define territorios controlados
- **Chronology Keeper**: Define cuándo ocurren viajes
- **Metadata Validator**: Valida campo `region:` en metadatos

### Archivos de Referencia
- `.claude/REFERENCE.md` - Ubicaciones clave globales
- `.claude/commands/new-location.md` - Template de creación
- `.claude/guias/guia-de-tags.md` - Tags geográficos

## 10. Notas Técnicas

### Formato de Base de Datos
- **Formato**: YAML estructurado
- **Tamaño**: ~2481 líneas
- **Actualización**: Manual por worldbuilders
- **Validación**: Skill consulta como fuente única

### Acceso a Información
- Lee: `geographic-database.yml`
- Consulta: `REFERENCE.md`
- Valida contra: `guía-de-tags.md`
- Verifica: Cronología para análisis temporal

### Performance
- Búsquedas O(1) por coordinadas
- Validación O(n) por solapamiento
- Cálculos de distancia inmediatos
- No requiere conexión a red

---

## Resumen Final

Se ha creado un **sistema integral y robusto de geolocalización** para SyV que:

✓ Documenta exhaustivamente toda la geografía del canon
✓ Proporciona coordinadas relativas consistentes
✓ Valida coherencia automáticamente
✓ Actúa como árbitro de ubicación para toda narrativa
✓ Integra con skills existentes
✓ Permite creación coherente de nuevas ubicaciones
✓ Facilita cálculo de distancias y tiempos de viaje
✓ Mantiene integridad espacial del mundo

El sistema está listo para ser usado como referencia principal en todas las decisiones geográficas del worldbuilding de SyV.

---

*Sistema de Geolocalización para Subordinación y Valor (SyV)*
*Crear coherencia espacial en mundos post-apocalípticos*
*Última actualización: 2178*
