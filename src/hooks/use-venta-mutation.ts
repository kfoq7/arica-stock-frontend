import { createVenta } from '@/services/ventas.service'
import { useMutation } from '@tanstack/react-query'

interface Data {
  venta: Venta
}

export function useVentaMutation() {
  const { mutate, data } = useMutation({
    mutationKey: ['venta'],
    mutationFn: (data: CreateVenta) => {
      console.log(data)
      return createVenta(data)
    }
  })

  return { data, mutate }
}
