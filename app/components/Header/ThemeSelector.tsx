'use client'
import { useTheme } from 'next-themes'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

import styles from './ThemeSelector.module.css'

export default function ThemeSelector() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      aria-label={`theme selector`}
      className={styles.theme}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <RiSunFill className={styles.sun} />
      <RiMoonClearFill className={styles.moon} />
    </button>
  )
}
