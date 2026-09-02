import type { NavItem, Project, SocialLink } from '@/types'

export const siteName = 'Todals'

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:hello@todals.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export const projects: Project[] = [
  {
    slug: 'calm-portfolio-system',
    title: 'Calm Portfolio System',
    category: 'Brand / Web',
    summary: 'A clear, editorial-style portfolio presence with room for case studies and contact paths.',
    description:
      'A modular portfolio layout designed to keep the work readable, approachable, and easy to update.',
    year: '2026',
    tags: ['Next.js', 'Design System', 'Content Strategy'],
  },
  {
    slug: 'creator-dashboard',
    title: 'Creator Dashboard',
    category: 'Product / Planning',
    summary: 'A private workspace for planning posts, notes, and lightweight content publishing.',
    description:
      'A private dashboard concept for organizing tasks, drafts, and publishing queues without losing the creative flow.',
    year: '2026',
    tags: ['Dashboard', 'Workflow', 'Content Ops'],
  },
  {
    slug: 'social-proof-kit',
    title: 'Social Proof Kit',
    category: 'Marketing / UI',
    summary: 'Reusable marketing sections for testimonials, metrics, and trust-building details.',
    description:
      'A small kit of modular page sections that can be mixed into a landing page without heavy rework.',
    year: '2025',
    tags: ['Components', 'Landing Page', 'Conversion'],
  },
]

export const testimonials = [
  {
    quote: 'Thoughtful, tidy, and easy to scan — exactly the vibe I want from a portfolio.',
    author: 'Creative director',
  },
  {
    quote: 'The dashboard feels like a real working space, not just a pretty shell.',
    author: 'Product manager',
  },
]