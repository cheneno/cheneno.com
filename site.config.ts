import type { Site, Link } from '@types'

const SITE: Site = {
  title: 'EnoLab',
  url: 'https://cheneno.com',
  author: 'Chen Eno',
  description: "This Chen Eno's personal website",
  favicon: '/favicon.svg',
}

const MENU: Link[] = [
  { name: '博客', url: '/posts' },
  { name: '专题', url: '/series' },
  { name: '朋友', url: '/friends' },
]

export { SITE, MENU }
