import { Lexend_Deca } from '@next/font/google'

import './reset.css'

const font = Lexend_Deca()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
