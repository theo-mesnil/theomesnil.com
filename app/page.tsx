import theomesnilImage from '../public/projects/theo-mesnil.png'
import welcomeUiImage from '../public/projects/welcome-ui.png'
import whatToWatchImage from '../public/projects/what-to-watch.png'

import Heading from './components/Heading'
import Project from './components/Project'
import Text from './components/Text'
import styles from './page.module.css'

const projects = [
  {
    name: 'Welcome UI',
    github: 'WTTJ/welcome-ui',
    image: welcomeUiImage,
    description:
      'Customizable design system library made with react, typescript, styled-components and reakit',
  },
  {
    name: 'WatchToWatch',
    github: 'theo-mesnil/WatchToWatch',
    image: whatToWatchImage,
    description:
      'WhatToWatch is the simplest and fastest way to discover movies, series and actors',
  },
  {
    name: 'theomesnil.com',
    github: 'theo-mesnil/theomesnil.com',
    image: theomesnilImage,
    description: 'This website is open source, you can check the code source on github :)',
    withBorder: true,
  },
]

export default function Home() {
  return (
    <>
      <section>
        <Heading title="Senior front-end developer in Paris who likes interfaces 💅">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper aliquam
          condimentum. Fusce eleifend, leo ac sollicitudin blandit, velit libero viverra nulla, vel
          euismod sapien quam nec lectus.
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
