import { JSX } from 'react'

import { vigaFont } from '../Fonts'
import styles from './index.module.css'

interface TextProps {
  as?: keyof HTMLElementTagNameMap
  children: React.ReactNode
  className?: string
  variant?: 'h1' | 'h2' | 'h3' | 'lg' | 'md' | 'section' | 'sm' | 'xs'
}

const tagByVariant = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  lg: 'span',
  md: 'span',
  section: 'div',
  sm: 'span',
  xs: 'span',
}

export default function Text({ as, children, className, variant = 'md' }: TextProps) {
  const CustomTag = `${as || tagByVariant[variant]}` as keyof JSX.IntrinsicElements
  const isHeading = ['h1', 'h2', 'h3'].includes(variant)

  return (
    <CustomTag
      className={`${styles[variant]} ${className || ''} ${isHeading ? vigaFont.className : undefined}`}
    >
      {children}
    </CustomTag>
  )
}
