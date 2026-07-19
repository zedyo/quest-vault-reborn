import { useMemo, useState, Fragment, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { MONSTERS } from '../data/monsters'
import { EXPANSIONS } from '../data/expansions'
import { monsterCardDeUrl } from '../data/assetUrls'
import {
  DiceSymbol, SurgeSymbol, ActionSymbol, HeartSymbol,
  MovementSymbol, DefenseSymbol, MeleeIcon, RangedIcon, renderGameTextInline,
} from './GameSymbols'
import TraitIcon from './TraitIcon'
import { pickIndexForDay, dayIndex } from '../utils/monsterOfDay'
import {
  aggregateAbilities, statsFor,
  type AbilityBox, type AbilityScope, type AbilityCategory, type BoostRow,
} from '../utils/monsterAbilities'
import { getAbilityErrataByName } from '../data/errataLinks'
import type { DieColor } from '../types/game'

// ── „Monster des Tages" – Dashboard-Widget ───────────────────────────────────
//
// Täglich rotierendes Monster (deterministisch, ohne Server/State) mit
// Diener-/Meister-Werten, Akt-I/II-Umschalter, aufbereiteten Fähigkeiten je Rang
// und Kartenbild. Vollständig theme-getrieben über die --qv-*-Tokens.

// Pool = alle Monster mit vollständigen Diener-/Meister-Werten.
const POOL = MONSTERS.filter((m) => m.normal && m.master)
const EXP_NAME: Record<string, string> = Object.fromEntries(EXPANSIONS.map((e) => [e.id, e.nameDe]))

const COLS = 'minmax(92px, 1.4fr) 1fr 1fr'
const MASTER_DICE_GLOW = 'drop-shadow(0 0 5px var(--qv-accent)) drop-shadow(0 0 2px var(--qv-accent))'

/** Fluide Titelgröße nach Namenslänge (lange Namen kleiner). */
function titleSize(name: string): number {
  const l = name.length
  if (l <= 11) return 24
  if (l <= 14) return 21
  if (l <= 17) return 19
  if (l <= 20) return 17
  return 15
}

function UpArrow() {
  return (
    <span title="In Akt II gegenüber Akt I verstärkt" className="text-accent-bright" style={{ fontSize: 9, lineHeight: 1 }}>
      ▲
    </span>
  )
}

function NumCell({ value, master, up }: { value: number; master?: boolean; up?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className={`font-head ${master ? 'text-accent-bright' : 'text-fg'}`} style={{ fontSize: 20, lineHeight: 1 }}>
        {value}
      </span>
      {up && <UpArrow />}
    </div>
  )
}

function DiceCell({ dice, master, up }: { dice: DieColor[]; master?: boolean; up?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {dice.length === 0 ? (
        <span className="text-muted" style={{ fontSize: 16 }}>—</span>
      ) : (
        <span className="inline-flex items-center gap-0.5" style={master ? { filter: MASTER_DICE_GLOW } : undefined}>
          {dice.map((d, i) => <DiceSymbol key={i} color={d} size={19} />)}
        </span>
      )}
      {up && <UpArrow />}
    </div>
  )
}

function StatRow({ icon, label, diener, meister }: { icon: ReactNode; label: string; diener: ReactNode; meister: ReactNode }) {
  return (
    <div className="grid items-center border-t border-line" style={{ gridTemplateColumns: COLS, padding: '7px 12px' }}>
      <div className="flex items-center gap-1.5 text-muted" style={{ fontSize: 12 }}>
        <span className="inline-flex justify-center" style={{ width: 16 }}>{icon}</span>
        <span>{label}</span>
      </div>
      {diener}
      {meister}
    </div>
  )
}

function ScopePill({ scope }: { scope: AbilityScope }) {
  const cls = 'font-mono uppercase rounded-pill whitespace-nowrap'
  const base = { fontSize: '8.5px', padding: '2px 7px', lineHeight: 1.4 } as const
  if (scope === 'master') {
    return (
      <span className={`${cls} text-accent-bright`} style={{ ...base, background: 'var(--qv-accent-soft)', border: '1px solid var(--qv-accent-line)', boxShadow: 'var(--qv-glow-accent)' }}>
        nur Meister
      </span>
    )
  }
  if (scope === 'minion') {
    return (
      <span className={cls} style={{ ...base, background: 'rgba(61,132,198,.15)', border: '1px solid rgba(61,132,198,.45)', color: 'var(--qv-info)' }}>
        nur Diener
      </span>
    )
  }
  return (
    <span className={`${cls} text-muted`} style={{ ...base, background: 'var(--qv-surface)', border: '1px solid var(--qv-border)' }}>
      Diener + Meister
    </span>
  )
}

function BoostLine({ row }: { row: BoostRow }) {
  const icon = () =>
    row.kind === 'heart'
      ? <HeartSymbol size={14} />
      : <span className="font-mono text-muted" style={{ fontSize: 10 }}>Reichw.</span>
  const parts: ReactNode[] = []
  if (row.minion != null) {
    parts.push(
      <span key="d" className="inline-flex items-center gap-1">
        <span className="text-muted">Diener</span><span className="text-fg">+{row.minion}</span>{icon()}
      </span>,
    )
  }
  if (row.master != null) {
    parts.push(
      <span key="m" className="inline-flex items-center gap-1">
        <span className="text-muted">Meister</span><span className="text-accent-bright">+{row.master}</span>{icon()}
      </span>,
    )
  }
  return (
    <div className="rounded-chip bg-surface-2 border border-line flex items-center flex-wrap gap-x-2 gap-y-1" style={{ padding: '6px 10px', fontSize: 12 }}>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="text-faint">·</span>}
          {p}
        </Fragment>
      ))}
    </div>
  )
}

