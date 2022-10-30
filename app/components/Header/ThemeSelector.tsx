'use client'

import { useEffect } from 'react'

import Icon from '../Icon'

import styles from './ThemeSelector.module.css'

export default function ThemeSelector() {
  function handleChangeTheme() {
    const theme = localStorage.getItem('theme') || 'dark'

    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    if (theme) document.documentElement.setAttribute('data-theme', theme)
  }, [])

  return (
    <button aria-label={`theme selector`} className={styles.theme} onClick={handleChangeTheme}>
      <Icon name="sun" className={styles.sun} />
      <Icon name="moon" className={styles.moon} />
    </button>
  )
}
