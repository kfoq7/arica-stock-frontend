'use client'

import { useRouter } from 'next/navigation'
import { useProducts } from '@/hooks/use-products'
import { useVentaMutation } from '@/hooks/use-venta-mutation'

export function PaymentCard() {
  const router = useRouter()
  const { venta } = useProducts()
  const { mutate } = useVentaMutation()

  const hanldeSubmit = () => {
    mutate(venta)
    router.push('/dasboard')
  }

  return (
    <div className="w-full max-w-md space-y-4 rounded-md bg-white p-6 drop-shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tighter text-gray-800">
          Pago total
        </div>
        <span className="text-lg font-medium text-gray-800">
          {venta?.total}
        </span>
      </div>
      <div className="flex items-center justify-between text-gray-600">
        <div className="text-red-600">Total</div>
        <span className="text-lg font-semibold">$84.15</span>
      </div>

      {/* <div className="flex items-center justify-between text-gray-600">
        <div>Descuentos</div>
        <span className="text-lg">$5.00</span>
      </div> */}

      {/* <div className="flex items-center justify-between text-gray-600">
        <div>Subtotal</div>
        <div className="text-lg">$79.15</div>
      </div> */}

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Agregar pago</h3>
        <div className="mt-2 text-gray-600">Payment</div>
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
