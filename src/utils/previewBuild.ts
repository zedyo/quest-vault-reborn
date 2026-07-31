// ── Branch-Vorschau (GitHub Pages) ───────────────────────────────────────────
//
// Jeder Entwicklungsbranch kann vor dem Merge unter
// `/quest-vault-reborn/preview/<slug>/` veröffentlicht werden. Dieses Modul
// bündelt alles, was die App darüber wissen muss.
//
// WICHTIG — getrennte Spielstände: Vorschau und Hauptseite liegen auf DERSELBEN
// Domain (zedyo.github.io) und teilen sich damit denselben localStorage. Ohne
// Trennung würde eine Vorschau mit geändertem Persist-Schema die Daten der
// Hauptseite migrieren (bei Bestandsnutzern also den echten Spielstand
// verändern), obwohl der Branch noch gar nicht freigegeben ist. Deshalb bekommt
// jede Vorschau ihren EIGENEN Schlüsselraum: `storageKey()` hängt in
// Vorschau-Builds ein Suffix an — im Produktions-Build gibt sie den Namen
// unverändert zurück (keinerlei Änderung an bestehenden Daten).

/** Vorschau-Kennung des laufenden Builds; `null` in der Produktionsversion. */
export const PREVIEW = __PREVIEW__

/** Läuft die App als Branch-Vorschau? */
export const IS_PREVIEW = PREVIEW !== null

/**
 * Basis-URL der Hauptseite (Produktion) — für den Rücklink im Abzeichen.
 *
 * Bewusst aus dem eigenen Basis-Pfad abgeleitet und NICHT aus `ASSET_BASE`:
 * Vorschauen, die ihre Bilder selbst mitbringen, haben dort ihren eigenen Pfad
 * stehen — der Rücklink muss aber immer zur Live-Version führen.
 */
export const PRODUCTION_BASE = PREVIEW
  ? import.meta.env.BASE_URL.replace(/preview\/[^/]+\/$/, '')
  : import.meta.env.BASE_URL

/**
 * localStorage-Schlüssel je Build-Ziel. Produktion: unverändert.
 * Vorschau: `<name>@preview:<slug>`.
 */
export function storageKey(name: string): string {
  return PREVIEW ? `${name}@preview:${PREVIEW.slug}` : name
}
