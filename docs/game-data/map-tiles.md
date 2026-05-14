# Descent 2. Edition – Spielplan-Plättchen (Map Tiles)

**Status:** Recherche abgeschlossen (Mai 2026)  
**Quelle:** github.com/any2cards/d2e, BGG, Descent Fandom Wiki  
**Zuletzt aktualisiert:** 2026-05-14

---

## Übersicht nach Erweiterung

| Erweiterung | Anzahl Kacheln | Besonderheiten |
|-------------|----------------|----------------|
| Grundspiel | ~60 (01a–30b + Spezial) | Eingang, Ausgang, Verbindungsstücke, Übergänge |
| Die Höhle des Lindwurms | 12 | 10 nummeriert + 2 Gewölbe-Spezial (s1a/s1b) |
| Labyrinth des Verderbens | 16 | Nummeriert (36a–43b) |
| Die Trollsümpfe | 14 | 12 nummeriert + 2 Sumpf-Spezial (s2a/s2b) |
| Schloss Rabenfels | 16 | Nummeriert |
| Nebel von Bilehall | 22 | 20 nummeriert + 2 Eingangskacheln |
| Schatten von Nerekhall | 50 | 40 nummeriert + 10 Spezial |
| Rostende Ketten | 26 | Nummeriert |

**Hinweis:** Lost Legends, Unsterbliche Legenden und Heirs of Blood enthalten KEINE Spielplan-Kacheln.

---

## Geländetypen (Terrain Types)

| Terrain (DE) | Terrain (EN) | Farbe/Markierung | Regeleffekt |
|-------------|-------------|-----------------|------------|
| Normal | Open | Kein Rahmen | 1 Bewegungspunkt zum Betreten |
| Wasser | Water | Blauer Rahmen | Kostet 2 Bewegungspunkte zum Betreten |
| Lava | Lava | Roter/Gelber Rahmen | 1 Schaden beim Betreten; sofortige Niederlage wenn Runde endet |
| Schlamm/Sumpf | Sludge | Oranger Rahmen | +1 MP beim Betreten; max. Geschwindigkeit 1 wenn vollständig darin |
| Grube | Pit | Grüner Rahmen | 2 Schaden beim Betreten; keine Bewegung möglich; eingeschränkte Sichtlinie |
| Gefahr | Hazard | Gelber Rahmen | Wie Lava-Effekt |
| Bröckeliger Boden | Crumbling | Speziell | Verliert weitere Eigenschaften nach Betreten |
| Hindernis | Obstacle | Verschiedene | Blockiert Bewegung und Sichtlinie |
| Tür | Door | Türsymbol | Blockiert Bewegung und Sichtlinie bis geöffnet |
| Geheimtür | Secret Door | Spezielles Symbol | Muss erst entdeckt werden |

---

## Grundspiel-Kacheln: Verifizierte Rastermaße

**Quellen:** any2cards/d2e (PNG-Pixelmaße @ 75px/Feld) + D2eMap constants.js (@ 32px/Feld)  
**Verifiziert:** 2026-05-14 (beide Quellen stimmen überein, außer bei Kachel 15 und 27)

| Kachel | Spalten (cols) | Zeilen (rows) | Pixel (any2cards) | Hinweis |
|--------|---------------|--------------|-------------------|---------|
| 01a/01b | 8 | 6 | 600×450 | Größte Grundspiel-Kachel |
| 02a/02b | 6 | 6 | 450×450 | |
| 03a/03b | 6 | 4 | 450×300 | |
| 04a/04b | 6 | 6 | 450×450 | |
| 05a/05b | 6 | 4 | 450×300 | |
| 06a/06b | 6 | 4 | 450×300 | |
| 07a/07b | 6 | 4 | 450×300 | |
| 08a/08b | 4 | 4 | 300×300 | |
| 09a/09b | 4 | 4 | 300×300 | |
| 10a/10b | 4 | 4 | 300×300 | |
| 11a/11b | 4 | 4 | 300×300 | |
| 12a/12b | 5 | 5 | 375×375 | Diagonale Kachel? |
| 13a/13b | 6 | 6 | 450×450 | |
| 14a/14b | 4 | 4 | 300×300 | |
| 15a/15b | 4 | 4 | 300×300 | D2eMap hat 5×4 – Abweichung! |
| 16a/16b | 4 | 4 | 300×300 | |
| 17a/17b | 4 | 4 | 300×300 | |
| 18a/18b | 4 | 4 | 300×300 | |
| 19a/19b | 6 | 3 | 450×225 | Flacher Raum |
| 20a/20b | 8 | 3 | 600×225 | Breiter Flachraum |
| 21a/21b | 6 | 3 | 450×225 | |
| 22a/22b | 6 | 2 | 450×150 | Korridor |
| 23a/23b | 6 | 2 | 450×150 | Korridor |
| 24a/24b | 6 | 2 | 450×150 | Korridor |
| 25a/25b | 6 | 2 | 450×150 | Korridor |
| 26a/26b | 4 | 3 | 300×225 | |
| 27a/27b | 2 | 4 | 150×300 | D2eMap hat 4×2 (andere Rotation) |
| 28a/28b | 4 | 2 | 300×150 | Korridor |
| 29a/29b | 4 | 2 | 300×150 | Korridor |
| 30a/30b | 4 | 2 | 300×150 | Korridor |

