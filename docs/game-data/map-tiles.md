# Descent 2. Edition – Spielplan-Plättchen (Map Tiles)

**Status:** Vollständige Connector-Daten dokumentiert (Mai 2026)  
**Quelle:** github.com/any2cards/d2e, src/data/mapTiles.ts  
**Zuletzt aktualisiert:** 2026-05-25

---

## Übersicht nach Erweiterung

| Erweiterung | Anzahl Kacheln | Besonderheiten |
|-------------|----------------|----------------|
| Grundspiel | 60 (01a–30b) | Eingang, Ausgang, Verbindungsstücke, Übergänge |
| Die Höhle des Lindwurms | 12 | 10 nummeriert + 2 Gewölbe-Spezial (s1a/s1b) |
| Labyrinth des Verderbens | 16 | Nummeriert (36a–43b) |
| Die Trollsümpfe | 14 | 12 nummeriert + 2 Sumpf-Spezial (s2a/s2b) |
| Schloss Rabenfels | 16 | Nummeriert (70a–77b) |
| Nebel von Bilehall | 22 | 20 nummeriert + 2 Eingangskacheln |
| Schatten von Nerekhall | 50 | 40 nummeriert + 10 Spezial + 2 Sonder |
| Rostende Ketten | 26 | Nummeriert (78a–98b) |

**Hinweis:** Lost Legends, Unsterbliche Legenden und Heirs of Blood enthalten KEINE Spielplan-Kacheln.

---

## Connector-Legende

**T** = oben (top), **R** = rechts (right), **B** = unten (bottom), **L** = links (left)  
**✓** = Connector vorhanden, **–** = kein Connector (flache Kante)

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

## Grundspiel-Kacheln (01–30)

