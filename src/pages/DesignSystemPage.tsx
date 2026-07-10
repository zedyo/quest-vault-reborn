import { useEffect, useMemo, useState } from 'react'
import { MONSTERS } from '../data/monsters'
import type { DieColor, Monster, MonsterStats } from '../types/game'
import { getStoredTheme, setStoredTheme, DEFAULT_THEME } from '../theme'

/**
 * Design-System / System-Doku (v1.6.1).
 *
 * Lebende Styleguide-Seite für das Design-System v2 (Overlord/Heldentum). Baut
 * die in „Claude DESIGN" ausgearbeitete System-Doku (`Quest Vault System-Doku.dc.html`)
 * mit den ECHTEN Design-Tokens der App nach, sodass sie live dem aktiven Theme folgt.
 * Der Umschalter oben schreibt das globale Theme (wie der 🎨-Schalter in der Kopfleiste).
 *
 * Alle gezeigten Spielwerte stammen aus den validierten `MONSTERS`-Daten – keine
 * erfundenen Werte.
 */

// ── Theme-Metadaten (aus der System-Doku) ────────────────────────────────────
interface ThemeDoc {
  name: string
  tag: string
  fontDisplay: string
  fontBody: string
  fxDesc: string
  swatches: [string, string][]
}
const THEME_DOC: Record<string, ThemeDoc> = {
  overlord: {
    name: 'Overlord',
    tag: 'Blut & Knochen · das Böse, für Spielleiter',
    fontDisplay: 'Pirata One',
    fontBody: 'Cormorant Garamond',
    fxDesc:
      'Aufsteigende Blut-Funken, driftender Nebel und eine atmende Vignette — bedrohlich und finster.',
    swatches: [
      ['Hintergrund', '#0c0b0d'],
      ['Fläche', '#161318'],
      ['Text · Knochen', '#e6ded2'],
      ['Gedämpft', '#948a80'],
      ['Akzent · Blut', '#b52626'],
      ['Akzent hell', '#d76b6b'],
    ],
  },
  heldentum: {
    name: 'Heldentum',
    tag: 'Gold & Licht · rechtschaffen, für Helden-Spieler',
    fontDisplay: 'Cinzel',
    fontBody: 'EB Garamond',
    fxDesc:
      'Goldene, leuchtende Staubmotes, ein warmer Lichtschein und schimmernde Gold-Sweeps — edel und heroisch.',
    swatches: [
      ['Pergament', '#e9dcc0'],
      ['Fläche', '#f4ead2'],
      ['Tinte', '#2c2013'],
      ['Gedämpft', '#7a6647'],
      ['Akzent · Gold', '#a9812f'],
      ['Akzent hell', '#c69821'],
    ],
  },
}

// ── feste, semantische Farben (theme-unabhängig, wie in der Doku) ────────────
const DIE_COLORS: Record<DieColor, string> = {
  blue: '#3d84c6', red: '#c23a2d', yellow: '#e0a92b', green: '#4a9d5b',
  white: '#e8e2d5', gray: '#9a9088', brown: '#7c5a3a', black: '#2a2622', silver: '#c6ccd2',
}

