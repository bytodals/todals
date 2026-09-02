import { CaseStudyCard } from '@/components/public/CaseStudyCard'
import { projects } from '@/lib/constants'

export default function WorkPage() {
  return (
    <section className="site-shell site-section site-page__content">
      <p className="site-kicker">PORTFOLIO_GRID</p>
      <h1>Selected work</h1>
      <p className="site-copy">A simple grid of featured work that can grow as case studies are added to content.</p>

      <div className="project-grid" style={{ marginTop: '1.5rem' }}>
        {projects.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}