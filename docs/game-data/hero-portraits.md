# Helden-Kopfporträts (Mini-Kreise)

**Stand:** v1.8.2 · **Erzeugt von:** `scripts/hero_portraits.py` ·
**Kopf-Boxen:** `scripts/hero_face_boxes.json` ·
**Ausgabe:** `public/cards/de/heroes/portraits/<hero-id>.webp` (60 Dateien, 256 × 256, ≤ 18 KB, gesamt ~712 KB)

---

## Warum

Dashboard („Weiter im Spiel"), Session-Tracker und Quest-Editor zeigen Helden als
kleine Kreise bzw. Kacheln (22–64 px). Dort standen bis v1.8.1:

* **Startseite / Session-Tracker:** nur die Initialen bzw. das Zwei-Buchstaben-Kürzel
  (`heroMono`) — ein reiner Platzhalter.
* **Quest-Editor:** ein blinder Ausschnitt der Landschafts-Karte
  (`object-position: left center`), bei 28–64 px nicht erkennbar.

Seit v1.8.2 steht dort das **Gesicht des Helden**.

## Verfahren

Quelle ist der deutsche Original-Kartenscan `public/cards/de/heroes/<id>.webp`
(760 × ~606 px, Figur im linken Drittel). Je Held wurde **einzeln** die
Bounding-Box des Kopfes bestimmt — die Kopfposition wechselt von Karte zu Karte
stark, eine feste Formel gibt es nicht.

1. **Rasterbild** (`hero_portraits.py locators`): linke 42 % der Karte, 3-fach
   vergrößert, mit Koordinatenraster **in Original-Kartenpixeln** (rot alle 100 px,
   gelb alle 20 px).
2. **Kopf-Box messen** — Oberkante Haar/Helm/Hut bis Kinn bzw. Bartspitze,
   seitlich die Außenkante des Haars auf Ohrhöhe.
3. **Prüfbild** (`hero_portraits.py preview <id> x0 y0 x1 y1`): links das Figurenfeld
   mit eingezeichneter Kopf-Box und Ausschnitt-Quadrat, rechts das Ergebnis groß
   sowie in den echten UI-Kreisgrößen. Jede Box wurde gegen dieses Bild verifiziert
   und bei Bedarf korrigiert (2–5 Durchläufe je Held).
4. **Bauen** (`hero_portraits.py build`) → 256 × 256 WebP.

### Was zur Box gehört — und was nicht

| gehört dazu | bleibt draußen |
|---|---|
| Haar auf dem Schädel, Helm, Hut, Kapuze, Turban, Bart | lange wehende Haarsträhnen |
| eng anliegende Hörner | weit abstehende Hörner, Federbusch, hoher Haarknoten |
| — | Umhang, Kragen, Schulterpanzer, Hals, Brust |

**Immer die namensgebende Heldenfigur**, nie ein Begleittier: Arvel Weltenwanderer
(Bär), Vyrah der Falkner (Falke), Nara der Reißzahn, Okaluk und Rakash (Halbling,
nicht das Reittier), Tinashi (Wolf), Zyla. Bei Ispher **ist** die Echsenfigur der
Held, bei Karnon die weiße Bestie — beides korrekt.

## Kopfanteil: 80 %

Die Kantenlänge folgt aus der Box:

```
Kante = max(Kopfbreite, Kopfhöhe) / 0,80
```

Der Kopf füllt also **80 % der Bildkante**. Der Wert wurde an 10 Beispielen gegen
60 % und 70 % abgewogen (User-Entscheidung 2026-07-31): bei 60 % zeigt der 22-px-Kreis
zu viel Hintergrund, bei 80 % ist das Gesicht auch im kleinsten Kreis eindeutig.
Höher geht nicht sinnvoll — die runde Maske schneidet die Ecken des Quadrats ab,
ab ~85 % stoßen breite Köpfe seitlich an.

## Ausschnitt bleibt im Motivfeld

Das Quadrat wird um den Kopfmittelpunkt gelegt und, falls es über den Rand ragt,
**verschoben — nie verkleinert** (der Kopfanteil bleibt damit garantiert).

Zusätzlich klemmt `ART_SAFE` den Ausschnitt in das reine Motivfeld der
Kartenvorlage (`left 1,6 % · top 15,0 % · right 35,5 % · bottom 99,5 %`). Grund:
die goldene Filigran-Leiste des Kartenrahmens hängt bis y ≈ 78 px (bei ~606 px
Kartenhöhe) ins Bild und ragte sonst oben in den Kreis (Befund an Syndrael und
Astarra).

**Ausnahme mit Vorrang:** Wo die Figur selbst bis an den Rahmen gemalt ist, gibt das
Motivfeld nach (`_HEAD_MARGIN = 2 px`) — ein **vollständiger Kopf** ist wichtiger als
der Rahmenabstand. Betrifft 5 Helden: Ker der Graue, Roganna der Schemen,
Logan Lashley, Lyssa, Ashrian.

## Verwendung im Code

`heroPortraitUrl(id)` in `src/data/assetUrls.ts` liefert den Pfad
(mit `import.meta.env.BASE_URL` — GitHub-Pages-Base, **nicht** hart `/cards/...`).

| Komponente | Rolle |
|---|---|
| `src/components/HeroPortrait.tsx` | Basisbaustein: Bild im Kreis/Chip, Kürzel als Rückfallebene darunter, `dimmed` für nicht ausgewählte Umschalter |
| `src/components/session/ui/HeroAvatar.tsx` | Hülle für den Tracker: zieht Kürzel + Namen aus dem `TrackedHero` |

Eingehängt in: `HomePage` (Partei, 34 px) · `OverviewSection` · `HeroesSection` ·
`HeroSheet` (Navigation) · `SetupSection` (2 ×) · `Step2Rewards` · `Step3Experience` ·
`HeroChipRow` (Zuweisung) · `QuestEditorPage` (Heldenauswahl + Quest-Kacheln).

Das Kürzel liegt **unter** dem Bild und wird nur sichtbar, wenn das Bild fehlt
(z. B. unbekannte Helden-Id aus einem importierten Spielstand) — ein Fehlschlag
sieht dann exakt wie vor v1.8.2 aus.

## Nachpflege

Neuer Held → Kartenscan nach `public/cards/de/heroes/`, dann:

```bash
python3 scripts/hero_portraits.py locators <id>          # Rasterbild
python3 scripts/hero_portraits.py preview  <id> x0 y0 x1 y1   # Prüfbild
# Box in scripts/hero_face_boxes.json eintragen
python3 scripts/hero_portraits.py build                  # alle Porträts neu
```

Der Datenintegritäts-Test in `src/data/__tests__/dataIntegrity.test.ts` prüft, dass
**jeder** Held ein Porträt hat und **kein** Porträt ohne Held herumliegt.
