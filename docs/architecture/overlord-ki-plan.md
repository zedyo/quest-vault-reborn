# Overlord-KI: Implementierungsplan

**Stand:** 2026-10-04, Erstfassung aus dem Gespräch mit dem User (Nik), noch nicht begonnen.
**Zweck dieser Datei:** Eine neue Session kann hiermit **ohne Rückfrage** anfangen. Sie liest
`CLAUDE.md`, dann diese Datei, prüft den Etappenstand unten und nimmt die nächste offene Etappe.

---

## 1. Ziel

Zwei Spieler (Nik und Basti) spielen Descent 2e **kooperativ als Helden**, die App übernimmt den
Overlord. Der Overlord soll sich wie ein Overlord verhalten: eine feste Klasse, pro Szenario eine
andere Taktik, unberechenbar, mit Stimme und Persona des jeweiligen Endgegners, und mit einem
Spielleiter-Instinkt, der den Helden immer eine kleine Chance lässt.

**Warum nicht Road to Legend:** Das haben beide gespielt. Es ist vorhersehbar und kennt keine
eigenen Quests aus dem Editor. Genau das ist der Mehrwert hier.

### Nicht-Ziele (User-Entscheidung 2026-10-04)

- **Kein digitales Spielbrett.** Die App kennt keine Positionen. Sichtlinie, Reichweite und
  Bewegung entscheiden die Spieler am Tisch. Die App gibt Befehlsketten mit Rückfallebenen aus
  (Road-to-Legend-Prinzip).
- **Keine tvOS-, iOS- oder macOS-App.** Der Fernseher wird per AirPlay vom iPad bespielt.
  Dritt-Apps auf tvOS kommen nicht an das Mikrofon der Siri Remote, deshalb bleibt die
  Eingabe auf dem iPad. Native Bühne frühestens, wenn das Konzept am Tisch bewiesen ist.
- **Kein Multiplayer-Sync, kein Backend.** Ein Gerät am Tisch.
- **Keine Spieldaten erfinden.** Overlord-Karten, Monster, Leutnants kommen aus `src/data/`.

### Fixierte Entscheidungen

| Entscheidung | Festlegung |
| --- | --- |
| Ort | Dieses Repo, eigener Bereich `src/overlord/`, Route `/overlord-ki`. Kein eigenes Repo, weil die Engine die gepflegten Daten aus `src/data/` braucht. |
| Architektur | Drei Schichten, strikt getrennt: **Engine** (deterministisch, reine Funktionen, keine Netzabhängigkeit) → **Regisseur** (Sprachmodell, wählt nur aus legalen Optionen) → **Stimme** (Text-to-Speech, Persona). Jede Schicht funktioniert ohne die darüberliegende. |
| Overlord-Klasse | Fest pro Kampagne (im Session-Tracker gewählt). Startdeck = Basis-Karten + Klassenkarten mit `xpCost: 0`, Zukauf über Overlord-XP wie beim menschlichen Overlord. |
| Taktikprofil | Pro Szenario, **verdeckt gewürfelt** aus sechs Profilen (aggressiv, defensiv, offensiv, trickreich, fallenlastig, monsterlastig), am Szenarioende aufgedeckt. |
| Fairness | Druckwert aus Heldenzustand und Questfortschritt. Schwellen je Schwierigkeitsgrad. Über der Schwelle filtert die Engine die härtesten Optionen. Unsichtbar für die Spieler, aber im Protokoll nachvollziehbar. |
| Persona | Pro Leutnant/Endgegner (aus `src/data/lieutenants.ts`), sonst generischer Overlord. Eigene Texte, keine FFG-Prosa (siehe `wiki/concepts/ffg-ip-boundary.md`). |
| Stimme | Feste Sätze vorab erzeugt und als Audio im Repo, dynamische Sätze live per TTS-Dienst, Rückfallebene Browser-TTS (`speechSynthesis`). |
| Schlüssel | API-Schlüssel (LLM, TTS) gibt der Nutzer selbst ein, nur `localStorage`, eigener Key, nie im Export, nie in URLs, nie im Log. Ohne Schlüssel läuft alles bis einschließlich Textansage. |
| Kosten | Engine und Textansage kostenlos und offline. Regisseur und Live-Stimme kosten, Obergrenze pro Sitzung einstellbar. |

