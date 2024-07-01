'use client'

import { createContext, useState } from 'react'
import { getCurrentDate } from '@/lib/utils'

interface IVentasContext {
  venta: CreateVenta
  newVenta: () => void
  createNewVenta: (venta: Venta) => void
  updateCurrentVenta: (detalleVentas: DetalleVenta[]) => void
}

export const VentasContext = createContext<IVentasContext | null>(null)

export function VentasProvider({ children }: { children: React.ReactNode }) {
  const [venta, setVenta] = useState<CreateVenta>({
    fecha: getCurrentDate(),
    total: 0,
    detalleVenta: []
  })

  const createNewVenta = (venta: Venta) => {
    setVenta({ ...venta })
  }

  const updateCurrentVenta = (detalleVentas: DetalleVenta[]) => {
    const total = Number(
      detalleVentas
        .reduce((total, detalleVenta) => total + detalleVenta.precio, 0)
        .toFixed(2)
    )

    setVenta({ ...venta, total, detalleVenta: detalleVentas })
  }

  const newVenta = () => {
    setVenta({
      fecha: getCurrentDate(),
      total: 0,
      detalleVenta: []
    })
  }

  return (
    <VentasContext.Provider
      value={{ venta, createNewVenta, newVenta, updateCurrentVenta }}
    >
      {children}
    </VentasContext.Provider>
  )
}
