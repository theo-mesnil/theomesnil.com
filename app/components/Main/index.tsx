'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import styles from './index.module.css'

const variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
}

interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  const pathname = usePathname()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <motion.main
      key={pathname}
      className={styles.main}
      initial="initial"
      animate="enter"
      variants={variants}
    >
      {children}
    </motion.main>
  )
}
