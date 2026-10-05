import Link from 'next/link'
import { socialLinks, siteName } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="site-shell site-section site-footer">
      <div className="site-card site-footer__inner">
        <p className="muted">© {new Date().getFullYear()} {siteName}</p>

        <div className="site-footer__links">
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} className="muted" target="_blank" rel="noreferrer">
              {link.label}
            </Link>
          ))}

          <Link href="mailto:todals@hotmail.com" className="muted">
            Email
          </Link>

          <Link href="/login" className="muted">
            Login
          </Link>
        </div>
      </div>
    </footer>
  )
}