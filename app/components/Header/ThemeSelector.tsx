'use client'
import { useTheme } from 'next-themes'

import Icon from '../Icon'

import styles from './ThemeSelector.module.css'

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label={`theme selector`}
      className={styles.theme}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Icon name="sun" className={styles.sun} />
      <Icon name="moon" className={styles.moon} />
    </button>
  )
}
