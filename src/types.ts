export interface MetaInfo {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  image?: string
  type?: string
}

export interface Site {
  title: string // website title
  url: string
  description: string // website description info
  author: AuthorInfo
  tagline?: string // website tagline
  logo?: Logo // website logo image
  favicon?: string
  social?: Link[] // social media accounts
  friends?: Friend[]
  umami?: Umami
}

interface AuthorInfo {
  name: string
  avatar: string
}

interface Logo {
  src: string | ThemedLogo
  alt?: string
}

interface ThemedLogo {
  dark: string
  light: string
}

export interface Link {
  name: string
  url: string
  icon?: string
}

interface Friend {
  name: string
  url: string
  bio: string
  avatar: string
  desc: string
}

interface Umami {
  url: string
  websiteId: string
}
