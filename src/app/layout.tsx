import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '儿童英文字母学习 - ABC Learning for Kids',
  description: '专为儿童设计的英文字母学习网站，包含笔画演示、发音教学和练习纸生成',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
