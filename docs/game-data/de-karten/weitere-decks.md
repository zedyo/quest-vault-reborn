# Weitere Kartendecks (DE-Transkription aus den Original-Scans)

**Zweck:** Dauerhafte, durchsuchbare Wissensbasis für die bislang **nicht** in der App
erfassten, aber game-relevanten Kartendecks. Transkribiert aus den deutschen
Original-Kartenbildern des `scans-transfer`-Release (siehe
[`scan-sources.md`](../scan-sources.md) → Manifest + operatives Pull-Rezept).

**IP-Grenze (wie im ganzen Projekt):** Übernommen sind **funktionale Regeltexte +
faktische Metadaten**. Die kursiven **Flavor-/Erzähltext-Absätze** der Karten sind
bewusst **weggelassen** (FFG-Urheberrecht) — vgl.
[`wiki/concepts/asset-sourcing-and-ip.md`](../../../wiki/concepts/asset-sourcing-and-ip.md).

**Bilder:** Die zugehörigen DE-Kartenbilder sind (seit 2026-07-17) als optimierte webp
(≤150 KB) ins Repo committet unter **`public/cards/de/<deck>/<slug>.webp`** — damit der
Release-Scan gefahrlos gelöscht werden kann. Ordner: `suchkarten/` (9 distinkte Karten,
Doubletten Heil-/Ausdauertrank nur einmal), `geheimkammern/` (12), `befleckt/` (12),
`korrumpiert/` (9), `vertraute/` (5), `gefaehrten/` (2 Statkarten `raythen`/`serena` +
6 Fähigkeits-Upgrades `raythen-…`/`serena-…`), `aktivierung/` (1 repräsentative Referenzkarte,
4 farbgleiche Varianten). Slug = kebab-case des Kartennamens (Umlaute→ae/oe/ue/ss). Noch
**kein** App-Consumer/`assetUrl`-Helfer — die Bilder sind reine Sicherung/Referenz.

**Symbol-Konvention:** Spielsymbole stehen als Wort in eckigen Klammern
(`[Herz]`, `[Schub]`, `[Erschöpfung]`, `[Aktion]`, `[Bewegung]`, `[Verteidigung]`,
`[Fernkampf]`, `[Nahkampf]`, `[Stärke]`, `[Willenskraft]`, `[Wissen]`, `[Geistesgegenwart]`);
Würfel mit ausgeschriebener Farbe.

---

## 1. Suchkarten (Suchstapel) — Grundspiel

Quellblatt: `Karten/Suchkarten.jpg` (Raster 5×3, 13 Karten). Der gemeinsame Suchstapel,
aus dem Helden bei der Aktion **Suchen** ziehen. Wert = Gold beim Verkauf.

| Name | Typ | Gold | Effekt |
|---|---|---|---|
| **Geheimgang** | Spezial | 0 | Lege den Geheimgangmarker auf dein Feld. Du kannst die Geheimkammer sofort erforschen, ohne einen Bewegungspunkt auszugeben. Wirf diese Karte anschließend ab. — Wenn du diese Karte außerhalb einer Szene ziehst, mische sie wieder in den Suchstapel und ziehe eine neue Karte. |
| **Nichts** | Spezial | 0 | Wirf diese Karte ab. |
| **Ausdauertrank** | Trank | 25 | Drehe diese Karte in deinem Zug auf die Rückseite, und wähle deinen oder einen benachbarten Helden. Der Held gewinnt alle [Erschöpfung] zurück. |
| **Schatztruhe** | Spezial | 0 | Wirf diese Karte sofort ab, um 1 zufällige Marktkarte des aktuellen Akts zu ziehen. |
| **Voodoo-Puppe** | Gegenstand | 50 | [Aktion]: Drehe diese Karte auf die Rückseite, um 1 Zustandskarte von deinem oder einem benachbarten Helden abzuwerfen. |
| **Heiltrank** | Trank | 25 | [Aktion]: Drehe diese Karte auf die Rückseite und wähle deinen oder einen benachbarten Helden. Der Held gewinnt alle [Herz] zurück. |
| **Feuerkrug** | Gegenstand | 50 | [Aktion]: Drehe diese Karte auf die Rückseite, um mit ihr einen [Fernkampf]-Angriff durchzuführen. [Schub]: Explosion. (Würfel: blauer + gelber Würfel) |
| **Krafttrank** | Trank | 50 | Drehe diese Karte auf die Rückseite, um beliebig viele deiner Angriffswürfel neu zu werfen. |
| **Schutztalisman** | Gegenstand | 50 | Drehe diese Karte nach einem deiner Verteidigungswürfe auf die Rückseite: Du erhältst 2 zusätzliche [Verteidigung]. |

