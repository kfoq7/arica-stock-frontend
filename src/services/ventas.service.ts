import { client } from '@/lib/axios'

export const createVenta = async (
  data: CreateVenta
): Promise<ApiResponse<Venta>> => {
  return client.post('/api/ventas', data).then(response => response.data)
}

export const getVentaInfo = async (): Promise<ApiResponse<VentasInfo>> => {
  return client.get('/api/ventas/info').then(response => response.data)
}
