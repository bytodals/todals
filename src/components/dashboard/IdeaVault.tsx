import Link from 'next/link'

type Idea = {
  id: string
  type: 'caption' | 'thread' | 'concept' | 'draft'
  title: string
  content: string
  timestamp: string
}

type IdeaVaultProps = {
  ideas?: Idea[]
}

export function IdeaVault({ ideas = [] }: IdeaVaultProps) {
  return (
    <section className="dashboard-module idea-vault">
      <div className="module-header">
        <div>
          <p className="site-kicker">VAULT</p>
          <h2>Ideas</h2>
        </div>
        <Link href="/dashboard/ideas" className="site-link">
          View all
        </Link>
      </div>

      <div className="module-content">
        {ideas.length > 0 ? (
          <div className="ideas-list">
            {ideas.slice(0, 3).map((idea) => (
              <article key={idea.id} className="idea-item">
                <div className="idea-meta">
                  <span className="idea-type">{idea.type}</span>
                  <time>{idea.timestamp}</time>
                </div>
                <h3>{idea.title}</h3>
                <p>{idea.content}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No ideas yet. Dump your thoughts here.</p>
            <Link href="/dashboard/ideas/new" className="site-button site-button--ghost">
              Add an idea
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
