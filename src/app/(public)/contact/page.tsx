import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="site-shell site-section site-page__content">
      <p className="site-kicker">CONTACT</p>
      <h1>Contact</h1>
      <p className="site-copy">Use this page for a simple contact form, booking link, or social links.</p>
      <div className="site-actions">
        <Link href="mailto:hello@todals.com" className="site-button site-button--primary">
          Email me
        </Link>
      </div>
    </section>
  )
}