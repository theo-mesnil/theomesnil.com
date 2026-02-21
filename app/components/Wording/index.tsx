import Text from '../Text'
import styles from './index.module.css'

interface WordingProps {
  children: React.ReactNode
  className?: string
}

export default function Wording({ children, className }: WordingProps) {
  return (
    <Text as="p" className={`${styles.wording} ${className}`}>
      {children}
    </Text>
  )
}
