import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from './font'

export const metadata: Metadata = {
  title: 'S.J. Crippa Web Developer',
  description: 'Porfolio from Santiago Julian Crippa, web developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-dark text-light max-w-screen-xl border border-red-500 mx-auto`}>
        {children}
      </body>
    </html>
  )
}
