import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ashwin - Design Portfolio',
  description: 'Minimalist design portfolio showcasing UI/UX, typography, and brand assets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-dark text-white`}>
        {children}
      </body>
    </html>
  )
} 