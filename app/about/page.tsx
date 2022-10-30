import Heading from '../components/Heading'

import styles from './page.module.css'

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
          . I love to create interfaces and design system with React and styled-components.
        </Heading>
      </section>
    </>
  )
}
