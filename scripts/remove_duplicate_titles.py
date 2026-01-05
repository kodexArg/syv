#!/usr/bin/env python3
"""
Script para eliminar títulos H1 duplicados de archivos markdown.
Starlight ya renderiza el 'title' del frontmatter como H1,
así que el '# Título' en el contenido es redundante.
"""

import os
import re
from pathlib import Path

DOCS_DIR = Path("src/content/docs")

def normalize(text: str) -> str:
    """Normaliza texto para comparación (minúsculas, sin espacios extras)."""
    return re.sub(r'\s+', ' ', text.lower().strip())

def process_file(filepath: Path) -> bool:
    """
    Procesa un archivo markdown y elimina el H1 duplicado si existe.
    Retorna True si se modificó el archivo.
    """
    content = filepath.read_text(encoding='utf-8')

    # Buscar frontmatter
    frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not frontmatter_match:
        return False

    frontmatter = frontmatter_match.group(1)
    after_frontmatter = content[frontmatter_match.end():]

    # Extraer título del frontmatter
    title_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
    if not title_match:
        return False

    frontmatter_title = title_match.group(1).strip()

    # Buscar H1 al inicio del contenido (con posibles líneas vacías antes)
    h1_match = re.match(r'^(\s*)(#\s+(.+?))\s*\n', after_frontmatter)
    if not h1_match:
        return False

    h1_title = h1_match.group(3).strip()

    # Comparar títulos (normalizados)
    if normalize(frontmatter_title) != normalize(h1_title):
        # Los títulos son diferentes, no eliminar
        return False

    # Eliminar el H1 duplicado
    new_after_frontmatter = after_frontmatter[h1_match.end():]

    # Eliminar líneas vacías extra al inicio
    new_after_frontmatter = re.sub(r'^\n+', '\n', new_after_frontmatter)

    new_content = content[:frontmatter_match.end()] + new_after_frontmatter

    filepath.write_text(new_content, encoding='utf-8')
    return True

def main():
    modified_count = 0
    skipped_count = 0

    md_files = list(DOCS_DIR.rglob("*.md"))
    print(f"Procesando {len(md_files)} archivos markdown...\n")

    for filepath in sorted(md_files):
        relative_path = filepath.relative_to(DOCS_DIR)
        if process_file(filepath):
            print(f"  [MODIFICADO] {relative_path}")
            modified_count += 1
        else:
            skipped_count += 1

    print(f"\n{'='*50}")
    print(f"Resumen:")
    print(f"  - Archivos modificados: {modified_count}")
    print(f"  - Archivos sin cambios: {skipped_count}")
    print(f"  - Total procesados:     {len(md_files)}")

if __name__ == "__main__":
    main()
