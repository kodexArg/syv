"""
Script to migrate markdown frontmatter metadata from Spanish to English field names.

This script recursively processes all .md files in the project and updates:
- titulo -> title
- carpeta -> folder
- descripcion -> description
- tags -> tags (no change)

The script preserves all other fields and maintains proper YAML formatting.
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple


def find_markdown_files(root_dir: str) -> List[Path]:
    """Find all markdown files recursively in the given directory."""
    root = Path(root_dir)
    return list(root.rglob("*.md"))


def extract_frontmatter(content: str) -> Tuple[str, str, str]:
    """
    Extract frontmatter, body, and determine if frontmatter exists.
    
    Returns:
        (frontmatter, body, has_frontmatter)
    """
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)$'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if match:
        return match.group(1), match.group(2), True
    return "", content, False


def migrate_frontmatter(frontmatter: str) -> Tuple[str, bool]:
    """
    Migrate frontmatter from Spanish to English field names.
    
    Returns:
        (migrated_frontmatter, was_changed)
    """
    changed = False
    lines = frontmatter.split('\n')
    migrated_lines = []
    
    for line in lines:
        original_line = line
        
        # Match field at start of line (not indented tags)
        if re.match(r'^titulo:', line):
            line = re.sub(r'^titulo:', 'title:', line)
            changed = True
        elif re.match(r'^carpeta:', line):
            line = re.sub(r'^carpeta:', 'folder:', line)
            changed = True
        elif re.match(r'^descripcion:', line):
            line = re.sub(r'^descripcion:', 'description:', line)
            changed = True
        
        migrated_lines.append(line)
    
    return '\n'.join(migrated_lines), changed


def validate_indentation(frontmatter: str) -> List[str]:
    """
    Validate YAML frontmatter indentation, especially for tags.
    
    Returns list of issues found.
    """
    issues = []
    lines = frontmatter.split('\n')
    in_tags = False
    
    for i, line in enumerate(lines, 1):
        # Check if entering tags section
        if re.match(r'^tags:\s*$', line):
            in_tags = True
            continue
        
        # Check if leaving tags section
        if in_tags and line and not line.startswith(' ') and not line.startswith('-'):
            in_tags = False
        
        # Validate tag indentation
        if in_tags and line.strip().startswith('-'):
            # Tags should be indented with 2 spaces
            if not re.match(r'^  - ', line):
                issues.append(f"Line {i}: Tag not properly indented (should be '  - tag'): {line}")
    
    return issues


def process_file(file_path: Path) -> Dict[str, any]:
    """
    Process a single markdown file.
    
    Returns dict with processing results.
    """
    result = {
        'path': str(file_path),
        'changed': False,
        'had_frontmatter': False,
        'issues': [],
        'error': None
    }
    
    try:
        # Read file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter
        frontmatter, body, has_frontmatter = extract_frontmatter(content)
        result['had_frontmatter'] = has_frontmatter
        
        if not has_frontmatter:
            result['issues'].append('No frontmatter found')
            return result
        
        # Migrate frontmatter
        migrated_frontmatter, changed = migrate_frontmatter(frontmatter)
        result['changed'] = changed
        
        # Validate indentation
        validation_issues = validate_indentation(migrated_frontmatter)
        result['issues'].extend(validation_issues)
        
        # Write back if changed
        if changed:
            new_content = f"---\n{migrated_frontmatter}\n---\n{body}"
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
    
    except Exception as e:
        result['error'] = str(e)
    
    return result


def main():
    """Main execution function."""
    # Get project root (assuming script is in 0_proyecto/scripts)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent.parent
    
    print(f"🔍 Searching for markdown files in: {project_root}")
    
    # Find all markdown files
    md_files = find_markdown_files(project_root)
    print(f"📄 Found {len(md_files)} markdown files\n")
    
    # Process files
    results = []
    changed_count = 0
    error_count = 0
    no_frontmatter_count = 0
    issue_count = 0
    
    for md_file in md_files:
        result = process_file(md_file)
        results.append(result)
        
        if result['changed']:
            changed_count += 1
            print(f"✅ Migrated: {result['path']}")
        
        if result['error']:
            error_count += 1
            print(f"❌ Error in {result['path']}: {result['error']}")
        
        if not result['had_frontmatter']:
            no_frontmatter_count += 1
        
        if result['issues']:
            issue_count += 1
            print(f"⚠️  Issues in {result['path']}:")
            for issue in result['issues']:
                print(f"    - {issue}")
    
    # Summary
    print(f"\n{'='*60}")
    print("📊 MIGRATION SUMMARY")
    print(f"{'='*60}")
    print(f"Total files processed: {len(md_files)}")
    print(f"Files migrated: {changed_count}")
    print(f"Files with issues: {issue_count}")
    print(f"Files without frontmatter: {no_frontmatter_count}")
    print(f"Errors: {error_count}")
    print(f"{'='*60}\n")
    
    # Files with issues
    if issue_count > 0:
        print("⚠️  Files requiring manual review:")
        for result in results:
            if result['issues']:
                print(f"  - {result['path']}")
                for issue in result['issues']:
                    print(f"      {issue}")
        print()


if __name__ == "__main__":
    main()
