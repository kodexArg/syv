"""
Script to fix tag indentation issues in markdown frontmatter.

Many files have tags that are not properly indented. This script fixes them to match
the YAML standard of 2-space indentation for list items.
"""

import os
import re
from pathlib import Path
from typing import Tuple


def find_markdown_files(root_dir: str) -> list:
    """Find all markdown files recursively in the given directory."""
    root = Path(root_dir)
    return list(root.rglob("*.md"))


def extract_frontmatter(content: str) -> Tuple[str, str, bool]:
    """Extract frontmatter, body, and determine if frontmatter exists."""
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)$'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if match:
        return match.group(1), match.group(2), True
    return "", content, False


def fix_tag_indentation(frontmatter: str) -> Tuple[str, bool]:
    """
    Fix tag indentation in frontmatter.
    
    Tags should be indented with exactly 2 spaces: '  - tag'
    """
    changed = False
    lines = frontmatter.split('\n')
    fixed_lines = []
    in_tags = False
    
    for line in lines:
        original_line = line
        
        # Check if we're entering tags section
        if re.match(r'^tags:\s*$', line):
            in_tags = True
            fixed_lines.append(line)
            continue
        
        # Check if we're leaving tags section
        if in_tags and line and not line.startswith(' ') and not line.startswith('-'):
            in_tags = False
        
        # Fix tag indentation if in tags section
        if in_tags and line.strip().startswith('-'):
            # Extract the tag content
            tag_content = line.strip()[1:].strip()  # Remove '-' and whitespace
            # Rebuild with proper indentation
            line = f"  - {tag_content}"
            if line != original_line:
                changed = True
        
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines), changed


def process_file(file_path: Path) -> dict:
    """Process a single markdown file to fix tag indentation."""
    result = {
        'path': str(file_path),
        'changed': False,
        'error': None
    }
    
    try:
        # Read file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter
        frontmatter, body, has_frontmatter = extract_frontmatter(content)
        
        if not has_frontmatter:
            return result
        
        # Fix tag indentation
        fixed_frontmatter, changed = fix_tag_indentation(frontmatter)
        result['changed'] = changed
        
        # Write back if changed
        if changed:
            new_content = f"---\n{fixed_frontmatter}\n---\n{body}"
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
    
    except Exception as e:
        result['error'] = str(e)
    
    return result


def main():
    """Main execution function."""
    # Get project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent.parent
    
    print(f"🔧 Fixing tag indentation in: {project_root}\n")
    
    # Find all markdown files
    md_files = find_markdown_files(project_root)
    
    # Process files
    changed_count = 0
    error_count = 0
    
    for md_file in md_files:
        result = process_file(md_file)
        
        if result['changed']:
            changed_count += 1
            print(f"✅ Fixed: {result['path']}")
        
        if result['error']:
            error_count += 1
            print(f"❌ Error in {result['path']}: {result['error']}")
    
    # Summary
    print(f"\n{'='*60}")
    print("📊 FIX SUMMARY")
    print(f"{'='*60}")
    print(f"Total files processed: {len(md_files)}")
    print(f"Files fixed: {changed_count}")
    print(f"Errors: {error_count}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
