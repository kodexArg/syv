#!/bin/bash

# Función para procesar un archivo
process_file() {
    local file="$1"
    echo "Procesando $file..."
    
    # Crear un archivo temporal
    temp_file=$(mktemp)
    
    # Variable para rastrear si estamos en el frontmatter
    in_frontmatter=0
    
    # Leer el archivo línea por línea
    while IFS= read -r line; do
        # Detectar inicio/fin del frontmatter
        if [[ "$line" == "---" ]]; then
            if [[ $in_frontmatter -eq 0 ]]; then
                in_frontmatter=1
            else
                in_frontmatter=0
            fi
            echo "$line" >> "$temp_file"
            continue
        fi
        
        # Procesar líneas dentro del frontmatter
        if [[ $in_frontmatter -eq 1 ]]; then
            # Ignorar líneas title:
            if [[ "$line" =~ ^title: ]]; then
                continue
            fi
        fi
        
        # Copiar todas las demás líneas sin modificar
        echo "$line" >> "$temp_file"
    done < "$file"
    
    # Reemplazar el archivo original con el temporal
    mv "$temp_file" "$file"
}

# Encontrar todos los archivos .md y procesarlos
find . -name "*.md" -type f -not -path "./node_modules/*" -not -path "./astro/node_modules/*" | while read -r file; do
    process_file "$file"
done 