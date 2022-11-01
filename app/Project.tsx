import Image, { ImageProps } from 'next/image'

import Icon from './components/Icon'
import Text from './components/Text'
import styles from './Project.module.css'

interface ProjectProps {
  name: string
  image: ImageProps['src']
  description: string
  github: string
  stars: string
}

export default function Project({ name, image, description, github, stars }: ProjectProps) {
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
            <Icon name="star" className={styles.icon} /> {stars}
          </Text>
        </div>
        <Text variant="sm" className={styles.description}>
          {description}
        </Text>
        <div className={styles.image}>
          <Image placeholder="blur" src={image} alt={`${name} cover`} />
        </div>
      </article>
    </a>
  )
}
