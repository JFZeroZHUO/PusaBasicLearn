import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const publicDir = path.join(root, 'public')

async function exists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function copyEntry(source, target) {
  const stat = await fs.stat(source)

  if (stat.isDirectory()) {
    await fs.mkdir(target, { recursive: true })
    const entries = await fs.readdir(source)
    await Promise.all(entries.map(entry => copyEntry(path.join(source, entry), path.join(target, entry))))
    return
  }

  await fs.mkdir(path.dirname(target), { recursive: true })
  await fs.copyFile(source, target)
}

async function main() {
  if (!(await exists(distDir))) {
    throw new Error('dist directory is missing. Run npm run build:legacy first.')
  }

  await fs.mkdir(publicDir, { recursive: true })
  const entries = await fs.readdir(distDir)
  for (const entry of entries) {
    if (entry === 'index.html') continue
    await copyEntry(path.join(distDir, entry), path.join(publicDir, entry))
  }
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
