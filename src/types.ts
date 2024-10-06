export interface Site {
  title: string // website title
  url: string
  author: string
  description: string // website description info
  tagline?: string // website tagline
  logo?: Logo // website logo image
  favicon?: string
  social?: Link[] // social media accounts
  friends?: Friend[]
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
