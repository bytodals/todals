import Link from 'next/link'
import type { Project } from '@/types'

type CaseStudyCardProps = {
  project: Project
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  return (
    <article className="site-card project-card">
      <div className="project-card__meta">
        <span>{project.category}</span>
        <span>•</span>
        <span>{project.year}</span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="site-copy">{project.summary}</p>

      <div className="project-card__actions">
        <Link href={`/work/${project.slug}`} className="site-link site-button--ghost">
          Read case study
        </Link>
      </div>
    </article>
  )
}