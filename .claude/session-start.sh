#!/usr/bin/env bash
# SessionStart-Hook: Gibt jedem neuen Claude-Session automatisch den aktuellen
# Projektstand mit. Wird von .claude/settings.json ausgeführt.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 0

echo "=== QUEST VAULT REBORN – SESSION-KONTEXT (automatisch generiert) ==="
echo ""
echo "Version: $(node -p "require('./package.json').version" 2>/dev/null || echo 'unbekannt')"
echo "Branch:  $(git branch --show-current 2>/dev/null)"
echo ""
echo "--- Letzte 5 Commits ---"
git log --oneline -5 2>/dev/null
echo ""
echo "--- Nächste Schritte (aus docs/architecture/plan.md) ---"
sed -n '/^## Nächste konkrete Schritte/,/^---/p' docs/architecture/plan.md 2>/dev/null | head -12
echo ""
echo "--- Offene Arbeit (aus CLAUDE.md) ---"
sed -n '/^## Was noch fehlt/,/^---/p' CLAUDE.md 2>/dev/null | head -15
echo ""
echo "WICHTIG: Lies CLAUDE.md vollständig bevor du arbeitest."
echo "Vor jedem Commit: npm test && npm run build müssen fehlerfrei sein."
echo "Spieldaten-Änderungen IMMER auch in docs/game-data/*.md nachziehen."
