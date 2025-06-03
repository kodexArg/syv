---
titulo: Manual del Colaborador
carpeta: 0_proyecto/guias-para-colaboradores
descripcion: Guía esencial para comprender la organización y colaboración en el proyecto SyV.
tags:
- guia
- colaboracion
---

# Cómo contribuir (pull requests)

Si sabes como hacerlo, por favor realice los aportes mediante pull requests (PR). Es la forma más ordenada y permite revisar los cambios antes de sumarlos al corpus.

Si nunca hiciste un PR, no te preocupes: podés aportar igual. Solo necesitás una cuenta de GitHub. Buscá el archivo que querés editar en el repositorio, hacé clic en el ícono de lápiz ("Edit this file") arriba a la derecha, pegá o escribí tu texto, y después seguí las instrucciones para proponer el cambio ("Propose changes") y crear un pull request ("Create pull request").


Guía oficial de GitHub para editar archivos desde la web: [Editing files in your repository](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)


Guía para hacer un pull request: [Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)


# Manual del Colaborador: Universo "Subordinación y Valor"

Acá se ama la escritura humana. Los herrores son vienbenidos y los modismos son abrazados para dar color a "Subordinación y Valor". La prosa queda totalmente liberada al usuario, y es aceptable e incluso deseable que el estilo de cada aporte sea único.

En cambio sí se requiere coherencia y cumplimiento de las pautas de esta guía, al igual que del formato indicado en la guía de metadatos. Esto ayuda a los agentes AI, MCPs y a cualquier asistente que quiera usar este corpus a obtener contextos coherentes con el universo.

## Pautas clave para contribuir

Al contribuir a este proyecto, asegúrate de que tu creación no destruye lo que ya ha sido incorporado al canon. Para ello, asegurate de:

- Respetar la cronología y el trasfondo establecido.
- Mantener el español como idioma principal.
- Colocar los archivos en las carpetas correspondientes.
- Usar correctamente los metadatos en los archivos `.md` (ver [Guía de Metadatos](guia-de-metadatos.md)).

### Incorporar sucesos al canon

- Los nuevos sucesos deben tener sentido y estar comprometidos con la trama.
- O ser completamente irrelevantes para la misma, generando un nuevo hilo narrativo.
- En lo posible, incorporar elementos diegéticos como crónicas, recoretes de la época, etc.
- Cada personaje mencionado debe tener un archivo en la carpeta `3_personajes`.
- Se prefieren aportes que contribuyan a reforzar los elementos únicos de este universo:
    - La religión.
    - Ciudad Dársena como epicentro de la trama.
    - Lugares de interés existentes.
    - Personajes conocidos.
- La cronología debe ser respetada, y el formato de los archivos debe ser YYYY-MM-DD-nombre-del-suceso.md (siendo MM y DD opcionales).

### Sobre aventuras, historias y personajes

- Aquí somos laxos, y prácticamente cualquier aporte (que no destruya lo hecho) es bienvenido.

## Sugerencia para usuarios de Cursor

Si usás Cursor, podés activar las reglas de `.cursor/rules` para mantener automáticamente el README y los metadatos en tus contribuciones.

# Dónde va cada cosa (FAQ rápida)

¿No sabes en qué carpeta poner tu aporte? Aquí tienes una guía rápida con algunos ejemplos:

- **¿Quieres aportar un personaje que te parece interesante?**
  - Coloca el archivo en `3_personajes/`.
  - Si es un tipo de personaje, uno que puede cambiar de nombre y cualquiera puede usar en su historia, va en `3_personajes/arquetipos/`.

- **¿Tienes una historia, crónica, carta o diario ficticio que encaja con el universo?**
  - Usa la carpeta `4_diegesis/` y la subcarpeta correspondiente: `relatos/`, `cronicas/`, `cartas/` o `diarios/`.

- **¿Vas a escribir sobre un evento histórico o un suceso importante?**
  - Ubícalo primero en `1_trasfondo/cronologia/` (y la subcarpeta del período si aplica).
  - Recuerda utilizar la nomenclatura correcta para el nombre: es decir, YYYY-MM-DD-nombre-del-suceso.md.
  - Agrega los personajes mencionados en `3_personajes/`.
  - Finalmente, puedes agregar al trasfondo o historias, en donde te parezca más relevante.

- **¿Quieres establecer un nuevo invento o tecnología para el universo?**
  - Inclúyelo primero en `1_trasfondo/glosario/`.
  - Respáldalo con archivos de diegesis en `4_diegesis/` (opcional).
  - Finalmente incorpóralo en el atlas: `2_atlas/` (y probablemente en la subcarpeta correspondiente, como `tecnologia-y-ciencia/`).

---

**Resumen de carpetas principales:**

- `0_proyecto/`: Organización, guías y manuales del proyecto.
- `1_trasfondo/`: Historia, cronología, cosmovisión, glosario, facciones y prohibiciones.
- `2_atlas/`: Geografía, mapas, climas, arqueología y tecnología.
- `3_personajes/`: Personajes, arquetipos y grupos.
- `4_diegesis/`: Textos y artefactos ficticios (relatos, crónicas, cartas, diarios).
- `5_aventuras/`: Aventuras y módulos jugables.
- `6_media/`: Imágenes, música y recursos multimedia.