// ── Nachbereitung des Builds: 404.html erzeugen ──────────────────────────────
//
// GitHub Pages kennt keine SPA-Routen. Für jeden tiefen Link (z. B.
// `/quest-vault-reborn/monster`) liefert es die 404-Seite aus — deshalb ist
// `404.html` eine Kopie von `index.html`: die App bootet und übernimmt das
// Routing selbst. (Bis v1.8.1 erledigte das ein simples `cp`.)
//
// NEU ab v1.8.2 (Branch-Vorschauen): Die 404-Seite der HAUPTSEITE bekommt einen
// kleinen Umleiter vorangestellt. Ein tiefer Link IN eine Vorschau
// (`…/preview/<slug>/monster`) würde sonst die Haupt-App unter einer
// Vorschau-URL starten. Der Umleiter merkt sich den Pfad in sessionStorage und
// springt auf die Vorschau-Wurzel; `src/main.tsx` stellt den Pfad dort wieder her.
//
// Der VORSCHAU-Build bekommt seine eigene, unveränderte 404.html — liefert
// GitHub Pages die aus dem Vorschau-Ordner aus, ist der Umweg gar nicht nötig.

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const base = process.env.PAGES_BASE || '/quest-vault-reborn/'
const isPreview = Boolean(process.env.PAGES_PREVIEW_BRANCH)

const html = readFileSync(resolve(dist, 'index.html'), 'utf8')

/**
 * Pfad als JS-String-Literal für den Inline-`<script>`-Block. `JSON.stringify`
 * entschärft Anführungszeichen, aber NICHT `</script>` — deshalb `<` zusätzlich
 * als Unicode-Escape (sonst ließe sich mit einem präparierten PAGES_BASE aus dem
 * Script-Tag ausbrechen).
 */
const jsString = (s) => JSON.stringify(String(s)).replace(/</g, '\\u003c')

const redirector = `<script>(function(){
var b=${jsString(base)},p=location.pathname,pre=b+"preview/";
if(p.indexOf(pre)!==0)return;
var slug=p.slice(pre.length).split("/")[0];
var root=slug?pre+slug+"/":pre;
if(p===root){/* Vorschau existiert nicht → Übersicht */ if(p!==pre)location.replace(pre); return;}
try{sessionStorage.setItem("qvr-redirect",p+location.search+location.hash)}catch(e){}
location.replace(root);
})()</script>`

const out = isPreview ? html : html.replace(/<head>/i, `<head>\n    ${redirector}`)

if (!isPreview && out === html) {
  throw new Error('postbuild: <head> in dist/index.html nicht gefunden – 404-Umleiter nicht eingefügt')
}

writeFileSync(resolve(dist, '404.html'), out)
console.log(`postbuild: dist/404.html geschrieben (${isPreview ? 'Vorschau' : 'Hauptseite + /preview/-Umleiter'})`)
