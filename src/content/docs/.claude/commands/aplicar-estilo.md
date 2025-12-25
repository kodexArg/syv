---
name: aplicar-estilo
description: Aplicar Canon de Estilo SyV (13 reglas) a texto nuevo o existente - proporción áurea, elipsis emocional, sincretismo léxico
---

# Aplicar Estilo Literario

Aplica el **Canon de Estilo de Subordinación y Valor** (13 reglas) a texto narrativo para garantizar coherencia estilística con el universo.

---

## Flujo de Trabajo

### 1. Identificar Texto Objetivo

**Opciones:**
- **A) Texto existente**: Proporciona ruta del archivo o pega el texto a mejorar
- **B) Texto nuevo**: Describe la escena/descripción que quieres escribir

### 2. Determinar Tipo de Contenido

El comando preguntará:

**¿Qué tipo de contenido es?**
- Relato/Escena narrativa
- Descripción de personaje (Aspecto/Personalidad)
- Descripción de ubicación (atmósfera)
- Descripción de facción (métodos/operaciones)
- Diálogo/Acción
- Texto técnico/archivístico

### 3. Seleccionar Reglas a Aplicar

**Aplicación automática según tipo:**

**Relato/Escena:**
- ✅ Regla 0, 11, 12 (Fibonacci en oraciones y párrafos)
- ✅ Regla 1 (Elipsis emocional)
- ✅ Regla 2 (Objetos con peso)
- ✅ Regla 4 (Sincretismo léxico)
- ✅ Regla 8 (Metáforas biopunk)
- ✅ Regla 9 (Atmósfera sensorial)

**Descripción de Personaje:**
- ✅ Regla 1 (Síntomas físicos, no emociones)
- ✅ Regla 2 (Objetos personales con marca)
- ✅ Regla 6 (Afirmación constante)
- ✅ Regla 7 (Sustantivos potentes)

**Descripción de Ubicación:**
- ✅ Regla 2 (Arquitectura con desgaste)
- ✅ Regla 6 (Afirmación de lo presente)
- ✅ Regla 8 (Metáforas biopunk para estructuras)
- ✅ Regla 9 (Datos sensoriales: olor, sonido, tacto)

**Diálogo/Acción:**
- ✅ Regla 3 (El Remate - cierre violento)
- ✅ Regla 5 (Voseo culto rioplatense)
- ✅ Regla 7 (Lenguaje directo)
- ✅ Regla 0 con oraciones cortas (3-5-8)

**Texto Técnico:**
- ✅ Regla 4 (Sincretismo moderado)
- ✅ Regla 10 (Terminología exacta)
- ⚠️ Fibonacci flexible

### 4. Aplicación del Canon

El comando ejecutará:

**Fase Micro (Oraciones):**
1. Contar palabras por oración
2. Reorganizar para secuencia Fibonacci (3-5-8-13-21)
3. Reemplazar emociones abstractas por síntomas físicos
4. Dotar objetos de peso/marca/desgaste
5. Convertir negaciones en afirmaciones
6. Eliminar adjetivos ornamentales, buscar sustantivo potente
7. Aplicar sincretismo léxico donde corresponda

**Fase Macro (Párrafos):**
1. Verificar progresión de masa visual (1 → 2 → 3)
2. Aplicar "El Remate" si es secuencia de acción/tensión
3. Validar metáforas sean solo biopunk

**Fase Validación:**
1. ¿Voseo integrado naturalmente?
2. ¿Terminología canónica correcta?
3. ¿Atmósfera con datos sensoriales?

### 5. Resultado

El comando devolverá:

**A) Texto mejorado** con canon aplicado

**B) Análisis de cambios** mostrando:
- Reglas aplicadas
- Secuencia Fibonacci detectada
- Emociones reemplazadas por síntomas
- Sincretismo léxico agregado
- Metáforas ajustadas

**C) Métricas:**
- Longitud de oraciones: [3, 5, 8, 13...]
- Masa de párrafos: [corto, mediano, largo]
- Conteo de reglas aplicadas

---

## Ejemplo de Uso

### Entrada (Texto Original):
```
El detective estaba nervioso cuando entró a la iglesia grande. Había mucha tecnología religiosa que no entendía. La situación no era buena.
```

### Salida (Con Canon Aplicado):

**Texto mejorado:**
```
El Sabueso se llevó la mano al cuello. (8)

La nave central de la Basílica se extendía como un túnel de costillas de piedra y acero. (17)

Los servidores del altar zumbaban con un canto de ventiladores industriales, procesando las confesiones digitales que subían desde los reclinatorios con bio-interfaz. El incienso electrónico —ozono puro generado por los purificadores— se mezclaba con el olor a grasa de los motores que accionaban las campanas automáticas. Damián sabía que cada paso activaba sensores de movimiento conectados a la red de vigilancia de la Curia. (71)

Quilombo. (1 - Remate)
```

**Análisis:**
- ✅ Regla 0: Progresión 8 → 17 → 71 → 1
- ✅ Regla 1: "nervioso" → "se llevó la mano al cuello" (síntoma físico)
- ✅ Regla 4: Sincretismo léxico ("canto de ventiladores", "confesiones digitales", "incienso electrónico")
- ✅ Regla 5: Voseo ("Quilombo")
- ✅ Regla 6: "no era buena" → descripción afirmativa
- ✅ Regla 8: Metáfora biopunk ("túnel de costillas")
- ✅ Regla 9: Datos sensoriales (zumbido, olor a ozono y grasa)
- ✅ Regla 10: Terminología canónica (Basílica, Curia, Sabueso)
- ✅ Regla 12: Arquitectura de bloques (corto → mediano → largo → remate)

**Métricas:**
- Oraciones: 8, 17, 71, 1 palabras (Fibonacci con remate)
- Párrafos: corto, mediano, largo, remate
- Reglas aplicadas: 9 de 13

---

## Restricciones del Comando

### ✅ HACER:
- Respetar intención narrativa original
- Mantener información factual intacta
- Mejorar estilo sin cambiar hechos
- Sugerir alternativas cuando haya múltiples opciones válidas

### ❌ NO HACER:
- Cambiar hechos canónicos establecidos
- Inventar información no presente en el original
- Forzar Fibonacci si rompe claridad
- Sobre-aplicar sincretismo (solo donde sea natural)

### ⚠️ ADVERTENCIAS:
- Diálogos no requieren Fibonacci interno
- Textos técnicos pueden tener Fibonacci flexible
- "El Remate" solo al final de secuencia de tensión
- Voseo debe sonar natural, no caricaturesco

---

## Comandos Relacionados

- `/revisar-estilo` - Validar cumplimiento de canon sin modificar texto
- `/validar-canon` - Validar coherencia narrativa completa

---

## Skill Subyacente

Este comando utiliza el skill `estilo-literario` que contiene las 13 reglas completas con ejemplos canónicos.

Ver: `.claude/skills/estilo-literario/SKILL.md`
