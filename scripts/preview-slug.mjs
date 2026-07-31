// ── Branchname → Vorschau-Ordnername ─────────────────────────────────────────
//
// Vorschau-Deployments liegen unter `<base>preview/<slug>/`. Der Slug muss
// URL-sicher und FLACH sein (Branches wie `claude/foo-bar` enthalten `/`, das
// sonst eine zusätzliche Ordnerebene erzeugen würde — dann stimmen weder die
// Aufräum-Logik noch der 404-Umleiter).
//
// Wird sowohl von den Workflows (CLI) als auch vom Unit-Test genutzt.

const MAX_LEN = 48

/** Kleiner, stabiler Hash (djb2) — gleiches Muster wie `safeId` im Session-Import. */
function djb2(input) {
  let h = 5381
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input.charCodeAt(i)) >>> 0
  return h.toString(36)
}

/**
 * Branchname → Ordnername unter `preview/`.
 *
 *   `claude/github-pages-preview-e9v4td` → `claude-github-pages-preview-e9v4td`
 *
 * Zu lange Namen werden gekürzt und bekommen einen Hash-Suffix des VOLLEN
 * Namens angehängt — so bleiben zwei lange Branches mit gleichem Präfix
 * unterscheidbar, und derselbe Branch bekommt immer denselben Slug (idempotent).
 */
export function previewSlug(branch) {
  const raw = String(branch ?? '').trim()
  const cleaned = raw
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  if (!cleaned) return `branch-${djb2(raw)}`
  if (cleaned.length <= MAX_LEN) return cleaned
  return `${cleaned.slice(0, MAX_LEN).replace(/-+$/, '')}-${djb2(raw)}`
}

// CLI: node scripts/preview-slug.mjs "feature/foo"
if (process.argv[1] && process.argv[1].endsWith('preview-slug.mjs')) {
  process.stdout.write(previewSlug(process.argv[2]))
}
