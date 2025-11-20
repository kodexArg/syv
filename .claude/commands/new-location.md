---
name: new-location
description: Crear ubicación con descripción atmosférica y conexiones geográficas
---

# Crear Nueva Ubicación

Genera descripción atmosférica de ubicación con detalles sensoriales y conexiones geográficas.

## Información Requerida

1. **Nombre de la ubicación**
2. **Tipo**: Ciudad / Distrito / Edificio / Región / Zona
3. **Ubicación geográfica**: ej. Dársena, Córdoba, Zona de Exclusión
4. **Atmósfera/Clima** (breve descripción)
5. **Habitantes principales** (quiénes viven/operan allí)
6. **Período temporal** (si es histórica: cuándo existió/existe)

## Proceso

1. **Recopilar información** del usuario
2. **Determinar carpeta**:
   - Ciudades: `2_atlas/ciudades/[nombre-ciudad]/`
   - Regiones: `2_atlas/regiones/`
   - Tecnología/Ciencia: `2_atlas/tecnologia-y-ciencia/`
3. **Generar archivo**: `[nombre-ubicacion-kebab].md`
4. **Crear contenido**:

```yaml
---
titulo: [Nombre Ubicación]
carpeta: 2_atlas/[tipo]/[ciudad]
descripcion: [Breve descripción atmosférica]
tags:
  - atlas
  - [ciudad]
  - [tipo]
region: [Región, Subregión, Lugar Específico]
---

# [Nombre Ubicación]

[Introducción atmosférica: qué es, dónde está, primera impresión]

## Geografía

[Ubicación precisa, límites, características geográficas físicas]

## Clima

[Clima característico, fenómenos meteorológicos, sensaciones]

## Población

[Quiénes viven aquí, demografía, clases sociales]

## Zonas Principales

[Subdivisiones si aplica]

## Arquitectura

[Estilo de edificios, materiales, estado de construcciones]

## Atmósfera

[Detalles sensoriales: sonidos, olores, iluminación, sensaciones]

## Facciones Presentes

[Qué facciones operan aquí, control territorial]

## Historia

[Breve historia de la ubicación, eventos importantes]
```

5. **Enriquecer con detalles**:
   - Detalles sensoriales (qué se ve, escucha, huele)
   - Atmósfera específica (opresiva, vibrante, desolada)
   - Conexiones con personajes/facciones
   - Peligros o controles (SIA, bandas, etc.)

6. **Sugerir conexiones**:
   - Facciones que operan allí
   - Personajes asociados
   - Eventos históricos ocurridos

## Validaciones

- ✅ Campo `region` apropiado (jerarquía geográfica)
- ✅ Tags de ubicación correctos
- ✅ Clima coherente (Dársena: lluvia perpetua)
- ✅ Tecnología apropiada para el año (si especificado)
- ✅ Facciones mencionadas existen

## Ejemplo: Zona de Dársena

Usuario solicita:
- Nombre: El Oasis
- Tipo: Zona (dentro de Túberías)
- Ubicación: Las Túberías, Ciudad Dársena
- Atmósfera: Santuario neutral, iluminación suave
- Habitantes: Refugiados, marginales, buscadores de paz
- Período: Actualidad (2178)

Output: Archivo `2_atlas/ciudades/darsena/el-oasis.md`

Contenido incluye:
- Ubicación en profundidades de Túberías
- Acceso por túneles del viejo metro Línea B
- Iluminación por lámparas de aceite (48V escaso)
- Atmósfera: Contraste con caos circundante, reglas estrictas de neutralidad
- Población: ~500 personas, sin afiliación a bandas
- Control: Ancianos que mantienen paz
- Facciones: Zona neutral, Resistencia respeta, Traficantes evitan
- Sonidos: Goteo constante, murmullos bajos, campanilla de entrada
- Olor: Incienso (oculta humedad), comida simple
