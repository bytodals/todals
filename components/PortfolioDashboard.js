import { useEffect, useMemo, useRef, useState } from 'react'

const ACCESS_CODE = 'todals2026'
const STORAGE = {
  session: 'todals.session',
  todos: 'todals.todos',
  photos: 'todals.photos',
  ideas: 'todals.ideas',
  queue: 'todals.queue',
}

const defaultTodos = [
  { id: 'todo-1', text: 'Plan this week’s posts', done: false },
  { id: 'todo-2', text: 'Sort photos into a content folder', done: false },
  { id: 'todo-3', text: 'Write one Threads idea', done: true },
]

const threadPrompts = [
  'A tiny habit that changed my workflow',
  'What I wish I knew before starting this project',
  'A behind-the-scenes note from today',
  'How I turned a messy idea into a plan',
  'One thing I would do differently next time',
]

const instagramPrompts = [
  'Make a carousel with before, process, and final result slides.',
  'Turn one strong photo into a caption-driven story post.',
  'Use a reel to show the edit process in a few fast cuts.',
  'Create a saveable checklist post with a clear CTA.',
  'Build a mini photo story across 3 slides or frames.',
]

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`
}

function safeRead(key, fallback) {
  if (typeof window === 'undefined') return fallback

  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

function buildIdeas(name, todos, photos) {
  const openTasks = todos.filter((item) => !item.done)
  const lead = openTasks[0]?.text ?? 'your next creative task'
  const second = openTasks[1]?.text ?? 'a second idea to keep moving'
  const photoCount = photos.length
  const photoReference = photoCount > 0 ? `${photoCount} imported photo${photoCount === 1 ? '' : 's'}` : 'a fresh visual set'

  return [
    {
      id: uid('idea'),
      platform: 'Threads',
      title: 'Build-in-public thread',
      text: `Open with "${threadPrompts[0]}" and tie it to ${lead}. End with a short question so people can reply with their own workflow.`,
    },
    {
      id: uid('idea'),
      platform: 'Instagram',
      title: 'Carousel concept',
      text: `Create a 5-slide carousel around ${lead}. Use ${photoReference} for the visual hook and finish with one action step people can save.`,
    },
    {
      id: uid('idea'),
      platform: 'Threads',
      title: 'Quick personal update',
      text: `Write a short update about how ${second} changed the rest of the day. Keep it honest and practical.`,
    },
    {
      id: uid('idea'),
      platform: 'Instagram',
      title: 'Photo-led post',
      text: `Pick one imported photo and explain the story behind it. Add a caption that covers the mood, the decision, and one lesson.`,
    },
    {
      id: uid('idea'),
      platform: 'Threads',
      title: 'Mini checklist post',
      text: `Post a 3-step checklist for ${lead}. Make it skimmable and easy to copy into someone else’s day.`,
    },
    {
      id: uid('idea'),
      platform: 'Instagram',
      title: 'Saveable tip post',
      text: `Use ${instagramPrompts[photoCount % instagramPrompts.length]} Tailor the CTA for ${name || 'your'} audience.`,
    },
  ]
}

function fileToItem(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve({
        id: uid('photo'),
        name: file.name,
        type: file.type,
        size: file.size,
        createdAt: new Date().toISOString(),
        preview: reader.result,
      })
    }

    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}

export default function PortfolioDashboard() {
  const [ready, setReady] = useState(false)
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [todos, setTodos] = useState(defaultTodos)
  const [draftTask, setDraftTask] = useState('')
  const [photos, setPhotos] = useState([])
  const [ideas, setIdeas] = useState([])
  const [queue, setQueue] = useState([])
  const [message, setMessage] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    const session = safeRead(STORAGE.session, null)
    const savedTodos = safeRead(STORAGE.todos, defaultTodos)
    const savedPhotos = safeRead(STORAGE.photos, [])
    const savedIdeas = safeRead(STORAGE.ideas, [])
    const savedQueue = safeRead(STORAGE.queue, [])

    if (session?.name) {
      setName(session.name)
      setLoggedIn(true)
    }

    setTodos(Array.isArray(savedTodos) ? savedTodos : defaultTodos)
    setPhotos(Array.isArray(savedPhotos) ? savedPhotos : [])
    setIdeas(Array.isArray(savedIdeas) ? savedIdeas : [])
    setQueue(Array.isArray(savedQueue) ? savedQueue : [])
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem(STORAGE.todos, JSON.stringify(todos))
  }, [ready, todos])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem(STORAGE.photos, JSON.stringify(photos))
  }, [ready, photos])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem(STORAGE.ideas, JSON.stringify(ideas))
  }, [ready, ideas])

  useEffect(() => {
    if (!ready) return
    window.localStorage.setItem(STORAGE.queue, JSON.stringify(queue))
  }, [ready, queue])

  useEffect(() => {
    if (!ready) return

    if (loggedIn && name) {
      window.localStorage.setItem(STORAGE.session, JSON.stringify({ name }))
    } else {
      window.localStorage.removeItem(STORAGE.session)
    }
  }, [ready, loggedIn, name])

  const stats = useMemo(() => {
    const open = todos.filter((item) => !item.done).length
    return {
      open,
      done: todos.length - open,
      photos: photos.length,
      queue: queue.length,
    }
  }, [todos, photos.length, queue.length])

  async function handleLogin(event) {
    event.preventDefault()
    setError('')

    if (!name.trim()) {
      setError('Please add your name.')
      return
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code.trim() }),
    })

    if (!response.ok) {
      setError('Wrong access code.')
      return
    }

    setLoggedIn(true)
    setIdeas((current) => (current.length > 0 ? current : buildIdeas(name, todos, photos)))
  }

  function handleLogout() {
    setLoggedIn(false)
    setName('')
    setCode('')
    setError('')
    setMessage('')
    window.localStorage.removeItem(STORAGE.session)
  }

  function addTask(event) {
    event.preventDefault()

    const text = draftTask.trim()
    if (!text) return

    setTodos((current) => [{ id: uid('todo'), text, done: false }, ...current])
    setDraftTask('')
  }

  function toggleTask(id) {
    setTodos((current) => current.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  function removeTask(id) {
    setTodos((current) => current.filter((item) => item.id !== id))
  }

  async function handlePhotos(event) {
    const files = Array.from(event.target.files ?? [])
    if (files.length === 0) return

    const next = await Promise.all(files.map((file) => fileToItem(file)))
    setPhotos((current) => [...next, ...current])

    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function generateIdeas() {
    setIdeas(buildIdeas(name, todos, photos))
  }

  function addIdeaToQueue(idea) {
    setQueue((current) => [
      {
        id: uid('queue'),
        platform: idea.platform,
        title: idea.title,
        caption: idea.text,
        photoId: null,
        status: 'Draft',
        createdAt: new Date().toISOString(),
      },
      ...current,
    ])
  }

  function addPhotoToQueue(photo, platform = 'Instagram') {
    setQueue((current) => [
      {
        id: uid('queue'),
        platform,
        title: `${platform} draft from ${photo.name}`,
        caption: `Use ${photo.name} with a caption about ${todos[0]?.text ?? 'your next post'}.`,
        photoId: photo.id,
        status: 'Draft',
        createdAt: new Date().toISOString(),
      },
      ...current,
    ])
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text)
      setMessage('Copied to clipboard.')
    } catch {
      setMessage('Copy failed, but the text is still on screen.')
    }

    window.setTimeout(() => setMessage(''), 1500)
  }

  const topIdeas = ideas.slice(0, 3)

  if (!ready) {
    return <main className="dashboard-page login-page">Loading your workspace…</main>
  }

  if (!loggedIn) {
    return (
      <main className="dashboard-page login-page">
        <div aria-hidden="true" className="portfolio-bg">
          <div className="portfolio-bg__overlay" />
          <div className="portfolio-bg__glow portfolio-bg__glow--left" />
          <div className="portfolio-bg__glow portfolio-bg__glow--right" />
        </div>

        <section className="auth-shell">
          <article className="auth-card">
            <div className="portfolio-tag">
              <span className="portfolio-tag__dot" />
              <span>PRIVATE_LOGIN</span>
            </div>

            <h1>Portfolio workspace</h1>
            <p className="lead">
              Log in to manage to-dos, import photos, and draft post ideas for Threads and Instagram.
            </p>

            <form className="auth-form" onSubmit={handleLogin}>
              <label>
                Name
                <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Johanna" />
              </label>

              <label>
                Access code
                <input type="password" value={code} onChange={(event) => setCode(event.target.value)} placeholder="Private code" />
              </label>

              {error ? <p className="form-error">{error}</p> : null}

              <div className="auth-actions">
                <button className="portfolio-button portfolio-button--primary" type="submit">
                  Unlock dashboard
                </button>
              </div>
            </form>

            <p className="dashboard-note">
              Demo code: <strong>{ACCESS_CODE}</strong> — change it in <code>.env.local</code> later.
            </p>
          </article>
        </section>
      </main>
    )
  }

  return (
    <main className="dashboard-page">
      <div aria-hidden="true" className="portfolio-bg">
        <div className="portfolio-bg__overlay" />
        <div className="portfolio-bg__glow portfolio-bg__glow--left" />
        <div className="portfolio-bg__glow portfolio-bg__glow--right" />
      </div>

      <div className="dashboard-shell">
        <aside className="dashboard-sidebar">
          <div className="dashboard-sidebar__brand">
            <div className="portfolio-tag" style={{ marginBottom: 0 }}>
              <span className="portfolio-tag__dot" />
              <span>ONLINE</span>
            </div>
            <h1 className="dashboard-sidebar__title">Hello, {name}.</h1>
            <p className="dashboard-sidebar__text">
              This is your private command center for tasks, photos, and content ideas.
            </p>
          </div>

          <nav className="dashboard-menu" aria-label="Dashboard navigation">
            <a href="#overview" className="dashboard-menu__item">Overview</a>
            <a href="#tasks" className="dashboard-menu__item">To-do list</a>
            <a href="#photos" className="dashboard-menu__item">Imported photos</a>
            <a href="#ideas" className="dashboard-menu__item">Post ideas</a>
            <a href="#publish" className="dashboard-menu__item">Publish queue</a>
          </nav>

          <div className="dashboard-sidebar__footer">
            <button type="button" className="portfolio-button portfolio-button--secondary dashboard-backlink" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </aside>

        <section className="dashboard-main">
          <article id="overview" className="dashboard-card dashboard-card--accent dashboard-hero">
            <div className="dashboard-toolbar">
              <div>
                <div className="dashboard-status-pill">Private workspace</div>
                <h2 style={{ margin: '0.75rem 0' }}>Your planning dashboard is ready.</h2>
                <p className="dashboard-note">
                  Real Instagram publishing requires official Meta API access later. For now, this app helps you organize content, build captions, and prepare uploads.
                </p>
              </div>

              <button type="button" className="portfolio-button portfolio-button--secondary" onClick={generateIdeas}>
                Generate ideas
              </button>
            </div>

            <div className="dashboard-grid" style={{ marginTop: '1.25rem' }}>
              <article className="dashboard-card"><div className="dashboard-stat__label">Open tasks</div><div className="dashboard-stat__value">{stats.open}</div></article>
              <article className="dashboard-card"><div className="dashboard-stat__label">Completed tasks</div><div className="dashboard-stat__value">{stats.done}</div></article>
              <article className="dashboard-card"><div className="dashboard-stat__label">Imported photos</div><div className="dashboard-stat__value">{stats.photos}</div></article>
              <article className="dashboard-card"><div className="dashboard-stat__label">Drafts in queue</div><div className="dashboard-stat__value">{stats.queue}</div></article>
            </div>
          </article>

          <section id="tasks" className="dashboard-section">
            <div className="dashboard-section__header">
              <div>
                <h3 className="dashboard-section__title">To-do list</h3>
                <p className="dashboard-section__copy">Keep the small stuff visible so the content work doesn’t drift away from you.</p>
              </div>
            </div>

            <form className="dashboard-form" onSubmit={addTask}>
              <input className="dashboard-input" placeholder="Add a new task" value={draftTask} onChange={(event) => setDraftTask(event.target.value)} />
              <button className="portfolio-button portfolio-button--primary" type="submit">Add task</button>
            </form>

            <div className="todo-list">
              {todos.map((todo) => (
                <article className={`todo-item ${todo.done ? 'todo-item--done' : ''}`} key={todo.id}>
                  <label className="todo-item__main">
                    <input type="checkbox" checked={todo.done} onChange={() => toggleTask(todo.id)} />
                    <span>{todo.text}</span>
                  </label>
                  <button className="todo-item__delete" type="button" onClick={() => removeTask(todo.id)}>Remove</button>
                </article>
              ))}
            </div>
          </section>

          <section id="photos" className="dashboard-section">
            <div className="dashboard-section__header">
              <div>
                <h3 className="dashboard-section__title">Imported photos</h3>
                <p className="dashboard-section__copy">Bring in images from your computer and turn them into post drafts.</p>
              </div>
            </div>

            <div className="dashboard-form">
              <input ref={fileInputRef} className="dashboard-input" type="file" accept="image/*" multiple onChange={handlePhotos} />
            </div>

            <div className="photo-grid">
              {photos.length === 0 ? <article className="dashboard-empty">No photos yet. Upload a few images to start building your content queue.</article> : null}
              {photos.map((photo) => (
                <article className="photo-card" key={photo.id}>
                  <div className="photo-card__thumb"><img src={photo.preview} alt={photo.name} /></div>
                  <div className="photo-card__meta"><strong>{photo.name}</strong><span>{formatDate(photo.createdAt)}</span></div>
                  <div className="photo-card__actions">
                    <button className="button-ghost" type="button" onClick={() => addPhotoToQueue(photo, 'Instagram')}>Queue for Instagram</button>
                    <button className="button-ghost" type="button" onClick={() => addPhotoToQueue(photo, 'Threads')}>Queue for Threads</button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="ideas" className="dashboard-section">
            <div className="dashboard-section__header">
              <div>
                <h3 className="dashboard-section__title">Post ideas</h3>
                <p className="dashboard-section__copy">Threads and Instagram ideas generated from your current tasks and photos.</p>
              </div>

              <button type="button" className="portfolio-button portfolio-button--secondary" onClick={generateIdeas}>
                Refresh ideas
              </button>
            </div>

            {message ? <p className="dashboard-note">{message}</p> : null}

            <div className="idea-list">
              {topIdeas.length === 0 ? <article className="dashboard-empty">Press “Generate ideas” to build a new set of drafts.</article> : null}
              {topIdeas.map((idea) => (
                <article className="idea-card" key={idea.id}>
                  <div className="idea-card__meta"><span className="dashboard-status-pill">{idea.platform}</span><span className="idea-card__title">{idea.title}</span></div>
                  <p className="idea-card__text">{idea.text}</p>
                  <div className="idea-card__actions">
                    <button className="button-ghost" type="button" onClick={() => copyText(idea.text)}>Copy caption</button>
                    <button className="button-ghost" type="button" onClick={() => addIdeaToQueue(idea)}>Add to queue</button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="publish" className="dashboard-section">
            <div className="dashboard-section__header">
              <div>
                <h3 className="dashboard-section__title">Publish queue</h3>
                <p className="dashboard-section__copy">This is the handoff point for publishing later. For Instagram, connect Meta’s official API in the backend when you’re ready.</p>
              </div>
            </div>

            <div className="queue-list">
              {queue.length === 0 ? <article className="dashboard-empty">Nothing queued yet. Add a photo or an idea to create a draft.</article> : null}
              {queue.map((item) => {
                const linkedPhoto = item.photoId ? photos.find((photo) => photo.id === item.photoId) : null

                return (
                  <article className="queue-card" key={item.id}>
                    <div className="idea-card__meta"><span className="dashboard-status-pill">{item.platform}</span><span className="idea-card__title">{item.title}</span></div>
                    <p className="idea-card__text">{item.caption}</p>
                    {linkedPhoto ? <p className="dashboard-note">Linked photo: {linkedPhoto.name}</p> : null}
                    <div className="queue-card__footer">
                      <span className="dashboard-note">{item.status} • {formatDate(item.createdAt)}</span>
                      <button className="button-ghost" type="button" onClick={() => copyText(item.caption)}>Copy text</button>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}
