'use client'

import { easeInOut, motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: easeInOut, duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
