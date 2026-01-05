import os

def remove_accents(filename):
    replacements = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U'
    }
    new_filename = filename
    for char, replacement in replacements.items():
        new_filename = new_filename.replace(char, replacement)
    return new_filename

def main():
    # Get the current working directory where the script is invoked
    base_dir = os.getcwd()
    
    print(f"Scanning directory recursively: {base_dir}")
    
    for root, dirs, files in os.walk(base_dir):
        for filename in files:
            # Skip the script itself if we encounter it
            if filename == os.path.basename(__file__) and root == os.path.dirname(os.path.abspath(__file__)):
                continue
                
            new_filename = remove_accents(filename)
            
            if new_filename != filename:
                old_path = os.path.join(root, filename)
                new_path = os.path.join(root, new_filename)
                
                # Check if target file already exists to avoid overwriting
                if os.path.exists(new_path):
                    print(f"SKIPPED: Cannot rename '{filename}' because '{new_filename}' already exists in {root}.")
                else:
                    try:
                        os.rename(old_path, new_path)
                        print(f"RENAMED: '{filename}' -> '{new_filename}'")
                    except Exception as e:
                        print(f"ERROR: Could not rename '{filename}': {e}")
            else:
                pass

if __name__ == "__main__":
    main()
