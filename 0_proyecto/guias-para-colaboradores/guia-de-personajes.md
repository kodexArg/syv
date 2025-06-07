---
titulo: Guía de Creación de Personajes
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Estándares y directrices para la creación y documentación de personajes en el universo SyV.
tags:
  - guia
  - personajes
  - colaboracion
---

# Guía de Creación de Personajes

Esta guía establece el formato y las mejores prácticas para crear y documentar personajes dentro del universo de "Subordinación y Valor". Un personaje bien definido es clave para la coherencia narrativa y la inmersión en el mundo.

Antes de crear un personaje, asegúrate de estar familiarizado con las guías generales, especialmente la [Guía de Metadatos](./guia-de-metadatos.md) y el [Manual del Colaborador](./manual-del-colaborador.md).

## Categorías de Personajes

Los personajes se clasifican en tres tipos para organizar su rol y alcance en el universo:

- **Canónicos o Principales**: Personajes centrales en la trama, incluyendo personajes jugadores (PJs) o NPCs de gran relevancia que aparecen en relatos, crónicas o eventos importantes.
- **Secundarios**: La mayoría de los personajes no jugadores (PNJs). Tienen un trasfondo definido y motivaciones que guían su interacción con otros, poblando el mundo y dándole vida. Todo personaje que haga su aparición en un relato, crónica o evento debe figurar aquí, exceptuando sólo a los personajes principales.
- **Arquetipos**: Plantillas de personajes que representan un rol o profesión sin un nombre propio (p. ej., un gendarme, un médico, un koskero).

## Metadatos de Personajes

La sección de metadatos (front matter YAML) es fundamental para la correcta indexación y uso de los personajes por parte de herramientas automáticas y colaboradores.

Además de los campos obligatorios (`titulo`, `carpeta`, `descripcion`) definidos en la [Guía de Metadatos](./guia-de-metadatos.md), los personajes siguen estas convenciones:

- `facciones`: Una lista YAML que indica las afiliaciones formales del personaje. **Este campo debe existir siempre**, incluso si la lista está vacía.
- `alerta-spoiler`: Campo opcional para advertir sobre información sensible. Contiene una frase que indica si el personaje debe ser presentado con discreción a los jugadores. Este campo puede repetirse con contenidos diferentes para el mismo personaje.
  - Ejemplo 1: `alerta-spoiler: "Este personaje no debe ser presentado directamente a un jugador."`
  - Ejemplo 2: `alerta-spoiler: "La información de este personaje debe revelarse con extrema discreción."`

**IMPORTANTE**: Si este campo existe, no se deben mostrar los datos del personaje en el atlas, en las cartas, en los relatos, etc.

### Ejemplo Completo de Metadatos

```yaml
---
titulo: "Inquisidora Sofía"
carpeta: 3_personajes/principales
descripcion: "Joven y serena inquisidora que sirve como primer contacto de la Iglesia con agentes externos en Dársena."
tags:
  - inquisicion
  - darsena
  - iglesia-de-darsena
  - principal
facciones:
  - "Iglesia de Dársena"
  - "Santa Inquisición de la Verdad"
alerta-spoilers: "Su lealtad final es un secreto que no debe revelarse prematuramente."
---
```

## Estructura del Contenido

El cuerpo del archivo de un personaje debe organizarse con los siguientes apartados para mantener la coherencia. El orden sugerido es el siguiente:

- **Aspecto**:
  - Descripción de la apariencia física del personaje. Esta sección no es obligatoria y solo debe completarse si se cuenta con información específica o una imagen de referencia. Puede incluir enlaces a recursos en `6_media/`.
  - Si el personaje tiene un nombre propio, se debe incluir en este apartado.
  - Su uso no es obligatorio, y no se requiere por defecto.

- **Descripción**:
  - Este es el apartado más importante y casi siempre requerido.
  - Aquí se desarrolla libremente la personalidad, comportamiento, manerismos y rol actual del personaje en el mundo.

- **Citas**:
  - Opcionalmente, se pueden incluir una o más citas textuales entre comillas para ilustrar la forma de hablar del personaje, su tono o sus ideas recurrentes.

- **Trasfondo**:
  - Un complemento a la descripción. Detalla la historia del personaje, su pasado, eventos significativos que lo marcaron y las relaciones importantes que ha forjado a lo largo de su vida.

- **Secretos / Trasfondo Oculto / Objetivos Ocultos**:
  - Estos apartados contienen información que no es evidente a primera vista. Revelar estos secretos debería requerir un esfuerzo significativo por parte de los jugadores, y en algunos casos, podría ser imposible.
  - Generalmente los personajes que tienen estos apartados también tienen una alerta de spoilers en metadatos.
  - **ATENCIÓN**: Si el personaje tiene un secreto o trasfondo oculto, no se debe hacer referencia a él en el atlas, en las cartas, en los relatos, etc.

- **Hoja de Personaje**:
  - Esta sección es específica para personajes jugadores (PJs) o NPCs muy relevantes que requieran estadísticas de juego. En la mayoría de los casos, no se utiliza.


---

Finalmente, recuerda que puedes usar la sintaxis detallada en la [Guía de Referencias y Pie de Página](./referencias-y-pie-de-pagina.md) para enlazar a otros personajes, lugares o documentos relevantes.
