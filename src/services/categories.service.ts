import { client } from '@/lib/axios'

export const getCategories = async (): Promise<ApiResponse<Categoria[]>> => {
  return client.get('/api/categorias').then(response => response.data)
}
