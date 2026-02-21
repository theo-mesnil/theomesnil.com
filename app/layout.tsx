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
    <html className={robotoFont.className} lang="en" suppressHydrationWarning>
      <head>
        <title>Théo Mesnil _ Senior front-end developer in Paris</title>
        <meta
          content="Hello, i’m Théo :) I’m a front-end developer with over 8 years of experiences
          based in Paris and currently at Welcome to the jungle."
          name="description"
        />
        <meta content="website" property="og:type" />
        <meta content="Théo Mesnil" property="og:title" />
        <meta
          content="Hello, i’m Théo :) I’m a front-end developer with over 8 years of experiences
          based in Paris and currently at Welcome to the jungle."
          property="og:description"
        />
        <meta
          content="https://repository-images.githubusercontent.com/558503992/a06e1611-e929-4af2-9e68-9234a58c14f3"
          property="og:image"
        />
        <meta content="width=device-width,minimum-scale=1" name="viewport" />
        <meta content="summary" name="twitter:card" />
        <meta content="@theomesnil" name="twitter:site" />
        <meta content="@theomesnil" name="twitter:creator" />
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