**Quellen:** any2cards/d2e (PNG-Pixelmaße @ 75px/Feld)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| 01a | 8 | 6 | 600×450 | ✓/✓/✓/– | Größte Grundspiel-Kachel |
| 01b | 8 | 6 | 600×450 | ✓/–/✓/✓ | |
| 02a | 6 | 6 | 450×450 | ✓/–/✓/– | |
| 02b | 6 | 6 | 450×450 | ✓/–/✓/– | |
| 03a | 6 | 4 | 450×300 | –/✓/✓/✓ | |
| 03b | 6 | 4 | 450×300 | –/✓/✓/✓ | |
| 04a | 6 | 6 | 450×450 | ✓/✓/–/– | |
| 04b | 6 | 6 | 450×450 | ✓/–/–/✓ | |
| 05a | 6 | 4 | 450×300 | –/✓/✓/✓ | |
| 05b | 6 | 4 | 450×300 | –/✓/✓/✓ | |
| 06a | 6 | 4 | 450×300 | –/✓/–/✓ | |
| 06b | 6 | 4 | 450×300 | –/✓/–/✓ | |
| 07a | 6 | 4 | 450×300 | ✓/–/✓/– | |
| 07b | 6 | 4 | 450×300 | ✓/–/✓/– | |
| 08a | 4 | 4 | 300×300 | ✓/✓/–/– | |
| 08b | 4 | 4 | 300×300 | ✓/–/–/✓ | |
| 09a | 4 | 4 | 300×300 | ✓/✓/–/✓ | |
| 09b | 4 | 4 | 300×300 | ✓/✓/–/✓ | |
| 10a | 4 | 4 | 300×300 | –/✓/–/✓ | |
| 10b | 4 | 4 | 300×300 | –/✓/–/✓ | |
| 11a | 4 | 4 | 300×300 | –/✓/–/✓ | |
| 11b | 4 | 4 | 300×300 | –/✓/–/✓ | |
| 12a | 5 | 5 | 375×375 | –/✓/✓/– | |
| 12b | 5 | 5 | 375×375 | –/–/✓/✓ | |
| 13a | 6 | 6 | 450×450 | ✓/–/✓/– | |
| 13b | 6 | 6 | 450×450 | ✓/–/✓/– | |
| 14a | 4 | 4 | 300×300 | –/✓/–/✓ | |
| 14b | 4 | 4 | 300×300 | –/✓/–/✓ | |
| 15a | 4 | 4 | 300×300 | ✓/–/✓/– | D2eMap hat 5×4 – Abweichung! |
| 15b | 4 | 4 | 300×300 | ✓/–/✓/– | |
| 16a | 4 | 4 | 300×300 | ✓/✓/✓/✓ | |
| 16b | 4 | 4 | 300×300 | ✓/✓/✓/✓ | |
| 17a | 4 | 4 | 300×300 | ✓/✓/–/– | |
| 17b | 4 | 4 | 300×300 | ✓/–/–/✓ | |
| 18a | 4 | 4 | 300×300 | ✓/✓/–/– | |
| 18b | 4 | 4 | 300×300 | ✓/–/–/✓ | |
| 19a | 6 | 3 | 450×225 | –/✓/–/✓ | Flacher Raum |
| 19b | 6 | 3 | 450×225 | –/✓/–/✓ | |
| 20a | 8 | 3 | 600×225 | –/–/✓/✓ | Breiter Flachraum |
| 20b | 8 | 3 | 600×225 | –/✓/✓/– | |
| 21a | 6 | 3 | 450×225 | –/✓/–/✓ | |
| 21b | 6 | 3 | 450×225 | –/✓/–/✓ | |
| 22a | 6 | 2 | 450×150 | –/–/–/– | Korridor, keine Connector |
| 22b | 6 | 2 | 450×150 | –/–/–/– | Korridor, keine Connector |
| 23a | 6 | 2 | 450×150 | –/–/✓/✓ | Korridor |
| 23b | 6 | 2 | 450×150 | –/✓/✓/– | |
| 24a | 6 | 2 | 450×150 | –/–/✓/– | Korridor |
| 24b | 6 | 2 | 450×150 | –/–/✓/– | |
| 25a | 6 | 2 | 450×150 | –/–/✓/✓ | Korridor |
| 25b | 6 | 2 | 450×150 | –/✓/✓/– | |
| 26a | 4 | 3 | 300×225 | ✓/–/✓/– | |
| 26b | 4 | 3 | 300×225 | ✓/–/✓/– | |
| 27a | 2 | 4 | 150×300 | –/✓/–/✓ | D2eMap hat 4×2 (andere Rotation) |
| 27b | 2 | 4 | 150×300 | –/✓/–/✓ | |
| 28a | 4 | 2 | 300×150 | ✓/–/✓/– | Korridor |
| 28b | 4 | 2 | 300×150 | ✓/–/✓/– | |
| 29a | 4 | 2 | 300×150 | –/–/–/– | Korridor, keine Connector |
| 29b | 4 | 2 | 300×150 | –/–/–/– | |
| 30a | 4 | 2 | 300×150 | –/–/–/– | Korridor, keine Connector |
| 30b | 4 | 2 | 300×150 | –/–/–/– | |

> **Hinweis Maßstab:** any2cards verwendet exakt 75px pro Spielfeld. Alle Pixelwerte sind ganzzahlig teilbar.  
> **Kachel 27:** In any2cards als Hochformat gespeichert (2×4), D2eMap hat Querformat (4×2) – gleiche Kachel, nur anders gedreht.  
> **Kachel 15:** any2cards zeigt 300×300px (4×4), D2eMap constants.js hat 5×4. Physische Überprüfung empfohlen.

---

## Frühere (falsche) Maßwerte

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

## Die Höhle des Lindwurms (lw-31 – lw-35, lw-s1)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| lw-31a | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| lw-31b | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| lw-32a | 4 | 4 | 300×300 | ✓/✓/✓/✓ | |
| lw-32b | 4 | 4 | 300×300 | ✓/✓/✓/✓ | |
| lw-33a | 4 | 2 | 300×150 | –/–/–/– | Korridor, keine Connector |
| lw-33b | 4 | 2 | 300×150 | –/–/–/– | |
| lw-34a | 3 | 6 | 225×450 | –/✓/–/✓ | |
| lw-34b | 3 | 6 | 225×450 | –/✓/–/✓ | |
| lw-35a | 5 | 5 | 375×375 | ✓/–/✓/✓ | |
| lw-35b | 5 | 5 | 375×375 | ✓/✓/✓/– | |
| lw-s1a | 5 | 5 | 375×375 | –/–/–/– | Spezialkachel, keine Connector |
| lw-s1b | 5 | 5 | 375×375 | –/–/–/– | |

---