> Der Suchstapel enthält mehrere identische Trank-Exemplare: **Heiltrank** ×3
> (25 Gold, [Herz] zurück), **Ausdauertrank** ×3 (25 Gold, [Erschöpfung] zurück).
> Insgesamt 13 physische Karten, 9 verschiedene Typen (Tabelle zeigt je einen Vertreter).

---

## 2. Geheimkammern — Labyrinth des Verderbens

Quellblatt: `Karten/Geheimkammern.jpg` (Raster 5×3, 12 Karten). Erkundbare Sonderräume
(Treasure-Hunt-artig): Auslage-Anweisung, **Sonderregeln** (gelten, solange die Kammer offen
ist) und **Belohnung**.

### Das Räuberversteck
- Auslage: Lege Geheimkammer S1A aus.
- Sonderregeln: Jedes Mal, wenn die Attributsprobe eines Helden für einen Herausforderungsmarker misslingt, darf der Overlord eine Karte aus seinem Ablagestapel heraussuchen und auf sein Deck legen. Wenn ein Held in seinem Zug in dieser Geheimkammer ist, kann er eine [Geistesgegenwart]-Probe ablegen. Wenn sie gelingt, darf er 1 Herausforderungsmarker in dieser Geheimkammer aufdecken. Das erfordert keine Aktion. Wenn der Herausforderungsmarker [Geistesgegenwart] zeigt, gilt die Probe für diesen Marker automatisch als gelungen.
- Belohnung: Zieht sofort so viele Karten vom Marktkartenstapel des aktuellen Akts, wie der [Geistesgegenwart]-Wert eines Helden eurer Wahl in der Geheimkammer angibt. Wählt 1 davon und mischt die anderen zurück in den Stapel. Dann wird diese Geheimkammerkarte abgeworfen.

### Der Drachenschrein
- Auslage: Lege Geheimkammer S1B aus.
- Sonderregeln: Jeder Angriff eines Monsters in dieser Geheimkammer hat +1 [Herz].
- Belohnung: Jeder Held gewinnt sofort alle [Erschöpfung] zurück. Die Helden behalten diese Karte. Jedes Mal, wenn ein Held [Erschöpfung] erleidet (egal, weshalb), kann er die erlittenen [Erschöpfung] auf diese Karte, anstatt auf seinen Heldenbogen, legen. Sobald auf dieser Karte doppelt so viele [Erschöpfung] liegen, wie Helden im Spiel sind, wird diese Karte abgeworfen. (Alle weiteren erlittenen [Erschöpfung] kommen dann wieder auf die Heldenbögen.) Diese Karte wird am Ende des Abenteuers abgeworfen.

### Der schwarze Zirkel
- Auslage: Lege Geheimkammer S1B aus.
- Sonderregeln: Jedes Mal, wenn ein Held in dieser Geheimkammer einen Herausforderungsmarker mit Attributsymbol findet, kann er 1 [Erschöpfung] erleiden, um das Attribut als [Wissen] gelten zu lassen. Jedes Mal, wenn eine [Wissen]-Probe eines Helden für einen Herausforderungsmarker gelingt, darf er entweder eine zusätzliche Aktion in diesem Zug ausführen oder sich die obersten 3 Karten des Overlorddecks ansehen und sie in beliebiger Reihenfolge zurücklegen.
- Belohnung: Ein beliebiger Held in der Geheimkammer kann diese Karte behalten. Du kannst diese Karte jederzeit abwerfen, um den Effekt einer gerade gespielten Overlordkarte abzuwehren. Diese Karte wird am Ende des Abenteuers abgeworfen.

### Die geheime Bibliothek
- Auslage: Lege Geheimkammer S1B aus.
- Sonderregeln: Jedes Mal, wenn die Attributsprobe eines Helden für einen Herausforderungsmarker misslingt, darf der Overlord 1 Overlordkarte ziehen. Jedes Mal, wenn die Attributsprobe eines Helden für einen Herausforderungsmarker gelingt, darf er alle seine [Erschöpfung] zurückgewinnen, anstatt eine Suchkarte zu ziehen.
- Belohnung: Zieht sofort so viele Karten vom Marktkartenstapel des aktuellen Akts, wie der [Wissen]-Wert eines Helden eurer Wahl in der Geheimkammer angibt. Wählt 1 davon, und mischt die anderen zurück in den Stapel. Dann wird diese Geheimkammerkarte abgeworfen.

