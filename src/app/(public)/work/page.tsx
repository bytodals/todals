import { CaseStudyCard } from '@/components/public/CaseStudyCard'
import { projects } from '@/lib/constants'

export default function WorkPage() {
  return (
    <section className="site-shell site-section site-page__content">
      <p className="site-kicker">PORTFOLIO_GRID</p>
      <h1>Selected work</h1>
      <p className="site-copy">Case studies are organized by project and can later be filtered by type or outcome.</p>

      <div className="site-actions" style={{ marginTop: '1.25rem' }}>
        <button type="button" className="site-button site-button--ghost">All</button>
        <button type="button" className="site-button site-button--ghost">Brand</button>
        <button type="button" className="site-button site-button--ghost">Product</button>
      </div>

      <div className="project-grid" style={{ marginTop: '1.5rem' }}>
        {projects.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}