function AbilityBoxCard({ box }: { box: AbilityBox }) {
  const errata = getAbilityErrataByName(box.baseName)
  const master = box.scope === 'master'
  return (
    <div
      className="rounded-chip bg-surface-2"
      style={{ padding: '7px 10px', border: `1px solid ${master ? 'var(--qv-accent-line)' : 'var(--qv-border)'}` }}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-head font-semibold uppercase tracking-wide text-fg leading-tight" style={{ fontSize: 13 }}>
          {box.title}
        </span>
        <ScopePill scope={box.scope} />
        {errata && (
          <Link
            to={`/klarstellungen?errata=${encodeURIComponent(errata.id)}`}
            className="ml-auto font-mono uppercase hover:brightness-125"
            style={{ fontSize: 9, color: 'var(--qv-warning)', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            Errata ansehen ›
          </Link>
        )}
      </div>
      {box.description && (
        <p className="mt-1 text-muted text-pretty leading-snug" style={{ fontSize: 12 }}>
          {renderGameTextInline(box.description, 13)}
        </p>
      )}
    </div>
  )
}

function AbilityGroup({ title, icon, category }: { title: string; icon: ReactNode; category: AbilityCategory }) {
  if (category.boosts.length === 0 && category.boxes.length === 0) return null
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="inline-flex items-center justify-center" style={{ width: 16, height: 16 }}>{icon}</span>
        <span className="font-mono uppercase text-muted" style={{ fontSize: 10, letterSpacing: '0.08em' }}>{title}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {category.boosts.map((b, i) => <BoostLine key={`b${i}`} row={b} />)}
        {category.boxes.map((box, i) => <AbilityBoxCard key={`x${i}`} box={box} />)}
      </div>
    </div>
  )
}

const PASSIVE_ICON = (
  <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid var(--qv-accent-line)' }} />
)

export default function MonsterOfTheDay() {
  const daily = useMemo(() => POOL[pickIndexForDay(POOL.length, dayIndex())], [])
  const [act, setAct] = useState<1 | 2>(1)
  const [imgError, setImgError] = useState(false)

  const hasAct2 = !!(daily.act2Normal && daily.act2Master)
  const activeAct: 1 | 2 = hasAct2 ? act : 1

  const diener = statsFor(daily, 'normal', activeAct)!
  const master = statsFor(daily, 'master', activeAct)!
  const dienerBase = statsFor(daily, 'normal', 1)!
  const masterBase = statsFor(daily, 'master', 1)!
  const agg = useMemo(() => aggregateAbilities(daily, activeAct), [daily, activeAct])

  const up = activeAct === 2
  const numUp = (cur: number, base: number) => up && cur > base
  const diceUp = (cur: DieColor[], base: DieColor[]) => up && JSON.stringify(cur) !== JSON.stringify(base)

  const isRange = daily.attackType === 'range'
  const AttackTypeIcon = isRange ? <RangedIcon size={14} /> : <MeleeIcon size={15} />
  const expName = EXP_NAME[daily.expansionId] ?? daily.expansionId
  const hasAbilities = agg.passive.boxes.length + agg.surge.boxes.length + agg.surge.boosts.length + agg.action.boxes.length > 0

  return (
    <article className="bg-surface border border-line rounded-card overflow-hidden flex flex-col">
      {/* 1. Bild-Banner */}
      <div className="relative overflow-hidden" style={{ height: 176, borderBottom: '1px solid var(--qv-border)' }}>
        {!imgError ? (
          <img
            src={monsterCardDeUrl(daily.id, 1)}
            alt={daily.nameEn}
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 42%' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-surface-2 flex items-center justify-center text-5xl opacity-30">👹</div>
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.55) 0%, transparent 28%, transparent 52%, rgba(0,0,0,.74) 100%)' }} />

        <div className="absolute flex items-center gap-2" style={{ top: 12, left: 14 }}>
          <span style={{ width: 12, height: 12, transform: 'rotate(45deg)', background: 'var(--qv-accent)', boxShadow: 'var(--qv-glow-accent)' }} />
          <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.14em', color: '#efe8db' }}>Monster des Tages</span>
        </div>

        <div className="absolute" style={{ top: 12, right: 14 }}>
          <span className="inline-flex items-center gap-1 rounded-pill font-mono" style={{ fontSize: 9.5, padding: '3px 8px', background: 'rgba(0,0,0,.52)', color: '#efe8db' }}>
            {AttackTypeIcon}
            {isRange ? 'Fernkampf' : 'Nahkampf'}
          </span>
        </div>

        <div className="absolute" style={{ bottom: 10, left: 14 }}>
          <span className="font-mono uppercase" style={{ fontSize: 9.5, letterSpacing: '0.08em', color: '#efe8db' }}>{expName}</span>
        </div>
      </div>

      {/* 2. Kopf */}
      <div className="flex items-start justify-between gap-3" style={{ padding: '15px 17px 0' }}>
        <div className="min-w-0">
          <h3 className="font-head font-bold text-fg leading-tight" style={{ fontSize: titleSize(daily.nameDe), overflowWrap: 'break-word' }}>
            {daily.nameDe}
          </h3>
          <div className="font-mono uppercase text-muted mt-0.5" style={{ fontSize: 10, letterSpacing: '0.08em' }}>{daily.nameEn}</div>
        </div>
        <div className="shrink-0 flex rounded-control border border-line overflow-hidden">
          {([1, 2] as const).map((a) => {
            const active = activeAct === a
            const disabled = a === 2 && !hasAct2
            return (
              <button
                key={a}
                onClick={() => !disabled && setAct(a)}
                disabled={disabled}
                title={disabled ? 'Für dieses Monster sind keine Akt-II-Werte erfasst.' : undefined}
                className={`font-mono uppercase tracking-wide transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${a === 2 ? 'border-l border-line' : ''} ${active ? '' : 'text-muted hover:text-fg'}`}
                style={{ fontSize: 11, padding: '5px 12px', ...(active ? { background: 'var(--qv-btn)', color: 'var(--qv-btn-text)', boxShadow: 'var(--qv-btn-shadow)' } : { background: 'transparent' }) }}
              >
                Akt {a === 1 ? 'I' : 'II'}
              </button>
            )
          })}
        </div>
      </div>

      {/* 3. Traits */}
      {daily.traits && daily.traits.length > 0 && (
        <div className="flex flex-wrap gap-1.5" style={{ padding: '10px 17px 0' }}>
          {daily.traits.map((t) => (
            <span key={t} className="inline-flex items-center gap-1 rounded-chip bg-surface-2 border border-line text-fg" style={{ fontSize: 11, padding: '2px 8px' }}>
              <TraitIcon trait={t} size={13} />{t}
            </span>
          ))}
        </div>
      )}

      {/* 4. Werte-Tabelle + 5. Gruppengröße */}
      <div style={{ padding: '12px 17px 0' }}>
        <div className="rounded-chip border border-line overflow-hidden">
          {/* Kopfzeile */}
          <div className="grid items-center bg-surface-2" style={{ gridTemplateColumns: COLS, padding: '6px 12px' }}>
            <span className="font-mono uppercase text-faint" style={{ fontSize: 9.5, letterSpacing: '0.08em' }}>Werte</span>
            <span className="font-mono uppercase text-muted text-center" style={{ fontSize: 9.5, letterSpacing: '0.08em' }}>Diener</span>
            <span className="font-mono uppercase text-accent-bright text-center" style={{ fontSize: 9.5, letterSpacing: '0.08em' }}>Meister</span>
          </div>
          <StatRow
            icon={<MovementSymbol size={14} />} label="Tempo"
            diener={<NumCell value={diener.speed} up={numUp(diener.speed, dienerBase.speed)} />}
            meister={<NumCell value={master.speed} master up={numUp(master.speed, masterBase.speed)} />}
          />
          <StatRow
            icon={<HeartSymbol size={14} />} label="Leben"
            diener={<NumCell value={diener.health} up={numUp(diener.health, dienerBase.health)} />}
            meister={<NumCell value={master.health} master up={numUp(master.health, masterBase.health)} />}
          />
          <StatRow
            icon={<DefenseSymbol size={14} />} label="Verteidigung"
            diener={<DiceCell dice={diener.defense} up={diceUp(diener.defense, dienerBase.defense)} />}
            meister={<DiceCell dice={master.defense} master up={diceUp(master.defense, masterBase.defense)} />}
          />
          <StatRow
            icon={AttackTypeIcon} label="Angriff"
            diener={<DiceCell dice={diener.attack} up={diceUp(diener.attack, dienerBase.attack)} />}
            meister={<DiceCell dice={master.attack} master up={diceUp(master.attack, masterBase.attack)} />}
          />
        </div>

        {daily.groupSizes && (
          <div className="mt-3">
            <div className="font-mono text-faint" style={{ fontSize: 9.5 }}>Gruppe · Diener / Meister</div>
            <div className="mt-1 flex items-center gap-2 font-mono" style={{ fontSize: 9.5 }}>
              {([['2', daily.groupSizes.p2], ['3', daily.groupSizes.p3], ['4', daily.groupSizes.p4]] as const).map(([n, comp], i) => (
                <Fragment key={n}>
                  {i > 0 && <span className="text-line">│</span>}
                  <span>
                    <span className="text-faint">{n} Sp. </span>
                    <span className="text-fg">{comp[0]}/{comp[1]}</span>
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 6. Fähigkeiten */}
      <div className="flex flex-col gap-3" style={{ padding: '14px 17px 0' }}>
        {hasAbilities ? (
          <>
            <AbilityGroup title="Fähigkeiten" icon={PASSIVE_ICON} category={agg.passive} />
            <AbilityGroup title="Energie" icon={<SurgeSymbol size={14} />} category={agg.surge} />
            <AbilityGroup title="Aktionen" icon={<ActionSymbol size={14} />} category={agg.action} />
          </>
        ) : (
          <p className="text-muted" style={{ fontSize: 12 }}>Keine besonderen Fähigkeiten.</p>
        )}
      </div>

      {/* 7. Footer */}
      <div className="mt-auto flex items-center justify-between gap-3" style={{ padding: '16px 17px' }}>
        <Link to={`/monster?q=${encodeURIComponent(daily.nameDe)}`} className="font-head font-semibold text-accent-bright hover:brightness-110" style={{ fontSize: 13 }}>
          Im Kompendium ansehen ›
        </Link>
        <span className="font-mono text-faint" style={{ fontSize: 9, letterSpacing: '0.1em' }}>ROTIERT TÄGLICH</span>
      </div>
    </article>
  )
}
