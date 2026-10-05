import Link from 'next/link'

type QuickLink = {
  id: string
  label: string
  url: string
  category: 'analytics' | 'editing' | 'support' | 'social'
  icon?: string
}

const DEFAULT_LINKS: QuickLink[] = [
  {
    id: '1',
    label: 'Throne',
    url: 'https://throne.com/todals',
    category: 'support',
  },
  {
    id: '2',
    label: 'Ko-fi',
    url: 'https://ko-fi.com/todals',
    category: 'support',
  },
  {
    id: '3',
    label: 'Instagram Insights',
    url: 'https://instagram.com/todals/insights',
    category: 'analytics',
  },
  {
    id: '4',
    label: 'Threads',
    url: 'https://threads.net/@todals',
    category: 'social',
  },
]

type QuickLinksProps = {
  links?: QuickLink[]
}

export function QuickLinks({ links = DEFAULT_LINKS }: QuickLinksProps) {
  const grouped = links.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = []
    }
    acc[link.category].push(link)
    return acc
  }, {} as Record<string, QuickLink[]>)

  return (
    <section className="dashboard-module quick-links">
      <div className="module-header">
        <div>
          <p className="site-kicker">TOOLS</p>
          <h2>Quick links</h2>
        </div>
      </div>

      <div className="module-content">
        <div className="links-grid">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link-button"
              title={link.label}
            >
              <span>{link.label}</span>
              <span className="link-category">{link.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
