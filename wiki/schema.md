---
type: Schema
title: Wiki-Schema & Betriebsanleitung
description: Aufbau, Konventionen, Konzept-Typen und Ingest-/Query-/Lint-Workflows dieses Projekt-Wikis.
tags: [meta, schema, wiki, okf]
timestamp: 2026-07-17T00:00:00Z
---

# Zweck

Dieses Verzeichnis (`wiki/`) ist das **kompoundierende Projekt-Gedächtnis** von
*Quest Vault Reborn*. Es folgt Andrej Karpathys „LLM-Wiki"-Konzept und ist nach
dem **Open Knowledge Format (OKF v0.1)** formatiert.

Die Grundidee: Statt Wissen bei jeder Frage neu aus Rohquellen zu rekonstruieren
(RAG), pflegt ein LLM-Agent hier ein **persistentes, verlinktes Wiki**, das mit
jeder ingestierten Quelle und jeder beantworteten Frage reicher wird. Die
Querverweise sind schon gezogen, Widersprüche schon markiert, die Synthese schon
geschrieben — das Wissen wird **einmal verdichtet und dann aktuell gehalten**.

**Rollenverteilung (verbindlich):**

- **Der Mensch** kuratiert Quellen, steuert die Analyse und stellt Fragen.
- **Der Agent** schreibt und pflegt *das gesamte* Wiki — Zusammenfassen,
  Querverweisen, Einsortieren, Buchführung. Der Mensch schreibt die Wiki-Seiten
  in der Regel **nicht** selbst.

Drei-Schichten-Modell (Karpathy), auf dieses Repo abgebildet:

| Schicht | In diesem Projekt | Änderbar durch Agent? |
|---|---|---|
| **Rohquellen** | Externes Material (any2cards/d2e, FFG-Karten-Scans unter `scans/`, Community-DBs wie BGG/Fandom, mitgelieferte Specs) **und** interne Artefakte (`CLAUDE.md`, `docs/**`, `src/**`) | Nein — nur lesen, nie verändern |
| **Das Wiki** | Dieses Verzeichnis `wiki/` | Ja — der Agent besitzt diese Schicht vollständig |
| **Das Schema** | Diese Datei (`wiki/schema.md`) | Ja — Mensch + Agent entwickeln es gemeinsam weiter |

> **Status:** bewusst als leeres Gerüst angelegt. Die Kataloge (`index.md`) sind
> leer und füllen sich erst beim ersten Ingest. Diese Datei beschreibt das
> Rahmenwerk, **keine** Spielinhalte.

---

# Format: Open Knowledge Format (OKF v0.1)

Dieses Bundle hält sich an OKF v0.1. Die für uns wesentlichen Regeln:

- Jedes **Konzept** ist eine UTF-8-Markdown-Datei mit (1) einem
  YAML-**Frontmatter**-Block (`---` … `---`) und (2) einem Markdown-**Body**.
- Jede nicht-reservierte `.md`-Datei **MUSS** ein Frontmatter mit nicht-leerem
  **`type`** enthalten.
- Reservierte Dateinamen (`index.md`, `log.md`) haben feste Bedeutung und sind
  **keine** Konzepte (siehe unten).
- Die **Concept-ID** ist der Pfad der Datei im Bundle ohne `.md`-Endung
  (z. B. `entities/map-grid.md` → `entities/map-grid`).
- **Permissive Konsumption:** fehlende optionale Felder, unbekannte `type`-Werte,
  zusätzliche Frontmatter-Schlüssel und (noch) kaputte Querverweise sind **kein**
  Fehler. Ein toter Link kann schlicht noch-nicht-geschriebenes Wissen bedeuten.

Das Bundle deklariert seine Zielversion über `okf_version: "0.1"` im Frontmatter
der Wurzel-[`index.md`](index.md) — die einzige `index.md`, in der Frontmatter
erlaubt ist.

---

# Verzeichnisstruktur

```
wiki/
├── index.md            # Reserviert. Wurzel-Katalog (Progressive Disclosure) + okf_version.
├── log.md              # Reserviert. Chronologisches Änderungsprotokoll.
├── schema.md           # Diese Datei. type: Schema.
├── entities/           # Greifbare Projektbausteine.
│   └── index.md
├── concepts/           # Abstraktes Wissen.
│   └── index.md
├── sources/            # Zusammenfassungen ingestierter Quellen.
│   └── index.md
└── sessions/           # Verdichtete Notizen je Arbeitssitzung.
    └── index.md
```

**Bereiche und ihre typischen `type`-Werte:**