## Labyrinth des Verderbens (lr-36 – lr-43)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| lr-36a | 8 | 8 | 600×600 | ✓/✓/✓/✓ | |
| lr-36b | 8 | 8 | 600×600 | ✓/✓/✓/✓ | |
| lr-37a | 6 | 9 | 450×675 | ✓/✓/✓/– | |
| lr-37b | 6 | 9 | 450×675 | ✓/–/✓/✓ | |
| lr-38a | 6 | 7 | 450×525 | ✓/✓/✓/✓ | |
| lr-38b | 6 | 7 | 450×525 | ✓/✓/✓/✓ | |
| lr-39a | 7 | 8 | 525×600 | ✓/✓/–/✓ | |
| lr-39b | 7 | 8 | 525×600 | ✓/✓/–/✓ | |
| lr-40a | 6 | 5 | 450×375 | ✓/✓/✓/✓ | |
| lr-40b | 6 | 5 | 450×375 | ✓/✓/✓/✓ | |
| lr-41a | 6 | 2 | 450×150 | ✓/–/✓/– | |
| lr-41b | 6 | 2 | 450×150 | ✓/–/✓/– | |
| lr-42a | 6 | 2 | 450×150 | ✓/✓/✓/– | |
| lr-42b | 6 | 2 | 450×150 | ✓/–/✓/– | |
| lr-43a | 2 | 2 | 150×150 | ✓/–/–/– | |
| lr-43b | 2 | 2 | 150×150 | ✓/–/–/– | |

---

## Die Trollsümpfe (tf-44 – tf-49, tf-s2)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| tf-44a | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| tf-44b | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| tf-45a | 8 | 3 | 600×225 | ✓/✓/✓/✓ | |
| tf-45b | 8 | 3 | 600×225 | ✓/✓/✓/✓ | |
| tf-46a | 4 | 3 | 300×225 | ✓/–/–/– | |
| tf-46b | 4 | 3 | 300×225 | ✓/–/–/– | |
| tf-47a | 2 | 2 | 150×150 | –/–/–/– | Keine Connector |
| tf-47b | 2 | 2 | 150×150 | –/–/–/– | |
| tf-48a | 7 | 7 | 525×525 | ✓/✓/✓/✓ | |
| tf-48b | 7 | 7 | 525×525 | ✓/✓/✓/✓ | |
| tf-49a | 7 | 7 | 525×525 | ✓/✓/✓/✓ | |
| tf-49b | 7 | 7 | 525×525 | ✓/✓/✓/✓ | |
| tf-s2a | 4 | 3 | 300×225 | –/–/–/– | Spezialkachel, keine Connector |
| tf-s2b | 4 | 3 | 300×225 | –/–/–/– | |

---

