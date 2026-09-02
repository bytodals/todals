import type { ReactNode } from 'react'
import { Footer } from '@/components/public/Footer'
import { Navbar } from '@/components/public/Navbar'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="public-layout">
      <Navbar />
      <main className="public-layout__main">{children}</main>
      <Footer />
    </div>
  )
}