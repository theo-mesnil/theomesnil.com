import Text from '../Text'

import styles from './index.module.css'

interface WordingProps {
  children: React.ReactNode
}

export default function Wording({ children }: WordingProps) {
  return (
    <Text className={styles.wording} as="p">
      {children}
    </Text>
  )
}
