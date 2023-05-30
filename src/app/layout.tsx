'use client'
import GlobalStyles from '@/GlobalStyles'
import Menu from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        <Menu />
        {children}
      </body>
    </html>
  )
}
