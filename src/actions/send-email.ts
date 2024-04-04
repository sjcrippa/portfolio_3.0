'use server'

import React from 'react'
import { Resend } from 'resend'

import { getErrorMessage, validateString } from '@/helpers/utils'
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_APY_KEY)

export const sendEmail = async (formData: FormData) => {
  const userEmail = formData.get('userEmail')
  const message = formData.get('message')

  if (!validateString(userEmail, 50)) {
    return {
      error: 'Invalid user email'
    }
  }

  if (!validateString(message, 1000)) {
    return {
      error: 'Invalid user email'
    }
  }

  let data;
  try {
    await resend.emails.send({
      from: `${userEmail} <onboarding@resend.dev>`,
      to: 'santicrippa@gmail.com',
      subject: 'Message from contact form',
      reply_to: userEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        userEmail: userEmail as string
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}
