import { IconType } from 'react-icons'

import styles from './index.module.css'

type ButtonProps = React.ComponentProps<'a'> & {
  icon?: IconType
}

export const Button = ({ children, className, icon: Icon, ...rest }: ButtonProps) => {
  return (
    <a className={styles.button} rel="noreferrer noopener" target="_blank" {...rest}>
      <div className={`${styles.item}${className ? ` ${className}` : ''}`}>
        {Icon && <Icon />}
        {children}
      </div>
    </a>
  )
}
