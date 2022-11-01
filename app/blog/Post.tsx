import Image, { ImageProps } from 'next/image'

import ArrowLink from '../components/ArrowLink'
import Icon from '../components/Icon'
import Text from '../components/Text'

import styles from './Post.module.css'

interface PostProps {
  date: string
  description: string
  image: ImageProps['src']
  isFrench?: boolean
  isPodcast?: boolean
  name: string
  time: string
  url: string
}

export default function Post({
  date,
  description,
  image,
  isFrench,
  isPodcast,
  name,
  time,
  url,
}: PostProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className={styles.post}>
      <article className={styles.article}>
        <div className={styles.infos}>
          <div className={styles.image}>
            <Image placeholder="blur" src={image} alt={`${name} cover`} />
          </div>
          <div className={styles.metas}>
            <Text variant="sm" className={styles.meta}>
              {date}
            </Text>
            <Text variant="sm" className={styles.meta}>
              {time}
            </Text>
            <Text>{isFrench ? '🇫🇷' : '🇬🇧'}</Text>
          </div>
        </div>
        <div>
          <Text variant="h2" className={styles.title}>
            {isPodcast && <Icon className={styles.mic} name="mic" />}
            {name}
          </Text>
          <Text variant="sm" className={styles.description}>
            {description}
          </Text>
          <ArrowLink variant="sm" className={styles.more}>
            {isPodcast ? 'Listen' : 'Read more'}
          </ArrowLink>
        </div>
      </article>
    </a>
  )
}
