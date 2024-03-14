'use client'

import React from 'react'
import Image from 'next/image'

import webDev from '/public/webDev.png'
import SectionHeading from './ui/SectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <section
      id='about'
      ref={ref}
      className='scroll-mt-24 max-w-lg xl:max-w-4xl '>
      <SectionHeading>About Me</SectionHeading>
      <div className='grid grid-cols-1 text-center lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <p className='mt-5 lg:mt-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, laudantium exercitationem maxime quibusdam fuga voluptatibus eum tempore veniam et a, provident neque error! Eveniet repudiandae reprehenderit nulla qui perspiciatis iste, laborum, vero tempore dolore dicta veritatis, nemo sunt cumque eius dolores exercitationem libero at deleniti commodi omnis pariatur eaque facere magni! Iure, alias quis debitis, repellat id qui explicabo vero, et deleniti laboriosam asperiores dolorum. Culpa tempora veritatis eveniet ipsam, et voluptas dolore.</p>
        <Image className='mx-auto' src={webDev} alt='web developer illustration' />
      </div>
    </section>
  )
}
