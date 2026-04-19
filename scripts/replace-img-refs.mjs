#!/usr/bin/env node
// Replace .jpg/.jpeg/.png image refs with .webp across app/src and app/index.html.
// Preserves:
// - External URLs (openstreetmap tile template)
// - favicon.png (browser compatibility)

import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const ROOTS = [
  new URL('../app/src/', import.meta.url).pathname,
]
const FILES = [
  new URL('../app/index.html', import.meta.url).pathname,
]

const EXTS = ['.ts', '.tsx', '.js', '.jsx', '.html', '.css']

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

const PROTECT = [
  /openstreetmap\.org[^"'`\s]*\.png/g,
  /favicon\.png/g,
]

// Placeholder tokens we swap in, then restore after the replace.
const TOKEN = (i) => `__PROTECT_${i}__`

function transform(src) {
  // Protect matches
  const guards = []
  let text = src
  PROTECT.forEach((re, i) => {
    text = text.replace(re, (m) => {
      guards.push({ token: TOKEN(`${i}_${guards.length}`), value: m })
      return guards[guards.length - 1].token
    })
  })

  // Replace image extensions to .webp — only when preceded by a filename-looking char
  // (letter/digit/dash/underscore/dot/slash) so we don't touch type strings like `image/png`.
  text = text.replace(/([\w\-./]+)\.(jpe?g|png)\b/gi, (_m, base) => `${base}.webp`)

  // Restore
  for (const g of guards) text = text.split(g.token).join(g.value)
  return text
}

let changed = 0

async function processFile(file) {
  const orig = await readFile(file, 'utf8')
  const next = transform(orig)
  if (next !== orig) {
    await writeFile(file, next)
    changed++
    console.log('updated', file)
  }
}

for (const root of ROOTS) {
  for await (const file of walk(root)) {
    if (!EXTS.includes(extname(file).toLowerCase())) continue
    await processFile(file)
  }
}
for (const file of FILES) {
  try { await stat(file); await processFile(file) } catch {}
}

console.log(`\n${changed} files updated.`)
