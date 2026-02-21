'use client'
import { motion, Variants } from 'motion/react'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import styles from './index.module.css'

const variants: Variants = {
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 8,
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
      animate="enter"
      className={styles.main}
      initial="initial"
      key={pathname}
      variants={variants}
    >
      {children}
    </motion.main>
  )
}
