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

## Formato Básico

1. En el texto: `[^identificador]`
2. Al final del documento (después de `---`): `[^identificador]: contenido`
3. Usar identificadores descriptivos y únicos

## Buenas Prácticas

- Verificar que cada referencia tenga su nota al pie
- Usar rutas relativas para enlaces
- Mantener consistencia en el formato
- Usar identificadores descriptivos

### Ejemplo

```markdown
La metodología se basa en los principios de agilidad[^manifiesto].
Revisar el glosario de términos[^glosario].

---

### Referencias

[^manifiesto]: [Manifiesto del Equipo](./documentos/principios/manifiesto.md)
[^glosario]: [Glosario de Términos](./documentos/glosario.md)
```

## Enlaces entre Documentos

Agregar al final del documento:

```markdown
### Relaciones

- **Personajes**: [Nombre](../ruta/archivo.md) - Breve descripción
- **Lugares**: [Nombre](../ruta/archivo.md) - Breve descripción
```

---

**Nota**: Esta guía debe actualizarse si se introducen nuevos tipos de referencias.