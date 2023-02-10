import Image, { ImageProps } from 'next/image'

import Icon from './components/Icon'
import Text from './components/Text'
import styles from './Project.module.css'

interface ProjectProps {
  description: string
  github: string
  image: ImageProps['src']
  name: string
  stars: string
}

export default function Project({ description, github, image, name, stars }: ProjectProps) {
  return (
    <a
      href={`https://www.github.com/${github}`}
      target="_blank"
      rel="noreferrer noopener"
      className={styles.project}
    >
      <article>
        <div className={styles.title}>
          <Text variant="h3">{name}</Text>
          <Text variant="xs" className={styles.stars}>
            {stars}
            <Icon name="star" className={styles.icon} />
          </Text>
        </div>
        <Text variant="sm" className={styles.description}>
          {description}
        </Text>
        <div className={styles.image}>
          <Image fill placeholder="blur" src={image} alt={`${name} cover`} />
        </div>
      </article>
    </a>
  )
}
