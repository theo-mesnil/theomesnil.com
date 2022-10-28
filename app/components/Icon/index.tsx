import localFont from '@next/font/local'

const myFont = localFont({ src: './font.ttf' })

import './module.css'

interface IconProps {
  name:
    | 'typescript'
    | 'css'
    | 'react'
    | 'figma'
    | 'javascript'
    | 'dribbble'
    | 'github'
    | 'linkedin'
    | 'moon'
    | 'sun'
    | 'twitch'
    | 'twitter'
}

export default function Icon({ name }: IconProps) {
  return <i className={`icon-${name} ${myFont.className}`} />
}
