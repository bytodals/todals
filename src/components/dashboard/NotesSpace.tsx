import Link from 'next/link'

type Note = {
  id: string
  title: string
  excerpt: string
  timestamp: string
}

type NotesSpaceProps = {
  notes?: Note[]
}

export function NotesSpace({ notes = [] }: NotesSpaceProps) {
  return (
    <section className="dashboard-module notes-space">
      <div className="module-header">
        <div>
          <p className="site-kicker">BRAIN</p>
          <h2>Notes</h2>
        </div>
        <Link href="/dashboard/notes" className="site-link">
          Open
        </Link>
      </div>

      <div className="module-content">
        {notes.length > 0 ? (
          <div className="notes-list">
            {notes.slice(0, 3).map((note) => (
              <article key={note.id} className="note-item">
                <h3>{note.title}</h3>
                <p>{note.excerpt}</p>
                <time>{note.timestamp}</time>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>A place for half-formed thoughts and fragments.</p>
            <Link href="/dashboard/notes/new" className="site-button site-button--ghost">
              Start writing
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
