import { IdeaVault } from '@/components/dashboard/IdeaVault'
import { Archive } from '@/components/dashboard/Archive'
import { QuickLinks } from '@/components/dashboard/QuickLinks'
import { NotesSpace } from '@/components/dashboard/NotesSpace'
import { EnergyLog } from '@/components/dashboard/EnergyLog'

export default function DashboardHomePage() {
  return (
    <div className="dashboard-home">
      <header className="dashboard-header">
        <h1>Your creative space</h1>
        <p>Everything you need to keep creating, even on hard days.</p>
      </header>

      <main className="dashboard-grid">
        <IdeaVault />
        <QuickLinks />
        <NotesSpace />
        <Archive />
        <EnergyLog />
      </main>
    </div>
  )
}