### Die Waffenkammer
- Auslage: Lege Geheimkammer S1A aus.
- Sonderregeln: Jedes Mal, wenn ein Held ein Monster in dieser Geheimkammer besiegt, darf er in diesem Zug 1 zusätzliche Aktion ausführen. Wenn ein Held in seinem Zug in dieser Geheimkammer ist, kann er eine [Stärke]-Probe ablegen. Wenn sie gelingt, darf er 1 Herausforderungsmarker in dieser Geheimkammer wählen und unbesehen abwerfen. Das erfordert keine Aktion.
- Belohnung: Ein beliebiger Held in der Geheimkammer kann diese Karte behalten. Solange du diese Karte hast, kannst du vor jedem eigenen Verteidigungswurf 1 [Erschöpfung] auf diese Karte legen, um 1 grauen Verteidigungswürfel mehr zu werfen. Wirf diese Karte am Ende des Abenteuers ab oder sobald auf der Karte so viele [Erschöpfung] liegen, wie dein [Stärke]-Wert angibt.

### Ein vergrabener Schatz
- Auslage: Führe diese Karte sofort aus.
- Sonderregeln: Wirf 1 grauen Verteidigungswürfel. Der Overlord kann 1 Overlordkarte aus der Hand abwerfen, um dir 1 [Herz] zuzufügen und dich den Würfel neu werfen zu lassen (höchstens ein Mal).
- Ergebnis (kein Belohnung-Banner): Ziehe so viele Suchkarten, wie du letztlich [Verteidigung] gewürfelt hast. Dann wird diese Geheimkammerkarte und der Geheimgangmarker abgeworfen.

### Kammer der Schlüssel
- Auslage: Lege Geheimkammer S2B aus.
- Sonderregeln: Jedes Mal, wenn einem Helden eine Attributsprobe eines Herausforderungsmarkers gelingt oder er ein Monster in dieser Geheimkammer besiegt, wird 1 Erschöpfungsmarker auf diese Karte gelegt.
- Belohnung: Die Helden behalten diese Karte. Ein Held kann 1 Erschöpfungsmarker von dieser Karte abwerfen, um eine Tür öffnen- oder Tür schließen-Aktion auszuführen. Dies gilt nicht als Aktion. Wenn keine Erschöpfungsmarker mehr auf dieser Karte liegen, wird sie abgeworfen.

### Ort des Friedens
- Auslage: Lege Geheimkammer S2B aus.
- Sonderregeln: Helden in dieser Geheimkammer müssen zu Beginn ihres jeweiligen Zuges eine [Geistesgegenwart]-Probe ablegen. Misslingt die Probe, wird der Held betäubt und geschwächt. Gelingt die Probe, darf er in diesem Zug 1 Herausforderungsmarker in dieser Geheimkammer aufdecken, ohne dafür eine Aktion zu verbrauchen.
- Belohnung: Ein beliebiger Held in der Geheimkammer kann diese Karte behalten. Wirf diese Karte in deinem Zug ab, um eine Ausruh-Aktion auszuführen. Das gilt nicht als Aktion.

### Trollgrube
- Auslage: Lege Geheimkammer S2A aus.
- Sonderregeln: Ein Held, der seinen Zug in dieser Geheimkammer beendet, erleidet 1 [Erschöpfung] und erkrankt. Ein Held, der seinen Zug in dieser Geheimkammer beginnt, erhält 1 zusätzlichen Bewegungspunkt.
- Belohnung: Ein beliebiger Held in der Geheimkammer kann diese Karte behalten. Du kannst diese Karte jederzeit abwerfen, um den Effekt einer gerade gespielten Overlordkarte abzuwehren. Diese Karte wird am Ende des Abenteuers abgeworfen.

### Überwucherte Schlucht
- Auslage: Lege Geheimkammer S2A aus.
- Sonderregeln: In dieser Geheimkammer kostet es einen zusätzlichen Bewegungspunkt, ein Feld zu betreten. Helden in dieser Geheimkammer können zu Beginn ihres jeweiligen Zuges eine [Stärke]-Probe ablegen. Gelingt die Probe, darf sich der Held in diesem Zug normal durch die Geheimkammer bewegen.
- Belohnung: Zieht sofort so viele Karten vom Marktkartenstapel des aktuellen Akts, wie Helden in der Geheimkammer sind. Wählt 1 davon und mischt die anderen zurück in den Stapel. Dann wird diese Geheimkammerkarte abgeworfen.

