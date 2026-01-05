#!/usr/bin/env python3
"""
Script para ordenar el sidebar de Starlight: carpetas primero, archivos después.

Agrega 'sidebar.order: 999' a los archivos .md que están directamente en las
carpetas principales (no en subcarpetas), para que aparezcan después de las carpetas.
"""

import os
import re
from pathlib import Path

DOCS_DIR = Path("src/content/docs")

# Carpetas principales del proyecto
MAIN_SECTIONS = [
    "0_proyecto",
    "1_trasfondo",
    "2_atlas",
    "3_personajes",
    "4_diegesis",
    "5_aventuras",
    "6_media",
]

def get_root_md_files():
    """
    Encuentra archivos .md que están directamente en las carpetas principales
    o en sus subcarpetas de primer nivel (donde coexisten con otras carpetas).
    """
    files_to_modify = []

    for section in MAIN_SECTIONS:
        section_path = DOCS_DIR / section
        if not section_path.exists():
            continue

        # Revisar este nivel y un nivel más abajo
        for depth in range(2):
            if depth == 0:
                check_path = section_path
            else:
                # Revisar subcarpetas
                for subdir in section_path.iterdir():
                    if subdir.is_dir() and not subdir.name.startswith('.'):
                        check_sibling_files(subdir, files_to_modify)
                continue

            check_sibling_files(check_path, files_to_modify)

    return files_to_modify

def check_sibling_files(dir_path: Path, files_to_modify: list):
    """
    Revisa si en un directorio hay tanto carpetas como archivos .md.
    Si es así, los archivos .md deben ir al final.
    """
    if not dir_path.exists():
        return

    items = list(dir_path.iterdir())
    has_subdirs = any(item.is_dir() and not item.name.startswith('.') for item in items)
    md_files = [item for item in items if item.is_file() and item.suffix == '.md']

    # Solo modificar si hay tanto carpetas como archivos en el mismo nivel
    if has_subdirs and md_files:
        files_to_modify.extend(md_files)

def add_sidebar_order(filepath: Path, order: int = 999) -> bool:
    """
    Agrega o modifica el campo sidebar.order en el frontmatter.
    Retorna True si se modificó el archivo.
    """
    content = filepath.read_text(encoding='utf-8')

    # Buscar frontmatter
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if not frontmatter_match:
        return False

    frontmatter = frontmatter_match.group(1)
    rest_of_file = content[frontmatter_match.end():]

    # Verificar si ya tiene sidebar.order
    if re.search(r'^sidebar:\s*\n\s+order:', frontmatter, re.MULTILINE):
        return False  # Ya tiene order definido

    # Verificar si tiene sidebar: sin order
    sidebar_match = re.search(r'^sidebar:\s*$', frontmatter, re.MULTILINE)
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
    files_to_modify = get_root_md_files()

    print(f"Archivos a modificar para que aparezcan después de las carpetas:\n")

    modified_count = 0
    for filepath in sorted(files_to_modify):
        relative_path = filepath.relative_to(DOCS_DIR)
        if add_sidebar_order(filepath):
            print(f"  [MODIFICADO] {relative_path}")
            modified_count += 1
        else:
            print(f"  [YA TIENE]   {relative_path}")

    print(f"\n{'='*50}")
    print(f"Resumen:")
    print(f"  - Archivos modificados: {modified_count}")
    print(f"  - Total encontrados:    {len(files_to_modify)}")

if __name__ == "__main__":
    main()
