import { Roboto, Viga } from 'next/font/google'

export const vigaFont = Viga({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

export const robotoFont = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
})
