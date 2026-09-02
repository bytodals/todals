import Link from 'next/link'
import { navItems, siteName } from '@/lib/constants'

export function Navbar() {
  return (
    <header className="portfolio-nav">
      <div className="site-shell portfolio-nav__inner">
        <Link href="/" className="portfolio-logo">
          {siteName}
        </Link>

        <nav className="portfolio-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}