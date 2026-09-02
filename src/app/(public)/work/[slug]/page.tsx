import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/public/CaseStudy'
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

  return (
    <section className="site-shell site-section site-page__content">
      <CaseStudy project={project} />
    </section>
  )
}