import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from './font'
import { Navbar } from '@/components/navbar/bar/Navbar'

export const metadata: Metadata = {
  title: 'S.J. Crippa Web Developer',
  description: 'S.J. Crippa Web Developer portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-dark text-light max-w-screen-lg border border-yellow-500 mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
