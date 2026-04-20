#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const SITE = 'https://morpeace.com'
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/the-forest', priority: '0.9', changefreq: 'monthly' },
  { path: '/the-experience', priority: '0.9', changefreq: 'monthly' },
  { path: '/philosophy', priority: '0.8', changefreq: 'monthly' },
  { path: '/team', priority: '0.8', changefreq: 'monthly' },
  { path: '/reviews', priority: '0.8', changefreq: 'weekly' },
  { path: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/menu', priority: '0.7', changefreq: 'monthly' },
]

const treesSrc = fs.readFileSync(path.join(root, 'src/data/trees.ts'), 'utf8')
const treeTags = [...new Set([...treesSrc.matchAll(/tag: '([^']+)'/g)].map((m) => m[1]))]

const treeRoutes = treeTags.map((tag) => ({
  path: `/the-forest/${tag}`,
  priority: '0.6',
  changefreq: 'monthly',
}))

const all = [...STATIC_ROUTES, ...treeRoutes]
const lastmod = new Date().toISOString().slice(0, 10)

const urls = all
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === '/' ? '' : r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const outPath = path.join(root, 'public/sitemap.xml')
fs.writeFileSync(outPath, xml)
console.log(`sitemap.xml written to ${outPath} with ${all.length} routes (${treeTags.length} trees)`)
