import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'

type HeroProps = {
  title: string
  summary: string
  eyebrow?: string
}

export function Hero({ title, summary, eyebrow = 'PUBLIC_SHOWCASE' }: HeroProps) {
  return (
    <section className="site-shell public-hero">
      <div className="portfolio-tag">
        <span className="portfolio-tag__dot" />
        <span>{eyebrow}</span>
      </div>

      <h1 className="public-hero__title">{title}</h1>
      <p className="public-hero__summary">{summary}</p>

      <div className="site-actions">
        <ButtonLink href="/work" variant="primary">
          View work
        </ButtonLink>
        <Link href="/contact" className="site-button site-button--ghost">
          Start a project
        </Link>
      </div>
    </section>
  )
}