### Verfluchte Gruft
- Auslage: Führe diese Karte sofort aus.
- Sonderregeln: Du musst alle 4 Proben ablegen ([Geistesgegenwart], [Wissen], [Willenskraft] und [Stärke]). Der Overlord kann einmal 1 Overlordkarte aus der Hand abwerfen, um dich zu zwingen, eine Probe neu zu würfeln.
- Ergebnis (kein Belohnung-Banner): Für jede misslungene Probe erleidest du 2 [Herz]. Wenn du danach nicht besiegt bist, erhältst du 25 Goldstücke für jede gelungene Probe. Wirf dann diese Karte und den Geheimgangmarker ab.

### Vergiftete Quelle
- Auslage: Lege Geheimkammer S2B aus.
- Sonderregeln: Wenn ein Held in dieser Geheimkammer [Herz] erleidet, wird er zusätzlich vergiftet. Jedes Mal, wenn einem Helden eine [Geistesgegenwart]-Probe eines Herausforderungsmarkers gelingt, darf er entweder eine zusätzliche Aktion in diesem Zug ausführen oder sich die obersten 3 Karten des Overlorddecks ansehen und sie in beliebiger Reihenfolge zurücklegen.
- Belohnung: Ein beliebiger Held in der Geheimkammer kann diese Karte behalten. Du kannst diese Karte jederzeit abwerfen, um 2 rote Machtwürfel zu werfen. Jeder Held gewinnt die gewürfelten [Herz] zurück. Diese Karte wird am Ende des Abenteuers abgeworfen.

---

## 3. Befleckt-Karten — Nebel von Belihall

Quellblatt: `Karten/Beflecktkarten.jpg` (Raster 5×3, 12 Karten). Ein Held wird „befleckt",
wenn er in Belihall stirbt; er zieht eine zufällige Befleckt-Karte (dauerhafter Nachteil,
gibt aber +2 Erfahrung). Alle Karten tragen den gemeinsamen Zusatz: *„Du bist befleckt.
Solange du niedergestreckt bist, kannst du [Herz] nur durch unbefleckte Helden oder
Heldentaten zurückgewinnen."*

| Name | Wert | Regeltext (spezifischer Teil) |
|---|---|---|
| **Abscheulicher Schatten** | +2 | Jedes Mal wenn du eine Ausruhen-Aktion ausführst, wirst du verängstigt. |
| **Abscheulichkeit** | +2 | Zu Beginn jedes Overlord-Zuges wird jede zu dir benachbarte befreundete Figur verängstigt. |
| **Böses Blut** | +2 | Jedes Mal wenn du 1 oder mehr [Herz] zurückgewinnst, erleidest du 1 [Erschöpfung]. |
| **Die Hand des Todes** | +2 | Wenn ein Monster während deines Zuges besiegt wird, erschöpfe diese Karte. Wenn du diese Karte wieder auffrischst, erleidet jeder Held 1 [Herz]. |
| **Grauer Zerfall** | +2 | Senke deine [Willenskraft] und [Stärke] um 1 (nicht unter 1). |
| **Grosses Leid** | +2 | Jedes Mal wenn ein anderer Held besiegt wird, wirst du betäubt. |
| **Märtyrertum** | +2 | Du kannst einen Zustand nicht abwerfen, wenn ein anderer Held vom selben Zustand betroffen ist. |
| **Neue Befehle** | +2 | Senke deine [Wissen] und [Geistesgegenwart] um 1 (nicht unter 1). |
| **Normal** | +2 | Wenn ein anderer Held seine Heldentat in dieser Szene verwendet hat, kannst du deine Heldentat nicht mehr verwenden. |
| **Perfekter Frieden** | +2 | Senke deine [Stärke] und dein [Geistesgegenwart] um 1 (nicht unter 1). |
| **Todeswut** | +2 | Wenn ein Monster während deines Zuges besiegt wird, erschöpfe diese Karte. Zu Beginn deines Zuges mache entweder diese Karte spielbereit oder wähle 1 Helden innerhalb von 3 Feldern zu dir, der 2 [Herz] erleidet. |
| **Traumreise** | +2 | Senke deine [Willenskraft] und deine [Wissen] um 1 (nicht unter 1). |

---

## 4. Korrumpiert-Karten (Elite-Wechselbalg) — Nebel von Belihall

