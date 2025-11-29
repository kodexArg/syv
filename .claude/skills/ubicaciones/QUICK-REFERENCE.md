# Geolocation Specialist - Quick Reference

## Coordinadas Principales

```
                    NORTE
                      |
    OESTE -------- (0,0) -------- ESTE
   Fuerte San Martín  Dársena      (+200,0)
   (-960, 190)        |
                    SUR
```

### Ciudades Clave
| Ubicación | Coordenadas | Población | Clima | Distancia a Dársena |
|-----------|-------------|-----------|-------|-------------------|
| Dársena | (0, 0) | 5M | Litoral Húmedo | - |
| Córdoba | (-530, 350) | 30M | Continental | 700 km |
| Fuerte San Martín | (-960, 190) | 2M | Árido Andino | 1050 km |

## Zonas de Dársena

| Zona | Coordenadas | Población | Tipo | Descripción |
|------|-------------|-----------|------|-------------|
| Dársena Oriental | (2, 2) | 200k | Poder | ZDM FFAA + Catedral + Barrios Exclusivos (Las Gaviotas, Los Patos) |
| Centro Cívico | (-0.5, 0) | 300k | Admin | Gobierno y Administración |
| Puerto Madero | (0.5, -1) | 500k | Comercio | Puerto y zona comercial |
| Bº Norte | (1, 2) | 50k | Élite | Residencial de lujo |
| Barrios del Muro | (-2, -1.5) | 3.5M | Trabajadores | Superpoblado, pegado al muro oeste |
| ZDM Fuerza Aérea | (-1, 3) | 50k | Militar | Base aérea norte |
| Tuberías | (-1.5, -1.5, -150m) | 500k | Subterráneo | Sin ley |
| Fuera del Muro | Varios | 150k | Exterior | Caótico (Tierras Baldías) |

## Climas por Zona

### Dársena (Litoral Húmedo)
- **Verano**: 28-38°C (sensación >45°C), 80-100% humedad, lluvia torrencial
- **Invierno**: 5-15°C, lluvia fina constante, visibilidad <100m
- **Característica**: Niebla perpetua, corrosión metálica

### Córdoba (Continental)
- **Verano**: 25-40°C, tormentas violentas
- **Invierno**: 0-15°C, heladas nocturnas, días soleados
- **Característica**: Más seco, variación extrema

### Fuerte San Martín (Mendoza)
- **Verano**: 15-28°C (días), 5-10°C (noches), amplitud extrema
- **Invierno**: Frío variable según altitud
- **Característica**: Viento Zonda, agua escasa

## Distancias Aproximadas

| Ruta | Distancia | A Pie | Caballo | Vehículo |
|------|-----------|-------|---------|----------|
| Dársena ↔ Córdoba | 700 km | 140 días | 18 días | 12-15 días |
| Córdoba ↔ Fuerte San Martín | 600 km | 120 días | 15 días | 10-12 días |
| Dársena ↔ Fuerte San Martín | 1050 km | 210 días | 26 días | 20-22 días |
| Dársena → Marismas de Sangre | 2 km | 1 hora | - | - |
| Dársena → Gran Cráter (ZDM) | 3 km | 2 horas | - | Lethal |

## Poblaciones Límite Máxima

| Ubicación | Máximo | Limitante |
|-----------|---------|-----------|
| Dársena | 5M | Torres Hidropónicas |
## Poblamiento Típico por Zona

| Densidad | Zona | Descripción |
|----------|------|-------------|
| Extrema (>50k/km²) | Barrios del Muro | 700k/km² |
| Alta (10-50k/km²) | Centro Cívico, Puerto Madero | ~60k/km² |
| Moderada (1-10k/km²) | Bº Norte, Dársena Oriental | ~50k/km² |
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
