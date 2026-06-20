# Scan-Workflow: Gerüchtekarten (Advanced Quests) → Zuschnitte + Doku

> **Verbindlicher Auftrag für eine lokale Session.** Geteilte Mechanik (Tooling,
> Push ohne dauerhaften Klon, Probe-/Freigabe-Stopps) steht in
> **`docs/scan-workflow.md`** – die hier nur die **Unterschiede** für Gerüchtekarten.
> Der fertige Einfüge-Prompt steht ganz unten (§7).

---

## 1. Worum es geht

Der User hat seine **deutschen „Gerüchtekarten"** (= Advanced-Quest- / Nebenquest-
Karten) eingescannt und will sie sauber im Repo: **saubere Einzel-Zuschnitte** +
**Doku**. Quelle: lokaler Ordner **`Gerüchtekarten`** (z. B.
`…/Desktop/Descent Scanns/Gerüchtekarten`) – **Pfad zu Beginn bestätigen lassen**.

Diese Karten entsprechen den **`ADVANCED_QUESTS`** in `src/data/campaigns.ts` (dort
schon mit deutschem Namen, Erweiterung, Akt, Reise-Gelände und **englischen**
Bild-URLs front/back). Das ist die **Abgleichsliste gegen Halluzination** (kein Raten).

---

## 2. Unterschiede zu den Heldenscans (WICHTIG)

1. **Layout NICHT annehmen.** Heldenseiten hatten 2 Karten quer. Gerüchtekarten
   können anders liegen (1, 2 oder mehr pro Seite, evtl. Hochformat). **Zuerst EINE
   Seite ansehen** (Read-Tool) und Layout bestimmen, dann das Zuschneiden anpassen.
   `scripts/crop_hero_scans.py` trennt nur in **zwei** Karten – das ist ein Startpunkt;
   bei anderem Layout `--axis` setzen oder einen einfachen Grid-/Lückensplit anpassen.
2. **Vorder- UND Rückseite?** Advanced-Quest-Karten sind doppelseitig (Front =
   Gerücht/Quest-Einstieg, Back = Quest-Karte). **Klären, ob der User beide Seiten
   gescannt hat.** Falls ja: je `…-front` und `…-back` benennen.
3. **Abgleich gegen `ADVANCED_QUESTS` (16 Karten, §4).** Jeden erkannten Titel dort
   wiederfinden (deutscher ODER englischer Name). **Kein Treffer → melden, nicht
   raten** – evtl. eine reale Gerüchtekarte, die noch nicht im Repo ist (dann gegen
   any2cards `advanced-quests`/BGG verifizieren und dem User vorlegen, NICHT erfinden).
4. **Text-Wiedergabe = Rückfrage (IP!).** Das Projekt gibt **Questbuch-/Quest-Inhalte
   bewusst NICHT** wieder (FFG-IP – so gehandhabt bei `campaigns.ts`/`travelCards.ts`:
   nur Fakten-Metadaten, kein Ereignis-/Questtext). Gerüchtekarten enthalten Quest-
   Setup-Text. **Den User fragen**, ob die Doku
   - **(A) nur faktische Metadaten** (Name, Erweiterung, Akt, Reise-Gelände, Seite,
     Bildverweis) enthalten soll – projektkonform, empfohlen – **oder**
   - **(B) zusätzlich den wortgetreuen deutschen Kartentext** (wie bei den Helden).
   Default ohne Antwort: **(A)**.

---

## 3. Ablauf

1. **Preflight + Pfad** (wie `docs/scan-workflow.md` §0/§1): Repo-Push-Zugang prüfen,
   Scan-Ordner-Pfad bestätigen, Inhalt auflisten.
2. **Tooling** sicherstellen: Python3 + Pillow + numpy.
3. **Layout-Probe:** eine Seite ansehen, Karten/Seite + Hoch/Quer + Front/Back klären.
   Zuschnitt einer Probeseite in einen **lokalen** Ordner (NICHT ins Repo), dem User
   zeigen, Freigabe abwarten.
