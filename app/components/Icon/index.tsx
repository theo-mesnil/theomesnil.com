import localFont from '@next/font/local'

const myFont = localFont({ src: './font.ttf' })

import './index.css'

export interface IconProps {
  name:
    | 'arrow-forward'
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
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  return <i className={`icon-${name} ${myFont.className} ${className || ''}`} />
}
