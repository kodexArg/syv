---
name: revisar-estilo
description: Validar cumplimiento del Canon de Estilo SyV (13 reglas) en texto existente - diagnóstico sin modificación
---

# Revisar Estilo Literario

Valida cumplimiento del **Canon de Estilo de Subordinación y Valor** en texto existente. Genera diagnóstico detallado SIN modificar el contenido original.

---

## Flujo de Trabajo

### 1. Proporcionar Texto a Revisar

**Opciones:**
- **A) Archivo**: Proporciona ruta (ejemplo: `4_diegesis/relatos/la-llegada-del-sabueso.md`)
- **B) Fragmento**: Pega el texto directamente
- **C) Sección específica**: Indica archivo y rango de líneas

### 2. Seleccionar Nivel de Análisis

**Opciones:**
- **Rápido**: Solo reglas críticas (0, 1, 4, 6, 10)
- **Completo**: Las 13 reglas con métricas detalladas
- **Regla específica**: Validar solo una regla (ejemplo: "solo Regla 8 - metáforas")

### 3. Análisis Ejecutado

El comando analizará:

#### **I. Ley Primordial (Regla 0)**
- ✅ Conteo de palabras por oración
- ✅ Detección de secuencia Fibonacci
- ❌ Identificación de saltos arbitrarios
- 📊 Gráfico de progresión

#### **II. Micro-Arquitectura (Reglas 1-10)**
- ✅ **Regla 1**: ¿Emociones abstractas nombradas?
- ✅ **Regla 2**: ¿Objetos con peso/marca/desgaste?
- ✅ **Regla 3**: ¿Uso de "El Remate"?
- ✅ **Regla 4**: ¿Sincretismo léxico presente?
- ✅ **Regla 5**: ¿Voseo rioplatense integrado?
- ✅ **Regla 6**: ¿Negaciones descriptivas?
- ✅ **Regla 7**: ¿Adjetivos ornamentales?
- ✅ **Regla 8**: ¿Metáforas no-biopunk?
- ✅ **Regla 9**: ¿Datos sensoriales vs opiniones?
- ✅ **Regla 10**: ¿Terminología canónica correcta?

#### **III. Macro-Arquitectura (Reglas 11-12)**
- ✅ **Regla 11**: Fibonacci dentro de párrafos
- ✅ **Regla 12**: Masa visual de bloques (1→2→3)

### 4. Resultado del Diagnóstico

El comando devolverá:

---

### **DIAGNÓSTICO DE ESTILO**

#### **Cumplimiento General**
```
✅ Aprobado: 9/13 reglas
⚠️ Advertencias: 3/13 reglas
❌ Violaciones: 1/13 reglas

Calificación: B+ (70-85%)
```

#### **Análisis Detallado**

**Regla 0 (Fibonacci): ⚠️ ADVERTENCIA**
```
Secuencia detectada: [3, 5, 22, 4, 18]
                           ↑ Salto abrupto (5→22 sin transición)
                                    ↑ Quiebre (22→4 sin razón estilística)

Sugerencia: Dividir oración larga (22 palabras) en dos (≈11 + 11)
```

**Regla 1 (Elipsis): ✅ APROBADO**
```
✅ No se detectaron emociones abstractas nombradas
✅ Síntomas físicos usados: "se llevó la mano al cuello", "tamborileó los dedos"
```

**Regla 4 (Sincretismo): ✅ APROBADO**
```
✅ Ejemplos detectados:
   - "canto de ventiladores" (tecnología → liturgia)
   - "confesiones digitales" (religión → tecnología)
   - "novena de compilación" (liturgia → tecnología)
```

**Regla 6 (Afirmación): ❌ VIOLACIÓN**
```
❌ Negaciones descriptivas encontradas (2):
   - Línea 15: "no mostraba emociones"
     Sugerencia: "Su rostro era una máscara de piedra"

   - Línea 23: "no podía oír nada"
     Sugerencia: "El estruendo de las turbinas colmaba la nave"
```

**Regla 8 (Metáforas Biopunk): ⚠️ ADVERTENCIA**
```
✅ Biopunk válidas (2):
   - "cables como tendones expuestos"
   - "túnel de costillas de piedra"

⚠️ No-biopunk detectadas (1):
   - Línea 34: "brillaba como el sol"
     Sugerencia: Eliminar o reemplazar por metáfora biopunk
```

**Regla 10 (Terminología): ✅ APROBADO**
```
✅ Términos canónicos usados correctamente:
   - Guardia de Dársena ✓
   - Sagrada Inquisición Argentina (SIA) ✓
   - Traficantes de Almas ✓
   - Microcentro ✓

⚠️ Término informal detectado:
   - Línea 45: "los policías" → Sugerencia: "la Guardia" o "los gendarmes"
```

**Regla 12 (Arquitectura de Bloques): ⚠️ ADVERTENCIA**
```
Masa de párrafos detectada:
[Largo: 85 palabras] → [Corto: 12 palabras] → [Largo: 92 palabras]

⚠️ Quiebre de progresión: Largo→Corto→Largo (esperado: Corto→Mediano→Largo)
Sugerencia: Reorganizar o agregar párrafo mediano de transición
```

