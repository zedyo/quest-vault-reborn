// ── Screen 5 · Heldenbogen ───────────────────────────────────────────────────
//
// Der wichtigste Fix des Redesigns: jede Fähigkeit und jeder Gegenstand zeigt
// seinen Regeltext direkt; der Kartenscan ist nur noch Miniatur zum Vergrößern.
// NICHT gelernte Fähigkeiten stehen hier NICHT — sie erscheinen ausschließlich
// in Flow-Schritt 3 („Erfahrung").

import { Link, useParams } from 'react-router'
import { useSessionCtx } from './context'
import { ARCHETYPE_LABELS } from '../../data/heroes'
import { classSkillDeUrl, classFamiliarDeUrl } from '../../data/assetUrls'
import {
  CLASS_BY_ID,
  HERO_BY_ID,
  itemCardUrl,
  itemRulesText,
  itemSlotLabel,
  resolveItemName,
  skillCost,
} from './sessionHelpers'
import ArchetypeIcon from '../ArchetypeIcon'
import CardThumb from './ui/CardThumb'
import CardTile from './ui/CardTile'
import { renderGameText } from '../GameSymbols'
import { DiceRow } from '../DiceDisplay'
import { HealthIcon, SpeedIcon } from '../StatIcons'
import { Eyebrow, Head, LinkBtn, Meta, ThemeScope } from './ui/controls'
import { Icon } from '../QvIcons'
import HeroAvatar from './ui/HeroAvatar'

