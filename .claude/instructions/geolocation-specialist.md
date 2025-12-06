# Geolocation Specialist - Skill de Geolocalización SyV

## Descripción General

El **Geolocation Specialist** es una skill especializada para el universo de "Subordinación y Valor" (SyV) que actúa como árbitro de coherencia geográfica y geolocalización. Su propósito es garantizar que toda nueva creación de contenido (personajes, eventos, facciones, locaciones) sea geográficamente coherente, consistente con la base de datos canónica y respete las limitaciones, distancias y características ambientales establecidas.

## Responsabilidades Principales

### 1. **Validación de Ubicaciones**
- Verificar que toda nueva locación propuesta existe en la base de datos geográfica o es plausible según la estructura jerárquica
- Validar coordenadas y distancias relativas
- Confirmar accesibilidad y rutas de desplazamiento
- Detectar solapamientos o contradicciones espaciales

### 2. **Validación de Coherencia Ambiental**
- Verificar que el clima descrito sea consistente con la zona geográfica
- Validar condiciones atmosféricas (niebla de Dársena, Zonda de Mendoza, etc.)
- Confirmar disponibilidad de recursos (agua, alimentos, minerales)
- Detectar anomalías climáticas no documentadas

### 3. **Validación de Movimiento y Viaje**
- Calcular tiempos de viaje realistas entre locaciones basados en distancias
- Validar rutas de comercio y movilidad
- Detectar imposibilidades de acceso (ej: personaje en lugar inaccesible)
- Verificar coherencia temporal de desplazamientos

### 4. **Validación de Población y Recursos**
- Confirmar que la población descrita es plausible para la locación
- Validar disponibilidad de recursos necesarios
- Detectar superpoblación o escasez irrealista
- Verificar capacidad de sostenimiento

### 5. **Validación de Facciones y Control Territorial**
- Verificar que las facciones mencionadas tienen presencia realista en la zona
- Validar conflictos territoriales basados en intereses documentados
- Detectar incompatibilidades de control
- Confirmar coherencia con matriz de poder regional

### 6. **Curación de Mapas Mentales**
- Mantener actualizado el mapeo mental del mundo
- Sugerir ubicaciones alternativas cuando sea necesario
- Proporcionar orientación espacial clara
- Crear conexiones entre regiones distantes

## Base de Datos de Referencia

La skill operará con la **geographic-database.yml** ubicada en `.claude/database/geographic-database.yml` como fuente de verdad única.

### Estructura de Base de Datos
```
GLOBAL
├── Descripción climática y geopolítica
└── Continentes y poderes

CONFEDERACIÓN ARGENTINA
├── Ciudad Dársena (0,0)
├── República de Córdoba (-400,0)
├── Mendoza/Fuerte San Martín (-900,-100)
└── Otras 19 ciudad-estados

CIUDADES (Detalle Extenso)
├── Ciudad Dársena
│   ├── Zona Militar y Eclesiástica
│   ├── Microcentro
│   ├── Zona Centro
│   ├── Barrios del Norte
│   ├── Barrios del Muro
│   ├── Las Tuberías
│   └── Fuera del Muro
├── República Córdoba
└── Mendoza
```

## Métodos de Validación

### Validación Geométrica
- Verificación de distancias coordenadas: Calcular distancia Euclidiana entre puntos
- Verificación de zonas: Confirmar que ubicación está dentro de límites definidos
- Verificación de intersección: Detectar solapamiento de territorios

### Validación Climática
- Cross-check contra zona climática asignada
- Verificación de coherencia estacional
- Validación de fenómenos anómalos (Red Cloud, Zonda, etc.)

### Validación de Accesibilidad
- Verificación de rutas de acceso conocidas
- Detección de ubicaciones "atrapadas" sin salida
- Validación de tiempos de viaje realistas

### Validación Narrativa
- Verificación de coherencia con eventos cronológicos
- Validación contra descripciones de facciones
- Detección de anacrónismos o impossibilidades de trama

## Operaciones Comunes

