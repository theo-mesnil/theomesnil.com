'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { vigaFont } from '../Fonts'

interface NavigationItemProps {
  children: string
  path: string
}

export default function NavigationItem({ path, children }: NavigationItemProps) {
  const pathname = usePathname()

  return (
    <li>
      <Link href={path} aria-current={pathname === path} className={vigaFont.className}>
        {children}
      </Link>
    </li>
  )
}
