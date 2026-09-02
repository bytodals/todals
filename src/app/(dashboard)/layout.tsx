import type { ReactNode } from 'react'
import { Header } from '@/components/dashboard/Header'
import { Sidebar } from '@/components/dashboard/Sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-layout__frame">
        <Sidebar />
        <main className="dashboard-layout__main">
          <Header title="Dashboard" description="Your private workspace for links, content, and quick notes." />
          {children}
        </main>
      </div>
    </div>
  )
}