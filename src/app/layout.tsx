import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voice Notes AI',
  description: 'AI-powered voice notes application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}