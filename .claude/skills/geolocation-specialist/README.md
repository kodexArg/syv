# Geolocation Specialist Skill - SyV Worldbuilding

## ¿Qué es?

El **Geolocation Specialist** es una skill especializada para el proyecto "Subordinación y Valor" que actúa como **árbitro definitivo de coherencia geográfica, espacial y ambiental** del universo.

## Propósito

- **Validar coherencia geográfica** de nuevas ubicaciones
- **Verificar movimiento realista** entre lugares
- **Garantizar consistencia climática** en descripciones
- **Mantener integridad espacial** del mundo
- **Consultar base de datos geográfica** como fuente única de verdad

## ¿Cuándo se Usa?

Automáticamente cuando:
- Se crea una nueva ubicación
- Se describe un evento en un lugar específico
- Se establece una ruta de viaje o comercio
- Se menciona clima o condiciones ambientales
- Se valida coherencia narrativa con elemento geográfico

También puede invocarse explícitamente para:
- Validar ubicación específica
- Calcular distancia entre puntos
- Sugerir ubicación alternativa
- Mapear conexiones geográficas

## Base de Datos de Referencia

**Ubicación**: `.claude/database/geographic-database.yml`

Esta es la **única fuente de verdad** para toda información geográfica del canon. Contiene:
- Sistema de coordenadas relativo (centrado en Dársena: 0,0)
- Descripción completa de todas las regiones (Global, Confederación Argentina, Ciudades)
- Información climática detallada
- Poblaciones estimadas
- Facciones presentes por zona
- Distancias documentadas
- Restricciones de acceso
- Zonas periféricas y exteriores

## Estructura de Archivos

```
.claude/skills/geolocation-specialist/
├── SKILL.md                    # Definición completa de la skill
├── QUICK-REFERENCE.md          # Referencia rápida de datos clave
└── README.md                   # Este archivo

.claude/database/
└── geographic-database.yml     # Base de datos única de verdad

.claude/instructions/
└── geolocation-specialist.md   # Instrucciones detalladas (legacy)
```

## Experticia Clave

### 1. Validación de Ubicaciones ✓
- Verifica que ubicación existe en base de datos
- Valida coherencia de coordenadas
- Detecta solapamientos territoriales
- Confirma zona climática apropiada

### 2. Coherencia Ambiental ✓
- Verifica clima descrito vs. zona documentada
- Valida fenómenos anómalos (Red Cloud, Zonda)
- Detecta incoherencias atmosféricas
- Valida disponibilidad de recursos

### 3. Movimiento y Viajes ✓
- Calcula distancias entre puntos
- Estima tiempos de viaje realistas
- Detecta viajes imposiblemente rápidos
- Valida rutas de acceso conocidas

### 4. Población y Recursos ✓
- Verifica población es soportable
- Valida recursos disponibles
- Detecta superpoblación irreal
- Confirma densidades coherentes

### 5. Control Territorial ✓
- Verifica facciones tienen presencia legítima
- Valida capacidad de control
- Detecta conflictos territoriales
- Confirma coherencia con matriz de poder

## Información Clave Gestionada

### Global (Nivel Macroscópico)
- Clima planetario (Nube Roja)
- Continentes y sus estados
- Poderes globales
- Esferas de influencia

### Confederación Argentina (Nivel Continental)
- **Dársena** (0,0) - Capital de facto, 5M habitantes
- **Córdoba** (-400,0) - Centro industrial, 30M habitantes
- **Mendoza** (-900,-100) - Centro andino, 2M habitantes
- 19 ciudad-estados menores
- Zonas periféricas (DMZ, Marismas de Sangre, Tierras Baldías)
- Climas regionales

### Ciudades (Nivel Detallado)

#### Dársena (Extenso)
- Dársena Oriental (ZDM FFAA, Catedral, Barrios Exclusivos)
- Centro Cívico (Gobierno y Administración)
- Puerto Madero (Comercio y Puerto)
- Bº Norte (50k)
- Barrios del Muro (3.5M)
- Las Tuberías (500k subterráneos)
- Fuera del Muro (150k)

#### Córdoba (Extenso)
- Zona Industrial Sur (5M)
- Zona Agrícola Este (3M)
- Zona Residencial Norte (10M)
- Zona Administrativa Central (1M)
- Zona Militar Oeste (500k)

#### Mendoza (Extenso)
- Centro Urbano (800k)
- Uspallata (300k)
- Zona Agrícola (600k)
- Zona Militar (300k)

## Coordinación con Otras Skills

| Skill | Interacción |
|-------|------------|
| **Character Architect** | Valida ubicación de residencia y acceso a facciones |
| **Faction Designer** | Valida territorios y capacidad de control |
| **Chronology Keeper** | Valida velocidad de viaje contra cronología |
| **Metadata Validator** | Valida campo `region:` en YAML frontmatter |
| **SyV Worldbuilding** | Consulta para coherencia narrativa general |

## Cómo Usar

### Para Crear Nueva Ubicación

```
Usuario: Crear nueva ubicación: "Monasterio de Altura" en Mendoza
Skill Response:
✓ Ubicación validada
- Coordenadas sugeridas: (-920, -120)
- Zona climática: Árido Andino, 2500m altitud
- Población realista: 100-300 monjes
- Aislamiento: Extremo, acceso difícil
- Distancia a Uspallata: ~30 km
- Coherencia: ✓ VÁLIDA
```