Quellblatt: `Karten/Korrumpiertenkarten.jpg` (Raster 4×3, 9 Karten). Wird gespielt, wenn
ein **Elite-Wechselbalg** auf den Spielplan gestellt wird; verleiht ihm eine Identität
(Lebenspunkt-/Würfel-Boni pro Held + oft eine benannte Sonderfähigkeit).

| Name | Boni / Fähigkeit |
|---|---|
| **Der Beamte** | +1 Lebenspunkt/Held, +1 grauer Verteidigungswürfel. Sein *Höhnisches Lachen* wirkt 5 Felder weit (statt 3). |
| **Der Bürger** | +2 Lebenspunkte/Held, +1 brauner Verteidigungswürfel. |
| **Der Held** | +2 Lebenspunkte/Held, +1 schwarzer Verteidigungswürfel. **Besitz ergreifen:** Wenn dieses Monster angreift, wähle einen Helden in seiner Sichtlinie. Wähle 1 beliebige Waffe des gewählten Helden. Dieses Monster führt den Angriff mit der Angriffsart, den Würfeln und Fähigkeiten dieser Waffe aus (statt mit seinen eigenen). |
| **Der Henker** | +2 Lebenspunkte/Held. **[Schub] Gnadenstoß:** Dieser Angriff hat +2 [Herz] pro Zustand, den das Ziel hat. |
| **Der Magier** | +1 Lebenspunkt/Held, erhält das [Fernkampf]-Symbol, +1 grüner Machtwürfel je Angriff. **[Schub] Explosion:** Dieser Angriff betrifft auch alle Figuren auf Nachbarfeldern des Ziels. |
| **Der Schuft** | +1 Lebenspunkt/Held, +1 brauner Verteidigungswürfel, +3 Bewegungspunkte je Aktivierung. **Aggressiv:** Dieses Monster kann in seinem Zug 2 Aktionen für Angriffe verwenden. |
| **Der Wachsoldat** | +2 Lebenspunkte/Held, +1 schwarzer Verteidigungswürfel. **Behäbig:** Dieses Monster kann höchstens 1 Bewegungsaktion pro Zug ausführen. |
| **Die Gelehrte** | Jeder normale Wechselbalg innerhalb von 5 Feldern wirft +1 grauen Verteidigungswürfel und hat bei Angriffen +1 [Herz]. **Verborgen:** Wenn dieses Monster Ziel eines Angriffs ist, gilt der Angriff als Fehlschlag, es sei denn, der Angreifer setzt 1 [Schub] ein. |
| **Die Sirene** | +2 Lebenspunkte/Held, erhält das [Fernkampf]-Symbol. **[Schub][Schub] Ruf:** Jedes Monster innerhalb von 3 Feldern gewinnt 2 [Herz] zurück, und jeder Held innerhalb von 3 Feldern erleidet 1 [Erschöpfung]. |

---

## 5. Vertraute (Diener-Statkarten)

Quellblatt: `Karten/Vertraute und Gefährtenfähigkeiten.jpg` (obere Reihen). Vertraute sind
klassengebundene Begleit-Diener; die Statkarte gibt Geschwindigkeit / Lebenskraft /
Verteidigung + Fähigkeit an. (Klassenzuordnung siehe `hero-classes.md`.)

| Vertrauter | Geschw. | Leben | Vert. | Angriff | Fähigkeit |
|---|---|---|---|---|---|
| **Geissel** | 1 | 4 | 1 grauer Würfel | blauer + roter Würfel | Jedes Mal wenn ein zur Geissel benachbarter Held 1 oder mehr [Erschöpfung] durch einen anderen Effekt als diesen erleidet, wähle einen anderen Helden, der 1 [Erschöpfung] erleidet. Nach dem Übergang zu Akt II fügt dieser Diener seinen Lebenspunkten 3 hinzu. |
| **Leuchtfeuer** | 5 | 6 | 1 grauer Würfel | (nutzt Waffe) | Dieser Vertraute wird wie eine Figur behandelt. Er kann während seiner Aktivierung 1 [Nahkampf]-Angriff ausführen, wobei er die Würfel und Fähigkeiten einer *Magischen* Waffe verwendet, mit der du ausgerüstet bist. |
| **Pico** | – | – | – | – | Wenn ein anderer Held in seinem Spielzug zu Pico benachbart ist, darf er einen Suchmarker auf Picos Feld durchsuchen (das erfordert keine Aktion). Falls kein Suchmarker auf Picos Feld ist, setze Pico auf deinen Heldenbogen. |
| **Rabenschwarm** | 4 | 4 | 1 grauer Würfel | blauer + roter Würfel | In Akt II wirft dieser Diener bei seinen Angriffen 1 zusätzlichen gelben Machtwürfel. [Fernkampf]: +1 [Herz]. |
| **Skye** | 5 | – | 1 grauer Würfel | – | Skye ignoriert Terraineffekte. Jedes Mal wenn ein Held einen [Fernkampf]-Angriff auf ein zu Skye benachbartes Monster ausführt, erhält dieser Angriff +2 Reichweite. Nach dem Würfelwurf kannst du Skye abwerfen. Falls du das tust, erhält dieser Angriff +1 [Herz]. |

