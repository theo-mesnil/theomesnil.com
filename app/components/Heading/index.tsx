import Text from '../Text'

import styles from './index.module.css'

interface HeadingProps {
  title: React.ReactNode
  children?: React.ReactNode
}

export default function Heading({ title, children }: HeadingProps) {
  return (
    <div className={styles.heading}>
      <Text variant="h1" className={`${!!children ? styles.title : ''}`}>
        {title}
      </Text>
      {children && <Text className={styles.subtitle}>{children}</Text>}
    </div>
  )
}
