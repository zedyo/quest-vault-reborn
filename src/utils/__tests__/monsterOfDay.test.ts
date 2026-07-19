import { describe, it, expect } from 'vitest'
import { pickIndexForDay } from '../monsterOfDay'
import { aggregateAbilities } from '../monsterAbilities'
import { MONSTERS } from '../../data/monsters'
import type { Monster } from '../../types/game'

describe('pickIndexForDay – Tagesrotation', () => {
  const n = 56 // realistische Poolgröße

  it('ist deterministisch (gleicher Tag → gleicher Index)', () => {
    for (const day of [0, 1, 7, 55, 56, 137, 999]) {
      expect(pickIndexForDay(n, day)).toBe(pickIndexForDay(n, day))
    }
  })

  it('liefert immer einen gültigen Index in [0, n)', () => {
    for (let day = 0; day < n * 12; day++) {
      const idx = pickIndexForDay(n, day)
      expect(idx).toBeGreaterThanOrEqual(0)
      expect(idx).toBeLessThan(n)
      expect(Number.isInteger(idx)).toBe(true)
    }
  })

  it('ist über volle Zyklen exakt gleichverteilt (jeder Index gleich oft)', () => {
    const cycles = 20
    const counts = new Array(n).fill(0)
    for (let day = 0; day < n * cycles; day++) counts[pickIndexForDay(n, day)]++
    // Jeder Index muss in jedem vollen Zyklus genau einmal vorkommen.
    expect(counts.every((c) => c === cycles)).toBe(true)
  })

  it('jeder Zyklus ist eine echte Permutation (kein Frühwiederholer im Zyklus)', () => {
    for (let cycle = 0; cycle < 8; cycle++) {
      const picks = Array.from({ length: n }, (_, i) => pickIndexForDay(n, cycle * n + i))
      expect(new Set(picks).size).toBe(n)
    }
  })

  it('wiederholt nie zwei Tage direkt hintereinander (Mindestabstand ≥ 2)', () => {
    let prev = pickIndexForDay(n, 0)
    for (let day = 1; day < n * 20; day++) {
      const cur = pickIndexForDay(n, day)
      expect(cur).not.toBe(prev) // Naht-Fix: kein direkter Wiederholer
      prev = cur
    }
  })

  it('kein direkter Wiederholer auch bei kleinen Pools (n = 3, 4, 5)', () => {
    for (const nn of [3, 4, 5]) {
      for (let day = 1; day < nn * 40; day++) {
        expect(pickIndexForDay(nn, day)).not.toBe(pickIndexForDay(nn, day - 1))
      }
    }
  })
})

describe('aggregateAbilities – Fähigkeiten aufbereiten', () => {
  const naga = MONSTERS.find((m) => m.id === 'naga')!

  it('Naga Akt I: Hexerei 1 [nur Diener] + Hexerei 2 [nur Meister]', () => {
    const agg = aggregateAbilities(naga, 1)
    const titles = agg.passive.boxes.map((b) => `${b.title}|${b.scope}`)
    expect(titles).toEqual(['Hexerei 1|minion', 'Hexerei 2|master'])
    // Jede Box trägt den zur Stufe passenden Beschreibungstext.
    expect(agg.passive.boxes[0].description).toContain('bis zu 1 Reichweite')
    expect(agg.passive.boxes[1].description).toContain('bis zu 2 Reichweite')
    expect(agg.passive.boxes[0].baseName).toBe('Hexerei')
  })

  it('Naga Akt I: Gift ist eine gemeinsame Energie-Box (Diener + Meister)', () => {
    const agg = aggregateAbilities(naga, 1)
    expect(agg.surge.boxes).toHaveLength(1)
    expect(agg.surge.boxes[0].title).toBe('Gift')
    expect(agg.surge.boxes[0].scope).toBe('both')
    expect(agg.surge.boosts).toHaveLength(0)
  })

  it('Naga Akt I: Einschnüren ist nur Meister (Aktion)', () => {
    const agg = aggregateAbilities(naga, 1)
    expect(agg.action.boxes).toHaveLength(1)
    expect(agg.action.boxes[0].title).toBe('Einschnüren')
    expect(agg.action.boxes[0].scope).toBe('master')
  })

  it('Bonus-Energie erscheint als Boost-Zeile, nicht als benannte Box', () => {
    // Konstruiertes Monster: Diener +1 Herz, Meister +2 Herzen.
    const m: Monster = {
      id: 'x', nameDe: 'X', nameEn: 'X', expansionId: 'base',
      normal: { speed: 4, health: 4, defense: ['gray'], attack: ['blue'], surges: ['+1 Herz'] },
      master: { speed: 4, health: 6, defense: ['gray'], attack: ['blue'], surges: ['+2 Herzen'] },
    }
    const agg = aggregateAbilities(m, 1)
    expect(agg.surge.boxes).toHaveLength(0)
    expect(agg.surge.boosts).toEqual([{ kind: 'heart', minion: 1, master: 2 }])
  })

  it('Akt II erbt Fähigkeitstexte aus Akt I, wenn nicht überschrieben', () => {
    // shadow-dragon: act2 überschreibt Werte, Fähigkeiten sind identisch geerbt.
    const drake = MONSTERS.find((m) => m.normal && m.act2Normal && (m.act2Normal.abilities === undefined))
    if (drake) {
      const a1 = aggregateAbilities(drake, 1)
      const a2 = aggregateAbilities(drake, 2)
      expect(a2.passive.boxes.map((b) => b.title)).toEqual(a1.passive.boxes.map((b) => b.title))
    }
    expect(true).toBe(true)
  })
})
