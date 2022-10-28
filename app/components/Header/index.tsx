import Link from 'next/link'

import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Théo.</span>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Project</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
