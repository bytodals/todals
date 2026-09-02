import Link from 'next/link'
import { ButtonLink } from '@/components/ui/Button'
import { publicStats } from '@/lib/constants'

type HeroProps = {
  title: string
  summary: string
  eyebrow?: string
}

export function Hero({ title, summary, eyebrow = 'PUBLIC_SHOWCASE' }: HeroProps) {
  return (
    <section className="site-shell public-hero">
      <div className="public-hero__copy">
        <div className="portfolio-tag">
          <span className="portfolio-tag__dot" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="public-hero__title">{title}</h1>
        <p className="public-hero__summary">{summary}</p>

        <div className="site-actions">
          <ButtonLink href="/work" variant="primary">
            View Work
          </ButtonLink>
          <Link href="/contact" className="site-button site-button--ghost">
            Book a Call
          </Link>
        </div>
      </div>

      <div className="public-hero__panel">
        <div className="site-card public-hero__photo" aria-hidden="true">
          <div className="public-hero__photo-badge">Available for select freelance projects</div>
          <div className="public-hero__photo-mark" />
        </div>

        <div className="public-hero__stats">
          {publicStats.map((stat) => (
            <div key={stat.label} className="site-card public-hero__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}