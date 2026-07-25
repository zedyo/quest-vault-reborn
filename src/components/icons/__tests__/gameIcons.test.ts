import { describe, it, expect } from 'vitest'
import {
  GAME_SYMBOL_NAMES,
  MENU_ICON_NAMES,
  ARCHETYPE_ICON_NAMES,
  DIE_ICON_NAMES,
} from '../GameIcon'
import { TRAIT_SYMBOL } from '../../TraitIcon'
import { MONSTERS } from '../../../data/monsters'

// ── Datenintegrität: Icon-Set unter public/game-icons/ ──────────────────────
//
// Prüft, dass die Namens-Unions in GameIcon.tsx, das mitgelieferte
// manifest.json und die tatsächlichen WebP-Dateien deckungsgleich sind:
// jede von GameIcon konstruierbare URL muss auf eine existierende Datei
// zeigen, und es liegen keine Waisen-Dateien im Ordner.

const SIZES = [32, 64, 128, 256] as const
const THEMES = ['overlord', 'heldentum'] as const

// Vorhandene Dateien (Vite-Glob, wie bei den Kartenbild-Präsenz-Tests).
const FILES = new Set(Object.keys(import.meta.glob('/public/game-icons/**/*.webp')))

function expectedPaths(): string[] {
  const paths: string[] = []
  for (const size of SIZES) {
    for (const theme of THEMES) {
      for (const name of GAME_SYMBOL_NAMES) {
        paths.push(`/public/game-icons/symbols/${theme}/mit-scheibe/${name}-${size}.webp`)
        paths.push(`/public/game-icons/symbols/${theme}/ohne-hintergrund/${name}-${size}.webp`)
      }
      for (const name of MENU_ICON_NAMES) {
        paths.push(`/public/game-icons/menu/${theme}/${name}-${size}.webp`)
      }
      for (const name of ARCHETYPE_ICON_NAMES) {
        paths.push(`/public/game-icons/archetypes/${theme}/${name}-${size}.webp`)
      }
    }
    for (const name of ARCHETYPE_ICON_NAMES) {
      paths.push(`/public/game-icons/archetypes/ohne-hintergrund/${name}-${size}.webp`)
    }
    for (const name of DIE_ICON_NAMES) {
      paths.push(`/public/game-icons/dice/${name}-${size}.webp`)
    }
  }
  return paths
}

describe('Icon-Set (public/game-icons)', () => {
  it('Inventar-Umfang stimmt (22 Symbole, 20 Menü, 4 Archetypen, 7 Würfel)', () => {
    expect(GAME_SYMBOL_NAMES).toHaveLength(22)
    expect(MENU_ICON_NAMES).toHaveLength(20)
    expect(ARCHETYPE_ICON_NAMES).toHaveLength(4)
    expect(DIE_ICON_NAMES).toHaveLength(7)
  })

  it('jede aus den Unions konstruierbare Icon-URL zeigt auf eine existierende Datei', () => {
    const expected = expectedPaths()
    const missing = expected.filter((p) => !FILES.has(p))
    expect(missing).toEqual([])
    // 22·2·2·4 + 20·2·4 + 4·3·4 + 7·4 = 588 — und keine Waisen-Dateien darüber hinaus
    expect(expected).toHaveLength(588)
    expect(FILES.size).toBe(588)
  })

  it('manifest.json und Namens-Unions sind deckungsgleich', () => {
    const raw = import.meta.glob('/public/game-icons/manifest.json', {
      eager: true,
      query: '?raw',
      import: 'default',
    }) as Record<string, string>
    const manifest = JSON.parse(raw['/public/game-icons/manifest.json']) as {
      sizes: number[]
      groups: Record<string, { items: { name: string; dir: string }[] }>
    }
    expect([...manifest.sizes].sort((a, b) => a - b)).toEqual([...SIZES])

    const names = (group: string) =>
      new Set(manifest.groups[group].items.map((i) => i.name))
    expect(names('symbols')).toEqual(new Set(GAME_SYMBOL_NAMES))
    expect(names('menu')).toEqual(new Set(MENU_ICON_NAMES))
    expect(names('archetypes')).toEqual(new Set(ARCHETYPE_ICON_NAMES))
    expect(names('dice')).toEqual(new Set(DIE_ICON_NAMES))
  })

  it('jedes in monsters.ts verwendete Merkmal hat ein Trait-Icon-Mapping', () => {
    const used = new Set(MONSTERS.flatMap((m) => m.traits ?? []))
    const unmapped = [...used].filter((t) => !(t in TRAIT_SYMBOL))
    expect(unmapped).toEqual([])
  })
})
