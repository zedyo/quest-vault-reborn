# Scan-Workflow: Deutsche Heldenkarten → Zuschnitte + Markdown

> **Diese Datei ist der verbindliche Auftrag.** Wenn der User in einer **lokalen**
> Claude-Code-Session sinngemäß sagt *„scanne die Helden wie besprochen"*, dann ist
> **dieses Dokument** das „wie besprochen". Vollständig lesen und Schritt für Schritt
> befolgen.

---

## 1. Ziel

Der User scannt seine **deutschen** Descent-2e-**Heldenkarten** ein und stellt sie als
lokalen Ordner bereit. Aus jedem Scan sollen entstehen:

1. **Sauber zugeschnittene Einzelkarten** (eine Datei pro Held), korrekt benannt.
2. Pro Klassen-Ordner eine **Markdown-Datei**, die alle Kartenwerte **auf Deutsch**
   sauber festhält.

Zweck: klare deutsche Beschreibungen + saubere Bilder als Referenz/Asset fürs Projekt.

---

## 2. Eingangsmaterial (Fakten vom User)

- **Ort:** lokaler Ordner, z. B. `Desktop/Descent Scanns/Helden`
  (Windows z. B. `C:\Users\<name>\Desktop\Descent Scanns\Helden`).
  **Den genauen Pfad zu Beginn vom User bestätigen lassen** – er kann je Gerät abweichen.
- **Struktur:** Unterordner nach Archetyp (Krieger, Magier, Kundschafter, Heiler …).
  Die echten Ordnernamen aus dem Scan-Ordner übernehmen, nicht erfinden.
- **Pro Seite zwei Helden** (zwei Karten auf einem Scan).
- **Nur die Vorderseite** ist gescannt (Rückseite ist fast identisch, nur ohne Heldentat
  – bewusst weggelassen).
- **Gemischte Formate:** teils PNG, teils JPG. Qualität laut User gut.
- **Positionierung schwankt** leicht pro Scan → **inhaltsbasiert** zuschneiden
  (Kartenränder erkennen), nicht mit festen Koordinaten.

---

## 3. Werkzeuge

- Python 3 mit **Pillow** + **numpy**. Falls nicht vorhanden:
  `python3 -m pip install Pillow numpy` (oder `pip install ...`).
- **Split-Skript:** `scripts/crop_hero_scans.py` – trennt eine Scan-Seite inhaltsbasiert
  in die zwei Einzelkarten (erkennt die Karten auf dem hellen Scanner-Hintergrund).
  - Einzeldatei: `python3 scripts/crop_hero_scans.py "<seite.jpg>" -o <ausgabe-ordner>`
  - Ganzer Ordner: `python3 scripts/crop_hero_scans.py "<ordner>" -o <ausgabe-ordner>`
  - Optionen: `--threshold` (Hintergrund-Hellgrenze, Default 235), `--margin` (px Rand,
    Default 8), `--axis auto|h|v`, `--min-gap` (min. Trennlücke). Bei mäßigem Ergebnis
    **lokal an den echten Scans feintunen.**
  - Ausgabe: `<stem>__a.png` (oben/links) und `<stem>__b.png` (unten/rechts) +
    ein Kurzreport (Größen, Split-Achse) zur Sichtprüfung.

---

## 4. Ablauf (Schritt für Schritt)

1. **Pfad bestätigen:** User nach dem genauen Scan-Ordner-Pfad fragen; Inhalt auflisten
   (`ls`/`dir`), Unterordner + Dateien erfassen.
2. **Tooling sicherstellen:** Pillow + numpy installiert? Sonst nachinstallieren.
3. **Probe zuerst (Pflicht):** EINE Seite mit dem Skript splitten. Beide Zuschnitte
   visuell prüfen (Read-Tool). Sitzt der Schnitt eng an den Kartenrändern? Falls nicht:
   `--threshold`/`--margin`/`--axis` anpassen und erneut. **Dem User die Probe zeigen
   und Format bestätigen lassen, bevor alle ~30 Seiten laufen.**
4. **Helden identifizieren:** Auf jeder zugeschnittenen Karte den Namen (Banner) lesen.
   **Jeden Namen gegen die kanonische 60-Helden-Liste in `src/data/heroes.ts` abgleichen**
   (Feld `name` = DE, `nameEn` = EN). Kein Treffer → **melden, NICHT raten** (Lehre aus
   dem Daten-Vorfall, siehe CLAUDE.md). So wird auch der Archetyp/die Erweiterung sauber.
5. **Benennen:** Dateiname = Heldenname, **klein + ohne Umlaute** (ä→ae, ö→oe, ü→ue,
   ß→ss), Leerzeichen→`-`. Beispiel: „Grisban der Standhafte" → `grisban-der-standhafte.png`.
   Den **vollen deutschen Namen** in die Markdown schreiben.
