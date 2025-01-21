import { IconType } from 'react-icons'
import { SiBluesky, SiDribbble, SiGithub, SiLinkedin, SiTwitch } from 'react-icons/si'

import ArrowLink from '../ArrowLink'
import Text from '../Text'

import styles from './index.module.css'

type Social = {
  icon: IconType
  name: string
  url: string
}

const socials: Social[] = [
  {
    name: 'Github',
    icon: SiGithub,
    url: 'https://github.com/theo-mesnil',
  },
  {
    name: 'Bluesky',
    icon: SiBluesky,
    url: 'https://bsky.app/profile/theomesnil.bsky.social',
  },
  { name: 'Dribbble', icon: SiDribbble, url: 'https://dribbble.com/theomesnil' },
  { name: 'Twitch', icon: SiTwitch, url: 'https://www.twitch.tv/theomtl' },
  { name: 'Linkedin', icon: SiLinkedin, url: 'https://www.linkedin.com/in/theomesnil/' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text variant="section">Follow me</Text>
      <ArrowLink href="/about" isNextLink className={styles.aboutLink}>
        Learn more about me
      </ArrowLink>
      <ul className={styles.socials}>
        {socials.map(({ icon: Icon, name, url }) => (
          <li key={`footer_social_${name}`}>
            <a href={url} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <Icon className={styles.socialIcon} />
              <span className={styles.socialName}>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
