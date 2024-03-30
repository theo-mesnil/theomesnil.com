import ArrowLink from '../components/ArrowLink'
import Text from '../components/Text'

import styles from './Experience.module.css'

function yearsAndMonthsBetweenDates(startDate: string, endDate?: string) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const monthsBetweenDates =
    (end.getFullYear() - start.getFullYear()) * 12 - start.getMonth() + end.getMonth()

  if (monthsBetweenDates < 12) return `${monthsBetweenDates}m`

  const years = Math.floor(monthsBetweenDates / 12)
  const months = monthsBetweenDates - years * 12

  if (months === 0) return `${years}y`

  return `${years}y ${months + 1}m`
}

interface ExperienceProps {
  company: string
  endDate?: string
  link: string
  startDate: string
  subJobs?: {
    description?: string[]
    stack?: string[]
    endDate?: string
    startDate?: string
    title: string
  }[]
}

function getDateFormatted(date: string) {
  return `${new Date(date).toLocaleString('en-GB', { month: 'short' })} ${new Date(
    date
  ).getFullYear()}`
}

export default function Experience({
  subJobs,
  startDate,
  endDate,
  company,
  link,
}: ExperienceProps) {
  return (
    <article>
      <div>
        <ArrowLink href={link}>{company}</ArrowLink>
        <Text variant="xs" as="div" className={styles.subtitle}>
          {getDateFormatted(startDate)} / {endDate ? getDateFormatted(endDate) : 'Now'}
          {` (${yearsAndMonthsBetweenDates(startDate, endDate)})`}
        </Text>
      </div>
      {!!subJobs && (
        <div className={styles.subJobs}>
          {subJobs.map(subJob => (
            <div className={styles.subJob} key={`experience_${company}_subJob_${subJob.title}`}>
              <Text className={styles.subJobTitle} as="div">
                {subJob.title}
              </Text>
              {subJob.startDate && (
                <Text variant="xs" as="div">
                  {getDateFormatted(subJob.startDate)} /{' '}
                  {subJob.endDate ? getDateFormatted(subJob.endDate) : 'Now'}
                  {` (${yearsAndMonthsBetweenDates(subJob.startDate, subJob.endDate)})`}
                </Text>
              )}
              {subJob.description && (
                <ul className={styles.subJobDescription}>
                  {subJob.description?.map((description, index) => (
                    <li
                      className={styles.subJobDescriptionItem}
                      key={`experience_${company}_subJob_${subJob.title}_${index}`}
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              )}
              {subJob.stack && (
                <div className={styles.stacks}>
                  {subJob.stack?.map((stack, index) => (
                    <span
                      className={styles.stacksItem}
                      key={`experience_${company}_subJob_${subJob.title}__stack_${index}`}
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  )
}
