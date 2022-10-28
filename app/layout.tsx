import { Lexend_Deca } from '@next/font/google'

import Analytics from './components/Analytics'
import Footer from './components/Footer'
import Header from './components/Header'
import Icon from './components/Icon'

import './styles/reset.css'

const font = Lexend_Deca()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${font.className}`}>
      <head>
        <title>Théo Mesnil</title>
      </head>
      <body>
        <Header />
        <main>
          <Icon name="twitter" />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
