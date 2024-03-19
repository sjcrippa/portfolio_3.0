'use client'

import React from 'react'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

import SubmitBtn from './ui/buttons/SubmitBtn'
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
          const { error } = await sendEmail(formData)
          if (error){
            toast.error(error)
            return
          }
          toast.success('Email sent successfully!')
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
          name='message'
          placeholder='Your message'
          required
          maxLength={1000}
          className='h-52 my-3 rounded-lg p-3 resize-none bg-light outline-none'></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
