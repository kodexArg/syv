---
name: write-diegesis
description: Asistir en escritura de contenido narrativo (relato/carta/crónica/diario) con tono apropiado
---

# Asistir en Escritura de Diegesis

Ayuda a escribir contenido narrativo en el tono apropiado según el tipo (relato/carta/crónica/diario).

## Información Requerida

1. **Tipo**: Relato / Carta / Crónica / Diario
2. **Período temporal** (YYYY o rango, ej: 2178)
3. **Ubicación principal** (ej: Dársena, Túberías, Córdoba)
4. **Personajes involucrados**
5. **Tema/conflicto central** (1-2 líneas)
6. **Extensión aproximada** (breve/media/larga)

## Tono según Tipo

### RELATO
- **Estilo**: Libre, modismos regionales bienvenidos
- **Perspectiva**: Tercera persona o primera según preferencia
- **Atmósfera**: Puede variar (dramática, misteriosa, cotidiana)
- **Libertad creativa**: Alta

### CARTA
- **Estilo**: Formal o personal según emisor
- **Perspectiva**: Primera persona (autor de la carta)
- **Formato**: Fecha, saludo, cuerpo, despedida, firma
- **Coherencia**: Voz del personaje emisor

### CRÓNICA
- **Estilo**: Archivístico, informativo
- **Perspectiva**: Tercera persona, año 2178
- **Tono**: Como historiador documentando eventos
- **Fuentes**: Mencionar (documentos, testimonios, artefactos)

### DIARIO
- **Estilo**: Personal, íntimo
- **Perspectiva**: Primera persona (autor del diario)
- **Formato**: Fecha como encabezado de entrada
- **Tono**: Reflexivo, emocional

## Proceso

1. **Recopilar información** del usuario
2. **Validar coherencia**:
   - Leer archivos de personajes involucrados
   - Verificar período en cronología
   - Comprobar ubicación en atlas
3. **Generar borrador** en tono apropiado:
   - Incluir detalles atmosféricos (clima, sonidos, olores)
   - Tecnología apropiada para el año
   - Vocabulario coherente con personajes
4. **Crear archivo** en `4_diegesis/[tipo]/[titulo-kebab].md`
5. **Metadatos**:

```yaml
---
titulo: [Título del Contenido]
carpeta: 4_diegesis/[relatos|cartas|cronicas|diarios]
descripcion: [Breve resumen]
tags:
  - [tipo]
  - [ubicacion]
  - [personajes-mencionados]
  - [periodo]
---
```

## Validaciones

- ✅ Personajes mencionados tienen archivos en `3_personajes/`
- ✅ Si fechado, coherencia con período cronológico
- ✅ Tecnología apropiada para el año
- ✅ Tono correcto según tipo
- ✅ Detalles atmosféricos de ubicación (si es Dársena: lluvia, etc.)

## Ejemplo

Usuario solicita:
- Tipo: Carta
- Período: 2178
- Ubicación: Dársena
- Personajes: Damián DiConte (emisor) → Contacto anónimo (receptor)
- Tema: Solicitud de información sobre conspiración
- Extensión: Breve

Output: Carta formal de Damián, tono profesional pero urgente, menciona Caso 2176-D:9, solicita reunión discreta, referencias a Córdoba, firma codificada.
