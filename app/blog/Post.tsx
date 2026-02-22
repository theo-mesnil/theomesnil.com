import Image, { ImageProps } from 'next/image'
import { RiMicFill } from 'react-icons/ri'

import ArrowLink from '../components/ArrowLink'
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
    <a className={styles.post} href={url} rel="noreferrer noopener" target="_blank">
      <article className={styles.article}>
        <div className={styles.infos}>
          <div className={styles.image}>
            <Image alt={`${name} cover`} fill placeholder="blur" src={image} />
          </div>
          <div className={styles.metas}>
            <Text className={styles.meta} variant="sm">
              {date}
            </Text>
            <Text className={styles.meta} variant="sm">
              {time}
            </Text>
            <Text>{isFrench ? '🇫🇷' : '🇬🇧'}</Text>
          </div>
        </div>
        <div>
          <Text className={styles.title} variant="h2">
            {isPodcast && <RiMicFill className={styles.mic} />}
            {name}
          </Text>
          <Text className={styles.description} variant="sm">
            {description}
          </Text>
          <ArrowLink className={styles.more} variant="sm">
            {isPodcast ? 'Listen' : 'Read more'}
          </ArrowLink>
        </div>
      </article>
    </a>
  )
}
