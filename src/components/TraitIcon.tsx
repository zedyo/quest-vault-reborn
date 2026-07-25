import { GameIcon, type GameSymbolName } from './icons/GameIcon'

// ── Trait-Icons (Monster-Eigenschaften) ──────────────────────────────────────
//
// Kleine runde Badges für die Monster-Eigenschaften (Wildnis, Dunkel, Höhle …),
// genutzt von MonstersPage und dem „Monster des Tages"-Widget. Seit v1.6.11 die
// gerasterten Descent-Embleme aus dem Icon-Set (Scheiben-Variante, folgt dem
// aktiven Theme); die früheren flachen Inline-SVG-Badges wurden ersetzt.

// Deutsches Merkmal (wie in monsters.ts `traits`) → Icon-Name im Set.
// Exportiert für den Datenintegritäts-Test (jedes Monster-Merkmal muss abgedeckt sein).
export const TRAIT_SYMBOL: Record<string, GameSymbolName> = {
  'Wildnis': 'wildnis',
  'Dunkel': 'dunkel',
  'Höhle': 'hoehle',
  'Heiß': 'heiss',
  'Kalt': 'kalt',
  'Gebirge': 'gebirge',
  'Verflucht': 'verflucht',
  'Zivilisiert': 'zivilisiert',
  'Gebäude': 'gebaeude',
  'Wasser': 'wasser',
}

export default function TraitIcon({
  trait,
  size = 14,
  className,
}: {
  trait: string
  size?: number
  /** z. B. negative Vertikal-Margin, damit große Icons die Pill-Höhe nicht sprengen */
  className?: string
}) {
  // hasOwnProperty-Guard: kein Lookup über die Prototype-Kette (z. B. 'constructor')
  if (!Object.prototype.hasOwnProperty.call(TRAIT_SYMBOL, trait)) return null
  return <GameIcon kind="symbol" name={TRAIT_SYMBOL[trait]} size={size} className={className} />
}