---

#### **Métricas Generales**

**Longitud de Oraciones:**
```
Media: 14 palabras
Rango: 3-34 palabras
Distribución Fibonacci: 62% (esperado: >75%)
```

**Longitud de Párrafos:**
```
Total párrafos: 5
Cortos (< 30 palabras): 2
Medianos (30-70 palabras): 1
Largos (> 70 palabras): 2
Progresión detectada: Irregular
```

**Sincretismo Léxico:**
```
Densidad: 1.2 instancias por párrafo (óptimo: 1-2)
Calidad: Alta (términos naturales, no forzados)
```

**Voseo Rioplatense:**
```
Presente: Sí
Frecuencia: 3 instancias
Naturalidad: Alta (no caricaturesco)
```

---

#### **Recomendaciones Prioritarias**

1. **CRÍTICO**: Eliminar negaciones descriptivas (Regla 6)
   - Reemplazar 2 instancias con afirmaciones positivas

2. **IMPORTANTE**: Suavizar saltos Fibonacci (Regla 0)
   - Dividir oración de 22 palabras
   - Evitar quiebre 22→4

3. **MENOR**: Ajustar metáfora no-biopunk (Regla 8)
   - Línea 34: "brillaba como el sol"

4. **ESTILÍSTICO**: Reorganizar arquitectura de bloques (Regla 12)
   - Considerar progresión más clara: Corto→Mediano→Largo

---

### **Fragmentos Ejemplares**

**✅ Ejemplo de Canon Aplicado Correctamente:**
```
El Sabueso se llevó la mano al cuello. (8)
La nave de la Basílica se extendía como un túnel de costillas. (12)
Los servidores del altar zumbaban con un canto de ventiladores industriales. (12)
```
- ✅ Fibonacci: 8→12→12
- ✅ Elipsis emocional: "se llevó la mano al cuello"
- ✅ Metáfora biopunk: "túnel de costillas"
- ✅ Sincretismo: "canto de ventiladores"

---

### **Calificación por Regla**

| Regla | Estado | Cumplimiento |
|-------|--------|--------------|
| 0. Fibonacci | ⚠️ | 62% |
| 1. Elipsis | ✅ | 100% |
| 2. Objetos | ✅ | 95% |
| 3. Remate | ✅ | 100% |
| 4. Sincretismo | ✅ | 90% |
| 5. Voseo | ✅ | 85% |
| 6. Afirmación | ❌ | 40% |
| 7. Palabra Única | ✅ | 80% |
| 8. Metáforas | ⚠️ | 67% |
| 9. Atmósfera | ✅ | 90% |
| 10. Terminología | ✅ | 95% |
| 11. Espiral | ⚠️ | 65% |
| 12. Bloques | ⚠️ | 50% |

**TOTAL: 78% - Calificación B+**

---

## Niveles de Severidad

### ✅ APROBADO (>80%)
Cumplimiento excelente. No requiere cambios.

### ⚠️ ADVERTENCIA (50-80%)
Cumplimiento aceptable. Mejoras opcionales sugeridas.

### ❌ VIOLACIÓN (<50%)
Cumplimiento insuficiente. Corrección recomendada.

---

## Opciones Adicionales

### Modo Comparativo
Compara dos versiones del mismo texto:
```
/revisar-estilo --comparar archivo-v1.md archivo-v2.md
```

### Exportar Reporte
Genera archivo markdown con diagnóstico completo:
```
/revisar-estilo --exportar reporte-estilo.md
```

### Regla Específica
Valida solo una regla:
```
/revisar-estilo --regla 8  # Solo metáforas
/revisar-estilo --regla 0  # Solo Fibonacci
```

---

## Diferencia con `/aplicar-estilo`

| Característica | `/revisar-estilo` | `/aplicar-estilo` |
|----------------|-------------------|-------------------|
| **Función** | Diagnóstico | Corrección |
| **Modifica texto** | ❌ No | ✅ Sí |
| **Genera métricas** | ✅ Sí | ✅ Sí |
| **Sugerencias** | ✅ Sí | ✅ Aplicadas |
| **Uso ideal** | Validación | Mejora activa |

---

## Casos de Uso

### 1. Pre-publicación
Validar relato antes de commit:
```
/revisar-estilo 4_diegesis/relatos/mi-nuevo-relato.md
```

### 2. Auditoría de Corpus
Revisar textos existentes en lote:
```
/revisar-estilo 4_diegesis/relatos/*.md --exportar auditoria.md
```

### 3. Aprendizaje
Entender qué reglas dominas y cuáles mejorar:
```
/revisar-estilo mi-texto.md --completo
```

### 4. Revisión Enfocada
Validar solo sincretismo léxico:
```
/revisar-estilo texto.md --regla 4
```

---

## Comandos Relacionados

- `/aplicar-estilo` - Aplicar canon y corregir texto
- `/validar-canon` - Validar coherencia narrativa completa

---

## Skill Subyacente

Este comando utiliza el skill `estilo-literario` que contiene las 13 reglas completas con ejemplos canónicos.

Ver: `.claude/skills/estilo-literario/SKILL.md`
