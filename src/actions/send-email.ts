'use server'

import { Resend } from 'resend'

import { validateString } from '@/helpers/utils'

const resend = new Resend(process.env.RESEND_APY_KEY)

export const sendEmail = async (formData: FormData) => {
  const userEmail = formData.get('userEmail')
  const userMessage = formData.get('userMessage')

  if(!validateString(userEmail, 50)) {
    return {
      error: 'Invalid user email'
    }
  }

  if(!validateString(userMessage, 1000)) {
    return {
      error: 'Invalid user email'
    }
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.com>',
      to: 'santicrippa@gmail.com',
      subject: 'Message from contact form',
      reply_to: userEmail as string,
      text: userMessage as string
    })
  } catch (error) {
    console.log(error);
  }
}
