'use client'

import { useContext } from 'react'
import { InfoCard } from '@/components/info-card'
import { useProductsList } from '@/hooks/use-products-list'
import { UserIcon } from '@heroicons/react/16/solid'
import { AccountModalContext } from '@/components/modals/account-modal'

export default function Dashboard() {
  const { onClose } = useContext(AccountModalContext)
  const { data } = useProductsList()

  return (
    <div className="w-full space-y-10 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-16 rounded-md bg-[#e6acac] p-4 text-center text-4xl">
            J
          </div>
          <span className="flex flex-col justify-center text-4xl font-semibold tracking-tighter">
            Juan
            <span className="text-xl font-normal text-gray-600">Juan</span>
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
          Mejora la Eficiencia de tus Ventas
        </h2>

        <p className="text-gray-700/80">
          Optimiza tu proceso de ventas configurando los detalles del producto
          ahora. Ahorra tiempo y aumenta la productividad automatizando tu flujo
          de trabajo de ventas.
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
