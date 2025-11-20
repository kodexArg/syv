---
name: new-character
description: Crear personaje completo con metadatos, estructura y actualización de REFERENCE.md
---

# Crear Nuevo Personaje

Genera un archivo de personaje completo para el universo SyV con todos los metadatos y estructura requeridos.

## Información Requerida

Pregunta al usuario:

1. **Nombre del personaje**
2. **Categoría**: Principal / Secundario / Arquetipo
3. **Breve descripción** (1-2 líneas: profesión, rol, características)
4. **Facciones asociadas** (separadas por coma, o "ninguna")
5. **¿Tiene secretos/información oculta?** (si/no)
6. **Ubicación principal** (ej: Dársena, Córdoba, Túberías)
7. **Edad aproximada** (opcional)

## Proceso

1. Recopilar información del usuario
2. Generar nombre de archivo: `[nombre-kebab].md`
3. Determinar carpeta: `3_personajes/[principales|secundarios|arquetipos]/`
4. Crear archivo con estructura completa:

```yaml
---
titulo: [Nombre]
carpeta: 3_personajes/[categoria]
descripcion: [Breve descripción]
tags:
  - [nombre-apellido]
  - [profesion]
  - [ubicacion]
facciones:
  - "[Facción 1]"
  # o facciones: [] si ninguna
alerta-spoilers: "[Si tiene secretos]"  # OPCIONAL
---

## Descripción

[Personalidad, comportamiento, manerismos, rol actual en el mundo]

## Aspecto

[Apariencia física - OPCIONAL, solo si hay detalles específicos]

## Trasfondo

[Historia del personaje, eventos que lo marcaron, relaciones forjadas]

## Secretos

[Solo si usuario confirmó que tiene]
**Información secreta (no exponer a jugadores):**
[Contenido sensible]
```

5. Si es **Principal**: El hook PostToolUse actualizará REFERENCE.md automáticamente
6. Confirmar al usuario:
   ```
   ✅ Personaje creado: 3_personajes/[categoria]/[nombre].md
   📝 REFERENCE.md actualizado (si es Principal)
   ```

## Validaciones

- ✅ Campo `facciones` SIEMPRE presente (aunque vacío)
- ✅ Si tiene secretos, incluir `alerta-spoilers`
- ✅ Tags en kebab-case minúsculas
- ✅ Facciones mencionadas deben existir en el corpus
- ✅ Categoría apropiada según importancia narrativa

## Ejemplo de Output

Usuario responde:
- Nombre: Capitán Romero
- Categoría: Principal
- Descripción: Oficial de Armada, secretamente colabora con Arpistas
- Facciones: Armada Argentina, Arpistas
- Tiene secretos: Sí
- Ubicación: Dársena (Isla Oriental)
- Edad: 45 años

Generar: `3_personajes/principales/capitan-romero.md` con estructura completa.
