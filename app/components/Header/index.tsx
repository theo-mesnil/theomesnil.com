import Text from '../Text'
import styles from './index.module.css'
import NavigationItem from './NavigationItem'
import ThemeSelector from './ThemeSelector'

const menu = [
  {
    name: 'Projects',
    path: '/',
  },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <Text variant="h2">Théo.</Text>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menu.map(({ name, path }) => (
            <NavigationItem key={`header_menu_${path}`} path={path}>
              {name}
            </NavigationItem>
          ))}
        </ul>
        <ThemeSelector />
      </nav>
    </header>
  )
}
