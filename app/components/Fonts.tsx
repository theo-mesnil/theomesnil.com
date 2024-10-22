import { Roboto, Viga } from 'next/font/google'

export const vigaFont = Viga({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const robotoFont = Roboto({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})
