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
        delay: 0.5
      }}
    >
      <h2 className='text-center text-3xl font-medium uppercase mb-8'>{children}</h2>
    </motion.div>
  )
}
