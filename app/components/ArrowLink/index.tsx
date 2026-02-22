import Link from 'next/link'
import { RiArrowRightLine } from 'react-icons/ri'

import styles from './index.module.css'

interface ArrowLinkChildrenProps {
  children: React.ReactNode
}

interface ArrowLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
  isNextLink?: boolean
  variant?: 'md' | 'sm'
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
        <Link className={classNames} href={href}>
          <ArrowLinkContent>{children}</ArrowLinkContent>
        </Link>
      )
    }

    return (
      <a className={classNames} href={href} rel="noopener noreferrer" target="_blank">
        <ArrowLinkContent>{children}</ArrowLinkContent>
      </a>
    )
  }
}

function ArrowLinkContent({ children }: ArrowLinkChildrenProps) {
  return (
    <>
      {children}
      <RiArrowRightLine className={styles.icon} />
    </>
  )
}
