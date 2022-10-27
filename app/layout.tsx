import { Lexend_Deca } from '@next/font/google'

import './styles/globals.css'

const font = Lexend_Deca()

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
