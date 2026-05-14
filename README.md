# Quest Vault Reborn

Neuaufbau des eingestellten Online-Tools **Quest Vault** für das Brettspiel
**Descent – Die Reise ins Dunkel 2. Edition**.

Das Original war unter www.DescentQuestVault.com erreichbar und wurde vor einigen Jahren eingestellt.
Dieses Projekt baut das Tool neu auf und erweitert es.

---

## Schnellstart (für Tester)

### Option 1 – Direkt im Browser (empfohlen, kein Setup nötig)

Das Tool wird auf **GitHub Pages** gehostet. Einfach die URL aufrufen:

```
https://zedyo.github.io/quest-vault-reborn/
```

Nach jedem Commit auf `main` wird die Seite automatisch aktualisiert.
*(Hinweis: GitHub Pages-Deployment wird in Phase 3 eingerichtet.)*

### Option 2 – Lokal aus dem Repository starten

**Voraussetzungen:** Node.js ≥ 18 und npm installiert.

```bash
# 1. Repository klonen
git clone https://github.com/zedyo/quest-vault-reborn.git
cd quest-vault-reborn

# 2. Abhängigkeiten installieren (sobald src/ existiert)
npm install

# 3. Entwicklungsserver starten
npm run dev
```

Der Browser öffnet sich automatisch unter `http://localhost:5173`.

### Option 3 – Lokale HTML-Datei öffnen

Sobald ein Build erstellt wurde:

```bash
npm run build
```

Dann `dist/index.html` direkt im Browser öffnen – kein Server nötig.

---

## Entwicklungsumgebung einrichten

```bash
# Repository klonen
git clone https://github.com/zedyo/quest-vault-reborn.git
cd quest-vault-reborn

# Auf den Entwicklungsbranch wechseln
git checkout claude/descent-quest-vault-DCYTY

# Dependencies installieren (nach Phase 3)
npm install

# Dev-Server mit Hot-Reload starten
npm run dev

# Tests ausführen
npm run test

# Produktions-Build erstellen
npm run build
```

---

## Projektstruktur

```
quest-vault-reborn/
├── CLAUDE.md          ← Projektsteuerung (für KI-Assistent)
├── README.md          ← Diese Datei
├── docs/
│   ├── research/      ← Recherche-Ergebnisse
│   ├── translations/  ← DE-EN Glossar
│   ├── game-data/     ← Spielinhalt-Datenbank
│   └── architecture/  ← Technische Planung
└── src/               ← Quellcode (ab Phase 3)
```

---

## Features (geplant)

- [ ] Interaktiver Quest-Editor (Quests erstellen und speichern)
- [ ] Spielplan-Generator mit Drag & Drop Tiles
- [ ] Erweiterungs-Verwaltung (eigenen Bestand auswählen)
- [ ] Monster-Verwaltung mit Werten aller Erweiterungen
- [ ] Helden-Übersicht
- [ ] Quest-Export/-Import
- [ ] Deutsche Benutzeroberfläche

---

## Mitmachen / Beitragen

Beiträge sind willkommen! Bitte einen Fork erstellen und einen Pull Request einreichen.

---

## Lizenz

Dieses Projekt ist ein Community-Projekt ohne kommerzielle Absichten.
Descent: Journeys in the Dark ist ein eingetragenes Warenzeichen von Fantasy Flight Games / Asmodee.
Alle Spielinhalte und Markennamen gehören den jeweiligen Rechteinhabern.