export default function HeroSheet() {
  const { heroId } = useParams()
  const { session, live } = useSessionCtx()
  const hero = session.heroes.find((h) => h.localId === heroId) ?? null

  if (!hero) {
    return (
      <div className="p-6">
        <Head size="s">Dieser Held gehört nicht zu dieser Kampagne.</Head>
        <Link to={`/session/${session.id}/helden`} className="mt-2 inline-block text-[14px] text-accent underline">
          Zurück zur Partei
        </Link>
      </div>
    )
  }

  const data = HERO_BY_ID[hero.heroId]
  const cls = hero.classId ? CLASS_BY_ID[hero.classId] : null
  const hl = live.heroes[hero.localId]
  const owned = new Set(hl?.ownedSkillIds ?? [])
  const ownedSkills = cls ? cls.skills.filter((s) => owned.has(s.id)) : []
  const buyableSkills = cls
    ? cls.skills.filter((s) => !owned.has(s.id) && typeof s.xpCost === 'number' && s.xpCost > 0)
    : []
  const buyableCost = buyableSkills.reduce((n, s) => n + skillCost(s), 0)

  return (
    <ThemeScope theme="heldentum" className="bg-bg min-h-full">
      {/* Kopfzeile */}
      <div className="flex items-center gap-3 px-4 sm:px-6 py-3.5 border-b border-line bg-surface-2 flex-wrap">
        <Link
          to={`/session/${session.id}/helden`}
          className="inline-flex items-center gap-2 h-11 sm:h-auto text-[13.5px] text-muted hover:text-fg transition-colors"
        >
          <Icon name="chevron-left" size={15} />
          Helden
        </Link>
        <span className="text-faint">/</span>
        <span className="font-head text-[14px] font-semibold text-fg truncate">{data?.name ?? hero.heroId}</span>
        <div className="ml-auto flex gap-2">
          {session.heroes.map((h) => (
            <Link
              key={h.localId}
              to={`/session/${session.id}/helden/${h.localId}`}
              title={HERO_BY_ID[h.heroId]?.name ?? h.heroId}
              className={`w-[30px] h-[30px] rounded-chip border inline-flex items-center justify-center transition-colors ${
                h.localId === hero.localId
                  ? 'bg-accent border-accent'
                  : 'bg-surface border-line hover:border-accent-line'
              }`}
            >
              <HeroAvatar hero={h} size={25} dimmed={h.localId !== hero.localId} withTitle={false} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Linke Spalte */}
        <div className="w-full lg:w-[340px] shrink-0 border-b lg:border-b-0 lg:border-r border-line p-5 sm:p-[22px] flex flex-col gap-[18px]">
          <div
            className="h-[190px] rounded-card border border-accent-line flex items-end p-3 relative overflow-hidden"
            style={{
              background:
                'repeating-linear-gradient(135deg, var(--qv-accent-soft) 0 8px, transparent 8px 16px), radial-gradient(circle at 50% 28%, var(--qv-accent-soft), transparent 70%), var(--qv-surface-2)',
            }}
          >
            {data?.imageUrl ? (
              <img
                src={data.imageUrl}
                alt={data.name}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'left top' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            ) : (
              <span className="relative inline-flex items-center rounded-pill border border-line px-2.5 py-[3px] font-mono text-[9px] tracking-[0.14em] uppercase text-muted">
                Heldenporträt
              </span>
            )}
          </div>

          <div>
            <h3 className="font-head text-[24px] font-bold leading-[1.15] text-fg">{data?.name ?? hero.heroId}</h3>
            <p className="mt-1 text-[14.5px] text-muted">
              {hero.playerName.trim() ? `gespielt von ${hero.playerName.trim()}` : 'noch keinem Spieler zugeordnet'}
            </p>
            {data && (
              <div className="flex items-center gap-2 mt-2.5">
                <ArchetypeIcon archetype={data.archetype} size={20} />
                <span className="text-[14px] text-muted">{ARCHETYPE_LABELS[data.archetype]}</span>
                {cls && (
                  <>
                    <span className="text-faint">·</span>
                    <span className="font-head text-[14px] font-semibold text-fg">{cls.nameDe}</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 rounded-control border border-line overflow-hidden">
            {[
              { v: hl?.xpAvailable ?? 0, l: 'offen', accent: true },
              { v: hl?.xpEarned ?? 0, l: 'verdient', accent: false },
              { v: hl?.xpSpent ?? 0, l: 'ausgegeben', accent: false },
            ].map((f, i) => (
              <div
                key={f.l}
                className={`p-2.5 text-center ${i < 2 ? 'border-r border-line' : ''} ${
                  f.accent ? 'bg-accent-soft' : 'bg-surface'
                }`}
              >
                <p
                  className={`font-head text-[22px] font-bold leading-none tabular-nums ${
                    f.accent ? 'text-accent' : 'text-fg'
                  }`}
                >
                  {f.v}
                </p>
                <p className="mt-1 font-mono text-[9px] tracking-[0.12em] uppercase text-muted">{f.l}</p>
              </div>
            ))}
          </div>

          <div>
            <Eyebrow className="mb-2.5">Ausrüstung · {hl?.ownedItemRefs.length ?? 0}</Eyebrow>
            {(hl?.ownedItemRefs.length ?? 0) === 0 ? (
              <p className="text-[13px] text-muted">Noch nichts im Besitz.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {hl!.ownedItemRefs.map((ref) => (
                  <div
                    key={ref.refId}
                    className="flex gap-2.5 px-2.5 py-2.5 rounded-control border border-line bg-surface"
                  >
                    <CardThumb url={itemCardUrl(ref)} name={resolveItemName(ref)} size="xs" />
                    <div className="min-w-0 flex-1">
                      <p className="font-head text-[13.5px] font-semibold text-fg">{resolveItemName(ref)}</p>
                      <p className="mt-0.5 font-mono text-[8.5px] tracking-[0.12em] uppercase text-faint">
                        {itemSlotLabel(ref)}
                      </p>
                      <p className="mt-1 text-[12px] leading-[1.4] text-muted">
                        {renderGameText(itemRulesText(ref) || 'Kein Regeltext hinterlegt.', 12)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Rechte Spalte */}
        <div className="flex-1 min-w-0 p-5 sm:px-6 sm:py-[22px] flex flex-col gap-5">
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
              <div>
                <Head size="s">Fähigkeiten</Head>
                <p className="mt-1 text-[13.5px] text-muted">
                  Nur was {data?.name.split(' ')[0] ?? 'dieser Held'} wirklich besitzt — vollständiger Regeltext, kein
                  Aufklappen nötig.
                </p>
              </div>
              {cls && (
                <Meta>
                  {ownedSkills.length} von {cls.skills.length} Karten
                </Meta>
              )}
            </div>

            {!cls ? (
              <p className="text-[13.5px] text-muted">
                Noch keine Klasse gewählt — das passiert in der{' '}
                <Link to={`/session/${session.id}/einrichtung`} className="underline text-accent">
                  Einrichtung
                </Link>
                .
              </p>
            ) : ownedSkills.length === 0 ? (
              <p className="text-[13.5px] text-muted">Noch keine Fähigkeit im Besitz.</p>
            ) : (
              <div className="grid gap-3 lg:grid-cols-2">
                {ownedSkills.map((s) => (
                  <CardTile
                    key={s.id}
                    title={s.nameDe}
                    cost={s.xpCost === 0 ? 'Start' : s.xpCost === 'elemental' ? 'Elementar' : `${s.xpCost} XP`}
                    rulesText={s.rulesDe}
                    thumbUrl={classSkillDeUrl(cls.id, s.id)}
                    thumbSize="tile"
                    className="shadow-card"
                  />
                ))}
              </div>
            )}
          </div>

          {buyableSkills.length > 0 && (
            <div className="px-4 py-3.5 rounded-card border border-dashed border-line flex items-center gap-4 flex-wrap">
              <div className="flex-1 min-w-[16rem]">
                <p className="font-head text-[15px] font-semibold text-fg">
                  {buyableSkills.length} weitere {buyableSkills.length === 1 ? 'Fähigkeit ist' : 'Fähigkeiten sind'}{' '}
                  kaufbar — für {buyableCost} XP
                </p>
                <p className="mt-1 text-[13.5px] text-muted">
                  {buyableSkills.map((s) => `${s.nameDe} (${skillCost(s)} XP)`).join(' · ')}. Gelernt wird im Schritt
                  „Erfahrung" nach einem Szenario — deshalb liegen sie nicht hier herum.
                </p>
              </div>
              <LinkBtn variant="secondary" size="sm" to={`/session/${session.id}/abschluss?step=3`}>
                XP jetzt ausgeben
              </LinkBtn>
            </div>
          )}

          <div>
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <Head size="s">Klassen-Begleiter</Head>
              <Meta>aus der Klasse abgeleitet</Meta>
            </div>
            {cls?.familiar ? (
              <CardTile
                title={cls.familiar.nameDe}
                cost={cls.familiar.attackType}
                rulesText={cls.familiar.rulesDe}
                thumbUrl={classFamiliarDeUrl(cls.id)}
                above={
                  <span className="flex items-center gap-3 flex-wrap">
                    {cls.familiar.speed != null && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                        <SpeedIcon size={13} />
                        {cls.familiar.speed}
                      </span>
                    )}
                    {cls.familiar.health != null && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                        <HealthIcon size={13} />
                        {cls.familiar.health}
                      </span>
                    )}
                    {/* Verteidigung ist eine WÜRFELFARBE, keine Zahl. */}
                    {!!cls.familiar.defense?.length && <DiceRow dice={cls.familiar.defense} />}
                  </span>
                }
              />
            ) : (
              <div className="px-4 py-3.5 rounded-card border border-line bg-surface-2">
                <p className="text-[13.5px] leading-[1.55] text-muted">
                  {cls ? `${cls.nameDe} hat keinen Begleiter.` : 'Ohne Klasse gibt es keinen Begleiter.'} Bei Klassen mit
                  Begleiter steht hier dessen Karte mit Bewegung, Leben, Verteidigung und vollem Regeltext — genau wie
                  eine Fähigkeit.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeScope>
  )
}
