import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-layout">
      <main className="auth-layout__main">{children}</main>
    </div>
  )
}