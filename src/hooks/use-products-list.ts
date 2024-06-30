import { getProducts } from '@/services/products.service'
import { useQuery } from '@tanstack/react-query'

export function useProductsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return { data, isLoading, error }
}
