import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MapBuilderPage from './pages/MapBuilderPage'
import QuestEditorPage from './pages/QuestEditorPage'
import SessionsPage from './pages/SessionsPage'
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
        <Route element={<PagePadding />}>
          <Route path="karte" element={<MapBuilderPage />} />
          <Route path="quest" element={<QuestEditorPage />} />
          <Route path="session" element={<SessionsPage />} />
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
