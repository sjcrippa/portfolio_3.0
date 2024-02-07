import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'SJ.Crippa | Personal Portfolio',
  description: 'Santiago Julian Crippa, front-end developer with 2 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-50 text-gray-950 relative h-[400vh] pt-28 sm:pt-36`}>
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[2rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        
        <Header />
        {children}
      </body>
    </html>
  )
}
