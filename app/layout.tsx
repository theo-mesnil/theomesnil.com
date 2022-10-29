import { Lexend_Deca } from '@next/font/google'

import Analytics from './components/Analytics'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './layout.module.css'

import './styles/reset.css'
import './styles/theme.css'
import './styles/global.css'

const lexendDeca = Lexend_Deca()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lexendDeca.className} data-theme="dark">
      <head>
        <title>Théo Mesnil</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
