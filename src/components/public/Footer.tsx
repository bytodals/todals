import Link from 'next/link'
import { socialLinks, siteName } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="site-shell site-section" style={{ paddingTop: 0 }}>
      <div className="site-card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem' }}>
        <p className="muted">© {new Date().getFullYear()} {siteName}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} className="muted" target="_blank" rel="noreferrer">
              {link.label}
            </Link>
          ))}

          <Link href="mailto:hello@todals.com" className="muted">
            hello@todals.com
          </Link>
        </div>
      </div>
    </footer>
  )
}