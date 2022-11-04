import ArrowLink from '../components/ArrowLink'
import Text from '../components/Text'

import styles from './Experience.module.css'

interface ExperienceProps {
  title: string
  startDate: string
  endDate?: string
  company: string
  subJobs?: {
    title: string
    startDate: string
    endDate: string
  }[]
}

function getDateFormatted(date: string) {
  return `${new Date(date).toLocaleString('en-GB', { month: 'short' })} ${new Date(
    date
  ).getFullYear()}`
}

export default function Experience({
  subJobs,
  title,
  startDate,
  endDate,
  company,
}: ExperienceProps) {
  return (
    <article>
      <div>
        <ArrowLink>{title}</ArrowLink>
        <Text variant="xs" as="div" className={styles.subtitle}>
          {company} - {getDateFormatted(startDate)} / {endDate ? getDateFormatted(endDate) : 'Now'}
        </Text>
      </div>
      {!!subJobs && (
        <div className={styles.subJobs}>
          {subJobs.map(subJob => (
            <div key={`experience_${title}_subJob_${subJob.title}`}>
              <Text className={styles.subJobTitle} as="div">
                {subJob.title}
              </Text>
              <Text variant="xs" as="div">
                {getDateFormatted(subJob.startDate)} / {getDateFormatted(subJob.endDate)}
              </Text>
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