- **`entities/`** — Module, Komponenten, Subsysteme, Seiten, Datendateien,
  Assets. Meist an eine `resource` (Repo-Pfad) gebunden.
  *Typen:* `Component`, `Module`, `Subsystem`, `Page`, `Data File`, `Asset`.
- **`concepts/`** — Muster, Verfahren/Runbooks, Architektur-Entscheidungen,
  Mechaniken, Vergleiche, Synthesen, Fallstricke. Meist **nicht** an eine
  Ressource gebunden.
  *Typen:* `Concept`, `Pattern`, `Procedure`, `Decision`, `Comparison`, `Overview`.
- **`sources/`** — je ingestierter Quelle eine Zusammenfassungsseite mit Belegen.
  *Typ:* `Source Summary`.
- **`sessions/`** — je Arbeitssitzung eine verdichtete Notiz (Kern der
  Kontext-Sicherung). Dateiname-Konvention `YYYY-MM-DD-<kurztitel>.md`.
  *Typ:* `Session Summary`.

Weitere Bereiche können bei Bedarf entstehen. OKF-Konvention für Zitat-Spiegel
ist ein `references/`-Unterverzeichnis (Typ `Reference`); erst anlegen, wenn
tatsächlich externes Material als eigenständige Konzepte gespiegelt wird.

---

# Konzept-Dokumente

## Frontmatter-Felder

**Pflicht:**

- `type` — kurze Kennung der Konzept-Art (siehe Typ-Listen oben). Nicht zentral
  registriert; beschreibend und selbsterklärend wählen.

**Empfohlen (in dieser Priorität):**

- `title` — menschenlesbarer Anzeigename.
- `description` — ein Satz Zusammenfassung (wird in `index.md` und Vorschauen genutzt).
- `resource` — kanonischer URI/Pfad des beschriebenen Assets (fehlt bei
  abstrakten Konzepten).
- `tags` — YAML-Liste kurzer Schlagworte für querschnittliche Kategorisierung.
- `timestamp` — ISO-8601-Zeitpunkt der letzten inhaltlichen Änderung.

**Erweiterungen:** beliebige weitere Schlüssel sind erlaubt und werden bewahrt.

## Body

Standard-Markdown, bevorzugt **strukturiert** (Überschriften, Listen, Tabellen,
Code-Blöcke) statt Fließtext. Keine Pflicht-Abschnitte. Konventionelle
Überschriften mit definierter Bedeutung:

| Überschrift   | Zweck |
|---------------|-------|
| `# Schema`    | Strukturierte Beschreibung von Feldern/Spalten/Schnittstellen. |
| `# Examples`  | Konkrete Nutzungsbeispiele, oft als Code-Blöcke. |
| `# Citations` | Externe Belege für Aussagen im Body (nummeriert, siehe unten). |

---

# Vorlagen

Neue Seiten aus diesen Gerüsten kopieren. (Beispielhafte Platzhalter — beim
Anlegen ausfüllen.)

**Ressourcen-gebundenes Konzept (z. B. eine Entität):**

```markdown
---
type: Component
title: <Anzeigename>
description: <Ein-Satz-Zusammenfassung>
resource: <Repo-Pfad oder URI, z. B. src/components/MapBuilder/MapGrid.tsx>
tags: [<tag>, <tag>]
timestamp: <ISO-8601>
---

# Überblick

<Was ist das, wofür ist es zuständig.>

# Schema

<Struktur / Schnittstelle / Felder, falls zutreffend.>

# Fallstricke

<Bekannte Probleme, verworfene Ansätze.>

# Verwandt

* [<Konzept>](/concepts/<id>.md) - Beziehung in Prosa erläutern.

# Citations

[1] [<Quelle>](<URL oder Bundle-Pfad>)
```

**Abstraktes Konzept (nicht an eine Ressource gebunden):**

```markdown
---
type: Concept
title: <Anzeigename>
description: <Ein-Satz-Zusammenfassung>
tags: [<tag>]
timestamp: <ISO-8601>
---

# Zusammenfassung

<Kernaussage.>

# Details

<...>

# Citations

[1] [<Quelle>](<URL oder Bundle-Pfad>)
```

---

# Verlinkung und Zitate

- **Querverweise** sind gewöhnliche Markdown-Links. **Bevorzugt bundle-relativ**
  (mit `/` beginnend, relativ zur Bundle-Wurzel: `[Karten-Raster](/entities/map-grid.md)`)
  — stabil beim Verschieben. Relative Links (`./nachbar.md`) sind erlaubt.
