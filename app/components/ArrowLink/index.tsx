import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'

import styles from './index.module.css'

interface ArrowLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
  isNextLink?: boolean
  variant?: 'md' | 'sm'
}

interface ArrowLinkChildrenProps {
  children: React.ReactNode
}

function ArrowLinkContent({ children }: ArrowLinkChildrenProps) {
  return (
    <>
      {children}
      <RiArrowRightLine className={styles.icon} />
    </>
  )
}

export default function ArrowLink({
  children,
  className,
  href,
  isNextLink,
  variant = 'md',
}: ArrowLinkProps) {
  const classNames = `${styles.link} ${styles[variant]} ${className || ''}`

  if (!href) {
    return (
      <span className={classNames}>
        <ArrowLinkContent>{children}</ArrowLinkContent>
      </span>
    )
  } else {
    if (isNextLink) {
      return (
        <Link href={href} className={classNames}>
          <ArrowLinkContent>{children}</ArrowLinkContent>
        </Link>
      )
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
        <ArrowLinkContent>{children}</ArrowLinkContent>
      </a>
    )
  }
}
