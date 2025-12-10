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
    # Get the directory where the script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    print(f"Scanning directory: {script_dir}")
    
    for filename in os.listdir(script_dir):
        # Skip the script itself
        if filename == os.path.basename(__file__):
            continue
            
        new_filename = remove_accents(filename)
        
        if new_filename != filename:
            old_path = os.path.join(script_dir, filename)
            new_path = os.path.join(script_dir, new_filename)
            
            # Check if target file already exists to avoid overwriting
            if os.path.exists(new_path):
                print(f"SKIPPED: Cannot rename '{filename}' because '{new_filename}' already exists.")
            else:
                try:
                    os.rename(old_path, new_path)
                    print(f"RENAMED: '{filename}' -> '{new_filename}'")
                except Exception as e:
                    print(f"ERROR: Could not rename '{filename}': {e}")
        else:
            # Optional: Uncomment to see verified files
            # print(f"No changes needed for: {filename}")
            pass

if __name__ == "__main__":
    main()
