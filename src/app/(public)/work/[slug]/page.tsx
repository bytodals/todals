import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/lib/constants'

type CaseStudyPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = projects.find((item) => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <section className="site-shell site-section site-page__content">
      <article className="site-card case-study">
        <div className="case-study__hero" aria-hidden="true">
          <div className="case-study__hero-copy">
            <span>{project.category}</span>
            <strong>{project.result}</strong>
          </div>
        </div>

        <p className="site-kicker">CASE_STUDY</p>
        <h1>{project.title}</h1>
        <p className="site-copy">{project.description}</p>

        <section className="case-study__section">
          <h2>Problem</h2>
          <p className="site-copy">The site needed a clean, confident public presence that could quickly convert social traffic into real interest.</p>
        </section>

        <section className="case-study__section">
          <h2>Process</h2>
          <p className="site-copy">The layout prioritizes mobile hierarchy, minimal navigation, and strong visuals over decorative complexity.</p>
        </section>

        <section className="case-study__section">
          <h2>Result</h2>
          <p className="site-copy">{project.result}. The page system is easy to extend with new work and more detailed galleries later.</p>
        </section>

        <section className="case-study__section">
          <h2>Gallery</h2>
          <div className="case-study__gallery">
            {project.tags.map((tag) => (
              <div key={tag} className="case-study__gallery-tile">
                {tag}
              </div>
            ))}
          </div>
        </section>

        <section className="case-study__section case-study__next">
          <span className="muted">Next project</span>
          <Link href={`/work/${nextProject.slug}`}>{nextProject.title}</Link>
        </section>
      </article>
    </section>
  )
}