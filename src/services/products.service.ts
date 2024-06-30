import { client } from '@/lib/axios'

export const getProducts = async (): Promise<ApiResponse<Producto[]>> => {
  return client.get('/api/productos').then(response => response.data)
}
