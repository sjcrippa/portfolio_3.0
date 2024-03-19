import React from 'react'
import { Button } from '@nextui-org/react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      disabled={pending}
      className='bg-light text-dark rounded-xl text-base md:text-lg font-semibold outline-none disabled:bg-opacity-75'>
      {
        pending
          ? <div className='h-5 w-5 animate-spin rounded-full border-b-3 border-primary'></div>
          : <>
            Submit < FaPaperPlane />
            </>
      }
    </Button>
  )
}
