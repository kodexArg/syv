---
name: crear-ubicacion
description: Crear ubicación geográfica con descripción atmosférica, validación espacial y coherencia con clima y poblaciones
---

# Crear Ubicación

Crea nueva ubicación geográfica para el universo SyV garantizando **coherencia espacial y atmosférica**:
- **Sistema de coordenadas válido** (`.claude/database/geographic-database.yml`)
- **Clima coherente** (especial: Dársena = lluvia perpetua SIEMPRE)
- **Población realista** vs infraestructura
- **Facciones con presencia documentada**

---

## Información Requerida

Pregunta al usuario (7 campos):

1. **Nombre de la ubicación**
   - Ejemplo: "El Oasis", "Catacomba del Cardenal", "Faro del Este"

2. **Tipo de ubicación** (elegir UNO):
   - Ciudad: Asentamiento urbano (Dársena, Córdoba)
   - Distrito: Zona dentro ciudad (Barrio Norte, Isla Oriental)
   - Edificio: Estructura específica (Nueva Basílica, Cuartel)
   - Región: Área geográfica extensa (Marismas, Zona Exclusión)
   - Zona: Área temática (Sector 7 Túberías, etc.)

3. **Ubicación geográfica** (¿a qué ciudad pertenece?)
   - Validar contra: `2_atlas/ciudades/`
   - Ejemplo: "Las Túberías, Ciudad Dársena"

4. **Atmósfera/Clima** (descripción sensorial)
   - CRÍTICO para Dársena: LLUVIA PERPETUA siempre
   - Ejemplo: "Santuario neutral, iluminación suave"

5. **Habitantes principales** (demografía)
   - Quiénes viven/operan aquí
   - Ejemplo: "Refugiados, marginales, buscadores de paz"

6. **Período temporal** (¿cuándo existe?)
   - Actual (2178), histórica (año específico), o ambas
   - Validar contra cronología

7. **Facciones presentes** (control territorial)
   - Validar contra: `1_trasfondo/facciones/`
   - Ejemplo: "Zona neutral, Resistencia respeta, SIA ignora"

---

## Proceso Completo

### 1. Recopilación (Hacer 7 preguntas)

### 2. Validaciones
- ✓ Ubicación padre existe en atlas
- ✓ Facciones mencionadas existen
- ✓ Clima coherente (Dársena = lluvia)
- ✓ Período temporal válido
- ✓ Población vs infraestructura realista

### 3. Generación de Archivo
- **Nombre**: `[ubicacion-kebab].md`
- **Carpeta**: `2_atlas/ciudades/[ciudad]/` (o `2_atlas/regiones/`)
- **Metadatos YAML OBLIGATORIOS**:
  ```yaml
  titulo: [Nombre ubicación]
  carpeta: 2_atlas/ciudades/[ciudad]
  descripcion: [Atmósfera/primera impresión]
  tags: [ubicacion, ciudad, tipo, conceptos]
  region: "Dársena, Isla Oriental"
  ```

#### ⚠️ OBLIGACIÓN: Verificar `index.md`

**ANTES** de crear el archivo de ubicación:

1. **Verificar si la carpeta destino tiene `index.md`**
   - Si existe: continuar normalmente
   - Si NO existe: crear `index.md` primero con contenido narrativo apropiado

2. **Contenido mínimo del `index.md`**:
   ```markdown
   ---
   title: [Nombre Carpeta]
   sidebar:
     order: 1
   ---

   [2 párrafos describiendo qué tipo de ubicaciones contiene esta carpeta,
    siguiendo Canon de Estilo SyV: atmósfera sensorial, datos geográficos,
    terminología canónica]
   ```

3. **Ejemplo para `2_atlas/ciudades/darsena/index.md`**:
   - Ver archivo existente como referencia
   - Describir la capital de facto de la Confederación
   - Mencionar atmósfera característica (humedad, niebla, población)

**Validación**: El comando NO debe completarse si la carpeta destino carece de `index.md` válido.

### 4. Estructura de Contenido (Atmosférica)
1. **Introducción** - Qué es, dónde está, primera impresión
2. **Geografía** - Ubicación precisa, límites, características
3. **Clima** - Característico, fenómenos, sensaciones
4. **Población** - Quiénes, demografía, clases sociales
5. **Zonas Principales** - Subdivisiones si aplica
6. **Arquitectura** - Estilo, materiales, estado
7. **Atmósfera** - Detalles sensoriales (vista, sonido, olor, tacto)
8. **Facciones Presentes** - Control territorial, influencia
9. **Historia** - Breve, eventos importantes
10. **Datos Clave** - Tabla: población, período, tecnología, peligros

### 5. Post-Creación
- [Hook actualiza .claude/REFERENCE.md si ubicación principal Dársena]
- Validación automática de coherencia geográfica

---

## ⚠️ RESTRICCIONES CRÍTICAS

### CLIMA DÁRSENA (NUNCA EXCEPCIÓN)
```
Dársena SIEMPRE tiene:
- Lluvia perpetua, llovizna eterna
- Nubes constantes, humedad 90%+
- Goteo de sistemas de drenaje
- Fenómenos acuáticos característicos
```

### POBLACIÓN REALISTA (Máximos Documentados)
```
Dársena: 5M máximo (limitado Torres Hidropónicas)
Córdoba: 30M máximo (infraestructura actual)
Mendoza: 2M máximo (disponibilidad agua)
Túberías: 500k máximo (espacio subterráneo)

Validar: ¿infraestructura soporta población?
- Agua potable
- Alimento/Hidropónicas
- Espacio habitable
- Saneamiento
```

### DISTANCIAS Y VIAJES (NO MODIFICAR)
```
Velocidades:
- Pie (normal): 5 km/día
- Pie (difícil): 3 km/día
- Caballo: 40 km/día
- Aire: 500 km/día

Distancias canónicas:
- Dársena ↔ Córdoba: 400 km = 10 días caballo
- Córdoba ↔ Mendoza: 600 km = 15 días
- Dársena ↔ Marismas: 2 km
```

---

## Validaciones Ejecutadas

1. **Sistema de coordenadas**: Validar contra `.claude/database/geographic-database.yml`
2. **Facciones presentes**: Verificar control territorial válido
3. **Clima coherente**: Especial validación Dársena = lluvia SIEMPRE
4. **Población realista**: Vs infraestructura disponible
5. **Período temporal**: Validar existe en cronología
6. **Accesibilidad**: Rutas de acceso claras y realistas

---

## Referencias de Validación

| Archivo | Propósito |
|---------|----------|
| `.claude/database/geographic-database.yml` | Coordenadas, distancias, clima |
| `2_atlas/ciudades/` | Ubicaciones existentes |
| `1_trasfondo/facciones/` | Validar facciones presentes |
| `1_trasfondo/cronologia/cronologia.md` | Validar período |

---

## Output Esperado

```
✅ Ubicación creada: 2_atlas/ciudades/[ciudad]/[ubicacion-kebab].md
📍 Coordenadas: [x, y, profundidad]
📝 REFERENCE.md actualizado (si es ubicación principal Dársena)
```

---

**Skills consultados**: ubicaciones, metadatos, facciones, cronologia, worldbuilding
