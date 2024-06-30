'use client'

import { useContext } from 'react'
import { InfoCard } from '@/components/info-card'
import { useProductsList } from '@/hooks/use-products-list'
import { UserIcon } from '@heroicons/react/16/solid'
import { AccountModalContext } from '@/components/account-modal'

export default function Dashboard() {
  const { onClose } = useContext(AccountModalContext)
  const { data } = useProductsList()

  return (
    <div className="w-full space-y-10 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-16 rounded-md bg-[#e6acac] p-4 text-center text-4xl">
            F
          </div>
          <span className="flex flex-col justify-center text-4xl font-semibold tracking-tighter">
            Fabrizio
            <span className="text-xl font-normal text-gray-600">Fabrizio</span>
          </span>
        </div>

        <button
          className="flex items-center gap-x-1 rounded-lg border border-gray-400/40 bg-transparent px-2 py-1"
          onClick={onClose}
        >
          <UserIcon className="size-4" />
          Gestionar cuenta
        </button>
      </div>

      <div className="w-full rounded-md bg-[#ebf3ff] px-3 py-5">
        <h2 className="text-xl font-semibold tracking-tighter">
          Set details now, savetime later
        </h2>

        <p>
          Fast track filling forms using 1Password to fill your personal
          andpaymet details.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <InfoCard
          title="Productos Registrados"
          value={`${data?.data.length}`}
        />
        <InfoCard
          title="Total Compras"
          value="S./2,556.58"
          className="border-yellow-400"
        />
        <InfoCard
          title="Total ventas"
          value="S./108.50"
          className="border-red-400"
        />
        <InfoCard
          title="Ventas del Día"
          value="S./108.5"
          className="border-blue-400"
        />
      </div>
    </div>
  )
}
