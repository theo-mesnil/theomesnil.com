import localFont from 'next/font/local'

const myFont = localFont({ src: './font.ttf' })

import './index.css'

export interface IconProps {
  className?: string
  name:
    | 'arrow-forward'
    | 'css'
    | 'dribbble'
    | 'figma'
    | 'github'
    | 'javascript'
    | 'linkedin'
    | 'mic'
    | 'moon'
    | 'react'
    | 'star'
    | 'sun'
    | 'twitch'
    | 'twitter'
    | 'typescript'
}

export default function Icon({ name, className }: IconProps) {
  return <i className={`icon-${name} ${myFont.className} ${className || ''}`} />
}
