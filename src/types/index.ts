export type NavItem = {
  href: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  year: string
  tags: string[]
  result: string
}

export type CaseStudySection = {
  title: string
  content: string
}