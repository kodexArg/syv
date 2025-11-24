# Geolocation Specialist - Quick Reference

## Coordinadas Principales

```
                    NORTE
                      |
    OESTE -------- (0,0) -------- ESTE
     (-400,-100)    Dársena      (+200,0)
                      |
                    SUR
```

### Ciudades Clave
| Ubicación | Coordenadas | Población | Clima | Distancia a Dársena |
|-----------|-------------|-----------|-------|-------------------|
| Dársena | (0, 0) | 5M | Litoral Húmedo | - |
| Córdoba | (-400, 0) | 30M | Continental | 400 km |
| Mendoza | (-900, -100) | 2M | Árido Andino | 1000+ km |

## Zonas de Dársena

| Zona | Coordenadas | Población | Tipo | Descripción |
|------|-------------|-----------|------|-------------|
| Isla Oriental | (2, 2) | 200k | Poder | Militar + Religioso (restringido) |
| Microcentro | (-1, 0) | 300k + 1M | Comercio | Admin + Comercio |
| Zona Centro | (0.5, -1) | 300k + 1M | Producción | Alimentos + Educación |
| Barrio Norte | (1, 2) | 50k | Élite | Residencial de lujo |
| Barrios del Muro | (-2, -1.5) | 3.5M | Trabajadores | Superpoblado |
| Tuberías | (-1.5, -1.5, -150m) | 500k | Subterráneo | Sin ley |
| Fuera del Muro | Varios | 150k | Exterior | Caótico |

## Climas por Zona

### Dársena (Litoral Húmedo)
- **Verano**: 28-38°C (sensación >45°C), 80-100% humedad, lluvia torrencial
- **Invierno**: 5-15°C, lluvia fina constante, visibilidad <100m
- **Característica**: Niebla perpetua, corrosión metálica

### Córdoba (Continental)
- **Verano**: 25-40°C, tormentas violentas
- **Invierno**: 0-15°C, heladas nocturnas, días soleados
- **Característica**: Más seco, variación extrema

### Mendoza (Árido Andino)
- **Verano**: 15-28°C (días), 5-10°C (noches), amplitud extrema
- **Invierno**: Frío variable según altitud
- **Característica**: Viento Zonda, agua escasa

## Distancias Aproximadas

| Ruta | Distancia | A Pie | Caballo | Vehículo |
|------|-----------|-------|---------|----------|
| Dársena ↔ Córdoba | 400 km | 80 días | 10 días | 5-8 días |
| Córdoba ↔ Mendoza | 600 km | 120 días | 15 días | 10-12 días |
| Dársena ↔ Mendoza | 1000+ km | 200+ días | 25+ días | 20+ días |
| Dársena → Pantanos | 200+ km | 40+ días | 5+ días | - |
| Dársena → El Cráter | 50 km | 10 días | 1 día | Lethal |

## Poblaciones Límite Máxima

| Ubicación | Máximo | Limitante |
|-----------|---------|-----------|
| Dársena | 5M | Torres Hidropónicas |
| Córdoba | 30M | Infraestructura industrial |
| Mendoza | 2M | Disponibilidad de agua |
| Las Tuberías | 500k | Espacio subterráneo |

## Control Territorial por Facción

### Dársena
- **Iglesia**: Zona Militar-Eclesiástica, educación, salud
- **Armada Argentina**: Puerto, comercio, logística naval
- **Gremio de Comercio**: Microcentro, mercados, distribución
- **Proscritas**: Tuberías, Barrios del Muro (clandestino)

### Córdoba
- **Dictadura Videla**: Gobierno centralizado
- **Ejército**: Control militar total
- **Esclavitud**: Zonas industriales y agrícolas

### Mendoza
- **Gobernación Militar-Civil**: Control compartido
- **Autonomía relativa**: Semi-independiente de poderes principales

## Fenómenos Ambientales Especiales

### Nube Roja
- Partículas estratosféricas reflectantes globales
- Reduce luz solar, tinte rojizo/anaranjado
- Presente en todo el mundo, variable por región