6. **Werte auslesen + gegenprüfen:** Karteninhalt ablesen; bei kleinen Zahlen/Symbolen
   den Bereich ausschneiden und 4–6× hochskalieren (LANCZOS), dann visuell lesen
   (Verfahren wie in CLAUDE.md „Kartenbild-Validierung"). Heldenkarten-Layout:
   600×483, **Stats-Spalte bei x ≈ 230–420**.
7. **Markdown je Klassen-Ordner** schreiben (Vorlage unten).
8. **Ausgabeort im Repo** (siehe §5). **Original-Scans NICHT ins Repo committen** – nur
   lesen. Die fertigen Zuschnitte + Markdown werden committed.
9. **Abgleich mit heroes.ts:** Falls beim Auslesen Abweichungen zu den vorhandenen
   Werten in `src/data/heroes.ts` auffallen → notieren und dem User berichten
   (potenzielle Datenkorrektur, ggf. `daten-pruefer` laufen lassen).
10. **Commit + Push** auf den Arbeitsbranch `claude/inspiring-cori-j162b8`.

---

## 5. Ausgabe-Struktur im Repo

```
scans/helden/<Klasse>/<held-name>.png      ← sauber zugeschnittene Einzelkarte (PNG)
scans/helden/<Klasse>/<Klasse>.md          ← Markdown je Klasse: alle Helden dieser Klasse
```

- `<Klasse>` = der reale Archetyp-Ordnername aus dem Scan-Ordner (Krieger/Magier/
  Kundschafter/Heiler …).
- Zuschnitte als **PNG** speichern (verlustfrei), auch wenn der Scan ein JPG war.
- **Originale** bleiben außerhalb des Repos (nur auf der Platte des Users). Nicht committen.

---

## 6. Markdown-Vorlage (pro Held)

```markdown
## <Voller deutscher Name>

![<Name>](./<held-name>.png)

- **Archetyp:** <Krieger/Magier/Kundschafter/Heiler>
- **Erweiterung:** <falls aus heroes.ts/Karte ableitbar, sonst „—">
- **Gesundheit:** <n>
- **Ausdauer:** <n>
- **Geschwindigkeit:** <n>
- **Attribute:**
  - Stärke: <Würfelfarbe(n)>
  - Willenskraft: <Würfelfarbe(n)>
  - Wissen: <Würfelfarbe(n)>
  - Gespür: <Würfelfarbe(n)>

**Heldenfähigkeit:** <wortgetreuer deutscher Kartentext>

**Heldentat:** <wortgetreuer deutscher Kartentext>
```

Hinweise:
- Attributwürfel in Descent 2e: jedes Attribut hat einen oder mehrere Würfel
  (blau/braun/grau/schwarz …). Genau ablesen, nicht raten.
- Karten-Texte **wortgetreu auf Deutsch** übernehmen (es sind die offiziellen
  deutschen Karten des Users → das ist die zuverlässige Quelle für DE-Wortlaut).

---

## 7. Korrektheits-Checks (verbindlich)

- [ ] Jeder erkannte Name existiert in `src/data/heroes.ts` (sonst melden, nicht raten).
- [ ] Anzahl Zuschnitte = 2 × Anzahl Scan-Seiten (keine Karte verloren/doppelt).
- [ ] Probe vom User bestätigt, bevor der Batch lief.
- [ ] Kleine Werte hochskaliert gegengelesen.
- [ ] Original-Scans wurden NICHT committed (nur Zuschnitte + Markdown).
- [ ] Push nur auf `claude/inspiring-cori-j162b8`.

---

## 8. Ergebnis ins Repo pushen – OHNE dauerhaften lokalen Klon

Der User will **keinen gepflegten lokalen Klon** des Repos. Ergebnis trotzdem
direkt im Repo speichern. Reihenfolge der Möglichkeiten (die erste nutzen, die
funktioniert):

1. **Bereits im Repo-Arbeitsverzeichnis?** (z. B. Session läuft schon im Klon)
   → einfach `git add scans/ && git commit && git push` auf den Branch.
2. **Kein gepflegter Klon, aber git + Push-Zugang vorhanden** → **temporärer,
   flacher Klon** in einem Scratch-Ordner, hineinkopieren, pushen, danach löschen.
   So existiert kein dauerhafter Klon beim User:
   ```bash
   TMP="$(mktemp -d)"
   git clone --depth 1 --branch claude/inspiring-cori-j162b8 \
     https://github.com/zedyo/quest-vault-reborn.git "$TMP"
   mkdir -p "$TMP/scans/helden"
   cp -R <lokaler-zuschnitt-ordner>/* "$TMP/scans/helden/"
   cd "$TMP"
   git add scans/
   git commit -m "data(helden-scans): Deutsche Heldenkarten zugeschnitten + Markdown (<Klasse(n)>)"
   git push origin claude/inspiring-cori-j162b8
   cd - >/dev/null && rm -rf "$TMP"     # Scratch-Klon wieder entfernen
   ```
3. **GitHub-Tools (MCP) verfügbar** → Repo-Dateien darüber lesen
   (`get_file_contents`) und Ergebnis-Dateien committen. Für **Binärbilder** ist
   Variante 2 zuverlässiger (echtes git), daher Variante 2 bevorzugen.

> **Push-Gate:** Erst pushen, NACHDEM der User die lokalen Zuschnitte geprüft und
> freigegeben hat (siehe §4, Schritt 7/10). Original-Scans NICHT committen.
>
> Reines Asset-/Doku-Material (keine App-Code- oder Spieldaten-Änderung in `src/`).
> Falls beim Auslesen Wertkorrekturen für `src/data/heroes.ts` auffallen, separat
> behandeln (mit `daten-pruefer` prüfen) – nicht mit dem Scan-Commit vermischen.
