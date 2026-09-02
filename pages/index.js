import Head from 'next/head'
import Link from 'next/link'

const links = [
  { href: '/portfolio', title: 'Portfolio', copy: 'Open the full portfolio and private workspace.' },
  { href: '/portfolio#overview', title: 'Overview', copy: 'Jump straight to the dashboard snapshot.' },
  { href: '/portfolio#ideas', title: 'Post ideas', copy: 'See the generated content concepts.' },
  { href: '/portfolio#publish', title: 'Publish queue', copy: 'Check what’s lined up next.' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Todals</title>
        <meta name="description" content="A simple linktree-style landing page for Todals." />
      </Head>

      <main className="linktree-page">
        <div aria-hidden="true" className="portfolio-bg">
          <div className="portfolio-bg__overlay" />
          <div className="portfolio-bg__glow portfolio-bg__glow--left" />
          <div className="portfolio-bg__glow portfolio-bg__glow--right" />
        </div>

        <section className="linktree-shell">
          <article className="linktree-card">
            <div className="portfolio-tag linktree-card__tag">
              <span className="portfolio-tag__dot" />
              <span>LINK_IN_BIO</span>
            </div>

            <div className="linktree-avatar" aria-hidden="true">
              T
            </div>

            <h1 className="linktree-name">Todals</h1>
            <p className="linktree-bio">
              UX designer, content planner, and aspiring web developer building calm systems and creative interfaces.
            </p>

            <div className="linktree-links">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="linktree-link">
                  <span className="linktree-link__title">{link.title}</span>
                  <span className="linktree-link__copy">{link.copy}</span>
                </Link>
              ))}
            </div>

            <p className="linktree-footer">Tap a link to jump in — the full portfolio lives one click away.</p>
          </article>
        </section>
      </main>
    </>
  )
}
