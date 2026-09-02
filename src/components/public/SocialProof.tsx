import { testimonials } from '@/lib/constants'

export function SocialProof() {
  return (
    <section className="site-shell site-section">
      <div className="social-strip site-card">
        <span>Featured in a small but growing network of creative work</span>
        <span>Trusted for clear design thinking</span>
        <span>Mobile-first by default</span>
      </div>

      <div className="site-grid site-grid--two">
        {testimonials.map((item) => (
          <article key={item.author} className="site-card">
            <p className="site-copy">“{item.quote}”</p>
            <p className="muted">{item.author}</p>
          </article>
        ))}
      </div>
    </section>
  )
}