### Para Validar Evento

```
Usuario: Evento en Ciudad Dársena, invierno 2178
Skill Response:
✓ Coherencia validada
- Clima: 5-15°C, lluvia constante, visibilidad baja
- Factibilidad: Sí, clima invernal documentado
- Facciones presentes: Iglesia, Armada, Gremio
- Nota: Visibilidad reducida afecta movimiento
```

### Para Trazar Ruta de Viaje

```
Usuario: Viaje de Dársena a Córdoba, ¿cuánto tarda?
Skill Response:
- Distancia: 400 km
- Por caballo: ~10 días (40 km/día)
- Por vehículo: ~5-8 días (según velocidad)
- Peligros: Tierras Baldías, bandas de salvajes
- Rutas seguras: A través de conexiones comerciales conocidas
```

## Restricciones Críticas

### Dársena
- ✗ Muro impenetrable al oeste
- ✗ DMZ letal con francotiradores
- ✗ Marismas de Sangre desconocidas al sur
- ✓ Población máxima: 5M

### Córdoba
- ✓ Fronteras abiertas (vigiladas)
- ✓ Expansión hacia Tierras Baldías
- ✓ Autosuficiente
- ✓ Población máxima: 30M

### Mendoza
- ✓ Acceso limitado por altitud
- ✓ Agua errática por deglaciación
- ✓ Vientos Zonda extremos
- ✓ Población máxima: 2M

## Preguntas de Validación Rápida

Cuando se menciona ubicación geográfica:
1. ¿Existe en base de datos?
2. ¿Clima es coherente?
3. ¿Es accesible?
4. ¿Qué facción controla?
5. ¿Población realista?
6. ¿Recursos disponibles?
7. ¿Viaje es posible?
8. ¿Hay solapamiento?

## Ejemplos de Validación

### ✓ VÁLIDO: Nueva aldea cerca de Mendoza
```
Ubicación: Aldea de Altura
Propuesta: 100 habitantes en valle a 1500m
Validación:
✓ Coordenadas: (-880, -100) - Plausible
✓ Clima: Árido Andino - Coherente
✓ Población: Realista para ubicación
✓ Acceso: A través de rutas conocidas
✓ Recursos: Agua de deshielo disponible
✓ Facciones: Sin control directo (neutral)
Resultado: VÁLIDA - Puede integrarse a canon
```

### ⚠ CONFLICTO: Nueva ubicación en Dársena
```
Ubicación: "Ciudad Dársena II"
Propuesta: Nueva ciudad estado dentro de Dársena
Conflicto:
⚠ Solapamiento: Dársena ya tiene 5M habitantes
⚠ Límite: Torres Hidropónicas no pueden sostener más
⚠ Espacio: Muro es límite impenetrable al oeste
Sugerencia: Considerar alternativa en Córdoba o Mendoza
```

### ✗ INVÁLIDO: Viaje imposible
```
Viaje: Dársena a Mendoza en 2 días
Problema:
✗ Distancia: 1000+ km
✗ Velocidad máxima: 500 km/día (avión con combustible)
✗ Realidad: Viaje requiere mínimo 20 días
Solución: Usar transporte aéreo o reformular cronología
```

## Validación de Coherencia

La skill valida contra:
- **Base de datos geográfica** (fuente única)
- **Información climática** (por zona)
- **Límites poblacionales** (infraestructura)
- **Control territorial** (facciones)
- **Velocidades de viaje** (modo de transporte)
- **Restricciones de acceso** (barreras físicas)
- **Cronología** (eventos en tiempo)

## Output Estándar

### Validación Positiva ✓
```
UBICACIÓN VALIDADA: [Nombre]
- Coordenadas: (X, Y)
- Zona climática: [Zona]
- Población: [Rango]
- Facciones: [Lista]
- Estado: ✓ COHERENTE CON CANON
```

### Validación con Observaciones ⚠
```
PARCIALMENTE COHERENTE: [Nombre]
- Observación: [Detalle]
- Sugerencia: [Ajuste propuesto]
```

### Validación Negativa ✗
```
INCOHERENCIA: [Nombre]
- Problema: [Descripción]
- Conflicto: [Con qué entra en conflicto]
- Solución: [Alternativa]
```

## Notas Técnicas

### Archivos Necesarios
- `geographic-database.yml` - Base de datos única
- `SKILL.md` - Definición de skill
- `QUICK-REFERENCE.md` - Datos rápidos
- `REFERENCE.md` - Ubicaciones clave globales

### Acceso a Contexto
- Puede consultar geographic-database.yml
- Puede consultar REFERENCE.md
- Puede consultar guía-de-tags.md
- Puede consultar cronología para validaciones temporales

### Mejoras Futuras
- Visualización de mapas
- Cálculo de rutas comerciales
- Simulación de desplazamiento de facciones
- Validación automática de coherencia
- Sistema de alertas geográficas

## Contacto y Referencias

**Especificación Detallada**: `.claude/skills/geolocation-specialist/SKILL.md`
**Referencia Rápida**: `.claude/skills/geolocation-specialist/QUICK-REFERENCE.md`
**Instrucciones Legacy**: `.claude/instructions/geolocation-specialist.md`
**Base de Datos**: `.claude/database/geographic-database.yml`

---

*Skill: Geolocation Specialist para Subordinación y Valor (SyV)*
*Crear coherencia geográfica en mundos post-apocalípticos*
*Última actualización: 2178*
