'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItemProps {
  children: string
  path: string
}

export default function NavigationItem({ path, children }: NavigationItemProps) {
  const pathname = usePathname()

  return (
    <li>
      <Link href={path} aria-current={pathname === path}>
        {children}
      </Link>
    </li>
  )
}
