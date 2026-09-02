export default function DashboardHomePage() {
  return (
    <section className="site-grid site-grid--two dashboard-grid">
      <article className="dashboard-card">
        <p className="site-kicker">TODAY</p>
        <h2>Focus</h2>
        <p className="site-copy">Keep the dashboard lean: one place for tasks, links, and draft notes.</p>
      </article>

      <article className="dashboard-card">
        <p className="site-kicker">QUICK_ACTIONS</p>
        <h2>Ready to use</h2>
        <p className="site-copy">Add or edit weekly modules without the marketing fluff.</p>
      </article>
    </section>
  )
}