> „–" = auf der Karte kein Wert (Pico/Skye sind besondere Vertraute ohne eigene Lebenskraft
> bzw. ohne Angriff). Werte visuell von der Karte gelesen.

---

## 6. NSC-Gefährten (Raythen & Serena)

Quellblatt: `Karten/Gefährten.jpg` (2 Statkarten) + `Karten/Vertraute und
Gefährtenfähigkeiten.jpg` (Fähigkeits-Upgrades). Gefährten sind steuerbare NSC-Verbündete
(aus den Leutnant-/Agenten-Boxen). Werte je Spielerzahl 2/3/4.

### Raythen (Fernkampf)
- Attribute (von der Karte gelesen): [Stärke] 3, [Wissen] 2, [Willenskraft] 1, [Geistesgegenwart] 5
- Fähigkeiten: **[Aktion] Untersuchen**; **[Fernkampf] +1 [Herz]**; **[Fernkampf] Gift**
- Werte 2p / 3p / 4p: Geschwindigkeit 5 / 5 / 5 · Lebenskraft 12 / 10 / 8 · Verteidigung grauer / brauner / brauner Würfel
- Angriffswürfel: blauer + grüner + grüner Würfel

### Serena (Nahkampf)
- Attribute (von der Karte gelesen): [Stärke] 1, [Wissen] 3, [Willenskraft] 5, [Geistesgegenwart] 2
- Fähigkeiten: **[Aktion] Balsam für die Seele**; **[Fernkampf] +1 [Herz]**; **[Fernkampf] Betäubung**
- Werte 2p / 3p / 4p: Geschwindigkeit 3 / 3 / 3 · Lebenskraft 10 / 8 / 8 · Verteidigung grauer / grauer / brauner Würfel
- Angriffswürfel: blauer + grüner + grüner Würfel

### Gefährten-Fähigkeiten (Upgrade-Karten)

Kaufbare/erlernbare Verbesserungen für den jeweiligen Gefährten.

**Raythen:**
- **Scharfe Augen:** Die Geschwindigkeit dieses Gefährten steigt um 1 Punkt. Er fügt seinem Verteidigungswurf 1 braunen Würfel hinzu. Dieser Gefährte kann Untersuchen jetzt auch einsetzen, wenn er innerhalb von 3 Feldern zu einem Suchmarker steht.
- **Schuss in den Rücken:** Die Lebenskraft dieses Gefährten steigt um 4 Punkte. [Aktion]: Dieser Gefährte führt einen Angriff durch. Dieser Angriff muss auf ein Monster zielen, das auf einem Nachbarfeld eines anderen Helden steht. Der Angriff hat +3 [Herz].
- **Schattenschleicher:** Wenn du diesen Gefährten aktivierst, kannst du diese Karte erschöpfen. Er darf dann in dieser Aktivierung nur Bewegungsaktionen oder die Aktion Untersuchen ausführen. Solange diese Karte erschöpft ist, können Monster keine Angriffe auf ihn zielen und der Overlord keine Karten auf ihn spielen, außer mindestens 3 Monster sind zu ihm benachbart.

**Serena:**
- **Aura der Macht:** Diese Gefährtin fügt ihrem Verteidigungswurf 1 grauen Würfel hinzu. Nach dem Einsatz von Balsam für die Seele werden jedem Monster innerhalb von 3 Feldern zu dieser Gefährtin 3 [Herz] zugefügt. Jedes Monster wirft seine eigenen Verteidigungswürfel. Dies gilt nicht als Angriff.
- **Heiliger Hammer:** [Aktion]: Diese Gefährtin führt einen [Fernkampf]-Angriff mit den unten angegebenen Würfeln durch. Dieser Angriff betrifft ein zweites Monster innerhalb von 3 Feldern zum Ziel. Die Gefährtin muss auch zum zweiten Monster Sichtlinie haben. (Würfel: blauer + roter + grüner Würfel)
- **Aura der Heilung:** Die Lebenskraft dieser Gefährtin steigt um 4 Punkte. Balsam für die Seele betrifft jetzt alle Helden innerhalb von 3 Feldern zu dieser Gefährtin.

