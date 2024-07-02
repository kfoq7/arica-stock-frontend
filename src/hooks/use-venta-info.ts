import { useQuery } from '@tanstack/react-query'
import { getVentaInfo } from '@/services/ventas.service'

export function useVentaInfo() {
  const { data, error } = useQuery({
    queryKey: ['venta-info'],
    queryFn: getVentaInfo
  })

  return { data, error }
}
