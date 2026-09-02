import Link from 'next/link'
import { navItems, siteName } from '@/lib/constants'

export function Navbar() {
  return (
    <header className="portfolio-nav portfolio-nav--public">
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

          <Link href="/login" className="portfolio-links__login">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}