---

## 7. Aktivierungskarten (Heldenzug-Übersicht) — Referenz

Quellblatt: `Karten/Aktivierungskarten.jpg` (4 Karten, je eine pro Heldenfarbe, **inhaltlich
identisch**). Reine Spielablauf-Referenzkarte (kein einzigartiger Karteneffekt):

```
HELDENZUG ÜBERSICHT
1. Beginn des Zuges:
   I.  Fähigkeiten zu Beginn des Zuges
   II. Karten auffrischen
2. Ausrüsten
3. 2 Aktionen ausführen:
   • Angreifen        • Suchen
   • Bewegen          • Spezial
   • Ausruhen         • Aufrappeln
   • Fähigkeit oder Fertigkeit mit [Aktion] einsetzen
   • Tür öffnen oder schließen
   • Einem Helden aufhelfen
4. Ende des Zuges:
   • Karte auf die Rückseite drehen
```

---

## 8. Agenten (Anführerkarten) — Bilder gesichert

`Karten/Anführerkarten.jpg` (Raster 7×6) = die **20 Agenten × Akt I/II = 40** Statkarten.
Spieldaten liegen bereits in `src/data/agents.ts` (Werte/Fähigkeiten aus any2cards,
kartenscan-validiert, CLAUDE.md v1.1.29). DE-Bilder seit 2026-07-17 committet unter
**`public/cards/de/agents/<agentId>-act<1|2>.webp`** (Benennung wie Leutnants).
Namens-Besonderheiten (Karte ↔ `agents.ts`-id): **Der Rattenkönig** = `averminous`,
**Sinistrael** = `agarganmirklace`. Die *autoritativen* deutschen Fähigkeitstexte stehen
auf den Karten-Rückseiten (`Anführerkarten R.jpg`) → optionaler Folgeschritt.

## 9. Plotdecks (Handlungskarten) — ✅ kartengenau korrigiert + Bilder gesichert

`Karten/Handlungskarten.jpg` (Raster 10×6 = 60 Karten) enthält **6 der 20 Plotdecks** —
**nicht** „Grundspiel" (frühere Fehlannahme), sondern gemischt über mehrere Erweiterungen.

