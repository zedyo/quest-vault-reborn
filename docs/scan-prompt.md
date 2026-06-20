# Fertiger Prompt: Heldenscans verarbeiten (lokale Session, ohne Repo-Klon-Pflege)

Diesen Text **1:1 in eine lokale Claude-Code-Session** (Desktop-App/CLI auf dem
Rechner mit den Scans) einfügen. Voraussetzung: Die Umgebung kann ins GitHub-Repo
`zedyo/quest-vault-reborn` **pushen** (GitHub-Login bzw. Token bzw. GitHub-Connector
vorhanden). Der Prompt prüft das selbst und stoppt, falls etwas fehlt.

---

```text
Du arbeitest lokal auf meinem Rechner. Ziel: meine deutschen Descent-2e-
Heldenscans zuschneiden, benennen, auf Deutsch dokumentieren und das Ergebnis ins
GitHub-Repo zedyo/quest-vault-reborn (Branch claude/inspiring-cori-j162b8)
speichern. Ich will KEINEN dauerhaften lokalen Klon des Repos.

Die vollständige Spezifikation liegt im Repo unter docs/scan-workflow.md. Lies sie
zuerst und folge ihr exakt. Wenn etwas unklar ist: fragen, nichts erfinden.

Arbeite in dieser Reihenfolge:

0) PREFLIGHT – Repo-Zugang prüfen, BEVOR du loslegst:
   - Teste Lese-/Push-Zugang, z. B.:
     git ls-remote https://github.com/zedyo/quest-vault-reborn.git
   - Hol dir die Spezifikation + das Crop-Skript aus dem Repo (ohne dauerhaften
     Klon): entweder über GitHub-Tools (get_file_contents) oder per kurzem
     flachem Klon in einen Scratch-Ordner. Du brauchst:
       docs/scan-workflow.md, scripts/crop_hero_scans.py, src/data/heroes.ts
   - Wenn KEIN Push-Zugang besteht: STOPP und sag mir genau, was fehlt
     (GitHub-Login / Personal Access Token / Connector), bevor du weitermachst.

1) Frag mich nach dem Pfad zum Scan-Ordner (z. B.
   C:\Users\<name>\Desktop\Descent Scanns\Helden) und liste den Inhalt auf
   (Unterordner = Klassen, Dateien = Seiten mit je 2 Helden).

2) Stelle Python3 + Pillow + numpy sicher (sonst: pip install Pillow numpy).

3) PROBE ZUERST: Schneide EINE Seite mit scripts/crop_hero_scans.py in einen
   LOKALEN Ausgabeordner neben den Scans (NICHT ins Repo), z. B. ein Unterordner
   "_zuschnitte". Zeig mir die beiden Zuschnitte und warte auf mein OK zu Schnitt
   und Format. Bei Bedarf --threshold/--margin/--axis anpassen.

4) Nach meinem OK: alle Seiten zuschneiden nach _zuschnitte/<Klasse>/.

5) Identifiziere jede Karte (Namensbanner). Gleiche JEDEN Namen gegen die
   60 Helden in src/data/heroes.ts ab (Feld name = DE). Kein Treffer →
   melden, NICHT raten. Benenne die Dateien klein + ohne Umlaute
   (ä→ae, ö→oe, ü→ue, ß→ss, Leerzeichen→-), z. B. grisban-der-standhafte.png.

6) Lies die Kartenwerte aus (kleine Zahlen/Symbole hochskaliert gegenlesen) und
   schreibe je Klassen-Ordner eine Markdown nach der Vorlage in
   docs/scan-workflow.md (Name, Archetyp, Gesundheit, Ausdauer, Geschwindigkeit,
   die 4 Attribute mit Würfelfarben, Heldenfähigkeit, Heldentat – alles Deutsch).

7) STOPP für meine lokale Prüfung: Liste alle Zuschnitte + Markdown auf und warte
   auf mein finales OK. ERST DANN pushen.

8) Nach meinem OK: Lege die geprüften Dateien unter scans/helden/<Klasse>/ ab und
   pushe auf claude/inspiring-cori-j162b8 – per temporärem flachem Klon in einem
   Scratch-Ordner (git clone --depth 1 --branch claude/inspiring-cori-j162b8 ...),
   Dateien hineinkopieren, commit + push, danach den Scratch-Ordner wieder löschen.
   Die Original-Scans NICHT committen.

9) Melde mir Commit-Hash + Push-Status. Falls dir beim Auslesen Abweichungen zu
   den Werten in src/data/heroes.ts auffallen, berichte sie mir separat (nicht in
   den Scan-Commit mischen).
```

---

## Was du dafür einmalig brauchst

- Eine lokale Claude-Code-Session **auf dem Rechner, auf dem die Scans liegen**
  (Desktop-App oder CLI).
- **Push-Recht** aufs Repo: GitHub eingeloggt bzw. ein Personal Access Token mit
  `repo`-Scope hinterlegt (git merkt sich das nach dem ersten Mal). Der Prompt
  prüft das in Schritt 0 und sagt dir, falls etwas fehlt.

Kein dauerhafter Klon nötig – der Push läuft über einen kurzlebigen Scratch-Klon,
den die Session danach wieder entfernt.
