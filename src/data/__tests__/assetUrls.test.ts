import { describe, it, expect } from 'vitest'
import { heroPortraitUrl } from '../assetUrls'
import { HEROES } from '../heroes'

// `heroPortraitUrl` bekommt seine Id unter anderem aus `TrackedHero.heroId` und
// damit aus einem IMPORTIERTEN Spielstand. Der Session-Sanitizer lässt dort
// bewusst Freitext durch (Round-Trip-Treue), also muss der URL-Helfer mit allem
// fertigwerden — er läuft im Render-Body, ein Wurf ersetzt die ganze Seite
// über die ErrorBoundary.
describe('heroPortraitUrl', () => {
  it('liefert für jede echte Helden-Id einen unveränderten Pfad', () => {
    for (const h of HEROES) {
      expect(heroPortraitUrl(h.id)).toContain(`cards/de/heroes/portraits/${h.id}.webp`)
    }
  })

  it('wirft nicht bei unpaarigen Surrogaten (beschädigter oder präparierter Import)', () => {
    // Entsteht auch ohne böse Absicht: der Sanitizer kürzt `heroId` auf 100
    // Zeichen und kann dabei ein Surrogatpaar zerschneiden.
    const abgeschnitten = 'a'.repeat(99) + '😀'
    for (const id of ['\uD800', '\uDFFF', 'x\uD83D', abgeschnitten.slice(0, 100)]) {
      expect(() => heroPortraitUrl(id)).not.toThrow()
    }
  })

  it('lässt keine Pfadsegmente aus dem Bilderordner ausbrechen', () => {
    expect(heroPortraitUrl('../../evil')).toContain('portraits/..%2F..%2Fevil.webp')
    expect(heroPortraitUrl('a/b')).toContain('portraits/a%2Fb.webp')
  })

  it('erhält gültige Zeichen jenseits der BMP', () => {
    expect(heroPortraitUrl('held-😀')).toContain('held-%F0%9F%98%80.webp')
  })
})
