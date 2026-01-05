#!/usr/bin/env python3
"""
Script para ordenar el sidebar de Starlight: carpetas primero, archivos después.

En Starlight, items con 'order' definido aparecen ANTES que items sin 'order'.
Por lo tanto:
- A las carpetas (index.md) les damos order bajo (1) para que aparezcan primero
- A los archivos sueltos les damos order alto (999) para que aparezcan después

Si una carpeta no tiene index.md, lo crea automáticamente.
"""

import re
from pathlib import Path

DOCS_DIR = Path("src/content/docs")


def title_from_folder_name(folder_name: str) -> str:
    """
    Convierte un nombre de carpeta en un título legible.
    Ejemplo: "facciones-menores" -> "Facciones Menores"
    """
    # Quitar prefijos numéricos como "0_", "1_", etc.
    name = re.sub(r'^\d+_', '', folder_name)
    # Reemplazar guiones y underscores con espacios
    name = name.replace('-', ' ').replace('_', ' ')
    # Capitalizar cada palabra
    return name.title()


def find_items_to_modify(dir_path: Path, folders_to_modify: list, files_to_modify: list, folders_to_create: list):
    """
    Recorre recursivamente un directorio y encuentra:
    - Carpetas (index.md) que coexisten con archivos sueltos
    - Archivos .md sueltos que coexisten con carpetas
    - Carpetas que necesitan index.md creado
    """
    if not dir_path.exists() or not dir_path.is_dir():
        return

    items = list(dir_path.iterdir())
    subdirs = [item for item in items if item.is_dir() and not item.name.startswith('.')]
    md_files = [item for item in items if item.is_file() and item.suffix == '.md']

    # Si hay tanto carpetas como archivos en este nivel, necesitamos ordenarlos
    if subdirs and md_files:
        for subdir in subdirs:
            index_file = subdir / "index.md"
            if index_file.exists():
                folders_to_modify.append(index_file)
            else:
                # Necesita crear index.md
                folders_to_create.append(subdir)

        # Agregar archivos sueltos (para darles order alto)
        files_to_modify.extend(md_files)

    # Continuar recursivamente en las subcarpetas
    for subdir in subdirs:
        find_items_to_modify(subdir, folders_to_modify, files_to_modify, folders_to_create)


def get_items_to_modify():
    """
    Encuentra todos los items que necesitan order para el ordenamiento correcto.
    """
    folders_to_modify = []
    files_to_modify = []
    folders_to_create = []
    find_items_to_modify(DOCS_DIR, folders_to_modify, files_to_modify, folders_to_create)
    return folders_to_modify, files_to_modify, folders_to_create


def create_index_md(folder_path: Path, order: int = 1) -> bool:
    """
    Crea un index.md mínimo para una carpeta.
    """
    index_path = folder_path / "index.md"
    if index_path.exists():
        return False

    title = title_from_folder_name(folder_path.name)
    content = f"""---
title: {title}
sidebar:
  order: {order}
---

"""
    index_path.write_text(content, encoding='utf-8')
    return True


def set_sidebar_order(filepath: Path, order: int) -> bool:
    """
    Establece el campo sidebar.order en el frontmatter.
    Retorna True si se modificó el archivo.
    """
    content = filepath.read_text(encoding='utf-8')

    # Buscar frontmatter
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if not frontmatter_match:
        return False

    frontmatter = frontmatter_match.group(1)
    rest_of_file = content[frontmatter_match.end():]

    # Verificar si ya tiene sidebar con order
    sidebar_order_match = re.search(r'^(sidebar:\s*\n\s+order:\s*)(\d+)', frontmatter, re.MULTILINE)
    if sidebar_order_match:
        current_order = int(sidebar_order_match.group(2))
        if current_order == order:
            return False  # Ya tiene el order correcto
        # Actualizar el order existente
        new_frontmatter = (
            frontmatter[:sidebar_order_match.start(2)] +
            str(order) +
            frontmatter[sidebar_order_match.end(2):]
        )
    else:
        # Verificar si tiene sidebar: sin order
        sidebar_match = re.search(r'^(sidebar:\s*)$', frontmatter, re.MULTILINE)
        if sidebar_match:
            # Agregar order después de sidebar:
            new_frontmatter = frontmatter[:sidebar_match.end()] + f"\n  order: {order}" + frontmatter[sidebar_match.end():]
        else:
            # Agregar sidebar completo al final del frontmatter
            new_frontmatter = frontmatter.rstrip() + f"\nsidebar:\n  order: {order}"

    new_content = f"---\n{new_frontmatter}\n---{rest_of_file}"
    filepath.write_text(new_content, encoding='utf-8')
    return True


def main():
    folders_to_modify, files_to_modify, folders_to_create = get_items_to_modify()

    print("=" * 60)
    print("Ordenamiento del sidebar: carpetas primero, archivos despues")
    print("=" * 60)

    # Crear index.md faltantes
    if folders_to_create:
        print(f"\n[CREANDO] index.md para carpetas que no lo tienen:\n")
        for folder_path in sorted(folders_to_create):
            relative_path = folder_path.relative_to(DOCS_DIR)
            if create_index_md(folder_path):
                print(f"  [CREADO]     {relative_path}/index.md")

    # Procesar carpetas existentes (order bajo para que aparezcan primero)
    print(f"\n[CARPETAS] (order: 1) - apareceran primero:\n")
    folders_modified = 0
    for filepath in sorted(folders_to_modify):
        relative_path = filepath.relative_to(DOCS_DIR)
        if set_sidebar_order(filepath, 1):
            print(f"  [MODIFICADO] {relative_path}")
            folders_modified += 1
        else:
            print(f"  [OK]         {relative_path}")

    # Procesar archivos (order alto para que aparezcan después)
    print(f"\n[ARCHIVOS] (order: 999) - apareceran despues:\n")
    files_modified = 0
    for filepath in sorted(files_to_modify):
        relative_path = filepath.relative_to(DOCS_DIR)
        if set_sidebar_order(filepath, 999):
            print(f"  [MODIFICADO] {relative_path}")
            files_modified += 1
        else:
            print(f"  [OK]         {relative_path}")

    print(f"\n{'=' * 60}")
    print(f"Resumen:")
    print(f"  - index.md creados:     {len(folders_to_create)}")
    print(f"  - Carpetas modificadas: {folders_modified} de {len(folders_to_modify)}")
    print(f"  - Archivos modificados: {files_modified} de {len(files_to_modify)}")


if __name__ == "__main__":
    main()
