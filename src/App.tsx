import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MapBuilderPage from './pages/MapBuilderPage'
import QuestEditorPage from './pages/QuestEditorPage'
import SessionsPage, { SessionShell } from './pages/SessionsPage'
import OverviewSection from './components/session/overview/OverviewSection'
import HeroesSection from './components/session/HeroesSection'
import HeroSheet from './components/session/HeroSheet'
import OverlordSection from './components/session/OverlordSection'
import OverlordCards from './components/session/OverlordCards'
import HistorySection from './components/session/HistorySection'
import AdventureCardsSection from './components/session/AdventureCardsSection'
import SetupSection from './components/session/SetupSection'
import ScenarioFlow from './components/session/flow/ScenarioFlow'
import CollectionPage from './pages/CollectionPage'
import MonstersPage from './pages/MonstersPage'
import HeroesPage from './pages/HeroesPage'
import ClassesPage from './pages/ClassesPage'
import ItemsPage from './pages/ItemsPage'
import OverlordPage from './pages/OverlordPage'
import LieutenantsPage from './pages/LieutenantsPage'
import AgentsPage from './pages/AgentsPage'
import PlotDecksPage from './pages/PlotDecksPage'
import CampaignsPage from './pages/CampaignsPage'
import TravelCardsPage from './pages/TravelCardsPage'
import RumorsPage from './pages/RumorsPage'
import ConditionsPage from './pages/ConditionsPage'
import RulesReferencePage from './pages/RulesReferencePage'
import RulesClarificationsPage from './pages/RulesClarificationsPage'
import RulesSearchPage from './pages/RulesSearchPage'
import DesignSystemPage from './pages/DesignSystemPage'

// Das Dashboard (Startseite) bringt sein eigenes Layout mit (full-bleed). Alle
// übrigen Seiten laufen weiterhin in einem zentrierten, gepolsterten Container –
// derselbe Rahmen wie in der alten Layout-Hülle, damit ihr Aufbau unverändert bleibt.
function PagePadding() {
  return (
    <div className="mx-auto max-w-7xl w-full px-4 py-6">
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* Session-Tracker: eigene Shell mit Abschnittsleiste (full-bleed, damit
            Kopfzeile, Abschnittsleiste und Detailspalten die volle Breite haben). */}
        <Route path="session" element={<SessionsPage />} />
        <Route path="session/:sessionId/abschluss" element={<ScenarioFlow />} />
        <Route path="session/:sessionId" element={<SessionShell />}>
          <Route index element={<OverviewSection />} />
          <Route path="helden" element={<HeroesSection />} />
          <Route path="helden/:heroId" element={<HeroSheet />} />
          <Route path="overlord" element={<OverlordSection />} />
          <Route path="overlord/karten" element={<OverlordCards />} />
          <Route path="verlauf" element={<HistorySection />} />
          <Route path="verlauf/karten" element={<AdventureCardsSection />} />
          <Route path="einrichtung" element={<SetupSection />} />
        </Route>

        <Route element={<PagePadding />}>
          <Route path="karte" element={<MapBuilderPage />} />
          <Route path="quest" element={<QuestEditorPage />} />
          <Route path="sammlung" element={<CollectionPage />} />
          <Route path="monster" element={<MonstersPage />} />
          <Route path="helden" element={<HeroesPage />} />
          <Route path="klassen" element={<ClassesPage />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path="overlord" element={<OverlordPage />} />
          <Route path="leutnants" element={<LieutenantsPage />} />
          <Route path="agenten" element={<AgentsPage />} />
          <Route path="plotdecks" element={<PlotDecksPage />} />
          <Route path="kampagnen" element={<CampaignsPage />} />
          <Route path="reisekarten" element={<TravelCardsPage />} />
          <Route path="geruechte" element={<RumorsPage />} />
          <Route path="zustaende" element={<ConditionsPage />} />
          <Route path="regeln" element={<RulesReferencePage />} />
          <Route path="klarstellungen" element={<RulesClarificationsPage />} />
          <Route path="suche" element={<RulesSearchPage />} />
          <Route path="designsystem" element={<DesignSystemPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