### Zonda (Mendoza)
- Viento cálido, seco, polvoriento
- Recurrente e intensificado
- Extremadamente peligroso

### Los Pantanos
- Marismas, ruinas anegadas, vegetación mutada
- Considera "inhabitables"
- Reportes de criaturas anómalas (no confirmado)

### DMZ Dársena
- Zona despejada al oeste del muro
- Francotiradores mantienen zona letal
- Radiación residual posible

## Velocidades de Desplazamiento

- **Pie (terreno normal)**: 5 km/día (~8 horas)
- **Pie (terreno difícil)**: 3 km/día (montaña, pantanos)
- **Caballo/Vehículo eléctrico**: 40 km/día (ruta conocida)
- **Bote/Río**: 20 km/día (variable por corriente)
- **Aire (dirigible/avión)**: 500 km/día (combustible limitado)

## Restricciones de Acceso

### Dársena
- ✓ Puerto sur (controlado)
- ✓ Puertos Exo-Muro (comercio)
- ✓ DMZ oeste (letal, muy restringido)
- ✗ Muro perimetral (impenetrable)
- ✗ El Cráter (prohibido, zona muerta)

### Córdoba
- ✓ Fronteras terrestres (vigiladas)
- ✓ Comercio aéreo limitado
- ✓ Expansión hacia Tierras Baldías (controlada)

### Mendoza
- ✓ Pasos andinos (cerrados seasonalmente)
- ✓ Rutas fluviales (deglaciación variable)
- ✗ Profundidad andina (inexplorada)

## Poblamiento Típico por Zona

| Densidad | Zona | Descripción |
|----------|------|-------------|
| Extrema (>50k/km²) | Barrios del Muro | 700k/km² |
| Alta (10-50k/km²) | Microcentro, Zona Centro | ~60k/km² |
| Moderada (1-10k/km²) | Barrio Norte, Isla Oriental | ~50k/km² |
| Baja (<1k/km²) | Fuera del Muro | Disperso |
| Subterránea | Las Tuberías | ~16k/km² (cálculo aproximado) |

## Preguntas Rápidas de Validación

1. ¿**Existe?** ← Verificar en geographic-database.yml
2. ¿**Coordenadas coherentes?** ← Validar contra sistema relativo
3. ¿**Clima plausible?** ← Comparar con zona documentada
4. ¿**Población realista?** ← Checar contra densidad máxima
5. ¿**Accesible?** ← Listar ruta desde punto conocido
6. ¿**Facción presente?** ← Validar control territorial
7. ¿**Viaje es posible?** ← Calcular tiempo vs. cronología
8. ¿**Sin solapamiento?** ← Verificar contra ubicaciones vecinas

## Archivos de Referencia

- **Base de datos completa**: `.claude/database/geographic-database.yml`
- **Especificación skill**: `.claude/skills/geolocation-specialist/SKILL.md`
- **Instrucciones detalladas**: `.claude/instructions/geolocation-specialist.md`
- **REFERENCE.md**: `.claude/REFERENCE.md` (ubicaciones clave)
- **Guía de tags**: `.claude/guides/guia-de-tags.md` (tags geográficos)

## Casos de Uso Típicos

### Crear Nueva Ubicación
```
1. Proponer nombre y descripción
2. Asignar coordenadas relativas a (0,0)
3. Determinar zona climática
4. Estimar población realista
5. Identificar facciones presentes
6. Validar accesibilidad
7. Registrar en base de datos
```

### Validar Evento en Ubicación
```
1. Confirmar ubicación existe
2. Verificar clima del evento
3. Validar recursos disponibles
4. Confirmar facciones tienen acceso
5. Detectar anacrónismos
6. Sugerir ajustes si necesario
```

### Trazar Ruta de Viaje
```
1. Calcular distancia coordenadas
2. Ajustar por terreno
3. Estimar tiempo total
4. Identificar peligros en ruta
5. Listar facciones que pueden interferir
6. Validar contra cronología
```

---

*Referencia rápida para Geolocation Specialist*
*Última actualización: 2178*
