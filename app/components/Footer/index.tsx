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
    icon: SiGithub,
    name: 'Github',
    url: 'https://github.com/theo-mesnil',
  },
  {
    icon: SiBluesky,
    name: 'Bluesky',
    url: 'https://bsky.app/profile/theomesnil.bsky.social',
  },
  { icon: SiDribbble, name: 'Dribbble', url: 'https://dribbble.com/theomesnil' },
  { icon: SiTwitch, name: 'Twitch', url: 'https://www.twitch.tv/theomtl' },
  { icon: SiLinkedin, name: 'Linkedin', url: 'https://www.linkedin.com/in/theomesnil/' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text variant="section">Follow me</Text>
      <ArrowLink className={styles.aboutLink} href="/about" isNextLink>
        Learn more about me
      </ArrowLink>
      <ul className={styles.socials}>
        {socials.map(({ icon: Icon, name, url }) => (
          <li key={`footer_social_${name}`}>
            <a className={styles.social} href={url} rel="noopener noreferrer" target="_blank">
              <Icon className={styles.socialIcon} />
              <span className={styles.socialName}>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