## Schatten von Nerekhall (sn-50 – sn-69, Sonderkacheln)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| sn-50a | 6 | 6 | 450×450 | –/✓/✓/✓ | |
| sn-50b | 6 | 6 | 450×450 | –/✓/✓/✓ | |
| sn-51a | 6 | 4 | 450×300 | –/✓/✓/✓ | |
| sn-51b | 6 | 4 | 450×300 | –/✓/✓/✓ | |
| sn-52a | 5 | 4 | 375×300 | ✓/✓/✓/✓ | |
| sn-52b | 5 | 4 | 375×300 | ✓/✓/✓/✓ | |
| sn-53a | 4 | 4 | 300×300 | ✓/–/–/✓ | |
| sn-53b | 4 | 4 | 300×300 | ✓/✓/–/– | |
| sn-54a | 4 | 4 | 300×300 | ✓/–/–/✓ | |
| sn-54b | 4 | 4 | 300×300 | ✓/✓/–/– | |
| sn-55a | 6 | 4 | 450×300 | ✓/✓/✓/✓ | |
| sn-55b | 6 | 4 | 450×300 | ✓/✓/✓/✓ | |
| sn-56a | 6 | 4 | 450×300 | ✓/✓/✓/– | |
| sn-56b | 6 | 4 | 450×300 | ✓/–/✓/✓ | |
| sn-57a | 4 | 6 | 300×450 | ✓/✓/–/✓ | |
| sn-57b | 4 | 6 | 300×450 | ✓/✓/–/✓ | |
| sn-58a | 6 | 3 | 450×225 | –/✓/✓/✓ | |
| sn-58b | 6 | 3 | 450×225 | –/✓/✓/✓ | |
| sn-59a | 5 | 5 | 375×375 | ✓/✓/–/✓ | |
| sn-59b | 5 | 5 | 375×375 | ✓/✓/–/✓ | |
| sn-60a | 5 | 5 | 375×375 | ✓/✓/✓/– | |
| sn-60b | 5 | 5 | 375×375 | ✓/–/✓/✓ | |
| sn-61a | 4 | 4 | 300×300 | ✓/–/–/✓ | |
| sn-61b | 4 | 4 | 300×300 | ✓/✓/–/– | |
| sn-62a | 3 | 3 | 225×225 | ✓/–/–/– | |
| sn-62b | 3 | 3 | 225×225 | ✓/–/–/– | |
| sn-63a | 5 | 3 | 375×225 | –/✓/–/✓ | |
| sn-63b | 5 | 3 | 375×225 | –/✓/–/✓ | |
| sn-64a | 5 | 2 | 375×150 | –/–/–/– | Keine Connector |
| sn-64b | 5 | 2 | 375×150 | –/–/–/– | |
| sn-65a | 4 | 2 | 300×150 | ✓/✓/–/– | |
| sn-65b | 4 | 2 | 300×150 | ✓/–/–/✓ | |
| sn-66a | 4 | 2 | 300×150 | ✓/✓/–/– | |
| sn-66b | 4 | 2 | 300×150 | ✓/–/–/✓ | |
| sn-67a | 2 | 2 | 150×150 | –/✓/–/– | |
| sn-67b | 2 | 2 | 150×150 | –/–/–/✓ | |
| sn-68a | 2 | 2 | 150×150 | –/✓/–/– | |
| sn-68b | 2 | 2 | 150×150 | –/–/–/✓ | |
| sn-69a | 2 | 2 | 150×150 | –/–/–/– | Keine Connector |
| sn-69b | 2 | 2 | 150×150 | –/–/–/– | |
| sn-entrance | 2 | 2 | 150×150 | –/–/–/– | Eingangskachel |
| sn-exit | 2 | 2 | 150×150 | –/–/–/– | Ausgangskachel |

---

## Schloss Rabenfels (mr-70 – mr-77)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| mr-70a | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| mr-70b | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| mr-71a | 6 | 6 | 450×450 | ✓/–/✓/– | |
| mr-71b | 6 | 6 | 450×450 | ✓/–/✓/– | |
| mr-72a | 4 | 6 | 300×450 | ✓/–/✓/– | |
| mr-72b | 4 | 6 | 300×450 | ✓/–/✓/– | |
| mr-73a | 3 | 6 | 225×450 | –/✓/–/✓ | |
| mr-73b | 3 | 6 | 225×450 | –/✓/–/✓ | |
| mr-74a | 4 | 5 | 300×375 | ✓/✓/–/– | |
| mr-74b | 4 | 5 | 300×375 | ✓/–/–/✓ | |
| mr-75a | 4 | 4 | 300×300 | –/–/–/– | Keine Connector |
| mr-75b | 4 | 4 | 300×300 | –/–/–/– | |
| mr-76a | 2 | 4 | 150×300 | –/✓/✓/– | |
| mr-76b | 2 | 4 | 150×300 | ✓/✓/–/– | |
| mr-77a | 2 | 2 | 150×150 | –/✓/–/– | |
| mr-77b | 2 | 2 | 150×150 | –/–/–/✓ | |

---

