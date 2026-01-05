import os
import re

root_dir = r"c:\Users\gcave\Projects\Dev\syv\1_trasfondo"

def replace_bold(match):
    text = match.group(1)
    
    # Heuristics:
    # 1. If text ends with ':', just return text (Header-like).
    if text.strip().endswith(':'):
        return text
    
    # 2. If text starts with a digit (dates, years), just return text.
    # Remove leading specific chars like ' ' or '(' to check digit? No, bold usually wraps the value directly.
    if text.strip() and text.strip()[0].isdigit():
        return text
        
    # 3. If text is "short" term, quote it.
    # Short = fewer than 6 words?
    # Also ignore single letters?
    words = text.split()
    if len(words) > 0 and len(words) < 6:
        # Check if it looks like a list item header in context? 
        # Ideally we'd see surrounding chars, but regex replacement function only sees match.
        # However, quotations around key terms is generally what is meant by "context".
        return f'"{text}"'
        
    # Default: just strip bold
    return text

def process_file(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Pattern for **text**
        # We use non-greedy .*? to capture content.
        new_content = re.sub(r'\*\*(.*?)\*\*', replace_bold, content)
        
        # Pattern for __text__
        new_content = re.sub(r'__(.*?)__', replace_bold, new_content)
        
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Modified: {filepath}")
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    count = 0
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".md"):
                process_file(os.path.join(dirpath, filename))
                count += 1
    print(f"Scanned {count} files.")
