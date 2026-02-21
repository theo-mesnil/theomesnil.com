'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { vigaFont } from '../Fonts'

interface NavigationItemProps {
  children: string
  path: string
}

export default function NavigationItem({ children, path }: NavigationItemProps) {
  const pathname = usePathname()

  return (
    <li>
      <Link aria-current={pathname === path} className={vigaFont.className} href={path}>
        {children}
      </Link>
    </li>
  )
}
