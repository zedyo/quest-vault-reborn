import { Link } from 'react-router-dom'
import {
  HeartSymbol,
  SurgeSymbol,
  FatigueSymbol,
  ActionSymbol,
  MovementSymbol,
  DefenseSymbol,
  DiceSymbol,
} from '../components/GameSymbols'
import {
  GAME_SYMBOLS,
  ATTACK_DICE,
  DEFENSE_DICE,
  GAMEPLAY_STEPS,
  GLOSSARY,
  type SymbolInfo,
} from '../data/rulesReference'

// Render-Map: Symbol-Schlüssel → Glyph-Komponente (größer für die Referenz).
function SymbolGlyph({ symbol }: { symbol: SymbolInfo['symbol'] }) {
  switch (symbol) {
    case 'heart': return <HeartSymbol size={26} />
    case 'surge': return <SurgeSymbol size={24} />
    case 'fatigue': return <FatigueSymbol size={26} />
    case 'action': return <ActionSymbol size={24} />
    case 'movement': return <MovementSymbol size={26} />
    case 'defense': return <DefenseSymbol size={26} />
  }
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-lg text-gold-300 font-semibold mb-3">{children}</h3>
}

export default function RulesReferencePage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="font-display text-2xl text-gold-400 font-bold mb-1">Regeln &amp; Referenz</h2>
        <p className="text-gray-400 text-sm">
          Schnellnachschlag für Symbole, Würfel und den Spielablauf – knappe eigene Erklärungen,
          kein Ersatz für das offizielle Regelheft.
        </p>
      </div>

      {/* Kartensymbole */}
      <section>
        <SectionTitle>Symbole</SectionTitle>
        <div className="grid gap-2 sm:grid-cols-2">
          {GAME_SYMBOLS.map((s) => (
            <div key={s.id} className="card flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded bg-dungeon-800 border border-dungeon-600">
                <SymbolGlyph symbol={s.symbol} />
              </div>
              <div className="min-w-0">
                <p className="text-gold-200 font-semibold text-sm leading-tight">
                  {s.nameDe} <span className="text-gray-600 font-normal">· {s.nameEn}</span>
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{s.descriptionDe}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Würfel */}
      <section>
        <SectionTitle>Würfel</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-gray-300 text-sm font-medium mb-2">Angriffswürfel</p>
            <div className="space-y-1.5">
              {ATTACK_DICE.map((d) => (
                <div key={d.color} className="flex gap-2.5 items-start">
                  <span className="shrink-0 mt-0.5"><DiceSymbol color={d.color} size={22} /></span>
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-200 font-medium">{d.nameDe}:</span> {d.descriptionDe}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-300 text-sm font-medium mb-2">Verteidigungswürfel</p>
            <div className="space-y-1.5">
              {DEFENSE_DICE.map((d) => (
                <div key={d.color} className="flex gap-2.5 items-start">
                  <span className="shrink-0 mt-0.5"><DiceSymbol color={d.color} size={22} /></span>
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-200 font-medium">{d.nameDe}:</span> {d.descriptionDe}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spielablauf */}
      <section>
        <SectionTitle>Spielablauf (Kurzreferenz)</SectionTitle>
        <div className="space-y-2">
          {GAMEPLAY_STEPS.map((g) => (
            <div key={g.id} className="card">
              <p className="text-gold-200 font-semibold text-sm">{g.title}</p>
              <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{g.textDe}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Glossar */}
      <section>
        <SectionTitle>Begriffe</SectionTitle>
        <dl className="grid gap-2 sm:grid-cols-2">
          {GLOSSARY.map((t) => (
            <div key={t.id} className="card">
              <dt className="text-gold-200 font-semibold text-sm">
                {t.link ? (
                  <Link to={t.link} className="hover:text-gold-400 transition-colors underline decoration-dotted underline-offset-2">
                    {t.term}
                  </Link>
                ) : t.term}
              </dt>
              <dd className="text-gray-400 text-xs mt-0.5 leading-relaxed">{t.textDe}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="text-gray-600 text-xs border-t border-dungeon-800 pt-4">
        Hinweis: Diese Seite fasst allgemein bekannte Grundmechaniken in eigenen Worten zusammen.
        Verbindlich sind allein die offiziellen Regelhefte und Questbücher von Fantasy Flight Games / Asmodee.
      </p>
    </div>
  )
}
