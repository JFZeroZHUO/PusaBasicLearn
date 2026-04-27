import fs from 'node:fs'
import path from 'node:path'

type LegacyAssets = {
  styles: string[]
  scripts: string[]
}

const distIndexPath = path.join(process.cwd(), 'dist', 'index.html')

export function getLegacyAssets(): LegacyAssets {
  if (!fs.existsSync(distIndexPath)) {
    return {
      styles: [],
      scripts: []
    }
  }

  const html = fs.readFileSync(distIndexPath, 'utf8')
  const styles = Array.from(html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g))
    .map(match => match[1])
  const scripts = Array.from(html.matchAll(/<script[^>]+type="module"[^>]+src="([^"]+)"/g))
    .map(match => match[1])

  return {
    styles,
    scripts
  }
}
