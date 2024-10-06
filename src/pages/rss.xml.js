import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { SITE } from 'config'

// export async function GET(context) {
//   return rss({
//     title: SITE.title,
//     description: SITE.description,
//     site: context.site,
//     items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
//     customData: '<language>en-us</language>',
//   })
// }
