// https://api.github.com/repos/WTTJ/welcome-ui

import Image, { ImageProps } from 'next/image'

import Icon from '../Icon'
import Text from '../Text'

import styles from './index.module.css'

interface ProjectProps {
  name: string
  image: ImageProps['src']
  description: string
  github: string
}

export default function Project({ name, image, description, github }: ProjectProps) {
  return (
    <a
      href={`https://www.github.com/${github}`}
      target="_blank"
      rel="noreferrer"
      className={styles.project}
    >
      <article>
        <div className={styles.title}>
          <Text variant="h3">{name}</Text>
          <Text variant="xs" className={styles.stars}>
            <Icon name="star" className={styles.icon} /> {/* TODO */}xxx
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
