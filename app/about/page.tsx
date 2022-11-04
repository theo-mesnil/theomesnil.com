import Image from 'next/image'

import meImage from '../../public/about/me.jpg'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Text from '../components/Text'
import Wording from '../components/Wording'

import Experience from './Experience'
import styles from './page.module.css'

const experiences = [
  {
    title: 'Senior front-end developer',
    company: 'Welcome to the jungle',
    startDate: '01/05/2019',
    subJobs: [
      {
        title: 'Front-end developer',
        startDate: '01/05/2019',
        endDate: '01/01/2021',
      },
    ],
  },
  {
    title: 'Front-end developer',
    company: 'Leboncoin',
    startDate: '01/08/2017',
    endDate: '01/04/2019',
  },
  {
    title: 'Front-end developer',
    company: 'Canal+',
    startDate: '01/04/2013',
    endDate: '01/07/2017',
    subJobs: [
      {
        title: 'Interface & experience team (myCanal)',
        startDate: '01/01/2015',
        endDate: '01/07/2017',
      },
      {
        title: 'Designer & integrator (Canalplay)',
        startDate: '01/10/2013',
        endDate: '01/12/2014',
      },
      {
        title: 'Assistant project manager & integrator (Internship)',
        startDate: '01/04/2013',
        endDate: '01/09/2014',
      },
    ],
  },
  {
    title: 'Freelance Web developer and design',
    company: 'Freelance',
    startDate: '01/02/2010',
    endDate: '01/12/2014',
  },
]

export default function About() {
  return (
    <>
      <section>
        <Heading
          title={
            <>
              Hello, i’m Théo <span className={styles.emoji}>:)</span>
              <br />
              I’m a front-end developer with over 8 years of experiences
            </>
          }
        >
          based in Paris and currently at{' '}
          <a href="https://www.welcometothejungle.com" target="_blank" rel="noopener noreferrer">
            Welcome to the jungle
          </a>
          . I was previously at{' '}
          <a href="https://www.leboncoin.fr" target="_blank" rel="noopener noreferrer">
            Leboncoin
          </a>{' '}
          and{' '}
          <a href="https://www.canalplus.com/" target="_blank" rel="noopener noreferrer">
            Canalplus
          </a>
          . I love to create interfaces and design system with React, typescript and
          styled-components.
        </Heading>
        <div className={styles.meImage}>
          <Image placeholder="blur" src={meImage} alt="Théo Mesnil" />
        </div>
      </section>
      <Text variant="xs" className={styles.pictureCopyright} as="div">
        <a href="https://www.instagram.com/thomdek/" target="_blank" rel="noopener noreferrer">
          Picture by Thomas Decamps
        </a>
      </Text>
      <Wording>
        I lived all my childhood in Guadeloupe 🏝 I’ve studied at Supinfo, first 2 years in
        Guadeloupe then last 3 years in Montréal. Then i moved to Paris to start my final study
        internship. I also love play games: Microsoft Flight simulator, Age of Empire...
      </Wording>
      <section className={styles.experiences}>
        <Text variant="section">Experiences</Text>
        <div className={styles.logos}>
          <Icon name="javascript" />
          <Icon name="react" />
          <Icon name="typescript" />
          <Icon name="css" />
          <Icon name="figma" />
        </div>
        <div className={styles.jobs}>
          {experiences.map(experience => (
            <Experience {...experience} key={`experience_${experience.company}`} />
          ))}
        </div>
      </section>
    </>
  )
}
