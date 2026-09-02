import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type CommonProps = {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn('site-button', variant === 'primary' ? 'site-button--primary' : 'site-button--ghost', className)}
    >
      {children}
    </button>
  )
}

export function ButtonLink({ variant = 'primary', className, children, href, ...props }: LinkButtonProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cn('site-button', variant === 'primary' ? 'site-button--primary' : 'site-button--ghost', className)}
    >
      {children}
    </Link>
  )
}