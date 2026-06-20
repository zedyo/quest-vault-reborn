# Abweichungen Karten ↔ `src/data/heroes.ts`

Maßgeblich für die Doku sind die **physischen deutschen Karten**. heroes.ts weicht ab und sollte separat geprüft/korrigiert werden (nicht im Scan-Commit).

## 1. Namens-Abweichungen (Kartenname → heroes.ts `name`)

| Klasse | Kartenname (maßgeblich) | heroes.ts |
|---|---|---|
| Heiler | **Geistersprecher Mok** | Ältester Mok |
| Krieger | **Einfaust** | Eine Faust |
| Krieger | **Kundschafter Durik** | Pfadfinder Durik |
| Krieger | **Nanok die Klinge** | Nanok der Klinge |
| Krieger | **Nara der Reißzahn** | Nara die Reißzahn |
| Krieger | **Reynhart der Erhabene** | Reynhart der Würdige |
| Krieger | **Stahlhorn** | Stahlhörner |
| Kundschafter | **Jaine Fairwood** | Jain Fairwood |
| Kundschafter | **Ker der Graue** | Grey Ker |
| Kundschafter | **Laurel vom Blutwald** | Laurel von Blutholz |
| Kundschafter | **Roganna der Schemen** | Roganna der Schatten |
| Kundschafter | **Thaiden Nebelspitze** | Thaiden Nebelgipfel |
| Magier | **Desra die Schändliche** | Dezra die Grausame |
| Magier | **Großmagier Cwellin** | Hochmagier Quellen |
| Magier | **Leorik der Gelehrte** | Leoric vom Buch |
| Magier | **Seherin Kel** | Seher Kel |

_16 von 54 Karten mit abweichendem Namen._

## 2. Verteidigungswürfel-Farbe (Scan nicht eindeutig)

Der Verteidigungswürfel ist im Scan schwer von grau zu unterscheiden. Für folgende Karten sagt heroes.ts eine andere Farbe – bitte an der physischen Karte prüfen:

- **Orkell der Flinke**: Scan wirkt grau · heroes.ts: `braun`
- **Nanok die Klinge**: Scan wirkt grau · heroes.ts: `schwarz`
- **Ravaella Leichtfuß**: Scan wirkt grau · heroes.ts: `schwarz`

Alle übrigen Karten: grau (Scan = heroes.ts).

## 3. Regeltext (Heldenfähigkeit/Heldentat)

Der **Wortlaut** der Karten weicht systematisch von heroes.ts ab – die Karten stammen aus einer anderen deutschen Übersetzung/Edition. Das betrifft praktisch alle Karten, auch namensgleiche (z. B. Sahla: Karte „kannst du eine [Willenskraft]-Probe ablegen … innerhalb von 3 Feldern Entfernung“ vs. heroes.ts „darfst du Willenskraft testen … bis Reichweite 3“). Die Markdown nutzt den **Kartentext**.

## 4. Numerische Werte

Gesundheit, Ausdauer, Geschwindigkeit und alle 4 Attribute **stimmen bei allen 54 Karten mit heroes.ts überein** (keine Zahlen-Abweichung gefunden).

## 5. Nicht gescannte Helden (in heroes.ts, kein Scan)

- **Heiler:** Serena
- **Magier:** Challara, Lyssa
- **Späher/Kundschafter:** Raythen, Ronan von der Wildnis, Vyrah der Falkner

_6 von 60 Helden nicht gescannt._
