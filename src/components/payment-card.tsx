'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Select } from './select'
import { useProducts } from '@/hooks/use-products'
import { useVentaMutation } from '@/hooks/use-venta-mutation'
import { useMetodoPago } from '@/hooks/use-metodo-pago-list'

export function PaymentCard() {
  const router = useRouter()
  const [vuelto, setVuelto] = useState(0)
  const { venta } = useProducts()
  const { data, isLoading } = useMetodoPago()
  const { mutate } = useVentaMutation()

  const hanldeSubmit = () => {
    mutate(venta)
    router.push('/dasboard')
  }

  const calculteVuelto = (incoming: number) => {
    setVuelto(Number((incoming - Number(venta.total)).toFixed(2)))
  }

  return (
    <div className="w-full max-w-md space-y-4 rounded-md bg-white p-6 drop-shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tighter text-gray-800">
          Pago total
        </div>
        <span className="text-lg font-medium text-gray-800">
          S/.{venta?.total}
        </span>
      </div>

      {/* <div className="flex items-center justify-between text-gray-600">
        <div>Descuentos</div>
        <span className="text-lg">$5.00</span>
      </div> */}

      {/* <div className="flex items-center justify-between text-gray-600">
        <div>Subtotal</div>
        <div className="text-lg">$79.15</div>
      </div> */}

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">Agregar pago</h3>
        <div className="text-gray-600">Seleccionar método de pago:</div>

        <Select
          options={data?.data.map(({ id, nombre }) => ({
            label: nombre,
            value: id
          }))}
          isLoading={isLoading}
          className="mt-2 w-full"
        />

        <div className="py-2">
          <label className="text-lg font-semibold tracking-tighter text-gray-800">
            Efectivo recibido
          </label>
          <div className="text-lg font-medium text-gray-800">
            <input
              className="w-full rounded-md border border-gray-700/40 px-2 py-1 outline-none"
              onChange={e => calculteVuelto(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <div className="text-red-600">Vuelto</div>
          <span className="text-lg font-semibold">S/.{vuelto}</span>
        </div>
      </div>

      <button
        onClick={hanldeSubmit}
        className="mt-6 flex w-full items-center justify-center gap-x-1 rounded-lg border border-gray-300 bg-blue-500 px-3 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Confirmar pago
      </button>
    </div>
  )
}