---

## 2. Architektur

```
src/overlord/
  engine/            reine TypeScript-Funktionen, kein React, kein fetch, kein Date.now()
    types.ts         OverlordAiState, TacticProfile, MonsterFigure, Option, PressureScore ...
    rng.ts           seedbarer Zufall (mulberry32 o. ä.), damit jede Partie reproduzierbar ist
    deck.ts          Deck/Hand/Ablage, Ziehen, Nachmischen, Kaufen mit XP
    tactics.ts       die sechs Profile als Gewichte + Zielwahlregeln
    behaviour.ts     Befehlsketten je Monstergruppe (Nahkampf/Fernkampf/Boss), Rückfallebenen
    options.ts       Optionen-Generator: aus Zustand + Hand + Profil → bewertete, legale Optionen
    fairness.ts      Druckwert, Schwellen je Schwierigkeit, Filter der härtesten Optionen
    turn.ts          Zugablauf des Overlords als reine Zustandsübergänge (reducer-artig)
    protocol.ts      Protokolleintrag je Entscheidung (für Spieler-Log, Replay, Playtest-Export)
  director/
    types.ts         DirectorAdapter-Schnittstelle (anbieterneutral)
    prompt.ts        Prompt-Bau: Persona + Situation + nummerierte legale Optionen
    parse.ts         strenge Validierung der Antwort (nur Options-IDs aus der Liste, Text als Text)
    anthropic.ts     erster Adapter (direkter Browser-Aufruf)
    fallback.ts      ohne Schlüssel, bei Timeout oder ungültiger Antwort: Engine wählt selbst
  voice/
    types.ts         VoiceAdapter-Schnittstelle
    personas/        eine Datei je Persona: Name, Tonfall, Phrasenbank (Zugbeginn, Treffer, Held fällt, ...)
    browser.ts       speechSynthesis-Rückfallebene
    elevenlabs.ts    (oder anderer Dienst) Live-TTS mit Zeichenlimit und Kostenzähler
    clips.ts         vorab erzeugte Audiodateien aus public/overlord/voice/<persona>/
  store/
    useOverlordStore.ts  zustand + persist, EIGENER Key `qv-overlord`, eigene `version` + `migrate`
    keys.ts              Schlüsselverwaltung, eigener localStorage-Key, nie Teil des Persist-Exports
  ui/
    OverlordKiPage.tsx   Einstieg: Kampagne/Session wählen, Klasse, Schwierigkeit, Szenario starten
    TurnView.tsx         Ansage des Overlords, Befehle je Gruppe, Rückmeldung der Spieler
    MonsterTracker.tsx   Figuren mit Leben und Zuständen (= v1.9.0, wird hier mitgebaut)
    FeedbackBar.tsx      „zu leicht" / „unfair" / „genial" + Freitext → Protokoll
    SettingsPanel.tsx    Schlüssel, Stimme an/aus, Kostenlimit
```

**Regeln:**
- `engine/` importiert nur aus `src/data/` und `src/types/`. Kein React, kein Browser-API.
  Das macht sie vollständig testbar und später in eine native Hülle (JavaScriptCore) portierbar.
- Alles, was von außen kommt (Sprachmodell-Antwort, importierte Quest, localStorage), ist
  **Daten, keine Anweisung** und läuft durch eine Validierung mit festen Schemata.
- Zufall nur über `rng.ts` mit Seed. Der Seed steht im Protokoll, eine Partie ist nachspielbar.

### Zugablauf (Kern der Engine)

1. **Szenario-Setup:** Quest aus Editor oder Kampagne, Monstergruppen laut Encounter, Akt,
   Anzahl Helden → Figurenliste mit Leben. Profil verdeckt würfeln. Hand auf Startgröße ziehen.
