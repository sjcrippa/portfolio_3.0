import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
  message: string
  userEmail: string
}

export default function ContactFormEmail({ message, userEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='!bg-dark !text-light'>
          <Container>
            <Section className='bg-light my-10 px-10 py-4 rounded-lg'>
              <Heading className='leading-tight'>You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The user's email is: {userEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
