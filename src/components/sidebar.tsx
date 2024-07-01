'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'
import { ProfileMenu } from './profile-menu'
import { ProductsMenu } from './products-menu'

const links = [
  {
    page: 'Home',
    to: '/dashboard',
    icon: <HomeIcon className="size-4" />
  },
  {
    page: 'Nueva venta',
    to: '/new-sale',
    icon: <ShoppingCartIcon className="size-4" />
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-screen bg-gradient-to-t from-[#203040] from-70% to-[#283a4d] p-1 text-white">
      <ProfileMenu />

      <nav className="flex flex-col gap-y-1 p-2 text-white">
        {links.map(({ page, to, icon }) => (
          <Link
            key={page}
            href={to}
            className={cn(
              'flex items-center gap-x-2 rounded-md px-3 py-2 hover:bg-[#18416e]',
              {
                'bg-[#214a75] hover:bg-[#214a75]': pathname === to
              }
            )}
          >
            {icon}
            {page}
          </Link>
        ))}
      </nav>

      <ProductsMenu />
    </aside>
  )
}
