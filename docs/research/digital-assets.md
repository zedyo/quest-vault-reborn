# Digitale Assets für Descent 2nd Edition

**Status:** Recherche abgeschlossen  
**Zuletzt aktualisiert:** 2026-05-14

---

## 1. Spielplan-Tiles digital

### Offizielle Quellen (offline)
- FFG betrieb bis **21. Januar 2020** den **Descent Quest Vault** (`tools.fantasyflightgames.com/descent/`) – offizielles Online-Tool zur Quest-Erstellung mit allen Tiles. Heute offline. (Shutdown-Datum + URL belegt in `quest-vault-original.md` §1/§4.)
- **Road to Legend App** (Android/iOS/Steam, kostenlos) enthält intern tile-basierte Kartendarstellungen, aber Assets sind nicht als separate Dateien zugänglich.

### Community-Referenzen auf BoardGameGeek
- "Game Tiles by Quest" (PDF): https://boardgamegeek.com/filepage/150367/game-tiles-by-quest
- "Descent Second Edition Base Game Tile Reference Sheet": https://boardgamegeek.com/filepage/93373/descent-second-edition-base-game-tile-reference-sh
- Vollständige BGG-Dateiliste: https://boardgamegeek.com/files/thing/104162
- "Visual References for All Expansion Tiles" (FFG Forum-Archiv): https://ffg-forum-archive.entropicdreams.com/topic/187833-visual-references-for-all-expansion-tiles/

**Formate:** Primär PDF und JPG/PNG – keine freien Vektor-SVGs bekannt.

### DeviantArt – Künstler "henning" (sehr relevant!)
Hochauflösende Tile-Kompilationen (1000×3500px PNG):
- Grundspiel (4 Teile): https://www.deviantart.com/henning/art/Descent-2nd-edition-4-of-4-318392039
- Lair of the Wyrm: https://www.deviantart.com/henning/art/Descent-2nd-edition-Lair-of-The-Wyrm-expansion-343566921
- Labyrinth of Ruin: https://www.deviantart.com/henning/art/Descent-Labyrinth-Of-Ruin-expansion-522530887
- Shadow of Nerekhall: https://www.deviantart.com/henning/art/Descent-Shadow-Of-Nerekhall-expansion-522930392
- The Trollfens: https://www.deviantart.com/henning/art/Descent-The-Trollfens-expansion-522539467
- Manor of Ravens: https://www.deviantart.com/henning/art/Descent-Manor-Of-Ravens-expansion-525130887

⚠️ Keine explizite freie Lizenz angegeben.

---

## 2. GitHub-Projekte mit Tile-Assets

### D2eMap (Sadgit-HL) — **Wichtigste Quelle**
- Repo: https://github.com/Sadgit-HL/D2eMap
- Live: https://sadgit-hl.github.io/D2eMap/
- Enthält: Kartenerstellungs-Tool mit Tiles, Helden- und Monster-Tokens, Overlord-Karten, Plot Decks
- Assets: Tile-Bilder im Repo (PNG)
- Lizenz: Keine offizielle Angabe für Assets (Grauzone)

### Descent Quest Builder (LorenzoBalducci96)
- Repo: https://github.com/LorenzoBalducci96/descent-quest-builder
- Besonderheit: PNG-Tiles in 4 Rotationen (0°, 90°, 180°, 270°), Namensschema `TILENAME_000.png`
- Nutzt Base64-kodierte Bilder zur CORS-Vermeidung
- Lizenz: Kein expliziter Hinweis für Bild-Assets (Grauzone)

### D2e Card Viewer (any2cards) — **Vollständigste Datenbasis**
- Repo: https://github.com/any2cards/d2e
- Enthält: JSON-Daten + Kartenbilder (Helden, Monster, Skills, Items, Map Tiles, Tokens, Fallen, Quests etc.)
- Disclaimer im Repo: "All related properties, images and text are owned by FFG"
- Browser-Extension verfügbar (Chrome/Firefox)

### Weitere Projekte
- **Severenity Quest Builder**: https://github.com/DmytroLopushanskyy/Severenity-Quest-Builder
- **Descent Dungeon Generator**: https://github.com/SirMorland/Descent-Dungeon-Generator (zufällige Encounter-Generierung)

---

## 3. Karten digital

- **any2cards/d2e** – Alle Karten-Typen: Helden, Monster, Skills, Items, Relics, Traps, Shop Items, Search Deck, Overlord Deck, Plot Deck
- **Descent Fandom Wiki** (CC-BY-SA): https://descent2e.fandom.com/wiki – Kartenbilder, Community-Content
- **BGG-Dateibereich** – Diverse Karten-Scans von Community-Mitgliedern

---

## 4. Virtual Tabletop Support

### Tabletop Simulator (Steam Workshop) — gut versorgt

