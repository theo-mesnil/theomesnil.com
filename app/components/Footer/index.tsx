import Icon, { IconProps } from '../Icon'
import Text from '../Text'

import styles from './index.module.css'

type Social = {
  name: IconProps['name']
  url: string
}

const socials: Social[] = [
  {
    name: 'github',
    url: 'https://github.com/theo-mesnil',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/theomesnil',
  },
  { name: 'dribbble', url: 'https://dribbble.com/theomesnil' },
  { name: 'twitch', url: 'https://www.twitch.tv/theomtl' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/theomesnil/' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text variant="section">Follow me</Text>
      <ul className={styles.socials}>
        {socials.map(({ name, url }) => (
          <li key={`footer_social_${name}`}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <Icon name={name} className={styles.socialIcon} />
              <span className={styles.socialName}>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
