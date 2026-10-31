const gradients = [
  'linear-gradient(135deg, #6366f1, #8b5cf6)',
  'linear-gradient(135deg, #0ea5e9, #06b6d4)',
  'linear-gradient(135deg, #10b981, #059669)',
  'linear-gradient(135deg, #f59e0b, #f97316)',
  'linear-gradient(135deg, #ec4899, #a855f7)',
  'linear-gradient(135deg, #8b5cf6, #3b82f6)',
];

/** Stable gradient per project, so a project keeps the same color on every page. */
export function gradientFor(slug: string): string {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return gradients[hash % gradients.length];
}
