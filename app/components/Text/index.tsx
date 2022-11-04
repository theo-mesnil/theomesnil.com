import styles from './index.module.css'

interface TextProps {
  as?: keyof HTMLElementTagNameMap
  children: React.ReactNode
  className?: string
  variant?: 'h1' | 'h2' | 'h3' | 'xs' | 'sm' | 'md' | 'lg' | 'section'
}

const tagByVariant = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  xs: 'span',
  sm: 'span',
  md: 'span',
  lg: 'span',
  section: 'h4',
}

export default function Text({ as, variant = 'md', children, className }: TextProps) {
  const CustomTag = `${as || tagByVariant[variant]}` as keyof JSX.IntrinsicElements

  return <CustomTag className={`${styles[variant]} ${className || ''}`}>{children}</CustomTag>
}
