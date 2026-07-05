# Quest Vault Reborn – CLAUDE.md

Dieses Dokument ist die **primäre Gedächtnisstütze** für jede Session.
**Immer zuerst vollständig lesen, bevor mit der Arbeit begonnen wird.**

---

## Projekt-Übersicht

**Ziel:** Neuaufbau des eingestellten Online-Tools "Quest Vault" für das Brettspiel
*Descent – Die Reise ins Dunkel 2. Edition* (Descent: Journeys in the Dark 2nd Edition).

**Original-URL (offline):** www.DescentQuestVault.com  
**Ziel-Produkt:** Vollständige Webapp, browserbasiert startbar, kein lokaler Server notwendig.  
**Aktuell live auf:** https://zedyo.github.io/quest-vault-reborn/ (nach Deploy-Pipeline)

---

## Aktuelle Version: 1.4.0 (2026-07-05)

### Versionierungsregeln

| Änderungstyp | Version |
|---|---|
| Bugfix, kleine UI-Anpassung | Patch `1.0.x` |
| Neues Feature, Datenerweiterung | Minor `1.x.0` |
| Strukturelle Neuausrichtung | Major `x.0.0` – **User-Bestätigung erforderlich** |

---

## Aktueller Projektstatus

| Phase/Version | Status | Beschreibung |
|---|---|---|
| v1.0.0 | ✅ Abgeschlossen | Map-Builder, Quest-Editor, Helden/Monster, Save/Load, Export, Deploy |
| v1.0.3 | ✅ Abgeschlossen | Vollständiger Daten-Validierungspass: 70+ Korrekturen an Monstern+Helden (Kartenscan-validiert) |
| v1.1.0 | 🔄 In Arbeit (inkrementell ausgeliefert) | Datenvollständigkeit. Ausgeliefert: Monster-Gruppengrößen, Versionsanzeige+Release-Notes (1.1.0), Grundspiel-Helden-Klassen (1.1.1), Alle 16 Erweiterungs-Klassen (1.1.2), 122 Shop-Karten + Relikte (1.1.3), DE-Übersetzungen + doppelseitige Relikte (27 Helden + 27 Overlord) (1.1.4), Kartensymbole ❤⚡💧 (1.1.5), Safari-Fix (1.1.6), Würfel als 3D-Cubes + Bewegungs-/Verteidigungssymbole aus PSD-Vorlage (1.1.7), Bewegungs-/Verteidigungssymbol in Helden-/Monster-Statzeilen verbaut (1.1.8), Kartensymbole in Helden-/Klassentexten (1.1.9), Kartensymbole in Monster-Fähigkeiten + Quest-Editor-Texten (1.1.10), Aktions-Symbol ↻ in allen Kartentexten (1.1.11), Symbol-Einfügeleiste + Hinweis im Quest-Editor (1.1.12), Refactoring: geteilte UI-Bausteine (StatIcons, ModalOverlay, Filters) + zentrales Asset-URL-Modul (1.1.13), Bestätigungsdialog vor dem Löschen von Quests/Begegnungen (1.1.14), Dependency-Hygiene (react-router-dom 6.30.4 + localforage entfernt), Overlord-Karten Grundspiel: Basis-Deck + Magus/Saboteur/Kriegsherr + Universal, neue /overlord-Seite (1.1.15), Overlord-Erweiterungsklassen (1.1.16), Overlord-Belohnungskarten: 18 Karten aus 13 Erweiterungen → kompletter Overlord-Kartensatz 105 Karten (1.1.17), Leutnants Grundspiel: 6 Leutnants + neue /leutnants-Seite (1.1.18), **alle Erweiterungs-Leutnants → 21 Leutnants / 39 Formen, EN verifiziert (1.1.19), Agenten Grundspiel: 6 aufgewertete Leutnants + Plotdeck-Verweis, neue /agenten-Seite (1.1.20), Erweiterungs-Agenten → 16 Agenten (4 mit vertauschten Quelldaten ausgeschlossen) (1.1.21), Plotdeck-Karten Grundspiel Batch 1: 3 Decks / 30 Karten, neue /plotdecks-Seite (1.1.22), Plotdeck-Karten Grundspiel komplett: 6 Decks / 60 Karten (1.1.23), Erweiterungs-Plotdecks Batch 1 → 9 Decks/90 Karten (1.1.24), **Plotdecks Labyrinth komplett: +3 Decks (Verworrenes Netz/Gaunerei/Stiller Beschützer) → 12 Decks / 120 Karten, Karten-ID auf `deckId-xws` umgestellt (1.1.25), **Plotdecks Rabenfels+Bilehall: +3 Decks (Verworrene Seele/Lebensessenz/Ewige Qual) → 15 Decks / 150 Karten (1.1.26), **Plotdecks KOMPLETT: +5 Decks (Erste Legion/Bilehall + 4 Nerekhall) → 20 Decks / 200 Karten (1.1.27), **Leutnant↔Plotdeck-Verknüpfung: bidirektionale Deep-Links + Scroll/Highlight (1.1.28), **Agenten KOMPLETT: 4 vertauschte Agenten (Ardus/Kyndrithul/Zarihell/Skarn) kartenscan-validiert → 20 Agenten / 40 Formen (1.1.29), **Kampagnen-Überblick (9, faktisch) + 16 Advanced Quests, neue /kampagnen-Seite (1.1.30), **Reisekarten: 41 Reise-/Stadtereignis-Karten (faktische Metadaten + Bilder, kein Ereignistext), neue /reisekarten-Seite (1.1.31), **Overlays im Kartenbauer: 9 platzierbare Overlay-Marker (Gelände/Tür/Objekt/Marker) im MapBuilder + Quest-Editor (1.1.32)**. v1.1-Datenbasis damit abgeschlossen |
| v1.2.0–1.2.4 | ✅ Abgeschlossen | Design-Feinschliff. Design-Fundament – warme, mystische Dungeon-Palette (Anthrazit/Braun + Gold/Pergament) statt Tech-Blau, Fonts Cinzel (Display) + Inter (Fließtext, offline self-hosted via @fontsource), Tastatur-Fokusringe (1.2.0); Navigation aufgeräumt – Werkzeuge oben, 10 Referenzseiten unter „📚 Daten"-Dropdown, mobiles Hamburger-Menü (1.2.1); Startseite-Hub aufgefrischt – Werkzeuge + 10 Übersichts-Kacheln, dynamische Zählwerte (1.2.2); durchgängiger Feinschliff (Scrollleisten, ::selection-Gold, prefers-reduced-motion) + iPad-Layout verifiziert (1.2.3); umschaltbare Themes (Verlies/Arkanblau/Schiefer) via CSS-Variablen + 🎨-Umschalter (1.2.4). Offen für v1.2: Tests/Security-Audit-Backlog |
| v1.3.0–1.3.21 | 🔄 In Arbeit | **Deutsche Originalkarten** aus User-Scans. Ausgeliefert: Helden – 60 deutsche Kartenbilder (Vorder+Rück) + 16 Namens-Korrekturen + Heldenfähigkeit/Heldentat 1:1 von den Karten (1.3.0); Monster – alle 56 Gruppen: deutsche Kartenbilder (Akt 1+2) + Akt-1/2-Umschalter + 23 Namens-Korrekturen + sämtliche Fähigkeits-/Energie-/Aktionstexte kartengenau, Kartenbegriffe vereinheitlicht, Wissensbasis `docs/game-data/de-karten/monster.md` (1.3.1); Klassen – alle 24 Standard-Klassen kartengenau (Fertigkeitsnamen+Regeltexte, offizielle DE-Klassennamen wie Apothecarius/Seneschall/Fallensteller/Schwarzmagier/Nekromant/Waldläufer/Geistsprecher), NEU Startausrüstung + Begleiter je Klasse (Datenmodell `ClassStartingItem` + `startingEquipment`), + 12 NEUE Hybrid-Klassen (8 Unsterbliche Legenden + 4 Rostende Ketten, `kind:'hybrid'` + `hybridArchetype`); ClassesPage zeigt Hybrid-Badge/Partner + Startausrüstung; Wissensbasis `docs/game-data/de-karten/klassen.md` (1.3.2); **Items/Markt + Relikte – alle 122 Marktkarten (65 Akt 1 + 57 Akt 2) + 54 Relikt-Seiten (27 Helden + 27 Overlord) Namen+Regeltexte 1:1 von den deutschen Original-Karten (Marktkarten Akt 1/2 + doppelseitige Relikte); ~70 Namens-Korrekturen (z. B. Kettenhemd→Kettenrüstung, Flammenopfer→Feuersturm, Wächteraxt→Axt des Wächters, Handschuhe der Macht→Armschienen der Macht, Ynfernael-Rune→Höllenrune); Wissensbasis `docs/game-data/de-karten/items.md` (1.3.3); **Gerüchte – 41 Gerücht-Karten (25 Akt I + 16 Akt II) als deutsche Original-Kartenbilder + faktische Metadaten (Name DE vom Kartentitel, Akt-Badge, Reise-Symbole von den Karten gelesen); KEIN Kartentext (FFG-IP, wie Reise-/Kampagnenkarten); neue `Rumor`-Typ + `src/data/rumors.ts` + `RumorsPage`/`/geruechte` + Bilder `public/cards/de/geruechte/<id>.webp`; ersetzt den 1.2.6-Versuch (war wegen Scan-Qualität revertet); „Sands of the Past"-Karten ausgeschlossen (nicht in expansions.ts); Wissensbasis `docs/game-data/de-karten/rumors.md` (1.3.4); **Markt/Relikt-BILDER deutsch + Gerücht-TEXTE + Item-Filter (1.3.5): alle 122 Marktkarten + 54 Relikt-Seiten als deutsche Original-Kartenbilder (`public/cards/de/items|relics/<id>.webp`, per Kartentitel zu IDs gematcht – Umlaut-Kollation + 2 Duplikat-Scans Eisenschild/Lederrüstung beachtet; `itemCardDeUrl`/`relicCardDeUrl`, ItemsPage zeigt DE-Bild mit EN-Fallback). Gerücht-Karten: `textDe` (Vorderseite, alle 41) + doppelseitige Akt-II-Karten mit `back`-Belohnungen (Overlord/Helden) + Rückseiten-Bild `<id>-back.webp` (16); RumorsPage-Detail zeigt Text + Rückseite aufgeschlüsselt. Additiver Ausrüstungs-/Angriffsart-Filter (1Hand/2Hände/Rüstung/Zubehör + Nahkampf/Fernkampf, ODER-in-Gruppe/UND-zwischen-Gruppen) auf ItemsPage.** **Zuschnitt-Fix (1.3.6): Markt-/Relikt-/Gerücht-Bilder waren mit 0.93–0.965 der Zell-Pitch zu eng geschnitten (Rahmen/Titel-Oberkante beschnitten); die Karten füllen die Zelle aber zu ~99 % (Pitch-Messung: Karte ~472/475 × ~732/740). Re-Cut aller 233 Bilder auf VOLLE Pitch (Zelle [c·P,(c+1)·P]×[r·R,(r+1)·R], kein Inset) → vollständige Karte inkl. Rahmen. RumorsPage-Grid von `aspect-[3/4] object-cover` (schnitt unten ab) auf `aspect-[9/14] object-contain` (Kartenseitenverhältnis 0.64) umgestellt. Re-Cut-Skript `recut_all.py` nutzt die bestehenden id→Zelle-Maps weiter.** **Overlord KOMPLETT (1.3.7): alle 105 Overlord-Karten (Basis-Deck, 9 Klassen, Universal, 18 Belohnungen) als deutsche Original-Kartenbilder (`public/cards/de/overlord/<id>.webp`) + offizielle Kartennamen + kartengenaue Regeltexte. Wichtig: die Community-`nameDe` wichen von den Karten ab (z. B. Unheiliges Ritual→Teuflisches Ritual, Diabolische Macht→Teuflische Macht, Wiederauferstehung→Wiederkehr) — daher per Deck über die englischen Namen/Regeln gemappt (13 Sheets, dt. Klassennamen Hexer/Schurke/Heermeister/Gebieter/Vergelter/Verseucher/Verzauberer/Schattenmagier/Seelenbinder ↔ magus/saboteur/warlord/unkindness/punisher/infector/enchanter/shadowmancer/soulbinder; Arsenal=Basis, Arsenal II=Basis II, Alle Klassen=Universal, Belohnung=Rewards). Mapping+Transkription via 13 Subagenten (engl. Karte als Anker), Bilder full-pitch, `nameDe`/`rulesDe` in overlordClasses.ts gepatcht; `overlordCardDeUrl`, OverlordPage zeigt DE-Bild mit EN-Fallback. Datenintegritäts-Test (105 Bilder).** **Hauptmänner/Leutnants KOMPLETT (1.3.8): alle 39 Leutnant-Formen (21 Leutnants, Akt I+II) als deutsche Original-Hauptmannkarten (`public/cards/de/lieutenants/<id>-act<1|2>.webp`, Vorderseiten = Figur+Werte) + offizielle Namen + kartengenaue Fähigkeits-Labels/Regeltexte. Namen weichen ab: Verminous→Der Rattenkönig, Mirklace/Gargan Mirklace→Sinistrael (dt. Ettin-Name). Fronts zeigen nur Fähigkeits-TITEL, die vollen Regeltexte stehen auf den RÜCKSEITEN (Akt 1/2 R) → von dort transkribiert. Sheets Akt1 5×4 (17 Karten), Akt2 6×4 (20); Rückseiten in GLEICHER Reihenfolge wie Fronts (nicht gespiegelt). mirklace+garganmirklace sind Duplikate (identische Werte/Fähigkeiten, für Plotdeck-Link beibehalten) → beide bekommen die Sinistrael-Karte. lieutenants.ts ist reines JSON → per json.loads geladen, nameDe/labelDe/rulesDe gepatcht (Mapping über labelEn-Anker), neu serialisiert; `lieutenantCardDeUrl(id,act)`, LieutenantsPage-Lightbox zeigt DE-Bild mit EN-Fallback. 8 Subagenten (4 Fronts für Namen/Labels, 4 Rückseiten für Regeltexte). Datenintegritäts-Test (39 Bilder).** **Reisekarten mit Ereignistext (1.3.9): alle 41 Reise-/Stadtereignis-Karten als deutsche Original-Kartenbilder (public/cards/de/reisekarten/<id>.webp, travelCardDeUrl) + ausgeschriebener deutscher Ereignistext (eventsDe: {terrainEn,textDe}[] je Gelände-Abschnitt, inkl. Nichts-passiert-Abschnitt). Reise-Sheet 7x5 (660x1030, 31 Karten), Stadt-Sheet 4x3 (475x740, 10 Karten - NICHT 5x2, sonst rechts beschnitten). Mapping per DECK-Reihenfolge (Sheet = any2cards-Deckordnung; base-1 + alle Stadtkarten terrain-verifiziert). TravelCard-Typ um eventsDe erweitert, travelCards.ts (JSON) neu serialisiert; TravelCardsPage-Lightbox zeigt DE-Bild + Ereignistext je Gelände. 4 Subagenten transkribiert (terrainEn = tatsächlich gelesenes Karten-Gelände; weicht bei einigen Karten von any2cards-eventTerrains ab -> eventsDe ist die kartengenaue Quelle). Datenintegritäts-Test (41 Bilder + eventsDe).** **Zustände NEU (1.3.10): 10 Zustandskarten (Betäubt/Blutend/Brennend/Erkrankt/Gelähmt/Geschwächt/Todgeweiht/Verängstigt/Verflucht/Vergiftet) als deutsche Original-Karten + Effekttext 1:1. Neue `Condition`-Typ + `src/data/conditions.ts` + `ConditionsPage`/`/zustaende` + Nav/HomePage-Kachel + `conditionCardDeUrl`; Bilder `public/cards/de/zustand/<id>.webp` (Sheet 4×3, 10 Karten). Erweiterungszuordnung aus any2cards-Ordnerstruktur via GitHub-API (base 4: stunned/immobilized/diseased/poisoned; bleeding=Nerekhall, burning=Lindwurm, weakened=Trollsümpfe, doomed=Rabenfels, cursed=Labyrinth, terrified=Bilehall). Transkription via WORKFLOW (transkribieren→adversarial verifizieren); der Verify-Pass fand 5 echte Fehler (terrified fehlte „keine"-Negation, poisoned Stärke- statt Schub-Probe, cursed Wissen-Probe, doomed Schub- statt Aktions-Symbol, weakened „-1 Schild" fehlte). Datenintegritäts-Test (10 Bilder).** **Marker/Overlay-Token NEU (1.3.11): die Overlay-Marker im Kartenbauer/Quest-Editor sind jetzt 16 ECHTE Descent-Token als transparente Original-Bilder (`public/cards/de/overlays/<id>.png`, Quelle any2cards `images/tokens/d2e/…`): Tür/Verschlossene Tür/Fallgitter (Durchgänge), Wasser/Heiß/Eis/Überwucherung/Brüchiges Gelände/Alte Mauer (Gelände-Trait- + Erweiterungs-Geländetoken), Zielmarker rot/blau/grün/weiß + Suchmarker/Besonderer Suchmarker (Marker), Dorfbewohner (Figur). **Wichtige Umstellung:** der alte 1.1.32-Kernsatz hatte abstrakte Platzhalter OHNE echtes Token-Bild (`lava`/`pit`/`sludge`/`rubble`/`chest`) — solches Gelände ist in Descent auf die PLÄTTCHEN gedruckt, es gibt keine separate Token-Komponente → keine belegte transparente Vorlage. Katalog daher auf die echten Token umgestellt; stabile IDs (`door`/`water`/`search`/`objective`) bleiben, Alt-Quests mit entfallenen IDs degradieren grafisch sanft (Render-Fallback). Pipeline: PNG → Alpha-Bbox-Crop → 128 px → `quantize(128, FASTOCTREE)` alpha-erhaltend (~7 KB/Token, 16 ~117 KB). `overlayTokenUrl(id)` in assetUrls; `OverlayType.category` um `'figure'` erweitert; MapBuilder hat einen visuellen Token-Picker (Popover, nach Kategorie gruppiert, Vorschaubilder); `OverlayToken` rendert das Bild (Emoji nur als Fallback). Im echten App-Build per Playwright-Screenshot verifiziert (Picker + platzierte Token). Datenintegritäts-Test (16 Token + Bildpräsenz). Wissensbasis `docs/game-data/overlays.md`.** **Regeln & Referenz NEU (1.3.12): neue Seite `/regeln` (`RulesReferencePage` + `src/data/rulesReference.ts`) als Schnellnachschlag – Spielsymbole (Herz/Schub/Erschöpfung/Aktion/Bewegung/Verteidigung über die vorhandenen `GameSymbols`-Komponenten), Angriffs-/Verteidigungswürfel (`DiceSymbol`), Spielablauf-Kurzreferenz + Begriffs-Glossar (mit Deep-Links auf /zustaende, /monster, /overlord, /karte). **WICHTIG/IP:** KEIN abgetippter Regelheft-/Questbuch-Text (FFG-Urheberrecht) — ausschließlich EIGENE, zusammenfassende Kurzbeschreibungen allgemein bekannter Grundmechaniken; Disclaimer am Seitenende. Nav-/HomePage-Kachel 📖. Datenintegritäts-Test (Symbol-/Würfel-Schlüssel, eindeutige IDs, Pflichttexte, gültige interne Links). Wissensbasis `docs/game-data/rules-reference.md`. (Kampagnen bleiben der faktische Überblick aus 1.1.30 — Szenario-Inhalte = FFG-IP, nicht reproduziert.)** Raster-Schneider (Autokorrelations-Pitch + Empty-Detection, auch für Marktkarten/Relikte/Gerüchte) etabliert. Offen: Overlord, Hauptmann, Reise, Zustand + Marker/Symbole + Regeln/Kampagnen. (Klassen-Bilder bewusst NICHT eingebunden – ClassesPage ist textbasiert; Storm's Fury/Nature's Fury des Elementarmagiers fehlten im Scan → unverändert). **Kartenbauer 1:1-Treue (1.3.13):** Ziel = Kampagnenbuch-Karten exakt nachbauen. (a) Türen/verschl. Türen/Fallgitter sind jetzt **farbige Absperrungen (rot/gelb/grau) auf der Feldkante** (~2×0,5, `render:'bar'` + `PlacedOverlay.rotation`), kein Tür-Symbol mehr — wie auf den Quest-Diagrammen (Tür liegt auf der Kante zwischen 4 Feldern). (b) **Alle Overlays drehbar** (↻ je Token, Import-Sanitizer akzeptiert `rotation`, abwärtskompatibel — KEIN Persist-Bump, da optionales Feld). (c) **Redundanz entfernt:** `water`/`hot`/`ice` raus (Gelände ist auf die Plättchen GEDRUCKT, kein loses Token; alte Bilder kamen aus any2cards `traits/`); konsequent zur 1.3.11-Entfernung von lava/pit/sludge/rubble. (d) **Neu:** `hero-start` (Helden-Start/Eingang, eigener generierter Marker) + NSC-Figuren `villager-female`/`ally`/`raythen`/`serena`/`scourge`/`raven-flock` (echte any2cards-Token). → **20 platzierbare Elemente** (Test 16→20). (e) **Standalone-Kartenbauer `/karte` persistiert** jetzt (eigener localStorage-Key `qvr-builder-draft`, `src/utils/builderDraft.ts`). Picker/Toolbar zeigen für Balken-Overlays einen Farbbalken-Swatch (`OverlayIcon`). Visuell per Playwright verifiziert. Wissensbasis `docs/game-data/overlays.md`. Offen für „echtes 1:1": Recherche bestätigt Modell stimmt; künftig ggf. echte Kanten-Snap-Koordinaten statt Feld+Rotation, Monstergruppen-Farbmarker.) **Nummerierte Marker (1.3.14):** `PlacedOverlay.label` (optional, 1–3 Zeichen) bildet die nummerierten Ziel-/Suchmarker der Quest-Diagramme ab (Badge mittig, „#"-Knopf am Token, Import-/Builder-Sanitizer akzeptieren label). **Per 1:1-Nachbau validiert** an einer konkreten Karte aus „Schatten von Nerekhall" (sn-Plättchen + Basis, gelbe/rote Tür-Absperrungen, grüne nummerierte Zielmarker 3/2/2/4/★, Suchmarker, Eingang; Playwright-Render mit echten Tile-Bildern via Route-Interception, mit der Buchseite verglichen). Einziger gefundener Lücken-Fix: nummerierte Marker (jetzt erledigt); alle benötigten Plättchen/Türfarben waren bereits vorhanden. **Verbindungsstücke + Geländeleisten (1.3.15):** (a) Die **unnummerierten Verbindungsstücke** (Korridor/Extension, Endkappe, Eingang/Ausgang, Übergang innen↔außen) fehlten KOMPLETT im Katalog (weil ohne Tile-Nummer) — jetzt als neue Tile-Art `kind:'connector'` ergänzt (Grundspiel `extension/end-cap/entrance/exit/transition` indoor+outdoor; Nerekhall `sn-end-cap/-extension-a/b/-transition-a/b` + sn-entrance/exit markiert; Bilehall mb-entrance markiert). Eigene **„🧩 Verbindungsstücke"-Gruppe ganz oben** in der TileSidebar; **mehrfach legbar** (Auswahl bleibt nach dem Setzen aktiv, keine a/b-Partnerwarnung — `handlePlaceTile`/`handleSelectPalette` prüfen `kind`). Bilder kommen zur Laufzeit aus any2cards (keine lokalen Assets). (b) **Überwucherung + Alte Mauer** rendern jetzt als Balken (`render:'bar'`, category bleibt `terrain`) wie Tür-Absperrungen; Test erlaubt Balken in passage UND terrain. Per Playwright verifiziert (Connector-Gruppe + platzierte Stücke + Geländeleisten). Wissensbasis `docs/game-data/map-tiles.md` (Verbindungsstücke) + `overlays.md`. **Connector-Render-Fix (1.3.16):** Die Verbindungsstücke wurden anfangs mit der Inset-Streckung der nummerierten Plättchen gerendert und dadurch VERZERRT + schlecht angeschlossen (User-Befund). Ursache: ihr PNG-Canvas ist auf der Verbindungsachse GRÖSSER als cols×75 (Tab AUSSERHALB der Spielfläche), während nummerierte Tiles Canvas=cols×75 (Tab innen) haben. Fix in `MapGrid.tsx`/`DraggableTile`: für `kind:'connector'` je Achse aus `naturalWidth/Height` (onLoad) den Überstand `ov=naturalPx−cols·75` bestimmen; bei `ov>1` maßstäblich 1:1 rendern (kein Verzerren) + Überstand gemäß Connector-Flags auf die Kante(n) versetzen; Achsen ohne Überstand (Eingang/Übergang 2×2) behalten die Inset-Streckung. **Nummerierte Plättchen unberührt** (`CONNECTOR_INSET_FRAC` + maxWidth-Fix unangetastet). Verifiziert: 1×2 horizontal, 2×1 vertikal, Rotation, 2×2-Eingang/Übergang – alle unverzerrt + eingehakt (Details in `map-tiles.md`). **CRRG Errata/FAQ-Integration (1.3.17):** Der frei verfügbare **Community Rules Reference Guide V1.15** (deutsche Ausgabe, aus dem „Descent Scans"-Release-Zip: `Regelbücher PDF/Community Hausregeln V 1.15.pdf`) wurde eingebunden — offizielle FFG-Errata + FAQ + ~400 Community-FAQs, ADDITIV (erweitert die Karten als optionale Variante, ersetzt NIE den Original-Inhalt; immer mit Quellenangabe). **Teil 1** (S. 3–46, 164 alphabetische Regelklärungen) → neue durchsuchbare Seite `/klarstellungen` (`RulesClarificationsPage`, Tab „Regelklärungen"). **Teil 2** (S. 47–84, 250 komponentenbezogene Errata/FAQ) → aufklappbare, **default-eingeklappte** `ErrataBox` direkt an Held (Bsp. Grossmagier Cwellin)/Klasse/Item/Relikt/Overlord/Plotdeck/Monster/Gerücht/Kampagne + Tab „Errata & FAQ" auf `/klarstellungen`. Datenmodell `ErrataEntry`/`RuleClarification`/`ErrataGroup`/`ErrataNote`/`ErrataScope` in game.ts; Daten `src/data/errata.ts` + `ruleClarifications.ts` (generiert); Laufzeit-Verknüpfung Name→Karte in `errataLinks.ts` (`getErrata(scope,id)`; Normalisierung ß→ss + „and"→„und" + Edit-1-Fuzzy für Held/Monster; nicht auflösbare Einträge bleiben in der durchsuchbaren Übersicht → keine Info geht verloren). **Extraktion:** PyMuPDF-Textlayer (font-basierte Rollen: Windlass=Überschrift, GaramondPremrPro=Text, `-Bd`≥11=Fertigkeitsname) + Symbol-Mapping aus Font `GaraScenarioDescent` (∏→Erschöpfung, ≥→Herz, ±/į→Schub, İ→Verteidigung, Į→Aktion, Ĳ→Bewegung, Ĵ/ĵ/ķ+π/ĳ+μ→Stärke/Wissen/Willenskraft/Gespür). Teil 2 nutzt breite Banner + 2-Spalten-Fertigkeitslayout (z. B. S. 60 Seneschall), das reine Textheuristiken falsch zuordnen → **jede Teil-2-Seite gegen das gerenderte Seitenbild adversarial verifiziert** (Workflow, 1 Agent/Seite: Wortlaut aus Textlayer maßgeblich, Struktur/Zuordnung aus dem Bild; Wortlaut zu >99 % im PDF-Textlayer belegt). Nav-/HomePage-Kachel 📋. Datenintegritäts-Tests (IDs/Scopes/Seiten/Symbole/Ziel-IDs; Cwellin-Verknüpfung). Wissensbasis `docs/game-data/crrg-errata.md`. **CRRG-Reichweite erweitert (1.3.18):** Monsterfähigkeiten-Errata (2.7, Schlagwörter) werden nun über den Fähigkeitsnamen (Text vor „:" in surges/abilities/actions) jedem Monster zugeordnet, das die Fähigkeit besitzt (`getMonsterAbilityErrata`) und erscheinen aufklappbar an der Monsterkarte (Grid + Lightbox) + als durchsuchbares Sammel-Panel oben auf /monster. Abenteuer-Errata (2.8) bereits an der Kampagne (CampaignsPage) = Szenarien-Übersicht. Held „Augur Grimson" (CRRG) per `HERO_ALIASES` an „Augur Grisom" verknüpft. Tests +4 (92 grün). **UI-Feinschliff (1.3.19):** (a) **Begriffe ans Regelbuch angeglichen:** Attribut „Gespür"→**„Geistesgegenwart"** (Helden-/Leutnant-Statchips), Archetyp „Späher"→**„Kundschafter"** (`ARCHETYPE_LABELS` in heroes.ts; ClassesPage nutzte es bereits), Helden-Werte „Bewegung"→**„Geschwindigkeit"** + „Leben"→**„Lebenskraft"** (HeroesPage-Lightbox), Monster-Spalten „Normal"/„Elite"→**„Diener"/„Meister"** (MonstersPage). Nur UI-Labels – die 1:1 von Karten transkribierten Regeltexte + das GameSymbols-Wort-Mapping bleiben unangetastet. (b) **Switch-Highlight-Bug behoben:** Der aktive Zustand aller Umschalter/Tabs nutzte `bg-gold-700`, aber die `gold`-Palette war nur bis 600 definiert → `gold-700` erzeugte **gar keinen Hintergrund** (dunkler Text auf dunklem Grund = „verdunkelt"). Fix: aktive Umschalter auf **`bg-gold-500 text-dungeon-950`** (hell) vereinheitlicht (SegmentedControl, ItemsPage-Tabs+Akt-Filter, FilterChips, Errata-Tabs) + fehlende gold-700/800/900 zur `tailwind.config.js` ergänzt. (c) **Monster mobil:** In den kompakten Grid-Karten werden die Wort-Labels (Bewegung/Leben/Verteid./Angriff) unter `sm` ausgeblendet (nur Icons) + Würfelzeilen `flex-wrap` → die Angriffswürfel (ab 2–3) überlaufen den Meister-Rand nicht mehr (per Playwright an Arachyura verifiziert). (d) **Neuer Archetyp-Filter** (Krieger/Heiler/Magier/Kundschafter) mit runden SVG-Icons (`src/components/ArchetypeIcon.tsx`) in der **Klassenübersicht** (Icons auch auf den Helden-Filter-Buttons + Klassen-Gruppenüberschriften). (e) **Neuer „Grundspiel/Erweiterungen"-Filter** (`SourceFilter`/`matchesSource` in Filters.tsx) auf Monster, Overlord, Leutnants, Agenten, Plotdecks + Reisekarten (nur Reise-, nicht Stadtkarten). (f) **Klassenübersicht:** Begleiter + Startausrüstung stehen jetzt **oben** (vor den Fähigkeitskarten) statt am Ende, jeweils mit **Kartenbild** (Begleiter: bereits vorhandene any2cards-`imageUrl`; 37 Startausrüstungs-Items neu mit any2cards-`class-items`-Bild-URL gematcht via nameEn+Klasse, 2 Synonyme Book of Sages=Sage's Tome / Wayfarer Blade=Traveler's Blade). (g) **Errata & FAQ:** Kategorie-Filter (Chips je Abschnitt) + Kapitelnummer („2.1 ") aus den Kategorienamen entfernt. **Offen/Rückfrage:** Der gewünschte Archetyp-Filter „bei Plotkarten" wurde NICHT umgesetzt – Plotdecks tragen keinen Helden-Archetyp (sie gehören zu Overlord-Agenten/Leutnants); dort stattdessen der Grundspiel/Erweiterungs-Filter. **UI-Feinschliff (1.3.20):** (a) **Monster-Angriffsart:** neues Feld `attackType: 'melee'|'range'` im `Monster`-Typ, für alle 56 Gruppen aus any2cards `monsters.js` gesetzt (37 Nahkampf, 19 Fernkampf, per nameEn zugeordnet, konfliktfrei). Hinter den Angriffswürfeln erscheint ein Icon – **rote Kriegsaxt** (`MeleeIcon`) = Nahkampf, **grüner Bogen** (`RangedIcon`) = Fernkampf (in `GameSymbols.tsx`, einschneidige Polygon-Axt für Erkennbarkeit bei ~16 px); Grid + Lightbox, Diener- und Meister-Block. Test prüft `attackType`-Vollständigkeit (93 grün). (b) **Suchfelder:** `SearchInput` (Filters.tsx) hat jetzt ein festes **Lupen-Icon** links im Feld (Input mit `pl-9`, Icon absolut positioniert) + **dezenteren Platzhalter** (`placeholder:text-gray-500`); der eingegebene Text bleibt hell (`text-gray-100`). Wirkt projektweit (alle Seiten nutzen `SearchInput`). **Offen/Rückfrage (Task):** Deutsche Kartenbilder für Klassen-Startausrüstung + Begleiter gewünscht – aktuell werden any2cards-EN-Bilder genutzt; deutsche Klassen-/Item-/Begleiter-Scans liegen NICHT im Repo (kein `scans/` im Container, keine lokalen Klassenbilder), Quelle beim User zu klären. **Deutsche Klassen-Kartenbilder (1.3.21):** Quelle gefunden + dauerhaft dokumentiert (`docs/game-data/scan-sources.md`: Release `scans-transfer` → `Descent.Scans.zip`, Byte-Range-Zugriff + 235-Datei-Manifest). Daraus extrahiert: **37 Startausrüstungs- + 4 Begleiter-Kartenbilder** (`public/cards/de/classes/<item-id>.webp` bzw. `familiar-<class-id>.webp`, webp ~475 px, ≤150 KB). Grundspiel-/Erweiterungs-Klassen aus den 4 `Klassenkarten`-Blättern (10×7-Raster, per Position zugeschnitten, jede Karte per Montage visuell verifiziert – 2 Off-by-One-Spalten/Zeilen korrigiert); Elementarmagier (Runenspeicher/Energiebündel) + Seelenschnitter (Seelenernter) aus den einzelnen `Klasse …`-PNGs; Begleiter (Wolf/Untoter Diener/Belebter Stein/Schattenseele) von den Klassenblättern. `classItemDeUrl`/`classFamiliarDeUrl` in assetUrls; ClassesPage bevorzugt DE-Bild mit EN-any2cards-Fallback (CardThumb/LightboxImg srcs-Kette). 5 Namens-Korrekturen kartengenau: berserker „Axt"→**Schartige Kriegsaxt**, champion „Zweihänder"→**Schartiger Zweihänder**, shadowwalker „Gefiederte Axt"→**Gefiedertes Beil** + „Umhang"→**Eingeborenen-Umhang**, hexer „Stab des Grabes"→**Grabesstab**. Datenintegritäts-Test: jede Startausrüstung + jeder Begleiter hat ein DE-Bild (94 grün). Im echten Build per Playwright verifiziert (any2cards geblockt → nur lokale DE-webp geladen). |
| v1.4.0 | 🔄 In Arbeit | **Session-Tracker (Kampagnen-Spielstand) – Phase 1 (Setup).** Benannte Session je Kampagne; Helden-Setup (Spieler, Klasse, Start-Fähigkeiten, Startausrüstung + Begleiter – automatisch aus der Klasse vorbelegt); Overlord-Setup (Decks + besessene Karten, Leutnant→Plotdeck + Plotkarten, aktive Gerüchte, Relikte, Start-XP); JSON-Export/Import (verlustfreier Round-Trip). Eigener zustand-Store `useSessionStore` (localStorage-Key `qvr-sessions`, GETRENNT von `useGameStore`); Live-Stand (XP/Gold/Besitz) wird aus Setup + Szenario-Log ABGELEITET (`deriveLiveState`, reine Funktion → keine Doppelzählung). Neue Route `/session` + Nav/HomePage-Kachel + Sessions-Zähler. Tests: `sessionDerive` (Reverse-/Dangling-Sell-Invarianten) + `sessionImport` (Round-Trip, inner-ID-Erhalt). **Dieser Tracker ersetzt den früheren v1.5.0-„Kampagnen-Speicherstand" und subsumiert großteils die alte v1.6.0-„Overlord-Kommandozentrale".** |
| v1.5.0 | ⏳ Geplant | **Session-Tracker – Phase 2 (Szenario-Protokoll).** Kuratiertes Szenario-Dataset (`src/data/campaignScenarios.ts`, NUR Titel + Akt, keine Inhalte = FFG-IP) + Szenario-Log mit **automatisch verrechneten Belohnungen** (Helden-/Overlord-XP, Partei-Gold, Items/Relikte) + Einkauf (kaufen/verkaufen). Schema + Sanitizer + `deriveLiveState` sind bereits in v1.4.0 komplett → kein Persist-Bump nötig. |
| v1.6.0 | ⏳ Geplant | Monster-Tracker (Live-HP) – verschoben von 1.4.0 |
| v1.7.0 | ⏳ Geplant | Helden-Spieleransicht |
| v2.0.0 | ⏳ Zukunft | Backend-Migration + Sync (Major, User-Zustimmung nötig) |
| v2.1.0 | ⏳ Zukunft | Englische Lokalisierung |
| v2.2.0 | ⏳ Zukunft | Benutzerkonten, Cloud-Speicherung, Kampagnen-Sharing (User-Wunsch 2026-06-12) |

---

## Was ist in v1.0.0 enthalten

- **Map Builder:** Tiles platzieren, drehen, Connector-Rendering (INSET 0.269), Hover-Vorschau in Sidebar
- **Quest-Editor:** Quests, Begegnungen, Ziele, Erzähltext, Monster-Positionierung
- **Helden-Übersicht:** Alle Helden mit Filtern, vollständige Attributwerte
- **Monster-Übersicht:** Alle Monster mit Filtern, vollständige Spielwerte
- **Meine Sammlung:** Erweiterungs-Auswahl, alles filtert sich entsprechend
- **Speichern/Laden:** localStorage via zustand persist
- **Export/Import:** JSON, Druckansicht
- **GitHub Actions Auto-Deploy:** Push → automatisch auf GitHub Pages
- **PWA:** App ist offline-fähig (Service Worker, Manifest)
- **Datenbasis:** 208 Tiles (Connectoren pixelverifiziert), 56 Monstergruppen (Akt 1+2 vollständig), 60 Helden

---

## Bekannte Probleme & Verworfene Ansätze

### Map-Tile Connector-Rendering (GELÖST – nicht erneut umbauen!)

**Problem:** Descent-2e-Tile-PNGs müssen so dargestellt werden, dass Tiles über
Puzzle-Connectoren ineinandergreifen und das interne Tile-Raster deckungsgleich
mit dem Board-Raster bleibt.

**Funktionierende Lösung:**

1. **PNG-Geometrie:** Canvas ist exakt `cols×75 × rows×75 px`. Auf Connector-Kanten
   liegt die Body-Wall ~18px innen, Tab ragt bis zur Canvas-Kante (~1px), Notch
   schneidet bis ~35px ein.

2. **Streckungs-Modell (`MapGrid.tsx` `DraggableTile`):** `CONNECTOR_INSET_FRAC = 0.269`
   (visuell kalibriert). Pro Seite NUR strecken wenn dort ein Connector ist:
   `iL/iR/iT/iB = conn[seite] ? 0.269 : 0`. Formeln:
   - `sx = dCols/(dCols−iL−iR)`, `sy = dRows/(dRows−iT−iB)`
   - `imgW = footW·sx`, `imgH = footH·sy`
   - `imgLeft = −(iL·CELL_SIZE)·sx`, `imgTop = −(iT·CELL_SIZE)·sy`
   - Wrapper = Footprint, `overflow: visible` bei Connector-Tiles

3. **KRITISCHER FIX:** Tailwind-Preflight setzt `img { max-width: 100% }`.
   Das stauchte horizontal gestreckte Bilder → rechte Streckung wirkte nie.
   **Lösung:** `maxWidth: 'none'` UND `maxHeight: 'none'` im img-Style.
   Ohne diesen Fix ist die rechte Connector-Seite immer falsch. **Nie entfernen.**

**Verworfene Ansätze:**
- `CONNECTOR_INSET_FRAC = 0.24` (aus Pixel-Analyse) → visuell falsch, user hat 0.269 kalibriert
- Natural-Scale ohne Stretching → Tiles liegen nicht korrekt auf dem Grid
- Einheitliche Streckung auf alle 4 Seiten → falsch, nur Connector-Seiten strecken

**Connector-Daten:** In `src/data/mapTiles.ts` als `connectors: { top, right, bottom, left: boolean }`.
B-Seiten haben eigene Muster. Vollständige Connector-Tabelle in `docs/game-data/map-tiles.md`.

### DATEN-VORFALL 2026-06-12: Fabrizierte Helden (BEHOBEN – Lehre beachten!)

In `heroes.ts` wurden **8 frei erfundene Helden** mit zwei **nicht existierenden
Erweiterungen** („Maze of the Drakon", „Sands of the Past") gefunden — vermutlich
in einer früheren Session halluziniert. Namen wie Gaia, Aurora, Gristtun existieren
in Descent 2e nicht. Sie wurden aus `heroes.ts` und `heroes.md` entfernt.
**Korrekte Zahlen: 60 Helden, 56 Monstergruppen, 208 Tiles, 23 Erweiterungen.**

**Lehren / Regeln daraus:**
1. `src/data/expansions.ts` ist die **verbindliche Produktliste**. Jeder Datensatz
   mit einer expansionId außerhalb dieser Liste ist halluzinationsverdächtig.
2. Die Datenintegritäts-Tests (`src/data/__tests__/dataIntegrity.test.ts`) prüfen
   das automatisch — `npm test` hätte den Fehler sofort gefunden. Tests nie umgehen.
3. Vor dem Eintragen neuer Spieldaten: Existenz in der echten Produktwelt
   gegenprüfen (BGG, Fandom Wiki, any2cards-Repo-Struktur).
4. Bei Datenänderungen den Subagenten `daten-pruefer` laufen lassen.

### Kartenbild-Validierung (ETABLIERTES VERFAHREN seit 2026-06-12)

Spielwerte lassen sich **direkt aus den any2cards-Kartenbildern validieren** —
die Werte stehen pro Kartentyp immer an derselben Position:

1. Karte herunterladen (URLs: Helden in `heroes.ts` als `imageUrl`; Monster per
   Muster `images/monsters/d2e/<erweiterung>/<act1|act2>/<prefix>-<id>-front.png`,
   siehe `EXPANSION_PREFIX`/`EXPANSION_PATH` in `MonstersPage.tsx`. `-back.png`
   enthält Fähigkeitstexte UND Gruppengrößen pro Spielerzahl!)
2. Mit Python/PIL relevante Bereiche zuschneiden und 4–6× hochskalieren
   (LANCZOS), dann per Read-Tool visuell ablesen. Monsterkarte (385×600):
   Minion-Stats oben (y 0–60), Meister-Stats unten (y 540–600), Verteidigungs-
   würfel jeweils rechts (x 230–385); Angriffswürfel Minion ~y 155–200,
   Meister ~y 405–450. Heldenkarte (600×483): Stats-Spalte x 230–420.
3. Akt 1 vs. Akt 2 beachten (getrennte Karten in `act1/`- und `act2/`-Ordnern).

**Gruppengrößen ablesen (Verfahren etabliert 2026-06-13):** Auf der `-back.png`-Karte
(385×600) liegt unten ein Streifen (y ~548–600) mit drei Segmenten für 2 / 3 / 4 Spieler
(von links nach rechts). Jedes Segment zeigt links die **Diener**-Zahl (goldene Figur) und
rechts die **Meister**-Zahl (rote Figur). Effizient: alle `-back.png` laden, den Streifen
ausschneiden, 4–5× hochskalieren und mehrere als beschriftete Montage stapeln (Streifen
breit + niedrig ⇒ im Read-Tool gut lesbar). Große Monster haben das Muster 1+0 / 0+1 / 1+1;
Schwärme (Kobold) deutlich größere Zahlen. Im Code: `groupSizes` als `[Diener, Meister]`.

**Damit gefundene & behobene Fehler (alle 2026-06-12/13, kartenscan-validiert):**
- Ravaella Leichtfuß: Bewegung 5→4 (v1.0.2)
- Reanimate: Verteidigung Braun (alle 4), act2Master +1 gelber Würfel (v1.0.2)
- Rat Swarm: Meister-Verteidigung Braun, Gefräßig gibt Energie nicht Herz (v1.0.2)
- **v1.0.3 – Vollständiger Audit (70+ Korrekturen an allen 56 Monstergruppen):**
  - Verteidigungswürfelfarben bei ~35 Monstern korrigiert (systematische Fehler)
  - Angriffswürfel: Arachyura alle grün (nicht gelb); Giant/Golem act2 rot+rot;
    Blood-Ape/Ynfernael-Hulk/Marrow-Priest act2 Würfel ergänzt
  - Textfehler: Elemental (Erde→Gespür, Wasser→Willenskraft); Wraith/Plague-Worm
    (Wissen/Ausdauer→Willenskraft); Ironbound Beschützen (Erschöpfung→Herz);
    Bane-Spider Einspinnen (Stärke→Gespür); Shadow-Dragon Schatten (Erschöpfung→Schub);
    Ferrox Extrahieren (Herzen→Erschöpfung); Dark-Minotaur Eiterbeulen (Herzen→Erschöpfung);
    Ice-Wyrm Eisig (Herz→Erschöpfung); Marrow-Priest (Herz→Schub, 3→5 Bewegung);
    Shade Seelenfessel (Herzen→Erschöpfung) + Flackern (Gespür-Test ergänzt)
  - Fähigkeitstypen: Feueratem (Shadow-Dragon/Hybrid-Sentinel) action→surge;
    Zauberei (Sorcerer/Chaos-Beast) surge→ability; Druckwelle (Lava-Käfer Master) surge→ability;
    Durchbohren (Skeleton-Archer/Deep-Elf) surge→ability; Ätherischer Griff action→ability
  - Shade Trait: Dunkel→Kalt; Steelhorns heroAbility Bedingung invertiert;
    Jain-Fairwood heroicFeat Klausel entfernt; Lebenspunkte→Herzen (Ogre, Crow-Hag,
    Skeleton-Archer, Deep-Elf); Beastman Schübe ergänzt; Flesh-Moulder Schübe ergänzt

→ Vollständiger Validierungspass aller 56 Monstergruppen + 2 Helden: ✅ ABGESCHLOSSEN

### any2cards-STRUKTURDATEN (Goldgrube, entdeckt 2026-06-13)

Das any2cards/d2e-Repo hat ein `data/`-Verzeichnis mit **strukturierten JS/JSON-Dateien** —
weit zuverlässiger als Pixel-Lesen von Kartenbildern. Zugriff ohne API-Limit per
Blobless-Clone: `git clone --filter=blob:none --no-checkout --depth 1 https://github.com/any2cards/d2e`,
dann `git -C <repo> ls-tree -r --name-only HEAD | grep '^data/'`. Einzeldatei direkt:
`https://raw.githubusercontent.com/any2cards/d2e/master/data/<name>.js` (ist gültiges JSON).

Relevante Dateien für offene v1.1-Aufgaben:
- `class-skills.js` (282 Karten, Felder: name, archetype, class, `xp cost`, `fatigue cost`,
  rules, expansion, image), `class-familiars.js`, `class-items.js`, `hybrid-class-skills.js`
- `shop-items.js`, `relics.js` (Items), `overlord-decks.js` (Overlord), `lieutenants.js`,
  `agents.js` (Leutnants), `travel-event-decks.js` (Reisekarten), `heroes.js`, `monsters.js`

**Wichtig:** Daten sind **englisch**. Vorgehen (mit User abgestimmt 2026-06-13):
**zweisprachig** speichern — EN-Original (zuverlässig) + DE-Community-Übersetzung
(klar als solche markieren, nicht zwingend offizieller FFG-Wortlaut). Vorsicht bei
**Errata-Dubletten** (dieselbe Karte 2× mit unterschiedlichem Text → die spätere/
klarere Fassung nehmen) und **Stub-Fehlern** (z. B. Runenmeister hat KEINEN Begleiter;
Totenbeschwörer-Begleiter heißt „Reanimate", nicht „Skelett" — beides via Daten korrigiert).

**VERTAUSCHTE Quelldaten (entdeckt 2026-06-14, v1.1.21 — BEHOBEN v1.1.29):** In `agents.js` sind die
Agenten von **Ardus Ix'Erebus / Kyndrithul / Zarihell / Skarn** (Bilehall/Manor-Region) fehlerhaft:
xws/name/image/act sind den FALSCHEN Charakteren zugewiesen (Regeltexte nennen den falschen Namen,
Akt-Labels teils dupliziert, `askarn` unter falscher Erweiterung). **Wichtige Erkenntnis (v1.1.29):**
Die *Inhalte* sind in sich stimmig — die Front-Rows (`attack`/`abilities`/`characteristics`) und die
Back-Rows (`ability rules`/`deck`) nennen je den KORREKTEN Charakter; nur die Label-Felder sind
permutiert. Front- und Back-Rows werden über die Fähigkeits-Keywords gepaart, und über die
any2cards-Kartenbilder (Namensbanner oben + Werte) wurde jede Form ihrem Charakter+Akt eindeutig
zugeordnet (2026-06-16). **Validierungs-Dreifachabgleich:** (1) Namensbanner auf dem Kartenbild,
(2) Front-Ability-Signatur, (3) Back-Regeltext nennt den Charakter + korrektes Deck — alle drei
stimmen überein. Decks bestätigt: Ardus→First Legion, Kyndrithul→Vital Essence, Zarihell→Eternal
Agony, Skarn→Twisted Soul. Die 4 sind als kartenscan-validierte Literale im Generator (`/tmp/gen-agents.js`,
`EXTRA`-Block) ergänzt → **20 Agenten / 40 Formen**. Werte aus den Front-Cards, EN-Regeln 1:1 aus den
Back-Cards (inkl. Quell-Tippfehler „as it if were"), DE handübersetzt.

---

## Was noch fehlt (offene Arbeit v1.1)

- [x] Monster-Gruppengrößen pro Spielerzahl (2/3/4) — in monsters.ts + monsters.md
      (2026-06-13: alle 56 Gruppen aus den `-back.png`-Karten abgelesen; neues Feld
      `groupSizes: { p2/p3/p4: [Diener, Meister] }` im `Monster`-Typ; Anzeige in
      MonstersPage; Datenintegritäts-Test ergänzt — 19 Tests grün)
- [x] Helden-Klassen: Alle 24 Klassen ✅ (1.1.2 – 8 Grundspiel + 16 Erweiterungen, 204+
      Fähigkeitskarten, zweisprachig EN+DE aus any2cards-Strukturdaten; 3 Begleiter:
      Wolf/Beastmaster, Gerufener Stein/Geomant, Schattengeist/Shadow Walker.
      Elementalist mit 'elemental'-XP-Typ; Seelenernter mit 2 Startkarten).
- [x] Items (1.1.3 – 122 Shop-Karten + 27 Relikte aus any2cards; items.ts + ItemsPage.tsx; items.md aktualisiert;
      1.1.4 – DE-Übersetzungen aller Item-/Reliktnamen + Regeltexte (Community-Übersetzung, EN/DE-Schalter),
      Relikte nun doppelseitig erfasst: 27 Helden-Seiten + 27 Overlord-Seiten mit `side`-Feld, getrennt
      dargestellt; Akt-Zuordnung der Shop-Karten korrigiert. `RelicSide`-Typ + Datenintegritäts-Tests ergänzt)
- [x] Overlord-Klassen + Karten: VOLLSTÄNDIG ✅ (1.1.15 Grundspiel + 1.1.16 Erweiterungs-Klassen +
      1.1.17 Belohnungskarten; **105 Karten in 27 Decks** zweisprachig aus any2cards `overlord-decks.js`,
      EN 105/105 wortgetreu verifiziert; alle Klassen + Universal + Belohnungskarten (Overlord/Quest/
      Rumor Reward, `xpCost: null`, `kind 'reward'`); `overlordClasses.ts` + `OverlordPage.tsx`
      Route `/overlord` + Tests + overlord-classes.md)
- [x] Leutnants: VOLLSTÄNDIG ✅ (1.1.18 Grundspiel + 1.1.19 Erweiterungen; **21 Leutnants / 39 Formen**
      aus any2cards `lieutenants.js`, je Akt mit Attributen, Angriffswürfeln, Werten je Spielerzahl 2/3/4
      und Fähigkeiten + Regeltext, zweisprachig. EN 1:1 geparst + maschinell verifiziert (0 Abweichungen,
      Regelpaarung geprüft); `expansionId` je Form (Bilehall→Rost. Ketten). `lieutenants.ts` Generator-erzeugt
      + `LieutenantsPage.tsx` `/leutnants` + Tests + lieutenants.md).
- [x] Agenten: VOLLSTÄNDIG ✅ – **20 Agenten / 40 Formen** (1.1.20 Grundspiel 6 + 1.1.21 Erweiterungen 10,
      EN 1:1 verifiziert; **1.1.29 die 4 zuvor ausgeschlossenen kartenscan-validiert ergänzt**:
      Ardus Ix'Erebus/Kyndrithul/Zarihell/Skarn – vertauschte `agents.js`-Rohdaten über die Kartenbilder
      eindeutig zugeordnet, s. „Bekannte Probleme"). `Agent`/`AgentForm`-Typen, `agents.ts` Generator-erzeugt
      + `AgentsPage.tsx` Route `/agenten` + Tests (20/40 Count-Lock).
- [x] Plotdeck-Karten: VOLLSTÄNDIG ✅ – Grundspiel + alle Erweiterungen (Lindwurm/Trollsümpfe/
      Labyrinth/Rabenfels/Bilehall inkl. Erste Legion/Nerekhall)
      (1.1.22–1.1.27 → **20 Decks / 200 Karten** aus any2cards `plot-decks.js`, EN 1:1 verifiziert;
      Karten-ID = `deckId-xws`, da xws „feralinstincts" in 2 Decks vorkommt; `PlotCard`/`PlotDeck`-Typen,
      `plotDecks.ts` Generator-erzeugt + `PlotDecksPage.tsx` Route `/plotdecks` + Tests).
- [x] Reisekarten: erfasst ✅ (1.1.31 – `src/data/travelCards.ts` + `/reisekarten`-Seite): 41 Reise-/
      Stadtereignis-Karten (Grundspiel + Lindwurm/Labyrinth/Trollsümpfe/Bilehall/Ketten + Nerekhall-
      Stadtereignisse) aus any2cards `travel-event-decks.js`/`city-event-decks.js`. **Nur faktische
      Strukturdaten** (Erweiterung, Deck-Position, welche Gelände-Icons ein Ereignis tragen) +
      Kartenbild-Links; Ereignistext bewusst NICHT reproduziert (FFG-IP). Nebenszenarien (Side Quests)
      = bereits als Advanced Quests auf der Kampagnen-Seite (v1.1.30), von der Reisekarten-Seite verlinkt.
- [~] Kampagnen: faktischer Überblick erfasst ✅ (1.1.30 – `src/data/campaigns.ts` + `/kampagnen`-Seite):
      9 offizielle Kampagnen (nur Eckdaten: Erweiterung, Typ, Verzweigung, eigene Kurzbeschreibung) +
      16 Advanced Quests der kleinen Packs (Titel, Erweiterung, Akt, Reise-Gelände, Kartenbild-Links)
      aus any2cards `advanced-quests.js`. **Bewusst NICHT enthalten:** Questbuch-Inhalte (Ziele/
      Monsterlisten = FFG-IP, keine zuverlässige Quelle). Ausgeschlossen: „The Sunken Temple"
      (Erweiterung „Sands of the Past" nicht in expansions.ts → halluzinationsverdächtig). Offen:
      detaillierte Szenario-Daten (nur mit zuverlässiger Quelle + geklärter Rechtslage, → v1.4+).
- [x] Overlay-Datenbasis ✅ (1.1.32 → erneuert 1.3.11 – `src/data/overlays.ts`): **16 echte
      Descent-Token mit transparenten Original-Bildern** (`public/cards/de/overlays/<id>.png`)
      als 1×1-Feldmarker im MapBuilder (Quest-Editor + Kartenbauer); im Quest-Editor mit der
      Begegnung gespeichert (`mapData.overlays`, bereits im Schema → keine Migration). Visueller
      Token-Picker (Popover, nach Kategorie). Die abstrakten 1.1.32-Platzhalter ohne echtes Token
      (Lava/Grube/Schlamm/Trümmer/Truhe) wurden durch die realen Token ersetzt (s. Designsektion).
- [ ] Daten-Validierungspass: alle Werte gegen Karten-Scans prüfen
      (Verfahren etabliert — siehe „Kartenbild-Validierung" oben; Gruppengrößen
      stehen auf den `-back`-Karten)
- [ ] B-Seiten-Connectoren visuell verifizieren

---

## Wissens- und Dokumentationsstruktur

```
quest-vault-reborn/
├── CLAUDE.md                              ← Primäre Gedächtnisstütze (DIESE DATEI)
├── README.md                              ← Benutzeranleitung / Deployment-Guide
├── package.json                           ← version: 1.0.0
├── docs/
│   ├── architecture/
│   │   ├── plan.md                        ← Vollständige Roadmap mit Versionen
│   │   ├── acceptance-criteria.md         ← Akzeptanzkriterien pro Feature
│   │   └── decisions.md                   ← Architektur-Entscheidungen (ADR)
│   ├── research/
│   │   ├── quest-vault-original.md        ← Was das Original konnte
│   │   ├── rebuild-attempts.md            ← Community-Nachbau-Versuche
│   │   ├── digital-assets.md              ← Asset-Quellen (any2cards/d2e etc.)
│   │   └── game-content.md               ← Spielinhalt Überblick
│   ├── translations/
│   │   └── de-en-glossary.md              ← DE↔EN Begriffe
│   └── game-data/                         ← Vollständige Spielwerte-Datenbank
│       ├── expansions.md                  ← Alle Erweiterungen ✅
│       ├── monsters.md                    ← ~60 Monster mit Vollwerten ✅ (Gruppengrößen fehlen)
│       ├── heroes.md                      ← ~68 Helden mit Vollwerten ✅
│       ├── hero-classes.md                ← Helden-Klassen (Stub – v1.1)
│       ├── map-tiles.md                   ← 208 Tiles mit Connectoren ✅
│       ├── items.md                       ← Item-Shop + Relikte (Stub – v1.1)
│       ├── overlord-classes.md            ← Overlord-Klassen + Karten (Grundspiel ✅ – v1.1.15)
│       ├── lieutenants.md                 ← Leutnants/Hauptmänner (Grundspiel ✅ – v1.1.18)
│       ├── travel-cards.md                ← Reisekarten + Nebenszenarien (Stub – v1.1)
│       ├── campaigns.md                   ← Kampagnen-Überblick + Advanced Quests ✅ (v1.1.30)
│       └── overlays.md                    ← Overlay-Plättchen (Stub)
└── src/
    ├── data/
    │   ├── expansions.ts   ✅
    │   ├── monsters.ts     ✅ (Gruppengrößen fehlen noch)
    │   ├── heroes.ts       ✅
    │   ├── mapTiles.ts     ✅
    │   ├── heroClasses.ts  ✅
    │   ├── items.ts        ✅
    │   ├── overlordClasses.ts ✅ (Grundspiel; Erweiterungen offen)
    │   ├── lieutenants.ts  ✅ (Grundspiel; Erweiterungen offen)
    │   ├── campaigns.ts    ✅ (Kampagnen-Überblick + Advanced Quests – v1.1.30)
    │   ├── travelCards.ts  ✅ (Reise-/Stadtereignis-Karten, Metadaten + Bilder – v1.1.31)
    │   └── overlays.ts     ✅ (9 platzierbare Overlay-Marker für den Kartenbauer – v1.1.32)
    ├── types/game.ts       ← TypeScript Typdefinitionen (statische Spieldaten)
    ├── types/session.ts    ← Session-Tracker-Typen (App-State, v1.4.0)
    ├── store/useGameStore.ts   ← zustand Store (Quests + Sammlung, Key `quest-vault-reborn`)
    ├── store/useSessionStore.ts ← zustand Store Session-Tracker (Key `qvr-sessions`, v1.4.0)
    ├── store/sessionDerive.ts   ← `deriveLiveState` – Live-Stand aus Setup+Szenario-Log (rein, testbar)
    ├── utils/sessionImport.ts   ← Session-JSON Sanitizer (Whitelist) + Export (v1.4.0)
    ├── components/
    │   ├── MapBuilder/     ← MapGrid, TileSidebar, constants
    │   ├── session/        ← SetupTab, HeroesTab, OverlordTab, ui, sessionHelpers (v1.4.0)
    │   └── ...
    └── pages/
        ├── HomePage.tsx
        ├── MapBuilderPage.tsx
        ├── QuestEditorPage.tsx
        ├── SessionsPage.tsx    ← Session-Tracker (/session, v1.4.0)
        ├── HeroesPage.tsx
        ├── MonstersPage.tsx
        └── CollectionPage.tsx
```

---

## Kontextverlust-Strategie

Bei Sitzungsstart oder nach Komprimierung: folgende Reihenfolge lesen:

1. **CLAUDE.md** (diese Datei) — Vollständiger Überblick, aktueller Stand, bekannte Probleme
2. **docs/architecture/plan.md** — Roadmap, Versionen, nächste Schritte
3. **docs/architecture/acceptance-criteria.md** — Akzeptanzkriterien pro Feature
4. **docs/game-data/[relevante Datei]** — Spieldaten bei Korrekturen

Ein **SessionStart-Hook** (`.claude/session-start.sh`) liefert jedem neuen Session
automatisch Version, letzte Commits und offene Aufgaben — manuelles Antriggern
ist nicht nötig.

**Dokumentations-Pflicht:** Jede Korrektur oder Ergänzung von Spieldaten MUSS sowohl
in der TypeScript-Quelldatei als AUCH in der entsprechenden `.md`-Datei unter
`docs/game-data/` festgehalten werden. Die `.md`-Dateien sind die langfristige
Wissensbasis. TypeScript-Code allein reicht nicht aus.

---

## AI-Arbeitsregeln (verbindlich für jede Session)

### Definition of Done — vor JEDEM Commit

1. `npm test` — alle Tests grün (Datenintegrität + Unit-Tests)
2. `npm run build` — fehlerfrei (inkl. TypeScript-Check)
3. Spieldaten-Änderung? → `.md`-Doku unter `docs/game-data/` synchron aktualisiert
4. Feature fertig? → Abgleich mit `docs/architecture/acceptance-criteria.md`;
   Haken in `plan.md` nur setzen, wenn ALLE Kriterien erfüllt sind
5. Statusänderung? → CLAUDE.md-Statustabelle und „Was noch fehlt" aktualisieren

### Selbstaktualisierung (Pflicht am Ende jeder Arbeitseinheit)

Diese Datei (CLAUDE.md) ist das Gedächtnis des Projekts. Nach jeder Arbeitseinheit:
- Neue Erkenntnisse, gelöste Probleme, verworfene Ansätze HIER dokumentieren
- Probleme die Zeit gekostet haben → unter „Bekannte Probleme" eintragen
- Die Statustabelle aktuell halten — eine neue Session muss ohne Rückfragen
  weiterarbeiten können

### Projekt-Subagenten (in .claude/agents/)

| Agent | Wann einsetzen |
|---|---|
| `sicherheits-pruefer` | Vor jedem Push mit src/-Änderungen (außer reine Datendateien). Liefert FREIGABE/BLOCKIERT. |
| `daten-pruefer` | Nach jeder Änderung an `src/data/*.ts`, vor dem Commit. Prüft auf Halluzinationen + Doku-Sync. |

Bei BLOCKIERT: Befund beheben, erneut prüfen lassen. Niemals blockierte Änderungen pushen.

### CI als Sicherheitsnetz

- `.github/workflows/ci.yml`: Tests + Build auf jedem Feature-Branch-Push und PR
- `.github/workflows/deploy.yml`: Tests laufen VOR dem Deploy — rote Tests = kein Deploy
- Tests niemals löschen/skippen um CI grün zu bekommen; Ursache beheben

### Auto-PR-und-Merge (User-Anweisung 2026-06-13, dauerhaft)

Der User hat dauerhaft autorisiert: **Wenn ALLE folgenden Bedingungen erfüllt sind,
automatisch einen PR nach `main` öffnen UND mergen — ohne Rückfrage:**

1. `npm test` lokal grün UND `npm run build` fehlerfrei
2. CI-Checks (`ci.yml`) auf dem gepushten Branch/PR sind **grün** (Status abwarten,
   nicht raten — via GitHub-MCP `pull_request_read`/`get_job_logs` prüfen)
3. Die Prüfung war **gründlich** und ergab **keine Fehler**: zuständige Subagenten
   (`daten-pruefer` bei `src/data/*`-Spieldaten, `sicherheits-pruefer` bei sonstigen
   `src/`-Änderungen) haben **FREIGABE** gegeben

**Ablauf:** committen → pushen → CI abwarten → bei Grün PR erstellen
(`mcp__github__create_pull_request`) → mergen (`mcp__github__merge_pull_request`,
Squash). Merge nach `main` löst automatisch den Deploy aus (`deploy.yml`).

**Nicht mergen** wenn: CI rot, ein Subagent BLOCKIERT, Tests/Build fehlschlagen,
oder es eine offene inhaltliche Rückfrage gibt. Dann Befund beheben oder nachfragen.
Major-Versionssprünge brauchen weiterhin separate User-Bestätigung.

### Release Notes pflegen (öffentlich)

- Bei **jedem Versionsbump** einen Eintrag in `src/data/releaseNotes.ts` ergänzen
  (neueste Version oben, `version` muss zur `package.json` passen).
- **Nur öffentlich relevante** Infos: sichtbare Features, Verbesserungen, Datenpflege.
  **Niemals** interne Strategie, Monetarisierung/Ko-Fi/Spenden, Sicherheits- oder
  Technik-Interna in die Release Notes schreiben (werden im Startseiten-Popup gezeigt).

### Schutzregeln

- **Niemals** `CONNECTOR_INSET_FRAC` oder den maxWidth/maxHeight-Fix anfassen (s. unten)
- **Niemals** Spieldaten erfinden — nur belegt aus Karten-Scans/any2cards/BGG übernehmen;
  im Zweifel als „Validierung ausstehend" markieren statt raten
- **Niemals** Persist-Schema ändern ohne `version`-Erhöhung + `migrate`-Schritt
  in `src/store/useGameStore.ts` (sonst Datenverlust bei Bestandsnutzern)
- Importierte Fremddaten (JSON-Import) laufen IMMER durch `src/utils/questImport.ts`

---

## Kern-Anforderungen

- **Sprache:** Deutsch als primäre UI-Sprache
- **Erweiterungs-Filter:** Benutzer wählt aus, welche Erweiterungen er besitzt
- **Browserzugang:** Kein lokaler Server nötig (statische Webapp)
- **Startbarkeit:** Nach jedem Commit testbar
- **iPad:** Alle Features müssen auf iPad (768px–1024px) vollständig bedienbar sein

---

## Tech-Stack

| Technologie | Verwendung |
|---|---|
| React 18 + Vite 5 | Frontend-Framework + Build |
| TypeScript | Typsicherheit |
| Tailwind CSS | Styling (ACHTUNG: `max-width: none` auf Tile-Images nötig!) |
| zustand + persist | State Management + localStorage |
| react-router-dom | Routing (HashRouter für GitHub Pages) |
| @dnd-kit/core | Drag-and-Drop im MapBuilder |
| vite-plugin-pwa | PWA / Service Worker |
| @fontsource (Cinzel + Inter) | Self-hosted Fonts (offline, kein CDN) – v1.2.0 |
| GitHub Actions | CI/CD → GitHub Pages |

---

## Git-Workflow

- **Branch:** `claude/descent-quest-vault-DCYTY`
- **Remote:** `origin` (GitHub: zedyo/quest-vault-reborn)
- **Nach jeder Arbeitseinheit:** committen und pushen
- **Commit-Format:** `<typ>(<bereich>): <was wurde getan>`
  - `feat(monster-tracker): Live-HP-Tracking implementiert`
  - `fix(map-builder): Tile-Rotation bei b-Seiten korrigiert`
  - `docs(game-data): Monster-Gruppengrößen validiert und dokumentiert`
  - `chore(version): v1.1.0`
- **Commit-Autor & Attribution (User-Vorgabe 2026-06-21):** Commits werden als
  **`zedyo <46816354+zedyo@users.noreply.github.com>`** erstellt. Zu Beginn jeder
  Session die Git-Identität setzen:
  `git config user.name "zedyo" && git config user.email "46816354+zedyo@users.noreply.github.com"`.
  **Keine** `Co-authored-by: Claude …`- und **keine** `Claude-Session:`-Trailer in
  Commit-Nachrichten — der User soll als alleiniger Autor/Contributor erscheinen.

### Roh-Scans / große Bilddateien – Ablage-Regeln (2026-06-21)
- **Roh-Scans NIEMALS committen** (verursachten einmal 250 MB Historien-Bloat, per
  `filter-branch` bereinigt). Sie liegen unter **`scans/`** (per `.gitignore` ausgeschlossen).
- Aus den Scans erzeugen Skripte **klein-optimierte** Bilder (webp, ~500 px, <150 KB) nach
  **`public/cards/…`** — **nur diese** werden committet und von der App ausgeliefert
  (Vite servt `public/` unter `base: '/quest-vault-reborn/'`).

---

## Wichtige Designentscheidungen

- **Tile-Connector-Rendering:** CONNECTOR_INSET_FRAC=0.269, maxWidth:none (siehe oben)
- **Kartensymbole:** `src/components/GameSymbols.tsx` bündelt die Descent-Symbole
  (`SurgeSymbol` ⚡, `ActionSymbol` ↻, `HeartSymbol` ❤, `FatigueSymbol` 💧) und die
  Helfer-Funktion `renderGameText()` (ersetzt Herz/Schub/Erschöpfung durch Symbole und
  setzt jeden Satz in eine eigene Zeile). Monster- und Item-Karten nutzen dieselben
  Symbole (1.1.5). Für künftige Kartentexte (Overlord, Klassen) wiederverwenden.
  **1.1.7:** Symbol-Pfade aus einer PSD-Familiar-Kartenvorlage (per `psd-tools`/`potrace`
  aufbereitet) ergänzt/überarbeitet: `MovementSymbol` (Stiefel), `DefenseSymbol` (Schild),
  Kreis-Badges (`MovementBadge`/`DefenseBadge`) und `DiceSymbol` (isometrischer 3D-Würfel,
  Basisfarben aus den PSD-Pixeln). `DiceSymbol` ersetzt die Buchstaben-Quadrate in
  `DiceDisplay.tsx` (`DicePip`) + ItemsPage. Action=blau, Surge=diagonaler Blitz,
  Fatigue=gelber gebogener Tropfen. **1.1.8:** `MovementBadge`/`DefenseBadge` ersetzen die
  lokalen Stat-Icons in HeroesPage + MonstersPage (Bewegung grüner Kreis #15552c, Verteidigung
  blauer Kreis #1f6fb2 — App-Palette beibehalten; Health/Stamina-Icons bleiben lokal).
  **1.1.9:** `renderGameText` zusätzlich auf Helden-Beschreibungen (`heroAbility`/`heroicFeat` in
  HeroesPage) und Klassenkarten (Fähigkeits- + Begleiter-Regeltext in ClassesPage) angewendet —
  ❤/⚡/💧-Symbole + Satz-pro-Zeile wie auf der ItemsPage.
  **1.1.10:** Neue Variante `renderGameTextInline` (Symbole OHNE Satz-pro-Zeile) für Fließtexte:
  MonstersPage `formatEntry` (Fähigkeits-/Energie-/Aktionstexte; löst das alte Emoji-❤ + behält das
  fette „Name:"-Präfix) und QuestEditorPage (`QuestPrintView` + Listen-Vorschau; `pre-wrap` der
  Autoren-Zeilenumbrüche bleibt erhalten).
  **1.1.11:** „Aktion"/„Aktionen"/„Action"/„Actions" als zusätzliches Token in `TOKEN_SPLIT` →
  `ActionSymbol` ↻ (zentral in GameSymbols, wirkt damit überall: Helden/Klassen/Items/Relikte/
  Monster/Quest-Editor).
  **1.1.12:** Quest-Editor: `TextField` hat jetzt eine `SymbolInsertBar` (Knöpfe ❤/⚡/💧/↻), die den
  jeweiligen Begriff an der Cursorposition einfügt (onMouseDown+preventDefault hält Fokus/Cursor;
  fügt mit korrekter Wortgrenze ein), plus Hinweis-Zeile unter der Quest-Beschreibung. So wissen
  Quest-Autoren, welche Wörter als Symbole erscheinen und wie sie sie einfügen.
- **Geteilte UI-Bausteine (1.1.13 – Refactoring, vor neuen Inhaltsseiten):** Wiederkehrende
  Muster aus den Übersichtsseiten zentral gebündelt, damit künftige Seiten (Overlord, Leutnants,
  Kampagnen) sie wiederverwenden statt zu kopieren:
  - `src/components/StatIcons.tsx` — `HealthIcon`/`StaminaIcon`/`AttackIcon` (zuvor in HeroesPage
    UND MonstersPage dupliziert; ergänzen die Bewegungs-/Verteidigungs-Badges aus GameSymbols).
  - `src/components/ModalOverlay.tsx` — geteilter Lightbox-/Dialog-Backdrop (Escape-Schließen +
    Klick-außerhalb + `stopPropagation` am Panel + Fokus ins Panel + `role="dialog"`). Genutzt von
    Helden-/Monster-/Item-Lightbox und ReleaseNotesModal. **Folge:** Helden- und Monster-Vorschau
    schließen jetzt auch per Esc (vorher nur Items).
  - `src/components/Filters.tsx` — `SearchInput`, `OwnedToggle` („Nur meine Sammlung"),
    `SegmentedControl<T>` (generische Buttongruppe in Goldoptik) + `LangToggle` (DE/EN).
    In Helden/Monster/Items/Klassen verbaut. (ItemsPage-Akt-Filter + Tabs bewusst lokal gelassen —
    abweichende Aktiv-Optik.)
  - `src/data/assetUrls.ts` — zentrales Asset-URL-Modul: `ANY2CARDS_IMAGES`-Basis, `EXPANSION_PATH`,
    `EXPANSION_PREFIX`, `monsterImageUrl()`, `tileImageUrl()`. Löst die zuvor 3 parallelen Strategien
    (gespeicherte Voll-URLs in heroes.ts/items.ts bleiben, da pro Karte validiert; die berechneten
    Monster-/Tile-URLs nutzen jetzt die geteilten Maps). `mapTiles.ts` re-exportiert `tileImageUrl`
    für API-Stabilität.
- **Bestätigung vor dem Löschen (1.1.14):** `src/components/ConfirmDialog.tsx` (baut auf `ModalOverlay`
  auf — destruktiver Knopf bewusst NICHT autofokussiert, damit Enter nicht versehentlich löscht).
  In QuestEditorPage für alle drei Lösch-Pfade verbaut (Quest aus der Liste, Quest im Editor,
  Begegnung) via gemeinsamen `pendingDelete`-State. Löst den Audit-Punkt „Quest-Löschen ohne
  Rückfrage". Für künftige destruktive Aktionen wiederverwenden.
- **Leutnant↔Plotdeck-Verknüpfung (1.1.28):** `src/data/lieutenantPlotLinks.ts` bündelt die
  Zuordnung (importiert LIEUTENANTS + PLOT_DECKS, vermeidet Zirkularimporte über ein eigenes Modul).
  Match per Namensgleichheit `lieutenant.nameEn === deck.agentEn`; einzige Ausnahme: Alias
  „Mirklace" → „Gargan Mirklace" (= Plotdeck Burning Ambition; generischer vs. benannter Nerekhall-
  Leutnant, dieselbe Figur). Alle 21 Leutnants haben ein Deck, alle 20 Decks einen Leutnant
  (Datenintegritäts-Tests sichern das ab). UI: LieutenantsPage zeigt pro Karte einen „📜 Plotdeck:"-
  Link nach `/plotdecks?deck=<id>`; PlotDecksPage macht das Agenten-Label zum Link nach
  `/leutnants?lt=<id>`. Beide Zielseiten lesen den Query-Param (`useSearchParams`), schalten
  „Nur meine Sammlung" beim Aufruf via Link aus, scrollen zum Ziel (`scroll-mt-24`) und heben es
  ~2,5 s mit `ring-2 ring-gold-400` hervor. Muster für künftige Quer-Verlinkungen wiederverwenden.
- **Overlays im MapBuilder (1.1.32 → Token-Bilder 1.3.11):** `src/data/overlays.ts`
  (`OverlayType` + `OVERLAYS`/`OVERLAY_BY_ID`) ist der platzierbare Overlay-Katalog. Seit **1.3.11**
  sind es **16 echte Descent-Token** mit **transparenten Original-Bildern** (`public/cards/de/overlays/<id>.png`,
  Quelle any2cards `images/tokens/d2e/…`; Helper `overlayTokenUrl(id)` in `assetUrls.ts`). Kategorien:
  `passage` (Tür/Verschlossene Tür/Fallgitter), `terrain` (Wasser/Heiß/Eis-Trait + Überwucherung/
  Brüchiges Gelände/Alte Mauer), `marker` (Zielmarker rot/blau/grün/weiß, Suchmarker/Besonderer
  Suchmarker), `figure` (Dorfbewohner – `category` wurde um `'figure'` erweitert). `MapBuilder` hat
  einen **visuellen Token-Picker** (Popover „+ Overlay setzen", nach Kategorie gruppiert, zeigt die
  Token-Bilder; Outside-Click/Escape schließen) statt des alten `<select>`. Overlays sind **controlled**
  (`overlays`/`onOverlaysChange`, vom Quest-Editor durchgereicht) **ODER uncontrolled** (interner State).
  `MapGrid`-`OverlayToken` rendert das transparente PNG (Emoji+Farbe nur als Fallback bei fehlendem
  Bild / unbekannter id), ✕ zum Entfernen, Platzierung per Klick im `overlayPlaceMode`.
  **Token-Pipeline:** PNG laden → auf Alpha-Bounding-Box zuschneiden → 128 px → `quantize(128, FASTOCTREE)`
  **alpha-erhaltend** (~7 KB/Token, 16 ~117 KB). **Umstellung von 1.1.32:** der alte Kernsatz hatte
  abstrakte Platzhalter OHNE echtes Token (`lava`/`pit`/`sludge`/`rubble`/`chest`) — solches Gelände ist
  in Descent auf die PLÄTTCHEN gedruckt, es gibt keine separate Token-Komponente → keine belegte
  transparente Vorlage; Katalog daher auf echte Token umgestellt. Stabile IDs (`door`/`water`/`search`/
  `objective`) bleiben → Alt-Quests überleben; entfallene IDs degradieren grafisch sanft (Render-Fallback,
  kein Crash). **Wichtig:** `mapData.overlays` war bereits im Persist-Schema → **keine** Schema-/
  Versionsänderung nötig. Platzier-Modi (Tile/Monster/Overlay) schließen sich gegenseitig aus. Im echten
  App-Build per Playwright-Screenshot verifiziert. Weitere Erweiterungs-Token später ergänzbar.
- **Design-Fundament (1.2.0):** Warme, mystische Dungeon-Palette in `tailwind.config.js`
  (`dungeon` 950–600 = Anthrazit/Braun statt vorher Tech-Blau; `gold` + `parchment` als Akzente).
  Alles nutzt die Tokens, daher wirkt die Palette zentral. Hardcodierte Builder-Farben (MapGrid
  Grid-Hintergrund/Linien) wurden mit-vereinheitlicht (`#17110a` / `#332617`). Fonts: **Cinzel**
  (Display, Überschriften h1–h3) + **Inter** (Fließtext) — offline self-hosted via `@fontsource/cinzel`
  + `@fontsource-variable/inter`, in `main.tsx` importiert (kein externes CDN → PWA bleibt offline-fähig).
  Globaler `:focus-visible`-Goldring in `index.css` als Accessibility-Grundlinie. **Karten-Titel (h4)
  bleiben bewusst Inter** (nur h1–h3 = Cinzel), sonst wirkt Cinzel zu schwer.
- **Umschaltbare Themes (1.2.4):** Die `dungeon`-Palette ist in `tailwind.config.js` auf CSS-Variablen
  umgestellt (`rgb(var(--c-dungeon-NNN) / <alpha-value>)` – Kanal-Format wegen Opazitäts-Utilities wie
  `bg-dungeon-900/50`). Die Variablen-Sätze je Theme stehen in `index.css` unter `:root`/`[data-theme=…]`
  (Verlies=warm Standard, Arkanblau=Original-Blau, Schiefer=neutral). `src/theme.ts` hält den Katalog
  `THEMES` + liest/schreibt die Auswahl in **eigenem** localStorage-Key `qvr-theme` (NICHT im zustand-Store
  → **kein** Persist-Schema-Bump nötig). `main.tsx` setzt `data-theme` vor dem Render (kein Flackern).
  `ThemeSwitcher.tsx` (🎨-Dropdown in der Kopfleiste + Inline-Variante im mobilen Menü). **Wichtig:**
  `gold`/`parchment` bleiben statisch (themeübergreifend); die zwei Builder-Inlinefarben in MapGrid nutzen
  jetzt `rgb(var(--c-dungeon-…))` und folgen dem Theme. `theme()`-Aufrufe in index.css für dungeon-Farben
  durch `rgb(var(--c-dungeon-…))` ersetzt (sonst ungültiges CSS mit `<alpha-value>`-Platzhalter). Neue
  Themes = nur ein Eintrag in `THEMES` + ein `[data-theme=…]`-Block.
- **Session-Tracker (1.4.0):** eigener zustand-Store `src/store/useSessionStore.ts` mit **eigenem**
  localStorage-Key `qvr-sessions` (dritter Eigen-Key neben `qvr-theme`/`qvr-builder-draft`), bewusst
  GETRENNT von `useGameStore` (Key `quest-vault-reborn`) — so bleibt dessen Persist-Schema (Quests +
  Sammlung) unangetastet. Eigene `PERSIST_VERSION`/`migrate`/`merge` + `sanitizeSessionList`. Der
  **aktuelle Spielstand** (XP/Gold/besessene Karten & Gegenstände) wird NICHT als Saldo gespeichert,
  sondern per reiner Funktion `deriveLiveState(session)` (`src/store/sessionDerive.ts`) aus Setup +
  Szenario-Protokoll GEFALTET → Add/Update/Remove eines Szenarios sind einfache Array-Ops, Doppelzählen
  ist strukturell unmöglich (Dangling-Sell-Guard: Verkauf ohne existierende Instanz zählt nicht). Typen in
  `src/types/session.ts`; Item-/Skill-/Karten-Besitz sind reine ID-Referenzen in die statischen Daten
  (Auflösung + sanfter Fallback in `src/components/session/sessionHelpers.ts`). JSON-Export/Import über
  `src/utils/sessionImport.ts` (Whitelist-Rebuild wie `questImport.ts`; beim Import nur die Top-Level-ID
  neu, alle inneren Referenz-IDs bleiben erhalten → verlustfreier Round-Trip). UI: `SessionsPage` (Liste ↔
  Detail, Tabs Setup/Helden/Overlord) + `src/components/session/*`. Overlord-Karten-IDs werden als
  `deckId:cardId` geführt (Karten-IDs sind nur je Deck eindeutig).
- **Datenspeicherung:** localStorage via zustand persist (bis v2.0)
- **Assets:** any2cards/d2e PNG-Tiles (Community, FFG IP Grauzone)
- **Hosting:** GitHub Pages (deploy.yml vorhanden)
- **Routing:** BrowserRouter mit `basename="/quest-vault-reborn"` + `404.html`-SPA-Fallback
  (postbuild kopiert index.html → 404.html für GitHub-Pages-Deep-Links)
- **iPad primär:** Ab v1.2 alle Features auf iPad Portrait/Landscape verifizieren

---

## Interne Projektstrategie (nicht für README/öffentliche Docs)

### Monetarisierung & Ko-Fi
- **Ko-Fi Spendenbutton** in die App einbauen (dezent, Fußzeile) — geplant für nach v1.2
- **Rechtliche Einschätzung Premium-Features:** Da FFG-IP-Material (Karten-Scans, Regeltext)
  verwendet wird (Grauzone), ist ein kommerzielles Modell mit Bezahl-Features rechtlich
  riskant. Empfehlung: Ko-Fi als freiwillige Spende (wie andere Community-Tools) anstatt
  Bezahl-Schranken. Das hält das rechtliche Risiko minimal.
- **Premium-DB-Sync (v2.0):** Evaluieren ob ein optionales Konto + Sync-Feature mit
  eigenem Backend als "Dienstleistung" (nicht als Spielinhalt) rechtlich sauber ist.
  Dies ist inhaltlich von den FFG-Daten trennbar.

### Daten-Validierungsstrategie
- Alle Spielwerte müssen gegen offizielle Karten-Scans validiert werden
- Quelle: any2cards/d2e ist gut, aber nicht immer 100% korrekt
- BGG und Fandom Wiki als Kreuzreferenz nutzen
- Beim Validieren: Datum und "✅ validiert" in der .md-Datei vermerken

---

## Recherche-Ergebnisse (Kurzfassung)

### Original Quest Vault
- **Betreiber:** Fantasy Flight Games (offiziell)
- **Zeitraum:** Jan 2013 – Jan 2020 (Shutdown)
- **Kern-Features:** Quest-Editor, Map Builder, Encounter-Editor, PDF-Export, Community-Bibliothek

### Community-Alternativen
- **descent-quest-builder** (Lorenzo Balducci): Einziger ernst zu nehmender Nachbau, kein Sharing
- **any2cards/d2e**: Beste strukturierte Datenbasis (JSON + PNG aller Karten/Tiles) — unser Haupt-Asset
- Kein vollständiger moderner Ersatz vorhanden → Marktlücke dieses Projekts

---

## Offene Entscheidungen

| Entscheidung | Status |
|---|---|
| FFG IP-Rechte langfristig | Offen — Community-Grauzone aktuell akzeptiert |
| Backend-Technologie (v2.0) | Offen — Supabase / Firebase / eigenes VPS |
| Monetarisierung | Evaluieren — Ko-Fi bevorzugt, Premium-DB-Sync evaluieren |
| B-Seiten-Connectoren visuell verifizieren | Offen |
