"use client"

import type { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [status, setStatus] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('')

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })

    if (!response.ok) {
      setStatus('That code did not match. Please try again.')
      return
    }

    router.push('/dashboard')
  }

  return (
    <section className="auth-shell">
      <article className="auth-card">
        <p className="site-kicker">PRIVATE_LOGIN</p>
        <h1 className="auth-card__title">Login</h1>
        <p className="site-copy">private workspace.</p>

        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            Access code
            <input value={code} onChange={(event) => setCode(event.target.value)} placeholder="Enter code" />
          </label>

          {status ? <p className="muted">{status}</p> : null}

          <Button type="submit">Enter</Button>
        </form>
      </article>
    </section>
  )
}