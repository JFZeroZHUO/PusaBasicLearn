import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '风变野菩萨AI视频社团',
  description: '新手入门学习路径'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
