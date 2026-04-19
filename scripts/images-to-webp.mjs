#!/usr/bin/env node
// Batch convert JPG/JPEG/PNG under app/public to WebP in place.
// - Keeps dimensions (premium resolution preserved).
// - Photos (jpg/jpeg) → quality 82, smart subsample.
// - PNGs → quality 88, alpha preserved (handles logos/feathers).
// - Writes .webp next to the original; does NOT delete originals.
// - Skips favicon.png (browser/compat) and anything already .webp.

import { createRequire } from 'node:module'
import { readdir, stat } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'

const require = createRequire(new URL('../app/package.json', import.meta.url))
const sharp = require('sharp')

const ROOT = new URL('../app/public/', import.meta.url).pathname
const SKIP = new Set(['favicon.png'])

const JPG_Q = 82
const PNG_Q = 88

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

function fmt(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(1) + 'MB'
  if (n > 1024) return (n / 1024).toFixed(0) + 'KB'
  return n + 'B'
}

let totalIn = 0
let totalOut = 0
let count = 0
const tasks = []

for await (const file of walk(ROOT)) {
  const base = file.split('/').pop()
  if (SKIP.has(base)) continue
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue
  const out = file.slice(0, -ext.length) + '.webp'
  tasks.push((async () => {
    const srcStat = await stat(file)
    const pipeline = sharp(file, { failOn: 'none' }).rotate() // auto-orient via EXIF
    const webpOpts = ext === '.png'
      ? { quality: PNG_Q, alphaQuality: 100, effort: 5 }
      : { quality: JPG_Q, smartSubsample: true, effort: 5 }
    await pipeline.webp(webpOpts).toFile(out)
    const dstStat = await stat(out)
    totalIn += srcStat.size
    totalOut += dstStat.size
    count++
    console.log(
      `${relative(ROOT, file).padEnd(60)} ${fmt(srcStat.size).padStart(8)} -> ${fmt(dstStat.size).padStart(8)}  (${((1 - dstStat.size / srcStat.size) * 100).toFixed(0)}% smaller)`
    )
  })())
}

const CONCURRENCY = 8
for (let i = 0; i < tasks.length; i += CONCURRENCY) {
  await Promise.all(tasks.slice(i, i + CONCURRENCY))
}

console.log('\n' + '='.repeat(80))
console.log(`Converted ${count} files: ${fmt(totalIn)} -> ${fmt(totalOut)}  (${((1 - totalOut / totalIn) * 100).toFixed(1)}% reduction)`)
