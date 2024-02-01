import React from 'react'

import Hero from '@/components/Hero'
import SectionDivider from '@/components/dividers/SectionDivider'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDivider />
    </main>
  )
}
