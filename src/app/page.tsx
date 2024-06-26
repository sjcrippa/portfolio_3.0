import React from 'react'

import Hero from '@/components/Hero'
import SectionDivider from '@/components/ui/SectionDivider'
import About from '@/components/About'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function LandingPage() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Hero />
      <SectionDivider />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}