| Mod | Steam-ID | Beschreibung |
|-----|----------|-------------|
| Descent 2e Main Table setup | 1371901280 | 100% aller Descent-2e-Inhalte inkl. Kampagnenbücher |
| Kisho's Descent 2nd Ed. | 2247450980 | Alle Karten bis Lost Legends, alle Figuren |
| Descent 2E English Complete 01-2020 | 1950849342 | Zusammenstellung aus vielen Mods |
| Minimalistic Version | 672704830 | Grundspiel, Karten vorbereitet |
| **(Gescriptet) Descent 2 Deutsch** | 2071233014 | ⚠️ Entfernt (Steam-Richtlinienverstoß) |
| Descent 2. Edition deutsch + Erweiterungen | 2589806936 | ⚠️ Ebenfalls entfernt |
| Descent 2 – beste deutsche Komplett-Version | 3374899458 | Deutsch, Spielertafeln, Würfel-Skripte |

**Hinweis:** TTS-Mods hosten Bild-Assets extern (imgur, Google Drive). URLs liegen in Mod-JSON-Datei. Extraktion technisch möglich, unterliegt aber FFG IP-Richtlinien.

### Vassal
- Vassal-Modul auf BGG: https://boardgamegeek.com/filepage/81517/descent-2nd-edition-vassal-module
- Community-Fortsetzungs-Thread: https://boardgamegeek.com/thread/1011361/descent-2e-vassal-module-continued
- Enthält FFG-Grafiken ohne explizite Lizenz.

### Roll20
- Kein offizielles Modul. Nur Nutzeranfragen im Forum, kein Marketplace-Produkt.

### Fantasy Grounds
- Kein offizielles Descent-2e-Modul.

### Valkyrie (Open Source, Apache-2.0)
- Repo: https://github.com/NPBruce/valkyrie
- Scenario-Builder für Descent 2e und Mansions of Madness
- **Kein eingebettetes Spielgrafiken** – Assets müssen aus der Road-to-Legend-App importiert werden.

---

## 5. Lizenz-Status – Kritische Bewertung

**FFG IP-Richtlinie (März 2019):**  
https://images-cdn.fantasyflightgames.com/filer_public/fa/b1/fab15a15-94a6-404c-ab86-6a3b0e77a7a0/ip_policy_031419_final_v21.pdf

| Erlaubt | Verboten |
|---------|---------|
| Fan-Seiten, Homebrew-Quests, Fanfiction | Verkauf von Fan-Produkten |
| Nicht-kommerzielle Weitergabe | Online-Versionen des Spiels |
| Physische Fan-Accessoires (kein Verkauf) | **Software-Applikationen mit Spielmaterial** |
| Regelreferenzen und Anleitungen | **Digitalisierte Karten-Versionen** |
| | **IP in Software-Anwendungen jeglicher Art** |
| | 3D-Druck-Dateien von Miniaturen |

### Fazit
- Alle offiziellen FFG-Grafiken unterliegen FFG/Asmodee-Copyright.
- Die IP-Richtlinie **verbietet explizit Software-Applikationen** mit Spielmaterial.
- Community-Tools (D2eMap, any2cards, Quest Builder) existieren in **rechtlicher Grauzone**: formaler Verstoß, aber geduldet solange nicht-kommerziell.
- Es gibt **keine CC-lizenzierten oder offiziell freigegebenen Tile-Grafiken**.

---

## 6. Empfehlungen für dieses Projekt

### Option A – Grauzone (Community-Praxis)
Assets aus D2eMap-Repo oder Quest-Builder extrahieren, nicht-kommerziell nutzen, mit FFG-Copyright-Hinweis. Praxis vieler Community-Tools. **Risiko: Abmahnung/Takedown möglich.**

### Option B – Rechtskonform (bevorzugt, aufwändiger)
Eigene Tile-Grafiken im Descent-Stil neu zeichnen (SVG/PNG) ohne direkte Übernahme von FFG-Material. Oder abstrakte Symbole/Wireframes verwenden.

### Option C – App-Asset-Extraktion
Aus Road-to-Legend-App (Android-APK entpacken) Tile-Grafiken extrahieren. Ebenfalls Richtlinienverstoß, technisch komplex.

### Option D – Kontakt mit Asmodee
Direkte Anfrage bei Asmodee/FFG für nicht-kommerzielles Community-Tool. Hat in anderen Fällen funktioniert (z.B. Melee.gg für Star Wars: Unlimited).

---

## Zusammenfassung der besten technischen Quellen

| Quelle | Inhalt | Format | Lizenzstatus |
|--------|--------|--------|-------------|
| github.com/Sadgit-HL/D2eMap | Alle Tiles + Tokens + Karten | PNG | Grauzone |
| github.com/LorenzoBalducci96/descent-quest-builder | Tiles in 4 Rotationen | PNG/Base64 | Grauzone |
| github.com/any2cards/d2e | Alle Karten, Tiles, JSON-Daten | PNG/JSON | Grauzone |
| BGG Files (104162) | Referenzblätter, PDFs | PDF/PNG | Teilweise frei |
| DeviantArt/henning | Tile-Kompilationen hochauflösend | PNG | Unklar |
| TTS Steam Workshop | Komplette Spielsets | Hosted URLs | Grauzone |
| Vassal Modul BGG | Spielkomponenten | Vassal-Format | Grauzone |