4. **IP-Frage** (A oder B, §2.4) klären.
5. **Alle Seiten zuschneiden**; jede Karte **identifizieren** und gegen `ADVANCED_QUESTS`
   abgleichen (§4). Dateiname = die `id` aus `campaigns.ts`
   (z. B. `bondsofthewild-front.png`); klein, ohne Umlaute.
6. **Doku** schreiben: `scans/geruechte/Gerüchtekarten.md` (Vorlage §5).
7. **Freigabe-Stopp:** alle Zuschnitte + Doku auflisten, auf finales OK warten.
8. **Push** auf `claude/inspiring-cori-j162b8` (Variante aus `docs/scan-workflow.md` §8,
   temporärer Scratch-Klon). **Original-Scans NICHT committen.**

---

## 4. Abgleichsliste – die 16 Advanced-Quest-/Gerüchtekarten (`campaigns.ts`)

| id (Dateiname) | Deutsch | Englisch | Erweiterung | Akt |
|---|---|---|---|---|
| bondsofthewild | Bande der Wildnis | Bonds of the Wild | bonds-of-the-wild | 2 |
| crownofdestiny | Krone des Schicksals | Crown of Destiny | crown-of-destiny | 2 |
| shadowsidewatch | Wacht der Schattenseite | Shadowside Watch | crusade-of-the-forgotten | 2 |
| thecurseofiona | Der Fluch von Iona | The Curse of Iona | guardians-of-deephall | 2 |
| armedtotheteeth | Bis an die Zähne bewaffnet | Armed to the Teeth | lair-of-the-wyrm | 2 |
| attheforge | An der Schmiede | At the Forge | lair-of-the-wyrm | 2 |
| beneaththemanor | Unter dem Herrenhaus | Beneath the Manor | manor-of-ravens | 2 |
| wheretheheartis | Wo das Herz wohnt | Where the Heart Is | manor-of-ravens | 2 |
| wrongmanforthejob | Der Falsche für den Auftrag | Wrong Man for the Job | manor-of-ravens | 2 |
| prisonoficeandlies | Gefängnis aus Eis und Lügen | Prison of Ice and Lies | oath-of-the-outcast | 2 |
| hostofeverdark | Heerschar von Everdark | Host of Everdark | shards-of-everdark | 2 |
| bloodspireofdevis | Blutspitze von Devis | Bloodspire of Devis | stewards-of-the-secret | 2 |
| treatyofchampions | Kontrakt der Unbesiegten | Treaty of Champions | treaty-of-champions | 2 |
| sourceofsickness | Quelle der Seuche | Source of Sickness | the-trollfens | 2 |
| spreadingaffliction | Sich ausbreitende Plage | Spreading Affliction | the-trollfens | 2 |
| visionsofdawn | Visionen der Morgendämmerung | Visions of Dawn | visions-of-dawn | 2 |

> Reihenfolge/Stand siehe `ADVANCED_QUESTS` in `src/data/campaigns.ts` (maßgeblich).
> Findet sich eine gescannte Karte NICHT in dieser Liste → dem User melden.

---

## 5. Doku-Vorlage (`scans/geruechte/Gerüchtekarten.md`)

```markdown
## <Deutscher Name> (<Englischer Name>)

![Vorderseite](./<id>-front.png)
![Rückseite](./<id>-back.png)   <!-- nur falls Rückseite gescannt -->

- **Karten-ID (campaigns.ts):** <id>
- **Erweiterung:** <…>
- **Akt:** <…>
- **Reise-Gelände:** <aus campaigns.ts `travel`, falls vorhanden>
- **Seiten gescannt:** Vorderseite [/ Rückseite]

<!-- NUR bei Variante B (nach User-Freigabe): wortgetreuer deutscher Kartentext.
     Bei Variante A diesen Block weglassen (FFG-IP). -->
```

