---
name: suggest-tags
description: Analizar contenido y sugerir tags relevantes (existentes primero, nuevos después)
---

# Sugerir Tags

Analiza contenido de archivo y sugiere tags relevantes, priorizando tags existentes en el corpus.

## Input

- Archivo específico: `/suggest-tags ruta/al/archivo.md`
- O archivo actual en edición

## Proceso

### 1. LEER CONTENIDO
- Extraer texto completo del archivo
- Identificar tipo (personaje/facción/cronología/relato/etc.)
- Detectar ubicación (carpeta)

### 2. IDENTIFICAR MENCIONES

**Ubicaciones**:
- Ciudades: darsena, cordoba, mendoza, el-paramo
- Zonas Dársena: tuberias, barrios-del-muro, barrio-norte, microcentro
- Lugares: nueva-basilica, crater, zona-exclusion

**Personajes**:
- Detectar nombres propios mencionados
- Formato: nombre-apellido (ej: damian-diconte)

**Facciones**:
- sia, arpistas, guardianes, ejercito, armada, iglesia
- resistencia, umbanda, criptografos

**Conceptos**:
- anatema-mecanico, qia, herejia, tecnologia-prohibida
- fin-de-los-secretos, gran-guerra, meteorito

**Años/Períodos**:
- Detectar años mencionados (2020-2178)
- Períodos: caos, gran-guerra, edad-oscura, actualidad-2178

**Tipo de documento**:
- cronologia, relato, carta, cronica, diario
- faccion, personaje, arquetipo
- atlas, tecnologia, aventura

### 3. BUSCAR TAGS EXISTENTES

Priorizar tags que YA existen en corpus:
- Leer archivos similares en misma carpeta
- Buscar patterns comunes
- Mantener consistencia

### 4. GENERAR LISTA SUGERIDA

Ordenar por prioridad:

```
📌 TAGS SUGERIDOS PARA: [archivo]

✅ TAGS EXISTENTES (usar estos):
- [tag-existente-1] (usado en X archivos)
- [tag-existente-2] (usado en Y archivos)

💡 TAGS NUEVOS (solo si necesarios):
- [tag-nuevo-1] ⚠️ Verificar si realmente necesario
- [tag-nuevo-2] ⚠️ Podría usar 'tag-existente-3' en su lugar

❌ NO USAR (demasiado genéricos):
- personaje (obvio por carpeta)
- importante (subjetivo)
- historia (demasiado amplio)

🔧 TAGS RECOMENDADOS (final):
tags:
  - [lista-final-sugerida]
```

## Categorías de Tags

### Por Ubicación
```
darsena, tuberias, barrios-del-muro, barrio-norte
microcentro, zona-centro, isla-oriental
cordoba, mendoza, el-paramo
crater, zona-exclusion
```

### Por Personaje (formato: nombre-apellido)
```
damian-diconte, francisco-de-la-cruz, padre-rafa
monsenor-miguel, hermana-superior-maria
```

### Por Facción
```
sia, iglesia, arpistas, guardianes
ejercito, armada, prefectura
resistencia, umbanda, criptografos
```

### Por Concepto
```
anatema-mecanico, qia, herejia
fin-de-los-secretos, gran-guerra, meteorito
corpus-licitus, tecnologia-prohibida
```

### Por Período
```
anos-del-caos, gran-guerra, fin-de-los-secretos
edad-oscura, confederacion-temprana, actualidad-2178
```

### Por Tipo
```
cronologia, relato, carta, cronica, diario
faccion, personaje, arquetipo
atlas, aventura, guia
```

## Validaciones

- ✅ Tags en kebab-case minúsculas
- ✅ Priorizar existentes sobre nuevos
- ✅ Máximo 8-10 tags (evitar saturación)
- ❌ Tags demasiado genéricos
- ❌ Tags redundantes (ej: `darsena` + `ciudad-darsena`)
- ❌ Tags con mayúsculas o espacios

## Ejemplo

Archivo: `3_personajes/principales/capitan-romero.md`
Contenido menciona: Armada, Dársena, Arpistas, doble agente, 2178

Output:
```
📌 TAGS SUGERIDOS

✅ EXISTENTES:
- armada (usado en 5 archivos)
- darsena (usado en 23 archivos)
- arpistas (usado en 8 archivos)
- actualidad-2178 (usado en 12 archivos)

💡 NUEVOS:
- capitan-romero (nombre del personaje)
- doble-agente (concepto específico)

🔧 TAGS RECOMENDADOS:
tags:
  - capitan-romero
  - armada
  - darsena
  - arpistas
  - doble-agente
  - actualidad-2178
```
