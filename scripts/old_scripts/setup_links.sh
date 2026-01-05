#!/bin/bash

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Root is two levels up from 0_proyecto/scripts/
ROOT_DIR="$(dirname "$(dirname "$SCRIPT_DIR")")"
SRC_DOCS="$ROOT_DIR/src/content/docs"

# Create the target directory if it doesn't exist
mkdir -p "$SRC_DOCS"

# Define mappings: Source:DestinationName
declare -A MAPPINGS=( 
    ["0_proyecto"]="proyecto" 
    ["1_trasfondo"]="trasfondo" 
    ["2_atlas"]="atlas" 
    ["3_personajes"]="personajes" 
    ["4_diegesis"]="diegesis" 
    ["5_aventuras"]="aventuras" 
    ["6_media"]="media" 
)

for SOURCE_NAME in "${!MAPPINGS[@]}"; do
    DEST_NAME="${MAPPINGS[$SOURCE_NAME]}"
    SOURCE="$ROOT_DIR/$SOURCE_NAME"
    TARGET="$SRC_DOCS/$DEST_NAME"
    
    if [ -e "$TARGET" ]; then
        echo "Link or folder already exists: $TARGET"
    else
        echo "Creating symlink: $TARGET -> $SOURCE"
        # Calculate relative path for cleaner links
        # From src/content/docs to root is ../../../
        ln -s "../../../$SOURCE_NAME" "$TARGET"
    fi
done

echo "Done."
