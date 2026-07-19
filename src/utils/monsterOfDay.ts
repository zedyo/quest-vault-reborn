// ── „Monster des Tages" – deterministische Tagesrotation ─────────────────────
//
// Der frühere Ansatz (`MONSTERS[floor(now/86_400_000) % n]`) lief stur der Reihe
// nach durch den Pool – vorhersehbar und (bei sortierten Daten) monoton. Hier
// stattdessen eine deterministische „Shuffle-Bag"-Ziehung ohne Server/State:
//
//   • Pro Zyklus (= Poollänge n Tage) wird der Pool einmal deterministisch
//     durchgemischt (seed = Zyklusnummer). Jeder Index kommt pro Zyklus genau
//     einmal → über volle Zyklen exakt gleichverteilt.
//   • Ein Naht-Fix verhindert, dass die letzte Ziehung eines Zyklus direkt als
//     erste des nächsten Zyklus wiederholt wird (kein direkter Wiederholer).
//
// Rein aus dem Tagesindex ableitbar (deterministisch, testbar) – keine
// Persistenz nötig.

/** mulberry32 – kleiner, schneller, deterministischer PRNG (0 ≤ x < 1). */
function rng(seed: number): () => number {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Deterministische Permutation [0..n) für einen Zyklus (Fisher-Yates). */
function shuffleForCycle(n: number, cycle: number): number[] {
  const a = [...Array(n).keys()]
  const r = rng((cycle * 2654435761) ^ 0x9e3779b9)
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Zyklus-Permutation inkl. Naht-Fix: Tauscht die ersten beiden Elemente, falls
 * das erste dem LETZTEN des vorherigen Zyklus gleicht (sonst wäre der erste Tag
 * eines Zyklus ein direkter Wiederholer des letzten Tages des vorigen).
 *
 * Wichtig: Der Tausch wird auf die GESAMTE Zyklus-Permutation angewandt (nicht
 * nur beim Nachschlagen von Position 0). Andernfalls läse der Folgetag (Position
 * 1) noch die ungetauschte Reihenfolge und könnte selbst zum direkten
 * Wiederholer werden. Bei einer Poolgröße n ≥ 3 rührt der Tausch (Positionen 0/1)
 * das letzte Element nie an, daher genügt die ungetauschte Vorzyklus-Permutation
 * für den Vergleich – die Naht ist damit beweisbar wiederholungsfrei.
 */
function cycleOrder(n: number, cycle: number): number[] {
  const cur = shuffleForCycle(n, cycle)
  if (cycle > 0 && n > 2) {
    const prev = shuffleForCycle(n, cycle - 1)
    if (cur[0] === prev[n - 1]) [cur[0], cur[1]] = [cur[1], cur[0]]
  }
  return cur
}

/**
 * Index des „Monsters des Tages" für einen Pool der Größe `n` am Tag `day`
 * (fortlaufender Tagesindex). Gleichverteilt über volle Zyklen; jedes Monster
 * kommt pro Zyklus genau einmal (kein Frühwiederholer), und zwei Tage direkt
 * hintereinander liefern nie dasselbe Monster (Naht-Fix zwischen Zyklen).
 */
export function pickIndexForDay(n: number, day: number): number {
  const cycle = Math.floor(day / n)
  const pos = ((day % n) + n) % n
  return cycleOrder(n, cycle)[pos]
}

/** Fortlaufender Tagesindex (UTC-Tage seit Epoch). */
export function dayIndex(): number {
  return Math.floor(Date.now() / 86_400_000)
}
