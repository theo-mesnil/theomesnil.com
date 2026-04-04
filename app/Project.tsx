import Image, { ImageProps } from 'next/image'
import { RiStarFill } from 'react-icons/ri'
import { SiApple, SiGithub, SiGoogleplay } from 'react-icons/si'

import { Button } from './components/Button'
import Text from './components/Text'
import styles from './Project.module.css'

export type ProjectProps = {
  appleStore?: string
  description: string
  github: string
  googlePlay?: string
  image: ImageProps['src']
  name: string
  stars: string
}

export default function Project({
  appleStore,
  description,
  github,
  googlePlay,
  image,
  name,
  stars,
}: ProjectProps) {
  return (
    <article className={styles.project}>
      <div className={styles.title}>
        <Text variant="h3">{name}</Text>
        <Text className={styles.stars} variant="xs">
          {stars}
          <RiStarFill className={styles.icon} />
        </Text>
      </div>
      <Text className={styles.description} variant="sm">
        {description}
      </Text>
      <div className={styles.buttons}>
        <Button href={`https://www.github.com/${github}`} icon={SiGithub}>
          Github
        </Button>
        {appleStore && (
          <Button href={`https://apps.apple.com/us/app/${appleStore}`} icon={SiApple}>
            App Store
          </Button>
        )}
        {googlePlay && (
          <Button
            href={`https://play.google.com/store/apps/details?id=${googlePlay}`}
            icon={SiGoogleplay}
          >
            Google Play
          </Button>
        )}
      </div>
      <div className={styles.image}>
        <Image alt={`${name} cover`} fill placeholder="blur" src={image} />
      </div>
    </article>
  )
}
