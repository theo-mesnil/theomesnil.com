import Link from 'next/link'

import Icon from '../Icon'

import styles from './index.module.css'

interface ArrowLinkProps {
  variant?: 'md' | 'sm'
  children: React.ReactNode
  href: string
  isNextLink?: boolean
  className?: string
}

export default function ArrowLink({
  variant = 'md',
  children,
  href,
  isNextLink,
  className,
}: ArrowLinkProps) {
  const Tag = isNextLink ? Link : 'a'

  return (
    <Tag
      href={href}
      target={!isNextLink ? '_blank' : undefined}
      className={`${styles.link} ${styles[variant]} ${className || ''}`}
    >
      {children}
      <Icon name="arrow-forward" className={styles.icon} />
    </Tag>
  )
}
