import { client } from '@/lib/axios'

export const getMetodoPago = async (): Promise<ApiResponse<MetodoPago[]>> => {
  return client.get('/api/metodo-pago').then(response => response.data)
}
