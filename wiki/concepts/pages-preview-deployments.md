---
type: Decision
title: Branch-Vorschauen auf GitHub Pages (v1.8.2)
description: Wie jeder Entwicklungsbranch unter /preview/<slug>/ veröffentlicht wird, ohne die Live-Seite, deren Spielstände oder Repository-Einstellungen anzutasten.
tags: [deployment, github-pages, github-actions, vorschau, service-worker, localstorage, wartung]
timestamp: 2026-07-31T00:00:00Z
---

# Ziel (User-Vorgabe 2026-07-31)

> „Ich möchte nicht nur den Main-Branch auf den GitHub Pages sehen, sondern auch
> einen beliebigen Entwicklungsbranch, bevor dieser für Main freigegeben wird —
> damit ich die Änderung prüfen/testen kann, bevor sie live geht."

Ergebnis: jeder Push auf einen Entwicklungsbranch erscheint unter

```
https://zedyo.github.io/quest-vault-reborn/preview/<slug>/
```

Die Live-Seite bleibt unter `…/quest-vault-reborn/` unverändert erreichbar; eine
Übersicht aller Vorschauen liegt unter `…/quest-vault-reborn/preview/`.

# Die vier Randbedingungen, die den Aufbau bestimmt haben

## 1. GitHub Pages kennt nur EINE Seite pro Repository

Die Pages-Quelle steht auf **„GitHub Actions"** (seit #105 der einzige
Deployment-Weg, siehe unten). Ein Deployment ersetzt immer den **kompletten**
Seitenbaum — es gibt keine zweite Seite und keinen zweiten Slot für Vorschauen.

→ **Lösung:** Ein Inhalts-Branch **`pages-content`** hält den gesamten Seitenbaum:

```
pages-content
├── index.html, assets/, cards/, game-icons/ …   ← Hauptseite (aus main)
└── preview/
    ├── index.html                               ← generierte Übersicht
    └── <slug>/…                                 ← je Branch eine Vorschau
```

Alle Workflows schreiben nur noch **Inhalt** dorthin; deployt wird an genau einer
Stelle. Das ist zugleich die dauerhafte Absicherung gegen den Fehler aus #105:
Damals liefen zwei Deployment-Wege (Branch-Push → GitHubs eingebauter
`pages-build-deployment` und Artefakt-Weg → `deploy-pages`) gegeneinander, der
Verlierer brach mit HTTP 400 ab.

## 2. Das `github-pages`-Environment erlaubt Deployments nur vom Default-Branch

Ein Workflow, der auf einem Feature-Branch läuft, bekommt beim Deployen
„Branch … is not allowed to deploy to github-pages due to environment protection
rules". Das ließe sich nur per Repository-Einstellung ändern.

→ **Lösung ohne Einstellungsänderung:** Der Workflow **„Pages veröffentlichen"**
(`pages-publish.yml`) hängt an `workflow_run` und läuft damit *immer* im Kontext
des Default-Branches. Er lädt den Inhalts-Branch als Pages-Artefakt hoch und
deployt ihn. Ausgelöst wird er von „Deploy to GitHub Pages", „Branch-Vorschau"
und „Branch-Vorschau aufräumen".

Nebeneffekt (erwünscht): Verdrängt ein neuerer wartender Lauf einen älteren, geht
nichts verloren — **jeder** Lauf veröffentlicht den vollständigen aktuellen Stand.

**Bootstrap-Falle:** `workflow_run` feuert nur, wenn die Workflow-Datei auf dem
Default-Branch liegt. Die Vorschau-Mechanik kann sich deshalb **nicht selbst**
vorab als Vorschau zeigen — sie wirkt erst ab dem Merge nach `main`.

## 3. 131 MB Kartenbilder dürfen nicht je Vorschau dupliziert werden

`public/cards` + `public/game-icons` machen den Löwenanteil des Builds aus
(Hauptseite ≈ 135 MB). Pages deckelt die Seite bei **1 GB** — fünf vollständige
Vorschauen würden das reißen.

