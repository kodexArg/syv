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

Esta guía explica el formato correcto para agregar referencias, notas al pie y enlaces entre documentos en el proyecto "Subordinación y Valor".

Las referencias aquí se permiten para citar fuentes muy específicas, incluso links externos, o conceptos importantes que requieren una explicación adicional.






### Formato

1. En el texto, usa `[^identificador]` para crear la referencia
2. Al final del documento, después de `---`, agrega la referencia completa
3. El identificador debe ser descriptivo y único dentro del documento

## Buenas Prácticas

1. **Mantenimiento de Referencias**
   - Verifica que todas las referencias tengan su correspondiente nota al pie
   - Asegúrate de que los enlaces sean válidos y estén actualizados
   - Usa rutas relativas para los enlaces

2. **Organización**
   - Separa claramente las secciones de referencias y relaciones
   - Mantén un orden lógico en las relaciones (personajes, lugares, eventos)
   - Usa descripciones concisas pero informativas

3. **Consistencia**
   - Sigue el mismo formato en todos los documentos
   - Usa identificadores descriptivos y únicos
   - Mantén un estilo uniforme en las descripciones
### Ejemplo

```markdown
La metodología que seguiremos se basa en los principios de agilidad definidos en el manifiesto del equipo[^manifiesto].

Es crucial que todos los miembros revisen el glosario de términos para asegurar una comunicación fluida[^glosario].

---

### Referencias

[^manifiesto]: Ver el documento completo en: [Manifiesto del Equipo](./documentos/principios/manifiesto.md).
[^glosario]: Referido al fichero: [Glosario de Términos Comunes](./documentos/glosario.md).
```

## Enlaces entre Documentos

Los enlaces entre documentos se utilizan para establecer relaciones entre personajes, lugares, eventos o conceptos relacionados. Estos enlaces se colocan en una sección separada al final del documento.

### Formato

1. Crea una sección llamada "Relaciones" después de las referencias
2. Usa una lista con viñetas para cada relación
3. Incluye una breve descripción de la relación

### Ejemplo

```markdown
### Relaciones

- **Personajes Relacionados**
  - [Marcos de Barrio Norte](../3_personajes/marcos-de-barrio-norte.md): Propietario de la casa mencionada en el documento.
  - [Comisario Orellano](../3_personajes/comisario-orellano.md): Autoridad local mencionada en el incidente.

- **Lugares Relevantes**
  - [Casa de Marcos](../2_atlas/ciudad-darsena/barrio-norte/casa-marcos.md): Ubicación principal de los eventos.
  - [Comisaría 4to Cuerpo](../2_atlas/ciudad-darsena/comisaria-4to-cuerpo.md): Lugar de los interrogatorios.
```


---

**Nota**: Esta guía debe actualizarse si se introducen nuevos tipos de referencias o relaciones en el proyecto.