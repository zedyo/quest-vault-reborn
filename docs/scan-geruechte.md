# Scan-Workflow: Gerücht-Karten (Rumor) → Zuschnitte + Doku

> **Verbindlicher Auftrag für eine lokale Session.** Geteilte Mechanik (Tooling,
> Push ohne dauerhaften Klon, Probe-/Freigabe-Stopps) steht in
> **`docs/scan-workflow.md`** – hier nur die **Besonderheiten** der Gerücht-Karten.
> Fertiger Einfüge-Prompt: §7.

---

## 1. Worum es geht

Der User hat seine **deutschen „Gerücht-Karten" (Rumor cards)** eingescannt und will
sie sauber im Repo: **saubere Zuschnitte** + **Doku**.

Fakten vom User:
- Es sind **vor allem einseitige** Karten (gemeinsame Rückseite; ggf. einzelne Ausnahmen).
- **Pro Erweiterung in einzelne Files** gescannt (Datei-/Ordnerstruktur nach Erweiterung).
- Quelle: lokaler Ordner **`Gerüchtekarten`** – **Pfad zu Beginn bestätigen lassen.**

**Wichtig:** Das sind **NICHT** die Advanced-Quest-Karten (die liegen bereits als
`ADVANCED_QUESTS` in `campaigns.ts`). Gerücht-Karten sind ein **eigener Kartentyp**
(in any2cards `data/rumors.js`, Bilder unter `images/rumors/d2e/<exp>/act1/`).

---

## 2. Besonderheiten (ggü. den Heldenscans)

1. **Layout NICHT als 2-up annehmen.** Pro Erweiterung kann eine Datei **eine ODER
   mehrere** Karten enthalten (z. B. Lindwurm/Trollsümpfe haben je 6 Gerüchte). **Zuerst
   je Erweiterung eine Datei ansehen** (Read-Tool): wie viele Karten, Hoch/Quer?
   - 1 Karte/Datei → nur **inhaltsbasiert trimmen** (Bounding-Box + kleiner Rand).
   - mehrere Karten/Datei → splitten (`scripts/crop_hero_scans.py` ist ein 2-up-Start­punkt;
     bei n>2 einen einfachen Grid-/Lückensplit anpassen).
2. **Einseitig.** In der Regel keine `-back`. Falls doch eine Rückseite gescannt ist,
   als `…-back` ergänzen; sonst nur die Vorderseite.
3. **Erweiterung gegen `src/data/expansions.ts` prüfen** (verbindliche Produktliste).
   Jede Erweiterung muss dort existieren. **Sonderfall „Sands of the Past":** any2cards
   führt dort 3 Gerüchte, aber die Erweiterung ist **NICHT in expansions.ts** (historisch
   als halluzinationsverdächtig markiert, s. CLAUDE.md). Falls der User solche Karten
   physisch besitzt → **dem User melden und klären** (ob real → expansions.ts müsste
   sauber ergänzt werden), **nicht eigenmächtig hinzufügen**.
4. **Identifikation:** Der **deutsche Kartenname auf dem Scan ist die maßgebliche
   Quelle** (echte Karte). Zusätzlich gegen die any2cards-Liste je Erweiterung (§4)
   abgleichen, um die englische Entsprechung + den **`xws`-Dateinamen** zu finden.
   Passt eine Karte zu keiner gelisteten → **melden, nicht raten**.
5. **Text-Wiedergabe = Rückfrage (FFG-IP!).** Gerücht-Karten haben Flavor + Timing +
   Effekt-Text. Das Projekt gibt Quest-/Ereignis-Inhalte **bewusst NICHT** wieder
   (so bei `campaigns.ts`/`travelCards.ts`). **Den User fragen:**
   - **(A) nur faktische Metadaten** (Name DE/EN, Erweiterung, Akt, Reise-Gelände, xws,
     Bildverweis) – projektkonform, **Default** – **oder**
   - **(B) zusätzlich wortgetreuer deutscher Kartentext** (wie bei den Helden).

---

## 3. Ablauf

1. **Preflight + Pfad** (s. `docs/scan-workflow.md` §0/§1): Push-Zugang prüfen,
   Scan-Ordner-Pfad bestätigen, Struktur (Dateien je Erweiterung) auflisten.
