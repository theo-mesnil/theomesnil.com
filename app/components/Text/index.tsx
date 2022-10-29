import styles from './index.module.css'

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'xs' | 'sm' | 'md' | 'lg' | 'section'
  children: React.ReactNode
  as?: keyof HTMLElementTagNameMap
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

export default function Text({ as, variant = 'md', children }: TextProps) {
  const CustomTag = `${as || tagByVariant[variant]}` as keyof JSX.IntrinsicElements

  return <CustomTag className={styles[variant]}>{children}</CustomTag>
}
