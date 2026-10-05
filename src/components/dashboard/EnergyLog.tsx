'use client'

import { useState } from 'react'
import Link from 'next/link'

type EnergyEntry = {
  id: string
  date: string
  level: 1 | 2 | 3 | 4 | 5
  notes: string
}

type EnergyLogProps = {
  entries?: EnergyEntry[]
}

const ENERGY_LABELS: Record<number, string> = {
  1: 'Crashed',
  2: 'Low',
  3: 'Okay',
  4: 'Good',
  5: 'Excellent',
}

export function EnergyLog({ entries = [] }: EnergyLogProps) {
  const [level, setLevel] = useState<number>(3)

  return (
    <section className="dashboard-module energy-log">
      <div className="module-header">
        <div>
          <p className="site-kicker">BODY</p>
          <h2>Energy check-in</h2>
        </div>
        <Link href="/dashboard/energy" className="site-link">
          History
        </Link>
      </div>

      <div className="module-content">
        <div className="energy-input">
          <p className="energy-question">How are you feeling today?</p>
          <div className="energy-scale">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                className={`energy-button ${level === value ? 'active' : ''}`}
                onClick={() => setLevel(value)}
                title={ENERGY_LABELS[value]}
                aria-label={`Energy level ${value}: ${ENERGY_LABELS[value]}`}
              >
                <span className="energy-dot" />
                <span className="energy-label">{ENERGY_LABELS[value]}</span>
              </button>
            ))}
          </div>
        </div>

        {entries.length > 0 && (
          <div className="energy-history">
            <h3>Recent days</h3>
            <div className="energy-timeline">
              {entries.slice(0, 7).map((entry) => (
                <div key={entry.id} className="energy-entry">
                  <time>{entry.date}</time>
                  <div className={`energy-bar energy-bar--${entry.level}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