---

## 6. Ausgabe-Struktur

```
scans/geruechte/<id>-front.png      ← Zuschnitt Vorderseite
scans/geruechte/<id>-back.png       ← Zuschnitt Rückseite (falls gescannt)
scans/geruechte/Gerüchtekarten.md   ← Doku (Metadaten + ggf. Text)
```

Original-Scans bleiben außerhalb des Repos (nur lesen). Spätere App-Integration
(deutsche Bilder statt englischer auf der Kampagnen-/Advanced-Quest-Seite, analog zu
den Helden) erfolgt separat in einer Cloud-Session.

---

## 7. Fertiger Einfüge-Prompt

```text
Du arbeitest lokal auf meinem Rechner. Ziel: meine eingescannten deutschen
„Gerüchtekarten" (Advanced-Quest-/Nebenquest-Karten) sauber zuschneiden,
benennen, dokumentieren und ins GitHub-Repo zedyo/quest-vault-reborn
(Branch claude/inspiring-cori-j162b8) speichern. Ich will KEINEN dauerhaften
lokalen Klon.

Lies zuerst im Repo docs/scan-geruechte.md UND docs/scan-workflow.md und folge
ihnen exakt. Bei Unklarheit fragen, nichts erfinden.

0) PREFLIGHT: Repo-Push-Zugang prüfen (git ls-remote
   https://github.com/zedyo/quest-vault-reborn.git). Spezifikation + Crop-Skript
   aus dem Repo holen (docs/scan-geruechte.md, docs/scan-workflow.md,
   scripts/crop_hero_scans.py, src/data/campaigns.ts). Kein Push-Zugang? STOPP und
   sag mir, was fehlt.

1) Frag mich nach dem Pfad zum Ordner „Gerüchtekarten" und liste den Inhalt auf.

2) Python3 + Pillow + numpy sicherstellen.

3) LAYOUT-PROBE: Sieh dir EINE Seite an und bestimme: wie viele Karten pro Seite,
   Hoch- oder Querformat, und ob Vorder- UND Rückseite gescannt sind (frag mich,
   falls unklar). Schneide die Probeseite in einen LOKALEN Ordner (NICHT ins Repo),
   zeig mir das Ergebnis und warte auf mein OK. (crop_hero_scans.py trennt nur in 2
   Karten – bei anderem Layout anpassen.)

4) Frag mich zur Doku-Tiefe: (A) nur faktische Metadaten (Name, Erweiterung, Akt,
   Reise-Gelände, Seite, Bildverweis) – projektkonform – ODER (B) zusätzlich den
   wortgetreuen deutschen Kartentext. Ohne Antwort: A.

5) Alle Seiten zuschneiden. Jede Karte identifizieren und gegen die 16
   ADVANCED_QUESTS in src/data/campaigns.ts abgleichen (deutscher oder englischer
   Name). Kein Treffer → mir melden, nicht raten. Dateiname = die campaigns.ts-`id`
   (klein, ohne Umlaute), z. B. bondsofthewild-front.png / -back.png nach scans/geruechte/.

6) scans/geruechte/Gerüchtekarten.md nach der Vorlage in docs/scan-geruechte.md
   schreiben (Variante A oder B wie geklärt).

7) STOPP für meine Prüfung: alle Zuschnitte + die Doku auflisten, auf mein finales
   OK warten. ERST DANN pushen.

8) Nach meinem OK: Dateien unter scans/geruechte/ ablegen und auf
   claude/inspiring-cori-j162b8 pushen – per temporärem flachem Klon in einem
   Scratch-Ordner (git clone --depth 1 --branch claude/inspiring-cori-j162b8 ...),
   hineinkopieren, commit + push, Scratch-Ordner wieder löschen. Original-Scans
   NICHT committen. Melde mir Commit-Hash + Push-Status.
```