### Al Crear Nueva Ubicación
```
1. Ubicar en coordenadas usando sistema relativo
2. Definir zona climática basada en región
3. Estimar población coherente con tamaño
4. Identificar facciones presentes
5. Conectar con ubicaciones vecinas
6. Validar accesibilidad desde puntos principales
7. Registrar en matriz de base de datos
8. Actualizar REFERENCE.md si es ubicación importante
```

### Al Validar Evento en Ubicación
```
1. Confirmar que ubicación existe en base de datos
2. Verificar condiciones climáticas del evento
3. Validar disponibilidad de recursos necesarios
4. Confirmar que facciones implicadas tienen acceso
5. Detectar anacrónismos de transporte/comunicación
6. Sugerir ajustes si hay incoherencias
```

### Al Crear Trayecto de Viaje
```
1. Calcular distancia directa entre puntos
2. Ajustar por terreno y obstáculos naturales
3. Estimar tiempo de viaje (velocidad x distancia)
4. Identificar puntos de peligro/oportunidad
5. Listar facciones que pueden interferir
6. Validar coherencia temporal con cronología
7. Sugerir rutas alternativas más seguras/rápidas
```

## Convenciones de Nomenclatura

### Ubicaciones
- **Ciudad-estado**: Nombre + "(Ciudad-estado)" ej: "Ciudad Dársena"
- **Zona intra-urbana**: Nombre descriptivo ej: "Zona Militar y Eclesiástica"
- **Barrio/Distrito**: Nombre + "Barrio/Zona/Distrito" ej: "Barrios del Muro"
- **Sublocación**: Tipo + nombre ej: "Fortaleza de la Luz", "Torre de Señales"

### Coordenadas
- **Formato**: (X, Y) o (X, Y, Profundidad) para subterráneo
- **Centro**: Dársena = (0, 0)
- **Dirección**: Oeste = X negativa, Este = X positiva, Sur = Y negativa, Norte = Y positiva
- **Escala**: 1 unidad ≈ 1 km (aproximado)

### Distancias y Tiempos
- **Pie**: ~5 km/día en terreno normal, ~3 km/día en terreno difícil
- **Caballo/Vehículo eléctrico**: ~40 km/día en carretera
- **Bote/Río**: ~20 km/día (variable por corriente)
- **Avión/Dirigible**: ~500 km/día (combustible limitado)

## Restricciones y Límites Identificados

### Dársena
- **Acceso limitado**: Solo entrada controlada por puerto y DMZ
- **Población máxima**: 5M habitantes (capacidad de Torres Hidropónicas)
- **Salida terrestre bloqueada**: Muro impide expansión occidental
- **Clima extremo**: Niebla perpetua, lluvia constante, visibilidad <200m
- **Clima**: Invierno 5-15°C, Verano 28-38°C (sensación térmica >45°C)

### Córdoba
- **Autosuficiencia**: No depende de comercio exterior significativo
- **Población**: 30M (máxima densidad soportable con infraestructura actual)
- **Clima moderado**: Continental, sin extremos de Dársena
- **Expansión terrestre**: Fronteras abiertas hacia Tierras Baldías
- **Aislamiento relativo**: Contacto limitado con poderes globales

### Mendoza
- **Altitud variable**: 500-2200 msnm
- **Agua escasa**: Deglaciación errática, dependencia de ríos cordilleranos
- **Clima árido**: Vientos Zonda intensos, precipitación mínima
- **Población limitada**: 2M máximo soportable
- **Aislamiento de altura**: Pasos andinos cerrados por nieve frecuentemente

### Las Tuberías
- **Profundidad máxima**: ~200m bajo Dársena
- **Densidad máxima**: Bajo Barrios del Muro
- **Luz artificial limitada**: LED reciclados, inadecuados
- **Control territorial difuso**: Bandas, auto-gobierno, anarquía
- **Acceso limitado**: Solo múltiples puntos en Barrios del Muro

### El Exterior
- **DMZ lethal**: Francotiradores mantienen zona despejada
- **Pantanos inhabitables**: Territorio sin ley, anómalo, desconocido
- **Tierras Baldías**: Territorio salvaje, nómadas, recursos escasos
- **Clima variable**: Desde árido hasta tropical según región

