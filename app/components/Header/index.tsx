import Icon from '../Icon'
import Text from '../Text'

import styles from './index.module.css'
import NavigationItem from './NavigationItem'

const menu = [
  {
    path: '/',
    name: 'Projects',
  },
  { path: '/blog', name: 'Blog' },
  { path: '/about', name: 'About' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <Text variant="h2">Théo.</Text>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menu.map(({ path, name }) => (
            <NavigationItem path={path} key={`header_menu_${path}`}>
              {name}
            </NavigationItem>
          ))}
        </ul>
        <button className={styles.theme}>
          <Icon name="sun" />
        </button>
      </nav>
    </header>
  )
}