- Ein Link von A nach B behauptet eine **Beziehung**; die Art der Beziehung
  (Eltern/Kind, referenziert, hängt-ab-von …) steht in der umgebenden Prosa,
  nicht im Link.
- **Tote Links werden toleriert** — ggf. noch nicht geschriebenes Wissen.
- **Zitate:** stützt der Body Aussagen auf externes Material, diese Quellen unten
  unter `# Citations` nummeriert auflisten. Ziele dürfen absolute URLs,
  Bundle-Pfade oder Pfade in ein `references/`-Verzeichnis sein.

---

# Reservierte Dateien

## `index.md` (Katalog / Progressive Disclosure)

- **Kein Frontmatter** — *Ausnahme:* die Wurzel-`index.md` darf ausschließlich
  `okf_version` tragen.
- Body = ein oder mehrere Abschnitte, die Konzepte (und Unterverzeichnisse) unter
  Überschriften gruppieren; je Eintrag ein Link **plus** die `description` des
  Ziels:

```markdown
# Abschnitt / Gruppe

* [Titel](relativer-pfad) - kurze Beschreibung aus dem Frontmatter des Ziels.
```

- Der Agent aktualisiert die betroffenen `index.md` bei **jedem** Ingest.

## `log.md` (Änderungsprotokoll)

- **Kein Frontmatter.** Datumsüberschriften im Format `## YYYY-MM-DD`, **neueste
  oben**. Einträge sind Prosa-Bullets mit fettem Leitwort:

```markdown
## 2026-07-17
* **Correction**: <Quelle/Feld> — <von> → <zu> (Beleg: <Kartenscan/Karte/Regelheft>). Autoritativ gefixt in <Datei>.
* **Ingest**: <was passiert ist> — verweist auf [Seite](/pfad.md).
```

- Leitworte (Konvention): **Initialization**, **Ingest**, **Update**,
  **Query**, **Lint**, **Correction**, **Deprecation**. `log.md` darf auf jeder
  Ebene der Hierarchie liegen; zunächst genügt die Wurzel-`log.md`.

---

# Workflows

## Ingest (neue Quelle aufnehmen)

1. Quelle bereitstellen (Roh-Scans/Quellmaterial kommen unter `scans/` und werden
   **nicht** committet — siehe `.gitignore`).
2. Quelle lesen; Kernaussagen mit dem Menschen abstimmen.
3. Zusammenfassungsseite in `sources/` schreiben (`type: Source Summary`, Belege
   unter `# Citations`).
4. Betroffene `entities/`- und `concepts/`-Seiten anlegen oder fortschreiben;
   Querverweise setzen; Widersprüche zu Bestehendem **explizit markieren**.
5. Betroffene `index.md`-Kataloge aktualisieren (Titel + description-Zeile).
6. Eintrag in `log.md` (**Ingest**).
7. Bei Spieldaten gelten weiterhin die Projektregeln (autoritativ bleiben
   `docs/game-data/**` + `src/data/**`, Subagent `daten-pruefer`). Das Wiki
   **dupliziert** diese Werte nicht — es verweist und synthetisiert.

## Query (Frage beantworten)

1. Wurzel- und Bereichs-`index.md` lesen, um relevante Seiten zu finden; dann in
   die Seiten hineingehen.
2. Antwort mit Zitaten synthetisieren.
3. **Wertvolle Antworten zurückfilen:** ein Vergleich, eine Analyse, ein
   entdeckter Zusammenhang gehören als neue `concepts/`-Seite ins Wiki, nicht in
   den Chatverlauf — so kompoundieren Explorationen wie ingestierte Quellen.
4. Optional Eintrag in `log.md` (**Query**).

## Lint (Gesundheitscheck)

Periodisch prüfen und in `log.md` (**Lint**) festhalten:

- Widersprüche zwischen Seiten,
- veraltete Aussagen, die neuere Quellen überholt haben,
- Waisen-Seiten ohne eingehende Links,
- wichtige, aber seitenlose Konzepte,
- fehlende Querverweise,
- Datenlücken (ggf. per Websuche schließen),
- Konformität gegen die Checkliste unten.

---

# Korrekturen wandern zur Quelle (nicht ins Wiki)

Findet sich ein Fehler in einer Quelle, wird die **Korrektur an der autoritativen
Quelle** vorgenommen — **nie** als Dauer-Patch im Wiki abgelegt. So bleibt es bei
*einer* Wahrheit pro Fakt, und das Wiki sammelt keine „falsche Quelle +
Korrekturnotiz, die man ewig neu anwendet".

## Fall A — Quelle, die wir besitzen (`src/**`, `docs/**`, `CLAUDE.md`)

