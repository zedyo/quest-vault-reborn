// ── Übersichtsseite aller Branch-Vorschauen ──────────────────────────────────
//
// Erzeugt `<site>/preview/index.html` — die Liste aller gerade veröffentlichten
// Vorschauen. Grundlage sind die `preview/<slug>/preview.json`-Dateien, die der
// Vorschau-Workflow beim Veröffentlichen ablegt.
//
// Aufruf:  node scripts/preview-index.mjs <site-verzeichnis> [<basis-pfad>]
//
// Die Seite ist bewusst eigenständiges, abhängigkeitsfreies HTML (sie muss auch
// funktionieren, wenn eine Vorschau die App gerade zerlegt hat) und dient dem
// 404-Umleiter als Ziel für unbekannte Vorschau-Adressen.

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const siteDir = resolve(process.argv[2] || 'site')
const base = process.argv[3] || '/quest-vault-reborn/'
const previewDir = join(siteDir, 'preview')

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

/**
 * Nur GitHub-Links zulassen. Die `preview.json`-Dateien liegen dauerhaft im
 * Inhalts-Branch; ohne Allowlist könnte dort später ein `javascript:`-Link
 * landen (Attribut-Ausbruch verhindert `esc()` zwar, das Schema aber nicht).
 */
const safeHref = (u) => (/^https:\/\/github\.com\/[^\s"']*$/.test(String(u)) ? String(u) : '')

function readPreviews() {
  if (!existsSync(previewDir)) return []
  const out = []
  for (const entry of readdirSync(previewDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const metaPath = join(previewDir, entry.name, 'preview.json')
    let meta = {}
    if (existsSync(metaPath)) {
      try {
        meta = JSON.parse(readFileSync(metaPath, 'utf8'))
      } catch {
        /* beschädigte Metadaten → Eintrag trotzdem auflisten */
      }
    }
    out.push({
      slug: entry.name,
      branch: meta.branch || entry.name,
      sha: meta.sha || '',
      builtAt: meta.builtAt || '',
      commitUrl: safeHref(meta.commitUrl),
      prUrl: safeHref(meta.prUrl),
    })
  }
  return out.sort((a, b) => String(b.builtAt).localeCompare(String(a.builtAt)))
}

const previews = readPreviews()

const rows = previews
  .map(
    (p) => `      <li class="card">
        <a class="title" href="${esc(base)}preview/${esc(p.slug)}/">${esc(p.branch)}</a>
        <dl>
          <div><dt>Commit</dt><dd>${
            p.commitUrl ? `<a href="${esc(p.commitUrl)}">${esc(p.sha || '—')}</a>` : esc(p.sha || '—')
          }</dd></div>
          <div><dt>Gebaut</dt><dd>${esc(p.builtAt || '—')}</dd></div>
          ${p.prUrl ? `<div><dt>PR</dt><dd><a href="${esc(p.prUrl)}">ansehen</a></dd></div>` : ''}
        </dl>
      </li>`,
  )
  .join('\n')

const empty = `      <li class="card empty">Zurzeit ist keine Vorschau veröffentlicht.
        Sie entsteht automatisch beim nächsten Push auf einen Entwicklungsbranch.</li>`

const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Quest Vault Reborn – Branch-Vorschauen</title>
<style>
  :root { color-scheme: dark light; --bg:#14100c; --fg:#efe6d6; --muted:#a2937c; --line:#3a3128; --card:#1d1811; --accent:#e0552b; }
  @media (prefers-color-scheme: light) {
    :root { --bg:#e9dcc0; --fg:#2a2118; --muted:#6c5c46; --line:#c8b48a; --card:#f6ecd6; --accent:#9a6b12; }
  }
  * { box-sizing: border-box; }
  body { margin:0; padding:2.5rem 1.25rem; background:var(--bg); color:var(--fg);
         font:16px/1.6 ui-serif, Georgia, serif; }
  main { max-width: 46rem; margin: 0 auto; }
  h1 { font-size: 1.5rem; margin: 0 0 .35rem; letter-spacing:.02em; }
  p.lead { color: var(--muted); margin:0 0 2rem; font-size:.95rem; }
  ul { list-style:none; margin:0; padding:0; display:grid; gap:.75rem; }
  .card { border:1px solid var(--line); background:var(--card); border-radius:12px; padding:1rem 1.15rem; }
  .card.empty { color:var(--muted); font-size:.92rem; }
  a { color:var(--accent); }
  a.title { display:block; font-size:1.05rem; font-weight:600; word-break:break-all; text-decoration:none; }
  a.title:hover { text-decoration:underline; }
  dl { display:flex; flex-wrap:wrap; gap:.25rem 1.5rem; margin:.6rem 0 0; font-size:.82rem; }
  dl > div { display:flex; gap:.4rem; }
  dt { color:var(--muted); }
  dd { margin:0; font-family: ui-monospace, monospace; }
  footer { margin-top:2.5rem; color:var(--muted); font-size:.8rem; border-top:1px solid var(--line); padding-top:1rem; }
</style>
</head>
<body>
<main>
  <h1>Branch-Vorschauen</h1>
  <p class="lead">Entwicklungsstände, die noch nicht in <code>main</code> gemergt sind.
     Jede Vorschau speichert ihre Quests und Spielstände getrennt von der Live-Version.</p>
  <ul>
${previews.length ? rows : empty}
  </ul>
  <footer>
    <a href="${esc(base)}">← Zur Live-Version</a>
  </footer>
</main>
</body>
</html>
`

mkdirSync(previewDir, { recursive: true })
writeFileSync(join(previewDir, 'index.html'), html)
console.log(`preview-index: ${previews.length} Vorschau(en) gelistet → preview/index.html`)