2. **Tooling:** Python3 + Pillow + numpy.
3. **Layout-Probe je Erweiterungstyp** (mind. eine 1-Karten- und eine Mehr-Karten-Datei):
   ansehen, passend zuschneiden in einen **lokalen** Ordner (NICHT ins Repo), dem User
   zeigen, OK abwarten.
4. **IP-Frage** (A/B, §2.5) klären.
5. **Alle Dateien verarbeiten.** Je Karte: deutschen Namen lesen, Erweiterung gegen
   `expansions.ts` prüfen, englische Entsprechung + `xws` über §4 bestimmen.
   Dateiname = **`xws`** (klein, ASCII), z. B. `onemanstrash.png`.
6. **Doku** schreiben (Vorlage §5).
7. **Freigabe-Stopp:** alle Zuschnitte + Doku auflisten, finales OK abwarten.
8. **Push** auf `claude/inspiring-cori-j162b8` (Scratch-Klon, s. `scan-workflow.md` §8).
   Original-Scans NICHT committen.

---

## 4. Abgleichsliste – echte Gerücht-Karten je Erweiterung (any2cards `rumors.js`)

Englischer Name + `xws` (= Dateiname). Der **deutsche** Name kommt vom Scan; hier nur
zur Zuordnung. Akt durchgehend I (wo bekannt).

| Erweiterung (expansions.ts id) | # | Karten (englisch → xws) |
|---|---|---|
| bonds-of-the-wild | 1 | One Man's Trash → `onemanstrash` |
| crown-of-destiny | 1 | Burning Harvest → `burningharvest` |
| crusade-of-the-forgotten | 1 | Crusade of the Forgotten → `crusadeoftheforgotten` |
| guardians-of-deephall | 1 | Guardians of Deephall → `guardiansofdeephall` |
| lair-of-the-wyrm | 6 | A Dangerous Path → `adangerouspath`; Gold Digger → `golddigger`; Rude Awakening → `rudeawakening`; Valyndra's Fury → `valyndrasfury`; What's Yours Is Mine → `whatsyoursismine`; Unknown Treasures → `unknowntreasures` |
| manor-of-ravens | 4 | Cursed Treasures → `cursedtreasures`; Finders and Keepers → `findersandkeepers`; My House, My Rules → `myhousemyrules`; Spread Your Wings → `spreadyourwings` |
| oath-of-the-outcast | 1 | Oath of the Outcast → `oathoftheoutcast` |
| shards-of-everdark | 1 | Shards of Everdark → `shardsofeverdark` |
| stewards-of-the-secret | 1 | Stewards of the Secret → `stewardsofthesecret` |
| the-trollfens | 6 | Atrocities → `atrocities`; Famine and Strife → `famineandstrife`; Food for Worms → `foodforworms`; Ghost Town → `ghosttown`; Scarce Goods → `scarcegoods`; Three Heads, One Mind → `threeheadsonemind` |
| treaty-of-champions | 1 | Sindae's Secret → `sindaessecret` |
| visions-of-dawn | 1 | Trucebreaker → `trucebreaker` |

**→ 25 Karten in 12 Erweiterungen.** Plus Sonderfall **„Sands of the Past"** (3:
`hallsoftoil`, `theunearthedtomb`, `valleyofthedead`) – **nicht in expansions.ts**,
siehe §2.3 (mit User klären, nicht einfach übernehmen).

> Maßgeblich bleibt die echte Karte. Findet sich ein Scan zu keiner Karte oben →
> dem User melden (evtl. weitere reale Karte / abweichende any2cards-Daten).

---

## 5. Doku-Vorlage (`scans/geruechte/Geruechtkarten.md`)

```markdown
## <Deutscher Name> (<Englischer Name>)

![<Name>](./<exp-id>/<xws>.png)

- **xws / Dateiname:** <xws>
- **Erweiterung:** <expansions.ts id>
- **Akt:** <I / II / —>
- **Reise-Gelände:** <aus any2cards `travel`, falls bekannt – sonst „—">
- **Seiten:** einseitig

<!-- NUR bei Variante B (nach User-Freigabe): wortgetreuer deutscher Kartentext.
     Bei Variante A weglassen (FFG-IP). -->
```

