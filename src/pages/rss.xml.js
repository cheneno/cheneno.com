import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from 'config'

export async function GET(context) {
  const posts = await getCollection('posts')
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.createdAt,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
  })
}
