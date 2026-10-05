import Link from 'next/link'
import { CaseStudyCard } from '@/components/public/CaseStudyCard'
import { Hero } from '@/components/public/Hero'
import { SocialProof } from '@/components/public/SocialProof'
import { projects } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <Hero
        title="a prophecy gone slightly wrong"
        eyebrow="CHRONICALLY ONLINE"
        summary="Content. Context. Contradictions."
      />

      <section className="site-shell site-section">
        <div className="site-card public-statement">
          <p className="site-kicker">WHO_I_AM</p>
          <div className="public-statement__content">
            <p>
              I exist in fragments across screens
              <br /> thoughts half-formed and observations mid-thought, the specific loneliness of being visible to thousands while mostly unavailable to all of them.
            </p>
            <p>
              Chronically ill and chronically online. That contradiction isn't a bug; it's where the work lives.
            </p>
            <p>
              This space is where those pieces collect. What you're seeing is real, unfinished, and probably more honest than it should be.
            </p>
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="site-shell__heading">
          <div>
            <p className="site-kicker">RECENT</p>
            <h2>Selected pieces</h2>
          </div>

          <Link href="/work" className="site-link site-button--ghost">
            View archive
          </Link>
        </div>

        <div className="site-grid site-grid--two">
          {projects.slice(0, 2).map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <SocialProof />

      <section className="site-shell site-section">
        <div className="site-shell__heading">
          <div>
            <p className="site-kicker">ELSEWHERE</p>
            <h2>Find me in the feeds</h2>
          </div>
        </div>

        <div className="public-socials">
          <Link href="https://instagram.com/todals" className="social-link">
            Instagram
          </Link>
          <Link href="https://threads.net/@todals" className="social-link">
            Threads
          </Link>
          <Link href="https://tiktok.com/@todals" className="social-link">
            TikTok
          </Link>
          <Link href="https://throne.com/todals" className="social-link">
            Support
          </Link>
          <Link href="https://ko-fi.com/todals" className="social-link">
            Ko-fi
          </Link>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="site-card public-footer-cta">
          <p className="site-kicker">CTA</p>
          <h2>Want to collaborate?</h2>
          <p className="site-copy">Or just send a message. Either way, I read everything.</p>
          <div className="site-actions">
            <Link href="/contact" className="site-button site-button--primary">Contact me</Link>
                    </div>
        </div>
      </section>
    </>
  )
}