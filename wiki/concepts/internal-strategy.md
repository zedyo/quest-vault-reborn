---
type: Decision
title: Interne Projektstrategie (Monetarisierung, Recht, Validierung)
description: Interne Strategie-Notizen — NICHT für README/öffentliche Docs. Monetarisierung/Ko-Fi, Rechtslage, Daten-Validierungsstrategie.
tags: [intern, strategie, monetarisierung, recht]
timestamp: 2026-07-17T00:00:00Z
---

> ⚠️ **INTERN — nicht für README/öffentliche Docs, nicht in Release Notes.** Diese
> Seite hält interne Strategie fest. Nichts hiervon in benutzersichtbare Texte,
> Release Notes oder das App-UI übernehmen.

# Monetarisierung & Ko-Fi

- **Ko-Fi-Spendenbutton** in die App einbauen (dezent, Fußzeile) — geplant für nach v1.2.
- **Rechtliche Einschätzung Premium-Features:** Da FFG-IP-Material (Karten-Scans,
  Regeltext) verwendet wird (Grauzone), ist ein kommerzielles Modell mit Bezahl-Features
  rechtlich riskant. Empfehlung: **Ko-Fi als freiwillige Spende** (wie andere
  Community-Tools) statt Bezahl-Schranken → hält das rechtliche Risiko minimal.
- **Premium-DB-Sync (v2.0):** evaluieren, ob ein optionales Konto + Sync-Feature mit
  eigenem Backend als „Dienstleistung" (nicht als Spielinhalt) rechtlich sauber ist —
  inhaltlich von den FFG-Daten trennbar.

# Daten-Validierungsstrategie

- Alle Spielwerte müssen gegen offizielle Karten-Scans validiert werden.
- Quelle: any2cards/d2e ist gut, aber nicht immer 100 % korrekt → BGG und Fandom-Wiki
  als Kreuzreferenz.
- Beim Validieren: Datum + „✅ validiert" in der `.md`-Datei vermerken (siehe
  [Kartenbild-Validierung](./card-image-validation.md)).

# Verwandt

* [Offene Entscheidungen](./open-decisions.md) - enthält u. a. IP-Rechte, Backend, Monetarisierung.

# Citations

[1] [CLAUDE.md](../../CLAUDE.md) — „Interne Projektstrategie (nicht für README/öffentliche Docs)".