// ── kleine Bausteine ─────────────────────────────────────────────────────────
function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent-bright mt-12 mb-4">
      {n} · {children}
    </div>
  )
}
function Micro({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`font-mono text-[11px] tracking-[0.08em] uppercase text-faint ${className}`}>
      {children}
    </div>
  )
}
function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-line rounded-card bg-surface ${className}`}>{children}</div>
  )
}
function Dice({ dice }: { dice: DieColor[] }) {
  return (
    <div className="flex gap-1">
      {dice.map((c, i) => (
        <span
          key={i}
          className="w-3.5 h-3.5 rounded-[3px]"
          style={{ background: DIE_COLORS[c], boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.3)' }}
        />
      ))}
    </div>
  )
}

/** Aktives Theme aus `data-theme` (folgt jedem Wechsel – Kopfleiste ODER Umschalter unten). */
function useActiveTheme(): string {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || getStoredTheme(),
  )
  useEffect(() => {
    const el = document.documentElement
    const obs = new MutationObserver(() => setTheme(el.getAttribute('data-theme') || DEFAULT_THEME))
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])
  return theme in THEME_DOC ? theme : 'overlord'
}

// echte Monster für Tabelle + Karte (validierte Daten – keine erfundenen Werte)
const byId = (id: string) => MONSTERS.find((m) => m.id === id)
const ROW_MONSTERS = ([
  { m: byId('goblin-archer'), act: 1 },
  { m: byId('ettin'), act: 1 },
  { m: byId('merriod'), act: 2 },
  { m: byId('shadow-dragon'), act: 2 },
] as { m: Monster | undefined; act: 1 | 2 }[]).filter(
  (r): r is { m: Monster; act: 1 | 2 } => !!r.m,
)
const statsFor = (m: Monster, act: 1 | 2): { n?: MonsterStats; master?: MonsterStats } =>
  act === 2 ? { n: m.act2Normal, master: m.act2Master } : { n: m.normal, master: m.master }

export default function DesignSystemPage() {
  const theme = useActiveTheme()
  const doc = THEME_DOC[theme] ?? THEME_DOC.overlord
  const isHeld = theme === 'heldentum'

  const setTheme = (id: string) => setStoredTheme(id) // schreibt data-theme → Observer aktualisiert

  // Ambient-Partikel (Ember für Overlord, Mote für Heldentum)
  const particles = useMemo(
    () =>
      Array.from({ length: isHeld ? 30 : 34 }, () => ({
        left: `${(Math.random() * 100).toFixed(2)}%`,
        size: isHeld ? 2 + Math.random() * 2.5 : 2 + Math.random() * 3,
        dur: isHeld ? 8 + Math.random() * 8 : 5 + Math.random() * 7,
        delay: -(Math.random() * (isHeld ? 16 : 12)),
      })),
    [isHeld],
  )

  const tabBtn = (active: boolean) =>
    `px-5 py-2 rounded-control font-head text-[15px] font-semibold transition-colors ${
      active ? 'bg-accent text-onaccent shadow-btn' : 'text-muted hover:text-fg'
    }`

  const shadowDragon = byId('shadow-dragon')
  const sdStats = shadowDragon ? statsFor(shadowDragon, 2) : undefined

  return (
    <div className="space-y-2">
      {/* Kopf / Umschalter */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 shrink-0 rounded-control bg-accent-soft border border-accent-line flex items-center justify-center">
            <span className="block w-3 h-3 bg-accent rotate-45" style={{ boxShadow: '0 0 10px var(--qv-accent)' }} />
          </div>
          <div className="leading-tight">
            <div className="font-head font-bold text-xl text-fg">Quest Vault</div>
            <div className="font-mono text-[9.5px] tracking-[0.32em] text-accent-bright mt-0.5">SYSTEM-DOKU</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted hidden sm:inline">Design wählen</span>
          <div className="flex gap-1 p-1 rounded-[13px] bg-surface-2 border border-line">
            <button onClick={() => setTheme('heldentum')} className={tabBtn(isHeld)}>Heldentum</button>
            <button onClick={() => setTheme('overlord')} className={tabBtn(!isHeld)}>Overlord</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="pt-6">
        <h1 className="font-display text-5xl sm:text-6xl leading-none text-fg">{doc.name}</h1>
        <p className="mt-3 font-head text-lg italic text-muted">{doc.tag}</p>
        <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-muted">
          Das komplette visuelle System für die Quest-Vault-Oberfläche. Oben zwischen den beiden
          Designs umschalten (oder über das 🎨 in der Kopfleiste) — Farben, Typografie, Komponenten
          und Bewegung wechseln live.
        </p>
      </div>

      {/* 01 Farben */}
      <SectionLabel n="01">Farben</SectionLabel>
      <div className="flex flex-wrap gap-4">
        {doc.swatches.map(([label, hex], i) => {
          // Live-Farbe direkt aus den aktiven Tokens (immer exakt zum Theme passend)
          const tokenVar = ['--qv-bg', '--qv-surface', '--qv-text', '--qv-muted', '--qv-accent', '--qv-accent-bright'][i]
          return (
            <div key={label} className="flex-1 min-w-[130px]">
              <div
                className="h-16 rounded-control"
                style={{ background: `var(${tokenVar})`, border: '1px solid rgba(128,128,128,.28)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18)' }}
              />
              <div className="mt-2 font-mono text-xs font-semibold text-fg">{label}</div>
              <div className="mt-0.5 font-mono text-[10.5px] text-muted">{hex}</div>
            </div>
          )
        })}
      </div>

      {/* 02 Typografie */}
      <SectionLabel n="02">Typografie</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Panel className="px-6 py-5">
          <div className="font-display text-6xl leading-[0.9] text-fg">Aa</div>
          <Micro className="mt-3.5">Titel / Display</Micro>
          <div className="font-head text-[17px] text-fg mt-0.5">{doc.fontDisplay}</div>
        </Panel>
        <Panel className="px-6 py-5">
          <div className="font-body text-4xl leading-none text-fg">Aa Bb Cc</div>
          <Micro className="mt-3.5">Fließtext / Daten</Micro>
          <div className="font-head text-[17px] text-fg mt-0.5">{doc.fontBody} · IBM Plex Mono</div>
        </Panel>
      </div>
      <Panel className="mt-4 px-6 py-1.5">
        {[
          { s: '32 / 700', cls: 'font-head font-bold text-3xl text-fg', t: 'Der Schattendrache' },
          { s: '20 / 600', cls: 'font-head font-semibold text-xl text-fg', t: 'Begegnung · Siegbedingung' },
          { s: '15 / 400', cls: 'font-body text-[15px] text-muted', t: 'Fließtext für Erzähltext und Beschreibungen der Quest.' },
          { s: '10 / mono', cls: 'font-mono text-[10px] tracking-[0.12em] text-accent-bright', t: 'AKT I · TEMPO · LEBEN · MEISTER' },
        ].map((row, i, arr) => (
          <div
            key={row.s}
            className={`flex items-baseline gap-4 py-3.5 ${i < arr.length - 1 ? 'border-b border-line' : ''}`}
          >
            <span className="w-14 shrink-0 font-mono text-[10px] text-faint">{row.s}</span>
            <span className={row.cls}>{row.t}</span>
          </div>
        ))}
      </Panel>

      {/* 03 Buttons */}
      <SectionLabel n="03">Buttons</SectionLabel>
      <Panel className="p-6 flex flex-wrap gap-3.5 items-center">
        <button className="h-11 px-5 rounded-control border border-accent-deep bg-btn-primary text-onaccent font-head text-[15px] font-semibold shadow-btn transition-all hover:brightness-110 hover:-translate-y-0.5">
          Zu Quest hinzufügen
        </button>
        <button className="h-11 px-5 rounded-control border border-accent-line bg-accent-soft text-accent-bright font-head text-[15px] font-semibold transition-colors hover:bg-accent hover:text-onaccent">
          Sekundär
        </button>
        <button className="h-11 px-5 rounded-control border border-line bg-transparent text-muted font-head text-[15px] font-semibold transition-colors hover:bg-surface-2 hover:text-fg">
          Ghost
        </button>
        <span className="font-mono text-xs text-faint">Hover: Anheben, Aufleuchten, Schein</span>
      </Panel>

      {/* 04 Badges & Tabs */}
      <SectionLabel n="04">Badges &amp; Tabs</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Panel className="px-6 py-5 flex flex-wrap gap-2.5 items-center content-start">
          <span className="px-2.5 py-1 rounded-pill bg-accent-soft border border-accent-line font-mono text-[10px] text-accent-bright tracking-[0.05em]">AKT I</span>
          <span className="px-2.5 py-1 rounded-pill bg-surface-2 font-mono text-[10px] text-muted tracking-[0.05em]">GRUNDSPIEL</span>
          <span className="px-3 py-1 rounded-pill bg-accent-soft font-body text-sm text-fg">Krieger</span>
          <span className="px-3 py-1 rounded-pill border border-line font-body text-sm text-muted">Fernkampf</span>
          <span className="px-3 py-1 rounded-pill bg-accent text-onaccent font-body text-sm" style={{ boxShadow: '0 0 12px -3px var(--qv-accent)' }}>Meister</span>
        </Panel>
        <Panel className="px-5 py-4">
          <div className="flex gap-1.5 items-center">
            <div className="relative px-3.5 py-2 text-fg font-head text-[15px] font-semibold">
              Alle
              <span className="absolute left-3.5 right-3.5 bottom-0 h-0.5 bg-accent rounded-sm origin-left animate-underline" style={{ boxShadow: '0 0 8px var(--qv-accent)' }} />
            </div>
            <div className="px-3.5 py-2 text-muted font-head text-[15px] font-medium">Krieger</div>
            <div className="px-3.5 py-2 text-muted font-head text-[15px] font-medium">Magier</div>
          </div>
          <div className="mt-3.5 flex items-center gap-2.5 h-10 px-3 rounded-control bg-surface-2 border border-line">
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" stroke="var(--qv-faint)" strokeWidth="1.7"><circle cx="8" cy="8" r="4.4" /><line x1="11.4" y1="11.4" x2="14.5" y2="14.5" /></svg>
            <span className="font-body text-[15px] italic text-faint">Suchen …</span>
          </div>
        </Panel>
      </div>

      {/* 05 Karte & Fortschritt */}
      <SectionLabel n="05">Karte &amp; Fortschritt</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {shadowDragon && sdStats?.n && sdStats?.master && (
          <div className="border border-line rounded-[13px] bg-surface p-4">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-[42px] h-[42px] shrink-0 rounded-control bg-accent-soft border border-accent-line flex items-center justify-center font-head font-semibold text-[15px] text-accent-bright">SD</div>
              <div className="flex-1">
                <div className="font-head font-semibold text-lg text-fg">{shadowDragon.nameDe}</div>
                <div className="font-body text-[13px] italic text-muted">{(shadowDragon.traits ?? []).join(' · ')} · Akt II</div>
              </div>
              <div className="px-2.5 py-1 rounded-pill border border-accent-line font-mono text-[9px] text-accent-bright">{shadowDragon.attackType === 'range' ? 'Fern' : 'Nah'}</div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 rounded-chip bg-surface-2 px-2.5 py-2">
                <div className="font-mono text-[8.5px] tracking-[0.08em] text-faint">TEMPO</div>
                <div className="font-head font-semibold text-xl text-fg mt-px">{sdStats.n.speed}</div>
              </div>
              <div className="flex-1 rounded-chip bg-surface-2 px-2.5 py-2">
                <div className="font-mono text-[8.5px] tracking-[0.08em] text-faint">LEBEN</div>
                <div className="flex gap-3 mt-1 items-baseline">
                  <span className="inline-flex items-baseline gap-1"><span className="font-mono text-[8px] opacity-55">Diener</span><span className="font-head font-semibold text-[15px] text-fg">{sdStats.n.health}</span></span>
                  <span className="inline-flex items-baseline gap-1"><span className="font-mono text-[8px] text-accent-bright">Meister</span><span className="font-head font-bold text-[15px] text-accent-bright">{sdStats.master.health}</span></span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="border border-line rounded-[13px] bg-surface px-5 py-5">
          <div className="font-mono text-xs text-muted mb-1.5">Fortschritt · primär</div>
          <div className="h-2 rounded-sm bg-surface-2 overflow-hidden"><div className="h-full rounded-sm bg-accent" style={{ width: '65%' }} /></div>
          <div className="font-mono text-xs text-muted mt-4 mb-2">Sammlung · dezent</div>
          <div className="flex gap-0.5">
            {[1, 1, 1, 1, 0, 0].map((on, i) => (
              <div key={i} className="flex-1 h-[3px] rounded-sm" style={{ background: on ? 'var(--qv-accent)' : 'rgba(128,128,128,.2)', opacity: on ? 0.5 : 1 }} />
            ))}
          </div>
        </div>
      </div>

      {/* 06 Dialog */}
      <SectionLabel n="06">Dialog</SectionLabel>
      <div className="relative h-[220px] border border-line rounded-card overflow-hidden bg-surface-2 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative w-[360px] max-w-[86%] border border-accent-line rounded-card bg-surface px-6 py-5" style={{ boxShadow: '0 30px 70px -20px rgba(0,0,0,.8)' }}>
          <div className="font-head font-semibold text-xl text-fg">Monster hinzufügen?</div>
          <p className="mt-2 mb-4 font-body text-[14.5px] leading-normal text-muted">Der Schattendrache wird zur Begegnung „Krone des Schicksals" hinzugefügt.</p>
          <div className="flex gap-2.5 justify-end">
            <button className="h-[38px] px-4 rounded-control border border-line bg-transparent text-muted font-head text-sm font-semibold">Abbrechen</button>
            <button className="h-[38px] px-[18px] rounded-control border border-accent-deep bg-btn-primary text-onaccent font-head text-sm font-semibold shadow-btn">Hinzufügen</button>
          </div>
        </div>
      </div>

      {/* 07 Bewegung & Effekte */}
      <SectionLabel n="07">Bewegung &amp; Effekte</SectionLabel>
      <div className="relative h-[170px] border border-line rounded-card overflow-hidden bg-surface flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                bottom: -12, left: p.left, width: p.size, height: p.size, opacity: 0,
                background: isHeld ? '#ecc879' : '#e0552b',
                boxShadow: isHeld ? '0 0 7px 1px rgba(226,190,110,.85)' : '0 0 8px 1px rgba(214,60,30,.85)',
                animation: `${isHeld ? 'qv-mote' : 'qv-ember'} ${p.dur.toFixed(1)}s linear ${p.delay.toFixed(1)}s infinite`,
              }}
            />
          ))}
        </div>
        <div className="absolute left-0 right-0 -bottom-8 h-[120px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, var(--qv-accent-soft), transparent 72%)', filter: 'blur(8px)', animation: 'qv-breathe 6s ease-in-out infinite' }} />
        <div className="relative text-center max-w-[520px] px-5">
          <div className="font-head font-semibold text-2xl text-fg">Atmosphäre</div>
          <p className="mt-2 font-body text-[15px] leading-normal text-muted">{doc.fxDesc}</p>
        </div>
      </div>

      {/* 08 Zustände & Marker */}
      <SectionLabel n="08">Zustände &amp; Marker</SectionLabel>
      <p className="max-w-2xl font-body text-[15px] leading-normal text-muted mb-4">
        Zustände nutzen feste, semantische Farben (bewusst unabhängig vom Thema, damit sie am
        Spieltisch eindeutig bleiben); Marker übernehmen die Akzentfarbe des Designs.
      </p>
      <Micro className="mb-3">Zustände</Micro>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {[
          ['#4a9d5b', 'Vergiftet', 'Zu Beginn deines Zuges 1 Schaden, dann Ausdauer testen zum Ablegen.'],
          ['#e0a92b', 'Betäubt', 'Deine erste Aktion muss das Ablegen dieses Zustands sein.'],
          ['#3d84c6', 'Immobilisiert', 'Du kannst dich nicht bewegen. Am Ende deines Zuges ablegen.'],
          ['#8b6fb0', 'Geschwächt', 'Würfle bei Attributproben mit einem Würfel weniger.'],
          ['#c23a2d', 'Verblutend', 'Zu Beginn des Zuges 1 Schaden; durch Rasten ablegbar.'],
          ['#7b4fd0', 'Verflucht', 'Ein Fluch lastet auf der Figur, bis eine Bedingung ihn bricht.'],
        ].map(([color, name, desc]) => (
          <div key={name} className="border border-line rounded-[12px] bg-surface px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 shrink-0 rounded-full" style={{ background: color, boxShadow: `0 0 9px ${color}b3` }} />
              <span className="font-head font-semibold text-[17px] text-fg">{name}</span>
            </div>
            <p className="mt-2 font-body text-sm leading-snug text-muted">{desc}</p>
          </div>
        ))}
      </div>
      <Micro className="mt-5 mb-3">Marker</Micro>
      <Panel className="p-6 flex flex-wrap gap-7 justify-between">
        {/* Suchmarker */}
        <Marker label="Suchmarker">
          <div className="w-12 h-12 rounded-full bg-accent-soft border-2 border-accent-line flex items-center justify-center"><div className="w-[18px] h-[18px] rounded-full border-2 border-accent" /></div>
        </Marker>
        {/* Schatztruhe */}
        <Marker label="Schatztruhe">
          <div className="w-12 h-[42px] rounded-[7px] bg-accent-soft border-2 border-accent-line relative"><div className="absolute -left-0.5 -right-0.5 top-3.5 h-0.5 bg-accent-line" /><div className="absolute left-1/2 top-2 -translate-x-1/2 w-2.5 h-2.5 rounded-sm bg-accent" style={{ boxShadow: '0 0 8px var(--qv-accent)' }} /></div>
        </Marker>
        {/* Verschlossene Tür */}
        <Marker label="Verschlossene Tür">
          <div className="w-9 h-12 rounded-[5px] bg-surface-2 border-2 border-accent-line relative"><div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-accent" /></div>
        </Marker>
        {/* Ziel-Marker */}
        <Marker label="Ziel-Marker">
          <div className="w-12 h-12 rounded-full border-2 border-accent-line flex items-center justify-center"><div className="w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: '0 0 8px var(--qv-accent)' }} /></div></div>
        </Marker>
        {/* Overlord-Bedrohung */}
        <Marker label="Overlord-Bedrohung">
          <div className="w-12 h-12 flex items-center justify-center"><div className="w-[30px] h-[30px] bg-accent rotate-45 rounded" style={{ boxShadow: '0 0 14px -2px var(--qv-accent)' }} /></div>
        </Marker>
        {/* Bürger */}
        <Marker label="Bürger (NSC)">
          <div className="w-12 h-12 rounded-full bg-surface-2 border-2 border-line relative overflow-hidden"><div className="absolute left-1/2 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-muted" /><div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-[30px] h-[22px] rounded-full bg-muted" /></div>
        </Marker>
      </Panel>

      {/* 09 Abstände & Raster */}
      <SectionLabel n="09">Abstände &amp; Raster</SectionLabel>
      <p className="max-w-2xl font-body text-[15px] leading-normal text-muted mb-4">
        Alle Abstände und Größen folgen einem 4-px-Basisraster. Das sorgt für gleichmäßige Rhythmik
        über alle Screens hinweg.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Panel className="px-6 py-5">
          <Micro>Abstände</Micro>
          <div className="flex items-end gap-4 mt-5 h-[60px]">
            {[4, 8, 12, 16, 24, 32, 44].map((v) => (
              <div key={v} className="flex flex-col items-center gap-2"><div className="w-6 rounded-sm bg-accent" style={{ height: v }} /><span className="font-mono text-[10px] text-muted">{v}</span></div>
            ))}
          </div>
        </Panel>
        <Panel className="px-6 py-5">
          <Micro>Eckenradien</Micro>
          <div className="flex items-center gap-4 mt-5">
            {[['6', 'rounded-chip'], ['10', 'rounded-control'], ['14', 'rounded-card']].map(([v, cls]) => (
              <div key={v} className="flex flex-col items-center gap-2"><div className={`w-[50px] h-[50px] bg-accent-soft border border-accent-line ${cls}`} /><span className="font-mono text-[10px] text-muted">{v}</span></div>
            ))}
            <div className="flex flex-col items-center gap-2"><div className="w-[74px] h-[34px] bg-accent-soft border border-accent-line rounded-pill" /><span className="font-mono text-[10px] text-muted">Pill</span></div>
          </div>
        </Panel>
      </div>
      <Panel className="mt-4 px-6 py-5">
        <Micro className="mb-4">Layout-Raster</Micro>
        <div className="flex gap-3 h-[170px]">
          <div className="w-[130px] shrink-0 border border-dashed border-accent-line rounded-control bg-accent-soft flex flex-col items-center justify-center gap-1"><span className="font-head font-semibold text-[15px] text-fg">Sidebar</span><span className="font-mono text-[10px] text-muted">238 px</span></div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="h-[38px] shrink-0 border border-dashed border-line rounded-chip bg-surface-2 flex items-center px-3.5"><span className="font-mono text-[10px] text-muted">Topbar · 74 px</span></div>
            <div className="flex-1 flex gap-3 min-h-0">
              <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2.5">
                <div className="border border-dashed border-line rounded-chip bg-surface-2" />
                <div className="border border-dashed border-line rounded-chip bg-surface-2" />
                <div className="border border-dashed border-line rounded-chip bg-surface-2" />
                <div className="border border-dashed border-line rounded-chip bg-surface-2 flex items-end p-2"><span className="font-mono text-[10px] text-muted">Karten-Grid · 2 Spalten</span></div>
              </div>
              <div className="w-24 shrink-0 border border-dashed border-accent-line rounded-chip bg-accent-soft flex flex-col items-center justify-center gap-1 text-center px-1.5"><span className="font-head font-semibold text-[13px] text-fg">Detail</span><span className="font-mono text-[9.5px] text-muted">352 px</span></div>
            </div>
          </div>
        </div>
      </Panel>

      {/* 10 Formulare & Eingaben */}
      <SectionLabel n="10">Formulare &amp; Eingaben</SectionLabel>
      <p className="max-w-2xl font-body text-[15px] leading-normal text-muted mb-4">
        Bausteine für den Quest-Editor. Fokus-Zustand mit Akzentrahmen und weichem Schein;
        Auswahl-Elemente übernehmen die Akzentfarbe des Designs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Panel className="px-6 py-5">
          <Micro>Textfeld · Fokus</Micro>
          <div className="mt-3 h-11 rounded-control bg-surface-2 border border-accent flex items-center px-3.5" style={{ boxShadow: '0 0 0 3px var(--qv-accent-soft)' }}>
            <span className="font-body text-base text-fg">Krone des Schicksals</span>
            <span className="w-[1.5px] h-[19px] bg-accent ml-0.5" />
          </div>
          <Micro className="mt-5">Textbereich</Micro>
          <div className="mt-3 min-h-[82px] rounded-control bg-surface-2 border border-line px-3.5 py-3 font-body text-[15px] text-muted leading-normal">Aus dem Schatten geboren, verschlingt sein Atem das Licht selbst …</div>
        </Panel>
        <Panel className="px-6 py-5">
          <Micro>Auswahl</Micro>
          <div className="mt-3 h-11 rounded-control bg-surface-2 border border-line flex items-center justify-between px-3.5">
            <span className="font-body text-base text-fg">Akt II</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--qv-muted)" strokeWidth="1.6"><path d="M3.5 5.5 L7 9 L10.5 5.5" /></svg>
          </div>
          <Micro className="mt-4">Anzahl · Stepper</Micro>
          <div className="mt-3 flex items-center h-11 w-[150px] rounded-control border border-line bg-surface-2 overflow-hidden">
            <button className="w-11 h-full text-accent-bright text-xl transition-colors hover:bg-accent-soft">−</button>
            <span className="flex-1 text-center font-head font-semibold text-lg text-fg">3</span>
            <button className="w-11 h-full text-accent-bright text-xl transition-colors hover:bg-accent-soft">+</button>
          </div>
        </Panel>
        <Panel className="px-6 py-5">
          <Micro>Kontrollkästchen</Micro>
          <div className="mt-3.5 flex flex-col gap-3">
            {[['Grundspiel', true], ['Labyrinth des Verderbens', true], ['Schloss Rabenfels', false]].map(([label, on]) => (
              <div key={label as string} className="flex items-center gap-2.5">
                <span className={`w-[21px] h-[21px] shrink-0 rounded-chip flex items-center justify-center ${on ? 'bg-accent border border-accent' : 'bg-transparent border border-line'}`}>
                  {on && <span className="w-[5px] h-[9px] -mt-0.5" style={{ borderRight: '2px solid var(--qv-btn-text)', borderBottom: '2px solid var(--qv-btn-text)', transform: 'rotate(43deg)' }} />}
                </span>
                <span className={`font-body text-[15px] ${on ? 'text-fg' : 'text-muted'}`}>{label}</span>
              </div>
            ))}
          </div>
          <Micro className="mt-5">Optionsfelder · Archetyp</Micro>
          <div className="mt-3.5 flex gap-6">
            <div className="flex items-center gap-2.5"><span className="w-5 h-5 shrink-0 rounded-full border-2 border-accent flex items-center justify-center"><span className="w-[9px] h-[9px] rounded-full bg-accent" style={{ boxShadow: '0 0 6px var(--qv-accent)' }} /></span><span className="font-body text-[15px] text-fg">Krieger</span></div>
            <div className="flex items-center gap-2.5"><span className="w-5 h-5 shrink-0 rounded-full border-2 border-line" /><span className="font-body text-[15px] text-muted">Magier</span></div>
          </div>
        </Panel>
        <Panel className="px-6 py-5">
          <Micro>Schalter</Micro>
          <div className="mt-3.5 flex items-center gap-6">
            <div className="flex items-center gap-2.5"><div className="w-[46px] h-[25px] rounded-pill bg-accent relative" style={{ boxShadow: '0 0 12px -2px var(--qv-accent)' }}><div className="absolute right-[3px] top-[3px] w-[19px] h-[19px] rounded-full bg-white" /></div><span className="font-body text-[15px] text-fg">Meister aktiv</span></div>
            <div className="flex items-center gap-2.5"><div className="w-[46px] h-[25px] rounded-pill bg-surface-2 border border-line relative"><div className="absolute left-[3px] top-0.5 w-[19px] h-[19px] rounded-full bg-faint" /></div><span className="font-body text-[15px] text-muted">Aus</span></div>
          </div>
          <Micro className="mt-5">Schieberegler</Micro>
          <div className="mt-5 relative h-1.5 rounded-sm bg-surface-2"><div className="absolute left-0 top-0 bottom-0 rounded-sm bg-accent" style={{ width: '62%' }} /><div className="absolute top-1/2 w-5 h-5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2" style={{ left: '62%', boxShadow: '0 0 0 4px var(--qv-accent-soft)' }} /></div>
        </Panel>
      </div>

      {/* 11 Benachrichtigungen & Toasts */}
      <SectionLabel n="11">Benachrichtigungen &amp; Toasts</SectionLabel>
      <p className="max-w-2xl font-body text-[15px] leading-normal text-muted mb-4">
        Status-Farben sind semantisch und über beide Designs identisch, damit Rückmeldungen
        eindeutig bleiben — Fläche, Rahmen und Typografie folgen dem Thema.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {[
          ['#4a9d5b', '✓', 'Quest gespeichert', '„Krone des Schicksals" wurde im Browser gesichert.'],
          ['#3d84c6', 'i', 'Neue Erweiterung erkannt', '„Nebel von Bilehall" ist jetzt in deiner Sammlung verfügbar.'],
          ['#e0a92b', '!', 'Unbestätigte Werte', 'Einige Monster-Werte sind Platzhalter und noch nicht geprüft.'],
          ['#c23a2d', '×', 'Import fehlgeschlagen', 'Die JSON-Datei konnte nicht gelesen werden. Format prüfen.'],
        ].map(([color, icon, title, body]) => (
          <div key={title} className="relative overflow-hidden flex gap-3 items-start pl-[18px] pr-4 py-3.5 rounded-[12px] bg-surface border border-line" style={{ boxShadow: '0 10px 26px -14px rgba(0,0,0,.55)' }}>
            <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: color }} />
            <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-mono text-[13px] font-bold" style={{ background: `${color}29`, border: `1px solid ${color}`, color }}>{icon}</span>
            <div className="flex-1"><div className="font-head font-semibold text-base text-fg">{title}</div><div className="mt-0.5 font-body text-sm text-muted leading-snug">{body}</div></div>
            <span className="shrink-0 font-mono text-base text-faint cursor-pointer hover:text-fg">×</span>
          </div>
        ))}
      </div>
      <div className="mt-3.5 flex items-center gap-5 flex-wrap">
        {[['#4a9d5b', 'Erfolg'], ['#3d84c6', 'Info'], ['#e0a92b', 'Warnung'], ['#c23a2d', 'Fehler']].map(([c, l]) => (
          <div key={l} className="flex items-center gap-2"><span className="w-[11px] h-[11px] rounded-full" style={{ background: c }} /><span className="font-mono text-xs text-muted">{l}</span></div>
        ))}
      </div>

      {/* 12 Tabellen */}
      <SectionLabel n="12">Tabellen</SectionLabel>
      <p className="max-w-2xl font-body text-[15px] leading-normal text-muted mb-4">
        Kompakte Datentabelle für Listenansichten. Kopfzeile in Mono-Versalien, Zeilen-Hover in
        Akzentfarbe, ausgewählte Zeile hervorgehoben. Leben zeigt Diener · <span className="text-accent-bright">Meister</span>.
      </p>
      <div className="border border-line rounded-card bg-surface overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="grid bg-surface-2 border-b border-line" style={{ gridTemplateColumns: '2fr 1.4fr .8fr .7fr 1.1fr 1.1fr' }}>
            {['MONSTER', 'GRUPPE', 'AKT', 'TEMPO', 'LEBEN · D/M', 'ANGRIFF'].map((h, i) => (
              <div key={h} className={`py-3 px-2 first:pl-4 font-mono text-[9.5px] tracking-[0.1em] text-faint ${i === 3 || i === 4 ? 'text-center' : ''}`}>{h}</div>
            ))}
          </div>
          {ROW_MONSTERS.map(({ m, act }, idx) => {
            const st = statsFor(m, act)
            const sel = idx === ROW_MONSTERS.length - 1
            return (
              <div
                key={m.id}
                className={`grid items-center relative ${idx < ROW_MONSTERS.length - 1 ? 'border-b border-line' : ''} ${sel ? 'bg-accent-soft' : 'hover:bg-accent-soft transition-colors'}`}
                style={{ gridTemplateColumns: '2fr 1.4fr .8fr .7fr 1.1fr 1.1fr' }}
              >
                {sel && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" style={{ boxShadow: '0 0 10px var(--qv-accent)' }} />}
                <div className={`py-3 px-2 pl-4 font-head text-base text-fg ${sel ? 'font-bold' : 'font-semibold'}`}>{m.nameDe}</div>
                <div className="py-3 px-2 font-body text-sm text-muted">{m.nameEn}</div>
                <div className="py-3 px-2"><span className={`px-2 py-0.5 rounded-pill font-mono text-[9px] ${act === 1 ? 'bg-accent-soft text-accent-bright' : 'bg-surface-2 text-muted'}`}>{act === 1 ? 'I' : 'II'}</span></div>
                <div className="py-3 px-2 text-center font-head font-semibold text-[15px] text-fg">{st.n?.speed ?? '–'}</div>
                <div className="py-3 px-2 text-center font-head font-semibold text-[15px] text-fg">{st.n?.health ?? '–'} · <span className="text-accent-bright">{st.master?.health ?? '–'}</span></div>
                <div className="py-3 px-2"><Dice dice={st.n?.attack ?? []} /></div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-11 pt-5 border-t border-line font-mono text-xs text-faint">
        Quest Vault Reborn · Design-System · umschaltbar zwischen Heldentum (Helden-Spieler) und
        Overlord (Spielleiter).
      </div>
    </div>
  )
}

function Marker({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2.5 w-[82px]">
      <div className="h-12 flex items-center justify-center">{children}</div>
      <span className="font-mono text-[11px] text-muted text-center">{label}</span>
    </div>
  )
}
