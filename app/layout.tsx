import { ThemeProvider } from 'next-themes'

import Analytics from './components/Analytics'
import { robotoFont } from './components/Fonts'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './styles/reset.css'
import './styles/theme.css'
import './styles/global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoFont.className} suppressHydrationWarning>
      <head>
        <title>Théo Mesnil _ Senior front-end developer in Paris</title>
        <meta
          name="description"
          content="Hello, i’m Théo :) I’m a front-end developer with over 8 years of experiences
          based in Paris and currently at Welcome to the jungle."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Théo Mesnil" />
        <meta
          property="og:description"
          content="Hello, i’m Théo :) I’m a front-end developer with over 8 years of experiences
          based in Paris and currently at Welcome to the jungle."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/558503992/a06e1611-e929-4af2-9e68-9234a58c14f3"
        />
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@theomesnil" />
        <meta name="twitter:creator" content="@theomesnil" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
