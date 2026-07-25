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

## Aktuelle Version: 1.6.12 (2026-07-25)

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
| v1.4.0 | ✅ Abgeschlossen | **Session-Tracker (Kampagnen-Spielstand) – Phase 1 (Setup).** Benannte Session je Kampagne; Helden-Setup (Spieler, Klasse, Start-Fähigkeiten, Startausrüstung + Begleiter – automatisch aus der Klasse vorbelegt); Overlord-Setup (Decks + besessene Karten, Leutnant→Plotdeck + Plotkarten, aktive Gerüchte, Relikte, Start-XP); JSON-Export/Import (verlustfreier Round-Trip). Eigener zustand-Store `useSessionStore` (localStorage-Key `qvr-sessions`, GETRENNT von `useGameStore`); Live-Stand (XP/Gold/Besitz) wird aus Setup + Szenario-Log ABGELEITET (`deriveLiveState`, reine Funktion → keine Doppelzählung). Neue Route `/session` + Nav/HomePage-Kachel + Sessions-Zähler. Tests: `sessionDerive` (Reverse-/Dangling-Sell-Invarianten) + `sessionImport` (Round-Trip, inner-ID-Erhalt). **Dieser Tracker ersetzt den früheren v1.5.0-„Kampagnen-Speicherstand" und subsumiert großteils die alte v1.6.0-„Overlord-Kommandozentrale".** |
| v1.5.0 | ✅ Abgeschlossen | **Session-Tracker – Phase 2 (Szenario-Protokoll).** Neuer Tab „Szenarien": je gespieltem Szenario Belohnungen (pro Held XP, Overlord-XP, Partei-Gold, erhaltene Items/Relikte/Overlord-Belohnungskarten) + Einkauf (kaufen/verkaufen inkl. Startausrüstung, gelernte Fähigkeiten, gekaufte Overlord-Karten). **Belohnungen werden automatisch + reversibel angerechnet** — allein über `deriveLiveState` (kein neuer Anrechnungscode; Szenario löschen macht die Belohnungen exakt rückgängig). Szenario-Wahl aus kuratierter Titel-Liste je Kampagne (`src/data/campaignScenarios.ts`, **108 Szenarien / alle 9 Kampagnen**, NUR Titel + Akt = faktische Metadaten; `titleDe` aus den offiziellen deutschen Questbüchern des `scans-transfer`-Release, `titleEn` aus GitHub-Community-DBs) ODER Nebenquest/Gerücht/Freitext. Schema + Sanitizer + `deriveLiveState` waren schon in v1.4.0 komplett → **kein Persist-Bump**. Neue Komponenten `ScenariosTab`/`ScenarioEditor` + geteilter `ItemPicker` (aus HeroesTab herausgelöst). Datenintegritäts-Tests inkl. **IP-Shape-Guard** (nur erlaubte Felder). Wissensbasis `docs/game-data/campaign-scenarios.md`. |
| v1.5.1 | ✅ Abgeschlossen | **Session-Tracker – Feinschliff, Marker & Korrekturen.** (1) Held „Stahlhörner"→**„Stahlhorn"** (nur `name`, `id` bleibt). (2) Neues optionales Feld **`CampaignScenario.role`** (`intro`/`interlude`/`finale`) — feste Szenarien werden im Szenario-Editor als **„★ Feste Szenarien"**-Optgroup + Badge hervorgehoben (Tagging-Logik + Bilehall/Ketten-Sonderfall in `campaignScenarios.ts`/`campaign-scenarios.md`; IP-Shape-Guard auf 6 Felder erweitert). (3) **Bedrohungsmarker** (Overlord) + **gemeinsamer Schicksalsmarker** (Partei) als Live-Zähler → neue Felder `TrackedOverlord.threatTokens` + `CampaignSession.partyFateTokens`; Store-`PERSIST_VERSION` **1→2** (migrate defaultet sie); Anzeige in der Live-Leiste. (4) **Akt-abhängiger Einkauf:** `ItemPicker` `actFilter` (Akt 1 → nur Akt-1-Items; Zwischenspiel → Akt 1+2 getrennt; Akt 2 → nur Akt-2). (5) **Overlord-Mehrfach-Karten** (19 Karten `count:2`): Mengen-Stepper (0..count) in Setup + Kauf; `deriveLiveState.ownedCardCounts` (Multiset, `__proto__`-sicher via Map). (6) Gekaufte/erhaltene Items sofort sichtbar (funktionales `setDraft`); **„Partei-Pool"→„Gemeinsame Ausrüstung"** + Partei-Vorrat im Helden-Tab sichtbar. (7) Helden-Tab zeigt nur Besitz; Vollkatalog per Button. Tests: 118 grün (role-Value-Test + Mehrfach-Karten-Derive + Marker-Round-Trip). |
| v1.5.2 | ✅ Abgeschlossen | **Session-Tracker – Item-Bilder, XP-Stepper & Kartentext-Korrekturen.** (1) Gekaufte/erhaltene/verkaufte Gegenstände im Szenario-Editor + „Gemeinsame Ausrüstung" zeigen jetzt **Name prominent + deutsches Original-Kartenbild** (neue `ItemThumb`-Komponente in `session/ui.tsx` + `itemCardUrl()` in `sessionHelpers.ts`, nutzt `itemCardDeUrl`/`relicCardDeUrl`/`classItemDeUrl`; sanfter `onError`-Fallback). (2) Helden-XP + Overlord-XP als **`QtyStepper`** (+/−) statt Zahlenfeld; `QtyStepper` `label` optional. (3) **Vereinheitlichte Auswahl-Optik:** aktiver `QtyStepper` (Wert > 0) jetzt identisch zum aktiven `ChipToggle` (gold gefüllt). (4) **„Gemeinsame Ausrüstung"** im Helden-Tab: Partei-Items per Dropdown direkt einem Helden zuweisen (`onReassignItem` → `SessionsPage.reassignItemOwner`, mappt `grantedItems`/`bought` per `refId`). (5) **Drei Kartentext-Korrekturen** in `heroClasses.ts` + `de-karten/klassen.md`: Leichtfüssig (Waldläufer) „1 Herz"→**„1 Erschöpfung"** (EN „suffer 1 Fatigue"); Friedvolle Rast (Barde) „2 Erschöpfung"→**„2 Herzen"** (EN „recovers 2 Hearts"); Schnellfeuer (Kopfgeldjäger) „Wenn du dieses besiegst"→**„…nicht besiegst"** (EN „if you do not defeat"). Kein Schema-/Persist-Bump. Tests: 118 grün. |
| v1.5.3 | ✅ Abgeschlossen | **Session-Tracker – Gegenstände verschieben, Bild-Lightbox & Dropdown-Feinschliff.** (1) **Reassign/Entfernen:** einem Helden zugewiesene Szenario-Gegenstände (grantedItems/bought, nicht Startausrüstung) haben im Helden-Card jetzt ein „verschieben zu…"-Dropdown → **↩ Gemeinsame Ausrüstung** (`onReassign(refId, null)`) oder **anderer Held** (`onReassign(refId, localId)`); nutzt den bestehenden `SessionsPage.reassignItemOwner` (mappt `grantedItems`/`bought` per `refId`, setzt `toHeroLocalId`). Startausrüstung behält das ×-Entfernen. Helden-Ausrüstungsliste von Pills auf vertikale Zeilen (Bild + Name + Steuerung) umgestellt. (2) **Bild-Lightbox:** `ItemThumb` (`session/ui.tsx`) ist jetzt ein Button → Klick öffnet das deutsche Original-Kartenbild groß + lesbar in `ModalOverlay` (gleicher Stil wie ItemsPage-Lightbox: `bg-black/85`, `max-w-xs`, ✕/Escape/Klick-außen); wirkt überall, wo `ItemThumb` genutzt wird (Szenario-Editor grant/kauf/verkauf, Helden-Tab, Gemeinsame Ausrüstung). (3) **Dropdown-Lesbarkeit:** gemeinsame `REASSIGN_SELECT`-Klasse (`text-sm` + `[&>option]:text-sm` → geschlossenes Feld und aufgeklapptes Menü gleich groß; feste Breite `w-48`/`max-w-[55vw]`), Platzhalter gekürzt (kein em-Dash). Kein Schema-/Persist-Bump. |
| v1.6.0 | ✅ Abgeschlossen | **Design-System v2 – zwei umschaltbare Designs „Overlord" (dunkel/Blut, Standard) + „Heldentum" (hell/Gold).** Aus dem in „Claude DESIGN" ausgearbeiteten Design-System (`export/theme.css` + `tailwind.config.js` + README) übernommen. **Token-Architektur:** semantische Design-Tokens `--qv-*` (Flächen `bg`/`surface`/`surface-2`/`line`, Text `fg`/`muted`/`faint`, Akzent `accent`(+`.deep`/`.bright`/`.soft`/`.line`), `onaccent` = `--qv-btn-text`, Status `success`/`info`/`warning`/`danger`, Radien `card`/`control`/`chip`/`pill`, Schatten `btn`/`panel`, Ambient-Animationen `ember`/`mote`/`fog`/`breathe`/`sweep`) in `src/theme.css` je `data-theme`. **Migrationsstrategie (Brücke statt Massen-Umschreibung):** die bestehenden Tailwind-Skalen `dungeon`/`gold`/`gray` sind jetzt **variablen-getrieben** (`rgb(var(--c-…) / <alpha-value>)`) und pro Theme in `theme.css` eingefärbt → das komplette Bestands-UI (≈900 Klassenvorkommen in 37 Dateien) färbt sich beim Theme-Wechsel automatisch live um, ohne jede Komponente umzuschreiben. `gold` = Akzent-TEXT/Rahmen (helle Rottöne Overlord / lesbare Dunkelgoldtöne Heldentum); `gray` = neutraler Text (Overlord hell→dunkel, Heldentum invertiert dunkel→hell); `dungeon` = Flächen-Elevation (dunkle bzw. Pergament-Rampe). **Konflikt „dunkler Text auf Akzent" gelöst:** alle `bg-gold-*`-FÜLLUNGEN → semantisches `bg-accent`(/`-deep`/`-soft`), alle `text-dungeon-9xx`/`text-gray-900` (Text auf Gold) → `text-onaccent` (hell auf Rot / dunkel auf Gold, flippt korrekt je Theme). **Schriften** (self-hosted @fontsource, offline/PWA): Overlord = Pirata One (Display) + Cormorant Garamond (Text), Heldentum = Cinzel (Display) + EB Garamond (Text), Mono = IBM Plex Mono; `font-display`/`font-head`/`font-body`/`font-sans` via `--qv-font-*`. Inter entfernt. **Theme-Verwaltung:** `src/theme.ts` `THEMES` = overlord/heldentum (Standard overlord), Auswahl in eigenem `qvr-theme`-localStorage-Key (KEIN Persist-Bump; alte ids `dungeon`/`arcane`/`slate` fallen sauber auf overlord zurück); `ThemeSwitcher` unverändert. **ErrataBox + Monster-Errata-Panel** auf theme-aware Tokens (`accent-soft`/`gold`/`success`) umgestellt (waren als amber/emerald-Tint+Hell-Text im Hellmodus zu kontrastarm). **In beiden Themes per Playwright (echter Build) auf Home/Helden/Items/Overlord/Klassen/Session/Klarstellungen verifiziert.** Tests 118 grün. |
| v1.6.1 | ✅ Abgeschlossen | **Design-System-Seite (System-Doku) – lebender Styleguide.** Aus dem Claude-Design-Projekt „Quest Vault Designsystem" (via `DesignSync`/claude_design MCP importiert) die Datei `Quest Vault System-Doku.dc.html` als App-Seite umgesetzt: neue Route `/designsystem` (`src/pages/DesignSystemPage.tsx`) + Nav-Eintrag „🎨 Design-System" im „📚 Daten"-Dropdown. Zeigt das komplette visuelle System in 12 Abschnitten (01 Farben, 02 Typografie, 03 Buttons, 04 Badges & Tabs, 05 Karte & Fortschritt, 06 Dialog, 07 Bewegung & Effekte, 08 Zustände & Marker, 09 Abstände & Raster, 10 Formulare & Eingaben, 11 Toasts, 12 Tabellen) + Hero/Umschalter/Fußzeile. **Baut auf den ECHTEN Tokens** der App (`bg`/`surface`/`accent`/`onaccent`/`font-*`/`rounded-*`/`animate-*`) → folgt live dem aktiven Theme; ein Umschalter auf der Seite schreibt das globale `data-theme` (wie der 🎨-Schalter, via `setStoredTheme`), ein `MutationObserver` auf `data-theme` hält die theme-abhängigen Texte/Partikel synchron. **Ambient-Effekte** (Ember/Mote-Partikel via `qv-ember`/`qv-mote`, atmende Vignette via `qv-breathe`) je Theme; `motion-reduce` respektiert. **Keine erfundenen Spielwerte:** Tabelle + Monsterkarte nutzen echte `MONSTERS`-Daten (Goblin-Bogenschütze/Ettin/Merriod/Schattendrache); Zustands-/Status-/Würfelfarben sind bewusst theme-unabhängig (feste semantische Hex). In beiden Themes per Playwright verifiziert (inkl. Live-Umschalten). Tests 118 grün. |
| v1.6.2 | ✅ Abgeschlossen | **Dashboard „1a" + Sidebar-Shell (UI/UX-Redesign).** Aus dem Design-Handoff „Dashboard_UIUX_Redesign" umgesetzt: die bisherige obere Navbar wird durch eine **feste Seitenleisten-Kommandozentrale** ersetzt, die Emoji-Kachel-Startseite durch ein echtes **Arbeits-Dashboard**. **`src/components/Layout.tsx` (ersetzt):** App-Shell `h-screen flex` mit fester **Sidebar 238 px** (`bg-surface-2`, Marke „Quest Vault/REBORN", Gruppen WERKZEUGE/BIBLIOTHEK, aktive Nav mit Akzentbalken, Sammlung-Karte + `ThemeSwitcher variant="inline"` unten) + **Topbar 74 px** (Such-Optik, Sammlung-Pill, `ThemeSwitcher`) + scrollendem `<main>`; auf `<md` klappt die Sidebar als **Off-Canvas-Drawer** (264 px, `bg-black/60`-Overlay) über den Hamburger. FFG-Attribution (vorher Footer) in den Sidebar-Fuß übernommen. **`src/pages/HomePage.tsx` (ersetzt):** Dashboard mit „Weiter im Spiel" (aus `useSessionStore` + `deriveLiveState`: `session.name`, `currentScenario.scenario.title`, Akt, Helden-Avatare, BEDROHUNG/GOLD/SCHICKSAL; Empty-State „Session starten"), „Monster des Tages" (deterministisch aus `MONSTERS` via `Date.now()`, echte Werte, `daily.normal?`-guarded für Typsicherheit), „Zuletzt bearbeitet" (`useGameStore.quests`, Empty-State), „Schnellstart", „Bibliothek & Referenz"-Grid, dezente Roadmap-Leiste mit `ReleaseNotesModal`. **`src/components/QvIcons.tsx` (neu):** schlanke geometrische Inline-SVG-Icons (`currentColor`, keine Emoji/Icon-Lib). **`src/App.tsx`:** neuer `PagePadding`-Layout-Route-Wrapper (`mx-auto max-w-7xl px-4 py-6`) um ALLE Nicht-Dashboard-Routen → die 18 Bestandsseiten behalten ihr gepolstertes Layout (das Dashboard ist bewusst full-bleed). Routen/Stores/`ThemeSwitcher`/Persist-Schema unverändert. Nutzt ausschließlich vorhandene Tokens → beide Themes automatisch. In beiden Themes + mobil (Drawer) per Playwright verifiziert; Bestandsseiten (Monster) unbeschädigt. Tests 118 grün. Offen (Handoff „Nächste Schritte", optional): Monster-/Helden-Seiten im selben 1a-Split-Stil (Karten-Grid + 352-px-Detail-Panel) nachziehen. |
| v1.6.3 | ✅ Abgeschlossen | **Dashboard-Feinschliff: Atmosphäre-Effekte + „+ Neue Quest".** Das v1.6.2-Handoff-Implementierungsfile hatte die in der README (Abschnitt „Interactions & Behavior") geforderten **Hintergrund-Effekte ausgelassen** (User-Befund: „sieht nicht so aus wie der Screenshot, Effekte fehlen"). Nachgezogen aus dem Prototyp `Quest Vault 1a Prototyp.dc.html`: **`Atmosphere`-Ebene in `Layout.tsx`** – absolute `z-0`-Schicht hinter Kopfzeile/Inhalt im Hauptbereich mit aufsteigenden Partikeln je Theme (Overlord = 24 Blut-Ember `#e0552b` via `qv-ember`, Heldentum = 22 Gold-Motes `#ecc879` via `qv-mote`; Größe/Dauer/Delay randomisiert wie im Prototyp) + atmender Akzent-Vignette am Unterrand (`qv-breathe 7s`, `radial-gradient(var(--qv-accent-soft))`). Header (`z-10`, opakes `bg-bg`) + `<main>` (`z-[1]`) liegen darüber; `motion-reduce:hidden`. Aktives Theme via `MutationObserver` auf `data-theme` (`useActiveTheme`-Hook). **`+ Neue Quest`-Primärbutton** (`bg-btn-primary`/`text-onaccent`/`shadow-btn`, → `/quest`) in die Topbar ergänzt (war im Handoff-File nicht enthalten). **Akzent-Radialglow** auf dem „Weiter im Spiel"-Panel (`HomePage.tsx`) wie im Prototyp. Beide Themes per Playwright verifiziert. Tests 118 grün. **Hinweis:** „Weiter im Spiel" zeigt ohne aktive Session bewusst den Empty-State (der Screenshot ist ein Mock mit Kampagnen-Beispieldaten); mit echter Session füllt sich das Panel. |
| v1.6.4 | ✅ Abgeschlossen | **Standard-Theme „Heldentum" (hell) + aufgeräumte Topbar (User-Wunsch).** `DEFAULT_THEME` in `src/theme.ts` von `overlord`→**`heldentum`** umgestellt; `index.html` `data-theme="heldentum"` + `theme-color` `#e9dcc0`. Bestandsnutzer mit gespeicherter Wahl behalten diese (`getStoredTheme` liest `qvr-theme`; kein Persist-Bump). **Topbar entschlackt:** der „Sammlung"-Pill und der 🎨-`ThemeSwitcher` (Dropdown) wurden aus der Kopfzeile entfernt (nur noch „+ Neue Quest" rechts). **Funktion bleibt erhalten** – die **Sidebar** hat weiterhin die „Sammlung"-Karte + den DESIGN-Umschalter (`ThemeSwitcher variant="inline"`), auf Mobil über den Drawer. `SammlungBadge`-Helfer (nur in der Topbar genutzt) entfernt; `ThemeSwitcher`-Import bleibt (Sidebar). Beide Themes/Default per Playwright verifiziert (frischer localStorage → heldentum). Tests 118 grün. |
| v1.6.5 | ✅ Abgeschlossen | **Scan-Materialien gesichert (Release löschbar) + Kartentext-Priorität + globale Regelsuche.** Aus dem `scans-transfer`-Release den **gesamten Zip-Inhalt außer den 13 Regelbuch-PDFs** als optimierte Einzelbilder ins Repo gesichert (damit der Release löschbar wird): 7 bislang offene Kartendecks (Such/Geheimkammer/Befleckt/Korrumpiert/Vertraute/Gefährten/Aktivierung – 63 Karten, inhaltlich IP-sicher in `docs/game-data/de-karten/weitere-decks.md` transkribiert), 40 Agenten-Bilder, 60 Plotdeck-Bilder, 62 Marker, 16 Symbole. **Neue verbindliche Regel „Kartentext = priorisierte Wahrheit"** (CLAUDE.md-Schutzregeln + `wiki/concepts/card-text-priority.md`): deutscher Text von der deutschen Karte, keine Rate-Übersetzungen; Diskrepanz → immer zur Karte korrigieren; EN-Karte im UI → deutsche suchen. Direkt angewandt: **6 Plotdecks (Handlungskarten) kartengenau korrigiert** – `plotDecks.ts` 5 Deck-Namen + 44 Karten-`nameDe` + 60 `rulesDe` an die deutschen Originalkarten angeglichen (z. B. „Stärke in der Zahl"→**Zahlenmässige Überlegenheit**, Deck „Saat des Verrats"→**Saat der Zwietracht**), DE-Bilder + `plotCardDeUrl`/`agentCardDeUrl`; PlotDecks-/Agenten-Seite zeigen jetzt das deutsche Bild mit EN-Fallback. **Neue globale Regelsuche `/suche`** (`RulesSearchPage` + `rulesSearchIndex.ts`): ein Feld durchsucht 1.589 Einträge (CRRG-Regelklärungen + Errata/FAQ + `/regeln`-Referenz + alle funktionalen Karten-/Fähigkeitstexte), Kategorie-Filter + Deep-Links – nur bereits vorhandene, IP-sichere Inhalte, kein wörtlicher FFG-Regelheft-/Questbuchtext. Operatives Byte-Range-Pull-Rezept + Provenienz in `docs/game-data/scan-sources.md`. Tests 122 grün; `daten-pruefer`/`sicherheits-pruefer` FREIGABE; im echten Build per Playwright verifiziert. |
| v1.6.6 | ✅ Abgeschlossen | **Topbar-Live-Fuzzysuche mit Vorschau-Dropdown.** Das bislang dekorative Suchfeld in der Kopfzeile (`Layout.tsx`) ist jetzt funktional (`src/components/GlobalSearch.tsx`): Live-Vorschau-Dropdown beim Tippen (Top-8-Treffer quer über den globalen Suchindex aus v1.6.5), Tastatur-Navigation (↑/↓/Enter/Esc), Outside-Click-Close, „Alle N Treffer anzeigen" → `/suche?q=`. **Fuzzy-Ranking** neu in `rulesSearchIndex.ts` (`searchEntries(query, limit)` + `normalizeSearch`): Substring-/Wortanfang-Treffer schlagen Fuzzy-Subsequenz, Titel doppelt gewichtet; **Umlaut-Expansion** (ä→ae/ö→oe/ü→ue) + ß→ss → trifft Umlaut-, ae- und umlautlose Eingaben (z. B. „staerke"/„starke"/„Stärke"). `RulesSearchPage` nutzt jetzt dieselbe `searchEntries`-Engine + liest `?q=` aus der URL. Rein In-Memory, keine neuen Inhalte/Dependencies. `sicherheits-pruefer` FREIGABE (XSS-/ReDoS-sicher, encodierte Query, interne Routen, Listener-Cleanup). 122 Tests + Build grün; im echten Build per Playwright in beiden Themes verifiziert (Dropdown, Fuzzy „zahlenmassige/ueberlegenheit/staerke", Alle-Treffer→`/suche?q=`, keine Konsolenfehler). |
| v1.6.7 | ✅ Abgeschlossen | **Sofortsuche auch im Mobil-Modus.** Die Topbar-Suche (v1.6.6) war per `hidden sm:block` unter `sm` komplett ausgeblendet (User-Befund: „mobil keine Suchleiste"). Lösung ohne Doppel-Logik: `GlobalSearch` bekommt optionale Props `fullWidth`/`autoFocus`/`onClose`; in `Layout.tsx` öffnet ein **Such-Icon-Button** (`sm:hidden`, neben Hamburger) ein **vollbreites Top-Sheet-Overlay** (`z-[60]`, Backdrop `bg-black/60`) mit `<GlobalSearch fullWidth autoFocus onClose … />` + Schließen-Button. Overlay schließt bei Treffer-Auswahl/Navigation (`onClose`), Backdrop-Klick, Escape und Routenwechsel (`useEffect` auf `location.pathname`). Desktop-Variante unverändert. Design-konform (Tokens `bg-bg`/`surface`/`accent`, `shadow-panel`), touch-freundlich (40 px Ziele). `sicherheits-pruefer` FREIGABE; 122 Tests + Build grün; im echten Build im mobilen Viewport (390×844) per Playwright verifiziert (Icon→Overlay→Autofokus→Tippen→Treffer→navigiert+schließt, keine Konsolenfehler). |
| v1.6.8 | ✅ Abgeschlossen | **Kartentext-Treue-Pass + Zwei-Druckauflagen-Klärung.** User-Frage: Stehen im Haupttext Errata-Fassungen statt der Original-Kartentexte? **Klärung (vom User bestätigt):** Von manchen Descent-2e-Karten existieren **zwei physische Druckauflagen** — ein **Erstdruck** (Original-Text) und ein **späterer Nachdruck**, der die **offiziellen FFG-Errata direkt auf die Karte** übernahm. Die vorliegenden DE-Scans (`public/cards/de/**`) sind bei einigen Karten der **Errata-Nachdruck**. Da **Kartentext = höchste Priorität** (der Scan, der uns vorliegt), folgen die Daten korrekt dem Scan — auch wenn dieser die Errata-Fassung zeigt. **Das ist KEIN Overwrite-Bug, sondern gewollt** (die abgebildete Karte sagt genau das). Belegt an **Schattendrache**: der Scan `shadow-dragon-act1-back.webp` druckt „Sobald ein Held, der benachbart …" (= Errata-Nachdruck); der User besitzt AUCH ein Erstdruck-Exemplar mit „Wenn ein Held dieses Monster von einem Nachbarfeld aus angreift …". **User-Vorgabe: Scan-Text behalten** (höchste Prio) → Schattendrache/Schatten bleibt „Sobald ein Held …". Meine Rückseiten-Lesungen waren also korrekt; die zwischenzeitliche „Overwrite-Korrektur" war der eigentliche Irrtum und ist zurückgenommen. **Monster mit Errata-Nachdruck-Text (Rückseite == Errata-Fassung):** nur **Schattendrache/Schatten** + **Goblin-Schamane/Verzaubern** (alle übrigen Monster-Text-Errata halten den Erstdruck, z. B. Krähenhexe/Todesomen, Riese/Troll „alle anderen Figuren", Elementar/Luft; Wechselbalg „(mindestens 1)" ≠ Errata). Liste + Hintergrund in `de-karten/monster.md` („Zwei Druckversionen"). **Zusätzlich (v1.6.8): 18 gegen die Scans verifizierte Abschreibfehler** korrigiert (Kartentext = priorisierte Wahrheit) — 3 Overlord-Fallen „Wahrnehmung"→**„Gespür"**, Unterweltdrache+Dunkler Priester „Schreckenerregend/wendet -1 an"→**„Grauenerregend/verringert um 1"**, Plotkarte Bezaubern `[Geistesgegenwart]`→**`[Willenskraft]`**, Schattendrache/Feuerodem überzähliges „(inklusive Zielfeld)" entfernt (Halbdrachenkrieger behält es — dessen Scan druckt es), 5 Helden-Heldentaten (Lindel/Raythen/Roganna/Okaluk/Stahlhorn), Untoter Schädel, Harpyie/Pulk, Höllenkoloss/Sturmangriff, Windarmbänder/„sich", Zeichen des letzten Zenits/„sofort", Beastman/Kommando „darf"→„kann". Errata bleibt durchgehend additiv (ErrataBox). Docs synchron. 122 Tests + Build grün. **LEHRE:** DE-Scans können Errata-Nachdrucke sein → „Original vs. Errata" ergibt sich aus Scan↔Errata-Vergleich + dem Wissen um zwei Druckauflagen; die Daten folgen bewusst dem Scan (höchste Prio), es wird NICHT auf einen Erstdruck „zurückkorrigiert". |
| v1.6.9 | ✅ Abgeschlossen | **Deutsche Klassen-Fertigkeitskarten (Bilder) + kartengetreue Namen.** User-Wunsch: Klassen-Skill-Kartenbilder integrieren (Quelle: `scans-transfer`-Release). **267 deutsche Fertigkeits-Kartenbilder** aus dem Descent-Scan-Zip extrahiert (`Klassenkarten 1..4.jpg`, 10×7-Raster à 475×740 + Einzel-PNGs `Klasse {Elementarmagier,Seelenschnitter,8 Hybriden} N.png`; Byte-Range-Pull, Zell-Schnitt, webp ≤150 KB) → `public/cards/de/classes/skills/<classId>-<skillId>.webp`. **Zuordnung Bild→Fertigkeit über Regeltext-Ähnlichkeit** (die Kartentitel weichen teils von den Daten-Namen ab), je 310 Karten per Multi-Agent-Workflow transkribiert (Titel/Klasse/Regeltext/Typ), greedy 1:1 gematcht mit Sim-Floor 0.70; Randfälle am Kartenbild verifiziert. **`classSkillDeUrl()` in assetUrls; `SkillRow` (ClassesPage) zeigt jetzt DE-Bild (Vorschau + Lightbox) mit EN-any2cards-Fallback.** **11 Fertigkeitsnamen kartengetreu korrigiert** (Regeltext stimmte, Name war Community-Übersetzung): Berserker Ansturm→**Sturmangriff**, Verkrüppeln→**Verstümmeln**, Todeswut→**Todesrausch**, Hinrichten→**Todesstoss**, Waffenmeisterschaft→**Waffen-Beherrschung**; Schattenwandler Treuer Gefährte→**Treuer Freund**, Schattenpuppe→**Schatten-Marionette**, Schattenschritt→**Schattensprung**, Seelengebunden→**Seelenverwandt**; Schatzjäger Erkundung→**Auskundschaften**, „Wer findet, der behält"→**Finderlohn**. **3 Fertigkeiten ohne DE-Bild (Scan-Lücken, EN-Fallback):** Elementarmagier **Sturmeswut** + **Zorn der Natur** (der Scan enthält stattdessen Duplikate von „Himmel und Erde"/„Umarmung der Natur"), Bewahrer **Interdisziplinär** (Karte 1 nicht im Scan). Datenintegritäts-Test (jede Fertigkeit hat ein Bild außer den 3 dokumentierten Lücken, keine Waisen); Docs `klassen.md`/`scan-sources.md` synchron. 123 Tests + Build grün. |
| v1.6.10 | ✅ Abgeschlossen | **„Monster des Tages"-Dashboard-Widget komplett neu.** Das alte Startseiten-Widget (nur Name/Tempo/Leben/Angriff aus `daily.normal`) durch eine eigenständige Komponente `src/components/MonsterOfTheDay.tsx` ersetzt (`HomePage.tsx` rendert nur noch `<MonsterOfTheDay/>`; Reihe A auf `items-start`). Zeigt Kartenbild-Banner (`monsterCardDeUrl(id,1)`, `object-position:center 42%` → nur die Figur), Akt-I/II-Umschalter (Segmented; Akt II deaktiviert, falls keine Akt-II-Werte), volle **Diener-/Meister-Werte-Tabelle** (Tempo/Leben/Verteidigung/Angriff; Meister-Werte in `accent-bright`, Meister-Würfel mit Akzent-Glow), Gruppengröße, und **je Rang aufbereitete Fähigkeiten** (Fähigkeiten/Energie/Aktionen) mit Scope-Pills „Diener + Meister"/„nur Meister"/„nur Diener", unterschiedliche Stufen → getrennte Boxen (Testfall Naga „Hexerei 1"/„Hexerei 2"), Bonus-Energie („+N Herz/Reichweite") zuerst. **Akt-Diff-Pfeile ▲** an in Akt II stärkeren Werten (`title`-Tooltip, kein Layout-Sprung). **Neue Rotations-Logik** `src/utils/monsterOfDay.ts` (deterministische Shuffle-Bag statt stur-monoton `%`; gleichverteilt, kein Frühwiederholer – Naht-Fix konsistent auf die ganze Zyklus-Permutation angewandt) + reine Aufbereitung `src/utils/monsterAbilities.ts` (`aggregateAbilities`/`statsFor`). `TraitIcon`+`TRAIT_ICON_DATA` aus `MonstersPage.tsx` in `src/components/TraitIcon.tsx` herausgelöst (Optik unverändert, von beiden genutzt). **Deep-Links:** „Errata ansehen ›" an Fähigkeiten mit CRRG-Eintrag → `/klarstellungen?errata=<id>` (neuer Query-Deep-Link + Scroll/Highlight in `RulesClarificationsPage.tsx`; neue Lookup-Fn `getAbilityErrataByName` in `errataLinks.ts`); „Im Kompendium ansehen ›" → `/monster?q=<Name>` (MonstersPage liest `?q=`). Neuer CSS-Token `--qv-glow-accent` (aus der Akzentfarbe abgeleiteter Schatten) je Theme in `theme.css`. Vollständig `--qv-*`-getrieben → beide Themes automatisch. Tests: `monsterOfDay.test.ts` (Determinismus/Gleichverteilung/Mindestabstand + Naga-Fähigkeitsgruppierung) → 134 grün; Build grün; in overlord+heldentum + Akt I/II per Playwright verifiziert (Naga/Schattendrache/Eiswyrm, Deep-Links). |
| v1.6.11 | ✅ Abgeschlossen | **Descent-Icon-Set (User-Grafiken) + `GameIcon`-Komponente.** Vom User geliefertes, gerastertes WebP-Icon-Set (transparent) unter `public/game-icons/` eingebunden: **588 Dateien** = 22 Symbole (8 Kampf + 10 Monster-Merkmale + 4 Attribute) × 2 Themes × 2 Varianten (`mit-scheibe`/`ohne-hintergrund`) + 20 Menü-Icons × 2 Themes + 4 Archetypen × (2 Themes-Scheibe + klassenfarbig `ohne-hintergrund`) + 7 Würfel (theme-unabhängig), je 32/64/128/256 px; `manifest.json` maschinenlesbar dabei. **Neue Komponente `src/components/icons/GameIcon.tsx`:** diskriminierte Props-Union (`kind` symbol/menu/archetype/die → nur inventarisierte `name`-Werte, Unions + `*_NAMES`-Konstanten exportiert), Varianten `disc`/`plain`, DPR-abhängige Größenwahl, Pfade über `import.meta.env.BASE_URL` (GitHub-Pages-base! NICHT `/game-icons` hart), Theme folgt live `data-theme` per **einem geteilten MutationObserver** (`useSyncExternalStore`, nicht 1 Observer/Instanz), Override per `theme`-Prop. **Bewusst NICHT ersetzt:** `GameSymbols` (PSD-Kartentext-Symbole), `StatIcons`, `DiceSymbol`-3D-Cubes, `QvIcons`-Nav-Glyphen. **Ersetzt (flache Platzhalter):** `ArchetypeIcon` + `TraitIcon` delegieren jetzt an `GameIcon` (API unverändert, alle Aufrufstellen automatisch umgestellt; Mapping `spaeher`→`kundschafter`, Trait-DE-Namen→Icon-Namen, `TRAIT_SYMBOL` exportiert). PWA-Precache unverändert (webp nicht im Glob, wie Kartenbilder). Datenintegritäts-Test `gameIcons.test.ts` (Unions ↔ manifest.json ↔ 588 Dateien deckungsgleich via `import.meta.glob`; jedes Monster-Merkmal gemappt) → 138 Tests grün. In beiden Themes per Playwright im echten Build verifiziert (Helden-/Klassen-Archetyp-Filter, Monster-Merkmal-Chips; 0 Ladefehler). |
| v1.6.12 | ✅ Abgeschlossen | **Icon-Set-Ausrollung: Statzeilen + Attribute + größere Pill-Icons (User-Wunsch).** (a) **Pills:** Trait-/Archetyp-Icons in allen Filter-Chips/Merkmal-Pills deutlich größer (14→20 bzw. 13→18/15→20 px) mit **negativer Vertikal-Margin (`-my-1`)** → Icons füllen die Pill, Pill-Form/-Höhe unverändert (per Playwright gemessen: einheitlich 26 px). (b) **Statzeilen auf GameIcon:** `StatIcons.tsx` komplett auf Icon-Set-Embleme umgestellt — `HealthIcon`=leben, `StaminaIcon`=erschoepfung, NEU `SpeedIcon`=bewegung, `DefenseStatIcon`=verteidigung, `AttackTypeIcon`=nahkampf/fernkampf (ersetzt das generische Schwert-`AttackIcon`; die Angriffszeile der Monster zeigt die Angriffsart jetzt direkt im Zeilen-Icon, die 1.3.20-Suffix-Icons entfallen). **`MovementBadge`/`DefenseBadge`/`MeleeIcon`/`RangedIcon` aus GameSymbols entfernt** (alle Verwender umgestellt: MonstersPage, HeroesPage, LieutenantsPage, AgentsPage, MonsterOfTheDay). Die **flachen Kartentext-Symbole bleiben** (renderGameText, QuestEditor-Legende, /regeln; MOTD-BoostLine „+N Herz" behält HeartSymbol). (c) **Attribut-Icons:** Stärke=Faust/Wissen=Buch/Willenskraft=Sonne/Geistesgegenwart=Auge (`plain`-Variante, da Chips eigenen farbigen Hintergrund haben) in den Attribut-Chips von HeroesPage (Grid+Lightbox) + LieutenantsPage. (d) **Weitere Stellen:** ItemsPage Angriffsart-FilterChips + Item-/Relikt-Karten mit Nahkampf-/Fernkampf-Emblem (FilterChip um `icon`-Prop erweitert); Helden-Archetyp-Pills (Grid-Ecke + Lightbox-Header) mit `plain`-Klassenemblem (`ArchetypeIcon` um `variant`-Prop erweitert, `TraitIcon` um `className`); MOTD-Banner-Pill nutzt `plain`-Variante. Kein Schema-/Persist-Bump, keine Spieldaten geändert. 138 Tests + Build grün; beide Themes per Playwright im echten Build verifiziert (0 Ladefehler, Chip-Höhen konstant). |
| v1.7.0 | ⏳ Geplant | Monster-Tracker (Live-HP) – verschoben von 1.4.0 |
| v1.8.0 | ⏳ Geplant | Helden-Spieleransicht |
| v2.0.0 | ⏳ Zukunft | Backend-Migration + Sync (Major, User-Zustimmung nötig) |
| v2.1.0 | ⏳ Zukunft | Englische Lokalisierung |
| v2.2.0 | ⏳ Zukunft | Benutzerkonten, Cloud-Speicherung, Kampagnen-Sharing (User-Wunsch 2026-06-12) |

---

## Was ist in v1.0.0 enthalten

> Historische Momentaufnahme ins Wiki verschoben: `wiki/sessions/v1.0.0-baseline.md`.
> Der **aktuelle** Feature-/Datenstand steht in der Statustabelle oben (Version 1.6.4) und im übrigen Wiki.

---

## Bekannte Probleme & Verworfene Ansätze

> Die ausführlichen Darstellungen sind ins **Projekt-Wiki** (`wiki/`) übertragen
> (kompoundierendes Gedächtnis). Kurzverweise:

- **Map-Tile Connector-Rendering (GELÖST — nie umbauen):** `CONNECTOR_INSET_FRAC=0.269`
  + `maxWidth`/`maxHeight:none` → `wiki/concepts/connector-rendering.md`. Verbindliche
  Schutzregel: siehe „Schutzregeln".
- **Datenvorfall 2026-06-12 (fabrizierte Helden) + Anti-Halluzinations-Regeln** →
  `wiki/concepts/fabricated-data-incident.md`. Korrekte Zahlen: 60 Helden, 56
  Monstergruppen, 23 Erweiterungen, 225 Map-Tiles (autoritativ: `src/data/expansions.ts` +
  Datenintegritäts-Tests).
- **Kartenbild-Validierung (etabliertes Verfahren)** →
  `wiki/concepts/card-image-validation.md`.
- **any2cards-Strukturdaten (Goldgrube) + vertauschte `agents.js`-Quelldaten** →
  `wiki/sources/any2cards-d2e.md`.

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
│   │   └── digital-assets.md              ← Asset-Quellen (any2cards/d2e etc.)
│   ├── translations/
│   │   └── de-en-glossary.md              ← DE↔EN Begriffe
│   └── game-data/                         ← Vollständige Spielwerte-Datenbank
│       ├── expansions.md                  ← Alle Erweiterungen ✅
│       ├── monsters.md                    ← ~60 Monster mit Vollwerten ✅
│       ├── heroes.md                      ← ~68 Helden mit Vollwerten ✅
│       ├── hero-classes.md                ← Helden-Klassen ✅ (alle 24, v1.1.2)
│       ├── map-tiles.md                   ← 225 Tiles (204 Räume + 21 Verbinder) ✅
│       ├── items.md                       ← Item-Shop + Relikte ✅ (122 + 54, v1.1.3)
│       ├── overlord-classes.md            ← Overlord-Klassen + Karten ✅ VOLLSTÄNDIG (105, v1.1.15–17)
│       ├── lieutenants.md                 ← Leutnants/Hauptmänner ✅ VOLLSTÄNDIG (21/39, v1.1.18–19)
│       ├── travel-cards.md                ← Reisekarten ✅ (41, v1.1.31)
│       ├── campaigns.md                   ← Kampagnen-Überblick + Advanced Quests ✅ (v1.1.30)
│       ├── campaign-scenarios.md          ← Kuratierte Szenario-Titel je Kampagne ✅ (v1.5.0)
│       ├── overlays.md                    ← Overlay-Token ✅ (20, v1.3.13)
│       ├── scan-sources.md                ← Scan-Quellen: Release-Manifest + Pull-Rezept + Import-Status ✅
│       └── de-karten/
│           ├── helden.md / items.md / klassen.md / monster.md / rumors.md   ← DE-Karten-Transkriptionen (v1.3.x)
│           └── weitere-decks.md           ← Such/Geheimkammer/Befleckt/Korrumpiert/Vertraute/Gefährten/Aktivierung (2026-07-17, Doku-only)
├── wiki/                                  ← Projekt-Wiki (OKF-v0.1-Bundle) – kompoundierendes Gedächtnis, Gerüst seit 2026-07-17
│   ├── index.md                          ← Wurzel-Katalog (einziger Ort mit okf_version)
│   ├── log.md                            ← Chronologisches Wiki-Protokoll (neueste zuerst)
│   ├── schema.md                         ← Betriebsanleitung (Konzept-Typen, Frontmatter, Ingest/Query/Lint)
│   ├── entities/                         ← leerer Katalog: greifbare Projektbausteine
│   ├── concepts/                         ← leerer Katalog: abstraktes Wissen/Muster/Entscheidungen
│   ├── sources/                          ← leerer Katalog: Zusammenfassungen ingestierter Quellen
│   └── sessions/                         ← leerer Katalog: Session-Notizen (Kontext-Sicherung)
└── src/
    ├── data/
    │   ├── expansions.ts   ✅
    │   ├── monsters.ts     ✅ (Gruppengrößen vollständig)
    │   ├── heroes.ts       ✅
    │   ├── mapTiles.ts     ✅
    │   ├── heroClasses.ts  ✅
    │   ├── items.ts        ✅
    │   ├── overlordClasses.ts ✅ (Grundspiel; Erweiterungen offen)
    │   ├── lieutenants.ts  ✅ (Grundspiel; Erweiterungen offen)
    │   ├── campaigns.ts    ✅ (Kampagnen-Überblick + Advanced Quests – v1.1.30)
    │   ├── campaignScenarios.ts ✅ (kuratierte Szenario-Titel je Kampagne, 108 – v1.5.0)
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
    │   ├── session/        ← SetupTab, HeroesTab, OverlordTab, ScenariosTab, ItemPicker, ui, sessionHelpers (v1.4.0/1.5.0)
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

**Projekt-Wiki (seit 2026-07-17):** Unter `wiki/` liegt ein OKF-v0.1-konformes,
LLM-gepflegtes Knowledge Bundle als **kompoundierende Erinnerungs-/Synthese-Schicht**
(nach Karpathys „LLM-Wiki"-Konzept). Es ergänzt CLAUDE.md und `docs/`, ersetzt sie
nicht. Einstieg über `wiki/index.md`; Konventionen, Konzept-Typen und die
Ingest-/Query-/Lint-Workflows stehen in `wiki/schema.md`. Aktuell ein leeres Gerüst
(Kataloge `entities/`/`concepts/`/`sources/`/`sessions/` füllen sich beim ersten
Ingest). Die autoritativen Quellen bleiben CLAUDE.md, `docs/game-data/**` und
`src/**`; das Wiki **verweist** darauf (`resource`/`# Citations`), statt Werte zu
duplizieren.

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

- **Niemals** `CONNECTOR_INSET_FRAC` oder den maxWidth/maxHeight-Fix anfassen (Details: `wiki/concepts/connector-rendering.md`)
- **Niemals** Spieldaten erfinden — nur belegt aus Karten-Scans/any2cards/BGG übernehmen;
  im Zweifel als „Validierung ausstehend" markieren statt raten
- **Niemals** Persist-Schema ändern ohne `version`-Erhöhung + `migrate`-Schritt
  in `src/store/useGameStore.ts` (sonst Datenverlust bei Bestandsnutzern)
- Importierte Fremddaten (JSON-Import) laufen IMMER durch `src/utils/questImport.ts`
- **Kartentext = priorisierte Wahrheit (User-Vorgabe 2026-07-17, verbindlich):** Der Text
  auf dem **Original-Kartenbild** ist die maßgebliche Quelle — **deutscher** Text von der
  **deutschen** Karte, **englischer** von der **englischen**. Geratene/Community-Übersetzungen
  sind zu **vermeiden** und nur zulässig, wenn nachweislich **kein** deutsches Kartenbild
  existiert. Fällt eine **Diskrepanz** zwischen dokumentiertem/Daten-Text (`src/data/**`,
  `docs/**`) und dem Kartentext auf, wird **immer zum Kartentext hin korrigiert** (priorisiert,
  nicht aufgeschoben). Wird im UI eine **englische** Karte angezeigt/genutzt, ist die
  **deutsche** zu suchen — alle aus dem `scans-transfer`-Release importierten Karten sollten
  auffindbar sein (Pull-Rezept: `docs/game-data/scan-sources.md`). Details/Herkunft:
  `wiki/concepts/card-text-priority.md`.

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
| react-router-dom | Routing (BrowserRouter mit `basename` + 404.html-SPA-Fallback für GitHub Pages) |
| @dnd-kit/core | Drag-and-Drop im MapBuilder |
| vite-plugin-pwa | PWA / Service Worker |
| @fontsource (Cinzel, EB Garamond, Cormorant Garamond, Pirata One, IBM Plex Mono) | Self-hosted Fonts (offline, kein CDN) – Design-System v2 (v1.6.0); Schrift folgt dem aktiven Theme über `--qv-font-*` |
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

> Ausführlich im **Projekt-Wiki** (`wiki/`). Kurzverweise:

- **Tile-Connector-Rendering** (`CONNECTOR_INSET_FRAC=0.269`, `maxWidth:none`) →
  `wiki/concepts/connector-rendering.md` (+ „Schutzregeln").
- **Kartensymbole / GameSymbols + renderGameText** → `wiki/entities/game-symbols.md`.
- **Geteilte UI-Bausteine** (StatIcons/ModalOverlay/Filters/ConfirmDialog/assetUrls) →
  `wiki/concepts/shared-ui-building-blocks.md`.
- **Leutnant↔Plotdeck-Deep-Links** (wiederverwendbares Muster) →
  `wiki/concepts/deep-linking-pattern.md`.
- **MapBuilder-Overlays** (16 Token) → `wiki/concepts/mapbuilder-overlays.md`.
- **Theming & Design-System v2** (Overlord/Heldentum) →
  `wiki/concepts/theming-and-design-system.md`.
- **Session-Tracker** (Architektur) → `wiki/entities/session-tracker.md`.
- **Datenspeicherung / Assets / Hosting / Routing / iPad** →
  `wiki/concepts/runtime-and-deployment.md`.

---

## Interne Projektstrategie (nicht für README/öffentliche Docs)

> Übertragen ins Wiki: `wiki/concepts/internal-strategy.md` (⚠️ intern —
> Monetarisierung/Ko-Fi, Rechtslage, Daten-Validierungsstrategie). **Nicht** in Release
> Notes oder öffentliche Docs übernehmen.

---

## Recherche-Ergebnisse (Kurzfassung)

> Übertragen ins Wiki: `wiki/sources/quest-vault-context.md` (Original Quest Vault +
> Community-Alternativen). Die ausführliche Recherche bleibt in `docs/research/**`.

---

## Offene Entscheidungen

> Übertragen ins Wiki: `wiki/concepts/open-decisions.md`. Architektur-Entscheidungen
> (ADR): `docs/architecture/decisions.md`.
