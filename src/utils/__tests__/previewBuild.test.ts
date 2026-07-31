import { describe, it, expect } from 'vitest'
import { previewSlug } from '../../../scripts/preview-slug.mjs'
import { IS_PREVIEW, PREVIEW, storageKey } from '../previewBuild'

// Der Ordnername einer Branch-Vorschau wird an drei Stellen gebraucht (Workflow,
// Aufräum-Workflow, Übersichtsseite) und muss deshalb streng deterministisch und
// URL-sicher sein. Der Workflow lässt nur diese Form zu:
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]{0,63}$/

describe('previewSlug', () => {
  it('bildet einen typischen Branchnamen flach ab', () => {
    expect(previewSlug('claude/github-pages-preview-branches-e9v4td')).toBe(
      'claude-github-pages-preview-branches-e9v4td',
    )
    expect(previewSlug('main')).toBe('main')
  })

  it('normalisiert Groß-/Kleinschreibung und Umlaute', () => {
    expect(previewSlug('Feature/Änderung-Größe')).toBe('feature-aenderung-groesse')
  })

  it('kann nicht aus dem preview/-Ordner ausbrechen', () => {
    for (const evil of ['../../etc/passwd', '/absolut/pfad', '..', './x', 'a/../../b']) {
      const slug = previewSlug(evil)
      expect(slug).toMatch(SLUG_PATTERN)
      expect(slug).not.toContain('/')
      expect(slug).not.toContain('..')
    }
  })

  it('kürzt lange Namen, hält sie aber unterscheidbar und stabil', () => {
    const a = `feature/${'x'.repeat(60)}-eins`
    const b = `feature/${'x'.repeat(60)}-zwei`

    expect(previewSlug(a)).toMatch(SLUG_PATTERN)
    expect(previewSlug(a)).not.toBe(previewSlug(b)) // Hash-Suffix des vollen Namens
    expect(previewSlug(a)).toBe(previewSlug(a)) // idempotent → gleicher Branch, gleicher Ordner
  })

  it('liefert auch für Randfälle einen gültigen Slug', () => {
    for (const input of ['', '---', '///', 'ä', '42']) {
      expect(previewSlug(input)).toMatch(SLUG_PATTERN)
    }
  })
})

describe('storageKey', () => {
  it('lässt die Schlüssel des Produktions-Builds unverändert', () => {
    // In Tests (und in der Produktion) ist __PREVIEW__ null — die Spielstände der
    // Bestandsnutzer dürfen sich NIEMALS in einen anderen Schlüssel verschieben.
    expect(IS_PREVIEW).toBe(false)
    expect(PREVIEW).toBeNull()
    expect(storageKey('quest-vault-reborn')).toBe('quest-vault-reborn')
    expect(storageKey('qvr-sessions')).toBe('qvr-sessions')
    expect(storageKey('qvr-scenario-draft')).toBe('qvr-scenario-draft')
    expect(storageKey('qvr-builder-draft')).toBe('qvr-builder-draft')
    expect(storageKey('qvr-theme')).toBe('qvr-theme')
  })
})