## Nebel von Bilehall (mb-78 – mb-87, Eingangskacheln)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| mb-78a | 2 | 2 | 150×150 | ✓/–/–/– | |
| mb-78b | 2 | 2 | 150×150 | –/–/–/✓ | |
| mb-79a | 2 | 2 | 150×150 | –/–/–/– | Keine Connector |
| mb-79b | 2 | 2 | 150×150 | –/–/–/– | |
| mb-80a | 4 | 2 | 300×150 | ✓/–/–/– | |
| mb-80b | 4 | 2 | 300×150 | ✓/–/–/– | |
| mb-81a | 5 | 5 | 375×375 | ✓/–/✓/✓ | |
| mb-81b | 5 | 5 | 375×375 | ✓/✓/✓/– | |
| mb-82a | 3 | 4 | 225×300 | ✓/–/–/– | |
| mb-82b | 3 | 4 | 225×300 | ✓/–/–/– | |
| mb-83a | 6 | 3 | 450×225 | ✓/✓/✓/– | |
| mb-83b | 6 | 3 | 450×225 | ✓/✓/✓/– | |
| mb-84a | 7 | 5 | 525×375 | –/✓/✓/✓ | |
| mb-84b | 7 | 5 | 525×375 | –/✓/✓/✓ | |
| mb-85a | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| mb-85b | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| mb-86a | 8 | 3 | 600×225 | ✓/✓/–/✓ | |
| mb-86b | 8 | 3 | 600×225 | ✓/✓/–/✓ | |
| mb-87a | 8 | 8 | 600×600 | ✓/✓/✓/– | |
| mb-87b | 8 | 8 | 600×600 | ✓/✓/✓/– | |
| mb-entrance-indoor | 2 | 2 | 150×150 | –/–/–/– | Eingangskachel (Innen) |
| mb-entrance-outdoor | 2 | 2 | 150×150 | –/–/–/– | Eingangskachel (Außen) |

---

## Rostende Ketten (cr-78 – cr-98)

| Kachel | Spalten | Zeilen | Pixel | Connectoren (T/R/B/L) | Hinweis |
|--------|---------|--------|-------|----------------------|---------|
| cr-78a | 2 | 2 | 150×150 | ✓/–/–/– | |
| cr-78b | 2 | 2 | 150×150 | –/–/–/✓ | |
| cr-79a | 2 | 2 | 150×150 | –/–/–/– | Keine Connector |
| cr-79b | 2 | 2 | 150×150 | –/–/–/– | |
| cr-88a | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| cr-88b | 6 | 6 | 450×450 | ✓/✓/✓/✓ | |
| cr-89a | 4 | 6 | 300×450 | ✓/✓/–/✓ | |
| cr-89b | 4 | 6 | 300×450 | ✓/✓/–/✓ | |
| cr-90a | 5 | 5 | 375×375 | ✓/✓/✓/✓ | |
| cr-90b | 5 | 5 | 375×375 | ✓/✓/✓/✓ | |
| cr-91a | 4 | 6 | 300×450 | ✓/✓/✓/✓ | |
| cr-91b | 4 | 6 | 300×450 | ✓/✓/✓/✓ | |
| cr-92a | 4 | 6 | 300×450 | ✓/✓/✓/– | |
| cr-92b | 4 | 6 | 300×450 | ✓/✓/✓/– | |
| cr-93a | 4 | 5 | 300×375 | ✓/✓/✓/– | |
| cr-93b | 4 | 5 | 300×375 | ✓/✓/✓/– | |
| cr-94a | 3 | 5 | 225×375 | –/✓/–/✓ | |
| cr-94b | 3 | 5 | 225×375 | –/✓/–/✓ | |
| cr-95a | 4 | 4 | 300×300 | ✓/–/✓/– | |
| cr-95b | 4 | 4 | 300×300 | ✓/–/✓/– | |
| cr-96a | 3 | 4 | 225×300 | –/✓/✓/✓ | |
| cr-96b | 3 | 4 | 225×300 | ✓/✓/–/✓ | |
| cr-97a | 2 | 4 | 150×300 | –/✓/✓/– | |
| cr-97b | 2 | 4 | 150×300 | –/–/✓/✓ | |
| cr-98a | 2 | 4 | 150×300 | –/✓/–/✓ | PNG ist 112×300px (gestreckt) |
| cr-98b | 2 | 4 | 150×300 | –/✓/–/✓ | |

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

## Kachel-Nomenklatur

Das Originalsystem nummeriert Kacheln so:
- `01a` / `01b` = Kachel 1, Seite A und B (doppelseitig)
- `s1a` / `s1b` = Spezial-Kachel 1, Seiten A und B
- Grundspiel: 01a–30b (= 30 doppelseitige Kacheln = 60 Spielflächen)
- Erweiterungen führen ihre eigene Nummerierung fort oder nutzen separate Bezeichner

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

## Quellen

- Descent Community Wiki – Map Tiles: https://wiki.descent-community.org/Map_tiles
- Descent 2e Fandom Wiki – Tile Listing: https://descent2e.fandom.com/wiki/Tiles
- github.com/any2cards/d2e – data/map-tiles.js
