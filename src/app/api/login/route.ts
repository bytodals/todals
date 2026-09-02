import { NextResponse } from 'next/server'
import { isValidAccessCode } from '@/lib/auth'

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { code?: string }

  if (!body.code || !isValidAccessCode(body.code)) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  return NextResponse.json({ ok: true })
}