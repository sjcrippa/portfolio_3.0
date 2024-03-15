'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './ui/SectionHeading'

const fadeInAnimiationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index // De esta manera, recibiendo el parametro custom que le dimos al LI, multiplico el delay por el nro index que cada LI va a tener, de esa forma cada LI va a tener un delay diferente.
    }
  })
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-0 md:mb-48 max-w-[53rem] scroll-mt-28 text-center'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center px-5 gap-2 md:gap-5 text-lg font-semibold'>
        {
          skillsData.map((skills, index) => (
            <motion.li
              key={index}
              className='bg-gradient-to-l from-sky-600 to-indigo-700 border shadow-lg shadow-primary/70 border-light/[0.1] rounded-xl px-5 py-3'
              variants={fadeInAnimiationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true
              }}
              custom={index} // de esta manera puedo pasar el index como propiedad al objeto con las variantes.
            >
              {skills}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
