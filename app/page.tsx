import theomesnilImage from '../public/projects/theo-mesnil.jpg'
import welcomeUiImage from '../public/projects/welcome-ui.jpg'
import whatToWatchImage from '../public/projects/what-to-watch.jpg'

import Heading from './components/Heading'
import Text from './components/Text'
import styles from './page.module.css'
import Project from './Project'

const projects = [
  {
    name: 'Welcome UI',
    github: 'WTTJ/welcome-ui',
    image: welcomeUiImage,
    description:
      'Customizable design system library made with react, typescript, styled-components and reakit.',
    stars: '~600',
  },
  {
    name: 'WhatToWatch',
    github: 'theo-mesnil/WhatToWatch',
    image: whatToWatchImage,
    description:
      'WhatToWatch is the simplest and fastest way to discover movies, series, and where to watch them.',
    stars: '~20',
  },
  {
    name: 'theomesnil.com',
    github: 'theo-mesnil/theomesnil.com',
    image: theomesnilImage,
    description: 'This website is open source, you can check the code source on github :)',
    withBorder: true,
    stars: '3',
  },
]

export default function Home() {
  return (
    <>
      <section>
        <Heading title="Senior front-end developer in Paris who likes interfaces 💅">
          With a decade of experience as a frontend developer, I bring a deep passion for crafting
          engaging web interfaces and enhancing user experiences with ReactJS and Typescript. I take
          pride in my contributions to projects such as MyCanal, the migration of Leboncoin and the
          design system for Welcome to the Jungle. I enjoy contributing to both product and
          technical decisions and actively participating in shaping future developments.
        </Heading>
      </section>
      <section className={styles.projectsSection}>
        <Text variant="section">Projects</Text>
        <div className={styles.projects}>
          {projects.map(project => (
            <Project {...project} key={`project_${project.github}`} />
          ))}
        </div>
      </section>
    </>
  )
}
