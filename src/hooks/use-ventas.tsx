import { useContext } from 'react'
import { VentasContext } from '@/context/ventas'

export function useVentas() {
  const context = useContext(VentasContext)

  if (context == null) {
    throw new Error('useVentas must be used within a VentasProvider')
  }

  return context
}
