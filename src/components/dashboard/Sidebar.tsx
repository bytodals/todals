import Link from 'next/link'

const items = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/content', label: 'Content' },
  { href: '/dashboard/links', label: 'Links' },
  { href: '/login', label: 'Log out' },
]

export function Sidebar() {
  return (
    <aside className="dashboard-layout__sidebar">
      <p className="site-kicker">PRIVATE_AREA</p>
      <h2 style={{ margin: '1rem 0 0.5rem' }}>Todals</h2>
      <p className="site-copy">Sidebar navigation for the tools you actually use.</p>

      <nav className="dashboard-nav" aria-label="Dashboard navigation">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}