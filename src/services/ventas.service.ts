import { client } from '@/lib/axios'

export const createVenta = async (
  data: CreateVenta
): Promise<ApiResponse<Venta>> => {
  return client.post('/api/ventas', data).then(response => response.data)
}
