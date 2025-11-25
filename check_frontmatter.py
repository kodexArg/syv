import os
import glob


required_fields = ['titulo', 'carpeta', 'descripcion']
array_fields = ['tags', 'facciones']

def check_frontmatter(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return f"Error reading file: {e}"
    
    if not content.startswith('---'):
        return "No frontmatter found"
    
    try:
        parts = content.split('---', 2)
        if len(parts) < 3:
            return "Invalid frontmatter format"
        
        # Use yaml parser if available, otherwise manual parsing is risky for types
        # Since pyyaml is not available, we have to guess based on syntax
        frontmatter_str = parts[1]
        
        # Check for array fields that look like strings
        lines = frontmatter_str.split('\n')
        current_key = None
        
        frontmatter = {}
        
        for line in lines:
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip()
                value = value.strip()
                frontmatter[key] = value
                
                if key in array_fields:
                    # If it has a value on the same line and it's not wrapped in [], it might be a string instead of array
                    if value and not value.startswith('[') and not value.startswith('-'):
                         # But wait, YAML allows:
                         # tags:
                         #   - tag1
                         # So value would be empty string here.
                         pass
            elif line.startswith('-') and current_key in array_fields:
                pass

        # This manual parsing is too weak.
        # Let's try to install pyyaml if possible or use a different approach.
        # But I can't install packages.
        
        # Let's look for lines like "tags: something" where something is not empty and not starting with [
        for line in lines:
            line = line.strip()
            for field in array_fields:
                if line.startswith(f"{field}:"):
                    val = line[len(field)+1:].strip()
                    if val and not val.startswith('[') and not val.startswith('{'):
                        # If it has content, it must be a flow style sequence or it's a string (error)
                        # Unless it's a multiline string? No, tags shouldn't be.
                        return f"Potential type error in {field}: {val}"
        
        return None
    except Exception as e:
        return f"Error parsing frontmatter: {e}"

files = glob.glob('2_atlas/**/*.md', recursive=True)
for file in files:
    error = check_frontmatter(file)
    if error:
        print(f"{file}: {error}")
