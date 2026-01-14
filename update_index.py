#!/usr/bin/env python3
"""
Genera indice.yaml a partir de la estructura actual de directorios.
"""

import os
import yaml
from pathlib import Path

def process_directory(dir_path):
    """Procesa un directorio y retorna su estructura"""
    result = {}

    try:
        items = sorted(os.listdir(dir_path))
    except PermissionError:
        return None

    for item in items:
        item_path = os.path.join(dir_path, item)

        # Ignorar directorios ocultos
        if item.startswith('.'):
            continue

        if os.path.isfile(item_path) and item.endswith('.md'):
            # Archivo markdown - usar nombre sin extensión
            name = item[:-3]
            result[name] = name

        elif os.path.isdir(item_path):
            # Subdirectorio
            subdir_content = process_directory(item_path)
            if subdir_content:
                result[item] = subdir_content

    return result if result else None

def build_index(root_path):
    """Construye el índice de las secciones principales"""
    index = {}

    # Directorios principales en orden numérico
    all_items = os.listdir(root_path)
    main_dirs = sorted(
        [d for d in all_items
         if os.path.isdir(os.path.join(root_path, d))
         and d[0].isdigit()],
        key=lambda x: int(x.split('_')[0])
    )

    for main_dir in main_dirs:
        main_path = os.path.join(root_path, main_dir)
        content = process_directory(main_path)
        if content:
            index[main_dir] = content

    return index

def main():
    # Directorio de docs: src/content/docs/
    docs_root = Path(__file__).resolve().parent / 'src' / 'content' / 'docs'

    print(f"Procesando: {docs_root}")

    # Construir índice
    index = build_index(str(docs_root))

    if not index:
        print("Error: No se encontró contenido")
        return

    # Guardar como YAML en la raíz del proyecto
    output_file = docs_root.parent.parent.parent / 'indice.yaml'

    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(index, f, allow_unicode=True, default_flow_style=False, sort_keys=False)

    print(f"✓ Índice generado: {output_file}")
    print(f"  Secciones: {', '.join(index.keys())}")

if __name__ == '__main__':
    main()
