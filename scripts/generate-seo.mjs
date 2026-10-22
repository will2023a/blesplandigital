import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const dist = resolve('dist')
const siteUrl = (process.env.SITE_URL || '').trim().replace(/\/+$/, '')
const indexPath = resolve(dist, 'index.html')
let html = await readFile(indexPath, 'utf8')

if (siteUrl) {
  const seoTags = [
    `    <link rel="canonical" href="${siteUrl}/" />`,
    `    <meta property="og:url" content="${siteUrl}/" />`,
  ].join('\n')

  html = html
    .replace('</head>', `${seoTags}\n  </head>`)
    .replaceAll('./social-preview.png', `${siteUrl}/social-preview.png`)

  await writeFile(indexPath, html)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`
  await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
}

const robots = [
  'User-agent: *',
  'Allow: /',
  ...(siteUrl ? ['', `Sitemap: ${siteUrl}/sitemap.xml`] : []),
  '',
].join('\n')

await writeFile(resolve(dist, 'robots.txt'), robots)
console.log(siteUrl ? `SEO configurado para ${siteUrl}` : 'SEO básico gerado. Defina SITE_URL para canonical e sitemap.')
