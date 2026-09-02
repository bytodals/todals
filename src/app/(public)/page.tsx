import Link from 'next/link'
import { CaseStudyCard } from '@/components/public/CaseStudyCard'
import { Hero } from '@/components/public/Hero'
import { SocialProof } from '@/components/public/SocialProof'
import { projects } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Clean portfolio design for people who want to move fast and still look sharp."
        summary="I design mobile-first portfolio experiences, case studies, and practical dashboards that help visitors understand the work in seconds."
      />

      <section className="site-shell site-section">
        <div className="site-card public-about">
          <p className="site-kicker">WHO_I_AM</p>
          <h2>Small team feel. One-person clarity.</h2>
          <p className="site-copy">
            I focus on strong typography, clear structure, and pages that tell the story quickly without making people work for it.
          </p>
        </div>
      </section>

      <SocialProof />

      <section className="site-shell site-section">
        <div className="site-shell__heading">
          <div>
            <p className="site-kicker">FEATURED_WORK</p>
            <h2>Three projects worth your time</h2>
          </div>

          <Link href="/work" className="site-link site-button--ghost">
            See all work
          </Link>
        </div>

        <div className="site-grid site-grid--two">
          {projects.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="site-card public-cta">
          <p className="site-kicker">LETS_BUILD</p>
          <h2>Need a public site that earns the click?</h2>
          <p className="site-copy">This starter structure is ready for your own visuals, case studies, and dashboard modules.</p>
          <div className="site-actions">
            <Link href="/contact" className="site-button site-button--primary">Book a call</Link>
            <Link href="/login" className="site-button site-button--ghost">Login</Link>
          </div>
        </div>
      </section>
    </>
  )
}