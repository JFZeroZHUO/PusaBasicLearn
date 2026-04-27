import Script from 'next/script'
import { getLegacyAssets } from './legacy-assets'

export default function LegacyVueApp() {
  const assets = getLegacyAssets()

  return (
    <>
      {assets.styles.map(href => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <div id="app" />
      {assets.scripts.map(src => (
        <Script key={src} src={src} type="module" strategy="afterInteractive" />
      ))}
    </>
  )
}
