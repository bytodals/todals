type HeaderProps = {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="dashboard-topbar">
      <div>
        <p className="site-kicker">DASHBOARD_HOME</p>
        <h1 className="dashboard-topbar__title">{title}</h1>
        <p className="site-copy">{description}</p>
      </div>

      <div className="dashboard-topbar__actions">
        <input className="dashboard-input" placeholder="Search…" aria-label="Search dashboard" />
        <button type="button" className="site-button site-button--ghost">New note</button>
      </div>
    </header>
  )
}