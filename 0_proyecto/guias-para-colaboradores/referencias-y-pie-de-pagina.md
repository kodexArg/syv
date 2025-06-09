---
titulo: Guía de Referencias y Pie de Página
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Instrucciones para el uso correcto de referencias, notas al pie y enlaces entre documentos en el proyecto SyV.
tags:
- guia
- referencias
- colaboracion
---

# Guía de Referencias y Pie de Página

Guía para agregar referencias, notas al pie y enlaces entre documentos en el proyecto "Subordinación y Valor".

## Tipos de Referencias

### 1. Referencias con Notas al Pie `[^identificador]`

Se usan para:
- Referenciar facciones y entidades importantes dentro del texto
- Proporcionar información adicional o contexto sin interrumpir el flujo narrativo
- Mantener un estilo consistente en la documentación de facciones

Formato:
```markdown
La **Sagrada Inquisición Argentina (SIA)**[^sia] los caza como a herejes.

---

### Referencias

[^sia]: Santa Inquisición Argentina (SIA) / "Los Cirujanos del Alma"
```

### 2. Enlaces Relativos `[texto](ruta)`

Se usan para:
- Enlazar a otros documentos del proyecto
- Crear navegación entre archivos relacionados
- Establecer conexiones en la sección de "Relaciones"

Formato:
```markdown
Ver más detalles en el [Glosario de Términos](../glosario.md)
```

## Cuándo Usar Cada Tipo

### Usar `[^identificador]` cuando:
- Se menciona una facción por primera vez
- Se necesita proporcionar información adicional sobre una entidad
- Se quiere mantener el flujo narrativo sin interrupciones
- Se hace referencia a nombres alternativos o títulos

### Usar enlaces relativos cuando:
- Se enlaza a otro documento del proyecto
- Se crea una sección de "Relaciones" al final del documento
- Se necesita navegación directa entre archivos
- Se quiere establecer conexiones con otros elementos del universo

## Ejemplos Combinados

```markdown
La **Sagrada Inquisición Argentina (SIA)**[^sia] mantiene una relación tensa con los [Arpistas](../facciones/facciones-menores/arpistas.md), mientras que los [Guardianes de la Memoria](../facciones/facciones-menores/guardianes.md) operan en una zona gris.

---

### Referencias

[^sia]: Santa Inquisición Argentina (SIA) / "Los Cirujanos del Alma"

### Relaciones

- **Facciones**: [Arpistas](../facciones/facciones-menores/arpistas.md) - Red internacional de preservadores de tecnología
- **Lugares**: [Ciudad Dársena](../lugares/ciudad-darsena.md) - Base principal de operaciones
```

## Buenas Prácticas

1. **Consistencia**:
   - Mantener el mismo formato de referencias en todo el documento
   - Usar identificadores descriptivos y únicos
   - Seguir las convenciones de nombres establecidas

2. **Organización**:
   - Agrupar todas las referencias al final del documento
   - Separar claramente las secciones de "Referencias" y "Relaciones"
   - Mantener las rutas relativas actualizadas

3. **Formato**:
   - Usar negrita para nombres de facciones en primera mención
   - Incluir acrónimos o nombres alternativos en la referencia
   - Mantener consistencia en el uso de nombres completos vs. acrónimos

## Convenciones Específicas

1. **Facciones**:
   - Usar negrita para nombres de facciones en primera mención
   - Incluir acrónimos o nombres alternativos en la referencia
   - Mantener consistencia en el uso de nombres completos vs. acrónimos

2. **Documentos**:
   - Usar rutas relativas para enlaces
   - Incluir descripción breve en la referencia
   - Mantener formato consistente en todo el documento

3. **Información Secreta**:
   - Marcar claramente con "**Información secreta (no exponer a jugadores):**"
   - Mantener referencias a facciones en negrita incluso en secciones secretas

---

**Nota**: Esta guía debe actualizarse si se introducen nuevos tipos de referencias o se modifican las convenciones existentes.