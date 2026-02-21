import Image from 'next/image'
import { SiCss3, SiFigma, SiJavascript, SiReact, SiTypescript } from 'react-icons/si'

import meImage from '../../public/about/me.jpg'
import ArrowLink from '../components/ArrowLink'
import Heading from '../components/Heading'
import Text from '../components/Text'
import Wording from '../components/Wording'
import Experience from './Experience'
import styles from './page.module.css'

const experiences = [
  {
    company: 'Welcome to the jungle',
    link: 'https://www.welcometothejungle.com',
    startDate: '05/01/2019',
    subJobs: [
      {
        description: [
          'Tech owner on mission team: lead epics and engage discussions with the PM and designer for all development team associates',
          'Create with pride our design system welcome-ui.com and serve on the welcome-ui committee',
          'Facilitate front chapter meetings',
          'Contribute to continuous integration efforts and facilitate upgrades across common libraries',
        ],
        stack: ['ReactJS', 'Typescript', 'Styled component', 'NextJS', 'CircleCI', 'Figma'],
        startDate: '01/01/2021',
        title: 'Senior frontend developer',
      },
      {
        endDate: '01/01/2021',
        startDate: '05/01/2019',
        title: 'Confirmed frontend developer',
      },
    ],
    title: 'Senior frontend developer',
  },
  {
    company: 'Leboncoin',
    endDate: '04/01/2019',
    link: 'https://www.leboncoin.com',
    startDate: '08/01/2017',
    subJobs: [
      {
        description: [
          'Transitioned a legacy app to a ReactJS platform on the deposit funnel, the ad page, and a holiday bookings funnel',
          'Proof of concept for a design system',
        ],
        stack: ['ReactJS', 'Redux', 'Styled component', 'Sketch'],
        title: 'Frontend developer',
      },
    ],
  },
  {
    company: 'Canalplus',
    endDate: '07/01/2017',
    link: 'https://www.canalplus.com',
    startDate: '04/01/2013',
    subJobs: [
      {
        description: [
          'Migrated myCanal platform to ReactJS',
          'Created C8 & CSTAR replay platform',
          'Crafted websites for special TV operations',
        ],
        endDate: '07/01/2017',
        stack: ['ReactJS', 'Angular', 'SCSS'],
        startDate: '01/01/2015',
        title: 'Frontend developer - Interfaces & Experiences',
      },
      {
        endDate: '12/01/2014',
        startDate: '10/01/2013',
        title: 'Web Developer & Designer at Canalplay',
      },
      {
        endDate: '09/01/2014',
        startDate: '04/01/2013',
        title: 'Intership - Assistant Project Manager',
      },
    ],
  },
  {
    company: 'Freelance - Web developer and design',
    endDate: '12/01/2014',
    link: 'https://github.com/theo-mesnil',
    startDate: '02/01/2010',
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
              I’m a front-end developer with over 10 years of experiences
            </>
          }
        >
          based in Paris and currently at{' '}
          <a href="https://www.welcometothejungle.com" rel="noopener noreferrer" target="_blank">
            Welcome to the jungle
          </a>
          . I was previously at{' '}
          <a href="https://www.leboncoin.fr" rel="noopener noreferrer" target="_blank">
            Leboncoin
          </a>{' '}
          and{' '}
          <a href="https://www.canalplus.com/" rel="noopener noreferrer" target="_blank">
            Canalplus
          </a>
          . I bring a deep passion for crafting engaging web interfaces and enhancing user
          experiences with ReactJS and Typescript.
        </Heading>
        <div className={styles.meImage}>
          <Image alt="Théo Mesnil" fill placeholder="blur" src={meImage} />
        </div>
      </section>
      <Wording className={styles.life}>
        I lived all my childhood in Guadeloupe 🏝 I’ve studied at Supinfo, first 2 years in
        Guadeloupe then last 3 years in Montréal. Then i moved to Paris to start my final study
        internship. I also love play games: Microsoft Flight simulator, Age of Empire...
      </Wording>
      <ArrowLink className={styles.resume} href="theo-mesnil-resume.pdf" variant="sm">
        Check my resume
      </ArrowLink>
      <section className={styles.experiences}>
        <div className={styles.logos}>
          <SiJavascript />
          <SiReact />
          <SiTypescript />
          <SiCss3 />
          <SiFigma />
        </div>
        <Text variant="section">Experiences</Text>
        <div className={styles.jobs}>
          {experiences.map(experience => (
            <Experience {...experience} key={`experience_${experience.company}`} />
          ))}
        </div>
      </section>
    </>
  )
}
