/**
 * Utility functions for URL generation with base path support
 */

/**
 * Generate a URL with the correct base path
 * @param path - The path to append to the base URL
 * @returns The complete URL with base path
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash from path if base already ends with slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure base ends with slash
  const cleanBase = base.endsWith('/') ? base : base + '/';
  
  return cleanBase + cleanPath;
}

/**
 * Generate a docs URL with the correct base path
 * @param collection - The collection name
 * @param slug - The document slug (optional)
 * @returns The complete docs URL with base path
 */
export function docsUrl(collection: string, slug?: string): string {
  const path = slug ? `docs/${collection}/${slug}/` : `docs/${collection}/`;
  return withBase(path);
}

/**
 * Generate a home URL with the correct base path
 * @returns The home URL with base path
 */
export function homeUrl(): string {
  return withBase('');
}