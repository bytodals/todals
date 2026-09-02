import type { Project } from '@/types'

type CaseStudyProps = {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  return (
    <article className="site-card">
      <div className="project-card__meta">
        <span>{project.category}</span>
        <span>•</span>
        <span>{project.year}</span>
      </div>

      <h1 className="project-card__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        {project.title}
      </h1>

      <p className="site-copy">{project.description}</p>

      <section className="site-section" style={{ paddingBottom: 0 }}>
        <h2>Highlights</h2>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}