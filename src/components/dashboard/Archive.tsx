import Link from 'next/link'

type ArchivedPost = {
  id: string
  platform: 'instagram' | 'threads' | 'tiktok'
  title: string
  date: string
  engagement: number
  url: string
}

type ArchiveProps = {
  posts?: ArchivedPost[]
}

export function Archive({ posts = [] }: ArchiveProps) {
  return (
    <section className="dashboard-module archive">
      <div className="module-header">
        <div>
          <p className="site-kicker">ARCHIVE</p>
          <h2>Your posts</h2>
        </div>
        <Link href="/dashboard/archive" className="site-link">
          Browse
        </Link>
      </div>

      <div className="module-content">
        {posts.length > 0 ? (
          <div className="posts-list">
            {posts.slice(0, 4).map((post) => (
              <article key={post.id} className="post-item">
                <div className="post-header">
                  <h3>{post.title}</h3>
                  <span className="platform-badge">{post.platform}</span>
                </div>
                <div className="post-meta">
                  <time>{post.date}</time>
                  <span className="engagement">{post.engagement} interactions</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Sync your posts to see your archive.</p>
            <Link href="/dashboard/archive/sync" className="site-button site-button--ghost">
              Connect platforms
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
