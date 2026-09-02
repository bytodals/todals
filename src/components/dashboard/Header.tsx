type HeaderProps = {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="site-card" style={{ marginBottom: '1.25rem' }}>
      <p className="site-kicker">DASHBOARD_HOME</p>
      <h1 style={{ margin: '1rem 0 0.5rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{title}</h1>
      <p className="site-copy">{description}</p>
    </header>
  )
}