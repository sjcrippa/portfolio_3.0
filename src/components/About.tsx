'use client'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

import SectionHeading from './ui/SectionHeading'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import webDev from '/public/webDev.png'

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
      className='scroll-mt-24 max-w-xl'>
      <SectionHeading>About Me</SectionHeading>
      <div className='grid grid-cols-1 text-center lg:grid lg:grid-cols-2'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, laudantium exercitationem maxime quibusdam fuga voluptatibus eum tempore veniam et a, provident neque error! Eveniet repudiandae reprehenderit nulla qui perspiciatis iste, laborum, vero tempore dolore dicta veritatis, nemo sunt cumque eius dolores exercitationem libero at deleniti commodi omnis pariatur eaque facere magni! Iure, alias quis debitis, repellat id qui explicabo vero, et deleniti laboriosam asperiores dolorum. Culpa tempora veritatis eveniet ipsam, et voluptas dolore. Laboriosam, officia expedita cumque ipsa, doloribus laborum aperiam, cupiditate ut ducimus eos voluptatibus rem. Velit quo dolores adipisci sunt beatae consequatur id repellat, sequi molestiae error reiciendis?</p>
        <Image className='mx-auto' src={webDev} alt='web developer illustration' />
      </div>
    </section>
  )
}
