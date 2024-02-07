import React from 'react'

import Hero from '@/components/Hero'
import SectionDivider from '@/components/ui/SectionDivider'
import About from '@/components/About'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  )
}