→ **Lösung:** Vorschau-Builds setzen `PAGES_ASSET_BASE` auf die Hauptseite und
lassen die Bildordner weg (**≈ 5 MB je Vorschau**). Im Code läuft das über
`ASSET_BASE` in `src/data/assetUrls.ts` (statt `import.meta.env.BASE_URL`).

**Ausnahme automatisch erkannt:** Ändert der Branch selbst Dateien unter
`public/cards`/`public/game-icons` (`git diff origin/main HEAD`), bekommt die
Vorschau ihre eigene Kopie — sonst würde man die alten Bilder prüfen. Manuell
erzwingbar über den `assets`-Eingabewert (`auto`/`main`/`branch`) bei
`workflow_dispatch`.

## 4. Der Service Worker der Hauptseite kapert Vorschau-Navigationen

Der generierte Worker registriert eine `NavigationRoute` auf `index.html` und
beantwortet damit **jede** Navigation in seinem Scope `/quest-vault-reborn/` —
also auch `/quest-vault-reborn/preview/<slug>/…`. Ohne Gegenmaßnahme sieht man
unter der Vorschau-Adresse die **Haupt-App**.

Zwei Maßnahmen, beide nötig:

* **`navigateFallbackDenylist: [/^\/quest-vault-reborn\/preview\//]`** im
  Workbox-Abschnitt (vite.config.ts) — gilt für alle künftig ausgelieferten Worker.
* **Selbstheilung für Bestands-Worker** in `src/main.tsx`: Läuft der
  Produktions-Build unter einer `/preview/`-URL, hat ein alter Worker die
  Navigation abgefangen → die Registrierungen **im eigenen Basis-Pfad** abmelden
  und neu laden (Marker in `sessionStorage` gegen Endlosschleifen).
* Vorschau-Builds registrieren **selbst keinen** Worker (`VitePWA disable`),
  damit sich nicht zwei Worker denselben Scope teilen.

Beides ist mit einem nachgebauten Alt-Worker im Browser verifiziert.

# Getrennte Spielstände (Datenschutz-Invariante)

Vorschau und Live-Seite liegen auf **derselben Domain** und teilen sich damit
`localStorage`. Eine Vorschau mit geändertem Persist-Schema würde die echten
Spielstände migrieren, obwohl der Branch noch gar nicht freigegeben ist.

→ `storageKey()` (`src/utils/previewBuild.ts`) hängt in Vorschau-Builds
`@preview:<slug>` an **jeden** Schlüssel (`quest-vault-reborn`, `qvr-sessions`,
`qvr-theme`, `qvr-builder-draft`, `qvr-scenario-draft`, ErrorBoundary-Backup).
Im Produktions-Build gibt sie den Namen **unverändert** zurück — ein Unit-Test
hält das fest, damit sich Bestandsdaten niemals verschieben.

Wer mit echten Daten testen will: in der Live-Version exportieren, in der
Vorschau importieren. Das Vorschau-Abzeichen sagt das auch dort.

# Tiefe Links in eine Vorschau

GitHub Pages hat keine SPA-Routen; `…/preview/<slug>/monster` ist eine echte 404.
`scripts/postbuild.mjs` stellt der **404-Seite der Hauptseite** deshalb einen
Umleiter voran: Pfad in `sessionStorage` merken → auf die Vorschau-Wurzel
springen → `src/main.tsx` stellt den Pfad per `history.replaceState` wieder her.
Unbekannte Vorschau-Adressen landen auf der Übersicht statt auf einer weißen Seite.

Liefert Pages die 404-Seite aus dem Vorschau-Ordner aus (statt der Wurzel-404),
funktioniert der Fall ohne Umweg — beide Auslieferungsarten sind geprüft.

# Aufräumen

`preview-cleanup.yml` entfernt die Vorschau, sobald der Branch gelöscht wird
(also im Regelfall direkt nach dem Merge). Manuell: Workflow „Branch-Vorschau
aufräumen" mit Branchnamen starten.