> **Hinweis Maßstab:** any2cards verwendet exakt 75px pro Spielfeld. Alle Pixelwerte sind ganzzahlig teilbar.  
> **Kachel 27:** In any2cards als Hochformat gespeichert (2×4), D2eMap hat Querformat (4×2) – es ist die gleiche Kachel, nur anders gedreht abgelegt.  
> **Kachel 15:** any2cards zeigt 300×300px (4×4), D2eMap constants.js hat 5×4. Physische Überprüfung empfohlen.

---

## Frühere (falsche) Maßwerte

Die folgenden Werte waren in der ursprünglichen Planung eingetragen und sind **FALSCH**:

| Kachel | Falsch | Richtig |
|--------|--------|---------|
| 01a/01b | 2×3 | **8×6** |
| 02a/02b | 2×4 | **6×6** |
| 03a/03b | 3×3 | **6×4** |
| 04a/04b | 2×3 | **6×6** |
| 05a/05b | 3×4 | **6×4** |
| 06a/06b | 4×4 | **6×4** |
| 07a/07b | 2×5 | **6×4** |
| 08a/08b | 3×5 | **4×4** |
| 09a/09b | 4×5 | **4×4** |
| 10a/10b | 4×6 | **4×4** |
| 11a/11b | 2×6 | **4×4** |
| 12a/12b | 3×6 | **5×5** |

---

## Kachel-Kategorien

### Raumkacheln (Room Tiles)
- Rechteckige oder unregelmäßige größere Flächen
- Haben meist offene Ränder (Verbindungspunkte)
- Größen im Grundspiel: 4×4, 5×5, 6×4, 6×6, 8×6 Felder

### Gangkacheln (Corridor Tiles)
- Schmale, lange Verbindungsstücke
- Grundspiel: 4×2, 6×2, 4×3, 6×3, 2×4 Felder

### Eingangskacheln (Entry Tiles)
- Spezielle Kacheln für den Startbereich der Helden
- Markiert mit "Eingang" (grünes Symbol)

### Spezialkacheln (Special Tiles)
- Sonderformen (Kreuzungen, T-Stücke, Kurven)
- Kacheln mit fest eingebautem Terrain (z.B. Lavabecken)

---

## Overlay-Plättchen (Overlay Tiles)

Overlays sind kleinere Plättchen, die auf normale Kacheln gelegt werden:

| Overlay-Typ (DE) | Overlay-Typ (EN) | Verwendung |
|-----------------|-----------------|-----------|
| Verschlossene Tür | Locked Door | Blockiert Weg |
| Offene Tür | Open Door | Offener Durchgang |
| Geheimtür | Secret Door | Versteckter Weg |
| Schatz | Treasure | Fundort |
| Erkundungstoken | Search Token | Suche-Fundort |
| Fallen-Token | Trap Token | Verdeckte Falle |
| Fels / Hindernis | Rock / Obstacle | Blockiert Bewegung |
| Wasser | Water | Wasserterrain |
| Lava | Lava | Lavaterrain |
| Grube | Pit | Grubenfeld |
| Barrikade | Barricade | Blockierung |
| Altar | Altar | Quest-Objekt |
| Kiste | Chest | Quest-Objekt |
| Statue | Statue | Quest-Objekt |
| Pilz | Mushroom | Quest-Objekt (Trollsümpfe) |

---

## Digitale Referenzen für Kacheln

| Ressource | Format | URL |
|-----------|--------|-----|
| Base Game Tile Reference | PDF/PNG | https://boardgamegeek.com/filepage/93373 |
| Game Tiles by Quest | PDF | https://boardgamegeek.com/filepage/150367 |
| All Expansion Tiles (FFG Forum Archiv) | HTML | https://ffg-forum-archive.entropicdreams.com/topic/187833 |
| D2eMap (GitHub) | PNG in App | https://github.com/Sadgit-HL/D2eMap |
| descent-quest-builder (GitHub) | PNG (4 Rotationen) | https://github.com/LorenzoBalducci96/descent-quest-builder |
| DeviantArt "henning" | PNG (hochauflösend) | https://www.deviantart.com/henning |
| any2cards/d2e (GitHub) | PNG + JSON | https://github.com/any2cards/d2e |

---

## Kachel-Nomenklatur

Das Originalsystem nummeriert Kacheln so:
- `01a` / `01b` = Kachel 1, Seite A und B (doppelseitig)
- `s1a` / `s1b` = Spezial-Kachel 1, Seiten A und B
- Grundspiel: 01a–30b (= 30 doppelseitige Kacheln = 60 Spielflächen)
- Erweiterungen führen ihre eigene Nummerierung fort oder nutzen separate Bezeichner

---

## Quellen

- Descent Community Wiki – Map Tiles: https://wiki.descent-community.org/Map_tiles
- Descent 2e Fandom Wiki – Tile Listing: https://descent2e.fandom.com/wiki/Tiles
- github.com/any2cards/d2e – data/map-tiles.js