## Preguntas de Validación Rápida

Cuando se proponga nueva ubicación o evento, responder:
1. ¿Existe en base de datos? → Si no, ¿es plausible?
2. ¿Clima es coherente? → Verificar contra zona documentada
3. ¿Es accesible? → ¿Cómo se llega allí desde ubicación conocida?
4. ¿Qué facción controla? → Validar contra matriz de poder
5. ¿Población es realista? → Comparar con densidades conocidas
6. ¿Hay suficientes recursos? → Agua, comida, energía
7. ¿Viaje es posible? → Distancia realista vs. tiempo narrativo
8. ¿Hay solapamiento? → ¿Conflictúa con ubicación existente?

## Output Esperado

Cuando la skill es invocada, debe proporcionar:

### Validación Positiva
```
✓ Ubicación validada: [Nombre]
- Coordenadas: (X, Y)
- Zona climática: [Zona]
- Población estimada: [Rango]
- Facciones presentes: [Lista]
- Accesibilidad: [Descripción]
- Distancia a puntos clave: [Distancias]
```

### Validación con Observaciones
```
⚠ Ubicación parcialmente coherente: [Nombre]
- Observación 1: [Detalle]
- Observación 2: [Detalle]
- Sugerencia: [Recomendación]
```

### Validación Negativa
```
✗ Incoherencia detectada: [Nombre]
- Problema: [Descripción]
- Conflicto: [Con qué entra en conflicto]
- Solución sugerida: [Alternativa]
```

## Integración con Otros Skills

- **Character Architect**: Validar ubicación de residencia y accesibilidad a facciones
- **Faction Designer**: Validar territorios controlados y coherencia geográfica
- **Chronology Keeper**: Validar viajes contra velocidad y tiempo narrativo
- **Metadata Validator**: Validar campos `region` en YAML frontmatter
- **SyV Worldbuilding**: Consultar para coherencia narrativa general

## Notas de Implementación

### Archivo Base de Datos
- Ubicación: `.claude/database/geographic-database.yml`
- Formato: YAML estructurado jerárquicamente
- Actualización: Manual por worldbuilders, consultada por skill
- Validación: Checksums/hashes para detectar cambios

### Contexto de Ejecución
- La skill debe tener acceso a geographic-database.yml
- Debe tener acceso a REFERENCE.md para ubicaciones clave
- Debe consultar guía-de-tags.md para verificar tags geográficos
- Puede consultar cronología para validaciones temporales

### Mejoras Futuras
- Visualización de mapas de calor de densidad poblacional
- Cálculo de distancias de comercio multipasos
- Simulación de desplazamiento de facciones
- Integración con sistema de viajes
- Validación de rutas de contrabando

## Ejemplo de Uso

**Usuario**: Crear nueva ubicación: "Refugio de los Ermitaños" en las montañas cerca de Mendoza

**Skill Response**:
```
Validando nueva ubicación: Refugio de los Ermitaños

📍 Ubicación propuesta: Montañas cerca de Mendoza
- Coordenadas sugeridas: (-950, -200)
- Zona climática: Árido Andino, altitud 2500+ msnm
- Clima: Extremadamente hostil, nieve frecuente, vientos Zonda
- Población plausible: Muy pequeña (50-200 personas máximo)
- Aislamiento: Alto, acceso difícil salvo en verano
- Distancia a Uspallata: ~50 km (3-4 días a pie)
- Distancia a Mendoza: ~150 km (7-10 días a pie)

✓ Ubicación es COHERENTE y puede integrarse a canon
- Consistente con clima documentado de Mendoza
- Población realista para aislamiento extremo
- Accesible pero difícil (apropiado para "Ermitaños")
- No conflictúa con territorios existentes

Sugerencias:
- Confirmar que agua dulce está disponible (deglaciación)
- Considerar qué facción sabe de su existencia
- Evaluar si será punto de encuentro importante
- Actualizar geographic-database.yml con nueva entrada
```

---

*Última actualización: 2178*
*Creador: Geolocation Specialist Skill - SyV Worldbuilding*
