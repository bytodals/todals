import { testimonials } from '@/lib/constants'

export function SocialProof() {
  return (
    <section className="site-shell site-section">
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