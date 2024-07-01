'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export function ProductsMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="relative py-2 text-white">
      <div
        onClick={toggleMenu}
        className="w-full cursor-pointer rounded-md px-3 py-2 text-left hover:bg-[#18416e]"
      >
        <div className="flex items-center gap-x-2">
          <ChevronDownIcon className="size-6 fill-white/60" />
          Inventario
        </div>
      </div>
      {isOpen && (
        <div className="w-full rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="/list-products"
              className="block rounded-md px-4 py-2 hover:bg-[#18416e]"
            >
              Productos
            </Link>
            <Link
              href="/list-ventas"
              className="block rounded-md px-4 py-2 hover:bg-[#18416e]"
            >
              Ventas
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
