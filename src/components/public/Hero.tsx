import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'

type HeroProps = {
  title: string
  summary: string
  eyebrow?: string
}

export function Hero({ title, summary, eyebrow = 'WELCOME' }: HeroProps) {
  return (
    <section className="public-hero">
      {/* Atmospheric background */}
      <div className="public-hero__background">
        <div className="public-hero__image-placeholder">
          {/* Add image */}
          <div className="public-hero__image-gradient" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="site-shell public-hero__content">
        <div className="public-hero__copy">
          <div className="portfolio-tag">
            <span className="portfolio-tag__dot" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="public-hero__title">{title}</h1>
          <p className="public-hero__summary">{summary}</p>

          <div className="site-actions">
            <Link href="#work" className="site-button site-button--primary">
              View Work
            </Link>
            <Link href="/about" className="site-button site-button--ghost">
              About me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}