Der Slug (`scripts/preview-slug.mjs`) ist deterministisch, flach und
URL-sicher — derselbe Branch ergibt immer denselben Ordner (sonst würde das
Aufräumen ins Leere greifen). Lange Namen werden gekürzt und mit einem Hash des
**vollen** Namens unterscheidbar gehalten. Die Composite-Action prüft den Slug
zusätzlich gegen `^[a-z0-9][a-z0-9-]{0,63}$`, damit ein präparierter Branchname
nicht aus `preview/` ausbrechen kann.

# Was bewusst NICHT gemacht wurde

* **Kein Umstellen der Pages-Quelle auf „Deploy from a branch".** Das wäre
  schneller (kein Artefakt-Upload), verlangt aber eine manuelle Einstellung und
  würde GitHubs eingebauten `pages-build-deployment` reaktivieren — genau den
  Weg, der in #105 mit dem Artefakt-Weg kollidierte.
* **Keine Vorschau für `dependabot/**`-Branches.** Dependabot-Pushes bekommen ein
  schreibgeschütztes Token und könnten den Inhalts-Branch nicht aktualisieren.
* **Keine Tests im Vorschau-Workflow.** Die laufen bereits in `ci.yml` auf
  demselben Push; eine Vorschau soll auch von einem Stand mit rotem Test
  entstehen können (der Build selbst muss natürlich durchlaufen).

# Härtung (Ergebnis des Sicherheits-Reviews)

Beide Prüfer gaben FREIGABE; die folgenden Punkte wurden davor noch nachgezogen:

* **Build ohne Schreibrecht.** `npm ci`/`npm run build` laufen in einem Job mit
  `contents: read`; erst ein nachgelagerter Job mit `contents: write` schreibt in
  den Inhalts-Branch (`preview.yml` und `deploy.yml`). Ein `postinstall`-Skript
  einer kompromittierten Abhängigkeit sieht damit nie ein schreibfähiges Token.
* **Veröffentlichungslogik aus `main`.** Der Veröffentlichungs-Job checkt den
  Default-Branch aus und nutzt dessen Composite-Action + `scripts/`. Ein Branch
  kann seine eigene Vorschau also nicht dazu benutzen, mit dem Schreib-Token die
  Wurzel der Live-Seite zu überschreiben. Kehrseite: Änderungen AN der
  Veröffentlichungslogik wirken erst nach dem Merge.
* **Service-Worker-Abmeldung nur im eigenen Pfad.** `getRegistrations()` liefert
  alle Worker der ORIGIN — `zedyo.github.io` teilen sich alle GitHub-Pages-Projekte
  des Kontos. Es wird nach `scope`-Pfad gefiltert.
* **Deep-Link-Wiederherstellung normalisiert.** `new URL(target, location.origin)`
  statt reinem `startsWith` (löst `..`-Segmente auf); `sessionStorage` ist ebenfalls
  origin-weit geteilt.
* **`</script>`-Ausbruch.** `postbuild.mjs` escaped `<` als `\u003c`.
* **Übersichtsseite:** `href` nur aus `https://github.com/`-Allowlist.
* **Aufräumen mit Branch-Abgleich.** Zwei Branchnamen können denselben Slug
  ergeben (`feature/foo` ↔ `feature-foo`). Entfernt wird nur, wenn die
  `preview.json` der Vorschau zum gelöschten Branch gehört.

# Betrieb & Grenzen

* Ein Vorschau-Deployment dauert Build (~1 min) + Veröffentlichung (~1–2 min).
* Der Inhalts-Branch wächst pro Deployment nur um die **geänderten** Dateien —
  die Bildarchive liegen als identische Blobs bereits im Repository (Git dedupliziert).
* Nähert sich der Seitenbaum 900 MB, warnt die Publish-Action im Log.

# Citations

* `.github/workflows/preview.yml`, `preview-cleanup.yml`, `pages-publish.yml`, `deploy.yml`
* `.github/actions/pages-content/action.yml`
* `vite.config.ts`, `src/utils/previewBuild.ts`, `src/main.tsx`, `src/data/assetUrls.ts`
* `scripts/preview-slug.mjs`, `scripts/postbuild.mjs`, `scripts/preview-index.mjs`
* `src/utils/__tests__/previewBuild.test.ts`
