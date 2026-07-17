# Konzepte

Abstraktes, nicht an eine einzelne Datei gebundenes Wissen — wiederkehrende
Muster, Verfahren/Runbooks, Architektur-Entscheidungen, Spielmechaniken,
Vergleiche und Synthesen sowie dokumentierte Fallstricke.

Typische `type`-Werte: `Concept`, `Pattern`, `Procedure`, `Decision`,
`Comparison`, `Overview` (siehe [Schema](../schema.md)).

# Muster & Verfahren

* [Connector-Rendering-Modell (Map-Tiles)](connector-rendering.md) - Warum Tile-Connectoren mit Inset-Streckung + maxWidth:none gerendert werden — und was NICHT wieder umgebaut werden darf.
* [Kartenbild-Validierung von Spielwerten](card-image-validation.md) - Etabliertes Verfahren, um Spielwerte direkt aus any2cards-Kartenbildern zu prüfen.
* [DE-Kartenbild-Pipeline (Scans → public/cards)](card-image-pipeline.md) - Byte-Range-Zugriff aufs Scans-Release + rasterbasierter Zuschnitt (inkl. Fallstricke).
* [Kartentext-Transkription mit adversarialer Verifikation](card-text-transcription.md) - Kartentexte 1:1 übernehmen und per Verify-Pass gegen das Kartenbild absichern.
* [Geteilte UI-Bausteine](shared-ui-building-blocks.md) - Wiederverwendbare UI-Muster (StatIcons, ModalOverlay, Filters, ConfirmDialog, assetUrls).
* [Quer-Verlinkung mit Deep-Links](deep-linking-pattern.md) - Bidirektionale Deep-Links zwischen Referenzseiten inkl. Scroll + Highlight.

# Architektur & Design

* [MapBuilder-Overlays (platzierbare Token)](mapbuilder-overlays.md) - Katalog + Rendering der platzierbaren Descent-Overlay-Token.
* [Theming & Design-System v2](theming-and-design-system.md) - Entwicklung des Token-/Farbsystems bis zu den Designs Overlord/Heldentum.
* [Datenspeicherung, Assets, Hosting & Routing](runtime-and-deployment.md) - Grundlegende Laufzeit- und Deployment-Entscheidungen.
* [CRRG-Errata/FAQ-Integration (Architektur)](crrg-errata-integration.md) - Additive, quellenbelegte, namensbasierte Anbindung des Community Rules Reference Guide.

# Entscheidungen, Postmortems & Strategie

* [Vorfall + Regeln — fabrizierte Spieldaten (2026-06-12)](fabricated-data-incident.md) - Halluzinierte Helden/Erweiterungen entfernt; daraus abgeleitete verbindliche Anti-Halluzinations-Regeln.
* [Offene Entscheidungen](open-decisions.md) - Laufende offene Projekt-Entscheidungen (IP-Rechte, Backend, Monetarisierung, B-Seiten-Connectoren).
* [Interne Projektstrategie](internal-strategy.md) - ⚠️ intern: Monetarisierung/Ko-Fi, Rechtslage, Daten-Validierungsstrategie.

# Kontext, Recht & Produktziele

* [Community-Anforderungen & Lehren aus dem Original](community-requirements.md) - Warum das Projekt existiert: destillierte Anforderungen + Schwächen des Original-Tools als Produktziele.
* [Asset-Sourcing & IP-Grauzone (gewählter Weg)](asset-sourcing-and-ip.md) - Welche Asset-/IP-Option das Projekt gewählt hat und mit welchen Absicherungen.
* [FFG-IP-Grenze (was reproduziert wird und was nicht)](ffg-ip-boundary.md) - Projektweite Regel: faktische Metadaten + funktionale Kartentexte ja, kreative Prosa nein.
