'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { FaPaperPlane } from 'react-icons/fa'

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
      <p>Please contact me at {' '}
        <a className='italic underline' href='mailto:santicrippa@gmail.com'>santicrippa@gmail.com</a>
        {' '} or through this form:
      </p>
      <form action="">
        <input type="email" />
        <textarea></textarea>
        <Button>
          Submit <FaPaperPlane />
        </Button>
      </form>
    </section>
  )
}
