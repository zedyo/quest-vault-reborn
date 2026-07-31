# Quest Vault Reborn

**Community-Tool für Descent – Die Reise ins Dunkel 2. Edition**

Neuaufbau des eingestellten offiziellen Quest Vault von Fantasy Flight Games
(original: www.DescentQuestVault.com, abgeschaltet 2020).

🌐 **Direkt im Browser nutzen:** https://zedyo.github.io/quest-vault-reborn/

---

## Was kann die App?

### v1.0 – verfügbar jetzt

| Feature | Beschreibung |
|---------|-------------|
| 🗺️ **Kartenbauer** | Spielplan-Plättchen aus der eigenen Sammlung per Drag & Drop platzieren und drehen. Tiles greifen über Puzzle-Connectoren korrekt ineinander. |
| 📜 **Quest-Editor** | Quests mit Begegnungen, Siegbedingungen, Monstern und Erzähltext erstellen und speichern. |
| 👹 **Monster** | Alle Monstergruppen aller Erweiterungen auf einen Blick — mit vollständigen Spielwerten (Akt 1 + Akt 2, Normal + Meister). |
| 🧙 **Helden** | Alle Helden mit Attributen, Heldenfähigkeit und Heldentat, filterbar nach Erweiterung und Archetyp. |
| 👜 **Meine Sammlung** | Welche Erweiterungen besitze ich? Alle Werkzeuge passen sich automatisch an. |
| 💾 **Speichern/Laden** | Quests und Einstellungen werden automatisch im Browser gespeichert (localStorage). |
| 📤 **Export/Import** | Quests als JSON-Datei exportieren und auf anderen Geräten importieren. |
| 🖨️ **Druckansicht** | Quest-Karten druckfertig ausgeben. |
| 📱 **PWA** | App kann offline genutzt werden (als PWA installierbar). |

### Unterstützte Erweiterungen

Grundspiel · Die Höhle des Lindwurms · Labyrinth des Verderbens · Die Trollsümpfe ·
Schatten von Nerekhall · Schloss Rabenfels · Nebel von Bilehall · Rostende Ketten ·
Schwur der Verbannten · Krone des Schicksals · Kreuzzug der Vergessenen ·
Wächter von Deephall · Prophezeiung eines neuen Anfangs · Erwachen der Wildnis ·
Kontrakt der Unbesiegten · Hüter des Geheimnisses · Scherben von Everdark

---

## Geplante Features

| Version | Feature |
|---------|---------|
| v1.1 | Vollständige Datenbasis: Helden-Klassen, Items, Overlord-Karten, Leutnants, Kampagnen |
| v1.2 | Design-Überarbeitung (Fantasy-Theme), iPad-Optimierung, Tests |
| v1.3 | Monster-Tracker: Live-HP pro Figur während des Spiels |
| v1.4 | Kampagnen-Speicherstand: kompletter Spielstand pausieren/fortsetzen |
| v1.5 | Overlord-Kommandozentrale: Deck-Tracker, Helden-Übersicht |
| v1.6 | Helden-Spieleransicht |
| v2.0 | Multiplayer-Sync (Backend, Echtzeit) |

---

## Lokal starten

**Voraussetzungen:** Node.js ≥ 22 (Vite 8 / react-router 8)

```bash
git clone https://github.com/zedyo/quest-vault-reborn.git
cd quest-vault-reborn
npm install
npm run dev
```

Browser öffnet sich unter `http://localhost:5173`.

**Produktions-Build erstellen:**

```bash
npm run build
# Build liegt in dist/ — kann direkt als statische Seite gehostet werden
```

---

## Entwicklungsstände vorab ansehen (Branch-Vorschauen)

Jeder Push auf einen Entwicklungsbranch wird automatisch als eigene, vollständig
bedienbare Vorschau veröffentlicht — so lässt sich eine Änderung im Browser prüfen,
**bevor** sie nach `main` gemergt wird und live geht:

| | Adresse |
|---|---|
| Live-Version | https://zedyo.github.io/quest-vault-reborn/ |
| Übersicht aller Vorschauen | https://zedyo.github.io/quest-vault-reborn/preview/ |
| Einzelne Vorschau | `…/quest-vault-reborn/preview/<branchname>/` |

* Eine Vorschau ist unten links deutlich als solche gekennzeichnet (Branch + Commit).
* **Spielstände sind getrennt:** Quests, Sammlung und Kampagnen einer Vorschau
  liegen in einem eigenen Speicherbereich. Ein Entwicklungsstand kann die Daten der
  Live-Version also nicht verändern. Zum Testen mit echten Daten: in der Live-Version
  exportieren, in der Vorschau importieren.
* Existiert ein Pull Request für den Branch, wird der Vorschau-Link dort als
  Kommentar hinterlegt.
* Nach dem Löschen des Branches (üblicherweise direkt nach dem Merge) wird die
  Vorschau automatisch wieder entfernt.

Vom Push bis zur fertigen Vorschau vergehen etwa zwei bis drei Minuten
(Workflows „Branch-Vorschau" → „Pages veröffentlichen").
Technischer Hintergrund: [`wiki/concepts/pages-preview-deployments.md`](wiki/concepts/pages-preview-deployments.md).

---

## Mitmachen

Beiträge, Fehlermeldungen und Ideen sind willkommen.
Bitte einen Fork erstellen und einen Pull Request einreichen.

---

## Rechtlicher Hinweis

Dieses Projekt ist ein inoffizielles Community-Projekt ohne kommerzielle Absichten.
*Descent: Journeys in the Dark* ist ein eingetragenes Warenzeichen von Fantasy Flight Games / Asmodee.
Alle Spielinhalte, Namen und Markennamen gehören den jeweiligen Rechteinhabern.