Gruppierung in der Doku nach Erweiterung (Überschrift je Erweiterung).

---

## 6. Ausgabe-Struktur

```
scans/geruechte/<exp-id>/<xws>.png       ← Zuschnitt (einseitig)
scans/geruechte/Geruechtkarten.md        ← Doku (Metadaten + ggf. Text)
```

Original-Scans bleiben außerhalb des Repos (nur lesen). Eine spätere App-Integration
(eigene Gerücht-Daten + deutsche Bilder, analog zu den Helden/`heroImagesDe`) erfolgt
separat in einer Cloud-Session.

---

## 7. Fertiger Einfüge-Prompt

```text
Du arbeitest lokal auf meinem Rechner. Ziel: meine eingescannten deutschen
„Gerücht-Karten" (Rumor cards) sauber zuschneiden, benennen, dokumentieren und
ins GitHub-Repo zedyo/quest-vault-reborn (Branch claude/inspiring-cori-j162b8)
speichern. Ich will KEINEN dauerhaften lokalen Klon. Es sind vor allem EINSEITIGE
Karten, von mir pro Erweiterung in einzelne Files gescannt.

Lies zuerst im Repo docs/scan-geruechte.md UND docs/scan-workflow.md und folge
ihnen exakt. Bei Unklarheit fragen, nichts erfinden.

0) PREFLIGHT: Repo-Push-Zugang prüfen (git ls-remote
   https://github.com/zedyo/quest-vault-reborn.git). Aus dem Repo holen:
   docs/scan-geruechte.md, docs/scan-workflow.md, scripts/crop_hero_scans.py,
   src/data/expansions.ts. Kein Push-Zugang? STOPP und sag mir, was fehlt.

1) Frag mich nach dem Pfad zum Ordner „Gerüchtekarten" und liste die Struktur auf
   (Dateien/Ordner je Erweiterung).

2) Python3 + Pillow + numpy sicherstellen.

3) LAYOUT-PROBE: Sieh dir je Typ eine Datei an und bestimme, ob sie EINE oder
   MEHRERE Karten enthält und Hoch-/Querformat. Schneide eine Probe in einen LOKALEN
   Ordner (NICHT ins Repo): bei 1 Karte/Datei nur inhaltsbasiert trimmen, bei mehreren
   splitten (crop_hero_scans.py ist ein 2-up-Startpunkt – bei n>2 anpassen). Zeig mir
   das Ergebnis und warte auf mein OK.

4) Frag mich zur Doku-Tiefe: (A) nur faktische Metadaten (Name DE/EN, Erweiterung,
   Akt, Reise-Gelände, xws, Bildverweis) – Default – ODER (B) zusätzlich der
   wortgetreue deutsche Kartentext.

5) Alle Dateien verarbeiten. Je Karte: deutschen Namen vom Scan lesen; Erweiterung
   gegen src/data/expansions.ts prüfen; englische Entsprechung + xws über die Liste in
   docs/scan-geruechte.md §4 bestimmen. Dateiname = xws (klein, ASCII) nach
   scans/geruechte/<exp-id>/<xws>.png. Passt etwas nicht (z. B. Erweiterung „Sands of
   the Past" fehlt in expansions.ts, oder Karte nicht in der Liste) → mir melden, nicht
   raten/erfinden.

6) scans/geruechte/Geruechtkarten.md nach der Vorlage in docs/scan-geruechte.md
   schreiben (nach Erweiterung gruppiert, Variante A oder B wie geklärt).

7) STOPP für meine Prüfung: alle Zuschnitte + die Doku auflisten, auf mein finales OK
   warten. ERST DANN pushen.

8) Nach meinem OK: Dateien unter scans/geruechte/ ablegen und auf
   claude/inspiring-cori-j162b8 pushen – per temporärem flachem Klon in einem
   Scratch-Ordner (git clone --depth 1 --branch claude/inspiring-cori-j162b8 ...),
   hineinkopieren, commit + push, Scratch-Ordner wieder löschen. Original-Scans NICHT
   committen. Melde mir Commit-Hash + Push-Status.
```
