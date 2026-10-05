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

      <h1 className="project-card__title case-study__title">
        {project.title}
      </h1>

      <p className="site-copy">{project.description}</p>

      <section className="site-section case-study__highlights">
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