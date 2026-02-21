import Image, { ImageProps } from 'next/image'
import { RiStarFill } from 'react-icons/ri'

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
      className={styles.project}
      href={`https://www.github.com/${github}`}
      rel="noreferrer noopener"
      target="_blank"
    >
      <article>
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
        <div className={styles.image}>
          <Image alt={`${name} cover`} fill placeholder="blur" src={image} />
        </div>
      </article>
    </a>
  )
}
