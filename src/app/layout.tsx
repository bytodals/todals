import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Todals',
  description: 'A calm portfolio and dashboard workspace built with Next.js.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}