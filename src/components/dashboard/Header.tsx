type HeaderProps = {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="dashboard-topbar">
      <div>
        <p className="site-kicker">DASHBOARD_HOME</p>
        <h1 style={{ margin: '0.75rem 0 0.25rem', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>{title}</h1>
        <p className="site-copy">{description}</p>
      </div>

      <div className="dashboard-topbar__actions">
        <input className="dashboard-input" placeholder="Search…" aria-label="Search dashboard" />
        <button type="button" className="site-button site-button--ghost">New note</button>
      </div>
    </header>
  )
}