import Link from 'next/link'

const items = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/content', label: 'Content' },
  { href: '/dashboard/links', label: 'Links' },
  { href: '/login', label: 'Log out' },
]

export function Sidebar() {
  return (
    <aside className="dashboard-layout__sidebar">
      <p className="site-kicker">PRIVATE_AREA</p>
      <h2 style={{ margin: '1rem 0 0.5rem' }}>Dashboard</h2>
      <p className="site-copy">A compact workspace for planning, linking, and quick updates.</p>

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