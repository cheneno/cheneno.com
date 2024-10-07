import type { Site, Link } from '@types'

const SITE: Site = {
  title: 'EnoLab',
  url: 'https://cheneno.com',
  author: {
    name: 'Chen Eno',
    avatar: '/logo.webp',
  },
  description: "This Chen Eno's personal website",
  favicon: '/favicon.svg',
}

const MENU: Link[] = [
  { name: '博客', url: '/posts' },
  { name: '分类', url: '/categories' },
  { name: '标签', url: '/tags' },
  // { name: '专题', url: '/series' },
  // { name: '朋友', url: '/friends' },
]

export { SITE, MENU }
