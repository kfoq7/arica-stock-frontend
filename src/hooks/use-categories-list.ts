import { getCategories } from '@/services/categories.service'
import { useQuery } from '@tanstack/react-query'

export function useCategoriesList() {
  const { data, isLoading } = useQuery({
    queryKey: ['categoria'],
    queryFn: getCategories
  })

  return { data, isLoading }
}
