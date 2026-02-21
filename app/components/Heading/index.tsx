import Text from '../Text'
import Wording from '../Wording'
import styles from './index.module.css'

interface HeadingProps {
  children?: React.ReactNode
  title: React.ReactNode
}

export default function Heading({ children, title }: HeadingProps) {
  return (
    <div className={styles.heading}>
      <Text className={`${!!children ? styles.title : ''}`} variant="h1">
        {title}
      </Text>
      {children && <Wording>{children}</Wording>}
    </div>
  )
}
