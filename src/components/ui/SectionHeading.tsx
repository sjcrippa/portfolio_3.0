import React from 'react'
import { motion } from 'framer-motion'

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1
      }}
    >
      <h2 className='text-center text-3xl font-medium capitalize mb-8'>{children}</h2>
    </motion.div>
  )
}
