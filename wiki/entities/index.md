# Entitäten

Greifbare Bausteine des Projekts — Module, Komponenten, Subsysteme, Seiten,
Datendateien und Assets. Jede Entität ist ein Konzept-Dokument, das meist an eine
`resource` (Datei-/Modulpfad im Repo) gebunden ist.

Typische `type`-Werte: `Component`, `Module`, `Subsystem`, `Page`, `Data File`,
`Asset` (siehe [Schema](../schema.md)).

# Komponenten

* [MapGrid (Kartenraster-Renderer)](map-grid.md) - Rendert platzierte Descent-Plättchen im Kartenbauer inkl. Connector-Streckung.
* [GameSymbols — Descent-Kartensymbole & renderGameText](game-symbols.md) - Zentrales Modul für Spielsymbole und die Text→Symbol-Helfer.

# Subsysteme

* [Session-Tracker (Kampagnen-Spielstand)](session-tracker.md) - Eigener Store + abgeleiteter Live-Stand, getrennt vom Spiel-Store.
