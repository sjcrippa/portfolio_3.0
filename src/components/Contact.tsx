'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

import SectionHeading from './ui/SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/send-email'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Lets talk</SectionHeading>

      <p>You can reach me at {' '}
        <a className='italic underline' href='mailto:santicrippa@gmail.com'>santicrippa@gmail.com</a>
        {' '} or through this form:
      </p>
      <form
        action={async (formData) => {
          await sendEmail(formData)
        }}
        className='mt-10 flex flex-col text-dark'>
        <input
          name='userEmail'
          type="email"
          placeholder='Your email'
          required
          maxLength={50}
          className='px-3 h-14 rounded-lg bg-light outline-none ' />
        <textarea
          name='userMessage'
          placeholder='Your message'
          required
          maxLength={1000}
          className='h-52 my-3 rounded-lg p-3 resize-none bg-light outline-none'></textarea>
        <Button type='submit' className='bg-light text-dark rounded-xl text-base md:text-lg font-semibold outline-none'>
          Submit <FaPaperPlane />
        </Button>
      </form>
    </motion.section>
  )
}
