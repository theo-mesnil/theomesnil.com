import ifttdImage from '../../public/posts/ifttd.jpg'
import mediumWelcomeUIImage from '../../public/posts/medium-welcome-ui.jpeg'
import Heading from '../components/Heading'

import styles from './page.module.css'
import Post from './Post'

const posts = [
  {
    description:
      'Les D.E.V. de la semaine sont Théo Mesnil, Mickael Le Ralec, tous deux front-end développeur chez Welcome to the jungle. Ils viennent nous parler du design system open source qu’ils ont créé. De la même manière qu’il y a 10 ans Bootstrap permettait à des dev peu familier avec le front de créer des sites responsives facilement, Welcome UI permet aux devs front n’ayant pas encore de design system de partir d’une base solide et complète. Théo et Mickael nous racontent comment le projet s’est construit, où il en est et ce qui est prévu pour la suite. Nous discutons aussi de l’approche Open Source et des impacts positifs sur le recrutement et l’on-boarding.',
    date: '06.06.2022',
    image: ifttdImage,
    isPodcast: true,
    isFrench: true,
    name: 'S’ouvrir au design system',
    time: '1h03',
    url: 'https://ifttd.io/welcome-ui/',
  },
  {
    description:
      'In this article we are going to tell you the story of how we ended up creating our own design system at Welcome to the Jungle (WTTJ). It’s quite an interesting journey that began in 2019, at a time when we were about to create a new product called Welcome Home, a people and company map. Up until then, the company only had two products — our main website welcometothejungle.com, where job offers are displayed and candidates can apply, and Welcome Kit, our applicant tracking system (ATS) for recruiters. We were already sharing design components between the two projects but we were light years away from a design system at this point.',
    date: '30.03.2022',
    image: mediumWelcomeUIImage,
    name: 'How we implemented our open-source design system',
    time: '12 min read',
    url: 'https://medium.com/wttj-tech/how-we-implemented-our-open-source-design-system-8811799dee05',
  },
]

export default function Blog() {
  return (
    <section>
      <Heading title="Last content" />
      <div className={styles.posts}>
        {posts.map(post => (
          <Post {...post} key={`post_${post.date}`} />
        ))}
      </div>
    </section>
  )
}
