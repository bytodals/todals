import { CaseStudyCard } from '@/components/public/CaseStudyCard'
import { Hero } from '@/components/public/Hero'
import { SocialProof } from '@/components/public/SocialProof'
import { projects } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Design-led portfolio and dashboard space for calm, useful work."
        summary="A starting point for a public portfolio, portfolio case studies, and a private dashboard area you can grow over time."
      />

      <section className="site-shell site-section">
        <div className="site-grid site-grid--two">
          {projects.slice(0, 2).map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <SocialProof />
    </>
  )
}