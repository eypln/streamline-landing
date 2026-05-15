import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Letify - Letting Assistant',
  description: 'Letify - Letting Assistant',
  icons: {
    icon: [
      { url: '/Logo/32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo/192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/Logo/180.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/Logo/32.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
