import fs from 'node:fs'
import path from 'node:path'

type LegacyAssets = {
  styles: string[]
  scripts: string[]
}

const legacyIndexPath = path.join(process.cwd(), 'public', 'legacy', 'index.html')

function toLegacyPath(url: string): string {
  if (url.startsWith('/legacy/')) return url
  if (url.startsWith('/')) return `/legacy${url}`
  return `/legacy/${url.replace(/^\.?\//, '')}`
}

export function getLegacyAssets(): LegacyAssets {
  if (!fs.existsSync(legacyIndexPath)) {
    return {
      styles: [],
      scripts: []
    }
  }

  const html = fs.readFileSync(legacyIndexPath, 'utf8')
  const styles = Array.from(html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g))
    .map(match => toLegacyPath(match[1]))
  const scripts = Array.from(html.matchAll(/<script[^>]+type="module"[^>]+src="([^"]+)"/g))
    .map(match => toLegacyPath(match[1]))

  return {
    styles,
    scripts
  }
}