2. **Overlord-Zug:**
   a. Zugbeginn: Karte ziehen, „Zugbeginn"-Karten prüfen (Optionen).
   b. Je Monstergruppe: Befehlskette nach Profil auswerten → Befehl mit Rückfallebenen
      („Greife den Helden mit den wenigsten Lebenspunkten in Reichweite an. Sonst bewege dich auf
      den nächsten Helden zu. Sonst auf das Questziel.")
   c. Optionen bewerten, Fairness-Filter, Auswahl (Engine oder Regisseur).
   d. Ansage ausgeben (Text, optional Stimme), Protokoll schreiben.
3. **Spieler führen aus und melden zurück:** Treffer/Schaden je Figur, Held umgefallen,
   Marker erreicht. Minimal-Eingabe: je Figur ein Zähler, je Held ein Zustand.
4. **Helden-Zug:** Spieler melden Angriffe auf Monster (Schaden) und Auslöser für Overlord-Karten
   (z. B. „Held greift an" → Reaktionskarten als Optionen).
5. **Szenarioende:** Ergebnis, Profil aufdecken, Overlord-XP/Belohnungen in den Session-Tracker,
   Playtest-Protokoll exportierbar.

### Taktikprofile (Gewichte, erste Fassung, werden durch Playtests kalibriert)

| Profil | Zielwahl Monster | Kartenpräferenz | Besonderheit |
| --- | --- | --- | --- |
| aggressiv | schwächster Held in Reichweite | Angriffsverstärker | spielt Karten früh |
| defensiv | Held, der dem Questziel am nächsten ist | Bewegungsblocker, Heilung/Wiederkehr | Monster bleiben beim Ziel |
| offensiv | Held mit den meisten offenen Angriffsflächen (Spieler-Einschätzung) | Schub-/Schadenskarten | Fokus auf Ausschalten |
| trickreich | wechselnd, Zufall hoch | Ereignis/Spezial | hortet Karten, zündet im Finale |
| fallenlastig | Held, der sich zuletzt bewegt hat | Fallen | spart Fallen für Bewegungen auf |
| monsterlastig | Gruppenfokus auf einen Helden | Verstärkung/Wiederkehr | zieht Verstärkung vor Karten vor |

### Fairness-Regler (Spielleiter-Instinkt)

- **Druckwert** 0..1 aus: Anteil umgefallener Helden, mittlere Lebenspunkte in Prozent,
  Questfortschritt der Helden gegenüber dem Overlord, Anzahl Runden ohne Heldenerfolg.
- **Schwierigkeit** setzt die Schwelle: `nachsichtig` 0.5, `normal` 0.7, `rücksichtslos` 0.9,
  `unbarmherzig` = kein Filter.
- **Über der Schwelle:** kein Todesstoß auf den letzten stehenden Helden, höchstens eine Karte
  pro Zug, Verstärkung eine Runde verzögert. Jede Anwendung steht im Protokoll (nicht in der
  Ansage), damit Playtests die Wirkung belegen.

---

## 3. Etappen

Jede Etappe ist einzeln auslieferbar, mit eigener Definition of Done. Die Etappen 0 bis 2 sind
die Pflicht, ab Etappe 3 entscheidet das Playtest-Feedback über die Reihenfolge.
Versionsnummern: v1.9.0 bleibt der Monster-Tracker (Etappe 1), die Engine wird v1.9.x,
Textansagen v1.11.0 (v1.10.0 bleibt für die Helden-Spieleransicht reserviert), Stimme v1.12.0,
Regisseur v1.13.0. Abweichungen in der Statustabelle von `CLAUDE.md` festhalten.

### Etappe 0: Fundament (kein sichtbares Feature)

- [ ] Ordner `src/overlord/` mit `engine/types.ts`, `engine/rng.ts`, `engine/protocol.ts`
- [ ] `useOverlordStore` mit eigenem Persist-Key, `version: 1`, leerem `migrate`
- [ ] Route `/overlord-ki` hinter einem Feature-Schalter (nur sichtbar, wenn im Store aktiviert),
      Seite zeigt „in Arbeit"
- [ ] Tests: `rng` ist bei gleichem Seed identisch; Store lädt mit kaputtem State ohne Crash
- **DoD:** `npm test` und `npm run build` grün, Branch-Vorschau zeigt die Seite, Statustabelle aktualisiert

### Etappe 1: Monster-Tracker (= v1.9.0)

- [ ] Figurenliste aus Encounter (Gruppengröße nach Heldenzahl aus `groupSizes`, Normal/Meister, Akt)
- [ ] Leben pro Figur, Zustände (aus `conditions.ts`), Figur ausgeschaltet, Verstärkung
- [ ] iPad-Bedienung: große Tipp-Flächen, Plus/Minus, keine Tastatur nötig
- [ ] Import aus laufender Session (Helden, Akt) über `useSessionStore`, nur lesend
- [ ] Tests: Gruppengröße je Heldenzahl stimmt mit `docs/game-data/` überein; Lebenspunkte
      nie unter 0 oder über Maximum; Zustände korrekt gesetzt und entfernt
- **DoD:** wie oben, zusätzlich: ein echter Spielabend nur mit dem Tracker (ohne KI) ist möglich

### Etappe 2: Engine (deterministischer Overlord)

- [ ] `deck.ts`: Startdeck aus Basis + Klasse, Ziehen, Hand, Ablage, Nachmischen, Kauf mit XP
- [ ] `tactics.ts`: sechs Profile, verdecktes Würfeln, Aufdecken am Ende
- [ ] `behaviour.ts`: Befehlsketten für Nahkampf, Fernkampf, Boss/Leutnant, mit Rückfallebenen
- [ ] `options.ts`: alle legalen Optionen eines Zuges mit Bewertung nach Profil
- [ ] `fairness.ts`: Druckwert, Schwellen, Filter, Protokollvermerk
- [ ] `turn.ts`: Zustandsübergänge, Rückmeldungen der Spieler als Ereignisse
- [ ] Tests (siehe Abschnitt 4), Zielwert: Engine-Abdeckung über 90 % der Zweige
- **DoD:** wie oben, zusätzlich ein Replay-Test: dieselbe Seed-Partie liefert dasselbe Protokoll

### Etappe 3: Textansagen und erster Spielabend (= v1.11.0)

- [ ] `TurnView`: Ansage je Gruppe, Karten des Overlords mit Regeltext (`rulesDe`), Rückmeldung
- [ ] `FeedbackBar` + Protokoll-Export als JSON
- [ ] Persona nur als Text (Name, Anredeform), noch keine Stimme
- [ ] Spielabend 1 mit Nik und Basti, danach Playtest-Retro (Abschnitt 5)
- **DoD:** Ein vollständiges Szenario am Tisch durchgespielt, Protokoll liegt unter `docs/playtests/`

### Etappe 4: Persona und Stimme (= v1.12.0)

- [ ] Persona-Dateien für drei Leutnants (User wählt) + generischer Overlord, Phrasenbank mit
      mindestens 8 Varianten je Anlass, damit sich nichts zu früh wiederholt
- [ ] `browser.ts` als Rückfallebene, Lautstärke und Aus-Schalter
- [ ] Vorab erzeugte Clips: Skript `scripts/overlord-voice-build.mjs`, Eingabe Phrasenbank,
      Ausgabe `public/overlord/voice/<persona>/<anlass>-<n>.mp3`, Größe je Clip unter 100 KB
- [ ] Live-TTS-Adapter mit Zeichenlimit pro Sitzung und Kostenanzeige
- [ ] Tests: Phrasenbank-Snapshot, Adapter-Vertrag mit Mock, Clip-Manifest vollständig
- **DoD:** wie oben, Spielabend 2 mit Stimme über AirPlay auf dem Fernseher

### Etappe 5: Regisseur (= v1.13.0)

- [ ] `DirectorAdapter` + `anthropic.ts`, Modell per Einstellung, Standard das günstigste
      geeignete Modell (siehe Skill `claude-api` für aktuelle Modell-IDs)
- [ ] Prompt: Persona, Taktikprofil, Situation, **nummerierte legale Optionen**; Antwort als JSON
      `{ optionId, sayDe }`, nichts anderes wird ausgewertet
- [ ] `parse.ts`: nur bekannte `optionId`, `sayDe` auf 280 Zeichen gekürzt, als Text gerendert
- [ ] Timeout 8 s, dann `fallback.ts`; Fehler zählen, nach drei Fehlern Regisseur für die
      Sitzung aus
- [ ] Reaktionen auf Spieler-Ereignisse (Held fällt, kritischer Treffer gegen den Overlord)
- [ ] Kostenzähler (Token-Schätzung) mit einstellbarer Obergrenze pro Sitzung
- [ ] Tests: Prompt-Snapshot, Parser lehnt fremde IDs/HTML/überlange Texte ab, Fallback greift
      bei Timeout, Mock-Adapter ohne Netz
- **DoD:** wie oben, Spielabend 3, Vergleich Engine-Wahl gegen Regisseur-Wahl im Protokoll

### Etappe 6 (optional): Spracheingabe

- Browser-Spracherkennung auf dem iPad für Rückmeldungen („Goblin zwei: drei Schaden").
  Nur, wenn die Tipp-Eingabe am Tisch als zu langsam empfunden wird.

---

## 4. Tests (automatisch, Teil der CI)

Alle Tests laufen mit `npm test` (Vitest), ohne Netz, ohne echte Schlüssel. CI bleibt unverändert
(`ci.yml` auf jedem Branch-Push, `deploy.yml` lässt rote Tests nicht durch).

| Art | Was | Wo |
| --- | --- | --- |
| Unit | Deck-Mechanik, Profile, Befehlsketten, Druckwert, Filter | `src/overlord/engine/__tests__/` |
| Eigenschaft (property) | Für 1000 zufällige Zustände mit Seed: jede erzeugte Option ist legal (Karte in der Hand, Auslöser erfüllt, Figur lebt); Fairness filtert nie **alle** Optionen weg; Lebenspunkte bleiben im Bereich | `engine/__tests__/options.property.test.ts` |
| Replay | Seed-Partie aus `fixtures/` liefert bitgleiches Protokoll (Golden-File). Änderung an Gewichten = bewusstes Update der Golden-Datei im selben Commit | `engine/__tests__/replay.test.ts` |
| Datenintegrität | Jede Overlord-Klasse hat ein spielbares Startdeck; jede Persona verweist auf einen existierenden Leutnant; Clip-Manifest vollständig | `src/data/__tests__/` erweitern |
| Vertrag | `DirectorAdapter` und `VoiceAdapter` gegen Mock: Timeout, ungültige Antwort, leere Antwort, Kostenlimit erreicht | `director/__tests__/`, `voice/__tests__/` |
| Parser | Fremde Options-IDs, HTML/Script-Fragmente, 10.000-Zeichen-Antwort, Prototype-Pollution-Keys werden verworfen | `director/__tests__/parse.test.ts` |
| Store | Laden mit manipuliertem/leerem/altem State crasht nicht; `migrate` je Version; Schlüssel landen nie im Export | `store/__tests__/` |
| UI (leichtgewichtig) | Render-Tests der Kernansichten mit festem Zustand; keine Netzaufrufe | `ui/__tests__/` |

Regel aus `CLAUDE.md` gilt: Tests nie löschen oder skippen, um grün zu werden.

---

## 5. Feedback-Schleife

Die Engine wird nicht am Schreibtisch gut, sondern am Tisch. Deshalb ist die Schleife Teil des Plans:

1. **Im Spiel:** `FeedbackBar` mit drei Knöpfen (zu leicht, unfair, genial) + Freitext, jeder
   Klick hängt am aktuellen Protokolleintrag (welche Option, welches Profil, welcher Druckwert).
2. **Nach dem Spielabend:** Protokoll als JSON exportieren, in `docs/playtests/JJJJ-MM-TT.md`
   kurz auswerten: Was war vorhersehbar? Wo griff die Fairness, und war das richtig? Welche
   Sätze haben sich wiederholt? Drei Änderungen für die nächste Runde beschließen.
3. **In der nächsten Session:** Gewichte, Schwellen und Phrasen anpassen, Golden-Dateien bewusst
   erneuern, Playtest-Datei verlinken.
4. **Keine Telemetrie.** Nichts verlässt das Gerät, außer der Nutzer exportiert.
5. **Versionierte Kalibrierung:** Gewichte liegen in einer Datei (`tactics.ts`), jede Änderung
   ist ein Commit mit Verweis auf den Playtest, der sie ausgelöst hat.

---

## 6. Sicherheit

Ergänzt die bestehenden Prüfpunkte des Subagenten `sicherheits-pruefer`, der vor jedem Push
mit `src/`-Änderungen laufen muss.

- **Schlüssel:** eigener `localStorage`-Key, nie im zustand-persist-Export, nie in Session-Export,
  nie in URLs, nie in `console.*`, nie im Playtest-Protokoll. Einstellungs-UI zeigt nur die
  letzten vier Zeichen. Löschen-Knopf. Hinweis im UI, dass der Schlüssel im Browser liegt.
- **Direkter Browser-Aufruf des LLM:** nur zu den fest verdrahteten Anbieter-URLs, kein
  nutzerdefinierter Endpunkt (sonst Schlüssel-Exfiltration über eine fremde URL).
- **Antworten sind Daten:** Parser akzeptiert ausschließlich das Schema `{ optionId, sayDe }`,
  `optionId` muss in der gesendeten Liste sein, `sayDe` wird als Text gerendert (kein
  `dangerouslySetInnerHTML`), Länge begrenzt, Steuerzeichen entfernt.
- **Prompt-Injektion:** Questtexte aus Importen und Freitext der Spieler gehen in den Prompt,
  sind also untrusted. Deshalb darf das Modell **nichts entscheiden, was die Engine nicht als
  Option angeboten hat**. Keine Werkzeuge, kein Zugriff auf den Store, keine Aktionen.
- **Kosten:** harte Obergrenze pro Sitzung für LLM-Aufrufe und TTS-Zeichen, Zähler sichtbar,
  bei Erreichen stiller Wechsel auf Engine + Browser-Stimme.
- **Audio-Clips im Repo:** nur selbst erzeugte Dateien, Manifest mit Prüfsumme, Gesamtgröße
  unter 20 MB (sonst Pages-Build und Clone leiden).
- **Persist-Schema:** eigener Store, `version` + `migrate` Pflicht (Schutzregel aus `CLAUDE.md`).
- **Abhängigkeiten:** Ziel null neue Laufzeit-Abhängigkeiten. Seed-RNG und Validierung von Hand,
  wie bei `questImport.ts`. Falls doch eine nötig ist: `npm audit`, Begründung in `CLAUDE.md`.
- **IP:** Persona-Texte sind eigene Kreativarbeit. Keine Quest- oder Ereignisprosa von FFG im
  Repo oder in vorab erzeugten Clips. Leutnantnamen und Kartenregeltexte sind durch
  `ffg-ip-boundary.md` gedeckt.

---

## 7. So startet eine Session

1. `CLAUDE.md` vollständig lesen, dann diese Datei.
2. Etappenstand oben prüfen, die nächste offene Etappe nehmen, nicht zwei auf einmal.
3. Branch `claude/overlord-ki-etappe-<n>-<kurz>` vom aktuellen `main`.
4. Git-Identität setzen (siehe `CLAUDE.md`, Git-Workflow).
5. Bauen, testen, Branch-Vorschau prüfen, Subagenten laufen lassen.
6. Auto-PR-und-Merge nach den Regeln in `CLAUDE.md`. Playtest-Etappen (3, 4, 5) enden mit
   einem Spielabend, der nicht in der Session stattfindet: dann PR mergen und in der
   Statustabelle „wartet auf Spielabend" eintragen.
7. Diese Datei fortschreiben: Haken setzen, Erkenntnisse unten unter „Erkenntnisse" eintragen.

---

## 8. Offene Fragen an den User (vor Etappe 2 klären, bis dahin Annahmen)

| Frage | Annahme bis zur Antwort |
| --- | --- |
| Welche Overlord-Klasse zuerst? | `warlord` (Kriegsherr), weil monsterlastig und am einfachsten zu skripten |
| Welche drei Leutnants bekommen als erste eine Persona? | Die drei der Grundspiel-Kampagne „Schattenrune" |
| Schwierigkeitsstufen-Namen | nachsichtig, normal, rücksichtslos, unbarmherzig |
| TTS-Dienst | ElevenLabs, Preis vor Etappe 4 prüfen, Alternative mit Preisvergleich vorlegen |
| Spieler melden Schaden je Figur oder nur „Figur tot"? | je Figur (Monster-Tracker braucht es ohnehin) |

---

## 9. Erkenntnisse (von Sessions fortgeschrieben)

_(noch leer)_