Direkt an der Quelle korrigieren. Danach verweist das Wiki nur auf die korrigierte
Fassung. Es gibt **keine** Dauer-Korrekturnotiz für etwas, das wir selbst ändern
können.

## Fall B — externe Quelle, die wir nicht ändern können (z. B. any2cards/d2e)

Den Upstream können wir nicht dauerhaft fixen (ein Re-Clone bringt den Rohfehler
zurück). Deshalb:

1. Die korrigierten Werte **einmalig in eine Datei einfrieren, die wir besitzen**
   (i. d. R. `src/data/*.ts`, z. B. als kartenscan-validiertes Literal). Ab da ist
   **das** die autoritative Quelle; der rohe Upstream wird zur Laufzeit nicht mehr
   gelesen.
2. Im Wiki bleibt nur eine **Provenienz-/Warn-Notiz** in der `sources/`-Seite
   („Upstream-Feld X ist vertauscht; korrekt liegt es in `agents.ts`") — als Schutz
   vor einem künftigen Re-Ingest, **nicht** als Patch, den man wiederholt anwendet.

## Nachvollziehbarkeit (Pflicht)

Eine Korrektur wird **nie stillschweigend** angewandt — sie hinterlässt eine Spur,
damit sie überprüfbar bleibt, falls sich später die *Korrektur selbst* als falsch
herausstellt:

1. **`wiki/log.md`** erhält einen **`Correction`**-Eintrag mit: betroffene
   Quelle/Feld, **von → zu**, **Beleg/Grund** (Kartenscan, offizielle Karte,
   Regelheft …) und Datum. Der Log ist der chronologische Prüfpfad
   (`grep "Correction" wiki/log.md`) und erlaubt es, eine spätere Gegen-Korrektur
   gegen die ursprüngliche Begründung abzuwägen.
2. **An der Quelle** (bei Spieldaten die zugehörige `docs/game-data/*.md`) wird die
   Korrektur mit `✅ validiert` + Datum vermerkt (bestehende Projekt-Regel).
3. Bei größeren oder wiederkehrenden Fehlern zusätzlich eine `concepts/`-Seite
   (`type: Decision`, Postmortem), die auf Log-Eintrag und Quelle verweist.

Ergebnis: die **korrigierten Daten** liegen an ihrem autoritativen Ort; die
**Tatsache + Begründung** der Korrektur ist im Log dauerhaft nachvollziehbar; das
Wiki hält **nie** die verfälschten Daten selbst.

---

# Beziehung zu CLAUDE.md und docs/

Das Wiki **ersetzt** die bestehenden Projekt-Artefakte nicht und **kopiert** sie
nicht — es liegt als verdichtende Erinnerungs-/Synthese-Schicht darüber und
**verweist** auf sie:

| Artefakt | Rolle (bleibt autoritativ) |
|---|---|
| `CLAUDE.md` | Verbindliche Betriebsregeln + primäres Session-Gedächtnis. |
| `docs/architecture/**` | Roadmap (`plan.md`), Entscheidungen (`decisions.md`), Akzeptanzkriterien. |
| `docs/game-data/**` | Autoritative Spieldaten-Spezifikationen. |
| `docs/research/**`, `docs/translations/**` | Recherche + Glossar. |
| `src/**` | Quelle der Wahrheit für die Implementierung. |

Das Wiki fasst zusammen, verknüpft über Bereiche hinweg und sichert Kontext über
Sessions hinweg (`sessions/`), ohne diese Quellen zu duplizieren oder zu
verändern. Verweise auf sie erfolgen über `resource` und `# Citations`.

---

# Konformitäts-Checkliste (vor dem Commit von Wiki-Änderungen)

- [ ] Jede nicht-reservierte `.md` hat ein YAML-Frontmatter mit nicht-leerem `type`.
- [ ] `index.md`-Dateien ohne Frontmatter (Ausnahme: Wurzel nur `okf_version`).
- [ ] `log.md`: Datumsüberschriften `YYYY-MM-DD`, neueste oben, fettes Leitwort.
- [ ] Interne Links bevorzugt bundle-relativ (`/…`); tote Ziele sind erlaubt.
- [ ] Betroffene `index.md`-Kataloge aktualisiert (Link + description).
- [ ] `log.md`-Eintrag ergänzt.
- [ ] Keine Rohquellen/Spielwerte dupliziert — nur verwiesen/synthetisiert.
- [ ] Quellen-Korrektur? → an der autoritativen Quelle gefixt; `Correction`-Log-Eintrag (von → zu + Beleg); keine falschen Daten im Wiki.
