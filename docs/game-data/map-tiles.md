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

## Kachel-Kategorien

### Raumkacheln (Room Tiles)
- Rechteckige oder unregelmäßige größere Flächen
- Haben meist offene Ränder (Verbindungspunkte)
- Unterschiedliche Größen: 2×3, 3×4, 4×5, 4×6 Felder (etc.)

### Gangkacheln (Corridor Tiles)
- Schmale, lange Verbindungsstücke
- 1×4, 1×6, 2×4 Felder (etc.)

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
