---
titulo: Guía de Facciones
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Instrucciones para documentar facciones en el universo de Subordinación y Valor, estableciendo un formato consistente para su interconexión.
tags:
- guia
- facciones
- colaboracion
---

# Guía de Facciones

Esta guía establece el formato estándar para documentar facciones en el universo de Subordinación y Valor. El objetivo es mantener consistencia y permitir la interconexión entre diferentes grupos.

## Estructura del Documento

Cada archivo de facción debe seguir esta estructura:

### 1. Metadatos
```yaml
---
titulo: [Título]
carpeta: [Ruta]
descripcion: [Breve descripción]
tags:
- faccion
- [tags relevantes]
faccion:
  tipo: [Oficial/Proscrita/Secreta]
  alcance: [Local/Regional/Nacional/Internacional]
  tamaño: [Aproximación]
  base: [Ubicación]
  regiones: [Lista de regiones]
---
```

## Secciones Principales

### Descripción
Esta sección contiene la información pública, o la que se conocería inicialmente sobre la facción.

Idealmente, todos los siguientes aspectos quedarán establecidos en la descripción:

**Objetivos**
- Epxlicita su filosofía, su ideología, qué buscan conseguir.

**Modus operandi**
- Tácticas de operación.

**Organización**
- Jerarquía y roles principales.
- Divisiones, departamentos, ramas (links si corresponden).
- Informar los métodos de reclutamiento.

**Recursos**
- Tecnología y equipamiento
- Habilidades especiales
- Conocimientos únicos
- Otros recursos importantes para la facción.


### Información Secreta

**IMPORTANTE**: La siguiente información no debe ser expuesta a jugadores.

Esta sección contiene información que solo los miembros de la facción o aquellos con acceso privilegiado conocerían.

Aquí podrás corregir los objetivos (por objetivos ocultos), etc.


### Relaciones
Esta sección documenta las interacciones de la facción con otros grupos.

#### Aliados
- [Facción Aliada 1]: [Descripción de la alianza]
- [Facción Aliada 2]: [Descripción de la alianza]

#### Enemigos
- [Facción Enemiga 1]: [Descripción del conflicto]
- [Facción Enemiga 2]: [Descripción del conflicto]

#### Neutrales
- [Facción Neutral 1]: [Descripción de la relación]

#### Conexiones Ocultas
- Alianzas secretas
- Enemistades no declaradas
- Relaciones complejas

## Ejemplo de Estructura

```markdown
---
titulo: Sagrada Inquisición Argentina
carpeta: 1_trasfondo/facciones/iglesia-de-darsena
descripcion: El brazo más temido y poderoso de la Iglesia en la Confederación.
tags:
- faccion
- iglesia
- inquisicion
- sia
faccion:
  tipo: Oficial
  alcance: Nacional
  tamaño: "Varios miles de miembros"
  base: Ciudad Dársena
  regiones:
    - Ciudad Dársena
    - Zona Residencia
    - Barrios del Muro
---

# Sagrada Inquisición Argentina

## Descripción

La Sagrada Inquisición Argentina es el brazo ejecutor de la Iglesia en la Confederación, encargada de mantener la pureza de la fe y perseguir herejías.

### Objetivos
- Mantener la pureza de la fe católica
- Perseguir y erradicar herejías
- Proteger los intereses de la Iglesia

### Modus Operandi
- Investigaciones secretas
- Juicios inquisitoriales
- Ejecuciones públicas de herejes

### Organización
- Gran Inquisidor
- Inquisidores Regionales
- Cuerpo de Investigadores
- Guardia Inquisitorial

### Recursos
- Acceso a archivos eclesiásticos
- Red de informantes
- Tecnología de interrogación
- Autoridad legal especial

## Información Secreta

**IMPORTANTE**: La siguiente información no debe ser expuesta a jugadores.

[Contenido secreto sobre objetivos ocultos, operaciones encubiertas, etc.]

## Relaciones

### Aliados
- Iglesia de Dársena: Principal patrocinador y fuente de autoridad
- Guardia Eclesiástica: Apoyo logístico y militar

### Enemigos
- Cultos Proscritos: Principal objetivo de persecución
- Facción X: [Descripción del conflicto]

### Neutrales
- Gobierno de Dársena: Relación tensa pero necesaria
- Gremios Comerciales: Cooperación cuando conviene

### Conexiones Ocultas
- [Información sobre alianzas secretas]
- [Enemistades no declaradas]
```


---

**Actualiza esta guía si se introducen nuevos elementos o se modifican los existentes.**
