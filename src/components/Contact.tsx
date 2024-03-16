'use client'

import React from 'react'

import SectionHeading from './ui/SectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <section 
      id='contact' 
      ref={ref}
      className='scroll-mt-28'
      >
      <SectionHeading>CONTACT ME</SectionHeading>
    </section>
  )
}
