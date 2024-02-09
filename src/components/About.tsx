'use client'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import SectionHeading from './ui/SectionHeading'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  })
  const { setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView) {
      setActiveSection('About')
    }
  }, [inView, setActiveSection])

  return (
    <section
      id='about'
      ref={ref}
      className='scroll-mt-24'>
      <SectionHeading>About Me</SectionHeading>
      <div className='text-center'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum earum unde quam nihil ullam cum molestias voluptas non assumenda ducimus dolore cumque modi temporibus autem, consequuntur natus quo ad corrupti quisquam. Labore quae natus vero provident sequi voluptate corrupti cupiditate temporibus quasi at laboriosam excepturi, ipsa ratione animi distinctio neque?</p>
      </div>
    </section>
  )
}
