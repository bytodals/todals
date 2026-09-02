export default function DashboardHomePage() {
  return (
    <section className="site-grid site-grid--two">
      <article className="dashboard-card">
        <p className="site-kicker">OVERVIEW</p>
        <h2>Private workspace</h2>
        <p className="site-copy">Use this area for an internal homepage, notes, and task summaries.</p>
      </article>

      <article className="dashboard-card">
        <p className="site-kicker">STATUS</p>
        <h2>Ready for modules</h2>
        <p className="site-copy">Add content, links, or whatever other admin bits you need next.</p>
      </article>
    </section>
  )
}