**Erledigt (2026-07-17, nach Regel „Kartentext = priorisierte Wahrheit"):** Alle 60 Karten
1:1 vom deutschen Original-Kartenbild transkribiert → `plotDecks.ts` korrigiert (5 Deck-Namen,
44 Karten-`nameDe`, 60 `rulesDe` an die Karte angeglichen). DE-Bilder committet unter
`public/cards/de/plotdecks/<cardId>.webp` (60 webp); `plotCardDeUrl` + PlotDecksPage zeigen sie
mit EN-any2cards-Fallback. Die übrigen 14 Plotdecks haben **kein** deutsches Kartenbild im
Release → dort bleibt die Community-`nameDe` (zulässig, s. Regel).

Korrigierte Deck-Namen + Beispiel-Kartennamen (Karte → alt):

- **Deck-Identität + offizieller vs. Community-Name** (Kartentitel → `plotDecks.ts`):

  | Kartentitel (offiziell) | plotDecks.ts `nameDe` | id | Erweiterung |
  |---|---|---|---|
  | Die Erste Legion | Erste Legion | `first-legion` | Bilehall |
  | Dunkle Illusionen | Dunkle Illusionen | `dark-illusions` | Labyrinth |
  | Saat der Zwietracht | **Saat des Verrats** | `seeds-of-betrayal` | Grundspiel |
  | Gespaltene Loyalität | **Hybride Loyalität** | `hybrid-loyalty` | Grundspiel |
  | Grassierende Seuche | **Wütende Infektion** | `raging-infection` | Trollsümpfe |
  | Legionen der Unterstadt | **Ungesehene Legionen** | `unseen-legions` | Nerekhall |

  → mehrere `nameDe` sind Community-Übersetzungen, die vom **offiziellen Kartentitel
  abweichen** (fett) — Korrektur-Kandidaten für die autoritative Transkription (analog
  Overlord v1.3.7 / Hauptmänner v1.3.8).
- **„X/12"-Nummerierung geklärt (harmlos):** Die Karten tragen „1/12"…, das Deck hat aber
  bestätigt **10** Karten (Scan-Reihe = 10, `plotDecks.ts` = 10, alle 60 IDs matchen
  1:1 ohne Lücke/Duplikat). „/12" ist eine Sammler-/Set-Nummer, keine Deckgröße → keine
  fehlenden Karten.
- **Doppelter Titel (kartengetreu belegt):** „Ausgeklügelter Plan" erscheint auf ZWEI Karten
  (`dark-illusions-intricateschemes` und `seeds-of-betrayal-meticulousplanning`) — beide
  Kartenbilder tragen diesen Titel; unterschiedliche IDs/Regeltexte, daher kein Datenkonflikt.

Zuordnung Karte→ID via 6 Subagenten (englischer Name als Anker, deutscher Titel/Regeltext
verbatim von der Karte). Validierung: alle 60 `deckId-xws`-IDs existieren in `plotDecks.ts`,
je Deck genau 10, keine Duplikate.

---

## 10. Marker (Spielmaterial-Token) — gesichert

Quelle: `Marker/` im Release (62 Dateien). Als transparente/optimierte webp gesichert unter
`public/cards/de/marker/<slug>.webp` (Slug = kebab-case, Umlaute→ae/oe/ue/ss; ≤34 KB, Alpha
erhalten, 2-seitige Token zeigen beide Seiten gestapelt). **Reine Bild-Sicherung** — kein
Kartentext; die App nutzt eigene `GameSymbols`-SVGs + any2cards-Overlay-Token, daher **kein
Wiring**. Kategorien:

- **Ziel-/Suchmarker:** `aufgabenmarker-{blau,gruen,rot,weiss}`, `suchmarker`, `besonderer-suchmarker`
- **Overlord/Partei:** `bedrohungsmarker`, `schicksalsmarker`, `einflussmarker-{1,2,3,r}`
- **Werte:** `herz`, `erschoepfung`
- **Helden:** `heldenmarker-{gelb,grau,lila,orange}`
- **Herausforderungsmarker (9):** `-{feuerteufel,geistesgegenwart,goblinschuetze,harpye,hoehlenspinne,staerke,willenskraft,wissen,zombie}`
- **Klassen-Marker (9):** `klasse-{apothecarius-elixier,barde-harmonie,barde-melodie,beschwoerer-trugbild,champion-ruhm,fallensteller-fallen,kopfgeldjaeger-anversiert,prophet-erleuchtung,schwarzmagier-geisel}marker`
- **Overlord-Diener:** `overlord-dienermarker-{geissel,rabenschwarm}`, `overlord-verseucher-infektionsmarker`
- **Vertrautenmarker (7):** `-{belebter-stein,leuchtfeuer,pico,reanimierter,schattenseele,skye,wolf}`
- **Zustandsmarker (10):** `zustand-{betaeubt,blutend,brennend,erkrankt,gelaehmt,geschwaecht,todgeweiht,verflucht,vergiftet,veraengstigt}`
- **Sonstige:** `geheimtuer`, `zerfallenes-gelaende`, `sonnenstein-marker`, `inaktivmarker-fuer-monster`, `personenmarker-{frau,mann}`

## 11. Symbole — gesichert

Quelle: `Symbole/` im Release (16 Dateien) → `public/cards/de/symbole/<slug>.webp` (≤13 KB).
Ebenfalls reine Sicherung (App hat eigene SVG-Nachbauten):

- **Akt:** `akt-1`, `akt-2`
- **Archetyp:** `archetyp-{heiler,krieger,kundschafter,magier}`
- **Gelände-Merkmal (10):** `merkmal-{dunkel,gebaeude,gebirge,heiss,hoehle,kalt,verflucht,wasser,wildnis,zivilisiert}`

## Quellen & Provenienz

Alle Transkriptionen aus den deutschen Original-Kartenbildern des `scans-transfer`-Release
(`Descent.Scans.zip`, sha256 in `scan-sources.md`). Zuschnitt per gleichmäßigem Raster
(Zellmaße in `scan-sources.md` → Import-Status-Tabelle). Symbole ausgeschrieben, Flavor-Text
IP-bedingt ausgelassen. Such-/Befleckt-/Korrumpiert-/Geheimkammer-Karten via Transkriptions-
Subagenten (Kartenbild = Quelle); Vertraute/Gefährten/Aktivierung direkt vom Kartenbild gelesen.
