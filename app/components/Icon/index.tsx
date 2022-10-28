import localFont from '@next/font/local'

const myFont = localFont({ src: './font.woff' })

import './module.css'

interface IconProps {
  name: string
}

export default function Icon({ name }: IconProps) {
  return <i className={`icon-${name} ${myFont.className}`} />
}
