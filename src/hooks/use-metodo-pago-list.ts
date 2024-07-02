import { useQuery } from '@tanstack/react-query'
import { getMetodoPago } from '@/services/metodo-pago.service'

export function useMetodoPago() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['metodo-pago'],
    queryFn: getMetodoPago
  })

  return { data, isLoading, error }
}
