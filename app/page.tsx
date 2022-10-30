import Heading from './components/Heading'
import Text from './components/Text'
import styles from './page.module.css'

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
      </section>
    </>
  )
}
